/**
 * 日志模块
 * 支持一键复制、导出 TXT（带时间戳文件名）
 */

import { Notice } from "obsidian";
import { t, type Lang } from "./i18n";

export type LogLevel = "info" | "warn" | "error" | "success";

interface LogEntry {
	time: string;
	level: LogLevel;
	message: string;
}

export class Logger {
	private entries: LogEntry[] = [];
	private lang: Lang;

	constructor(lang: Lang = "zh") {
		this.lang = lang;
	}

	setLang(lang: Lang) {
		this.lang = lang;
	}

	private now(): string {
		return new Date().toLocaleTimeString(this.lang === "zh" ? "zh-CN" : "en-US", {
			hour12: false,
		});
	}

	info(msg: string) {
		this.entries.push({ time: this.now(), level: "info", message: msg });
		console.log(`[OmniExport][INFO] ${msg}`);
	}

	warn(msg: string) {
		this.entries.push({ time: this.now(), level: "warn", message: msg });
		console.warn(`[OmniExport][WARN] ${msg}`);
	}

	error(msg: string) {
		this.entries.push({ time: this.now(), level: "error", message: msg });
		console.error(`[OmniExport][ERROR] ${msg}`);
	}

	success(msg: string) {
		this.entries.push({ time: this.now(), level: "success", message: msg });
		console.log(`[OmniExport][OK] ${msg}`);
	}

	/** 获取格式化日志文本 */
	getText(): string {
		const levelLabels: Record<LogLevel, string> = this.lang === "zh"
			? { info: "信息", warn: "警告", error: "错误", success: "成功" }
			: { info: "INFO", warn: "WARN", error: "ERROR", success: "OK" };

		const lines = this.entries.map(
			(e) => `[${e.time}] [${levelLabels[e.level]}] ${e.message}`
		);
		return lines.join("\n");
	}

	/** 只获取错误和警告日志 */
	getErrorText(): string {
		const levelLabels: Record<LogLevel, string> = this.lang === "zh"
			? { info: "信息", warn: "警告", error: "错误", success: "成功" }
			: { info: "INFO", warn: "WARN", error: "ERROR", success: "OK" };

		const lines = this.entries
			.filter(e => e.level === "error" || e.level === "warn")
			.map(e => `[${e.time}] [${levelLabels[e.level]}] ${e.message}`);
		return lines.join("\n");
	}

	/** 获取日志条数 */
	get count(): number {
		return this.entries.length;
	}

	/** 清空日志 */
	clear() {
		this.entries = [];
	}

	/** 复制到剪贴板 */
	async copyToClipboard(): Promise<boolean> {
		try {
			const text = this.getText();
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// 降级方案
			const ta = document.createElement("textarea");
			ta.value = this.getText();
			ta.style.position = "fixed";
			ta.style.opacity = "0";
			document.body.appendChild(ta);
			ta.select();
			const ok = document.execCommand("copy");
			document.body.removeChild(ta);
			return ok;
		}
	}

	/** 导出为 TXT 文件（带时间戳） */
	async exportToTXT(vaultName: string): Promise<string> {
		const timestamp = new Date()
			.toISOString()
			.replace(/[:.]/g, "-")
			.substring(0, 19);
		const filename = `omniexport-log-${vaultName}-${timestamp}.txt`;
		const content = `OmniExport 日志 / Log\n========================\n导出时间: ${new Date().toLocaleString(this.lang === "zh" ? "zh-CN" : "en-US")}\nVault: ${vaultName}\n========================\n\n${this.getText()}`;

		// 创建下载
		const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);

		return filename;
	}
}
