import Folder from '$lib/models/Folder';
import type { UIFileOrFolderType, UIFolderType } from '$lib/types';
import { aboutMe } from './about-me';
import { bscDegree, landRegPub, scrumMasterCertification } from './attainments';
import { amlExp, bracUExp, eveneerExp, grExp, techynafExp } from './experiences';
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
	bracUAutomatedCourseManagementScripts,
	grCliDevTool
} from './projects';

export const experiences: UIFolderType = new Folder(
	'Experiences',
	[eveneerExp, grExp, bracUExp, techynafExp, amlExp],
	'experiences'
);

export const projects: UIFolderType = new Folder(
	'Projects',
	[
		grCliDevTool,
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
	],
	'projects'
);

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

export const rootFolder: UIFileOrFolderType[] = [
	aboutMe,
	experiences,
	projects,
	{
		type: 'folder',
		name: 'Attainments',
		contents: [
			new Folder('Degrees', [bscDegree], 'degree-type'),
			new Folder('Publications', [landRegPub], 'publication-type'),
			new Folder('Certifications', [scrumMasterCertification], 'certification-type')
		]
	}
];
