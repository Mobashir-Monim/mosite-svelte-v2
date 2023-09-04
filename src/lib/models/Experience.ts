import type { CompanyType } from '$lib/data/companies';
import type { ExperienceType } from '$lib/data/experiences';
import type { ProjectType } from '$lib/data/projects';
import type { RangeTimeType, UIFileOrFolderType } from '$lib/types';

class Experience implements ExperienceType {
	name: string;
	type: 'folder';
	contents: UIFileOrFolderType[];
	start: RangeTimeType;
	end?: RangeTimeType;
	company: CompanyType;
	description: string;
	works: ProjectType[];

	constructor(
		name: string,
		start: RangeTimeType,
		company: CompanyType,
		description: string,
		works: ProjectType[],
		end?: RangeTimeType
	) {
		this.name = name;
		this.start = start;
		this.company = company;
		this.description = description;
		this.works = works;
		this.type = 'folder';
		this.contents = [
			{
				type: 'file',
				name: `About ${this.company.name}`
			},
			{
				type: 'file',
				name: 'Experience Description'
			},
			{
				type: 'folder',
				name: 'Works',
				contents: this.works
			}
		];

		if (end) {
			this.end = end;
		}
	}
}

export default Experience;
