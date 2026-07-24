/**
 * 国际化 / Internationalization
 * 默认中文，支持中英文切换
 */

export type Lang = "zh" | "en";

const strings: Record<Lang, Record<string, string>> = {
	zh: {
		// 插件名
		pluginName: "万能导出",
		// 命令
		cmdExportCurrent: "导出当前笔记为 HTML",
		cmdExportVault: "批量导出整个仓库",
		// 设置
		settingsTitle: "万能导出设置",
		settingsLanguage: "语言 / Language",
		settingsTheme: "导出主题",
		settingsThemeLight: "浅色",
		settingsThemeDark: "深色",
		settingsThemeAuto: "跟随系统",
		settingsEmbedAssets: "内嵌资源（单文件模式）",
		settingsEmbedDesc: "将 CSS、JS、图片全部内嵌到 HTML 中，生成一个独立的 .html 文件",
		settingsInteractive: "交互式功能",
		settingsInteractiveDesc: "启用折叠块、目录导航、搜索、暗色/亮色切换",
		settingsMermaid: "渲染 Mermaid 图表",
		settingsMath: "渲染数学公式",
		settingsCodeHighlight: "代码语法高亮",
		settingsSEO: "SEO 与社交卡片",
		settingsSEODesc: "自动生成 Open Graph 标签，分享到微信/推特时显示预览",
		settingsOutputPath: "输出目录",
		settingsOutputDesc: "留空则输出到笔记同目录",
		settingsAutoUpdate: "自动检测更新",
		// 导出
		exportSuccess: "导出成功",
		exportFail: "导出失败",
		exporting: "正在导出...",
		exportSingle: "单文件导出",
		exportBatch: "批量导出",
		exportComplete: "导出完成，共 {count} 个文件",
		// 更新
		updateAvailable: "发现新版本 {version}，点击更新",
		updateCheck: "检查更新",
		updateLatest: "已是最新版本",
		updateDownloading: "正在下载更新...",
		updateManualInstall: "请前往 Release 页面下载并手动安装",
		updateNoAsset: "未找到更新文件",
		updateFail: "更新失败",
		cmdCheckUpdate: "检查插件更新",
		// 平台
		platformWechat: "微信公众号",
		platformZhihu: "知乎",
		platformMedium: "Medium",
		platformWordPress: "WordPress",
		platformCopy: "复制 HTML",
		platformDownload: "下载 HTML",
		// 日志
		cmdShowLog: "查看导出日志",
		logTitle: "导出日志",
		logEmpty: "暂无日志",
		logCopy: "复制",
		logExport: "导出 TXT",
		logClear: "清空",
		logCopied: "日志已复制到剪贴板",
		logCopyFail: "复制失败，请手动复制",
		logExported: "日志已导出",
		noActiveFile: "没有打开的笔记",
	},
	en: {
		pluginName: "OmniExport",
		cmdExportCurrent: "Export current note as HTML",
		cmdExportVault: "Batch export entire vault",
		settingsTitle: "OmniExport Settings",
		settingsLanguage: "Language",
		settingsTheme: "Export Theme",
		settingsThemeLight: "Light",
		settingsThemeDark: "Dark",
		settingsThemeAuto: "Auto",
		settingsEmbedAssets: "Embed assets (single-file mode)",
		settingsEmbedDesc: "Embed CSS, JS, and images into HTML, generating a standalone .html file",
		settingsInteractive: "Interactive features",
		settingsInteractiveDesc: "Enable collapsible blocks, TOC navigation, search, dark/light toggle",
		settingsMermaid: "Render Mermaid diagrams",
		settingsMath: "Render math formulas",
		settingsCodeHighlight: "Code syntax highlighting",
		settingsSEO: "SEO & social cards",
		settingsSEODesc: "Auto-generate Open Graph tags for WeChat/Twitter sharing previews",
		settingsOutputPath: "Output directory",
		settingsOutputDesc: "Leave empty to output alongside the note",
		settingsAutoUpdate: "Auto-check for updates",
		exportSuccess: "Export successful",
		exportFail: "Export failed",
		exporting: "Exporting...",
		exportSingle: "Single file export",
		exportBatch: "Batch export",
		exportComplete: "Export complete, {count} files",
		updateAvailable: "New version {version} available, click to update",
		updateCheck: "Check for updates",
		updateLatest: "Already up to date",
		updateDownloading: "Downloading update...",
		updateManualInstall: "Please go to Release page to download and install manually",
		updateNoAsset: "No update file found",
		updateFail: "Update failed",
		cmdCheckUpdate: "Check for plugin updates",
		platformWechat: "WeChat",
		platformZhihu: "Zhihu",
		platformMedium: "Medium",
		platformWordPress: "WordPress",
		platformCopy: "Copy HTML",
		platformDownload: "Download HTML",
		cmdShowLog: "View export log",
		logTitle: "Export Log",
		logEmpty: "No logs yet",
		logCopy: "Copy",
		logExport: "Export TXT",
		logClear: "Clear",
		logCopied: "Log copied to clipboard",
		logCopyFail: "Copy failed, please copy manually",
		logExported: "Log exported",
		noActiveFile: "No active note",
	},
};

export function t(key: string, lang: Lang = "zh", vars?: Record<string, string | number>): string {
	let text = strings[lang]?.[key] || strings.zh[key] || key;
	if (vars) {
		for (const [k, v] of Object.entries(vars)) {
			text = text.replace(`{${k}}`, String(v));
		}
	}
	return text;
}
