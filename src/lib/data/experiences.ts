import Experience from '$lib/models/Experience';
import type { RangeTimeType, UIFolderType } from '$lib/types';
import { gymRevenue, type CompanyType, bracU, techynaf, eveneer } from './companies';
import {
	grBillingEngine,
	grCalendarAndScheduling,
	grInventoryManagement,
	grPointOfSale,
	grServiceAgreements,
	techynafConnect,
	type ProjectType,
	techynafAlfred,
	techynafHuddle,
	techynafEcube,
	eveneerBout,
	eveneerBoutV2,
	eveneerBlober,
	eveneerLightSaml,
	bracUUserValidator,
	bracULMSUsageReportGenerator
} from './projects';

export interface ExperienceType extends UIFolderType {
	start: RangeTimeType;
	end?: RangeTimeType;
	company: CompanyType;
	description: string;
	works: ProjectType[];
}

export const grExp = new Experience(
	'Software Engineer',
	{
		month: 'Nov',
		year: '2022'
	},
	gymRevenue,
	`In my capacity as a valued member of the development team, my focal point resides in steering the evolution of various components within the software framework. Predominantly, I shoulder the responsibility for cultivating the billing engine, distinguished by its proficiency in seamless integration with a spectrum of payment gateways. Moreover, I spearhead the implementation of the in-system Point of Sale (PoS) interface, an inventory management system, and the orchestration of service agreements.

    A significant portion of my contributions has been directed towards reimagining core facets of the software architecture. I took a pivotal role in the redevelopment of the user management module, Customer Relationship Management (CRM) system, as well as the calendar and scheduling module. Furthermore, I innovatively devised and implemented a toolset engineered for expediting code generation. This pioneering toolset has remarkably truncated the time required for integrating new backend features by an impressive 60%.`,
	[
		grBillingEngine,
		grPointOfSale,
		grInventoryManagement,
		grServiceAgreements,
		grCalendarAndScheduling
	],
	{
		month: 'Aug',
		year: '2023'
	}
);

export const bracUExp = new Experience(
	'Lecturer & Software Developer',
	{
		month: 'Jan',
		year: '2020'
	},
	bracU,
	"In my role as a Lecturer, my principal duty encompassed the instruction of various courses. Given my specialized expertise in software development, I assumed the responsibility of both educating and orchestrating the Software Engineering course. Simultaneously, leveraging my capacity as a seasoned software developer, I not only upheld the integrity of existing systems but also engaged in the creation of new ones in alignment with the department's requisites. This duality of responsibilities enabled me to seamlessly bridge the realms of academia and practical application, contributing holistically to the university's academic and operational pursuits.",
	[bracUUserValidator, bracULMSUsageReportGenerator, bracULMSUsageReportGenerator],
	{
		month: 'May',
		year: '2023'
	}
);

export const techynafExp = new Experience(
	'Backend Developer',
	{
		month: 'Dec',
		year: '2016'
	},
	techynaf,
	"In my capacity as a backend developer at Techynaf, my principal role revolved around the meticulous creation of client-oriented software solutions. Over the course of my tenure, I successfully conceptualized, engineered, and contributed to the evolution of multiple systems. These included a Content Management System (CMS), an Application Management and Tracking System, an Organizational Voting System, and a Requisition Management System. My instrumental involvement in these projects attests to my adeptness in developing tailor-made software solutions that align with diverse client needs.Techynaf operates as a dynamic software agency specializing in comprehensive client-centric solutions. The agency's service portfolio encompasses a spectrum of offerings, ranging from the development of web applications to encompassing testing, deployment, and ongoing maintenance. In my capacity as a backend developer at Techynaf, my principal role revolved around the meticulous creation of client-oriented software solutions. Over the course of my tenure, I successfully conceptualized, engineered, and contributed to the evolution of multiple systems. These included a Content Management System (CMS), an Application Management and Tracking System, an Organizational Voting System, and a Requisition Management System. My instrumental involvement in these projects attests to my adeptness in developing tailor-made software solutions that align with diverse client needs.",
	[techynafConnect, techynafAlfred, techynafHuddle, techynafEcube],
	{
		month: 'Jul',
		year: '2019'
	}
);

export const eveneerExp = new Experience(
	'Tech Wizard',
	{
		month: 'Dec',
		year: '2018'
	},
	eveneer,
	'In the capacity of Eveneer, I have assumed the pivotal role of a technology consultant. This role entailed providing nuanced expertise to the Managing Director of a prominent conglomerate situated in Bangladesh. Simultaneously, my repertoire extends to encompass diverse software development undertakings for a varied spectrum of entities, spanning non-profit organizations, research institutions, and universities. Among the prominent projects are a School Management System, a Faculty Evaluation Collection, Analysis, and Distribution System, a Course Management System, Single Sign-On, a SQL Assessment Platform, an Organizational Voting System, and a Content Management System (CMS), among others. This dynamic and diversified portfolio underscores my steadfast commitment to channeling my expertise for substantial contributions across a range of sectors.',
	[eveneerBout, eveneerBoutV2, eveneerBlober, eveneerLightSaml]
);
