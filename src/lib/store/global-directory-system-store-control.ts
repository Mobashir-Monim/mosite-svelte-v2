import type { WindowStateType, UIFileOrFolderType, UIFileType } from '$lib/types';
import { globalDirectorySystemStore } from '.';

export const getGlobalDirectorySystemStore = () => {
	let currentStore: WindowStateType[] = [];
	globalDirectorySystemStore.subscribe((value) => {
		currentStore = value;
	});

	return currentStore;
};

export const findWindowWithName = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();

	let targetIndex: number = -1;
	const target = currentStore.find((dir, index) => {
		if (dir.name === name) {
			targetIndex = index;
			return true;
		}

		return false;
	});

	return {
		targetIndex,
		target
	};
};

export const openWindow = (
	name: string,
	contents: UIFileOrFolderType[],
	size: number = 100,
	origin: string | undefined = undefined
) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();

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
			origin: originState,
			tail: undefined
		});

		globalDirectorySystemStore.set(currentStore);
	} else {
		focusWindow(name);
	}
};

export const closeWindow = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target) {
		currentStore.splice(targetIndex, 1);
		globalDirectorySystemStore.set(currentStore);
	}
};

export const focusWindow = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target) {
		currentStore.splice(targetIndex, 1);
		target.minimized = false;
		currentStore.push(target);
		globalDirectorySystemStore.set(currentStore);
	}
};

export const moveWindow = (name: string, top: number, left: number) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { target } = findWindowWithName(name);

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
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target) {
		currentStore[targetIndex].selected = currentStore[targetIndex].contents?.find(
			(content) => content.name === contentName
		);
		globalDirectorySystemStore.set(currentStore);
	}
};

export const goToOrigin = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target && target?.origin) {
		const origin: WindowStateType = target.origin;
		origin.tail = target;
		target.selected = undefined;
		origin.selected = undefined;

		currentStore.splice(targetIndex, 1);
		currentStore.push(origin);

		globalDirectorySystemStore.set(currentStore);
	}
};

export const goToTail = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target && target?.tail) {
		const tail: WindowStateType = target.tail;
		target.selected = undefined;
		tail.selected = undefined;

		currentStore.splice(targetIndex, 1);
		currentStore.push(tail);

		globalDirectorySystemStore.set(currentStore);
	}
};

export const minimizeWindow = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target) {
		currentStore[targetIndex].minimized = true;
		globalDirectorySystemStore.set(currentStore);
	}
};

export const unminimizeWindow = (name: string) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
	const { targetIndex, target } = findWindowWithName(name);

	if (target) {
		currentStore[targetIndex].minimized = false;
		globalDirectorySystemStore.set(currentStore);
	}
};

export const unminimizeAll = (type?: 'file' | 'folder') => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();

	for (let webWindow of currentStore) {
		if (webWindow.name !== 'root' && webWindow.name !== 'settings') {
			if ((type && type === webWindow.type) || !type) {
				webWindow.minimized = false;
			}
		}
	}

	globalDirectorySystemStore.set(currentStore);
};

export const openFile = (name: string, doc: UIFileType) => {
	let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();

	if (currentStore.find((dir) => dir.name === name) === undefined) {
		currentStore.push({
			name,
			type: 'file',
			doc,
			top: 0,
			left: 0,
			expanded: false,
			minimized: false,
			origin: undefined,
			tail: undefined
		});

		globalDirectorySystemStore.set(currentStore);
	} else {
		focusWindow(name);
	}
};

export const toggleWindowExpansion = (name: string) => {
    let currentStore: WindowStateType[] = getGlobalDirectorySystemStore();
    const { targetIndex, target } = findWindowWithName(name);

    if (target) {
        currentStore[targetIndex].expanded = !currentStore[targetIndex].expanded;
        globalDirectorySystemStore.set(currentStore);
    }
}