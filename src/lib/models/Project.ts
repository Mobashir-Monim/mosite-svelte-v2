import type { CompanyType } from '$lib/data/companies';
import type { ProjectType } from '$lib/data/projects';

interface ProjectCompanyAndURL {
	company?: CompanyType;
	url?: string;
}
class Project implements ProjectType {
	name: string;
	type: 'file';
	description: string | string[];
	features: string[];
	url?: string | undefined;
	project_type: 'research' | 'software' | 'module' | 'package';
	source: 'open' | 'closed';
	company?: CompanyType;
	specialization_type: 'project-type';

	constructor(
		name: string,
		description: string | string[],
		features: string[],
		project_type: 'research' | 'software' | 'module' | 'package',
		source: 'open' | 'closed',
		companyAndURL?: ProjectCompanyAndURL
	) {
		this.name = name;
		this.description = description;
		this.features = features;
		this.project_type = project_type;
		this.source = source;
		this.type = 'file';
		this.specialization_type = 'project-type';

		if (companyAndURL) {
			if (companyAndURL.url) {
				this.url = companyAndURL.url;
			}

			if (companyAndURL.company) {
				this.company = companyAndURL.company;
			}
		}
	}
}

export default Project;
