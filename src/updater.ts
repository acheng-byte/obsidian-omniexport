/**
 * 自动更新检测模块
 */

interface UpdateResult {
	hasUpdate: boolean;
	latestVersion: string;
	downloadUrl: string;
}

const REPO_URL = "https://api.github.com/repos/acheng-byte/obsidian-omniexport/releases/latest";

export async function checkUpdate(currentVersion: string): Promise<UpdateResult> {
	try {
		const res = await fetch(REPO_URL, {
			headers: { Accept: "application/vnd.github.v3+json" },
		});
		if (!res.ok) return { hasUpdate: false, latestVersion: currentVersion, downloadUrl: "" };

		const data = await res.json();
		const latestVersion = data.tag_name?.replace(/^v/, "") || currentVersion;

		return {
			hasUpdate: compareVersions(latestVersion, currentVersion) > 0,
			latestVersion,
			downloadUrl: data.html_url || "",
		};
	} catch {
		return { hasUpdate: false, latestVersion: currentVersion, downloadUrl: "" };
	}
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
