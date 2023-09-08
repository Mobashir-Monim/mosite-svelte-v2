import type { AttainedPublicationType } from '$lib/data/attainments';

class AttainedPublication implements AttainedPublicationType {
	name: string;
	description: string | string[];
	year: string;
	entity: string;
	doi: string;
	specialization_type: 'publication-type';
	type: 'file';

	constructor(
		name: string,
		description: string | string[],
		year: string,
		entity: string,
		doi: string
	) {
		this.name = name;
		this.description = description;
		this.year = year;
		this.entity = entity;
		this.doi = doi;
		this.specialization_type = 'publication-type';
		this.type = 'file';
	}
}

export default AttainedPublication;
