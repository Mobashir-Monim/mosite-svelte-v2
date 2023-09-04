import type { CompanyType } from '$lib/data/companies';

class Company implements CompanyType {
	name: string;
	type: 'file';
	company_info: string;
	logo: string;

	constructor(name: string, company_info: string, logo: string) {
		this.name = name;
		this.company_info = company_info;
		this.logo = logo;
		this.type = 'file';
	}
}

export default Company;
