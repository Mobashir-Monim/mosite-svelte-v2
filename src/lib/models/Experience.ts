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
	description: string | string[];
	works: ProjectType[];
	specialization_type: 'experience-type';

	constructor(
		name: string,
		start: RangeTimeType,
		company: CompanyType,
		description: string | string[],
		works: ProjectType[],
		end?: RangeTimeType
	) {
		this.name = name;
		this.start = start;
		this.company = company;
		this.description = description;
		this.works = works;
		this.type = 'folder';
		this.specialization_type = 'experience-type';
		this.contents = [
			{
				...company,
				type: 'file',
				name: `About ${this.company.name}`,
				specialization_type: 'company-type'
			},
			{
				type: 'file',
				name: 'Experience Description',
				specialization_type: 'experience-type',
				doc: {
					company,
					description,
					works,
					start,
					position: name,
					end
				}
			}
		];

		if (works.length) {
			this.contents.push({
				type: 'folder',
				name: 'Works',
				contents: this.works,
				specialization_type: 'experience-works'
			});
		}

		if (end) {
			this.end = end;
		}
	}
}

export default Experience;
