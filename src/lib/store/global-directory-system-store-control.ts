import type { WindowStateType, UIFileOrFolderType } from '$lib/types';
import { globalDirectorySystemStore } from '.';

export const openWindow = (name: string, contents: UIFileOrFolderType[], size: number = 100) => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	if (currentStore.find((dir) => dir.name === name) === undefined) {
		currentStore.push({
			name,
			type: 'folder',
			contents,
			size,
			top: 0,
			left: 0,
			expanded: false,
			minimized: false
		});

		globalDirectorySystemStore.set(currentStore);
	} else {
		focusWindow(name);
	}
};

export const closeWindow = (name: string) => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	let targetIndex: number = -1;
	const target = currentStore.find((dir, index) => {
		if (dir.name === name) {
			targetIndex = index;
			return true;
		}

		return false;
	});

	if (target) {
		currentStore.splice(targetIndex, 1);
		globalDirectorySystemStore.set(currentStore);
	}
};

export const focusWindow = (name: string) => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	let targetIndex: number = -1;
	const target = currentStore.find((dir, index) => {
		if (dir.name === name) {
			targetIndex = index;
			return true;
		}

		return false;
	});

	if (target) {
		currentStore.splice(targetIndex, 1);
		currentStore.push(target);
		globalDirectorySystemStore.set(currentStore);
	}
};

export const moveWindow = (name: string, top: number, left: number) => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	let target: WindowStateType | undefined = currentStore.find((dir) => dir.name === name);

	if (target) {
		target.top += top;
		target.left += left;
		globalDirectorySystemStore.set(currentStore);
	}
};

export const openContent = (name: string, contentName: string) => {
	let currentStore: WindowStateType[] = [];
	let targetDirectory: WindowStateType | undefined;
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
		targetDirectory = currentStore.find((dir) => dir.name === name);
	});

	if (targetDirectory) {
		const targetContent = targetDirectory.contents?.find((content) => content.name === contentName);

		if (targetContent) {
		}
	}
};
