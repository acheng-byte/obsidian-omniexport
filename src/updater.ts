/**
 * 自动更新检测模块
 * 支持自动检测和手动更新
 */

import { Notice } from "obsidian";
import { t, type Lang } from "./i18n";

interface UpdateResult {
	hasUpdate: boolean;
	latestVersion: string;
	downloadUrl: string;
	releaseUrl: string;
	changelog: string;
}

const REPO_OWNER = "acheng-byte";
const REPO_NAME = "obsidian-omniexport";
const RELEASES_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

export async function checkUpdate(currentVersion: string): Promise<UpdateResult> {
	try {
		const res = await fetch(RELEASES_URL, {
			headers: { Accept: "application/vnd.github.v3+json" },
		});
		if (!res.ok) return makeNoUpdate(currentVersion);

		const data = await res.json();
		const latestVersion = data.tag_name?.replace(/^v/, "") || currentVersion;
		const hasUpdate = compareVersions(latestVersion, currentVersion) > 0;

		return {
			hasUpdate,
			latestVersion,
			downloadUrl: data.assets?.[0]?.browser_download_url || data.zipball_url || "",
			releaseUrl: data.html_url || "",
			changelog: data.body || "",
		};
	} catch {
		return makeNoUpdate(currentVersion);
	}
}

/**
 * 下载并安装更新
 */
export async function installUpdate(
	result: UpdateResult,
	pluginDir: string,
	lang: Lang,
): Promise<boolean> {
	if (!result.downloadUrl) {
		new Notice(t("updateNoAsset", lang));
		return false;
	}

	try {
		new Notice(t("updateDownloading", lang));

		const res = await fetch(result.downloadUrl);
		if (!res.ok) throw new Error("Download failed");

		const blob = await res.blob();

		// 如果是 zip 文件，需要解压（浏览器环境有限，提示用户手动安装）
		if (result.downloadUrl.endsWith(".zip")) {
			// 移动端无法自动解压，打开 release 页面让用户手动下载
			window.open(result.releaseUrl, "_blank");
			new Notice(t("updateManualInstall", lang));
			return true;
		}

		// 单文件（main.js）直接保存
		const arrayBuffer = await blob.arrayBuffer();
		// 注意：Obsidian 插件无法直接写入自身目录，需要提示用户
		window.open(result.releaseUrl, "_blank");
		new Notice(t("updateManualInstall", lang));
		return true;
	} catch (e) {
		console.error(e);
		new Notice(t("updateFail", lang));
		return false;
	}
}

function makeNoUpdate(currentVersion: string): UpdateResult {
	return {
		hasUpdate: false,
		latestVersion: currentVersion,
		downloadUrl: "",
		releaseUrl: "",
		changelog: "",
	};
}

function compareVersions(a: string, b: string): number {
	const pa = a.split(".").map(Number);
	const pb = b.split(".").map(Number);
	for (let i = 0; i < 3; i++) {
		const na = pa[i] || 0;
		const nb = pb[i] || 0;
		if (na > nb) return 1;
		if (na < nb) return -1;
	}
	return 0;
}
