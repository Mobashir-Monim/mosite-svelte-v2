export interface UIFileType {
	type: 'file';
	name: string;
	icon: ConstructorOfATypedSvelteComponent;
	isOpen?: boolean;
}

export interface UIFolderType {
	type: 'folder';
	name: string;
	contents: (UIFileType | UIFolderType)[];
	isOpen?: boolean;
}

export interface DirectoryStateType {
	name: string;
	contents: (UIFileType | UIFolderType)[];
    size: number;
	left: number;
	top: number;
}
