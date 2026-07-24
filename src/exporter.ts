/**
 * 核心导出引擎 v2
 * 主题系统 + 交互式数据 + 高性能搜索 + 版本号
 */

import type { OmniExportSettings } from "./settings";
import { t, type Lang } from "./i18n";

export const PLUGIN_VERSION = "0.0.3";

export type Theme = "default" | "gongwen" | "report" | "presentation";

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
	const isDark = settings.theme === "dark" || (settings.theme === "auto" && false);
	const theme = (settings.exportTheme as Theme) || "default";

	const seoTags = settings.seo ? generateSEOTags(title, options) : "";
	const interactiveJS = settings.interactive ? getInteractiveJS(lang) : "";
	const mermaidJS = settings.renderMermaid ? getMermaidCDN() : "";
	const mathJS = settings.renderMath ? getMathJaxCDN() : "";
	const highlightJS = settings.codeHighlight ? getHighlightCDN() : "";
	const themeCSS = getThemeCSS(theme, isDark);
	const interactiveCSS = settings.interactive ? getInteractiveCSS(isDark) : "";

	return `<!DOCTYPE html>
<html lang="${lang === "zh" ? "zh-CN" : "en"}" data-theme="${isDark ? "dark" : "light"}">
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
${themeCSS}
${interactiveCSS}
</style>
${highlightJS}
${mathJS}
${mermaidJS}
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

/* ========== 主题 CSS ========== */

function getThemeCSS(theme: Theme, isDark: boolean): string {
	switch (theme) {
		case "gongwen":
			return getGongwenCSS();
		case "report":
			return getReportCSS();
		case "presentation":
			return getPresentationCSS();
		default:
			return "";
	}
}

/** 公文主题 - GB/T 9704-2012 */
function getGongwenCSS(): string {
	return `
