/**
 * 核心导出引擎 v2
 * 主题系统 + 交互式数据 + 高性能搜索 + 版本号
 */

import type { OmniExportSettings } from "./settings";
import { t, type Lang } from "./i18n";

export const PLUGIN_VERSION = "0.1.2";

export type Theme = "default" | "gongwen" | "report" | "presentation" | "engineering" | "sales";

interface ExportOptions {
	title: string;
	content: string;
	settings: OmniExportSettings;
	lang: Lang;
	createDate?: string;
	modifyDate?: string;
	tags?: string[];
}

/**
 * 生成自包含单文件 HTML
 */
export function generateSingleFileHTML(options: ExportOptions): string {
	const { title, content, settings, lang, createDate, modifyDate, tags } = options;
	const isDark = settings.theme === "dark" || (settings.theme === "auto" && typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
	const theme = (settings.exportTheme as Theme) || "default";

	const seoTags = settings.seo ? generateSEOTags(title, options) : "";
	const interactiveJS = settings.interactive ? getInteractiveJS(lang) : "";
	const mermaidJS = settings.renderMermaid ? getMermaidCDN() : "";
	const mathJS = settings.renderMath ? getMathJaxCDN() : "";
	const highlightJS = settings.codeHighlight ? getHighlightCDN() : "";
	const themeCSS = getThemeCSS(theme, isDark);
	const interactiveCSS = settings.interactive ? getInteractiveCSS(isDark) : "";

	return `<!DOCTYPE html>
<html lang="${lang === "zh" ? "zh-CN" : "en"}" data-theme="${isDark ? "dark" : "light"}" data-export-theme="${theme}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${isDark ? "#1e1e2e" : "#ffffff"}">
<meta name="generator" content="OmniExport v${PLUGIN_VERSION}">
<meta name="export-theme" content="${theme}">
<title>${escapeHtml(title)}</title>
${seoTags}
<style>
${getBaseCSS(isDark, theme)}
${getAllThemeVariablesCSS()}
${themeCSS}
${interactiveCSS}
</style>
${highlightJS}
${mathJS}
${mermaidJS}
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js"></script>
</head>
<body>
${settings.interactive ? getToolbarHTML(lang, theme) : ""}
<article class="note-content" id="note-content">
${content}
</article>
${settings.interactive ? '<footer class="note-footer"><p class="meta-info">' + getMetaInfo(createDate, modifyDate, tags, lang) + '</p><p class="plugin-version">Powered by OmniExport v' + PLUGIN_VERSION + "</p></footer>" : ""}
<script>
${interactiveJS}
${settings.renderMermaid ? "mermaid.initialize({startOnLoad:true,theme:'" + (isDark ? "dark" : "default") + "'});" : ""}
</script>
</body>
</html>`;
}

/* ========== SEO ========== */

function generateSEOTags(title: string, options: ExportOptions): string {
	const desc = stripHtml(options.content).substring(0, 160);
	return `
<meta name="description" content="${escapeHtml(desc)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(desc)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${options.lang === "zh" ? "zh_CN" : "en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(desc)}">`;
}

/* ========== 基础 CSS ========== */

function getBaseCSS(isDark: boolean, theme: Theme): string {
	const fonts = theme === "gongwen"
		? `"FangSong", "仿宋", "STFangsong", serif`
		: `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;

	return `
:root {
	--bg: ${isDark ? "#1e1e2e" : "#ffffff"};
	--text: ${isDark ? "#cdd6f4" : "#1e1e2e"};
	--text-secondary: ${isDark ? "#a6adc8" : "#6c7086"};
	--accent: ${theme === "gongwen" ? "#ff0000" : "#89b4fa"};
	--border: ${isDark ? "#313244" : "#e0e0e0"};
	--code-bg: ${isDark ? "#313244" : "#f5f5f5"};
	--link: ${isDark ? "#89b4fa" : "#1e6ddc"};
	--max-width: ${theme === "presentation" ? "960px" : "720px"};
	--font: ${fonts};
	--font-mono: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; -webkit-text-size-adjust: 100%; }
body {
	font-family: var(--font);
	background: var(--bg);
	color: var(--text);
	line-height: 1.8;
	padding: 16px;
	transition: background 0.3s, color 0.3s;
}
@media (min-width: 768px) {
	body { padding: 32px; max-width: var(--max-width); margin: 0 auto; }
}
article.note-content { word-wrap: break-word; overflow-wrap: break-word; }
article.note-content h1, article.note-content h2, article.note-content h3,
article.note-content h4, article.note-content h5, article.note-content h6 {
	line-height: 1.4; margin: 1.5em 0 0.5em; font-weight: 700;
}
article.note-content h1 { font-size: 1.8rem; border-bottom: 2px solid var(--border); padding-bottom: 0.3em; }
article.note-content h2 { font-size: 1.5rem; }
article.note-content h3 { font-size: 1.25rem; }
article.note-content p { margin: 0.8em 0; }
article.note-content a { color: var(--link); text-decoration: none; }
article.note-content a:hover { text-decoration: underline; }
article.note-content code {
	font-family: var(--font-mono);
	background: var(--code-bg);
	padding: 0.15em 0.4em;
	border-radius: 4px;
	font-size: 0.9em;
}
article.note-content pre {
	background: var(--code-bg);
	padding: 16px;
	border-radius: 8px;
	overflow-x: auto;
	margin: 1em 0;
	-webkit-overflow-scrolling: touch;
}
article.note-content pre code { background: none; padding: 0; }
article.note-content blockquote {
	border-left: 4px solid var(--accent);
	padding-left: 16px;
	margin: 1em 0;
	color: var(--text-secondary);
}
article.note-content img { max-width: 100%; height: auto; border-radius: 8px; }
article.note-content table { width: 100%; border-collapse: collapse; margin: 1em 0; }
article.note-content th, article.note-content td { border: 1px solid var(--border); padding: 8px 12px; text-align: left; }
article.note-content th { background: var(--code-bg); font-weight: 600; }
article.note-content ul, article.note-content ol { padding-left: 2em; margin: 0.8em 0; }
article.note-content li { margin: 0.3em 0; }
article.note-content hr { border: none; border-top: 1px solid var(--border); margin: 2em 0; }
article.note-content .task-list-item { list-style: none; }
article.note-content .task-list-item input { margin-right: 8px; }
.note-footer { margin-top: 3em; padding-top: 1em; border-top: 1px solid var(--border); color: var(--text-secondary); font-size: 0.85rem; }
.plugin-version { font-size: 0.75rem; opacity: 0.6; margin-top: 0.5em; }
`;
}

/* ========== 全主题 CSS 变量（支持运行时切换 + 暗色模式） ========== */

function getAllThemeVariablesCSS(): string {
	return `
/* --- Default light --- */
html[data-export-theme="default"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="default"][data-theme="dark"] { --accent: #89b4fa; --link: #89b4fa; }
/* --- 公文 --- */
html[data-export-theme="gongwen"] { --accent: #ff0000; --link: #1e6ddc; }
html[data-export-theme="gongwen"][data-theme="dark"] { --accent: #ff4444; --link: #89b4fa; }
/* --- 报告 --- */
html[data-export-theme="report"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="report"][data-theme="dark"] { --accent: #89b4fa; --link: #89b4fa; }
/* --- 演示 --- */
html[data-export-theme="presentation"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="presentation"][data-theme="dark"] { --accent: #b4befe; --link: #89b4fa; }
/* --- 工程 --- */
html[data-export-theme="engineering"] { --accent: #2563eb; --link: #2563eb; }
html[data-export-theme="engineering"][data-theme="dark"] { --accent: #60a5fa; --link: #60a5fa; }
/* --- 销售 --- */
html[data-export-theme="sales"] { --accent: #059669; --link: #059669; }
html[data-export-theme="sales"][data-theme="dark"] { --accent: #34d399; --link: #34d399; }
`;
}

/* ========== 主题 CSS ========== */

function getThemeCSS(theme: Theme, isDark: boolean): string {
	switch (theme) {
		case "gongwen": return getGongwenCSS();
		case "report": return getReportCSS();
		case "presentation": return getPresentationCSS();
		case "engineering": return getEngineeringCSS();
		case "sales": return getSalesCSS();
		default: return "";
	}
}

/** 公文主题 - GB/T 9704-2012 */
function getGongwenCSS(): string {
	return `
/* 公文主题 - GB/T 9704-2012 */
@media print {
	@page { size: A4; margin: 37mm 26mm 35mm 28mm; }
}
html[data-export-theme="gongwen"] { --font: "FangSong", "仿宋", "STFangsong", serif; }
html[data-export-theme="gongwen"] body { font-family: "FangSong", "仿宋", "STFangsong", serif; font-size: 16pt; line-height: 28.99pt; }
html[data-export-theme="gongwen"] article.note-content h1 {
	font-family: "SimSun", "宋体", serif;
	font-size: 22pt; font-weight: normal;
	text-align: center; border-bottom: none;
	margin: 2em 0 1em;
}
html[data-export-theme="gongwen"] article.note-content h2 {
	font-family: "SimHei", "黑体", sans-serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content h3 {
	font-family: "KaiTi", "楷体", "STKaiti", serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content h4,
html[data-export-theme="gongwen"] article.note-content h5,
html[data-export-theme="gongwen"] article.note-content h6 {
	font-family: "FangSong", "仿宋", serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content p { text-align: justify; text-indent: 2em; }
html[data-export-theme="gongwen"] article.note-content blockquote p { text-indent: 0; }
/* 公文红线 */
html[data-export-theme="gongwen"] article.note-content h1::after {
	content: "";
	display: block;
	width: 100%;
	height: 0;
	border-bottom: 3px solid var(--accent);
	margin-top: 0.5em;
}
html[data-export-theme="gongwen"] article.note-content table { font-size: 14pt; }
html[data-export-theme="gongwen"] article.note-content th,
html[data-export-theme="gongwen"] article.note-content td { font-family: "FangSong", "仿宋", serif; }
`;
}

/** 报告主题 */
function getReportCSS(): string {
	return `
html[data-export-theme="report"] article.note-content h1 {
	text-align: center; font-size: 2rem;
	border-bottom: 3px double var(--border);
	padding-bottom: 0.5em; margin-bottom: 1em;
}
html[data-export-theme="report"] article.note-content h2 {
	border-left: 4px solid var(--accent);
	padding-left: 12px; border-bottom: none;
}
html[data-export-theme="report"] article.note-content table { font-size: 0.95rem; }
html[data-export-theme="report"] article.note-content th { background: var(--accent); color: #fff; }
html[data-export-theme="report"] article.note-content blockquote {
	background: var(--code-bg);
	border-left: none;
	border-radius: 8px;
	padding: 16px 20px;
}
`;
}

/** 演示主题 */
function getPresentationCSS(): string {
	return `
html[data-export-theme="presentation"] { --max-width: 960px; }
html[data-export-theme="presentation"] body { font-size: 18px; line-height: 2; }
html[data-export-theme="presentation"] article.note-content h1 {
	font-size: 2.5rem; text-align: center;
	border-bottom: none;
	background: linear-gradient(135deg, var(--accent), #b4befe);
	-webkit-background-clip: text; -webkit-text-fill-color: transparent;
	background-clip: text;
}
html[data-export-theme="presentation"] article.note-content h2 { font-size: 1.8rem; color: var(--accent); }
html[data-export-theme="presentation"] article.note-content h3 { font-size: 1.4rem; }
html[data-export-theme="presentation"] article.note-content p { font-size: 1.1rem; line-height: 2; }
html[data-export-theme="presentation"] article.note-content li { font-size: 1.1rem; line-height: 2; }
html[data-export-theme="presentation"] article.note-content blockquote {
	font-size: 1.2rem; font-style: italic;
	border-left-width: 6px;
}
html[data-export-theme="presentation"] article.note-content img { border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
html[data-export-theme="presentation"] article.note-content pre { border-radius: 12px; font-size: 1rem; }
html[data-export-theme="presentation"] article.note-content table { border-radius: 8px; overflow: hidden; }
html[data-export-theme="presentation"] article.note-content th { background: var(--accent); color: #fff; }
`;
}

/** 工程报表主题 */
function getEngineeringCSS(): string {
	return `
html[data-export-theme="engineering"] article.note-content h1 { text-align: center; font-size: 1.6rem; border-bottom: 3px solid var(--accent); padding-bottom: 0.5em; }
html[data-export-theme="engineering"] article.note-content h2 { font-size: 1.3rem; border-left: 5px solid var(--accent); padding-left: 12px; }
html[data-export-theme="engineering"] article.note-content h3 { font-size: 1.1rem; color: var(--accent); }
html[data-export-theme="engineering"] article.note-content table { font-size: 0.9rem; border: 2px solid var(--accent); }
html[data-export-theme="engineering"] article.note-content th { background: var(--accent); color: #fff; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }
html[data-export-theme="engineering"] article.note-content tr:nth-child(even) { background: rgba(37,99,235,0.06); }
html[data-export-theme="engineering"] article.note-content tr:hover { background: rgba(37,99,235,0.12); }
html[data-export-theme="engineering"] article.note-content blockquote { border-left-color: var(--accent); background: rgba(37,99,235,0.06); padding: 12px 16px; border-radius: 0 8px 8px 0; }
html[data-export-theme="engineering"] article.note-content code { background: rgba(37,99,235,0.1); }
@media print { @page { size: A4 landscape; margin: 15mm; } }
`;
}

/** 销售报表主题 */
function getSalesCSS(): string {
	return `
html[data-export-theme="sales"] article.note-content h1 { text-align: center; font-size: 1.8rem; border-bottom: 3px solid var(--accent); padding-bottom: 0.5em; }
html[data-export-theme="sales"] article.note-content h2 { font-size: 1.3rem; padding: 8px 12px; border-left: 4px solid var(--accent); }
html[data-export-theme="sales"] article.note-content h3 { color: var(--accent); }
html[data-export-theme="sales"] article.note-content table { font-size: 0.9rem; border: 1px solid rgba(5,150,105,0.2); box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
html[data-export-theme="sales"] article.note-content th { background: linear-gradient(135deg, var(--accent), rgba(16,185,129,0.9)); color: #fff; font-weight: 600; }
html[data-export-theme="sales"] article.note-content td { padding: 10px 14px; }
html[data-export-theme="sales"] article.note-content tr:nth-child(even) { background: rgba(5,150,105,0.05); }
html[data-export-theme="sales"] article.note-content tr:hover { background: rgba(5,150,105,0.1); }
html[data-export-theme="sales"] article.note-content blockquote { border-left-color: var(--accent); background: rgba(5,150,105,0.06); padding: 12px 16px; border-radius: 0 8px 8px 0; }
@media print { @page { size: A4; margin: 15mm; } }
`;
}

/* ========== 交互式 CSS ========== */

function getInteractiveCSS(isDark: boolean): string {
	return `
/* 工具栏 */
.oe-toolbar {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	background: ${isDark ? "#181825ee" : "#ffffffee"};
	backdrop-filter: blur(8px);
	border-bottom: 1px solid var(--border);
	padding: 8px 16px;
	display: flex; align-items: center; gap: 8px;
	flex-wrap: wrap;
}
.oe-toolbar input[type="text"] {
	padding: 6px 12px; border: 1px solid var(--border);
	border-radius: 20px; background: var(--bg); color: var(--text);
	font-size: 0.9rem; width: 140px; outline: none; flex: 1; min-width: 100px;
}
.oe-toolbar input[type="text"]:focus { border-color: var(--accent); }
.oe-btn {
	padding: 6px 12px; border: 1px solid var(--border);
	border-radius: 6px; background: var(--bg); color: var(--text);
	cursor: pointer; font-size: 0.85rem; white-space: nowrap;
}
.oe-btn:hover { background: var(--code-bg); }
.oe-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
/* TOC 侧栏 */
.toc-nav {
	position: fixed; top: 50px; right: 0; width: 260px; height: calc(100vh - 50px);
	background: ${isDark ? "#181825" : "#f8f9fa"};
	border-left: 1px solid var(--border);
	padding: 16px; overflow-y: auto; z-index: 100;
	transform: translateX(100%); transition: transform 0.3s;
	font-size: 0.9rem;
}
.toc-nav.open { transform: translateX(0); }
.toc-nav a { display: block; padding: 4px 0; color: var(--text-secondary); text-decoration: none; }
.toc-nav a:hover { color: var(--accent); }
/* 可编辑表格 */
article.note-content td[contenteditable="true"]:focus {
	outline: 2px solid var(--accent);
	background: ${isDark ? "#313244" : "#e8f0fe"};
}
/* 表格操作按钮 */
.oe-table-actions {
	display: inline-flex; gap: 4px; margin-left: 8px;
	opacity: 0; transition: opacity 0.2s;
}
article.note-content table:hover .oe-table-actions { opacity: 1; }
.oe-table-btn {
	padding: 2px 8px; border: 1px solid var(--border);
	border-radius: 4px; background: var(--bg); color: var(--text);
	cursor: pointer; font-size: 0.75rem;
}
/* 任务进度条 */
.oe-task-progress {
	height: 4px; background: var(--border);
	border-radius: 2px; margin: 4px 0 8px;
	overflow: hidden;
}
.oe-task-progress-bar {
	height: 100%; background: var(--accent);
	border-radius: 2px; transition: width 0.3s;
}
/* 搜索高亮 */
mark.search-highlight { background: #fbbf24; color: #000; border-radius: 2px; padding: 0 2px; }
/* 主题切换 */
.theme-toggle {
	position: fixed; bottom: 16px; right: 16px; z-index: 201;
	background: var(--code-bg); border: 1px solid var(--border);
	width: 40px; height: 40px; border-radius: 50%;
	font-size: 1.2rem; cursor: pointer;
	display: flex; align-items: center; justify-content: center;
}
/* 手机端适配 */
@media (max-width: 767px) {
	.oe-toolbar { padding: 6px 8px; gap: 4px; }
	.oe-toolbar input[type="text"] { width: 100px; font-size: 0.85rem; }
	.oe-btn { padding: 4px 8px; font-size: 0.8rem; }
	.toc-nav { width: 100%; top: auto; bottom: 0; height: 50vh; }
	body { padding-top: 60px; }
}
`;
}

/* ========== 工具栏 HTML ========== */

function getToolbarHTML(lang: Lang, theme: Theme): string {
	const labels = lang === "zh"
		? { search: "搜索...", toc: "目录", exportCSV: "导出CSV", importFile: "导入文件", importHint: "支持 Excel/Word/CSV" }
		: { search: "Search...", toc: "TOC", exportCSV: "CSV", importFile: "Import", importHint: "Excel/Word/CSV" };

	const themeOptions = [
		{ value: "default", label: "Default" },
		{ value: "gongwen", label: "公文" },
		{ value: "report", label: "Report" },
		{ value: "presentation", label: "Slide" },
		{ value: "engineering", label: lang === "zh" ? "工程" : "Eng" },
		{ value: "sales", label: lang === "zh" ? "销售" : "Sales" },
	];
	const optionsHTML = themeOptions.map(o =>
		`<option value="${o.value}"${theme === o.value ? " selected" : ""}>${o.label}</option>`
	).join("");

	return `
<div class="oe-toolbar">
	<input type="text" id="oe-search" placeholder="${labels.search}" oninput="oeSearch(this.value)">
	<button class="oe-btn" onclick="document.querySelector('.toc-nav').classList.toggle('open')">${labels.toc}</button>
	<button class="oe-btn" onclick="oeExportCSV()">${labels.exportCSV}</button>
	<button class="oe-btn" onclick="document.getElementById('oe-file-input').click()" title="${labels.importHint}">${labels.importFile}</button>
	<select class="oe-btn" onchange="oeSwitchTheme(this.value)" id="oe-theme-select">${optionsHTML}</select>
</div>
<nav class="toc-nav" id="toc-nav"><h3>${labels.toc}</h3><div id="toc-content"></div></nav>
<button class="theme-toggle" onclick="oeToggleTheme()" aria-label="Theme">🌓</button>
<input type="file" id="oe-file-input" accept=".csv,.tsv,.json,.xlsx,.xls,.docx,.doc" style="display:none" onchange="oeHandleFileImport(this)">`;
}

/* ========== 交互式 JS ========== */

function getInteractiveJS(lang: Lang): string {
	return `
/* OmniExport v${PLUGIN_VERSION} - Interactive Engine */

// === 搜索（防抖 + 安全文本处理）===
var _oeSearchTimer = null;
function oeSearch(query) {
	clearTimeout(_oeSearchTimer);
	_oeSearchTimer = setTimeout(function() { _doSearch(query); }, 200);
}
function _doSearch(query) {
	// 清除旧高亮
	document.querySelectorAll('mark.search-highlight').forEach(function(m) {
		var p = m.parentNode;
		p.replaceChild(document.createTextNode(m.textContent), m);
		p.normalize();
	});
	if (!query || query.length < 1) return;
	// 安全转义正则特殊字符
	var escaped = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
	var regex;
	try { regex = new RegExp('(' + escaped + ')', 'gi'); } catch(e) { return; }
	// 只搜索文本节点，不破坏 DOM 结构
	var content = document.getElementById('note-content');
	if (!content) return;
	var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
	var nodes = [];
	while (walker.nextNode()) nodes.push(walker.currentNode);
	nodes.forEach(function(node) {
		if (!regex.test(node.textContent)) return;
		regex.lastIndex = 0;
		var frag = document.createDocumentFragment();
		var parts = node.textContent.split(regex);
		parts.forEach(function(part) {
			if (regex.test(part)) {
				regex.lastIndex = 0;
				var mark = document.createElement('mark');
				mark.className = 'search-highlight';
				mark.textContent = part;
				frag.appendChild(mark);
			} else {
				frag.appendChild(document.createTextNode(part));
			}
			regex.lastIndex = 0;
		});
		node.parentNode.replaceChild(frag, node);
	});
}

// === TOC 生成 ===
(function(){
	var headings = document.querySelectorAll('.note-content h1, .note-content h2, .note-content h3');
	var toc = document.getElementById('toc-content');
	if(!toc) return;
	headings.forEach(function(h, i) {
		var id = 'heading-' + i;
		h.id = id;
		var level = parseInt(h.tagName[1]);
		var a = document.createElement('a');
		a.href = '#' + id;
		a.textContent = h.textContent;
		a.style.paddingLeft = (level - 1) * 16 + 'px';
		toc.appendChild(a);
	});
})();

// === 可编辑表格 ===
document.querySelectorAll('.note-content table').forEach(function(table, ti) {
	// 给每个单元格添加 contenteditable
	table.querySelectorAll('td, th').forEach(function(cell) {
		cell.setAttribute('contenteditable', 'true');
		cell.setAttribute('data-orig', cell.textContent);
	});
	// 添加操作按钮行
	var firstRow = table.querySelector('tr');
	if (firstRow) {
		var th = document.createElement('th');
		th.innerHTML = '<span class="oe-table-actions" style="opacity:1">' +
			'<button class="oe-table-btn" onclick="oeResetTable(this)">↩</button>' +
			'<button class="oe-table-btn" onclick="oeExportTable(this)">⬇</button>' +
			'</span>';
		firstRow.appendChild(th);
	}
});

function oeResetTable(btn) {
	var table = btn.closest('table');
	table.querySelectorAll('td, th').forEach(function(cell) {
		if (cell.dataset.orig) cell.textContent = cell.dataset.orig;
	});
}

function oeExportTable(btn) {
	var table = btn.closest('table');
	var csv = [];
	table.querySelectorAll('tr').forEach(function(row) {
		var cells = [];
		row.querySelectorAll('td, th').forEach(function(cell) {
			// 跳过操作按钮列
			if (cell.querySelector('.oe-table-actions')) return;
			var text = cell.textContent.replace(/"/g, '""');
			cells.push('"' + text + '"');
		});
		csv.push(cells.join(','));
	});
	oeDownload(csv.join('\\n'), 'table-export.csv', 'text/csv');
}

// === 全局导出 CSV ===
function oeExportCSV() {
	var tables = document.querySelectorAll('.note-content table');
	if (!tables.length) { alert('${lang === "zh" ? "没有找到表格" : "No tables found"}'); return; }
	// 导出所有表格到一个文件
	var allCSV = [];
	tables.forEach(function(table, i) {
		if (i > 0) allCSV.push('');
		table.querySelectorAll('tr').forEach(function(row) {
			var cells = [];
			row.querySelectorAll('td, th').forEach(function(cell) {
				if (cell.querySelector('.oe-table-actions')) return;
				var text = cell.textContent.replace(/"/g, '""');
				cells.push('"' + text + '"');
			});
			allCSV.push(cells.join(','));
		});
	});
	oeDownload(allCSV.join('\\n'), 'all-tables.csv', 'text/csv');
}

// === 统一文件导入（Excel/Word/CSV）===
function oeHandleFileImport(input) {
	var file = input.files[0];
	if (!file) return;
	var ext = file.name.split('.').pop().toLowerCase();

	if (ext === 'xlsx' || ext === 'xls') {
		oeImportExcel(file);
	} else if (ext === 'docx') {
		oeImportWord(file);
	} else {
		oeImportCSVFile(file);
	}
	input.value = '';
}

// === Excel 导入（SheetJS）===
function oeImportExcel(file) {
	var reader = new FileReader();
	reader.onload = function(e) {
		try {
			var data = new Uint8Array(e.target.result);
			var workbook = XLSX.read(data, { type: 'array' });
			var content = document.getElementById('note-content');
			workbook.SheetNames.forEach(function(name) {
				var html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
				var div = document.createElement('div');
				var h3 = document.createElement('h3');
				h3.textContent = name;
				div.appendChild(h3);
				var tmp = document.createElement('div');
				tmp.innerHTML = html;
				div.appendChild(tmp.firstChild);
				content.appendChild(div);
			});
			alert('${lang === "zh" ? "Excel 导入成功" : "Excel imported"}');
		} catch(err) { alert('${lang === "zh" ? "Excel 解析失败" : "Excel parse failed"}: ' + err.message); }
	};
	reader.readAsArrayBuffer(file);
}

// === Word 导入（mammoth.js）===
function oeImportWord(file) {
	var reader = new FileReader();
	reader.onload = function(e) {
		try {
			mammoth.convertToHtml({ arrayBuffer: e.target.result })
				.then(function(result) {
					var content = document.getElementById('note-content');
					var div = document.createElement('div');
					div.innerHTML = result.value;
					content.appendChild(div);
					if (result.messages.length) console.log('Word warnings:', result.messages);
					alert('${lang === "zh" ? "Word 导入成功" : "Word imported"}');
				})
				.catch(function(err) { alert('${lang === "zh" ? "Word 解析失败" : "Word parse failed"}: ' + err); });
		} catch(err) { alert('${lang === "zh" ? "Word 读取失败" : "Word read failed"}'); }
	};
	reader.readAsArrayBuffer(file);
}

// === CSV 导入 ===
function oeImportCSVFile(file) {
	var reader = new FileReader();
	reader.onload = function(e) {
		var text = e.target.result;
		var tables = document.querySelectorAll('.note-content table');
		var table;
		if (!tables.length) {
			table = document.createElement('table');
			document.getElementById('note-content').appendChild(table);
		} else {
			table = tables[0];
		}
		var rows = text.split(/\\r?\\n/).filter(function(r) { return r.trim(); });
		table.innerHTML = '';
		rows.forEach(function(row, ri) {
			var tr = document.createElement('tr');
			var cells = row.match(/("([^"]|"")*"|[^,]*)/g) || [];
			cells.forEach(function(cell) {
				var td = document.createElement(ri === 0 ? 'th' : 'td');
				td.textContent = cell.replace(/^"|"$/g, '').replace(/""/g, '"');
				td.setAttribute('contenteditable', 'true');
				tr.appendChild(td);
			});
			table.appendChild(tr);
		});
		alert('${lang === "zh" ? "CSV 导入成功" : "CSV imported"}');
	};
	reader.readAsText(file);
}

// === 任务列表交互 ===
document.querySelectorAll('.note-content .task-list-item input[type="checkbox"]').forEach(function(cb) {
	cb.disabled = false;
	cb.addEventListener('change', oeUpdateTaskProgress);
});
oeUpdateTaskProgress();
function oeUpdateTaskProgress() {
	// 兼容方案：不依赖 :has()，遍历所有 ul 检查是否包含 task-list-item
	document.querySelectorAll('.note-content ul').forEach(function(ul) {
		var items = ul.querySelectorAll('.task-list-item input');
		if (!items.length) return;
		var total = items.length;
		var checked = ul.querySelectorAll('.task-list-item input:checked').length;
		var barId = 'oe-progress-' + Array.prototype.indexOf.call(ul.parentNode.children, ul);
		var bar = document.getElementById(barId);
		if (!bar) {
			bar = document.createElement('div');
			bar.id = barId;
			bar.className = 'oe-task-progress';
			bar.innerHTML = '<div class="oe-task-progress-bar"></div>';
			ul.parentNode.insertBefore(bar, ul.nextSibling);
		}
		bar.querySelector('.oe-task-progress-bar').style.width = (total ? (checked/total*100) : 0) + '%';
	});
}

// === 主题切换 ===
function oeToggleTheme() {
	var html = document.documentElement;
	var current = html.getAttribute('data-theme');
	var next = current === 'dark' ? 'light' : 'dark';
	html.setAttribute('data-theme', next);
	var mc = document.querySelector('meta[name="theme-color"]');
	if (mc) mc.content = next === 'dark' ? '#1e1e2e' : '#ffffff';
}
function oeSwitchTheme(theme) {
	document.documentElement.setAttribute('data-export-theme', theme);
	document.documentElement.className = 'oe-theme-' + theme;
	var sel = document.getElementById('oe-theme-select');
	if (sel) sel.value = theme;
}

// === 工具函数 ===
function oeDownload(content, filename, mime) {
	var blob = new Blob([content], { type: mime + ';charset=utf-8' });
	var url = URL.createObjectURL(blob);
	var a = document.createElement('a');
	a.href = url; a.download = filename;
	document.body.appendChild(a); a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
`;
}

/* ========== CDN ========== */

function getMermaidCDN(): string {
	return '<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>';
}

function getMathJaxCDN(): string {
	return `<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>`;
}

function getHighlightCDN(): string {
	return `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"></script>
<script>document.addEventListener('DOMContentLoaded', function() { hljs.highlightAll(); });</script>`;
}

/* ========== 工具函数 ========== */

function getMetaInfo(createDate?: string, modifyDate?: string, tags?: string[], lang?: Lang): string {
	const parts: string[] = [];
	if (createDate) parts.push((lang === "zh" ? "创建：" : "Created: ") + createDate);
	if (modifyDate) parts.push((lang === "zh" ? "修改：" : "Modified: ") + modifyDate);
	if (tags && tags.length) parts.push((lang === "zh" ? "标签：" : "Tags: ") + tags.join(", "));
	return parts.join(" | ");
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function stripHtml(html: string): string {
	return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
