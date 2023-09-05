import type { CompanyType } from '$lib/data/companies';

class Company implements CompanyType {
	name: string;
	type: 'file';
	description: string | string[];
	logo: string;
	specialization_type: 'company-type';

	constructor(name: string, description: string | string[], logo: string) {
		this.name = name;
		this.description = description;
		this.logo = logo;
		this.type = 'file';
		this.specialization_type = 'company-type';
	}
}

export default Company;
