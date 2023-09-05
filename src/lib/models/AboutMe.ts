import type { AboutMeType, PersonNameType, SkillTagType, SocialItemType } from '$lib/data/about-me';

class AboutMe implements AboutMeType {
	type: 'file';
	name: string;
	specialization_type: 'about-me-type';
	person: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];

	constructor(
		person: PersonNameType,
		description: string | string[],
		job_title: string,
		socials: SocialItemType[],
		skills: SkillTagType[]
	) {
		this.name = 'About Me';
		this.person = person;
		this.description = description;
		this.job_title = job_title;
		this.socials = socials;
		this.skills = skills;
		this.type = 'file';
		this.specialization_type = 'about-me-type';
	}
}

export default AboutMe;
