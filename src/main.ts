import { Plugin, Notice, TFile, TFolder, TAbstractFile } from "obsidian";
import { OmniExportSettingTab, DEFAULT_SETTINGS, type OmniExportSettings } from "./settings";
import { generateSingleFileHTML } from "./exporter";
import { t } from "./i18n";
import { checkUpdate } from "./updater";

export default class OmniExportPlugin extends Plugin {
	settings: OmniExportSettings;

	async onload() {
		await this.loadSettings();

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

		// 注册设置面板
		this.addSettingTab(new OmniExportSettingTab(this.app, this));

		// 自动检测更新
		if (this.settings.autoUpdate) {
			this.checkForUpdate();
		}

		console.log(`[OmniExport] Plugin loaded, lang=${this.settings.lang}`);
	}

	async exportCurrentNote() {
		const file = this.app.workspace.getActiveFile();
		if (!file) {
			new Notice(t("exportFail", this.settings.lang));
			return;
		}

		new Notice(t("exporting", this.settings.lang));

		try {
			const content = await this.app.vault.read(file);
			const rendered = await this.renderMarkdown(content, file);
			const html = generateSingleFileHTML({
				title: file.basename,
				content: rendered,
				settings: this.settings,
				lang: this.settings.lang,
				modifyDate: file.stat.mtime ? new Date(file.stat.mtime).toLocaleDateString(this.settings.lang === "zh" ? "zh-CN" : "en-US") : undefined,
			});

			const outputPath = this.getOutputPath(file);
			await this.saveHTML(outputPath, html);
			new Notice(t("exportSuccess", this.settings.lang));
		} catch (e) {
			console.error(e);
			new Notice(t("exportFail", this.settings.lang));
		}
	}

	async exportVault() {
		new Notice(t("exporting", this.settings.lang));

		const files = this.app.vault.getMarkdownFiles();
		let count = 0;

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
				console.error(`Failed to export ${file.path}:`, e);
			}
		}

		new Notice(t("exportComplete", this.settings.lang, { count }));
	}

	private async renderMarkdown(content: string, file: TFile): Promise<string> {
		// 使用 Obsidian 内置的 Markdown 渲染器
		return await this.app.markdownProcessor.process(content, {
			sourcePath: file.path,
		});
	}

	private getOutputPath(file: TFile): string {
		if (this.settings.outputPath) {
			return `${this.settings.outputPath}/${file.basename}.html`;
		}
		return file.path.replace(/\.md$/, ".html");
	}

	private async saveHTML(path: string, html: string): Promise<void> {
		// 确保目录存在
		const dir = path.substring(0, path.lastIndexOf("/"));
		if (dir) {
			const folder = this.app.vault.getAbstractFileByPath(dir);
			if (!folder) {
				await this.app.vault.createFolder(dir);
			}
		}

		const existing = this.app.vault.getAbstractFileByPath(path);
		if (existing) {
			await this.app.vault.modify(existing as TFile, html);
		} else {
			await this.app.vault.create(path, html);
		}
	}

	private async checkForUpdate() {
		try {
			const result = await checkUpdate(this.manifest.version);
			if (result.hasUpdate) {
				new Notice(t("updateAvailable", this.settings.lang, { version: result.latestVersion }));
			}
		} catch (e) {
			// 静默失败
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
