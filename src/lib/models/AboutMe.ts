import type { AboutMeType, PersonNameType, SkillTagType, SocialItemType } from '$lib/data/about-me';
import type { LocationType } from '$lib/types';

class AboutMe implements AboutMeType {
	type: 'file';
	name: string;
	specialization_type: 'about-me-type';
	person: PersonNameType;
	description: string | string[];
	job_title: string;
	socials: SocialItemType[];
	skills: SkillTagType[];
	location: LocationType;

	constructor(
		person: PersonNameType,
		description: string | string[],
		job_title: string,
		socials: SocialItemType[],
		skills: SkillTagType[],
		location: LocationType
	) {
		this.name = 'About Me';
		this.person = person;
		this.description = description;
		this.job_title = job_title;
		this.socials = socials;
		this.skills = skills;
		this.type = 'file';
		this.specialization_type = 'about-me-type';
		this.location = location;
	}
}

export default AboutMe;
