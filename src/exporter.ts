/**
 * 核心导出引擎
 * 6大功能：自包含单文件、交互式、批量发布、多平台、SEO、渲染保留
 * 优先支持手机端
 */

import type { OmniExportSettings } from "./settings";
import { t, type Lang } from "./i18n";

interface ExportOptions {
	title: string;
	content: string; // rendered HTML content from Obsidian
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
	const isDark = settings.theme === "dark" || (settings.theme === "auto" && true);

	const seoTags = settings.seo ? generateSEOTags(title, options) : "";
	const interactiveJS = settings.interactive ? getInteractiveJS(lang) : "";
	const mermaidJS = settings.renderMermaid ? getMermaidCDN() : "";
	const mathJS = settings.renderMath ? getMathJaxCDN() : "";
	const highlightJS = settings.codeHighlight ? getHighlightCDN() : "";

	return `<!DOCTYPE html>
<html lang="${lang === "zh" ? "zh-CN" : "en"}" data-theme="${isDark ? "dark" : "light"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${isDark ? "#1e1e2e" : "#ffffff"}">
<title>${escapeHtml(title)}</title>
${seoTags}
<style>
${getBaseCSS(isDark)}
${settings.interactive ? getInteractiveCSS(isDark) : ""}
</style>
${highlightJS}
${mathJS}
${mermaidJS}
</head>
<body>
${settings.interactive ? getInteractiveHTML(title, lang) : ""}
<article class="note-content">
${content}
</article>
${settings.interactive ? '<footer class="note-footer"><p class="meta-info">' + getMetaInfo(createDate, modifyDate, tags, lang) + "</p></footer>" : ""}
<script>
${interactiveJS}
${settings.renderMermaid ? "mermaid.initialize({startOnLoad:true,theme:'" + (isDark ? "dark" : "default") + "'});" : ""}
</script>
</body>
</html>`;
}

function generateSEOTags(title: string, options: ExportOptions): string {
	const desc = stripHtml(options.content).substring(0, 160);
	const url = ""; // will be filled by user
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

function getBaseCSS(isDark: boolean): string {
	// 手机端优先的响应式设计
	return `
:root {
	--bg: ${isDark ? "#1e1e2e" : "#ffffff"};
	--text: ${isDark ? "#cdd6f4" : "#1e1e2e"};
	--text-secondary: ${isDark ? "#a6adc8" : "#6c7086"};
	--accent: #89b4fa;
	--border: ${isDark ? "#313244" : "#e0e0e0"};
	--code-bg: ${isDark ? "#313244" : "#f5f5f5"};
	--link: ${isDark ? "#89b4fa" : "#1e6ddc"};
	--max-width: 720px;
	--font: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
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
`;
}

function getInteractiveCSS(isDark: boolean): string {
	return `
/* TOC Navigation */
.toc-nav {
	position: fixed; top: 0; right: 0; width: 280px; height: 100vh;
	background: ${isDark ? "#181825" : "#f8f9fa"};
	border-left: 1px solid var(--border);
	padding: 16px; overflow-y: auto; z-index: 100;
	transform: translateX(100%); transition: transform 0.3s;
	font-size: 0.9rem;
}
.toc-nav.open { transform: translateX(0); }
.toc-nav a { display: block; padding: 4px 0; color: var(--text-secondary); text-decoration: none; }
.toc-nav a:hover { color: var(--accent); }
.toc-toggle {
	position: fixed; top: 16px; right: 16px; z-index: 101;
	background: var(--accent); color: #fff; border: none;
	width: 40px; height: 40px; border-radius: 50%;
	font-size: 1.2rem; cursor: pointer;
	display: flex; align-items: center; justify-content: center;
}
/* Search */
.search-box {
	position: fixed; top: 16px; left: 16px; z-index: 101;
	display: flex; gap: 8px;
}
.search-box input {
	padding: 8px 12px; border: 1px solid var(--border);
	border-radius: 20px; background: var(--bg); color: var(--text);
	font-size: 0.9rem; width: 160px; outline: none;
}
.search-box input:focus { border-color: var(--accent); }
/* Dark/Light Toggle */
.theme-toggle {
	position: fixed; bottom: 16px; right: 16px; z-index: 101;
	background: var(--code-bg); border: 1px solid var(--border);
	width: 40px; height: 40px; border-radius: 50%;
	font-size: 1.2rem; cursor: pointer;
	display: flex; align-items: center; justify-content: center;
}
/* Collapsible */
details { margin: 0.8em 0; }
details summary { cursor: pointer; font-weight: 600; padding: 4px 0; }
details summary:hover { color: var(--accent); }
details[open] summary { margin-bottom: 0.5em; }
/* Highlight search matches */
mark.search-highlight { background: #fbbf24; color: #000; border-radius: 2px; padding: 0 2px; }
@media (max-width: 767px) {
	.toc-nav { width: 100%; }
	.search-box input { width: 120px; }
}`;
}

function getInteractiveHTML(title: string, lang: Lang): string {
	const tocLabel = lang === "zh" ? "目录" : "TOC";
	const searchPlaceholder = lang === "zh" ? "搜索..." : "Search...";
	return `
<button class="toc-toggle" onclick="document.querySelector('.toc-nav').classList.toggle('open')" aria-label="${tocLabel}">☰</button>
<nav class="toc-nav" id="toc-nav"><h3>${tocLabel}</h3><div id="toc-content"></div></nav>
<div class="search-box"><input type="text" id="search-input" placeholder="${searchPlaceholder}" oninput="searchNote(this.value)"></div>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Theme">🌓</button>`;
}

function getInteractiveJS(lang: Lang): string {
	return `
// TOC generation
(function(){
	const headings = document.querySelectorAll('.note-content h1, .note-content h2, .note-content h3');
	const toc = document.getElementById('toc-content');
	if(!toc) return;
	headings.forEach((h, i) => {
		const id = 'heading-' + i;
		h.id = id;
		const level = parseInt(h.tagName[1]);
		const a = document.createElement('a');
		a.href = '#' + id;
		a.textContent = h.textContent;
		a.style.paddingLeft = (level - 1) * 16 + 'px';
		toc.appendChild(a);
	});
})();
// Theme toggle
function toggleTheme() {
	const html = document.documentElement;
	const current = html.getAttribute('data-theme');
	const next = current === 'dark' ? 'light' : 'dark';
	html.setAttribute('data-theme', next);
	document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#1e1e2e' : '#ffffff';
}
// Search
function searchNote(query) {
	document.querySelectorAll('mark.search-highlight').forEach(m => {
		const parent = m.parentNode;
		parent.replaceChild(document.createTextNode(m.textContent), m);
		parent.normalize();
	});
	if (!query) return;
	const content = document.querySelector('.note-content');
	const text = content.innerHTML;
	const regex = new RegExp('(' + query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&') + ')', 'gi');
	content.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
}`;
}

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

function getMetaInfo(createDate?: string, modifyDate?: string, tags?: string[], lang?: Lang): string {
	const parts: string[] = [];
	if (createDate) parts.push((lang === "zh" ? "创建：" : "Created: ") + createDate);
	if (modifyDate) parts.push((lang === "zh" ? "修改：" : "Modified: ") + modifyDate);
	if (tags && tags.length) parts.push((lang === "zh" ? "标签：" : "Tags: ") + tags.join(", "));
	return parts.join(" | ");
}

function escapeHtml(str: string): string {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripHtml(html: string): string {
	return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
