export interface UIFileType {
	type: 'file';
	name: string;
	specialization_type?: string;
}

export interface UIFolderType {
	type: 'folder';
	name: string;
	contents: UIFileOrFolderType[];
	specialization_type?: string;
}

export interface WindowStateType {
	name: string;
	contents?: UIFileOrFolderType[];
	type: 'file' | 'folder';
	specialization_type?: string;
	size: number;
	left: number;
	top: number;
	minimized: boolean;
	expanded: boolean;
	origin: WindowStateType | undefined;
    selected?: UIFileOrFolderType;
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
