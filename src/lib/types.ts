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
