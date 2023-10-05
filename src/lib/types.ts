export interface UIFileType {
	type: 'file';
	name: string;
	specialization_type?: string;
	doc?: any;
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
	doc?: UIFileType;
	type: 'file' | 'folder' | 'settings' | 'game';
	specialization_type?: string;
	size?: number;
	left: number;
	top: number;
	minimized: boolean;
	origin: WindowStateType | undefined;
	tail: WindowStateType | undefined;
	selected?: UIFileOrFolderType;
	justOpened: boolean;
	justClosed: boolean;
}

export interface IconPropsType {
	size?: number;
	classes?: string;
}

export type UIFileOrFolderType = UIFileType | UIFolderType;

export interface RangeTimeType {
	month:
		| 'Jan'
		| 'Feb'
		| 'Mar'
		| 'Apr'
		| 'May'
		| 'Jun'
		| 'Jul'
		| 'Aug'
		| 'Sep'
		| 'Oct'
		| 'Nov'
		| 'Dec';
	year: string;
}

export interface LocationType {
	city: string;
	state?: string;
	country: string;
	remote?: boolean;
}

export type SkeletonThemeType = 'skeleton' | 'crimson' | 'wintry' | 'modern';
export type ClickType = 'single' | 'double';

export interface NavOptionType {
	name: string;
	url: string;
	icon: ConstructorOfATypedSvelteComponent;
}

export interface SelectOptionsType {
	name: string;
	value: string;
}

export type SkillType = 'technical' | 'programming-language' | 'general';
export type ProjectCategoryType = 'research' | 'software' | 'module' | 'package';
export type ProjectSourceType = 'open' | 'closed';