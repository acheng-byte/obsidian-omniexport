var L=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var W=(r,e)=>{for(var n in e)L(r,n,{get:e[n],enumerable:!0})},_=(r,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of q(e))!B.call(r,o)&&o!==n&&L(r,o,{get:()=>e[o],enumerable:!(t=V(e,o))||t.enumerable});return r};var G=r=>_(L({},"__esModule",{value:!0}),r);var be={};W(be,{default:()=>$});module.exports=G(be);var d=require("obsidian");var p=require("obsidian");var z={zh:{pluginName:"\u4E07\u80FD\u5BFC\u51FA",cmdExportCurrent:"\u5BFC\u51FA\u5F53\u524D\u7B14\u8BB0\u4E3A HTML",cmdExportVault:"\u6279\u91CF\u5BFC\u51FA\u6574\u4E2A\u4ED3\u5E93",settingsTitle:"\u4E07\u80FD\u5BFC\u51FA\u8BBE\u7F6E",settingsLanguage:"\u8BED\u8A00 / Language",settingsTheme:"\u5BFC\u51FA\u4E3B\u9898",settingsThemeLight:"\u6D45\u8272",settingsThemeDark:"\u6DF1\u8272",settingsThemeAuto:"\u8DDF\u968F\u7CFB\u7EDF",settingsEmbedAssets:"\u5185\u5D4C\u8D44\u6E90\uFF08\u5355\u6587\u4EF6\u6A21\u5F0F\uFF09",settingsEmbedDesc:"\u5C06 CSS\u3001JS\u3001\u56FE\u7247\u5168\u90E8\u5185\u5D4C\u5230 HTML \u4E2D\uFF0C\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 .html \u6587\u4EF6",settingsInteractive:"\u4EA4\u4E92\u5F0F\u529F\u80FD",settingsInteractiveDesc:"\u542F\u7528\u6298\u53E0\u5757\u3001\u76EE\u5F55\u5BFC\u822A\u3001\u641C\u7D22\u3001\u6697\u8272/\u4EAE\u8272\u5207\u6362",settingsMermaid:"\u6E32\u67D3 Mermaid \u56FE\u8868",settingsMath:"\u6E32\u67D3\u6570\u5B66\u516C\u5F0F",settingsCodeHighlight:"\u4EE3\u7801\u8BED\u6CD5\u9AD8\u4EAE",settingsSEO:"SEO \u4E0E\u793E\u4EA4\u5361\u7247",settingsSEODesc:"\u81EA\u52A8\u751F\u6210 Open Graph \u6807\u7B7E\uFF0C\u5206\u4EAB\u5230\u5FAE\u4FE1/\u63A8\u7279\u65F6\u663E\u793A\u9884\u89C8",settingsOutputPath:"\u8F93\u51FA\u76EE\u5F55",settingsOutputDesc:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsAutoUpdate:"\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0",exportSuccess:"\u5BFC\u51FA\u6210\u529F",exportFail:"\u5BFC\u51FA\u5931\u8D25",exporting:"\u6B63\u5728\u5BFC\u51FA...",exportSingle:"\u5355\u6587\u4EF6\u5BFC\u51FA",exportBatch:"\u6279\u91CF\u5BFC\u51FA",exportComplete:"\u5BFC\u51FA\u5B8C\u6210\uFF0C\u5171 {count} \u4E2A\u6587\u4EF6",updateAvailable:"\u53D1\u73B0\u65B0\u7248\u672C {version}\uFF0C\u70B9\u51FB\u66F4\u65B0",updateCheck:"\u68C0\u67E5\u66F4\u65B0",updateLatest:"\u5DF2\u662F\u6700\u65B0\u7248\u672C",updateDownloading:"\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0...",updateManualInstall:"\u8BF7\u524D\u5F80 Release \u9875\u9762\u4E0B\u8F7D\u5E76\u624B\u52A8\u5B89\u88C5",updateNoAsset:"\u672A\u627E\u5230\u66F4\u65B0\u6587\u4EF6",updateFail:"\u66F4\u65B0\u5931\u8D25",cmdCheckUpdate:"\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0",platformWechat:"\u5FAE\u4FE1\u516C\u4F17\u53F7",platformZhihu:"\u77E5\u4E4E",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"\u590D\u5236 HTML",platformDownload:"\u4E0B\u8F7D HTML",cmdShowLog:"\u67E5\u770B\u5BFC\u51FA\u65E5\u5FD7",logTitle:"\u5BFC\u51FA\u65E5\u5FD7",logEmpty:"\u6682\u65E0\u65E5\u5FD7",logCopy:"\u590D\u5236",logExport:"\u5BFC\u51FA TXT",logClear:"\u6E05\u7A7A",logCopied:"\u65E5\u5FD7\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",logCopyFail:"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",logExported:"\u65E5\u5FD7\u5DF2\u5BFC\u51FA",noActiveFile:"\u6CA1\u6709\u6253\u5F00\u7684\u7B14\u8BB0",chooseFolder:"\u9009\u62E9\u6587\u4EF6\u5939",outputPathPlaceholder:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsExportTheme:"\u6587\u6863\u4E3B\u9898",settingsExportThemeDesc:"\u9009\u62E9\u5BFC\u51FA HTML \u7684\u6392\u7248\u98CE\u683C",themeDefault:"\u9ED8\u8BA4",themeGongwen:"\u516C\u6587\uFF08GB/T 9704\uFF09",themeReport:"\u62A5\u544A",themePresentation:"\u6F14\u793A",themeEngineering:"\u5DE5\u7A0B",themeSales:"\u9500\u552E",logFilterErrors:"\u4EC5\u9519\u8BEF",logFilterAll:"\u5168\u90E8",unsupportedFile:"\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B"},en:{pluginName:"OmniExport",cmdExportCurrent:"Export current note as HTML",cmdExportVault:"Batch export entire vault",settingsTitle:"OmniExport Settings",settingsLanguage:"Language",settingsTheme:"Export Theme",settingsThemeLight:"Light",settingsThemeDark:"Dark",settingsThemeAuto:"Auto",settingsEmbedAssets:"Embed assets (single-file mode)",settingsEmbedDesc:"Embed CSS, JS, and images into HTML, generating a standalone .html file",settingsInteractive:"Interactive features",settingsInteractiveDesc:"Enable collapsible blocks, TOC navigation, search, dark/light toggle",settingsMermaid:"Render Mermaid diagrams",settingsMath:"Render math formulas",settingsCodeHighlight:"Code syntax highlighting",settingsSEO:"SEO & social cards",settingsSEODesc:"Auto-generate Open Graph tags for WeChat/Twitter sharing previews",settingsOutputPath:"Output directory",settingsOutputDesc:"Leave empty to output alongside the note",settingsAutoUpdate:"Auto-check for updates",exportSuccess:"Export successful",exportFail:"Export failed",exporting:"Exporting...",exportSingle:"Single file export",exportBatch:"Batch export",exportComplete:"Export complete, {count} files",updateAvailable:"New version {version} available, click to update",updateCheck:"Check for updates",updateLatest:"Already up to date",updateDownloading:"Downloading update...",updateManualInstall:"Please go to Release page to download and install manually",updateNoAsset:"No update file found",updateFail:"Update failed",cmdCheckUpdate:"Check for plugin updates",platformWechat:"WeChat",platformZhihu:"Zhihu",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"Copy HTML",platformDownload:"Download HTML",cmdShowLog:"View export log",logTitle:"Export Log",logEmpty:"No logs yet",logCopy:"Copy",logExport:"Export TXT",logClear:"Clear",logCopied:"Log copied to clipboard",logCopyFail:"Copy failed, please copy manually",logExported:"Log exported",noActiveFile:"No active note",chooseFolder:"Choose folder",outputPathPlaceholder:"Empty = same directory as note",settingsExportTheme:"Document Theme",settingsExportThemeDesc:"Choose the layout style for exported HTML",themeDefault:"Default",themeGongwen:"Official (GB/T 9704)",themeReport:"Report",themePresentation:"Presentation",themeEngineering:"Engineering",themeSales:"Sales",logFilterErrors:"Errors only",logFilterAll:"All",unsupportedFile:"Unsupported file type"}};function a(r,e="zh",n){let t=z[e]?.[r]||z.zh[r]||r;if(n)for(let[o,i]of Object.entries(n))t=t.replace(`{${o}}`,String(i));return t}var S=require("obsidian"),y=class extends S.SuggestModal{constructor(e,n){super(e),this.onSelect=n,this.setPlaceholder(this.app.vault.getName())}getAllFolders(){let e=[],t=[this.app.vault.getRoot()];for(;t.length>0;){let o=t.shift();e.push(o);for(let i of o.children)i instanceof S.TFolder&&t.push(i)}return e}getSuggestions(e){let n=this.getAllFolders(),t=e.toLowerCase(),o=[];(!e||"\u6839\u76EE\u5F55".includes(e)||"root".includes(t))&&o.push({path:"",displayName:"/ (\u6839\u76EE\u5F55 / Root)"});for(let i of n){let l=i.path==="/"?"":i.path,s=i.name;(!e||l.toLowerCase().includes(t)||s.toLowerCase().includes(t))&&o.push({path:l,displayName:l||"/ (\u6839\u76EE\u5F55 / Root)"})}return o}renderSuggestion(e,n){n.createEl("div",{text:e.displayName})}onChooseSuggestion(e){this.onSelect(e.path)}};var O={lang:"zh",theme:"auto",exportTheme:"default",embedAssets:!0,interactive:!0,renderMermaid:!0,renderMath:!0,codeHighlight:!0,seo:!0,outputPath:"",autoUpdate:!0},E=class extends p.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty();let n=this.plugin.settings.lang;e.createEl("h2",{text:a("settingsTitle",n)}),new p.Setting(e).setName(a("settingsLanguage",n)).addDropdown(t=>t.addOption("zh","\u4E2D\u6587").addOption("en","English").setValue(n).onChange(async o=>{this.plugin.settings.lang=o,await this.plugin.saveSettings(),this.display()})),new p.Setting(e).setName(a("settingsTheme",n)).addDropdown(t=>t.addOption("light",a("settingsThemeLight",n)).addOption("dark",a("settingsThemeDark",n)).addOption("auto",a("settingsThemeAuto",n)).setValue(this.plugin.settings.theme).onChange(async o=>{this.plugin.settings.theme=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsExportTheme",n)).setDesc(a("settingsExportThemeDesc",n)).addDropdown(t=>t.addOption("default",a("themeDefault",n)).addOption("gongwen",a("themeGongwen",n)).addOption("report",a("themeReport",n)).addOption("presentation",a("themePresentation",n)).addOption("engineering",a("themeEngineering",n)).addOption("sales",a("themeSales",n)).setValue(this.plugin.settings.exportTheme).onChange(async o=>{this.plugin.settings.exportTheme=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsEmbedAssets",n)).setDesc(a("settingsEmbedDesc",n)).addToggle(t=>t.setValue(this.plugin.settings.embedAssets).onChange(async o=>{this.plugin.settings.embedAssets=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsInteractive",n)).setDesc(a("settingsInteractiveDesc",n)).addToggle(t=>t.setValue(this.plugin.settings.interactive).onChange(async o=>{this.plugin.settings.interactive=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsMermaid",n)).addToggle(t=>t.setValue(this.plugin.settings.renderMermaid).onChange(async o=>{this.plugin.settings.renderMermaid=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsMath",n)).addToggle(t=>t.setValue(this.plugin.settings.renderMath).onChange(async o=>{this.plugin.settings.renderMath=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsCodeHighlight",n)).addToggle(t=>t.setValue(this.plugin.settings.codeHighlight).onChange(async o=>{this.plugin.settings.codeHighlight=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsSEO",n)).setDesc(a("settingsSEODesc",n)).addToggle(t=>t.setValue(this.plugin.settings.seo).onChange(async o=>{this.plugin.settings.seo=o,await this.plugin.saveSettings()})),new p.Setting(e).setName(a("settingsOutputPath",n)).setDesc(a("settingsOutputDesc",n)).addText(t=>t.setPlaceholder(a("outputPathPlaceholder",n)).setValue(this.plugin.settings.outputPath).onChange(async o=>{this.plugin.settings.outputPath=o,await this.plugin.saveSettings()})).addButton(t=>t.setIcon("folder").setTooltip(a("chooseFolder",n)).onClick(()=>{new y(this.app,async i=>{this.plugin.settings.outputPath=i,await this.plugin.saveSettings(),this.display()}).open()})),new p.Setting(e).setName(a("settingsAutoUpdate",n)).addToggle(t=>t.setValue(this.plugin.settings.autoUpdate).onChange(async o=>{this.plugin.settings.autoUpdate=o,await this.plugin.saveSettings()}))}};var x="0.1.1";function F(r){let{title:e,content:n,settings:t,lang:o,createDate:i,modifyDate:l,tags:s}=r,c=t.theme==="dark"||t.theme==="auto"&&typeof window<"u"&&window.matchMedia?.("(prefers-color-scheme: dark)").matches,g=t.exportTheme||"default",h=t.seo?J(e,r):"",m=t.interactive?re(o):"",u=t.renderMermaid?ae():"",P=t.renderMath?ie():"",D=t.codeHighlight?se():"",H=K(g,c),I=t.interactive?ne(c):"";return`<!DOCTYPE html>
<html lang="${o==="zh"?"zh-CN":"en"}" data-theme="${c?"dark":"light"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${c?"#1e1e2e":"#ffffff"}">
<meta name="generator" content="OmniExport v${x}">
<meta name="export-theme" content="${g}">
<title>${f(e)}</title>
${h}
<style>
${X(c,g)}
${H}
${I}
</style>
${D}
${P}
${u}
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js"><\/script>
</head>
<body>
${t.interactive?oe(o,g):""}
<article class="note-content" id="note-content">
${n}
</article>
${t.interactive?'<footer class="note-footer"><p class="meta-info">'+le(i,l,s,o)+'</p><p class="plugin-version">Powered by OmniExport v'+x+"</p></footer>":""}
<script>
${m}
${t.renderMermaid?"mermaid.initialize({startOnLoad:true,theme:'"+(c?"dark":"default")+"'});":""}
<\/script>
</body>
</html>`}function J(r,e){let n=ce(e.content).substring(0,160);return`
<meta name="description" content="${f(n)}">
<meta property="og:title" content="${f(r)}">
<meta property="og:description" content="${f(n)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${e.lang==="zh"?"zh_CN":"en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${f(r)}">
<meta name="twitter:description" content="${f(n)}">`}function X(r,e){return`
:root {
	--bg: ${r?"#1e1e2e":"#ffffff"};
	--text: ${r?"#cdd6f4":"#1e1e2e"};
	--text-secondary: ${r?"#a6adc8":"#6c7086"};
	--accent: ${e==="gongwen"?"#ff0000":"#89b4fa"};
	--border: ${r?"#313244":"#e0e0e0"};
	--code-bg: ${r?"#313244":"#f5f5f5"};
	--link: ${r?"#89b4fa":"#1e6ddc"};
	--max-width: ${e==="presentation"?"960px":"720px"};
	--font: ${e==="gongwen"?'"FangSong", "\u4EFF\u5B8B", "STFangsong", serif':'-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'};
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
`}function K(r,e){switch(r){case"gongwen":return Y();case"report":return Z();case"presentation":return Q();case"engineering":return ee();case"sales":return te();default:return""}}function Y(){return`
/* \u516C\u6587\u4E3B\u9898 - GB/T 9704-2012 */
@media print {
	@page { size: A4; margin: 37mm 26mm 35mm 28mm; }
}
body { font-family: "FangSong", "\u4EFF\u5B8B", "STFangsong", serif; font-size: 16pt; line-height: 28.99pt; }
article.note-content h1 {
	font-family: "SimSun", "\u5B8B\u4F53", serif;
	font-size: 22pt; font-weight: normal;
	text-align: center; border-bottom: none;
	color: #000; margin: 2em 0 1em;
}
article.note-content h2 {
	font-family: "SimHei", "\u9ED1\u4F53", sans-serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content h3 {
	font-family: "KaiTi", "\u6977\u4F53", "STKaiti", serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content h4, article.note-content h5, article.note-content h6 {
	font-family: "FangSong", "\u4EFF\u5B8B", serif;
	font-size: 16pt; font-weight: normal;
}
article.note-content p { text-align: justify; text-indent: 2em; }
article.note-content blockquote { border-left-color: #ff0000; }
article.note-content blockquote p { text-indent: 0; }
/* \u516C\u6587\u7EA2\u7EBF */
article.note-content h1::after {
	content: "";
	display: block;
	width: 100%;
	height: 0;
	border-bottom: 3px solid #ff0000;
	margin-top: 0.5em;
}
article.note-content table { font-size: 14pt; }
article.note-content th, article.note-content td { font-family: "FangSong", "\u4EFF\u5B8B", serif; }
`}function Z(){return`
/* \u62A5\u544A\u4E3B\u9898 */
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
`}function Q(){return`
/* \u6F14\u793A\u4E3B\u9898 */
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
`}function ee(){return`
:root { --accent: #2563eb; }
article.note-content h1 { text-align: center; font-size: 1.6rem; border-bottom: 3px solid #2563eb; padding-bottom: 0.5em; color: #1e3a5f; }
article.note-content h2 { font-size: 1.3rem; color: #1e3a5f; border-left: 5px solid #2563eb; padding-left: 12px; }
article.note-content h3 { font-size: 1.1rem; color: #2563eb; }
article.note-content table { font-size: 0.9rem; border: 2px solid #2563eb; }
article.note-content th { background: #2563eb; color: #fff; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }
article.note-content tr:nth-child(even) { background: #f0f4ff; }
article.note-content tr:hover { background: #e0e8ff; }
article.note-content blockquote { border-left-color: #2563eb; background: #f0f4ff; padding: 12px 16px; border-radius: 0 8px 8px 0; }
article.note-content code { background: #e8efff; color: #1e3a5f; }
@media print { @page { size: A4 landscape; margin: 15mm; } }
`}function te(){return`
:root { --accent: #059669; }
body { background: #f8fafb; }
article.note-content h1 { text-align: center; font-size: 1.8rem; color: #064e3b; border-bottom: 3px solid #059669; padding-bottom: 0.5em; }
article.note-content h2 { font-size: 1.3rem; color: #064e3b; background: linear-gradient(90deg, #ecfdf5, transparent); padding: 8px 12px; border-left: 4px solid #059669; }
article.note-content h3 { color: #059669; }
article.note-content table { font-size: 0.9rem; border: 1px solid #d1fae5; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
article.note-content th { background: linear-gradient(135deg, #059669, #10b981); color: #fff; font-weight: 600; }
article.note-content td { padding: 10px 14px; }
article.note-content tr:nth-child(even) { background: #f0fdf4; }
article.note-content tr:hover { background: #dcfce7; }
article.note-content blockquote { border-left-color: #059669; background: #ecfdf5; padding: 12px 16px; border-radius: 0 8px 8px 0; }
@media print { @page { size: A4; margin: 15mm; } }
`}function ne(r){return`
/* \u5DE5\u5177\u680F */
.oe-toolbar {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	background: ${r?"#181825ee":"#ffffffee"};
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
/* TOC \u4FA7\u680F */
.toc-nav {
	position: fixed; top: 50px; right: 0; width: 260px; height: calc(100vh - 50px);
	background: ${r?"#181825":"#f8f9fa"};
	border-left: 1px solid var(--border);
	padding: 16px; overflow-y: auto; z-index: 100;
	transform: translateX(100%); transition: transform 0.3s;
	font-size: 0.9rem;
}
.toc-nav.open { transform: translateX(0); }
.toc-nav a { display: block; padding: 4px 0; color: var(--text-secondary); text-decoration: none; }
.toc-nav a:hover { color: var(--accent); }
/* \u53EF\u7F16\u8F91\u8868\u683C */
article.note-content td[contenteditable="true"]:focus {
	outline: 2px solid var(--accent);
	background: ${r?"#313244":"#e8f0fe"};
}
/* \u8868\u683C\u64CD\u4F5C\u6309\u94AE */
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
/* \u4EFB\u52A1\u8FDB\u5EA6\u6761 */
.oe-task-progress {
	height: 4px; background: var(--border);
	border-radius: 2px; margin: 4px 0 8px;
	overflow: hidden;
}
.oe-task-progress-bar {
	height: 100%; background: var(--accent);
	border-radius: 2px; transition: width 0.3s;
}
/* \u641C\u7D22\u9AD8\u4EAE */
mark.search-highlight { background: #fbbf24; color: #000; border-radius: 2px; padding: 0 2px; }
/* \u4E3B\u9898\u5207\u6362 */
.theme-toggle {
	position: fixed; bottom: 16px; right: 16px; z-index: 201;
	background: var(--code-bg); border: 1px solid var(--border);
	width: 40px; height: 40px; border-radius: 50%;
	font-size: 1.2rem; cursor: pointer;
	display: flex; align-items: center; justify-content: center;
}
/* \u624B\u673A\u7AEF\u9002\u914D */
@media (max-width: 767px) {
	.oe-toolbar { padding: 6px 8px; gap: 4px; }
	.oe-toolbar input[type="text"] { width: 100px; font-size: 0.85rem; }
	.oe-btn { padding: 4px 8px; font-size: 0.8rem; }
	.toc-nav { width: 100%; top: auto; bottom: 0; height: 50vh; }
	body { padding-top: 60px; }
}
`}function oe(r,e){let n=r==="zh"?{search:"\u641C\u7D22...",toc:"\u76EE\u5F55",exportCSV:"\u5BFC\u51FACSV",importFile:"\u5BFC\u5165\u6587\u4EF6",importHint:"\u652F\u6301 Excel/Word/CSV"}:{search:"Search...",toc:"TOC",exportCSV:"CSV",importFile:"Import",importHint:"Excel/Word/CSV"},o=[{value:"default",label:"Default"},{value:"gongwen",label:"\u516C\u6587"},{value:"report",label:"Report"},{value:"presentation",label:"Slide"},{value:"engineering",label:r==="zh"?"\u5DE5\u7A0B":"Eng"},{value:"sales",label:r==="zh"?"\u9500\u552E":"Sales"}].map(i=>`<option value="${i.value}"${e===i.value?" selected":""}>${i.label}</option>`).join("");return`
<div class="oe-toolbar">
	<input type="text" id="oe-search" placeholder="${n.search}" oninput="oeSearch(this.value)">
	<button class="oe-btn" onclick="document.querySelector('.toc-nav').classList.toggle('open')">${n.toc}</button>
	<button class="oe-btn" onclick="oeExportCSV()">${n.exportCSV}</button>
	<button class="oe-btn" onclick="document.getElementById('oe-file-input').click()" title="${n.importHint}">${n.importFile}</button>
	<select class="oe-btn" onchange="oeSwitchTheme(this.value)" id="oe-theme-select">${o}</select>
</div>
<nav class="toc-nav" id="toc-nav"><h3>${n.toc}</h3><div id="toc-content"></div></nav>
<button class="theme-toggle" onclick="oeToggleTheme()" aria-label="Theme">\u{1F313}</button>
<input type="file" id="oe-file-input" accept=".csv,.tsv,.json,.xlsx,.xls,.docx,.doc" style="display:none" onchange="oeHandleFileImport(this)">`}function re(r){return`
/* OmniExport v${x} - Interactive Engine */

// === \u641C\u7D22\uFF08\u9632\u6296 + \u5B89\u5168\u6587\u672C\u5904\u7406\uFF09===
var _oeSearchTimer = null;
function oeSearch(query) {
	clearTimeout(_oeSearchTimer);
	_oeSearchTimer = setTimeout(function() { _doSearch(query); }, 200);
}
function _doSearch(query) {
	// \u6E05\u9664\u65E7\u9AD8\u4EAE
	document.querySelectorAll('mark.search-highlight').forEach(function(m) {
		var p = m.parentNode;
		p.replaceChild(document.createTextNode(m.textContent), m);
		p.normalize();
	});
	if (!query || query.length < 1) return;
	// \u5B89\u5168\u8F6C\u4E49\u6B63\u5219\u7279\u6B8A\u5B57\u7B26
	var escaped = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
	var regex;
	try { regex = new RegExp('(' + escaped + ')', 'gi'); } catch(e) { return; }
	// \u53EA\u641C\u7D22\u6587\u672C\u8282\u70B9\uFF0C\u4E0D\u7834\u574F DOM \u7ED3\u6784
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

// === TOC \u751F\u6210 ===
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

// === \u53EF\u7F16\u8F91\u8868\u683C ===
document.querySelectorAll('.note-content table').forEach(function(table, ti) {
	// \u7ED9\u6BCF\u4E2A\u5355\u5143\u683C\u6DFB\u52A0 contenteditable
	table.querySelectorAll('td, th').forEach(function(cell) {
		cell.setAttribute('contenteditable', 'true');
		cell.setAttribute('data-orig', cell.textContent);
	});
	// \u6DFB\u52A0\u64CD\u4F5C\u6309\u94AE\u884C
	var firstRow = table.querySelector('tr');
	if (firstRow) {
		var th = document.createElement('th');
		th.innerHTML = '<span class="oe-table-actions" style="opacity:1">' +
			'<button class="oe-table-btn" onclick="oeResetTable(this)">\u21A9</button>' +
			'<button class="oe-table-btn" onclick="oeExportTable(this)">\u2B07</button>' +
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
			// \u8DF3\u8FC7\u64CD\u4F5C\u6309\u94AE\u5217
			if (cell.querySelector('.oe-table-actions')) return;
			var text = cell.textContent.replace(/"/g, '""');
			cells.push('"' + text + '"');
		});
		csv.push(cells.join(','));
	});
	oeDownload(csv.join('\\n'), 'table-export.csv', 'text/csv');
}

// === \u5168\u5C40\u5BFC\u51FA CSV ===
function oeExportCSV() {
	var tables = document.querySelectorAll('.note-content table');
	if (!tables.length) { alert('${r==="zh"?"\u6CA1\u6709\u627E\u5230\u8868\u683C":"No tables found"}'); return; }
	// \u5BFC\u51FA\u6240\u6709\u8868\u683C\u5230\u4E00\u4E2A\u6587\u4EF6
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

// === \u7EDF\u4E00\u6587\u4EF6\u5BFC\u5165\uFF08Excel/Word/CSV\uFF09===
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

// === Excel \u5BFC\u5165\uFF08SheetJS\uFF09===
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
				div.innerHTML = '<h3>' + name + '</h3>' + html;
				content.appendChild(div);
			});
			alert('${r==="zh"?"Excel \u5BFC\u5165\u6210\u529F":"Excel imported"}');
		} catch(err) { alert('${r==="zh"?"Excel \u89E3\u6790\u5931\u8D25":"Excel parse failed"}: ' + err.message); }
	};
	reader.readAsArrayBuffer(file);
}

// === Word \u5BFC\u5165\uFF08mammoth.js\uFF09===
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
					alert('${r==="zh"?"Word \u5BFC\u5165\u6210\u529F":"Word imported"}');
				})
				.catch(function(err) { alert('${r==="zh"?"Word \u89E3\u6790\u5931\u8D25":"Word parse failed"}: ' + err); });
		} catch(err) { alert('${r==="zh"?"Word \u8BFB\u53D6\u5931\u8D25":"Word read failed"}'); }
	};
	reader.readAsArrayBuffer(file);
}

// === CSV \u5BFC\u5165 ===
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
		alert('${r==="zh"?"CSV \u5BFC\u5165\u6210\u529F":"CSV imported"}');
	};
	reader.readAsText(file);
}

// === \u4EFB\u52A1\u5217\u8868\u4EA4\u4E92 ===
document.querySelectorAll('.note-content .task-list-item input[type="checkbox"]').forEach(function(cb) {
	cb.disabled = false;
	cb.addEventListener('change', oeUpdateTaskProgress);
});
oeUpdateTaskProgress();
function oeUpdateTaskProgress() {
	// \u517C\u5BB9\u65B9\u6848\uFF1A\u4E0D\u4F9D\u8D56 :has()\uFF0C\u904D\u5386\u6240\u6709 ul \u68C0\u67E5\u662F\u5426\u5305\u542B task-list-item
	document.querySelectorAll('.note-content ul').forEach(function(ul) {
		var items = ul.querySelectorAll('.task-list-item input');
		if (!items.length) return;
		var total = items.length;
		var checked = ul.querySelectorAll('.task-list-item input:checked').length;
		var bar = ul.nextElementSibling;
		if (!bar || !bar.classList.contains('oe-task-progress')) {
			bar = document.createElement('div');
			bar.className = 'oe-task-progress';
			bar.innerHTML = '<div class="oe-task-progress-bar"></div>';
			ul.parentNode.insertBefore(bar, ul.nextSibling);
		}
		bar.querySelector('.oe-task-progress-bar').style.width = (total ? (checked/total*100) : 0) + '%';
	});
}

// === \u4E3B\u9898\u5207\u6362 ===
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

// === \u5DE5\u5177\u51FD\u6570 ===
function oeDownload(content, filename, mime) {
	var blob = new Blob([content], { type: mime + ';charset=utf-8' });
	var url = URL.createObjectURL(blob);
	var a = document.createElement('a');
	a.href = url; a.download = filename;
	document.body.appendChild(a); a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
`}function ae(){return'<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>'}function ie(){return`<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
<\/script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async><\/script>`}function se(){return`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"><\/script>
<script>hljs.highlightAll();<\/script>`}function le(r,e,n,t){let o=[];return r&&o.push((t==="zh"?"\u521B\u5EFA\uFF1A":"Created: ")+r),e&&o.push((t==="zh"?"\u4FEE\u6539\uFF1A":"Modified: ")+e),n&&n.length&&o.push((t==="zh"?"\u6807\u7B7E\uFF1A":"Tags: ")+n.join(", ")),o.join(" | ")}function f(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ce(r){return r.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}var b=require("obsidian");var de="acheng-byte",ge="obsidian-omniexport",pe=`https://api.github.com/repos/${de}/${ge}/releases/latest`;async function A(r){try{let e=await fetch(pe,{headers:{Accept:"application/vnd.github.v3+json"}});if(!e.ok)return M(r);let n=await e.json(),t=n.tag_name?.replace(/^v/,"")||r;return{hasUpdate:he(t,r)>0,latestVersion:t,downloadUrl:n.assets?.[0]?.browser_download_url||n.zipball_url||"",releaseUrl:n.html_url||"",changelog:n.body||""}}catch{return M(r)}}async function U(r,e,n){if(!r.downloadUrl)return new b.Notice(a("updateNoAsset",n)),!1;try{new b.Notice(a("updateDownloading",n));let t=await fetch(r.downloadUrl);if(!t.ok)throw new Error("Download failed");let o=await t.blob();if(r.downloadUrl.endsWith(".zip"))return window.open(r.releaseUrl,"_blank"),new b.Notice(a("updateManualInstall",n)),!0;let i=await o.arrayBuffer();return window.open(r.releaseUrl,"_blank"),new b.Notice(a("updateManualInstall",n)),!0}catch(t){return console.error(t),new b.Notice(a("updateFail",n)),!1}}function M(r){return{hasUpdate:!1,latestVersion:r,downloadUrl:"",releaseUrl:"",changelog:""}}function he(r,e){let n=r.split(".").map(Number),t=e.split(".").map(Number);for(let o=0;o<3;o++){let i=n[o]||0,l=t[o]||0;if(i>l)return 1;if(i<l)return-1}return 0}var C=class{constructor(e="zh"){this.entries=[];this.lang=e}setLang(e){this.lang=e}now(){return new Date().toLocaleTimeString(this.lang==="zh"?"zh-CN":"en-US",{hour12:!1})}info(e){this.entries.push({time:this.now(),level:"info",message:e}),console.log(`[OmniExport][INFO] ${e}`)}warn(e){this.entries.push({time:this.now(),level:"warn",message:e}),console.warn(`[OmniExport][WARN] ${e}`)}error(e){this.entries.push({time:this.now(),level:"error",message:e}),console.error(`[OmniExport][ERROR] ${e}`)}success(e){this.entries.push({time:this.now(),level:"success",message:e}),console.log(`[OmniExport][OK] ${e}`)}getText(){let e=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.map(t=>`[${t.time}] [${e[t.level]}] ${t.message}`).join(`
`)}getErrorText(){let e=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.filter(t=>t.level==="error"||t.level==="warn").map(t=>`[${t.time}] [${e[t.level]}] ${t.message}`).join(`
`)}get count(){return this.entries.length}clear(){this.entries=[]}async copyToClipboard(){try{let e=this.getText();return await navigator.clipboard.writeText(e),!0}catch{let e=document.createElement("textarea");e.value=this.getText(),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();let n=document.execCommand("copy");return document.body.removeChild(e),n}}async exportToTXT(e){let n=new Date().toISOString().replace(/[:.]/g,"-").substring(0,19),t=`omniexport-log-${e}-${n}.txt`,o=`OmniExport \u65E5\u5FD7 / Log
========================
\u5BFC\u51FA\u65F6\u95F4: ${new Date().toLocaleString(this.lang==="zh"?"zh-CN":"en-US")}
Vault: ${e}
========================

${this.getText()}`,i=new Blob([o],{type:"text/plain;charset=utf-8"}),l=URL.createObjectURL(i),s=document.createElement("a");return s.href=l,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(l),t}};var T=require("obsidian");async function R(r,e,n,t){let o=[];r.querySelectorAll("img").forEach(i=>o.push({el:i,attr:"src"})),r.querySelectorAll("video").forEach(i=>o.push({el:i,attr:"src"})),r.querySelectorAll("audio").forEach(i=>o.push({el:i,attr:"src"})),r.querySelectorAll("a[href]").forEach(i=>{let l=i.getAttribute("href")||"";ue(l)&&o.push({el:i,attr:"href"})}),await Promise.all(o.map(async({el:i,attr:l})=>{let s=i.getAttribute(l);if(s)try{let c=await me(s,e,n,t);if(!c)return;let g=await e.readBinary(c),h=v(g),u=`data:${w(c.extension)};base64,${h}`;i.setAttribute(l,u),i instanceof HTMLImageElement&&i.removeAttribute("loading")}catch(c){console.warn(`[OmniExport] Failed to embed: ${s}`,c)}}))}async function me(r,e,n,t){if(r.startsWith("app://"))try{let s=new URL(r),c=decodeURIComponent(s.pathname);c.startsWith("/")&&(c=c.substring(1)),c=c.replace(/\\/g,"/");let g=e.getAbstractFileByPath(c);if(g instanceof T.TFile)return g}catch{}if(r.startsWith("content://")||r.startsWith("/")){let s=r.split("/").pop();if(s){let c=N(e,s);if(c)return c}}try{let s=n.getFirstLinkpathDest(r,t);if(s instanceof T.TFile)return s}catch{}let o=r.split("?")[0].split("#")[0],i=e.getAbstractFileByPath(o);if(i instanceof T.TFile)return i;let l=o.split("/").pop();return l?N(e,l):null}function N(r,e){let n=decodeURIComponent(e);for(let t of r.getFiles())if(t.name===e||t.name===n)return t;return null}function v(r){let e=new Uint8Array(r),n=8192,t="";for(let o=0;o<e.length;o+=n){let i=e.subarray(o,Math.min(o+n,e.length));t+=String.fromCharCode.apply(null,Array.from(i))}return btoa(t)}function w(r){return{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",ico:"image/x-icon",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",mov:"video/quicktime",avi:"video/x-msvideo",mkv:"video/x-matroska",mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",aac:"audio/aac",m4a:"audio/mp4",wma:"audio/x-ms-wma",pdf:"application/pdf"}[r.toLowerCase()]||"application/octet-stream"}function ue(r){let e=r.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","bmp","svg","webp","ico","mp4","webm","ogg","mov","avi","mkv","mp3","wav","flac","aac","m4a","wma","pdf"].includes(e)}var fe=/[\\/:*?"<>|\x00-\x1f]/g,$=class extends d.Plugin{async onload(){await this.loadSettings(),this.logger=new C(this.settings.lang),this.logger.info(`Plugin loaded v${x}`),this.addCommand({id:"export-current-note",name:a("cmdExportCurrent",this.settings.lang),callback:()=>this.exportCurrentNote()}),this.addCommand({id:"export-vault",name:a("cmdExportVault",this.settings.lang),callback:()=>this.exportVault()}),this.addCommand({id:"check-update",name:a("cmdCheckUpdate",this.settings.lang),callback:()=>this.manualCheckUpdate()}),this.addCommand({id:"show-log",name:a("cmdShowLog",this.settings.lang),callback:()=>this.showLogModal()}),this.addSettingTab(new E(this.app,this)),this.settings.autoUpdate&&this.checkForUpdate()}categorizeFile(e){let n=e.extension.toLowerCase();return n==="md"?"markdown":["txt","text","log","csv","json","yaml","yml"].includes(n)?"text":["png","jpg","jpeg","gif","bmp","svg","webp","ico"].includes(n)?"image":["mp4","webm","ogg","mov","avi","mkv"].includes(n)?"video":["mp3","wav","ogg","flac","aac","m4a","wma"].includes(n)?"audio":"other"}async renderFileContent(e){switch(this.categorizeFile(e)){case"markdown":{let t=await this.app.vault.read(e);return await this.renderMarkdown(t,e)}case"text":return`<pre style="white-space:pre-wrap;word-wrap:break-word;font-family:var(--font);">${(await this.app.vault.read(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>`;case"image":try{let t=await this.app.vault.readBinary(e),o=v(t);return`<figure>
<img src="${`data:${w(e.extension)};base64,${o}`}" alt="${e.name}" style="max-width:100%;height:auto;">
<figcaption>${e.name}</figcaption>
</figure>`}catch{return`<figure><p>[${a("unsupportedFile",this.settings.lang)}: ${e.name}]</p></figure>`}case"video":try{let t=await this.app.vault.readBinary(e),o=v(t);return`<figure>
<video controls src="${`data:${w(e.extension)};base64,${o}`}" style="max-width:100%;height:auto;">Your browser does not support video.</video>
<figcaption>${e.name}</figcaption>
</figure>`}catch{return`<figure><p>[${a("unsupportedFile",this.settings.lang)}: ${e.name}]</p></figure>`}case"audio":try{let t=await this.app.vault.readBinary(e),o=v(t),l=`data:${w(e.extension)};base64,${o}`;return`<div class="audio-player">
<p>\u{1F3B5} ${e.name}</p>
<audio controls src="${l}" style="width:100%;">Your browser does not support audio.</audio>
</div>`}catch{return`<p>[${a("unsupportedFile",this.settings.lang)}: ${e.name}]</p>`}default:return`<p style="color:var(--text-secondary);">[${a("unsupportedFile",this.settings.lang)}: ${e.name}]</p>`}}async exportCurrentNote(){this.logger.clear(),this.logger.info(a("exportSingle",this.settings.lang));let e=this.app.workspace.getActiveFile();if(!e){this.logger.warn(a("noActiveFile",this.settings.lang)),new d.Notice(a("exportFail",this.settings.lang)),this.showLogModal();return}let n=this.categorizeFile(e);this.logger.info(`${a("exporting",this.settings.lang)} ${e.path} [${n}]`),new d.Notice(a("exporting",this.settings.lang));try{let t=await this.renderFileContent(e);this.logger.info(`File rendered (${n})`);let o=F({title:e.basename,content:t,settings:this.settings,lang:this.settings.lang,modifyDate:e.stat.mtime?new Date(e.stat.mtime).toLocaleDateString(this.settings.lang==="zh"?"zh-CN":"en-US"):void 0});this.logger.info(`HTML generated (${o.length} chars)`);let i=this.getOutputPath(e);this.logger.info(`Output: ${i}`),await this.saveHTML(i,o),this.logger.success(a("exportSuccess",this.settings.lang)),new d.Notice(a("exportSuccess",this.settings.lang))}catch(t){let o=t instanceof Error?t.message:String(t);this.logger.error(`Export failed: ${o}`),new d.Notice(`${a("exportFail",this.settings.lang)}: ${o}`)}}async exportVault(){this.logger.clear(),this.logger.info(a("exportBatch",this.settings.lang)),new d.Notice(a("exporting",this.settings.lang));let e=this.app.vault.getFiles(),n=e.filter(s=>this.categorizeFile(s)!=="other");this.logger.info(`Found ${n.length} exportable files (${e.length} total)`);let t=0,o=0,i=0;for(let s of n)try{let c=await this.renderFileContent(s),g=F({title:s.basename,content:c,settings:this.settings,lang:this.settings.lang}),h=this.getOutputPath(s);await this.saveHTML(h,g),t++}catch(c){o++;let g=c instanceof Error?c.message:String(c);this.logger.error(`Failed: ${s.path} - ${g}`)}i=e.length-n.length;let l=`${a("exportComplete",this.settings.lang,{count:t})}${o>0?`, ${o} failed`:""}${i>0?`, ${i} skipped`:""}`;this.logger.success(l),new d.Notice(a("exportComplete",this.settings.lang,{count:t}))}async renderMarkdown(e,n){let t=document.createElement("div");try{return await d.MarkdownRenderer.renderMarkdown(e,t,n.path,new d.Component),this.settings.embedAssets&&(await R(t,this.app.vault,this.app.metadataCache,n.path),this.logger.info("Assets embedded as base64")),t.innerHTML}finally{t.remove()}}sanitizeFilename(e){return e.replace(fe,"_").replace(/_+/g,"_").trim()}getOutputPath(e){let n=this.sanitizeFilename(e.basename);if(this.settings.outputPath)return`${this.settings.outputPath}/${n}.html`;let t=e.path.substring(0,e.path.lastIndexOf("/"));return t?`${t}/${n}.html`:`${n}.html`}async saveHTML(e,n){let t=e.replace(/\\/g,"/"),o=t.lastIndexOf("/"),i=o>0?t.substring(0,o):"";i&&(this.app.vault.getAbstractFileByPath(i)||(await this.app.vault.createFolder(i),this.logger.info(`Created folder: ${i}`)));let l=this.app.vault.getAbstractFileByPath(t);l&&l instanceof d.TFile?await this.app.vault.modify(l,n):await this.app.vault.create(t,n)}showLogModal(){let{app:e,logger:n,settings:t}=this,o=t.lang,i=document.createElement("div");i.className="omniexport-log-modal";let l=m=>(m==="error"?n.getErrorText():n.getText())||a("logEmpty",o),s="error";i.innerHTML=`
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${a("logTitle",o)}</h3>
					<div style="display:flex;gap:8px;align-items:center;">
						<button class="omniexport-log-btn omniexport-log-filter" style="font-size:0.8rem;">
							${a("logFilterErrors",o)}
						</button>
						<button class="omniexport-log-close">&times;</button>
					</div>
				</div>
				<div class="omniexport-log-body">
					<div class="omniexport-log-text">${j(l(s),n)}</div>
				</div>
				<div class="omniexport-log-actions">
					<button class="omniexport-log-btn omniexport-log-copy">${a("logCopy",o)}</button>
					<button class="omniexport-log-btn omniexport-log-export">${a("logExport",o)}</button>
					<button class="omniexport-log-btn omniexport-log-clear">${a("logClear",o)}</button>
				</div>
			</div>
		`,document.body.appendChild(i);let c=()=>i.remove();i.querySelector(".omniexport-log-close").addEventListener("click",c),i.querySelector(".omniexport-log-overlay").addEventListener("click",c);let g=i.querySelector(".omniexport-log-filter"),h=i.querySelector(".omniexport-log-text");g.addEventListener("click",()=>{s=s==="error"?"all":"error",g.textContent=s==="error"?a("logFilterErrors",o):a("logFilterAll",o),g.classList.toggle("active",s==="all"),h.innerHTML=j(l(s),n)}),i.querySelector(".omniexport-log-copy").addEventListener("click",async()=>{let m=await n.copyToClipboard();new d.Notice(m?a("logCopied",o):a("logCopyFail",o))}),i.querySelector(".omniexport-log-export").addEventListener("click",async()=>{let m=e.vault.getName(),u=await n.exportToTXT(m);new d.Notice(`${a("logExported",o)}: ${u}`)}),i.querySelector(".omniexport-log-clear").addEventListener("click",()=>{n.clear(),h.innerHTML=a("logEmpty",o)})}async checkForUpdate(){try{let e=await A(this.manifest.version);e.hasUpdate&&(this.logger.info(`Update available: ${e.latestVersion}`),new d.Notice(a("updateAvailable",this.settings.lang,{version:e.latestVersion})))}catch{}}async manualCheckUpdate(){new d.Notice(a("updateCheck",this.settings.lang));try{let e=await A(this.manifest.version);e.hasUpdate?(new d.Notice(a("updateAvailable",this.settings.lang,{version:e.latestVersion})),await U(e,this.manifest.dir,this.settings.lang)):new d.Notice(a("updateLatest",this.settings.lang))}catch{new d.Notice(a("updateFail",this.settings.lang))}}async loadSettings(){this.settings=Object.assign({},O,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};function j(r,e){return r?r.split(`
`).map(t=>t.includes("[ERROR]")||t.includes("[\u9519\u8BEF]")?`<span style="color:#ef4444;font-weight:600;">${k(t)}</span>`:t.includes("[WARN]")||t.includes("[\u8B66\u544A]")?`<span style="color:#f59e0b;">${k(t)}</span>`:t.includes("[OK]")||t.includes("[\u6210\u529F]")?`<span style="color:#22c55e;">${k(t)}</span>`:k(t)).join("<br>"):""}function k(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
