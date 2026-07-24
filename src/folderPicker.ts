/**
 * 文件夹选择器弹窗
 * 使用 Obsidian SuggestModal，全平台兼容（电脑/Android/iOS）
 */

import { App, SuggestModal, TFolder, TAbstractFile } from "obsidian";

export interface FolderChoice {
	path: string;
	displayName: string;
}

export class FolderPickerModal extends SuggestModal<FolderChoice> {
	private onSelect: (path: string) => void;

	constructor(app: App, onSelect: (path: string) => void) {
		super(app);
		this.onSelect = onSelect;
		this.setPlaceholder(this.app.vault.getName());
	}

	/** 获取所有文件夹列表 */
	getAllFolders(): TFolder[] {
		const folders: TFolder[] = [];
		const root = this.app.vault.getRoot();

		// 用迭代方式遍历（避免递归栈溢出）
		const queue: TFolder[] = [root];
		while (queue.length > 0) {
			const current = queue.shift()!;
			folders.push(current);
			for (const child of current.children) {
				if (child instanceof TFolder) {
					queue.push(child);
				}
			}
		}

		return folders;
	}

	getSuggestions(query: string): FolderChoice[] {
		const folders = this.getAllFolders();
		const lowerQuery = query.toLowerCase();

		const results: FolderChoice[] = [];

		// 添加"根目录"选项（清空路径）
		if (!query || "根目录".includes(query) || "root".includes(lowerQuery)) {
			results.push({ path: "", displayName: "/ (根目录 / Root)" });
		}

		for (const folder of folders) {
			const path = folder.path === "/" ? "" : folder.path;
			const name = folder.name;

			// 模糊匹配：路径或文件夹名包含查询
			if (
				!query ||
				path.toLowerCase().includes(lowerQuery) ||
				name.toLowerCase().includes(lowerQuery)
			) {
				results.push({
					path,
					displayName: path || "/ (根目录 / Root)",
				});
			}
		}

		return results;
	}

	renderSuggestion(choice: FolderChoice, el: HTMLElement) {
		el.createEl("div", { text: choice.displayName });
	}

	onChooseSuggestion(choice: FolderChoice) {
		this.onSelect(choice.path);
	}
}
