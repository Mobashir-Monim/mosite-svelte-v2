import type { ProfileType } from './types';

export const expandedNavWidth: number = 250;
export const collapsedNavWidth: number = 81;
export const collapsedNavHeight: number = 80;

/**
 * Firebase collections
 */

export const profileCollectionName: string = 'profile';
export const skillsCollectionName: string = 'skills';
export const companiesCollectionName: string = 'companies';
export const projectsCollectionName: string = 'projects';
export const experiencesCollectionName: string = 'experiences';
export const attainmentsCollectionName: string = 'attainments';

export const defaultProfile: ProfileType = {
	name: {
		first: '',
		middle: '',
		last: ''
	},
	location: {
		city: '',
		state: '',
		country: ''
	},
	title: '',
	socials: [
		{ label: 'facebook', link: '' },
		{ label: 'twitter', link: '' },
		{ label: 'github', link: '' },
		{ label: 'email', link: '' },
		{ label: 'linkedin', link: '' }
	],
	description: ['']
};
