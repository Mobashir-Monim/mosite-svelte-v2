import type { AttainedDegreeType } from '$lib/data/attainments';
import type { LocationType, RangeTimeType } from '$lib/types';

class AttainedDegree implements AttainedDegreeType {
	name: string;
	description: string | string[];
	start: RangeTimeType;
	end?: RangeTimeType;
	entity: string;
	location: LocationType;
	specialization_type: 'degree-type';
	type: 'file';

	constructor(
		name: string,
		description: string | string[],
		start: RangeTimeType,
		location: LocationType,
		entity: string,
		end?: RangeTimeType
	) {
		this.name = name;
		this.description = description;
		this.start = start;
		this.location = location;
		this.entity = entity;
		this.type = 'file';
		this.specialization_type = 'degree-type';

		if (end) {
			this.end = end;
		}
	}
}

export default AttainedDegree;
