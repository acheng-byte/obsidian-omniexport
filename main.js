var u=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var O=(s,t)=>{for(var n in t)u(s,n,{get:t[n],enumerable:!0})},L=(s,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of E(t))!M.call(s,i)&&i!==n&&u(s,i,{get:()=>t[i],enumerable:!(e=C(t,i))||e.enumerable});return s};var $=s=>L(u({},"__esModule",{value:!0}),s);var q={};O(q,{default:()=>h});module.exports=$(q);var c=require("obsidian");var r=require("obsidian");var x={zh:{pluginName:"\u4E07\u80FD\u5BFC\u51FA",cmdExportCurrent:"\u5BFC\u51FA\u5F53\u524D\u7B14\u8BB0\u4E3A HTML",cmdExportVault:"\u6279\u91CF\u5BFC\u51FA\u6574\u4E2A\u4ED3\u5E93",settingsTitle:"\u4E07\u80FD\u5BFC\u51FA\u8BBE\u7F6E",settingsLanguage:"\u8BED\u8A00 / Language",settingsTheme:"\u5BFC\u51FA\u4E3B\u9898",settingsThemeLight:"\u6D45\u8272",settingsThemeDark:"\u6DF1\u8272",settingsThemeAuto:"\u8DDF\u968F\u7CFB\u7EDF",settingsEmbedAssets:"\u5185\u5D4C\u8D44\u6E90\uFF08\u5355\u6587\u4EF6\u6A21\u5F0F\uFF09",settingsEmbedDesc:"\u5C06 CSS\u3001JS\u3001\u56FE\u7247\u5168\u90E8\u5185\u5D4C\u5230 HTML \u4E2D\uFF0C\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 .html \u6587\u4EF6",settingsInteractive:"\u4EA4\u4E92\u5F0F\u529F\u80FD",settingsInteractiveDesc:"\u542F\u7528\u6298\u53E0\u5757\u3001\u76EE\u5F55\u5BFC\u822A\u3001\u641C\u7D22\u3001\u6697\u8272/\u4EAE\u8272\u5207\u6362",settingsMermaid:"\u6E32\u67D3 Mermaid \u56FE\u8868",settingsMath:"\u6E32\u67D3\u6570\u5B66\u516C\u5F0F",settingsCodeHighlight:"\u4EE3\u7801\u8BED\u6CD5\u9AD8\u4EAE",settingsSEO:"SEO \u4E0E\u793E\u4EA4\u5361\u7247",settingsSEODesc:"\u81EA\u52A8\u751F\u6210 Open Graph \u6807\u7B7E\uFF0C\u5206\u4EAB\u5230\u5FAE\u4FE1/\u63A8\u7279\u65F6\u663E\u793A\u9884\u89C8",settingsOutputPath:"\u8F93\u51FA\u76EE\u5F55",settingsOutputDesc:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsAutoUpdate:"\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0",exportSuccess:"\u5BFC\u51FA\u6210\u529F",exportFail:"\u5BFC\u51FA\u5931\u8D25",exporting:"\u6B63\u5728\u5BFC\u51FA...",exportSingle:"\u5355\u6587\u4EF6\u5BFC\u51FA",exportBatch:"\u6279\u91CF\u5BFC\u51FA",exportComplete:"\u5BFC\u51FA\u5B8C\u6210\uFF0C\u5171 {count} \u4E2A\u6587\u4EF6",updateAvailable:"\u53D1\u73B0\u65B0\u7248\u672C {version}\uFF0C\u70B9\u51FB\u66F4\u65B0",updateCheck:"\u68C0\u67E5\u66F4\u65B0",updateLatest:"\u5DF2\u662F\u6700\u65B0\u7248\u672C",platformWechat:"\u5FAE\u4FE1\u516C\u4F17\u53F7",platformZhihu:"\u77E5\u4E4E",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"\u590D\u5236 HTML",platformDownload:"\u4E0B\u8F7D HTML"},en:{pluginName:"OmniExport",cmdExportCurrent:"Export current note as HTML",cmdExportVault:"Batch export entire vault",settingsTitle:"OmniExport Settings",settingsLanguage:"Language",settingsTheme:"Export Theme",settingsThemeLight:"Light",settingsThemeDark:"Dark",settingsThemeAuto:"Auto",settingsEmbedAssets:"Embed assets (single-file mode)",settingsEmbedDesc:"Embed CSS, JS, and images into HTML, generating a standalone .html file",settingsInteractive:"Interactive features",settingsInteractiveDesc:"Enable collapsible blocks, TOC navigation, search, dark/light toggle",settingsMermaid:"Render Mermaid diagrams",settingsMath:"Render math formulas",settingsCodeHighlight:"Code syntax highlighting",settingsSEO:"SEO & social cards",settingsSEODesc:"Auto-generate Open Graph tags for WeChat/Twitter sharing previews",settingsOutputPath:"Output directory",settingsOutputDesc:"Leave empty to output alongside the note",settingsAutoUpdate:"Auto-check for updates",exportSuccess:"Export successful",exportFail:"Export failed",exporting:"Exporting...",exportSingle:"Single file export",exportBatch:"Batch export",exportComplete:"Export complete, {count} files",updateAvailable:"New version {version} available, click to update",updateCheck:"Check for updates",updateLatest:"Already up to date",platformWechat:"WeChat",platformZhihu:"Zhihu",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"Copy HTML",platformDownload:"Download HTML"}};function a(s,t="zh",n){let e=x[t]?.[s]||x.zh[s]||s;if(n)for(let[i,o]of Object.entries(n))e=e.replace(`{${i}}`,String(o));return e}var b={lang:"zh",theme:"auto",embedAssets:!0,interactive:!0,renderMermaid:!0,renderMath:!0,codeHighlight:!0,seo:!0,outputPath:"",autoUpdate:!0},p=class extends r.PluginSettingTab{constructor(t,n){super(t,n),this.plugin=n}display(){let{containerEl:t}=this;t.empty();let n=this.plugin.settings.lang;t.createEl("h2",{text:a("settingsTitle",n)}),new r.Setting(t).setName(a("settingsLanguage",n)).addDropdown(e=>e.addOption("zh","\u4E2D\u6587").addOption("en","English").setValue(n).onChange(async i=>{this.plugin.settings.lang=i,await this.plugin.saveSettings(),this.display()})),new r.Setting(t).setName(a("settingsTheme",n)).addDropdown(e=>e.addOption("light",a("settingsThemeLight",n)).addOption("dark",a("settingsThemeDark",n)).addOption("auto",a("settingsThemeAuto",n)).setValue(this.plugin.settings.theme).onChange(async i=>{this.plugin.settings.theme=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsEmbedAssets",n)).setDesc(a("settingsEmbedDesc",n)).addToggle(e=>e.setValue(this.plugin.settings.embedAssets).onChange(async i=>{this.plugin.settings.embedAssets=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsInteractive",n)).setDesc(a("settingsInteractiveDesc",n)).addToggle(e=>e.setValue(this.plugin.settings.interactive).onChange(async i=>{this.plugin.settings.interactive=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsMermaid",n)).addToggle(e=>e.setValue(this.plugin.settings.renderMermaid).onChange(async i=>{this.plugin.settings.renderMermaid=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsMath",n)).addToggle(e=>e.setValue(this.plugin.settings.renderMath).onChange(async i=>{this.plugin.settings.renderMath=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsCodeHighlight",n)).addToggle(e=>e.setValue(this.plugin.settings.codeHighlight).onChange(async i=>{this.plugin.settings.codeHighlight=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsSEO",n)).setDesc(a("settingsSEODesc",n)).addToggle(e=>e.setValue(this.plugin.settings.seo).onChange(async i=>{this.plugin.settings.seo=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsOutputPath",n)).setDesc(a("settingsOutputDesc",n)).addText(e=>e.setPlaceholder("e.g. exports/html").setValue(this.plugin.settings.outputPath).onChange(async i=>{this.plugin.settings.outputPath=i,await this.plugin.saveSettings()})),new r.Setting(t).setName(a("settingsAutoUpdate",n)).addToggle(e=>e.setValue(this.plugin.settings.autoUpdate).onChange(async i=>{this.plugin.settings.autoUpdate=i,await this.plugin.saveSettings()}))}};function f(s){let{title:t,content:n,settings:e,lang:i,createDate:o,modifyDate:g,tags:m}=s,d=e.theme==="dark"||e.theme==="auto"&&!0,w=e.seo?j(t,s):"",y=e.interactive?A(i):"",S=e.renderMermaid?N():"",T=e.renderMath?H():"",k=e.codeHighlight?U():"";return`<!DOCTYPE html>
<html lang="${i==="zh"?"zh-CN":"en"}" data-theme="${d?"dark":"light"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${d?"#1e1e2e":"#ffffff"}">
<title>${l(t)}</title>
${w}
<style>
${P(d)}
${e.interactive?z(d):""}
</style>
${k}
${T}
${S}
</head>
<body>
${e.interactive?D(t,i):""}
<article class="note-content">
${n}
</article>
${e.interactive?'<footer class="note-footer"><p class="meta-info">'+F(o,g,m,i)+"</p></footer>":""}
<script>
${y}
${e.renderMermaid?"mermaid.initialize({startOnLoad:true,theme:'"+(d?"dark":"default")+"'});":""}
<\/script>
</body>
</html>`}function j(s,t){let n=V(t.content).substring(0,160),e="";return`
<meta name="description" content="${l(n)}">
<meta property="og:title" content="${l(s)}">
<meta property="og:description" content="${l(n)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${t.lang==="zh"?"zh_CN":"en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${l(s)}">
<meta name="twitter:description" content="${l(n)}">`}function P(s){return`
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
`}function z(s){return`
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
}`}function D(s,t){let n=t==="zh"?"\u76EE\u5F55":"TOC";return`
<button class="toc-toggle" onclick="document.querySelector('.toc-nav').classList.toggle('open')" aria-label="${n}">\u2630</button>
<nav class="toc-nav" id="toc-nav"><h3>${n}</h3><div id="toc-content"></div></nav>
<div class="search-box"><input type="text" id="search-input" placeholder="${t==="zh"?"\u641C\u7D22...":"Search..."}" oninput="searchNote(this.value)"></div>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Theme">\u{1F313}</button>`}function A(s){return`
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
}`}function N(){return'<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>'}function H(){return`<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
<\/script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async><\/script>`}function U(){return`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"><\/script>
<script>hljs.highlightAll();<\/script>`}function F(s,t,n,e){let i=[];return s&&i.push((e==="zh"?"\u521B\u5EFA\uFF1A":"Created: ")+s),t&&i.push((e==="zh"?"\u4FEE\u6539\uFF1A":"Modified: ")+t),n&&n.length&&i.push((e==="zh"?"\u6807\u7B7E\uFF1A":"Tags: ")+n.join(", ")),i.join(" | ")}function l(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function V(s){return s.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}var I="https://api.github.com/repos/acheng-byte/obsidian-omniexport/releases/latest";async function v(s){try{let t=await fetch(I,{headers:{Accept:"application/vnd.github.v3+json"}});if(!t.ok)return{hasUpdate:!1,latestVersion:s,downloadUrl:""};let n=await t.json(),e=n.tag_name?.replace(/^v/,"")||s;return{hasUpdate:B(e,s)>0,latestVersion:e,downloadUrl:n.html_url||""}}catch{return{hasUpdate:!1,latestVersion:s,downloadUrl:""}}}function B(s,t){let n=s.split(".").map(Number),e=t.split(".").map(Number);for(let i=0;i<3;i++){let o=n[i]||0,g=e[i]||0;if(o>g)return 1;if(o<g)return-1}return 0}var h=class extends c.Plugin{async onload(){await this.loadSettings(),this.addCommand({id:"export-current-note",name:a("cmdExportCurrent",this.settings.lang),callback:()=>this.exportCurrentNote()}),this.addCommand({id:"export-vault",name:a("cmdExportVault",this.settings.lang),callback:()=>this.exportVault()}),this.addSettingTab(new p(this.app,this)),this.settings.autoUpdate&&this.checkForUpdate(),console.log(`[OmniExport] Plugin loaded, lang=${this.settings.lang}`)}async exportCurrentNote(){let t=this.app.workspace.getActiveFile();if(!t){new c.Notice(a("exportFail",this.settings.lang));return}new c.Notice(a("exporting",this.settings.lang));try{let n=await this.app.vault.read(t),e=await this.renderMarkdown(n,t),i=f({title:t.basename,content:e,settings:this.settings,lang:this.settings.lang,modifyDate:t.stat.mtime?new Date(t.stat.mtime).toLocaleDateString(this.settings.lang==="zh"?"zh-CN":"en-US"):void 0}),o=this.getOutputPath(t);await this.saveHTML(o,i),new c.Notice(a("exportSuccess",this.settings.lang))}catch(n){console.error(n),new c.Notice(a("exportFail",this.settings.lang))}}async exportVault(){new c.Notice(a("exporting",this.settings.lang));let t=this.app.vault.getMarkdownFiles(),n=0;for(let e of t)try{let i=await this.app.vault.read(e),o=await this.renderMarkdown(i,e),g=f({title:e.basename,content:o,settings:this.settings,lang:this.settings.lang}),m=this.getOutputPath(e);await this.saveHTML(m,g),n++}catch(i){console.error(`Failed to export ${e.path}:`,i)}new c.Notice(a("exportComplete",this.settings.lang,{count:n}))}async renderMarkdown(t,n){return await this.app.markdownProcessor.process(t,{sourcePath:n.path})}getOutputPath(t){return this.settings.outputPath?`${this.settings.outputPath}/${t.basename}.html`:t.path.replace(/\.md$/,".html")}async saveHTML(t,n){let e=t.substring(0,t.lastIndexOf("/"));e&&(this.app.vault.getAbstractFileByPath(e)||await this.app.vault.createFolder(e));let i=this.app.vault.getAbstractFileByPath(t);i?await this.app.vault.modify(i,n):await this.app.vault.create(t,n)}async checkForUpdate(){try{let t=await v(this.manifest.version);t.hasUpdate&&new c.Notice(a("updateAvailable",this.settings.lang,{version:t.latestVersion}))}catch{}}async loadSettings(){this.settings=Object.assign({},b,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};
