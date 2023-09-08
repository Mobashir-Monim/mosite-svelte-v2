import type { PersonNameType } from '$lib/data/about-me';
import type { AttainedPublicationType } from '$lib/data/attainments';

class AttainedPublication implements AttainedPublicationType {
	name: string;
	description: string | string[];
	year: string;
	entity: string;
	doi: string;
	authors: PersonNameType[];
	specialization_type: 'publication-type';
	type: 'file';

	constructor(
		name: string,
		description: string | string[],
		year: string,
		entity: string,
		doi: string,
		authors: PersonNameType[]
	) {
		this.name = name;
		this.description = description;
		this.year = year;
		this.entity = entity;
		this.doi = doi;
		this.authors = authors;
		this.specialization_type = 'publication-type';
		this.type = 'file';
	}
}

export default AttainedPublication;
