var x=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var N=(a,t)=>{for(var e in t)x(a,e,{get:t[e],enumerable:!0})},z=(a,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of O(t))!U.call(a,i)&&i!==e&&x(a,i,{get:()=>t[i],enumerable:!(n=M(t,i))||n.enumerable});return a};var A=a=>z(x({},"__esModule",{value:!0}),a);var G={};N(G,{default:()=>f});module.exports=A(G);var r=require("obsidian");var c=require("obsidian");var w={zh:{pluginName:"\u4E07\u80FD\u5BFC\u51FA",cmdExportCurrent:"\u5BFC\u51FA\u5F53\u524D\u7B14\u8BB0\u4E3A HTML",cmdExportVault:"\u6279\u91CF\u5BFC\u51FA\u6574\u4E2A\u4ED3\u5E93",settingsTitle:"\u4E07\u80FD\u5BFC\u51FA\u8BBE\u7F6E",settingsLanguage:"\u8BED\u8A00 / Language",settingsTheme:"\u5BFC\u51FA\u4E3B\u9898",settingsThemeLight:"\u6D45\u8272",settingsThemeDark:"\u6DF1\u8272",settingsThemeAuto:"\u8DDF\u968F\u7CFB\u7EDF",settingsEmbedAssets:"\u5185\u5D4C\u8D44\u6E90\uFF08\u5355\u6587\u4EF6\u6A21\u5F0F\uFF09",settingsEmbedDesc:"\u5C06 CSS\u3001JS\u3001\u56FE\u7247\u5168\u90E8\u5185\u5D4C\u5230 HTML \u4E2D\uFF0C\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 .html \u6587\u4EF6",settingsInteractive:"\u4EA4\u4E92\u5F0F\u529F\u80FD",settingsInteractiveDesc:"\u542F\u7528\u6298\u53E0\u5757\u3001\u76EE\u5F55\u5BFC\u822A\u3001\u641C\u7D22\u3001\u6697\u8272/\u4EAE\u8272\u5207\u6362",settingsMermaid:"\u6E32\u67D3 Mermaid \u56FE\u8868",settingsMath:"\u6E32\u67D3\u6570\u5B66\u516C\u5F0F",settingsCodeHighlight:"\u4EE3\u7801\u8BED\u6CD5\u9AD8\u4EAE",settingsSEO:"SEO \u4E0E\u793E\u4EA4\u5361\u7247",settingsSEODesc:"\u81EA\u52A8\u751F\u6210 Open Graph \u6807\u7B7E\uFF0C\u5206\u4EAB\u5230\u5FAE\u4FE1/\u63A8\u7279\u65F6\u663E\u793A\u9884\u89C8",settingsOutputPath:"\u8F93\u51FA\u76EE\u5F55",settingsOutputDesc:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsAutoUpdate:"\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0",exportSuccess:"\u5BFC\u51FA\u6210\u529F",exportFail:"\u5BFC\u51FA\u5931\u8D25",exporting:"\u6B63\u5728\u5BFC\u51FA...",exportSingle:"\u5355\u6587\u4EF6\u5BFC\u51FA",exportBatch:"\u6279\u91CF\u5BFC\u51FA",exportComplete:"\u5BFC\u51FA\u5B8C\u6210\uFF0C\u5171 {count} \u4E2A\u6587\u4EF6",updateAvailable:"\u53D1\u73B0\u65B0\u7248\u672C {version}\uFF0C\u70B9\u51FB\u66F4\u65B0",updateCheck:"\u68C0\u67E5\u66F4\u65B0",updateLatest:"\u5DF2\u662F\u6700\u65B0\u7248\u672C",updateDownloading:"\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0...",updateManualInstall:"\u8BF7\u524D\u5F80 Release \u9875\u9762\u4E0B\u8F7D\u5E76\u624B\u52A8\u5B89\u88C5",updateNoAsset:"\u672A\u627E\u5230\u66F4\u65B0\u6587\u4EF6",updateFail:"\u66F4\u65B0\u5931\u8D25",cmdCheckUpdate:"\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0",platformWechat:"\u5FAE\u4FE1\u516C\u4F17\u53F7",platformZhihu:"\u77E5\u4E4E",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"\u590D\u5236 HTML",platformDownload:"\u4E0B\u8F7D HTML",cmdShowLog:"\u67E5\u770B\u5BFC\u51FA\u65E5\u5FD7",logTitle:"\u5BFC\u51FA\u65E5\u5FD7",logEmpty:"\u6682\u65E0\u65E5\u5FD7",logCopy:"\u590D\u5236",logExport:"\u5BFC\u51FA TXT",logClear:"\u6E05\u7A7A",logCopied:"\u65E5\u5FD7\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",logCopyFail:"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",logExported:"\u65E5\u5FD7\u5DF2\u5BFC\u51FA",noActiveFile:"\u6CA1\u6709\u6253\u5F00\u7684\u7B14\u8BB0"},en:{pluginName:"OmniExport",cmdExportCurrent:"Export current note as HTML",cmdExportVault:"Batch export entire vault",settingsTitle:"OmniExport Settings",settingsLanguage:"Language",settingsTheme:"Export Theme",settingsThemeLight:"Light",settingsThemeDark:"Dark",settingsThemeAuto:"Auto",settingsEmbedAssets:"Embed assets (single-file mode)",settingsEmbedDesc:"Embed CSS, JS, and images into HTML, generating a standalone .html file",settingsInteractive:"Interactive features",settingsInteractiveDesc:"Enable collapsible blocks, TOC navigation, search, dark/light toggle",settingsMermaid:"Render Mermaid diagrams",settingsMath:"Render math formulas",settingsCodeHighlight:"Code syntax highlighting",settingsSEO:"SEO & social cards",settingsSEODesc:"Auto-generate Open Graph tags for WeChat/Twitter sharing previews",settingsOutputPath:"Output directory",settingsOutputDesc:"Leave empty to output alongside the note",settingsAutoUpdate:"Auto-check for updates",exportSuccess:"Export successful",exportFail:"Export failed",exporting:"Exporting...",exportSingle:"Single file export",exportBatch:"Batch export",exportComplete:"Export complete, {count} files",updateAvailable:"New version {version} available, click to update",updateCheck:"Check for updates",updateLatest:"Already up to date",updateDownloading:"Downloading update...",updateManualInstall:"Please go to Release page to download and install manually",updateNoAsset:"No update file found",updateFail:"Update failed",cmdCheckUpdate:"Check for plugin updates",platformWechat:"WeChat",platformZhihu:"Zhihu",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"Copy HTML",platformDownload:"Download HTML",cmdShowLog:"View export log",logTitle:"Export Log",logEmpty:"No logs yet",logCopy:"Copy",logExport:"Export TXT",logClear:"Clear",logCopied:"Log copied to clipboard",logCopyFail:"Copy failed, please copy manually",logExported:"Log exported",noActiveFile:"No active note"}};function o(a,t="zh",e){let n=w[t]?.[a]||w.zh[a]||a;if(e)for(let[i,s]of Object.entries(e))n=n.replace(`{${i}}`,String(s));return n}var y={lang:"zh",theme:"auto",embedAssets:!0,interactive:!0,renderMermaid:!0,renderMath:!0,codeHighlight:!0,seo:!0,outputPath:"",autoUpdate:!0},m=class extends c.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}display(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings.lang;t.createEl("h2",{text:o("settingsTitle",e)}),new c.Setting(t).setName(o("settingsLanguage",e)).addDropdown(n=>n.addOption("zh","\u4E2D\u6587").addOption("en","English").setValue(e).onChange(async i=>{this.plugin.settings.lang=i,await this.plugin.saveSettings(),this.display()})),new c.Setting(t).setName(o("settingsTheme",e)).addDropdown(n=>n.addOption("light",o("settingsThemeLight",e)).addOption("dark",o("settingsThemeDark",e)).addOption("auto",o("settingsThemeAuto",e)).setValue(this.plugin.settings.theme).onChange(async i=>{this.plugin.settings.theme=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsEmbedAssets",e)).setDesc(o("settingsEmbedDesc",e)).addToggle(n=>n.setValue(this.plugin.settings.embedAssets).onChange(async i=>{this.plugin.settings.embedAssets=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsInteractive",e)).setDesc(o("settingsInteractiveDesc",e)).addToggle(n=>n.setValue(this.plugin.settings.interactive).onChange(async i=>{this.plugin.settings.interactive=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsMermaid",e)).addToggle(n=>n.setValue(this.plugin.settings.renderMermaid).onChange(async i=>{this.plugin.settings.renderMermaid=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsMath",e)).addToggle(n=>n.setValue(this.plugin.settings.renderMath).onChange(async i=>{this.plugin.settings.renderMath=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsCodeHighlight",e)).addToggle(n=>n.setValue(this.plugin.settings.codeHighlight).onChange(async i=>{this.plugin.settings.codeHighlight=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsSEO",e)).setDesc(o("settingsSEODesc",e)).addToggle(n=>n.setValue(this.plugin.settings.seo).onChange(async i=>{this.plugin.settings.seo=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsOutputPath",e)).setDesc(o("settingsOutputDesc",e)).addText(n=>n.setPlaceholder("e.g. exports/html").setValue(this.plugin.settings.outputPath).onChange(async i=>{this.plugin.settings.outputPath=i,await this.plugin.saveSettings()})),new c.Setting(t).setName(o("settingsAutoUpdate",e)).addToggle(n=>n.setValue(this.plugin.settings.autoUpdate).onChange(async i=>{this.plugin.settings.autoUpdate=i,await this.plugin.saveSettings()}))}};function b(a){let{title:t,content:e,settings:n,lang:i,createDate:s,modifyDate:l,tags:g}=a,d=n.theme==="dark"||n.theme==="auto"&&!0,S=n.seo?D(t,a):"",T=n.interactive?H(i):"",L=n.renderMermaid?R():"",k=n.renderMath?I():"",$=n.codeHighlight?V():"";return`<!DOCTYPE html>
<html lang="${i==="zh"?"zh-CN":"en"}" data-theme="${d?"dark":"light"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${d?"#1e1e2e":"#ffffff"}">
<title>${p(t)}</title>
${S}
<style>
${j(d)}
${n.interactive?P(d):""}
</style>
${$}
${k}
${L}
</head>
<body>
${n.interactive?F(t,i):""}
<article class="note-content">
${e}
</article>
${n.interactive?'<footer class="note-footer"><p class="meta-info">'+q(s,l,g,i)+"</p></footer>":""}
<script>
${T}
${n.renderMermaid?"mermaid.initialize({startOnLoad:true,theme:'"+(d?"dark":"default")+"'});":""}
<\/script>
</body>
</html>`}function D(a,t){let e=_(t.content).substring(0,160),n="";return`
<meta name="description" content="${p(e)}">
<meta property="og:title" content="${p(a)}">
<meta property="og:description" content="${p(e)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${t.lang==="zh"?"zh_CN":"en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p(a)}">
<meta name="twitter:description" content="${p(e)}">`}function j(a){return`
:root {
	--bg: ${a?"#1e1e2e":"#ffffff"};
	--text: ${a?"#cdd6f4":"#1e1e2e"};
	--text-secondary: ${a?"#a6adc8":"#6c7086"};
	--accent: #89b4fa;
	--border: ${a?"#313244":"#e0e0e0"};
	--code-bg: ${a?"#313244":"#f5f5f5"};
	--link: ${a?"#89b4fa":"#1e6ddc"};
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
`}function P(a){return`
/* TOC Navigation */
.toc-nav {
	position: fixed; top: 0; right: 0; width: 280px; height: 100vh;
	background: ${a?"#181825":"#f8f9fa"};
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
}`}function F(a,t){let e=t==="zh"?"\u76EE\u5F55":"TOC";return`
<button class="toc-toggle" onclick="document.querySelector('.toc-nav').classList.toggle('open')" aria-label="${e}">\u2630</button>
<nav class="toc-nav" id="toc-nav"><h3>${e}</h3><div id="toc-content"></div></nav>
<div class="search-box"><input type="text" id="search-input" placeholder="${t==="zh"?"\u641C\u7D22...":"Search..."}" oninput="searchNote(this.value)"></div>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Theme">\u{1F313}</button>`}function H(a){return`
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
}`}function R(){return'<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>'}function I(){return`<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
<\/script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async><\/script>`}function V(){return`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"><\/script>
<script>hljs.highlightAll();<\/script>`}function q(a,t,e,n){let i=[];return a&&i.push((n==="zh"?"\u521B\u5EFA\uFF1A":"Created: ")+a),t&&i.push((n==="zh"?"\u4FEE\u6539\uFF1A":"Modified: ")+t),e&&e.length&&i.push((n==="zh"?"\u6807\u7B7E\uFF1A":"Tags: ")+e.join(", ")),i.join(" | ")}function p(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _(a){return a.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}var h=require("obsidian");var B="acheng-byte",W="obsidian-omniexport",J=`https://api.github.com/repos/${B}/${W}/releases/latest`;async function v(a){try{let t=await fetch(J,{headers:{Accept:"application/vnd.github.v3+json"}});if(!t.ok)return C(a);let e=await t.json(),n=e.tag_name?.replace(/^v/,"")||a;return{hasUpdate:X(n,a)>0,latestVersion:n,downloadUrl:e.assets?.[0]?.browser_download_url||e.zipball_url||"",releaseUrl:e.html_url||"",changelog:e.body||""}}catch{return C(a)}}async function E(a,t,e){if(!a.downloadUrl)return new h.Notice(o("updateNoAsset",e)),!1;try{new h.Notice(o("updateDownloading",e));let n=await fetch(a.downloadUrl);if(!n.ok)throw new Error("Download failed");let i=await n.blob();if(a.downloadUrl.endsWith(".zip"))return window.open(a.releaseUrl,"_blank"),new h.Notice(o("updateManualInstall",e)),!0;let s=await i.arrayBuffer();return window.open(a.releaseUrl,"_blank"),new h.Notice(o("updateManualInstall",e)),!0}catch(n){return console.error(n),new h.Notice(o("updateFail",e)),!1}}function C(a){return{hasUpdate:!1,latestVersion:a,downloadUrl:"",releaseUrl:"",changelog:""}}function X(a,t){let e=a.split(".").map(Number),n=t.split(".").map(Number);for(let i=0;i<3;i++){let s=e[i]||0,l=n[i]||0;if(s>l)return 1;if(s<l)return-1}return 0}var u=class{constructor(t="zh"){this.entries=[];this.lang=t}setLang(t){this.lang=t}now(){return new Date().toLocaleTimeString(this.lang==="zh"?"zh-CN":"en-US",{hour12:!1})}info(t){this.entries.push({time:this.now(),level:"info",message:t}),console.log(`[OmniExport][INFO] ${t}`)}warn(t){this.entries.push({time:this.now(),level:"warn",message:t}),console.warn(`[OmniExport][WARN] ${t}`)}error(t){this.entries.push({time:this.now(),level:"error",message:t}),console.error(`[OmniExport][ERROR] ${t}`)}success(t){this.entries.push({time:this.now(),level:"success",message:t}),console.log(`[OmniExport][OK] ${t}`)}getText(){let t=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.map(n=>`[${n.time}] [${t[n.level]}] ${n.message}`).join(`
`)}get count(){return this.entries.length}clear(){this.entries=[]}async copyToClipboard(){try{let t=this.getText();return await navigator.clipboard.writeText(t),!0}catch{let t=document.createElement("textarea");t.value=this.getText(),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let e=document.execCommand("copy");return document.body.removeChild(t),e}}async exportToTXT(t){let e=new Date().toISOString().replace(/[:.]/g,"-").substring(0,19),n=`omniexport-log-${t}-${e}.txt`,i=`OmniExport \u65E5\u5FD7 / Log
========================
\u5BFC\u51FA\u65F6\u95F4: ${new Date().toLocaleString(this.lang==="zh"?"zh-CN":"en-US")}
Vault: ${t}
========================

${this.getText()}`,s=new Blob([i],{type:"text/plain;charset=utf-8"}),l=URL.createObjectURL(s),g=document.createElement("a");return g.href=l,g.download=n,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(l),n}};var f=class extends r.Plugin{async onload(){await this.loadSettings(),this.logger=new u(this.settings.lang),this.logger.info("Plugin loaded"),this.addCommand({id:"export-current-note",name:o("cmdExportCurrent",this.settings.lang),callback:()=>this.exportCurrentNote()}),this.addCommand({id:"export-vault",name:o("cmdExportVault",this.settings.lang),callback:()=>this.exportVault()}),this.addCommand({id:"check-update",name:o("cmdCheckUpdate",this.settings.lang),callback:()=>this.manualCheckUpdate()}),this.addCommand({id:"show-log",name:o("cmdShowLog",this.settings.lang),callback:()=>this.showLogModal()}),this.addSettingTab(new m(this.app,this)),this.settings.autoUpdate&&this.checkForUpdate()}async exportCurrentNote(){this.logger.clear(),this.logger.info(o("exportSingle",this.settings.lang));let t=this.app.workspace.getActiveFile();if(!t){this.logger.warn(o("noActiveFile",this.settings.lang)),new r.Notice(o("exportFail",this.settings.lang)),this.showLogModal();return}this.logger.info(`${o("exporting",this.settings.lang)} ${t.path}`),new r.Notice(o("exporting",this.settings.lang));try{let e=await this.app.vault.read(t);this.logger.info(`Read ${e.length} chars`);let n=await this.renderMarkdown(e,t);this.logger.info("Markdown rendered");let i=b({title:t.basename,content:n,settings:this.settings,lang:this.settings.lang,modifyDate:t.stat.mtime?new Date(t.stat.mtime).toLocaleDateString(this.settings.lang==="zh"?"zh-CN":"en-US"):void 0});this.logger.info(`HTML generated (${i.length} chars)`);let s=this.getOutputPath(t);this.logger.info(`Output: ${s}`),await this.saveHTML(s,i),this.logger.success(o("exportSuccess",this.settings.lang)),new r.Notice(o("exportSuccess",this.settings.lang))}catch(e){let n=e instanceof Error?e.message:String(e);this.logger.error(`Export failed: ${n}`),new r.Notice(`${o("exportFail",this.settings.lang)}: ${n}`)}}async exportVault(){this.logger.clear(),this.logger.info(o("exportBatch",this.settings.lang)),new r.Notice(o("exporting",this.settings.lang));let t=this.app.vault.getMarkdownFiles();this.logger.info(`Found ${t.length} markdown files`);let e=0,n=0;for(let i of t)try{let s=await this.app.vault.read(i),l=await this.renderMarkdown(s,i),g=b({title:i.basename,content:l,settings:this.settings,lang:this.settings.lang}),d=this.getOutputPath(i);await this.saveHTML(d,g),e++}catch(s){n++;let l=s instanceof Error?s.message:String(s);this.logger.error(`Failed: ${i.path} - ${l}`)}this.logger.success(`${o("exportComplete",this.settings.lang,{count:e})}${n>0?`, ${n} failed`:""}`),new r.Notice(o("exportComplete",this.settings.lang,{count:e}))}async renderMarkdown(t,e){let n=document.createElement("div");try{return await r.MarkdownRenderer.renderMarkdown(t,n,e.path,new r.Component),n.innerHTML}finally{n.remove()}}getOutputPath(t){return this.settings.outputPath?`${this.settings.outputPath}/${t.basename}.html`:t.path.replace(/\.md$/i,".html")}async saveHTML(t,e){let n=t.replace(/\\/g,"/"),i=n.lastIndexOf("/"),s=i>0?n.substring(0,i):"";s&&(this.app.vault.getAbstractFileByPath(s)||(await this.app.vault.createFolder(s),this.logger.info(`Created folder: ${s}`)));let l=this.app.vault.getAbstractFileByPath(n);l&&l instanceof r.TFile?await this.app.vault.modify(l,e):await this.app.vault.create(n,e)}showLogModal(){let{app:t,logger:e,settings:n}=this,i=n.lang,s=document.createElement("div");s.className="omniexport-log-modal",s.innerHTML=`
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${o("logTitle",i)}</h3>
					<button class="omniexport-log-close">&times;</button>
				</div>
				<div class="omniexport-log-body">
					<pre class="omniexport-log-text">${e.getText()||o("logEmpty",i)}</pre>
				</div>
				<div class="omniexport-log-actions">
					<button class="omniexport-log-btn omniexport-log-copy">${o("logCopy",i)}</button>
					<button class="omniexport-log-btn omniexport-log-export">${o("logExport",i)}</button>
					<button class="omniexport-log-btn omniexport-log-clear">${o("logClear",i)}</button>
				</div>
			</div>
		`,document.body.appendChild(s);let l=()=>s.remove();s.querySelector(".omniexport-log-close").addEventListener("click",l),s.querySelector(".omniexport-log-overlay").addEventListener("click",l),s.querySelector(".omniexport-log-copy").addEventListener("click",async()=>{let g=await e.copyToClipboard();new r.Notice(g?o("logCopied",i):o("logCopyFail",i))}),s.querySelector(".omniexport-log-export").addEventListener("click",async()=>{let g=t.vault.getName(),d=await e.exportToTXT(g);new r.Notice(`${o("logExported",i)}: ${d}`)}),s.querySelector(".omniexport-log-clear").addEventListener("click",()=>{e.clear(),s.querySelector(".omniexport-log-text").textContent=o("logEmpty",i)})}async checkForUpdate(){try{let t=await v(this.manifest.version);t.hasUpdate&&(this.logger.info(`Update available: ${t.latestVersion}`),new r.Notice(o("updateAvailable",this.settings.lang,{version:t.latestVersion})))}catch{}}async manualCheckUpdate(){new r.Notice(o("updateCheck",this.settings.lang));try{let t=await v(this.manifest.version);t.hasUpdate?(new r.Notice(o("updateAvailable",this.settings.lang,{version:t.latestVersion})),await E(t,this.manifest.dir,this.settings.lang)):new r.Notice(o("updateLatest",this.settings.lang))}catch{new r.Notice(o("updateFail",this.settings.lang))}}async loadSettings(){this.settings=Object.assign({},y,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};
