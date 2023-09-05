import type { UIFileType } from '$lib/types';

export interface PersonNameType {
	first: string;
	middle?: string;
	last: string;
}

export interface LocationType {
	city: string;
	state?: string;
	country: string;
}

export interface SkillTagType {
	type: 'technical' | 'programming-language' | 'general';
	name: string;
}

export interface SocialItemType {
	label: 'facebook' | 'twitter' | 'github' | 'linkedin' | 'email';
	link: string;
}

export interface AboutMeType extends Omit<UIFileType, 'name'> {
	specialization_type: 'about-me-type';
	name: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];
}
