export interface UIFileType {
	type: 'file';
	name: string;
}

export interface UIFolderType {
	type: 'folder';
	name: string;
	contents: UIFileOrFolderType[];
}

export interface DirectoryStateType {
	name: string;
	contents: UIFileOrFolderType[];
	size: number;
	left: number;
	top: number;
}

export interface IconPropsType {
	size?: number;
	classes?: string;
}

export type UIFileOrFolderType = UIFileType | UIFolderType;

export interface RangeTimeType {
	month: string;
	year: string;
}