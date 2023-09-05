import type { AboutMeType, PersonNameType, SkillTagType, SocialItemType } from '$lib/data/about-me';

class AboutMe implements AboutMeType {
	type: 'file';
	specialization_type: 'about-me-type';
	name: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];

	constructor(
		name: PersonNameType,
		description: string | string[],
		job_title: string,
		socials: SocialItemType[],
		skills: SkillTagType[]
	) {
		this.name = name;
		this.description = description;
		this.job_title = job_title;
		this.socials = socials;
		this.skills = skills;
		this.type = 'file';
		this.specialization_type = 'about-me-type';
	}
}

export default AboutMe;
