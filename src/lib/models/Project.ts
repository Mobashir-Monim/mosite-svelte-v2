import type { CompanyType } from '$lib/data/companies';
import type { ProjectType } from '$lib/data/projects';

class Project implements ProjectType {
	name: string;
	type: 'file';
	description: string;
	features: string[];
	url?: string | undefined;
	project_type: 'research' | 'software' | 'module' | 'package';
	source: 'open' | 'closed';
	company?: CompanyType;

	constructor(
		name: string,
		description: string,
		features: string[],
		project_type: 'research' | 'software' | 'module' | 'package',
		source: 'open' | 'closed',
		url: string | undefined = undefined,
		company: CompanyType | undefined = undefined
	) {
		this.name = name;
		this.description = description;
		this.features = features;
		this.project_type = project_type;
		this.source = source;
		this.type = 'file';

		if (url) {
			this.url = url;
		}

		if (company) {
			this.company = company;
		}
	}
}

export default Project;
