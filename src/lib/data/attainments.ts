import AttainedCertification from '$lib/models/AttainedCertification';
import AttainedDegree from '$lib/models/AttainedDegree';
import AttainedPublication from '$lib/models/AttainedPublication';
import type { LocationType, RangeTimeType, UIFileType } from '$lib/types';
import type { PersonNameType } from './about-me';

export interface AttainedDegreeType extends UIFileType {
	description: string | string[];
	start: RangeTimeType;
	end?: RangeTimeType;
	entity: string;
	location: LocationType;
	specialization_type: 'degree-type';
}

export interface AttainedPublicationType extends UIFileType {
	description: string | string[];
	year: string;
	entity: string;
	specialization_type: 'publication-type';
	doi: string;
	authors: PersonNameType[];
}

export interface AttainedCertificationType extends UIFileType {
	description: string | string[];
	start: RangeTimeType;
	end?: RangeTimeType;
	entity: string;
	specialization_type: 'certification-type';
}

export const bscDegree = new AttainedDegree(
	'BSc in Computer Science',
	[
		"I hold a Bachelor's degree in Computer Science and Engineering, with a concentrated emphasis on software development. Throughout the four-year duration of my studies, my academic pursuits extended to diverse domains, encompassing data analytics, software analysis and design, project management, as well as machine learning and artificial intelligence.",
		'A hallmark achievement of my undergraduate tenure was the realization of a pioneering project – a blockchain system designed to centralize land registry records. This groundbreaking initiative incorporated a novel Delegated Proof of Stake (DPoS) consensus protocol, which significantly advanced the efficiency of record management. Notably, the findings and innovations from this project were disseminated through a publication presented at an IEEE Region 10 conference, underscoring the scholarly and practical impact of the endeavor.'
	],
	{
		month: 'Jan',
		year: '2016'
	},
	{
		city: 'Dhaka',
		country: 'Bangladesh'
	},
	'Brac University',
	{
		month: 'Dec',
		year: '2019'
	}
);

export const landRegPub = new AttainedPublication(
	'Blockchain based Land Registry with Delegated Proof of Stake (DPoS) Consensus in Bangladesh',
	'Land Registry documents are legally binding documents provided by the government to owners of land as proof of their ownership. In developing countries such as Bangladesh, it is essential to combat the challenges which a traditional Land Registry system faces. To keep a digital ledger of information about land assets in a transparent and secured manner, Blockchain technology can be used to overcome the hurdle. However, any Blockchain based system needs to be integrated in a well thought out manner. We propose a novel approach on enhancing the Delegated Proof of Stake consensus to provide a private ledger based system for transacting land assets which can be easily integrated into the existing traditional Land Registry system for smooth operation.',
	'2020',
	'2020 IEEE Region 10 Symposium (TENSYMP)',
	'https://ieeexplore.ieee.org/document/9230612',
	[
		{
			first: 'Mahbubul',
			middle: 'Alam',
			last: 'Majumdar'
		},
		{
			first: 'Muhtasim',
			last: 'Shahriyer'
		},
		{
			first: 'Mobashir',
			last: 'Monim'
		}
	]
);

export const scrumMasterCertification = new AttainedCertification(
	'Certified Scrum Master',
	'In my capacity as a Certified Scrum Master, I contribute extensive knowledge and expertise to the realm of agile project management. My profound grasp of Scrum principles and practices underscores my commitment to facilitating collaboration, mitigating impediments, and empowering cross-functional teams to consistently achieve outstanding outcomes. My role extends beyond the realm of certification; it encompasses the pivotal responsibility of orchestrating streamlined communication, optimizing operational efficiency, and catalyzing the triumph of agile projects, from their inception to full fruition.',
	{
		month: 'Jan',
		year: '2022'
	},
	'Scrum Alliance',
	{
		month: 'Jan',
		year: '2024'
	}
);
