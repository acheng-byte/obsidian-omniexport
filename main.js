var A=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var X=Object.prototype.hasOwnProperty;var U=(a,e)=>()=>(a&&(e=a(a=0)),e);var N=(a,e)=>{for(var n in e)A(a,n,{get:e[n],enumerable:!0})},K=(a,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of J(e))!X.call(a,o)&&o!==n&&A(a,o,{get:()=>e[o],enumerable:!(t=G(e,o))||t.enumerable});return a};var Y=a=>K(A({},"__esModule",{value:!0}),a);function r(a,e="zh",n){let t=R[e]?.[a]||R.zh[a]||a;if(n)for(let[o,i]of Object.entries(n))t=t.replace(`{${o}}`,String(i));return t}var R,y=U(()=>{R={zh:{pluginName:"\u4E07\u80FD\u5BFC\u51FA",cmdExportCurrent:"\u5BFC\u51FA\u5F53\u524D\u7B14\u8BB0\u4E3A HTML",cmdExportVault:"\u6279\u91CF\u5BFC\u51FA\u6574\u4E2A\u4ED3\u5E93",settingsTitle:"\u4E07\u80FD\u5BFC\u51FA\u8BBE\u7F6E",settingsLanguage:"\u8BED\u8A00 / Language",settingsTheme:"\u5BFC\u51FA\u4E3B\u9898",settingsThemeLight:"\u6D45\u8272",settingsThemeDark:"\u6DF1\u8272",settingsThemeAuto:"\u8DDF\u968F\u7CFB\u7EDF",settingsEmbedAssets:"\u5185\u5D4C\u8D44\u6E90\uFF08\u5355\u6587\u4EF6\u6A21\u5F0F\uFF09",settingsEmbedDesc:"\u5C06 CSS\u3001JS\u3001\u56FE\u7247\u5168\u90E8\u5185\u5D4C\u5230 HTML \u4E2D\uFF0C\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 .html \u6587\u4EF6",settingsInteractive:"\u4EA4\u4E92\u5F0F\u529F\u80FD",settingsInteractiveDesc:"\u542F\u7528\u6298\u53E0\u5757\u3001\u76EE\u5F55\u5BFC\u822A\u3001\u641C\u7D22\u3001\u6697\u8272/\u4EAE\u8272\u5207\u6362",settingsMermaid:"\u6E32\u67D3 Mermaid \u56FE\u8868",settingsMath:"\u6E32\u67D3\u6570\u5B66\u516C\u5F0F",settingsCodeHighlight:"\u4EE3\u7801\u8BED\u6CD5\u9AD8\u4EAE",settingsSEO:"SEO \u4E0E\u793E\u4EA4\u5361\u7247",settingsSEODesc:"\u81EA\u52A8\u751F\u6210 Open Graph \u6807\u7B7E\uFF0C\u5206\u4EAB\u5230\u5FAE\u4FE1/\u63A8\u7279\u65F6\u663E\u793A\u9884\u89C8",settingsOutputPath:"\u8F93\u51FA\u76EE\u5F55",settingsOutputDesc:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsAutoUpdate:"\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0",settingsCheckUpdate:"\u68C0\u67E5\u66F4\u65B0",settingsCurrentVersion:"\u5F53\u524D\u7248\u672C",settingsCheckUpdateBtn:"\u7ACB\u5373\u68C0\u67E5",exportSuccess:"\u5BFC\u51FA\u6210\u529F",exportFail:"\u5BFC\u51FA\u5931\u8D25",exporting:"\u6B63\u5728\u5BFC\u51FA...",exportSingle:"\u5355\u6587\u4EF6\u5BFC\u51FA",exportBatch:"\u6279\u91CF\u5BFC\u51FA",exportComplete:"\u5BFC\u51FA\u5B8C\u6210\uFF0C\u5171 {count} \u4E2A\u6587\u4EF6",updateAvailable:"\u53D1\u73B0\u65B0\u7248\u672C {version}\uFF0C\u70B9\u51FB\u66F4\u65B0",updateCheck:"\u68C0\u67E5\u66F4\u65B0",updateLatest:"\u5DF2\u662F\u6700\u65B0\u7248\u672C",updateDownloading:"\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0...",updateManualInstall:"\u8BF7\u524D\u5F80 Release \u9875\u9762\u4E0B\u8F7D\u5E76\u624B\u52A8\u5B89\u88C5",updateNoAsset:"\u672A\u627E\u5230\u66F4\u65B0\u6587\u4EF6",updateFail:"\u66F4\u65B0\u5931\u8D25",cmdCheckUpdate:"\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0",platformWechat:"\u5FAE\u4FE1\u516C\u4F17\u53F7",platformZhihu:"\u77E5\u4E4E",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"\u590D\u5236 HTML",platformDownload:"\u4E0B\u8F7D HTML",cmdShowLog:"\u67E5\u770B\u5BFC\u51FA\u65E5\u5FD7",logTitle:"\u5BFC\u51FA\u65E5\u5FD7",logEmpty:"\u6682\u65E0\u65E5\u5FD7",logCopy:"\u590D\u5236",logExport:"\u5BFC\u51FA TXT",logClear:"\u6E05\u7A7A",logCopied:"\u65E5\u5FD7\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",logCopyFail:"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",logExported:"\u65E5\u5FD7\u5DF2\u5BFC\u51FA",noActiveFile:"\u6CA1\u6709\u6253\u5F00\u7684\u7B14\u8BB0",chooseFolder:"\u9009\u62E9\u6587\u4EF6\u5939",outputPathPlaceholder:"\u7559\u7A7A\u5219\u8F93\u51FA\u5230\u7B14\u8BB0\u540C\u76EE\u5F55",settingsExportTheme:"\u6587\u6863\u4E3B\u9898",settingsExportThemeDesc:"\u9009\u62E9\u5BFC\u51FA HTML \u7684\u6392\u7248\u98CE\u683C",themeDefault:"\u9ED8\u8BA4",themeGongwen:"\u516C\u6587\uFF08GB/T 9704\uFF09",themeReport:"\u62A5\u544A",themePresentation:"\u6F14\u793A",themeEngineering:"\u5DE5\u7A0B",themeSales:"\u9500\u552E",logFilterErrors:"\u4EC5\u9519\u8BEF",logFilterAll:"\u5168\u90E8",unsupportedFile:"\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B"},en:{pluginName:"OmniExport",cmdExportCurrent:"Export current note as HTML",cmdExportVault:"Batch export entire vault",settingsTitle:"OmniExport Settings",settingsLanguage:"Language",settingsTheme:"Export Theme",settingsThemeLight:"Light",settingsThemeDark:"Dark",settingsThemeAuto:"Auto",settingsEmbedAssets:"Embed assets (single-file mode)",settingsEmbedDesc:"Embed CSS, JS, and images into HTML, generating a standalone .html file",settingsInteractive:"Interactive features",settingsInteractiveDesc:"Enable collapsible blocks, TOC navigation, search, dark/light toggle",settingsMermaid:"Render Mermaid diagrams",settingsMath:"Render math formulas",settingsCodeHighlight:"Code syntax highlighting",settingsSEO:"SEO & social cards",settingsSEODesc:"Auto-generate Open Graph tags for WeChat/Twitter sharing previews",settingsOutputPath:"Output directory",settingsOutputDesc:"Leave empty to output alongside the note",settingsAutoUpdate:"Auto-check for updates",settingsCheckUpdate:"Check for updates",settingsCurrentVersion:"Current version",settingsCheckUpdateBtn:"Check now",exportSuccess:"Export successful",exportFail:"Export failed",exporting:"Exporting...",exportSingle:"Single file export",exportBatch:"Batch export",exportComplete:"Export complete, {count} files",updateAvailable:"New version {version} available, click to update",updateCheck:"Check for updates",updateLatest:"Already up to date",updateDownloading:"Downloading update...",updateManualInstall:"Please go to Release page to download and install manually",updateNoAsset:"No update file found",updateFail:"Update failed",cmdCheckUpdate:"Check for plugin updates",platformWechat:"WeChat",platformZhihu:"Zhihu",platformMedium:"Medium",platformWordPress:"WordPress",platformCopy:"Copy HTML",platformDownload:"Download HTML",cmdShowLog:"View export log",logTitle:"Export Log",logEmpty:"No logs yet",logCopy:"Copy",logExport:"Export TXT",logClear:"Clear",logCopied:"Log copied to clipboard",logCopyFail:"Copy failed, please copy manually",logExported:"Log exported",noActiveFile:"No active note",chooseFolder:"Choose folder",outputPathPlaceholder:"Empty = same directory as note",settingsExportTheme:"Document Theme",settingsExportThemeDesc:"Choose the layout style for exported HTML",themeDefault:"Default",themeGongwen:"Official (GB/T 9704)",themeReport:"Report",themePresentation:"Presentation",themeEngineering:"Engineering",themeSales:"Sales",logFilterErrors:"Errors only",logFilterAll:"All",unsupportedFile:"Unsupported file type"}}});var D={};N(D,{checkUpdate:()=>k,installUpdate:()=>O});async function k(a){try{let e=await fetch(ee,{headers:{Accept:"application/vnd.github.v3+json"}});if(!e.ok)return j(a);let n=await e.json(),t=n.tag_name?.replace(/^v/,"")||a;return{hasUpdate:te(t,a)>0,latestVersion:t,downloadUrl:n.assets?.[0]?.browser_download_url||n.zipball_url||"",releaseUrl:n.html_url||"",changelog:n.body||""}}catch{return j(a)}}async function O(a,e,n){if(!a.downloadUrl)return new f.Notice(r("updateNoAsset",n)),!1;try{new f.Notice(r("updateDownloading",n));let t=await fetch(a.downloadUrl);if(!t.ok)throw new Error("Download failed");let o=await t.blob();if(a.downloadUrl.endsWith(".zip"))return window.open(a.releaseUrl,"_blank"),new f.Notice(r("updateManualInstall",n)),!0;let i=await o.arrayBuffer();return window.open(a.releaseUrl,"_blank"),new f.Notice(r("updateManualInstall",n)),!0}catch(t){return console.error(t),new f.Notice(r("updateFail",n)),!1}}function j(a){return{hasUpdate:!1,latestVersion:a,downloadUrl:"",releaseUrl:"",changelog:""}}function te(a,e){let n=a.split(".").map(Number),t=e.split(".").map(Number);for(let o=0;o<3;o++){let i=n[o]||0,s=t[o]||0;if(i>s)return 1;if(i<s)return-1}return 0}var f,Z,Q,ee,z=U(()=>{f=require("obsidian");y();Z="acheng-byte",Q="obsidian-omniexport",ee=`https://api.github.com/repos/${Z}/${Q}/releases/latest`});var Se={};N(Se,{default:()=>F});module.exports=Y(Se);var d=require("obsidian");var g=require("obsidian");y();var C=require("obsidian"),S=class extends C.SuggestModal{constructor(e,n){super(e),this.onSelect=n,this.setPlaceholder(this.app.vault.getName())}getAllFolders(){let e=[],t=[this.app.vault.getRoot()];for(;t.length>0;){let o=t.shift();e.push(o);for(let i of o.children)i instanceof C.TFolder&&t.push(i)}return e}getSuggestions(e){let n=this.getAllFolders(),t=e.toLowerCase(),o=[];(!e||"\u6839\u76EE\u5F55".includes(e)||"root".includes(t))&&o.push({path:"",displayName:"/ (\u6839\u76EE\u5F55 / Root)"});for(let i of n){if(i.path==="/")continue;let s=i.path,l=i.name;(!e||s.toLowerCase().includes(t)||l.toLowerCase().includes(t))&&o.push({path:s,displayName:s||"/ (\u6839\u76EE\u5F55 / Root)"})}return o}renderSuggestion(e,n){n.createEl("div",{text:e.displayName})}onChooseSuggestion(e){this.onSelect(e.path)}};var P={lang:"zh",theme:"auto",exportTheme:"default",embedAssets:!0,interactive:!1,renderMermaid:!1,renderMath:!1,codeHighlight:!1,seo:!1,outputPath:"",autoUpdate:!0},E=class extends g.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty();let n=this.plugin.settings.lang;e.createEl("h2",{text:r("settingsTitle",n)}),new g.Setting(e).setName(r("settingsLanguage",n)).addDropdown(t=>t.addOption("zh","\u4E2D\u6587").addOption("en","English").setValue(n).onChange(async o=>{this.plugin.settings.lang=o,await this.plugin.saveSettings(),this.display()})),new g.Setting(e).setName(r("settingsTheme",n)).addDropdown(t=>t.addOption("light",r("settingsThemeLight",n)).addOption("dark",r("settingsThemeDark",n)).addOption("auto",r("settingsThemeAuto",n)).setValue(this.plugin.settings.theme).onChange(async o=>{this.plugin.settings.theme=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsExportTheme",n)).setDesc(r("settingsExportThemeDesc",n)).addDropdown(t=>t.addOption("default",r("themeDefault",n)).addOption("gongwen",r("themeGongwen",n)).addOption("report",r("themeReport",n)).addOption("presentation",r("themePresentation",n)).addOption("engineering",r("themeEngineering",n)).addOption("sales",r("themeSales",n)).setValue(this.plugin.settings.exportTheme).onChange(async o=>{this.plugin.settings.exportTheme=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsEmbedAssets",n)).setDesc(r("settingsEmbedDesc",n)).addToggle(t=>t.setValue(this.plugin.settings.embedAssets).onChange(async o=>{this.plugin.settings.embedAssets=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsInteractive",n)).setDesc(r("settingsInteractiveDesc",n)).addToggle(t=>t.setValue(this.plugin.settings.interactive).onChange(async o=>{this.plugin.settings.interactive=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsMermaid",n)).addToggle(t=>t.setValue(this.plugin.settings.renderMermaid).onChange(async o=>{this.plugin.settings.renderMermaid=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsMath",n)).addToggle(t=>t.setValue(this.plugin.settings.renderMath).onChange(async o=>{this.plugin.settings.renderMath=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsCodeHighlight",n)).addToggle(t=>t.setValue(this.plugin.settings.codeHighlight).onChange(async o=>{this.plugin.settings.codeHighlight=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsSEO",n)).setDesc(r("settingsSEODesc",n)).addToggle(t=>t.setValue(this.plugin.settings.seo).onChange(async o=>{this.plugin.settings.seo=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsOutputPath",n)).setDesc(r("settingsOutputDesc",n)).addText(t=>t.setPlaceholder(r("outputPathPlaceholder",n)).setValue(this.plugin.settings.outputPath).onChange(async o=>{this.plugin.settings.outputPath=o,await this.plugin.saveSettings()})).addButton(t=>t.setIcon("folder").setTooltip(r("chooseFolder",n)).onClick(()=>{new S(this.app,async i=>{this.plugin.settings.outputPath=i,await this.plugin.saveSettings(),this.display()}).open()})),new g.Setting(e).setName(r("settingsAutoUpdate",n)).addToggle(t=>t.setValue(this.plugin.settings.autoUpdate).onChange(async o=>{this.plugin.settings.autoUpdate=o,await this.plugin.saveSettings()})),new g.Setting(e).setName(r("settingsCheckUpdate",n)).setDesc(`${r("settingsCurrentVersion",n)}: ${this.plugin.manifest.version}`).addButton(t=>t.setButtonText(r("settingsCheckUpdateBtn",n)).onClick(async()=>{t.setDisabled(!0),t.setButtonText(r("updateCheck",n));try{let{checkUpdate:o}=await Promise.resolve().then(()=>(z(),D)),i=await o(this.plugin.manifest.version);i.hasUpdate?(t.setButtonText(`${r("updateAvailable",n,{version:i.latestVersion})}`),window.open(i.releaseUrl,"_blank"),new Notice(r("updateAvailable",n,{version:i.latestVersion}))):(t.setButtonText(r("updateLatest",n)),new Notice(r("updateLatest",n)))}catch{t.setButtonText(r("updateFail",n)),new Notice(r("updateFail",n))}setTimeout(()=>{t.setDisabled(!1),t.setButtonText(r("settingsCheckUpdateBtn",n))},3e3)}))}};var b="0.1.3";function M(a){let{title:e,content:n,settings:t,lang:o,createDate:i,modifyDate:s,tags:l}=a,c=t.theme==="dark"||t.theme==="auto"&&typeof window<"u"&&window.matchMedia?.("(prefers-color-scheme: dark)").matches,p=t.exportTheme||"default",h=t.seo?ne(e,a):"",m=t.interactive?he(o):"",u=t.renderMermaid?me():"",V=t.renderMath?ue():"",q=t.codeHighlight?fe():"",W=re(p,c),_=t.interactive?pe(c):"";return`<!DOCTYPE html>
<html lang="${o==="zh"?"zh-CN":"en"}" data-theme="${c?"dark":"light"}" data-export-theme="${p}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="${c?"#1e1e2e":"#ffffff"}">
<meta name="generator" content="OmniExport v${b}">
<meta name="export-theme" content="${p}">
<title>${x(e)}</title>
${h}
<style>
${oe(c,p)}
${ae()}
${W}
${_}
</style>
${q}
${V}
${u}
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js"><\/script>
</head>
<body>
${t.interactive?ge(o,p):""}
<article class="note-content" id="note-content">
${n}
</article>
${t.interactive?'<footer class="note-footer"><p class="meta-info">'+xe(i,s,l,o)+'</p><p class="plugin-version">Powered by OmniExport v'+b+"</p></footer>":""}
<script>
${m}
${t.renderMermaid?"mermaid.initialize({startOnLoad:true,theme:'"+(c?"dark":"default")+"'});":""}
<\/script>
</body>
</html>`}function ne(a,e){let n=be(e.content).substring(0,160);return`
<meta name="description" content="${x(n)}">
<meta property="og:title" content="${x(a)}">
<meta property="og:description" content="${x(n)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="${e.lang==="zh"?"zh_CN":"en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${x(a)}">
<meta name="twitter:description" content="${x(n)}">`}function oe(a,e){return`
:root {
	--bg: ${a?"#1e1e2e":"#ffffff"};
	--text: ${a?"#cdd6f4":"#1e1e2e"};
	--text-secondary: ${a?"#a6adc8":"#6c7086"};
	--accent: ${e==="gongwen"?"#ff0000":"#89b4fa"};
	--border: ${a?"#313244":"#e0e0e0"};
	--code-bg: ${a?"#313244":"#f5f5f5"};
	--link: ${a?"#89b4fa":"#1e6ddc"};
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
`}function ae(){return`
/* --- Default light --- */
html[data-export-theme="default"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="default"][data-theme="dark"] { --accent: #89b4fa; --link: #89b4fa; }
/* --- \u516C\u6587 --- */
html[data-export-theme="gongwen"] { --accent: #ff0000; --link: #1e6ddc; }
html[data-export-theme="gongwen"][data-theme="dark"] { --accent: #ff4444; --link: #89b4fa; }
/* --- \u62A5\u544A --- */
html[data-export-theme="report"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="report"][data-theme="dark"] { --accent: #89b4fa; --link: #89b4fa; }
/* --- \u6F14\u793A --- */
html[data-export-theme="presentation"] { --accent: #89b4fa; --link: #1e6ddc; }
html[data-export-theme="presentation"][data-theme="dark"] { --accent: #b4befe; --link: #89b4fa; }
/* --- \u5DE5\u7A0B --- */
html[data-export-theme="engineering"] { --accent: #2563eb; --link: #2563eb; }
html[data-export-theme="engineering"][data-theme="dark"] { --accent: #60a5fa; --link: #60a5fa; }
/* --- \u9500\u552E --- */
html[data-export-theme="sales"] { --accent: #059669; --link: #059669; }
html[data-export-theme="sales"][data-theme="dark"] { --accent: #34d399; --link: #34d399; }
`}function re(a,e){switch(a){case"gongwen":return ie();case"report":return se();case"presentation":return le();case"engineering":return ce();case"sales":return de();default:return""}}function ie(){return`
/* \u516C\u6587\u4E3B\u9898 - GB/T 9704-2012 */
@media print {
	@page { size: A4; margin: 37mm 26mm 35mm 28mm; }
}
html[data-export-theme="gongwen"] { --font: "FangSong", "\u4EFF\u5B8B", "STFangsong", serif; }
html[data-export-theme="gongwen"] body { font-family: "FangSong", "\u4EFF\u5B8B", "STFangsong", serif; font-size: 16pt; line-height: 28.99pt; }
html[data-export-theme="gongwen"] article.note-content h1 {
	font-family: "SimSun", "\u5B8B\u4F53", serif;
	font-size: 22pt; font-weight: normal;
	text-align: center; border-bottom: none;
	margin: 2em 0 1em;
}
html[data-export-theme="gongwen"] article.note-content h2 {
	font-family: "SimHei", "\u9ED1\u4F53", sans-serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content h3 {
	font-family: "KaiTi", "\u6977\u4F53", "STKaiti", serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content h4,
html[data-export-theme="gongwen"] article.note-content h5,
html[data-export-theme="gongwen"] article.note-content h6 {
	font-family: "FangSong", "\u4EFF\u5B8B", serif;
	font-size: 16pt; font-weight: normal;
}
html[data-export-theme="gongwen"] article.note-content p { text-align: justify; text-indent: 2em; }
html[data-export-theme="gongwen"] article.note-content blockquote p { text-indent: 0; }
/* \u516C\u6587\u7EA2\u7EBF */
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
html[data-export-theme="gongwen"] article.note-content td { font-family: "FangSong", "\u4EFF\u5B8B", serif; }
`}function se(){return`
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
`}function le(){return`
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
`}function ce(){return`
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
`}function de(){return`
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
`}function pe(a){return`
/* \u5DE5\u5177\u680F */
.oe-toolbar {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	background: ${a?"#181825ee":"#ffffffee"};
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
	background: ${a?"#181825":"#f8f9fa"};
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
	background: ${a?"#313244":"#e8f0fe"};
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
`}function ge(a,e){let n=a==="zh"?{search:"\u641C\u7D22...",toc:"\u76EE\u5F55",exportCSV:"\u5BFC\u51FACSV",importFile:"\u5BFC\u5165\u6587\u4EF6",importHint:"\u652F\u6301 Excel/Word/CSV"}:{search:"Search...",toc:"TOC",exportCSV:"CSV",importFile:"Import",importHint:"Excel/Word/CSV"},o=[{value:"default",label:"Default"},{value:"gongwen",label:"\u516C\u6587"},{value:"report",label:"Report"},{value:"presentation",label:"Slide"},{value:"engineering",label:a==="zh"?"\u5DE5\u7A0B":"Eng"},{value:"sales",label:a==="zh"?"\u9500\u552E":"Sales"}].map(i=>`<option value="${i.value}"${e===i.value?" selected":""}>${i.label}</option>`).join("");return`
<div class="oe-toolbar">
	<input type="text" id="oe-search" placeholder="${n.search}" oninput="oeSearch(this.value)">
	<button class="oe-btn" onclick="document.querySelector('.toc-nav').classList.toggle('open')">${n.toc}</button>
	<button class="oe-btn" onclick="oeExportCSV()">${n.exportCSV}</button>
	<button class="oe-btn" onclick="document.getElementById('oe-file-input').click()" title="${n.importHint}">${n.importFile}</button>
	<select class="oe-btn" onchange="oeSwitchTheme(this.value)" id="oe-theme-select">${o}</select>
</div>
<nav class="toc-nav" id="toc-nav"><h3>${n.toc}</h3><div id="toc-content"></div></nav>
<button class="theme-toggle" onclick="oeToggleTheme()" aria-label="Theme">\u{1F313}</button>
<input type="file" id="oe-file-input" accept=".csv,.tsv,.json,.xlsx,.xls,.docx,.doc" style="display:none" onchange="oeHandleFileImport(this)">`}function he(a){return`
/* OmniExport v${b} - Interactive Engine */

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
	if (!tables.length) { alert('${a==="zh"?"\u6CA1\u6709\u627E\u5230\u8868\u683C":"No tables found"}'); return; }
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
				var h3 = document.createElement('h3');
				h3.textContent = name;
				div.appendChild(h3);
				var tmp = document.createElement('div');
				tmp.innerHTML = html;
				div.appendChild(tmp.firstChild);
				content.appendChild(div);
			});
			alert('${a==="zh"?"Excel \u5BFC\u5165\u6210\u529F":"Excel imported"}');
		} catch(err) { alert('${a==="zh"?"Excel \u89E3\u6790\u5931\u8D25":"Excel parse failed"}: ' + err.message); }
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
					alert('${a==="zh"?"Word \u5BFC\u5165\u6210\u529F":"Word imported"}');
				})
				.catch(function(err) { alert('${a==="zh"?"Word \u89E3\u6790\u5931\u8D25":"Word parse failed"}: ' + err); });
		} catch(err) { alert('${a==="zh"?"Word \u8BFB\u53D6\u5931\u8D25":"Word read failed"}'); }
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
		alert('${a==="zh"?"CSV \u5BFC\u5165\u6210\u529F":"CSV imported"}');
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
	document.documentElement.className = 'oe-theme-' + theme;
	var sel = document.getElementById('oe-theme-select');
	if (sel) sel.value = theme;
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
`}function me(){return'<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>'}function ue(){return`<script>
window.MathJax = { tex: { inlineMath: [['$','$'],['\\\\(','\\\\)']] }, svg: { fontCache: 'global' } };
<\/script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async><\/script>`}function fe(){return`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11/styles/github-dark.min.css">
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/core.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/javascript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/python.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/typescript.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/css.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/xml.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/languages/bash.min.js"><\/script>
<script>document.addEventListener('DOMContentLoaded', function() { hljs.highlightAll(); });<\/script>`}function xe(a,e,n,t){let o=[];return a&&o.push((t==="zh"?"\u521B\u5EFA\uFF1A":"Created: ")+a),e&&o.push((t==="zh"?"\u4FEE\u6539\uFF1A":"Modified: ")+e),n&&n.length&&o.push((t==="zh"?"\u6807\u7B7E\uFF1A":"Tags: ")+n.join(", ")),o.join(" | ")}function x(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function be(a){return a.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}y();z();var T=class{constructor(e="zh"){this.entries=[];this.lang=e}setLang(e){this.lang=e}now(){return new Date().toLocaleTimeString(this.lang==="zh"?"zh-CN":"en-US",{hour12:!1})}info(e){this.entries.push({time:this.now(),level:"info",message:e}),console.log(`[OmniExport][INFO] ${e}`)}warn(e){this.entries.push({time:this.now(),level:"warn",message:e}),console.warn(`[OmniExport][WARN] ${e}`)}error(e){this.entries.push({time:this.now(),level:"error",message:e}),console.error(`[OmniExport][ERROR] ${e}`)}success(e){this.entries.push({time:this.now(),level:"success",message:e}),console.log(`[OmniExport][OK] ${e}`)}getText(){let e=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.map(t=>`[${t.time}] [${e[t.level]}] ${t.message}`).join(`
`)}getErrorText(){let e=this.lang==="zh"?{info:"\u4FE1\u606F",warn:"\u8B66\u544A",error:"\u9519\u8BEF",success:"\u6210\u529F"}:{info:"INFO",warn:"WARN",error:"ERROR",success:"OK"};return this.entries.filter(t=>t.level==="error"||t.level==="warn").map(t=>`[${t.time}] [${e[t.level]}] ${t.message}`).join(`
`)}get count(){return this.entries.length}clear(){this.entries=[]}async copyToClipboard(){try{let e=this.getText();return await navigator.clipboard.writeText(e),!0}catch{let e=document.createElement("textarea");e.value=this.getText(),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();let n=document.execCommand("copy");return document.body.removeChild(e),n}}async exportToTXT(e){let n=new Date().toISOString().replace(/[:.]/g,"-").substring(0,19),t=`omniexport-log-${e}-${n}.txt`,o=`OmniExport \u65E5\u5FD7 / Log
========================
\u5BFC\u51FA\u65F6\u95F4: ${new Date().toLocaleString(this.lang==="zh"?"zh-CN":"en-US")}
Vault: ${e}
========================

${this.getText()}`,i=new Blob([o],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),l=document.createElement("a");return l.href=s,l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s),t}};var $=require("obsidian");async function I(a,e,n,t){let o=[];a.querySelectorAll("img").forEach(i=>o.push({el:i,attr:"src"})),a.querySelectorAll("video").forEach(i=>o.push({el:i,attr:"src"})),a.querySelectorAll("audio").forEach(i=>o.push({el:i,attr:"src"})),a.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href")||"";we(s)&&o.push({el:i,attr:"href"})}),await Promise.all(o.map(async({el:i,attr:s})=>{let l=i.getAttribute(s);if(l)try{let c=await ve(l,e,n,t);if(!c)return;let p=await e.readBinary(c),h=v(p),u=`data:${w(c.extension)};base64,${h}`;i.setAttribute(s,u),i instanceof HTMLImageElement&&i.removeAttribute("loading")}catch(c){console.warn(`[OmniExport] Failed to embed: ${l}`,c)}}))}async function ve(a,e,n,t){if(a.startsWith("app://"))try{let l=new URL(a),c=decodeURIComponent(l.pathname);c.startsWith("/")&&(c=c.substring(1)),c=c.replace(/\\/g,"/");let p=e.getAbstractFileByPath(c);if(p instanceof $.TFile)return p}catch{}if(a.startsWith("content://")||a.startsWith("/")){let l=a.split("/").pop();if(l){let c=H(e,l);if(c)return c}}try{let l=n.getFirstLinkpathDest(a,t);if(l instanceof $.TFile)return l}catch{}let o=a.split("?")[0].split("#")[0],i=e.getAbstractFileByPath(o);if(i instanceof $.TFile)return i;let s=o.split("/").pop();return s?H(e,s):null}function H(a,e){let n=decodeURIComponent(e);for(let t of a.getFiles())if(t.name===e||t.name===n)return t;return null}function v(a){let e=new Uint8Array(a),n=8192,t="";for(let o=0;o<e.length;o+=n){let i=e.subarray(o,Math.min(o+n,e.length));t+=String.fromCharCode.apply(null,Array.from(i))}return btoa(t)}function w(a){return{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",ico:"image/x-icon",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",mov:"video/quicktime",avi:"video/x-msvideo",mkv:"video/x-matroska",mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",aac:"audio/aac",m4a:"audio/mp4",wma:"audio/x-ms-wma",pdf:"application/pdf"}[a.toLowerCase()]||"application/octet-stream"}function we(a){let e=a.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","bmp","svg","webp","ico","mp4","webm","ogg","mov","avi","mkv","mp3","wav","flac","aac","m4a","wma","pdf"].includes(e)}var ye=/[\\/:*?"<>|\x00-\x1f]/g,F=class extends d.Plugin{async onload(){await this.loadSettings(),this.logger=new T(this.settings.lang),this.logger.info(`Plugin loaded v${b}`),this.addCommand({id:"export-current-note",name:r("cmdExportCurrent",this.settings.lang),callback:()=>this.exportCurrentNote()}),this.addCommand({id:"export-vault",name:r("cmdExportVault",this.settings.lang),callback:()=>this.exportVault()}),this.addCommand({id:"check-update",name:r("cmdCheckUpdate",this.settings.lang),callback:()=>this.manualCheckUpdate()}),this.addCommand({id:"show-log",name:r("cmdShowLog",this.settings.lang),callback:()=>this.showLogModal()}),this.addSettingTab(new E(this.app,this)),this.settings.autoUpdate&&this.checkForUpdate()}categorizeFile(e){let n=e.extension.toLowerCase();return n==="md"?"markdown":["txt","text","log","csv","json","yaml","yml"].includes(n)?"text":["png","jpg","jpeg","gif","bmp","svg","webp","ico"].includes(n)?"image":["mp4","webm","mov","avi","mkv"].includes(n)?"video":["mp3","wav","ogg","flac","aac","m4a","wma"].includes(n)?"audio":"other"}async renderFileContent(e){switch(this.categorizeFile(e)){case"markdown":{let t=await this.app.vault.read(e);return await this.renderMarkdown(t,e)}case"text":return`<pre style="white-space:pre-wrap;word-wrap:break-word;font-family:var(--font);">${(await this.app.vault.read(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>`;case"image":try{let t=await this.app.vault.readBinary(e),o=v(t);return`<figure>
<img src="${`data:${w(e.extension)};base64,${o}`}" alt="${e.name}" style="max-width:100%;height:auto;">
<figcaption>${e.name}</figcaption>
</figure>`}catch{return`<figure><p>[${r("unsupportedFile",this.settings.lang)}: ${e.name}]</p></figure>`}case"video":try{let t=await this.app.vault.readBinary(e),o=v(t);return`<figure>
<video controls src="${`data:${w(e.extension)};base64,${o}`}" style="max-width:100%;height:auto;">Your browser does not support video.</video>
<figcaption>${e.name}</figcaption>
</figure>`}catch{return`<figure><p>[${r("unsupportedFile",this.settings.lang)}: ${e.name}]</p></figure>`}case"audio":try{let t=await this.app.vault.readBinary(e),o=v(t),s=`data:${w(e.extension)};base64,${o}`;return`<div class="audio-player">
<p>\u{1F3B5} ${e.name}</p>
<audio controls src="${s}" style="width:100%;">Your browser does not support audio.</audio>
</div>`}catch{return`<p>[${r("unsupportedFile",this.settings.lang)}: ${e.name}]</p>`}default:return`<p style="color:var(--text-secondary);">[${r("unsupportedFile",this.settings.lang)}: ${e.name}]</p>`}}async exportCurrentNote(){this.logger.clear(),this.logger.info(r("exportSingle",this.settings.lang));let e=this.app.workspace.getActiveFile();if(!e){this.logger.warn(r("noActiveFile",this.settings.lang)),new d.Notice(r("exportFail",this.settings.lang)),this.showLogModal();return}let n=this.categorizeFile(e);this.logger.info(`${r("exporting",this.settings.lang)} ${e.path} [${n}]`),new d.Notice(r("exporting",this.settings.lang));try{let t=await this.renderFileContent(e);this.logger.info(`File rendered (${n})`);let o=M({title:e.basename,content:t,settings:this.settings,lang:this.settings.lang,modifyDate:e.stat.mtime?new Date(e.stat.mtime).toLocaleDateString(this.settings.lang==="zh"?"zh-CN":"en-US"):void 0});this.logger.info(`HTML generated (${o.length} chars)`);let i=this.getOutputPath(e);this.logger.info(`Output: ${i}`),await this.saveHTML(i,o),this.logger.success(r("exportSuccess",this.settings.lang)),new d.Notice(r("exportSuccess",this.settings.lang))}catch(t){let o=t instanceof Error?t.message:String(t);this.logger.error(`Export failed: ${o}`),new d.Notice(`${r("exportFail",this.settings.lang)}: ${o}`)}}async exportVault(){this.logger.clear(),this.logger.info(r("exportBatch",this.settings.lang));let e=this.app.vault.getFiles(),n=e.filter(p=>this.categorizeFile(p)!=="other");this.logger.info(`Found ${n.length} exportable files (${e.length} total)`);let t=0,o=0,i=0,s=n.length,l=new d.Notice(`${r("exporting",this.settings.lang)} 0/${s}`,0);for(let p of n){try{let h=await this.renderFileContent(p),m=M({title:p.basename,content:h,settings:this.settings,lang:this.settings.lang}),u=this.getOutputPath(p);await this.saveHTML(u,m),t++}catch(h){o++;let m=h instanceof Error?h.message:String(h);this.logger.error(`Failed: ${p.path} - ${m}`)}((t+o)%10===0||t+o===s)&&l.setMessage(`${r("exporting",this.settings.lang)} ${t+o}/${s}`)}l.hide(),i=e.length-n.length;let c=`${r("exportComplete",this.settings.lang,{count:t})}${o>0?`, ${o} failed`:""}${i>0?`, ${i} skipped`:""}`;this.logger.success(c),new d.Notice(r("exportComplete",this.settings.lang,{count:t}))}async renderMarkdown(e,n){let t=document.createElement("div");try{return await d.MarkdownRenderer.renderMarkdown(e,t,n.path,new d.Component),this.settings.embedAssets&&(await I(t,this.app.vault,this.app.metadataCache,n.path),this.logger.info("Assets embedded as base64")),t.innerHTML}finally{t.remove()}}sanitizeFilename(e){return e.replace(ye,"_").replace(/_+/g,"_").trim()}getOutputPath(e){let n=this.sanitizeFilename(e.basename);if(this.settings.outputPath)return`${this.settings.outputPath}/${n}.html`;let t=e.path.substring(0,e.path.lastIndexOf("/"));return t?`${t}/${n}.html`:`${n}.html`}async saveHTML(e,n){let t=e.replace(/\\/g,"/"),o=t.lastIndexOf("/"),i=o>0?t.substring(0,o):"";i&&(this.app.vault.getAbstractFileByPath(i)||(await this.app.vault.createFolder(i),this.logger.info(`Created folder: ${i}`)));let s=this.app.vault.getAbstractFileByPath(t);s&&s instanceof d.TFile?await this.app.vault.modify(s,n):await this.app.vault.create(t,n)}showLogModal(){let{app:e,logger:n,settings:t}=this,o=t.lang,i=document.createElement("div");i.className="omniexport-log-modal";let s=m=>(m==="error"?n.getErrorText():n.getText())||r("logEmpty",o),l="error";i.innerHTML=`
			<div class="omniexport-log-overlay"></div>
			<div class="omniexport-log-content">
				<div class="omniexport-log-header">
					<h3>${r("logTitle",o)}</h3>
					<div style="display:flex;gap:8px;align-items:center;">
						<button class="omniexport-log-btn omniexport-log-filter" style="font-size:0.8rem;">
							${r("logFilterErrors",o)}
						</button>
						<button class="omniexport-log-close">&times;</button>
					</div>
				</div>
				<div class="omniexport-log-body">
					<div class="omniexport-log-text">${B(s(l),n)}</div>
				</div>
				<div class="omniexport-log-actions">
					<button class="omniexport-log-btn omniexport-log-copy">${r("logCopy",o)}</button>
					<button class="omniexport-log-btn omniexport-log-export">${r("logExport",o)}</button>
					<button class="omniexport-log-btn omniexport-log-clear">${r("logClear",o)}</button>
				</div>
			</div>
		`,document.body.appendChild(i);let c=()=>i.remove();i.querySelector(".omniexport-log-close").addEventListener("click",c),i.querySelector(".omniexport-log-overlay").addEventListener("click",c);let p=i.querySelector(".omniexport-log-filter"),h=i.querySelector(".omniexport-log-text");p.addEventListener("click",()=>{l=l==="error"?"all":"error",p.textContent=l==="error"?r("logFilterErrors",o):r("logFilterAll",o),p.classList.toggle("active",l==="all"),h.innerHTML=B(s(l),n)}),i.querySelector(".omniexport-log-copy").addEventListener("click",async()=>{let m=await n.copyToClipboard();new d.Notice(m?r("logCopied",o):r("logCopyFail",o))}),i.querySelector(".omniexport-log-export").addEventListener("click",async()=>{let m=e.vault.getName(),u=await n.exportToTXT(m);new d.Notice(`${r("logExported",o)}: ${u}`)}),i.querySelector(".omniexport-log-clear").addEventListener("click",()=>{n.clear(),h.innerHTML=r("logEmpty",o)})}async checkForUpdate(){try{let e=await k(this.manifest.version);e.hasUpdate&&(this.logger.info(`Update available: ${e.latestVersion}`),new d.Notice(r("updateAvailable",this.settings.lang,{version:e.latestVersion})))}catch{}}async manualCheckUpdate(){new d.Notice(r("updateCheck",this.settings.lang));try{let e=await k(this.manifest.version);e.hasUpdate?(new d.Notice(r("updateAvailable",this.settings.lang,{version:e.latestVersion})),await O(e,this.manifest.dir,this.settings.lang)):new d.Notice(r("updateLatest",this.settings.lang))}catch{new d.Notice(r("updateFail",this.settings.lang))}}async loadSettings(){this.settings=Object.assign({},P,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};function B(a,e){return a?a.split(`
`).map(t=>t.includes("[ERROR]")||t.includes("[\u9519\u8BEF]")?`<span style="color:#ef4444;font-weight:600;">${L(t)}</span>`:t.includes("[WARN]")||t.includes("[\u8B66\u544A]")?`<span style="color:#f59e0b;">${L(t)}</span>`:t.includes("[OK]")||t.includes("[\u6210\u529F]")?`<span style="color:#22c55e;">${L(t)}</span>`:L(t)).join("<br>"):""}function L(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
