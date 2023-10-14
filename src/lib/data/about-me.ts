import AboutMe from '$lib/models/AboutMe';
import type { SocialLabelType, UIFileType } from '$lib/types';
import {
	phpSkill,
	pythonSkill,
	javaScriptSkill,
	typeScriptSkill,
	reactJSSkill,
	vueJSSkill,
	svelteSkill,
	graphQLSkill,
	laravelSkill,
	htmlSkill,
	cssSkill,
	tailwindSkill,
	capacitorSkill,
	softwareDevSkill,
	softwareArcSkill,
	blockchainSkill,
	cryptographySkill,
	awsSkill,
	firestoreSkill,
	scrumSkill,
	mentoringSkill,
	type SkillTagType,
	requirementAnalysisSkill
} from './skills';

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

export interface SocialItemType {
	label: SocialLabelType;
	link: string;
}

export interface AboutMeType extends UIFileType {
	specialization_type: 'about-me-type';
	person: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];
	location: LocationType;
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
		phpSkill,
		pythonSkill,
		javaScriptSkill,
		typeScriptSkill,
		reactJSSkill,
		vueJSSkill,
		svelteSkill,
		graphQLSkill,
		laravelSkill,
		htmlSkill,
		cssSkill,
		tailwindSkill,
		capacitorSkill,
		softwareDevSkill,
		softwareArcSkill,
		blockchainSkill,
		cryptographySkill,
		awsSkill,
		firestoreSkill,
		scrumSkill,
		mentoringSkill,
		requirementAnalysisSkill
	],
	{
		city: 'Dhaka',
		country: 'Bangladesh'
	}
);
