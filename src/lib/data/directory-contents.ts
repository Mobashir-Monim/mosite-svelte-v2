import Folder from '$lib/models/Folder';
import type { UIFileOrFolderType, UIFileType, UIFolderType } from '$lib/types';
import { aboutMe } from './about-me';
import { bracUExp, eveneerExp, grExp, techynafExp } from './experiences';
import {
	eveneerBlober,
	eveneerBout,
	eveneerBoutV2,
	eveneerLightSaml,
	eveneerBusso,
	grBillingEngine,
	grCalendarAndScheduling,
	grInventoryManagement,
	grPointOfSale,
	grServiceAgreements,
	hobbyBeep,
	hobbyLandReg,
	hobbyMongolTori,
	techynafConnect,
	techynafEcube,
	techynafHuddle,
	techynafAlfred,
	bracUUserValidator,
	bracULMSUsageReportGenerator,
	bracUAutomatedCourseManagementScripts
} from './projects';

// export const aboutMe: UIFileOrFolderType[] = [
// 	{
// 		type: 'file',
// 		name: 'Short Intro'
// 	},
// 	{
// 		type: 'file',
// 		name: 'Descriptive Intro'
// 	},
// 	{
// 		type: 'file',
// 		name: 'Contact & Socials'
// 	}
// ];

export const experiences: UIFolderType = new Folder('Experiences', [
	eveneerExp,
	grExp,
	bracUExp,
	techynafExp
]);

export const projects: UIFolderType = new Folder('Projects', [
	grBillingEngine,
	grInventoryManagement,
	grPointOfSale,
	grServiceAgreements,
	grCalendarAndScheduling,
	eveneerBout,
	eveneerBoutV2,
	eveneerBlober,
	eveneerBusso,
	eveneerLightSaml,
	hobbyBeep,
	hobbyLandReg,
	hobbyMongolTori,
	techynafEcube,
	techynafConnect,
	techynafHuddle,
	techynafAlfred,
	bracUUserValidator,
	bracULMSUsageReportGenerator,
	bracUAutomatedCourseManagementScripts
]);

export const attainments: UIFileOrFolderType[] = [
	{
		type: 'folder',
		name: 'Degrees',
		contents: [
			{
				type: 'file',
				name: 'BSc. CS'
			}
		]
	},
	{
		type: 'folder',
		name: 'Publications',
		contents: [
			{
				type: 'file',
				name: 'Blockchain based Land Registry'
			}
		]
	},
	{
		type: 'folder',
		name: 'Certifications',
		contents: [
			{
				type: 'file',
				name: 'Certified Scrum Master'
			}
		]
	}
];

export const root: UIFileOrFolderType[] = [
	aboutMe,
	experiences,
	projects,
	{
		type: 'folder',
		name: 'Attainments',
		contents: []
	}
];
