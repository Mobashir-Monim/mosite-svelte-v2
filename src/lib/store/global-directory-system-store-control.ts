import type { WindowStateType, UIFileOrFolderType } from '$lib/types';
import { globalDirectorySystemStore } from '.';

export const openWindow = (
	name: string,
	contents: UIFileOrFolderType[],
	size: number = 100,
	origin: string | undefined = undefined
) => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	if (currentStore.find((dir) => dir.name === name) === undefined) {
		let originState: WindowStateType | undefined = undefined;

		if (origin && origin !== 'root') {
			let originIndex: number = -1;
			originState = currentStore.find((dir, index) => {
				if (dir.name === origin) {
					originIndex === index;
					return true;
				}

				return false;
			});

			currentStore.splice(originIndex, 1);
		}

		currentStore.push({
			name,
			type: 'folder',
			contents,
			size,
			top: originState?.top ?? 0,
			left: originState?.left ?? 0,
			expanded: originState?.expanded ?? false,
			minimized: originState?.minimized ?? false,
			origin: originState
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
		target.top = top;
		target.left = left;
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

export const selectContent = (name: string, contentName: string) => {
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
		currentStore[targetIndex].selected = currentStore[targetIndex].contents?.find(
			(content) => content.name === contentName
		);
		globalDirectorySystemStore.set(currentStore);
	}
};
