import { Plugin, Notice, TFile, MarkdownRenderer, Component } from "obsidian";
import { OmniExportSettingTab, DEFAULT_SETTINGS, type OmniExportSettings } from "./settings";
import { generateSingleFileHTML } from "./exporter";
import { t } from "./i18n";
import { checkUpdate, installUpdate } from "./updater";
import { Logger } from "./logger";

export default class OmniExportPlugin extends Plugin {
	settings: OmniExportSettings;
	logger: Logger;

	async onload() {
		await this.loadSettings();
		this.logger = new Logger(this.settings.lang);
		this.logger.info("Plugin loaded");

		// 注册命令
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

		// 注册设置面板
		this.addSettingTab(new OmniExportSettingTab(this.app, this));

		// 自动检测更新
		if (this.settings.autoUpdate) {
			this.checkForUpdate();
		}
	}

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

		this.logger.info(`${t("exporting", this.settings.lang)} ${file.path}`);
		new Notice(t("exporting", this.settings.lang));

		try {
			const content = await this.app.vault.read(file);
			this.logger.info(`Read ${content.length} chars`);

			const rendered = await this.renderMarkdown(content, file);
			this.logger.info("Markdown rendered");

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

	async exportVault() {
		this.logger.clear();
		this.logger.info(t("exportBatch", this.settings.lang));
		new Notice(t("exporting", this.settings.lang));

		const files = this.app.vault.getMarkdownFiles();
		this.logger.info(`Found ${files.length} markdown files`);
		let count = 0;
		let failCount = 0;

		for (const file of files) {
			try {
				const content = await this.app.vault.read(file);
				const rendered = await this.renderMarkdown(content, file);
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

		this.logger.success(`${t("exportComplete", this.settings.lang, { count })}${failCount > 0 ? `, ${failCount} failed` : ""}`);
		new Notice(t("exportComplete", this.settings.lang, { count }));
	}

	/**
	 * 修复：使用 MarkdownRenderer.renderMarkdown 正确渲染
	 */
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

	/**
	 * 修复：兼容 Windows 路径分隔符
	 */
	private getOutputPath(file: TFile): string {
		if (this.settings.outputPath) {
			return `${this.settings.outputPath}/${file.basename}.html`;
		}
		return file.path.replace(/\.md$/i, ".html");
	}

	/**
	 * 修复：兼容 Windows 路径，正确处理目录创建
	 */
	private async saveHTML(path: string, html: string): Promise<void> {
		// 兼容 Windows 路径
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

	/** 显示日志弹窗 */
	private showLogModal() {
		const { app, logger, settings } = this;
		const lang = settings.lang;

		const modal = document.createElement("div");
		modal.className = "omniexport-log-modal";
		modal.innerHTML = `
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${t("logTitle", lang)}</h3>
					<button class="omniexport-log-close">&times;</button>
				</div>
				<div class="omniexport-log-body">
					<pre class="omniexport-log-text">${logger.getText() || t("logEmpty", lang)}</pre>
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
			modal.querySelector(".omniexport-log-text")!.textContent = t("logEmpty", lang);
		});
	}

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