/* 公文主题 - GB/T 9704-2012 */
@media print {
	@page { size: A4; margin: 37mm 26mm 35mm 28mm; }
}
body { font-family: "FangSong", "仿宋", "STFangsong", serif; font-size: 16pt; line-height: 28.99pt; }
article.note-content h1 {
	font-family: "SimSun", "宋体", serif;
	font-size: 22pt; font-weight: normal;
	text-align: center; border-bottom: none;
	color: #000; margin: 2em 0 1em;
}
article.note-content h2 {
	font-family: "SimHei", "黑体", sans-serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content h3 {
	font-family: "KaiTi", "楷体", "STKaiti", serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content h4, article.note-content h5, article.note-content h6 {
	font-family: "FangSong", "仿宋", serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content p { text-align: justify; text-indent: 2em; }
article.note-content blockquote { border-left-color: #ff0000; }
article.note-content blockquote p { text-indent: 0; }
/* 公文红线 */
article.note-content h1::after {
	content: "";
	display: block;
	width: 100%;
	height: 0;
	border-bottom: 3px solid #ff0000;
	margin-top: 0.5em;
}
article.note-content table { font-size: 14pt; }
article.note-content th, article.note-content td { font-family: "FangSong", "仿宋", serif; }
`;
}

/** 报告主题 */
function getReportCSS(): string {
	return `
/* 报告主题 */
article.note-content h1 {
	text-align: center; font-size: 2rem;
	border-bottom: 3px double var(--border);
	padding-bottom: 0.5em; margin-bottom: 1em;
}
article.note-content h2 {
	border-left: 4px solid var(--accent);
	padding-left: 12px; border-bottom: none;
}
article.note-content table { font-size: 0.95rem; }
article.note-content th { background: var(--accent); color: #fff; }
article.note-content blockquote {
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
/* 演示主题 */
body { font-size: 18px; line-height: 2; }
article.note-content h1 {
	font-size: 2.5rem; text-align: center;
	border-bottom: none;
	background: linear-gradient(135deg, var(--accent), #b4befe);
	-webkit-background-clip: text; -webkit-text-fill-color: transparent;
	background-clip: text;
}
article.note-content h2 { font-size: 1.8rem; color: var(--accent); }
article.note-content h3 { font-size: 1.4rem; }
article.note-content p { font-size: 1.1rem; line-height: 2; }
article.note-content li { font-size: 1.1rem; line-height: 2; }
article.note-content blockquote {
	font-size: 1.2rem; font-style: italic;
	border-left-width: 6px;
}
article.note-content img { border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
article.note-content pre { border-radius: 12px; font-size: 1rem; }
article.note-content table { border-radius: 8px; overflow: hidden; }
article.note-content th { background: var(--accent); color: #fff; }
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
		? { search: "搜索...", toc: "目录", exportCSV: "导出CSV", importCSV: "导入CSV", theme: "主题" }
		: { search: "Search...", toc: "TOC", exportCSV: "CSV", importCSV: "Import", theme: "Theme" };

	return `
<div class="oe-toolbar">
	<input type="text" id="oe-search" placeholder="${labels.search}" oninput="oeSearch(this.value)">
	<button class="oe-btn" onclick="document.querySelector('.toc-nav').classList.toggle('open')">${labels.toc}</button>
	<button class="oe-btn" onclick="oeExportCSV()">${labels.exportCSV}</button>
	<button class="oe-btn" onclick="oeImportCSV()">${labels.importCSV}</button>
	<select class="oe-btn" onchange="oeSwitchTheme(this.value)" id="oe-theme-select">
		<option value="default"${theme === "default" ? " selected" : ""}>Default</option>
		<option value="gongwen"${theme === "gongwen" ? " selected" : ""}>公文</option>
		<option value="report"${theme === "report" ? " selected" : ""}>Report</option>
		<option value="presentation"${theme === "presentation" ? " selected" : ""}>Slide</option>
	</select>
</div>
<nav class="toc-nav" id="toc-nav"><h3>${labels.toc}</h3><div id="toc-content"></div></nav>
<button class="theme-toggle" onclick="oeToggleTheme()" aria-label="Theme">🌓</button>
<input type="file" id="oe-csv-input" accept=".csv,.tsv,.json" style="display:none" onchange="oeHandleCSVImport(this)">`;
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

// === 导入 CSV ===
function oeImportCSV() {
	document.getElementById('oe-csv-input').click();
}
function oeHandleCSVImport(input) {
	var file = input.files[0];
	if (!file) return;
	var reader = new FileReader();
	reader.onload = function(e) {
		var text = e.target.result;
		var tables = document.querySelectorAll('.note-content table');
		if (!tables.length) {
			// 没有表格则创建一个新的
			var table = document.createElement('table');
			document.getElementById('note-content').appendChild(table);
			tables = [table];
		}
		var table = tables[0];
		var rows = text.split(/\\r?\\n/).filter(function(r) { return r.trim(); });
		table.innerHTML = '';
		rows.forEach(function(row, ri) {
			var tr = document.createElement('tr');
			// 简单 CSV 解析
			var cells = row.match(/("([^"]|"")*"|[^,]*)/g) || [];
			cells.forEach(function(cell) {
				var td = document.createElement(ri === 0 ? 'th' : 'td');
				td.textContent = cell.replace(/^"|"$/g, '').replace(/""/g, '"');
				td.setAttribute('contenteditable', 'true');
				tr.appendChild(td);
			});
			table.appendChild(tr);
		});
		alert('${lang === "zh" ? "导入成功" : "Import successful"}');
		input.value = '';
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
	var lists = document.querySelectorAll('.note-content ul:has(.task-list-item)');
	lists.forEach(function(ul) {
		var total = ul.querySelectorAll('.task-list-item input').length;
		var checked = ul.querySelectorAll('.task-list-item input:checked').length;
		var bar = ul.querySelector('.oe-task-progress');
		if (!bar) {
			bar = document.createElement('div');
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
	location.reload();
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
<script>hljs.highlightAll();</script>`;
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
