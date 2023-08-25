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
