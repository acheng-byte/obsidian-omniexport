/**
 * 资源内嵌模块
 * 将渲染后 HTML 中的图片/视频/音频路径替换为 base64 data URI
 * 使导出的 HTML 真正自包含，离线也能显示
 */

import { TFile, Vault, MetadataCache } from "obsidian";

/**
 * 内嵌所有资源（图片/视频/音频）为 base64 data URI
 * @param container 渲染后的 DOM 容器
 * @param vault Obsidian Vault
 * @param metadataCache Obsidian MetadataCache
 * @param sourcePath 源文件路径（用于解析相对链接）
 */
export async function embedAssets(
	container: HTMLElement,
	vault: Vault,
	metadataCache: MetadataCache,
	sourcePath: string
): Promise<void> {
	const elements: Array<{ el: HTMLImageElement | HTMLVideoElement | HTMLAudioElement; attr: "src" | "href" }> = [];

	// 收集所有需要处理的元素
	container.querySelectorAll("img").forEach(el => elements.push({ el, attr: "src" }));
	container.querySelectorAll("video").forEach(el => elements.push({ el, attr: "src" }));
	container.querySelectorAll("audio").forEach(el => elements.push({ el, attr: "src" }));
	container.querySelectorAll("a[href]").forEach(el => {
		const href = el.getAttribute("href") || "";
		if (isMediaFile(href)) {
			elements.push({ el: el as HTMLAnchorElement, attr: "href" });
		}
	});

	// 并行处理所有资源
	await Promise.all(elements.map(async ({ el, attr }) => {
		const original = el.getAttribute(attr);
		if (!original) return;

		try {
			const file = await resolveFile(original, vault, metadataCache, sourcePath);
			if (!file) return;

			const data = await vault.readBinary(file);
			const base64 = arrayBufferToBase64(data);
			const mimeType = getMimeType(file.extension);
			const dataUri = `data:${mimeType};base64,${base64}`;

			el.setAttribute(attr, dataUri);
			// 图片移除 lazy loading（base64 无需懒加载）
			if (el instanceof HTMLImageElement) {
				el.removeAttribute("loading");
			}
		} catch (e) {
			// 静默失败，保留原始路径
			console.warn(`[OmniExport] Failed to embed: ${original}`, e);
		}
	}));
}

/**
 * 解析文件路径为 TFile
 * 支持：app:// URL、绝对路径、相对文件名、wikilink
 */
async function resolveFile(
	src: string,
	vault: Vault,
	metadataCache: MetadataCache,
	sourcePath: string
): Promise<TFile | null> {
	// 1. app:// URL（桌面端 Obsidian 渲染结果）
	if (src.startsWith("app://")) {
		try {
			const url = new URL(src);
			let filePath = decodeURIComponent(url.pathname);
			if (filePath.startsWith("/")) filePath = filePath.substring(1);
			// Windows 路径兼容
			filePath = filePath.replace(/\\/g, "/");
			const f = vault.getAbstractFileByPath(filePath);
			if (f instanceof TFile) return f;
		} catch { /* ignore */ }
	}

	// 2. content:// URL（移动端）或绝对路径
	if (src.startsWith("content://") || src.startsWith("/")) {
		// 尝试从文件名查找
		const fileName = src.split("/").pop();
		if (fileName) {
			const found = findFileByName(vault, fileName);
			if (found) return found;
		}
	}

	// 3. 通过 metadataCache 解析（wikilink / 相对路径）
	try {
		const resolved = metadataCache.getFirstLinkpathDest(src, sourcePath);
		if (resolved instanceof TFile) return resolved;
	} catch { /* ignore */ }

	// 4. 直接按路径查找
	const cleaned = src.split("?")[0].split("#")[0];
	const f = vault.getAbstractFileByPath(cleaned);
	if (f instanceof TFile) return f;

	// 5. 按文件名全局搜索
	const fileName = cleaned.split("/").pop();
	if (fileName) {
		return findFileByName(vault, fileName);
	}

	return null;
}

/** 按文件名在 vault 中查找 */
function findFileByName(vault: Vault, name: string): TFile | null {
	const decoded = decodeURIComponent(name);
	for (const file of vault.getFiles()) {
		if (file.name === name || file.name === decoded) {
			return file;
		}
	}
	return null;
}

/** ArrayBuffer → base64 字符串（分块避免栈溢出） */
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
	const bytes = new Uint8Array(buffer);
	const chunkSize = 8192;
	let binary = "";
	for (let i = 0; i < bytes.length; i += chunkSize) {
		const chunk = bytes.subarray(i, Math.min(i + chunkSize, bytes.length));
		binary += String.fromCharCode.apply(null, Array.from(chunk));
	}
	return btoa(binary);
}

/** 根据扩展名返回 MIME 类型 */
export function getMimeType(ext: string): string {
	const map: Record<string, string> = {
		// 图片
		png: "image/png",
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		gif: "image/gif",
		bmp: "image/bmp",
		svg: "image/svg+xml",
		webp: "image/webp",
		ico: "image/x-icon",
		// 视频
		mp4: "video/mp4",
		webm: "video/webm",
		ogg: "video/ogg",
		mov: "video/quicktime",
		avi: "video/x-msvideo",
		mkv: "video/x-matroska",
		// 音频
		mp3: "audio/mpeg",
		wav: "audio/wav",
		flac: "audio/flac",
		aac: "audio/aac",
		m4a: "audio/mp4",
		wma: "audio/x-ms-wma",
		// 文档
		pdf: "application/pdf",
	};
	return map[ext.toLowerCase()] || "application/octet-stream";
}

/** 判断是否为媒体文件 */
function isMediaFile(path: string): boolean {
	const ext = path.split(".").pop()?.toLowerCase() || "";
	return [
		"png", "jpg", "jpeg", "gif", "bmp", "svg", "webp", "ico",
		"mp4", "webm", "ogg", "mov", "avi", "mkv",
		"mp3", "wav", "flac", "aac", "m4a", "wma",
		"pdf",
	].includes(ext);
}
