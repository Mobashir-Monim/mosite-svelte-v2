import AboutMe from '$lib/models/AboutMe';
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

export interface AboutMeType extends UIFileType {
	specialization_type: 'about-me-type';
	person: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];
}

export const aboutMe: AboutMeType = new AboutMe(
	{
		first: 'Mobashir',
		last: 'Monim'
	},
	[
		'I am a proficient full stack web developer, driven by an unwavering passion for continual growth and innovation. My inherent curiosity fuels a deep-seated enthusiasm for meticulous research, consistently propelling me to explore novel ideas and methodologies. My persistent commitment lies in contributing substantively to intricate problem-solving within the perpetually evolving sphere of technology.',
		'My professional interests encompass cryptography, data analytics, information security, and blockchain. I ardently engage in a continuous quest for knowledge, perpetually augmenting my proficiency and expertise.',
		'Commencing my professional journey as early as 2014 while simultaneously pursuing my high school education, I have adeptly mastered the art of harmonizing and optimizing my workload and time allocation. This proficiency has enabled me to accumulate a substantial wealth of experience, ranging from educational pedagogy on a substantial scale and private tutoring to dedicated volunteer service in non-profit organizations. My portfolio further extends to include crafting software solutions within dynamic start-up environments and skillfully orchestrating people and processes within both corporate and non-corporate contexts.'
	],
	'Full Stack Web Developer',
	[
		{
			label: 'facebook',
			link: 'https://www.facebook.com/mobashir.monim'
		},
		{
			label: 'twitter',
			link: 'https://twitter.com/M_Monim'
		},
		{
			label: 'github',
			link: 'https://github.com/mobashir-monim'
		},
		{
			label: 'email',
			link: 'mailto:mobashirmonim@gmail.com'
		},
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/mobashir-monim/'
		}
	],
	[
		{
			name: 'PHP',
			type: 'programming-language'
		},
		{
			name: 'Python',
			type: 'programming-language'
		},
		{
			name: 'JavaScript',
			type: 'programming-language'
		},
		{
			name: 'TypeScript',
			type: 'programming-language'
		},
		{
			name: 'ReactJS',
			type: 'technical'
		},
		{
			name: 'VueJS',
			type: 'technical'
		},
		{
			name: 'Svelte',
			type: 'technical'
		},
		{
			name: 'GraphQL',
			type: 'technical'
		},
		{
			name: 'Laravel',
			type: 'technical'
		},
		{
			name: 'HTML',
			type: 'technical'
		},
		{
			name: 'CSS',
			type: 'technical'
		},
		{
			name: 'Tailwind',
			type: 'technical'
		},
		{
			name: 'Capacitor',
			type: 'technical'
		},
		{
			name: 'Software Development',
			type: 'technical'
		},
		{
			name: 'Software Architecture',
			type: 'technical'
		},
		{
			name: 'Blockchain',
			type: 'technical'
		},
		{
			name: 'Cryptography',
			type: 'technical'
		},
		{
			name: 'AWS',
			type: 'technical'
		},
		{
			name: 'Firestore',
			type: 'technical'
		},
		{
			name: 'Scrum Master',
			type: 'general'
		},
		{
			name: 'Mentoring/Teaching',
			type: 'general'
		}
	]
);
