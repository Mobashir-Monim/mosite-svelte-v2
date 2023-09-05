import type { UIFileOrFolderType, UIFolderType } from '$lib/types';

class Folder implements UIFolderType {
	name: string;
	type: 'folder';
	contents: UIFileOrFolderType[];

	constructor(name: string, contents: UIFileOrFolderType[]) {
		this.name = name;
		this.contents = contents;
		this.type = 'folder';
	}
}

export default Folder;