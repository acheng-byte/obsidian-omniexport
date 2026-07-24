import { Plugin, Notice, TFile, TFolder, MarkdownRenderer, Component } from "obsidian";
import { OmniExportSettingTab, DEFAULT_SETTINGS, type OmniExportSettings } from "./settings";
import { generateSingleFileHTML, PLUGIN_VERSION } from "./exporter";
import { t } from "./i18n";
import { checkUpdate, installUpdate } from "./updater";
import { Logger } from "./logger";

/** 非法文件名字符（Windows + macOS + Obsidian 限制） */
const ILLEGAL_CHARS = /[\\/:*?"<>|\x00-\x1f]/g;

/** 可导出的文件类型 */
type FileCategory = "markdown" | "text" | "image" | "audio" | "other";

export default class OmniExportPlugin extends Plugin {
	settings: OmniExportSettings;
	logger: Logger;

	async onload() {
		await this.loadSettings();
		this.logger = new Logger(this.settings.lang);
		this.logger.info(`Plugin loaded v${PLUGIN_VERSION}`);

		this.addCommand({
			id: "export-current-note",
			name: t("cmdExportCurrent", this.settings.lang),
			callback: () => this.exportCurrentNote(),
		});

		this.addCommand({
			id: "export-vault",
			name: t("cmdExportVault", this.settings.lang),
			callback: () => this.exportVault(),
		});

		this.addCommand({
			id: "check-update",
			name: t("cmdCheckUpdate", this.settings.lang),
			callback: () => this.manualCheckUpdate(),
		});

		this.addCommand({
			id: "show-log",
			name: t("cmdShowLog", this.settings.lang),
			callback: () => this.showLogModal(),
		});

		this.addSettingTab(new OmniExportSettingTab(this.app, this));

		if (this.settings.autoUpdate) {
			this.checkForUpdate();
		}
	}

	/* ========== 文件类型识别 ========== */

	private categorizeFile(file: TFile): FileCategory {
		const ext = file.extension.toLowerCase();
		if (ext === "md") return "markdown";
		if (["txt", "text", "log", "csv", "json", "yaml", "yml"].includes(ext)) return "text";
		if (["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp", "ico"].includes(ext)) return "image";
		if (["mp3", "wav", "ogg", "flac", "aac", "m4a", "wma"].includes(ext)) return "audio";
		return "other";
	}

	/** 根据文件类型生成 HTML 内容 */
	private async renderFileContent(file: TFile): Promise<string> {
		const category = this.categorizeFile(file);

		switch (category) {
			case "markdown": {
				const content = await this.app.vault.read(file);
				return await this.renderMarkdown(content, file);
			}
			case "text": {
				const content = await this.app.vault.read(file);
				// TXT 文件：保留换行，转义 HTML
				const escaped = content
					.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;");
				return `<pre style="white-space:pre-wrap;word-wrap:break-word;font-family:var(--font);">${escaped}</pre>`;
			}
			case "image": {
				// 图片：生成 img 标签，使用 Obsidian 内部链接
				const url = this.app.vault.getResourcePath(file);
				return `<figure>
<img src="${url}" alt="${file.name}" style="max-width:100%;height:auto;">
<figcaption>${file.name}</figcaption>
</figure>`;
			}
			case "audio": {
				// 音频：生成 audio 播放器
				const url = this.app.vault.getResourcePath(file);
				return `<div class="audio-player">
<p>🎵 ${file.name}</p>
<audio controls src="${url}" style="width:100%;">Your browser does not support audio.</audio>
</div>`;
			}
			default:
				return `<p style="color:var(--text-secondary);">[${t("unsupportedFile", this.settings.lang)}: ${file.name}]</p>`;
		}
	}

	/* ========== 导出单文件 ========== */

	async exportCurrentNote() {
		this.logger.clear();
		this.logger.info(t("exportSingle", this.settings.lang));

		const file = this.app.workspace.getActiveFile();
		if (!file) {
			this.logger.warn(t("noActiveFile", this.settings.lang));
			new Notice(t("exportFail", this.settings.lang));
			this.showLogModal();
			return;
		}

		const category = this.categorizeFile(file);
		this.logger.info(`${t("exporting", this.settings.lang)} ${file.path} [${category}]`);
		new Notice(t("exporting", this.settings.lang));

		try {
			const rendered = await this.renderFileContent(file);
			this.logger.info(`File rendered (${category})`);

			const html = generateSingleFileHTML({
				title: file.basename,
				content: rendered,
				settings: this.settings,
				lang: this.settings.lang,
				modifyDate: file.stat.mtime
					? new Date(file.stat.mtime).toLocaleDateString(this.settings.lang === "zh" ? "zh-CN" : "en-US")
					: undefined,
			});
			this.logger.info(`HTML generated (${html.length} chars)`);

			const outputPath = this.getOutputPath(file);
			this.logger.info(`Output: ${outputPath}`);

			await this.saveHTML(outputPath, html);
			this.logger.success(t("exportSuccess", this.settings.lang));
			new Notice(t("exportSuccess", this.settings.lang));
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			this.logger.error(`Export failed: ${msg}`);
			new Notice(`${t("exportFail", this.settings.lang)}: ${msg}`);
		}
	}

	/* ========== 批量导出 ========== */

	async exportVault() {
		this.logger.clear();
		this.logger.info(t("exportBatch", this.settings.lang));
		new Notice(t("exporting", this.settings.lang));

		const allFiles = this.app.vault.getFiles();
		// 过滤可导出的文件
		const exportable = allFiles.filter(f => {
			const cat = this.categorizeFile(f);
			return cat !== "other";
		});

		this.logger.info(`Found ${exportable.length} exportable files (${allFiles.length} total)`);
		let count = 0;
		let failCount = 0;
		let skipCount = 0;

		for (const file of exportable) {
			try {
				const rendered = await this.renderFileContent(file);
				const html = generateSingleFileHTML({
					title: file.basename,
					content: rendered,
					settings: this.settings,
					lang: this.settings.lang,
				});

				const outputPath = this.getOutputPath(file);
				await this.saveHTML(outputPath, html);
				count++;
			} catch (e) {
				failCount++;
				const msg = e instanceof Error ? e.message : String(e);
				this.logger.error(`Failed: ${file.path} - ${msg}`);
			}
		}

		skipCount = allFiles.length - exportable.length;
		const summary = `${t("exportComplete", this.settings.lang, { count })}${failCount > 0 ? `, ${failCount} failed` : ""}${skipCount > 0 ? `, ${skipCount} skipped` : ""}`;
		this.logger.success(summary);
		new Notice(t("exportComplete", this.settings.lang, { count }));
	}

	/* ========== 渲染 Markdown ========== */

	private async renderMarkdown(content: string, file: TFile): Promise<string> {
		const container = document.createElement("div");
		try {
			await MarkdownRenderer.renderMarkdown(
				content,
				container,
				file.path,
				new Component()
			);
			return container.innerHTML;
		} finally {
			container.remove();
		}
	}

	/* ========== 路径处理 ========== */

	/** 过滤非法文件名字符 */
	private sanitizeFilename(name: string): string {
		return name.replace(ILLEGAL_CHARS, "_").replace(/_+/g, "_").trim();
	}

	private getOutputPath(file: TFile): string {
		const safeName = this.sanitizeFilename(file.basename);
		if (this.settings.outputPath) {
			return `${this.settings.outputPath}/${safeName}.html`;
		}
		// 替换原始扩展名为 .html
		const dir = file.path.substring(0, file.path.lastIndexOf("/"));
		return dir ? `${dir}/${safeName}.html` : `${safeName}.html`;
	}

	private async saveHTML(path: string, html: string): Promise<void> {
		const normalizedPath = path.replace(/\\/g, "/");
		const lastSlash = normalizedPath.lastIndexOf("/");
		const dir = lastSlash > 0 ? normalizedPath.substring(0, lastSlash) : "";

		if (dir) {
			const folder = this.app.vault.getAbstractFileByPath(dir);
			if (!folder) {
				await this.app.vault.createFolder(dir);
				this.logger.info(`Created folder: ${dir}`);
			}
		}

		const existing = this.app.vault.getAbstractFileByPath(normalizedPath);
		if (existing && existing instanceof TFile) {
			await this.app.vault.modify(existing, html);
		} else {
			await this.app.vault.create(normalizedPath, html);
		}
	}

	/* ========== 日志弹窗（带过滤 + 红色错误） ========== */

	private showLogModal() {
		const { app, logger, settings } = this;
		const lang = settings.lang;

		const modal = document.createElement("div");
		modal.className = "omniexport-log-modal";

		const renderLogContent = (filter: "all" | "error") => {
			const text = filter === "error" ? logger.getErrorText() : logger.getText();
			return text || t("logEmpty", lang);
		};

		let currentFilter: "all" | "error" = "error"; // 默认只显示错误

		modal.innerHTML = `
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${t("logTitle", lang)}</h3>
					<div style="display:flex;gap:8px;align-items:center;">
						<button class="omniexport-log-btn omniexport-log-filter" style="font-size:0.8rem;">
							${t("logFilterErrors", lang)}
						</button>
						<button class="omniexport-log-close">&times;</button>
					</div>
				</div>
				<div class="omniexport-log-body">
					<div class="omniexport-log-text">${formatLogHTML(renderLogContent(currentFilter), logger)}</div>
				</div>
				<div class="omniexport-log-actions">
					<button class="omniexport-log-btn omniexport-log-copy">${t("logCopy", lang)}</button>
					<button class="omniexport-log-btn omniexport-log-export">${t("logExport", lang)}</button>
					<button class="omniexport-log-btn omniexport-log-clear">${t("logClear", lang)}</button>
				</div>
			</div>
		`;

		document.body.appendChild(modal);

		// 关闭
		const close = () => modal.remove();
		modal.querySelector(".omniexport-log-close")!.addEventListener("click", close);
		modal.querySelector(".omniexport-log-overlay")!.addEventListener("click", close);

		// 过滤切换
		const filterBtn = modal.querySelector(".omniexport-log-filter")!;
		const logTextEl = modal.querySelector(".omniexport-log-text")!;
		filterBtn.addEventListener("click", () => {
			currentFilter = currentFilter === "error" ? "all" : "error";
			filterBtn.textContent = currentFilter === "error"
				? t("logFilterErrors", lang)
				: t("logFilterAll", lang);
			filterBtn.classList.toggle("active", currentFilter === "all");
			logTextEl.innerHTML = formatLogHTML(renderLogContent(currentFilter), logger);
		});

		// 复制
		modal.querySelector(".omniexport-log-copy")!.addEventListener("click", async () => {
			const ok = await logger.copyToClipboard();
			new Notice(ok ? t("logCopied", lang) : t("logCopyFail", lang));
		});

		// 导出
		modal.querySelector(".omniexport-log-export")!.addEventListener("click", async () => {
			const vaultName = app.vault.getName();
			const filename = await logger.exportToTXT(vaultName);
			new Notice(`${t("logExported", lang)}: ${filename}`);
		});

		// 清空
		modal.querySelector(".omniexport-log-clear")!.addEventListener("click", () => {
			logger.clear();
			logTextEl.innerHTML = t("logEmpty", lang);
		});
	}

	/* ========== 更新检测 ========== */

	private async checkForUpdate() {
		try {
			const result = await checkUpdate(this.manifest.version);
			if (result.hasUpdate) {
				this.logger.info(`Update available: ${result.latestVersion}`);
				new Notice(t("updateAvailable", this.settings.lang, { version: result.latestVersion }));
			}
		} catch (e) {
			// 静默失败
		}
	}

	private async manualCheckUpdate() {
		new Notice(t("updateCheck", this.settings.lang));
		try {
			const result = await checkUpdate(this.manifest.version);
			if (result.hasUpdate) {
				new Notice(t("updateAvailable", this.settings.lang, { version: result.latestVersion }));
				await installUpdate(result, this.manifest.dir, this.settings.lang);
			} else {
				new Notice(t("updateLatest", this.settings.lang));
			}
		} catch (e) {
			new Notice(t("updateFail", this.settings.lang));
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

/** 格式化日志为 HTML（错误红色） */
function formatLogHTML(text: string, logger: Logger): string {
	if (!text) return "";
	const lines = text.split("\n");
	return lines.map(line => {
		if (line.includes("[ERROR]") || line.includes("[错误]")) {
			return `<span style="color:#ef4444;font-weight:600;">${escapeHtml(line)}</span>`;
		}
		if (line.includes("[WARN]") || line.includes("[警告]")) {
			return `<span style="color:#f59e0b;">${escapeHtml(line)}</span>`;
		}
		if (line.includes("[OK]") || line.includes("[成功]")) {
			return `<span style="color:#22c55e;">${escapeHtml(line)}</span>`;
		}
		return escapeHtml(line);
	}).join("<br>");
}

function escapeHtml(str: string): string {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
