export interface UIFileType {
	type: 'file';
	name: string;
	icon: ConstructorOfATypedSvelteComponent;
}

export interface UIFolderType {
	type: 'folder';
	name: string;
	contents: (UIFileType | UIFolderType)[];
}

export interface DirectoryStateType {
	name: string;
	contents: (UIFileType | UIFolderType)[];
	size: number;
	left: number;
	top: number;
}

export interface IconPropsType {
	size?: number;
	classes?: string;
}
