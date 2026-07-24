/**
 * 统一版本升级脚本
 * 用法：node bump-version.js [新版本号]
 * 示例：
 *   node bump-version.js          → 自动 patch +0.0.1
 *   node bump-version.js 0.1.0    → 指定版本号
 *   node bump-version.js 1.0.0    → 大版本升级
 *
 * 自动更新：manifest.json / package.json / versions.json
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname);

// --- 读取当前版本 ---
const manifestPath = path.join(ROOT, "manifest.json");
const packagePath = path.join(ROOT, "package.json");
const versionsPath = path.join(ROOT, "versions.json");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
const versions = JSON.parse(fs.readFileSync(versionsPath, "utf-8"));

const currentVersion = manifest.version;

// --- 计算新版本 ---
let newVersion = process.argv[2];
if (!newVersion) {
	const parts = currentVersion.split(".").map(Number);
	parts[2] = (parts[2] || 0) + 1;
	newVersion = parts.join(".");
}

// 校验版本号格式
if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
	console.error(`错误：版本号格式不合法 "${newVersion}"，应为 X.Y.Z`);
	process.exit(1);
}

if (compareVer(newVersion, currentVersion) <= 0) {
	console.error(`错误：新版本 ${newVersion} 必须大于当前版本 ${currentVersion}`);
	process.exit(1);
}

// --- 更新 manifest.json ---
manifest.version = newVersion;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, "\t") + "\n", "utf-8");

// --- 更新 package.json ---
pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, "\t") + "\n", "utf-8");

// --- 更新 versions.json ---
versions[newVersion] = manifest.minAppVersion || "1.0.0";
fs.writeFileSync(versionsPath, JSON.stringify(versions, null, "\t") + "\n", "utf-8");

// --- 输出结果 ---
console.log(`版本升级完成：${currentVersion} → ${newVersion}`);
console.log(`  manifest.json  ✓`);
console.log(`  package.json   ✓`);
console.log(`  versions.json  ✓`);

// --- 版本比较工具 ---
function compareVer(a, b) {
	const pa = a.split(".").map(Number);
	const pb = b.split(".").map(Number);
	for (let i = 0; i < 3; i++) {
		if ((pa[i] || 0) > (pb[i] || 0)) return 1;
		if ((pa[i] || 0) < (pb[i] || 0)) return -1;
	}
	return 0;
}
