import type { DirectoryStateType, UIFileOrFolderType, UIFileType, UIFolderType } from '$lib/types';
import { globalDirectorySystemStore } from '.';

export const openDirectory = (name: string, contents: UIFileOrFolderType[], size: number = 100) => {
	let currentStore: DirectoryStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	if (currentStore.find((dir) => dir.name === name) === undefined) {
		currentStore.push({
			name,
			contents,
			size,
			top: 50,
			left: 50
		});

		globalDirectorySystemStore.set(currentStore);
	} else {
		focusDirectory(name);
	}
};

export const closeDirectory = (name: string) => {
	let currentStore: DirectoryStateType[] = [];
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

export const focusDirectory = (name: string) => {
	let currentStore: DirectoryStateType[] = [];
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

export const moveDirectory = (name: string, top: number, left: number) => {
	let currentStore: DirectoryStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	let target: DirectoryStateType | undefined = currentStore.find((dir) => dir.name === name);

	if (target) {
		// if (
		//     currentStore[targetIndex].top + top >= 0
		//     && currentStore[targetIndex].top + top <= 0
		// ) {
		target.top += top;
		target.left += left;
		globalDirectorySystemStore.set(currentStore);
		// }
	}
};

export const openContent = (name: string, contentName: string) => {
	let currentStore: DirectoryStateType[] = [];
	let targetDirectory: DirectoryStateType | undefined;
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
		targetDirectory = currentStore.find((dir) => dir.name === name);
	});

	if (targetDirectory) {
		const targetContent = targetDirectory.contents.find((content) => content.name === contentName);

		if (targetContent) {
		}
	}
};
