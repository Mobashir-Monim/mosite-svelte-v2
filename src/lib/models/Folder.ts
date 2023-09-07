import type { UIFileOrFolderType, UIFolderType } from '$lib/types';

class Folder implements UIFolderType {
	name: string;
	type: 'folder';
	contents: UIFileOrFolderType[];
	specialization_type?: string | undefined;

	constructor(name: string, contents: UIFileOrFolderType[], spspecialization_type?: string) {
		this.name = name;
		this.contents = contents;
		this.type = 'folder';

		if (spspecialization_type) {
			this.specialization_type = spspecialization_type;
		}
	}
}

export default Folder;
