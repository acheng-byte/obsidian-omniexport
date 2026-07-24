import { App, PluginSettingTab, Setting } from "obsidian";
import type OmniExportPlugin from "./main";
import { t, type Lang } from "./i18n";
import { FolderPickerModal } from "./folderPicker";

export interface OmniExportSettings {
	lang: Lang;
	theme: "light" | "dark" | "auto";
	exportTheme: "default" | "gongwen" | "report" | "presentation" | "engineering" | "sales";
	embedAssets: boolean;
	interactive: boolean;
	renderMermaid: boolean;
	renderMath: boolean;
	codeHighlight: boolean;
	seo: boolean;
	outputPath: string;
	autoUpdate: boolean;
}

export const DEFAULT_SETTINGS: OmniExportSettings = {
	lang: "zh",
	theme: "auto",
	exportTheme: "default",
	embedAssets: true,
	interactive: false,
	renderMermaid: false,
	renderMath: false,
	codeHighlight: false,
	seo: false,
	outputPath: "",
	autoUpdate: true,
};

export class OmniExportSettingTab extends PluginSettingTab {
	plugin: OmniExportPlugin;

	constructor(app: App, plugin: OmniExportPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		const lang = this.plugin.settings.lang;

		containerEl.createEl("h2", { text: t("settingsTitle", lang) });

		new Setting(containerEl)
			.setName(t("settingsLanguage", lang))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("zh", "中文")
					.addOption("en", "English")
					.setValue(lang)
					.onChange(async (value) => {
						this.plugin.settings.lang = value as Lang;
						await this.plugin.saveSettings();
						this.display();
					})
			);

		new Setting(containerEl)
			.setName(t("settingsTheme", lang))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("light", t("settingsThemeLight", lang))
					.addOption("dark", t("settingsThemeDark", lang))
					.addOption("auto", t("settingsThemeAuto", lang))
					.setValue(this.plugin.settings.theme)
					.onChange(async (value) => {
						this.plugin.settings.theme = value as "light" | "dark" | "auto";
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName(t("settingsExportTheme", lang))
			.setDesc(t("settingsExportThemeDesc", lang))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("default", t("themeDefault", lang))
					.addOption("gongwen", t("themeGongwen", lang))
					.addOption("report", t("themeReport", lang))
					.addOption("presentation", t("themePresentation", lang))
					.addOption("engineering", t("themeEngineering", lang))
					.addOption("sales", t("themeSales", lang))
					.setValue(this.plugin.settings.exportTheme)
					.onChange(async (value) => {
						this.plugin.settings.exportTheme = value as "default" | "gongwen" | "report" | "presentation" | "engineering" | "sales";
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName(t("settingsEmbedAssets", lang))
			.setDesc(t("settingsEmbedDesc", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.embedAssets).onChange(async (value) => {
					this.plugin.settings.embedAssets = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsInteractive", lang))
			.setDesc(t("settingsInteractiveDesc", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.interactive).onChange(async (value) => {
					this.plugin.settings.interactive = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsMermaid", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.renderMermaid).onChange(async (value) => {
					this.plugin.settings.renderMermaid = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsMath", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.renderMath).onChange(async (value) => {
					this.plugin.settings.renderMath = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsCodeHighlight", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.codeHighlight).onChange(async (value) => {
					this.plugin.settings.codeHighlight = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsSEO", lang))
			.setDesc(t("settingsSEODesc", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.seo).onChange(async (value) => {
					this.plugin.settings.seo = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsOutputPath", lang))
			.setDesc(t("settingsOutputDesc", lang))
			.addText((text) =>
				text
					.setPlaceholder(t("outputPathPlaceholder", lang))
					.setValue(this.plugin.settings.outputPath)
					.onChange(async (value) => {
						this.plugin.settings.outputPath = value;
						await this.plugin.saveSettings();
					})
			)
			.addButton((btn) =>
				btn
					.setIcon("folder")
					.setTooltip(t("chooseFolder", lang))
					.onClick(() => {
						const modal = new FolderPickerModal(this.app, async (path) => {
							this.plugin.settings.outputPath = path;
							await this.plugin.saveSettings();
							this.display();
						});
						modal.open();
					})
			);

		new Setting(containerEl)
			.setName(t("settingsAutoUpdate", lang))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.autoUpdate).onChange(async (value) => {
					this.plugin.settings.autoUpdate = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName(t("settingsCheckUpdate", lang))
			.setDesc(`${t("settingsCurrentVersion", lang)}: ${this.plugin.manifest.version}`)
			.addButton((btn) =>
				btn
					.setButtonText(t("settingsCheckUpdateBtn", lang))
					.onClick(async () => {
						btn.setDisabled(true);
						btn.setButtonText(t("updateCheck", lang));
						try {
							const { checkUpdate } = await import("./updater");
							const result = await checkUpdate(this.plugin.manifest.version);
							if (result.hasUpdate) {
								btn.setButtonText(`${t("updateAvailable", lang, { version: result.latestVersion })}`);
								window.open(result.releaseUrl, "_blank");
								new Notice(t("updateAvailable", lang, { version: result.latestVersion }));
							} else {
								btn.setButtonText(t("updateLatest", lang));
								new Notice(t("updateLatest", lang));
							}
						} catch {
							btn.setButtonText(t("updateFail", lang));
							new Notice(t("updateFail", lang));
						}
						setTimeout(() => {
							btn.setDisabled(false);
							btn.setButtonText(t("settingsCheckUpdateBtn", lang));
						}, 3000);
					})
			);
	}
}
