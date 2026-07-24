var b=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var A=(s,t)=>{for(var e in t)b(s,e,{get:t[e],enumerable:!0})},P=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of U(t))!F.call(s,o)&&o!==e&&b(s,o,{get:()=>t[o],enumerable:!(n=N(t,o))||n.enumerable});return s};var z=s=>P(b({},"__esModule",{value:!0}),s);var K={};A(K,{default:()=>v});module.exports=z(K);var l=require("obsidian");var g=require("obsidian");var C={zh:{pluginName:"\u4E07\u80FD\u5BFC\u51FA",cmdExportCurrent:"\u5BFC\u51FA\u5F53\u524D\u7B14\u8BB0\u4E3A HTML",cmdExportVault:"\u6279\u91CF\u5BFC\u51FA\u6574\u4E2A\u4ED3\u5E93",settingsTitle:"\u4E07\u80FD\u5BFC\u51FA\u8BBE\u7F6E",settingsLanguage:"\u8BED\u8A00 / Language",settingsTheme:"\u5BFC\u51FA\u4E3B\u9898",settingsThemeLight:"\u6D45\u8272",settingsThemeDark:"\u6DF1\u8272",settingsThemeAuto:"\u8DDF\u968F\u7CFB\u7EDF",settingsEmbedAssets:"\u5185\u5D4C\u8D44\u6E90\uFF08\u5355\u6587\u4EF6\u6A21\u5F0F\uFF09",settingsEmbedDesc:"\u5C06 CSS\u3001JS\u3001\u56FE\u7247\u5168\u90E8\u5185\u5D4C\u5230 HTML \u4E2D\uFF0C\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 .html \u6587\u4EF6",settingsInteractive:"\u4EA4\u4E92\u5F0F\u529F\u80FD",settingsInteractiveDesc:"\u542F\u7528\u6298\u53E0\u5757\u3001\u76EE\u5F55\u5BFC\u822A\u3001\u641C\u7D22\u3001\u6697\u8272/\u4EAE\u8272\u5207\u6362",settingsMermaid:"\u6E32\u67D3 Mermaid \u56FE\u8868",settingsMath:"\u6E32\u67D3\u6570\u5B66\u516C\u5F0F",settingsCodeHighlight:"\u4EE3\u7801\u8BED\u6CD5\u9AD8\u4EAE",settingsSEO:"SEO \u4E0E\u793E\u4EA4\u5361\u7247",settingsSEODesc:"\u81EA\u52A8\u751F\u6210 Open Graph \u6807\u7B7E\uFF0C\u5206\u4EAB\u5230\u5FAE\u4FE1/\u63A8\u7279\u65F6\u663E\u793A\u9884\u89C8",settingsOutputPath:"\u8F93\u51FA\u76EE\u5F55",settingsOutputDesc:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsAutoUpdate:"\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0",exportSuccess:"\u5BFC\u51FA\u6210\u529F",exportFail:"\u5BFC\u51FA\u5931\u8D25",exporting:"\u6B63\u5728\u5BFC\u51FA...",exportSingle:"\u5355\u6587\u4EF6\u5BFC\u51FA",exportBatch:"\u6279\u91CF\u5BFC\u51FA",exportComplete:"\u5BFC\u51FA\u5B8C\u6210\uFF0C\u5171 {count} \u4E2A\u6587\u4EF6",updateAvailable:"\u53D1\u73B0\u65B0\u7248\u672C {version}\uFF0C\u70B9\u51FB\u66F4\u65B0",updateCheck:"\u68C0\u67E5\u66F4\u65B0",updateLatest:"\u5DF2\u662F\u6700\u65B0\u7248\u672C",updateDownloading:"\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0...",updateManualInstall:"\u8BF7\u524D\u5F80 Release \u9875\u9762\u4E0B\u8F7D\u5E76\u624B\u52A8\u5B89\u88C5",updateNoAsset:"\u672A\u627E\u5230\u66F4\u65B0\u6587\u4EF6",updateFail:"\u66F4\u65B0\u5931\u8D25",cmdCheckUpdate:"\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0",platformWechat:"\u5FAE\u4FE1\u516C\u4F17\u53F7",platformZhihu:"\u77E5\u4E4E",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"\u590D\u5236 HTML",platformDownload:"\u4E0B\u8F7D HTML",cmdShowLog:"\u67E5\u770B\u5BFC\u51FA\u65E5\u5FD7",logTitle:"\u5BFC\u51FA\u65E5\u5FD7",logEmpty:"\u6682\u65E0\u65E5\u5FD7",logCopy:"\u590D\u5236",logExport:"\u5BFC\u51FA TXT",logClear:"\u6E05\u7A7A",logCopied:"\u65E5\u5FD7\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",logCopyFail:"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",logExported:"\u65E5\u5FD7\u5DF2\u5BFC\u51FA",noActiveFile:"\u6CA1\u6709\u6253\u5F00\u7684\u7B14\u8BB0",chooseFolder:"\u9009\u62E9\u6587\u4EF6\u5939",outputPathPlaceholder:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55"},en:{pluginName:"OmniExport",cmdExportCurrent:"Export current note as HTML",cmdExportVault:"Batch export entire vault",settingsTitle:"OmniExport Settings",settingsLanguage:"Language",settingsTheme:"Export Theme",settingsThemeLight:"Light",settingsThemeDark:"Dark",settingsThemeAuto:"Auto",settingsEmbedAssets:"Embed assets (single-file mode)",settingsEmbedDesc:"Embed CSS, JS, and images into HTML, generating a standalone .html file",settingsInteractive:"Interactive features",settingsInteractiveDesc:"Enable collapsible blocks, TOC navigation, search, dark/light toggle",settingsMermaid:"Render Mermaid diagrams",settingsMath:"Render math formulas",settingsCodeHighlight:"Code syntax highlighting",settingsSEO:"SEO & social cards",settingsSEODesc:"Auto-generate Open Graph tags for WeChat/Twitter sharing previews",settingsOutputPath:"Output directory",settingsOutputDesc:"Leave empty to output alongside the note",settingsAutoUpdate:"Auto-check for updates",exportSuccess:"Export successful",exportFail:"Export failed",exporting:"Exporting...",exportSingle:"Single file export",exportBatch:"Batch export",exportComplete:"Export complete, {count} files",updateAvailable:"New version {version} available, click to update",updateCheck:"Check for updates",updateLatest:"Already up to date",updateDownloading:"Downloading update...",updateManualInstall:"Please go to Release page to download and install manually",updateNoAsset:"No update file found",updateFail:"Update failed",cmdCheckUpdate:"Check for plugin updates",platformWechat:"WeChat",platformZhihu:"Zhihu",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"Copy HTML",platformDownload:"Download HTML",cmdShowLog:"View export log",logTitle:"Export Log",logEmpty:"No logs yet",logCopy:"Copy",logExport:"Export TXT",logClear:"Clear",logCopied:"Log copied to clipboard",logCopyFail:"Copy failed, please copy manually",logExported:"Log exported",noActiveFile:"No active note",chooseFolder:"Choose folder",outputPathPlaceholder:"Empty = same directory as note"}};function i(s,t="zh",e){let n=C[t]?.[s]||C.zh[s]||s;if(e)for(let[o,a]of Object.entries(e))n=n.replace(`{${o}}`,String(a));return n}var u=require("obsidian"),m=class extends u.SuggestModal{constructor(t,e){super(t),this.onSelect=e,this.setPlaceholder(this.app.vault.getName())}getAllFolders(){let t=[],n=[this.app.vault.getRoot()];for(;n.length>0;){let o=n.shift();t.push(o);for(let a of o.children)a instanceof u.TFolder&&n.push(a)}return t}getSuggestions(t){let e=this.getAllFolders(),n=t.toLowerCase(),o=[];(!t||"\u6839\u76EE\u5F55".includes(t)||"root".includes(n))&&o.push({path:"",displayName:"/ (\u6839\u76EE\u5F55 / Root)"});for(let a of e){let r=a.path==="/"?"":a.path,c=a.name;(!t||r.toLowerCase().includes(n)||c.toLowerCase().includes(n))&&o.push({path:r,displayName:r||"/ (\u6839\u76EE\u5F55 / Root)"})}return o}renderSuggestion(t,e){e.createEl("div",{text:t.displayName})}onChooseSuggestion(t){this.onSelect(t.path)}};var S={lang:"zh",theme:"auto",embedAssets:!0,interactive:!0,renderMermaid:!0,renderMath:!0,codeHighlight:!0,seo:!0,outputPath:"",autoUpdate:!0},f=class extends g.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}display(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings.lang;t.createEl("h2",{text:i("settingsTitle",e)}),new g.Setting(t).setName(i("settingsLanguage",e)).addDropdown(n=>n.addOption("zh","\u4E2D\u6587").addOption("en","English").setValue(e).onChange(async o=>{this.plugin.settings.lang=o,await this.plugin.saveSettings(),this.display()})),new g.Setting(t).setName(i("settingsTheme",e)).addDropdown(n=>n.addOption("light",i("settingsThemeLight",e)).addOption("dark",i("settingsThemeDark",e)).addOption("auto",i("settingsThemeAuto",e)).setValue(this.plugin.settings.theme).onChange(async o=>{this.plugin.settings.theme=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsEmbedAssets",e)).setDesc(i("settingsEmbedDesc",e)).addToggle(n=>n.setValue(this.plugin.settings.embedAssets).onChange(async o=>{this.plugin.settings.embedAssets=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsInteractive",e)).setDesc(i("settingsInteractiveDesc",e)).addToggle(n=>n.setValue(this.plugin.settings.interactive).onChange(async o=>{this.plugin.settings.interactive=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsMermaid",e)).addToggle(n=>n.setValue(this.plugin.settings.renderMermaid).onChange(async o=>{this.plugin.settings.renderMermaid=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsMath",e)).addToggle(n=>n.setValue(this.plugin.settings.renderMath).onChange(async o=>{this.plugin.settings.renderMath=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsCodeHighlight",e)).addToggle(n=>n.setValue(this.plugin.settings.codeHighlight).onChange(async o=>{this.plugin.settings.codeHighlight=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsSEO",e)).setDesc(i("settingsSEODesc",e)).addToggle(n=>n.setValue(this.plugin.settings.seo).onChange(async o=>{this.plugin.settings.seo=o,await this.plugin.saveSettings()})),new g.Setting(t).setName(i("settingsOutputPath",e)).setDesc(i("settingsOutputDesc",e)).addText(n=>n.setPlaceholder(i("outputPathPlaceholder",e)).setValue(this.plugin.settings.outputPath).onChange(async o=>{this.plugin.settings.outputPath=o,await this.plugin.saveSettings()})).addButton(n=>n.setIcon("folder").setTooltip(i("chooseFolder",e)).onClick(()=>{new m(this.app,async a=>{this.plugin.settings.outputPath=a,await this.plugin.saveSettings(),this.display()}).open()})),new g.Setting(t).setName(i("settingsAutoUpdate",e)).addToggle(n=>n.setValue(this.plugin.settings.autoUpdate).onChange(async o=>{this.plugin.settings.autoUpdate=o,await this.plugin.saveSettings()}))}};function w(s){let{title:t,content:e,settings:n,lang:o,createDate:a,modifyDate:r,tags:c}=s,d=n.theme==="dark"||n.theme==="auto"&&!0,L=n.seo?D(t,s):"",k=n.interactive?I(o):"",$=n.renderMermaid?V():"",M=n.renderMath?B():"",O=n.codeHighlight?_():"";return`<!DOCTYPE html>
<html lang="${o==="zh"?"zh-CN":"en"}" data-theme="${d?"dark":"light"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${d?"#1e1e2e":"#ffffff"}">
<title>${p(t)}</title>
${L}
<style>
${j(d)}
${n.interactive?R(d):""}
</style>
${O}
${M}
${$}
</head>
<body>
${n.interactive?H(t,o):""}
<article class="note-content">
${e}
</article>
${n.interactive?'<footer class="note-footer"><p class="meta-info">'+q(a,r,c,o)+"</p></footer>":""}
<script>
${k}
${n.renderMermaid?"mermaid.initialize({startOnLoad:true,theme:'"+(d?"dark":"default")+"'});":""}
<\/script>
</body>
</html>`}function D(s,t){let e=W(t.content).substring(0,160),n="";return`
<meta name="description" content="${p(e)}">
<meta property="og:title" content="${p(s)}">
<meta property="og:description" content="${p(e)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${t.lang==="zh"?"zh_CN":"en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p(s)}">
<meta name="twitter:description" content="${p(e)}">`}function j(s){return`
:root {
	--bg: ${s?"#1e1e2e":"#ffffff"};
	--text: ${s?"#cdd6f4":"#1e1e2e"};
	--text-secondary: ${s?"#a6adc8":"#6c7086"};
	--accent: #89b4fa;
	--border: ${s?"#313244":"#e0e0e0"};
	--code-bg: ${s?"#313244":"#f5f5f5"};
	--link: ${s?"#89b4fa":"#1e6ddc"};
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
`}function R(s){return`
/* TOC Navigation */
.toc-nav {
	position: fixed; top: 0; right: 0; width: 280px; height: 100vh;
	background: ${s?"#181825":"#f8f9fa"};
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
}`}function H(s,t){let e=t==="zh"?"\u76EE\u5F55":"TOC";return`
<button class="toc-toggle" onclick="document.querySelector('.toc-nav').classList.toggle('open')" aria-label="${e}">\u2630</button>
<nav class="toc-nav" id="toc-nav"><h3>${e}</h3><div id="toc-content"></div></nav>
<div class="search-box"><input type="text" id="search-input" placeholder="${t==="zh"?"\u641C\u7D22...":"Search..."}" oninput="searchNote(this.value)"></div>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Theme">\u{1F313}</button>`}function I(s){return`
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
}`}function V(){return'<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>'}function B(){return`<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
<\/script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async><\/script>`}function _(){return`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"><\/script>
<script>hljs.highlightAll();<\/script>`}function q(s,t,e,n){let o=[];return s&&o.push((n==="zh"?"\u521B\u5EFA\uFF1A":"Created: ")+s),t&&o.push((n==="zh"?"\u4FEE\u6539\uFF1A":"Modified: ")+t),e&&e.length&&o.push((n==="zh"?"\u6807\u7B7E\uFF1A":"Tags: ")+e.join(", ")),o.join(" | ")}function p(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function W(s){return s.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}var h=require("obsidian");var J="acheng-byte",X="obsidian-omniexport",G=`https://api.github.com/repos/${J}/${X}/releases/latest`;async function y(s){try{let t=await fetch(G,{headers:{Accept:"application/vnd.github.v3+json"}});if(!t.ok)return E(s);let e=await t.json(),n=e.tag_name?.replace(/^v/,"")||s;return{hasUpdate:Z(n,s)>0,latestVersion:n,downloadUrl:e.assets?.[0]?.browser_download_url||e.zipball_url||"",releaseUrl:e.html_url||"",changelog:e.body||""}}catch{return E(s)}}async function T(s,t,e){if(!s.downloadUrl)return new h.Notice(i("updateNoAsset",e)),!1;try{new h.Notice(i("updateDownloading",e));let n=await fetch(s.downloadUrl);if(!n.ok)throw new Error("Download failed");let o=await n.blob();if(s.downloadUrl.endsWith(".zip"))return window.open(s.releaseUrl,"_blank"),new h.Notice(i("updateManualInstall",e)),!0;let a=await o.arrayBuffer();return window.open(s.releaseUrl,"_blank"),new h.Notice(i("updateManualInstall",e)),!0}catch(n){return console.error(n),new h.Notice(i("updateFail",e)),!1}}function E(s){return{hasUpdate:!1,latestVersion:s,downloadUrl:"",releaseUrl:"",changelog:""}}function Z(s,t){let e=s.split(".").map(Number),n=t.split(".").map(Number);for(let o=0;o<3;o++){let a=e[o]||0,r=n[o]||0;if(a>r)return 1;if(a<r)return-1}return 0}var x=class{constructor(t="zh"){this.entries=[];this.lang=t}setLang(t){this.lang=t}now(){return new Date().toLocaleTimeString(this.lang==="zh"?"zh-CN":"en-US",{hour12:!1})}info(t){this.entries.push({time:this.now(),level:"info",message:t}),console.log(`[OmniExport][INFO] ${t}`)}warn(t){this.entries.push({time:this.now(),level:"warn",message:t}),console.warn(`[OmniExport][WARN] ${t}`)}error(t){this.entries.push({time:this.now(),level:"error",message:t}),console.error(`[OmniExport][ERROR] ${t}`)}success(t){this.entries.push({time:this.now(),level:"success",message:t}),console.log(`[OmniExport][OK] ${t}`)}getText(){let t=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.map(n=>`[${n.time}] [${t[n.level]}] ${n.message}`).join(`
`)}get count(){return this.entries.length}clear(){this.entries=[]}async copyToClipboard(){try{let t=this.getText();return await navigator.clipboard.writeText(t),!0}catch{let t=document.createElement("textarea");t.value=this.getText(),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let e=document.execCommand("copy");return document.body.removeChild(t),e}}async exportToTXT(t){let e=new Date().toISOString().replace(/[:.]/g,"-").substring(0,19),n=`omniexport-log-${t}-${e}.txt`,o=`OmniExport \u65E5\u5FD7 / Log
========================
\u5BFC\u51FA\u65F6\u95F4: ${new Date().toLocaleString(this.lang==="zh"?"zh-CN":"en-US")}
Vault: ${t}
========================

${this.getText()}`,a=new Blob([o],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(a),c=document.createElement("a");return c.href=r,c.download=n,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(r),n}};var v=class extends l.Plugin{async onload(){await this.loadSettings(),this.logger=new x(this.settings.lang),this.logger.info("Plugin loaded"),this.addCommand({id:"export-current-note",name:i("cmdExportCurrent",this.settings.lang),callback:()=>this.exportCurrentNote()}),this.addCommand({id:"export-vault",name:i("cmdExportVault",this.settings.lang),callback:()=>this.exportVault()}),this.addCommand({id:"check-update",name:i("cmdCheckUpdate",this.settings.lang),callback:()=>this.manualCheckUpdate()}),this.addCommand({id:"show-log",name:i("cmdShowLog",this.settings.lang),callback:()=>this.showLogModal()}),this.addSettingTab(new f(this.app,this)),this.settings.autoUpdate&&this.checkForUpdate()}async exportCurrentNote(){this.logger.clear(),this.logger.info(i("exportSingle",this.settings.lang));let t=this.app.workspace.getActiveFile();if(!t){this.logger.warn(i("noActiveFile",this.settings.lang)),new l.Notice(i("exportFail",this.settings.lang)),this.showLogModal();return}this.logger.info(`${i("exporting",this.settings.lang)} ${t.path}`),new l.Notice(i("exporting",this.settings.lang));try{let e=await this.app.vault.read(t);this.logger.info(`Read ${e.length} chars`);let n=await this.renderMarkdown(e,t);this.logger.info("Markdown rendered");let o=w({title:t.basename,content:n,settings:this.settings,lang:this.settings.lang,modifyDate:t.stat.mtime?new Date(t.stat.mtime).toLocaleDateString(this.settings.lang==="zh"?"zh-CN":"en-US"):void 0});this.logger.info(`HTML generated (${o.length} chars)`);let a=this.getOutputPath(t);this.logger.info(`Output: ${a}`),await this.saveHTML(a,o),this.logger.success(i("exportSuccess",this.settings.lang)),new l.Notice(i("exportSuccess",this.settings.lang))}catch(e){let n=e instanceof Error?e.message:String(e);this.logger.error(`Export failed: ${n}`),new l.Notice(`${i("exportFail",this.settings.lang)}: ${n}`)}}async exportVault(){this.logger.clear(),this.logger.info(i("exportBatch",this.settings.lang)),new l.Notice(i("exporting",this.settings.lang));let t=this.app.vault.getMarkdownFiles();this.logger.info(`Found ${t.length} markdown files`);let e=0,n=0;for(let o of t)try{let a=await this.app.vault.read(o),r=await this.renderMarkdown(a,o),c=w({title:o.basename,content:r,settings:this.settings,lang:this.settings.lang}),d=this.getOutputPath(o);await this.saveHTML(d,c),e++}catch(a){n++;let r=a instanceof Error?a.message:String(a);this.logger.error(`Failed: ${o.path} - ${r}`)}this.logger.success(`${i("exportComplete",this.settings.lang,{count:e})}${n>0?`, ${n} failed`:""}`),new l.Notice(i("exportComplete",this.settings.lang,{count:e}))}async renderMarkdown(t,e){let n=document.createElement("div");try{return await l.MarkdownRenderer.renderMarkdown(t,n,e.path,new l.Component),n.innerHTML}finally{n.remove()}}getOutputPath(t){return this.settings.outputPath?`${this.settings.outputPath}/${t.basename}.html`:t.path.replace(/\.md$/i,".html")}async saveHTML(t,e){let n=t.replace(/\\/g,"/"),o=n.lastIndexOf("/"),a=o>0?n.substring(0,o):"";a&&(this.app.vault.getAbstractFileByPath(a)||(await this.app.vault.createFolder(a),this.logger.info(`Created folder: ${a}`)));let r=this.app.vault.getAbstractFileByPath(n);r&&r instanceof l.TFile?await this.app.vault.modify(r,e):await this.app.vault.create(n,e)}showLogModal(){let{app:t,logger:e,settings:n}=this,o=n.lang,a=document.createElement("div");a.className="omniexport-log-modal",a.innerHTML=`
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${i("logTitle",o)}</h3>
					<button class="omniexport-log-close">&times;</button>
				</div>
				<div class="omniexport-log-body">
					<pre class="omniexport-log-text">${e.getText()||i("logEmpty",o)}</pre>
				</div>
				<div class="omniexport-log-actions">
					<button class="omniexport-log-btn omniexport-log-copy">${i("logCopy",o)}</button>
					<button class="omniexport-log-btn omniexport-log-export">${i("logExport",o)}</button>
					<button class="omniexport-log-btn omniexport-log-clear">${i("logClear",o)}</button>
				</div>
			</div>
		`,document.body.appendChild(a);let r=()=>a.remove();a.querySelector(".omniexport-log-close").addEventListener("click",r),a.querySelector(".omniexport-log-overlay").addEventListener("click",r),a.querySelector(".omniexport-log-copy").addEventListener("click",async()=>{let c=await e.copyToClipboard();new l.Notice(c?i("logCopied",o):i("logCopyFail",o))}),a.querySelector(".omniexport-log-export").addEventListener("click",async()=>{let c=t.vault.getName(),d=await e.exportToTXT(c);new l.Notice(`${i("logExported",o)}: ${d}`)}),a.querySelector(".omniexport-log-clear").addEventListener("click",()=>{e.clear(),a.querySelector(".omniexport-log-text").textContent=i("logEmpty",o)})}async checkForUpdate(){try{let t=await y(this.manifest.version);t.hasUpdate&&(this.logger.info(`Update available: ${t.latestVersion}`),new l.Notice(i("updateAvailable",this.settings.lang,{version:t.latestVersion})))}catch{}}async manualCheckUpdate(){new l.Notice(i("updateCheck",this.settings.lang));try{let t=await y(this.manifest.version);t.hasUpdate?(new l.Notice(i("updateAvailable",this.settings.lang,{version:t.latestVersion})),await T(t,this.manifest.dir,this.settings.lang)):new l.Notice(i("updateLatest",this.settings.lang))}catch{new l.Notice(i("updateFail",this.settings.lang))}}async loadSettings(){this.settings=Object.assign({},S,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};
