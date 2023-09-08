import type { CompanyType } from '$lib/data/companies';
import type { LocationType } from '$lib/types';

class Company implements CompanyType {
	name: string;
	type: 'file';
	description: string | string[];
	logo: string;
	specialization_type: 'company-type';
	location: LocationType;
	website?: string;
	industry: string;

	constructor(
		name: string,
		description: string | string[],
		logo: string,
		location: LocationType,
		industry: string,
		website?: string
	) {
		this.name = name;
		this.description = description;
		this.logo = logo;
		this.type = 'file';
		this.specialization_type = 'company-type';
		this.location = location;
		this.industry = industry;

		if (website) {
			this.website = website.replace('https://', '');
		}
	}
}

export default Company;
