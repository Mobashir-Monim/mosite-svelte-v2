import type { CompanyType } from '$lib/data/companies';
import type { ProjectType } from '$lib/data/projects';
import type { SkillTagType } from '$lib/data/skills';

interface ProjectMetaType {
	company?: CompanyType;
	url?: string;
	skills?: SkillTagType[];
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
	skills?: SkillTagType[];
	specialization_type: 'project-type';

	constructor(
		name: string,
		description: string | string[],
		features: string[],
		project_type: 'research' | 'software' | 'module' | 'package',
		source: 'open' | 'closed',
		projectMeta?: ProjectMetaType
	) {
		this.name = name;
		this.description = description;
		this.features = features;
		this.project_type = project_type;
		this.source = source;
		this.type = 'file';
		this.specialization_type = 'project-type';

		if (projectMeta) {
			if (projectMeta.url) {
				this.url = projectMeta.url;
			}

			if (projectMeta.company) {
				this.company = projectMeta.company;
			}

			if (projectMeta.skills) {
				this.skills = projectMeta.skills;
			}
		}
	}
}

export default Project;
