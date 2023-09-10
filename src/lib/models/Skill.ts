import type { SkillTagType } from '$lib/data/skills';

class Skill implements SkillTagType {
	type: 'technical' | 'programming-language' | 'general';
	name: string;

	constructor(name: string, type: 'technical' | 'programming-language' | 'general') {
		this.name = name;
		this.type = type;
	}
}

export default Skill;