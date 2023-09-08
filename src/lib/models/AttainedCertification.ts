import type { AttainedCertificationType } from '$lib/data/attainments';
import type { RangeTimeType } from '$lib/types';

class AttainedCertification implements AttainedCertificationType {
	name: string;
	description: string | string[];
	start: RangeTimeType;
	end?: RangeTimeType;
	entity: string;
	specialization_type: 'certification-type';
	type: 'file';

	constructor(
		name: string,
		description: string | string[],
		start: RangeTimeType,
		entity: string,
		end?: RangeTimeType
	) {
		this.name = name;
		this.description = description;
		this.start = start;
		this.entity = entity;
		this.specialization_type = 'certification-type';
		this.type = 'file';

		if (end) {
			this.end = end;
		}
	}
}

export default AttainedCertification;
