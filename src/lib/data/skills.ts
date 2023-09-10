import Skill from '$lib/models/Skill';

export interface SkillTagType {
	type: 'technical' | 'programming-language' | 'general';
	name: string;
}

export const phpSkill = new Skill('PHP', 'programming-language');

export const pythonSkill = new Skill('Python', 'programming-language');

export const javaScriptSkill = new Skill('JavaScript', 'programming-language');

export const typeScriptSkill = new Skill('TypeScript', 'programming-language');

export const reactJSSkill = new Skill('ReactJS', 'technical');

export const vueJSSkill = new Skill('VueJS', 'technical');

export const svelteSkill = new Skill('Svelte', 'technical');

export const graphQLSkill = new Skill('GraphQL', 'technical');

export const laravelSkill = new Skill('Laravel', 'technical');

export const htmlSkill = new Skill('HTML', 'technical');

export const cssSkill = new Skill('CSS', 'technical');

export const tailwindSkill = new Skill('Tailwind', 'technical');

export const capacitorSkill = new Skill('Capacitor', 'technical');

export const softwareDevSkill = new Skill('Software Development', 'technical');

export const softwareArcSkill = new Skill('Software Architecture', 'technical');

export const blockchainSkill = new Skill('Blockchain', 'technical');

export const cryptographySkill = new Skill('Cryptography', 'technical');

export const awsSkill = new Skill('AWS', 'technical');

export const firestoreSkill = new Skill('Firestore', 'technical');

export const scrumSkill = new Skill('Scrum Master', 'general');

export const mentoringSkill = new Skill('Mentoring/Teaching', 'general');
