import Company from '$lib/models/Company';
import gymrevenuelogo from '../../assets/imgs/gym-revenue.png';
import bracUlogo from '../../assets/imgs/bracu.png';
import techynafLogo from '../../assets/imgs/techynaf-technologies-ltd.png';
import eveneerLogo from '../../assets/imgs/eveneer.png';
import type { LocationType, UIFileType } from '$lib/types';

export interface CompanyType extends UIFileType {
	description: string | string[];
	logo: string;
	specialization_type: 'company-type';
	location: LocationType;
	website?: string;
    industry: string,
}

export const gymRevenue: CompanyType = new Company(
	'GymRevenue',
	'GymRevenue is a robust Software as a Service (SaaS) platform meticulously curated to meet the distinct needs of gym and club proprietors. It boasts a diverse array of intricately crafted modules, each thoughtfully designed to optimize operational efficiency and enhance user experience within the fitness industry. These modules encompass a wide range of functions, catering to various aspects of gym and club management, such as membership tracking, billing, scheduling, and more. With GymRevenue, proprietors can streamline their operations and provide a seamless experience for their clients while gaining valuable insights into their business performance.',
	gymrevenuelogo,
	{
		city: 'Dallas',
		state: 'TX',
		country: 'USA'
	},
    'Software Development',
	'gymrevenue.com',
);

export const bracU: CompanyType = new Company(
	'Brac University',
	"Brac University (BracU), situated in Dhaka, Bangladesh, embraces a liberal arts educational paradigm, fostering novel ideas and revitalizing the landscape of tertiary education. The institution is dedicated to delivering excellence in education and strives to remain attuned to the evolving demands of the contemporary era. Drawing from BRAC's rich history of devising solutions to challenges stemming from extreme poverty, BracU endeavors to imbue its students with a resolute dedication to contributing to national development and advancement.",
	bracUlogo,
	{
		city: 'Dhaka',
		country: 'Bangladesh'
	},
    'Higher Education',
	'bracu.ac.bd',
);

export const techynaf: CompanyType = new Company(
	'Techynaf Technologies Limited',
	"Techynaf operates as a dynamic software agency specializing in comprehensive client-centric solutions. The agency's service portfolio encompasses a spectrum of offerings, ranging from the development of web applications to encompassing testing, deployment, and ongoing maintenance.",
	techynafLogo,
	{
		city: 'Dhaka',
		country: 'Bangladesh'
	},
    'Software Development',
	'linkedin.com/company/techynaf-technologies/about',
);

export const eveneer: CompanyType = new Company(
	'Eveneer',
	'Eveneer, an initiative conceived by myself, functions as a strategic platform for engaging in specialized contractual endeavors aligned with both my research pursuits and personal interests. The operational ethos of Eveneer is distinguished by a meticulous approach to client engagement, deliberately selecting projects based on a discerning criterion.',
	eveneerLogo,
	{
		city: 'Dhaka',
		country: 'Bangladesh'
	},
    'Software Development',
	'eveneer.xyz',
);
