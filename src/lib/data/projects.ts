import { gymRevenue, type CompanyType, eveneer, techynaf, bracU } from '$lib/data/companies';
import Project from '$lib/models/Project';
import type { UIFileType } from '$lib/types';

export interface ProjectType extends UIFileType {
	description: string;
	features: string[];
	url?: string | undefined;
	project_type: 'research' | 'software' | 'module' | 'package';
	source: 'open' | 'closed';
	company?: CompanyType | undefined;
}

export const grBillingEngine: ProjectType = new Project(
	'Billing Engine',
	'The Billing Engine module within GymRevenue offers an extensive suite of client-end billing functionalities, catering to the diverse needs and requirements of gym and club members. It encompasses a comprehensive range of services, including but not limited to membership fee calculation, invoice generation, payment processing, and subscription management. This module ensures a seamless and efficient billing experience for members, enhancing their overall satisfaction while facilitating accurate and transparent financial transactions within the gym or club environment.',
	[
		'Support for multiple payment processor vendors',
		'Support for multiple card, ach or cash payments',
		'Recurring payments/billing',
		'Automated payment retries',
		'Manual payment retries',
		'Late fee calculation',
		'Automated late fee calculation',
		'Invoice generation',
		'Payment status tracking',
		'Payment attempts tracking',
		'Location based sales tax application',
		'Automated sales tax update'
	],
	'module',
	'closed',
	undefined,
	gymRevenue
);

export const grInventoryManagement: ProjectType = new Project(
	'Inventory Management',
	'This module provides a sophisticated inventory management system, facilitating precise control and organization of inventory items within your establishment. It allows for meticulous categorization and tracking based on parameters such as location, item category, specific item, and brand. By utilizing this system, businesses can efficiently manage their inventory, optimize stock levels, and ensure the availability of the right products at the right place and time, thereby enhancing operational efficiency and customer satisfaction.',
	[
		'Support for product categories, product and inventory for analytics',
		'Support for inventory cost analytics',
		'Support for inventory sales analytics',
		'Support for inventory profit analytics'
	],
	'module',
	'closed',
	undefined,
	gymRevenue
);

export const grPointOfSale: ProjectType = new Project(
	'Point of Sale',
	'The Point of Sale (PoS) module offers a comprehensive platform for facilitating a wide range of transactions within the business. It enables the seamless sale of inventory items, subscriptions, and services, catering to diverse customer needs. Additionally, the module incorporates a robust discount management feature, allowing businesses to apply various discounts or promotional offers as per their pricing strategies. This multifaceted PoS system streamlines the sales process, enhances customer service, and provides businesses with the flexibility to implement pricing and discount structures that align with their strategic objectives.',
	[
		'Discounts management',
		'Sales return/refund',
		'Subscription sales',
		'Services sales',
		'Inventory sales'
	],
	'module',
	'closed',
	undefined,
	gymRevenue
);

export const grServiceAgreements: ProjectType = new Project(
	'Service Agreements',
	'This module provides a comprehensive framework for the meticulous management of service and subscription terms, both for existing offerings and new additions to the portfolio. It offers businesses the capability to define, configure, and maintain the terms associated with their services and subscriptions, ensuring accuracy and consistency in billing processes. This includes specifying pricing structures, billing cycles, renewal conditions, and any other pertinent terms. By utilizing this module, businesses can enhance billing accuracy, reduce errors, and ensure that their clients receive transparent and well-structured billing statements, thereby fostering client satisfaction and operational efficiency.',
	[
		'Agreement Template builder',
		'Agreement Managment',
		'Contract Template management',
		'Billing dates management',
		'Annual dues management',
		'Enrollment fee management'
	],
	'module',
	'closed',
	undefined,
	gymRevenue
);

export const grCalendarAndScheduling: ProjectType = new Project(
	'Calendar and Scheduling',
	'The Calendar and Scheduling module provides a robust platform for sophisticated calendar event management. It offers the flexibility to define various event types, facilitating the scheduling and efficient management of classes, tasks, or services. Additionally, it includes comprehensive attendee management capabilities, allowing for the seamless organization and coordination of participants in these events. This module serves as a valuable tool for businesses seeking to optimize their scheduling processes, improve resource allocation, and enhance client engagement through efficient event planning and management.',
	[
		'Calendar and event management',
		'Class/Task/Event/Services scheduling',
		'Attendee management',
		'Event Type Management'
	],
	'module',
	'closed',
	undefined,
	gymRevenue
);

export const eveneerBout: ProjectType = new Project(
	'Bout',
	'Bout is an integrated software solution designed to streamline and enhance faculty evaluation, analysis, and management, as well as student information management. It offers a comprehensive suite of features tailored to educational institutions, enabling them to efficiently assess faculty performance, manage student data, and make data-driven decisions to improve the overall academic experience. This software empowers institutions to maintain accurate records, evaluate faculty contributions, and optimize administrative processes for enhanced educational outcomes.',
	[
		'Feature access permissioning system',
		'Evaluation analysis and distribution tool',
		'Evaluaation results analysis',
		'Student information store',
		'Course and section management'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/bout',
	eveneer
);

export const eveneerBoutV2: ProjectType = new Project(
	'BoutV2',
	'Version 2 of Bout was meticulously crafted to maintain feature parity with its predecessor, while also introducing notable enhancements. Built on the React framework and integrated with Firebase, this iteration offers a more robust and dynamic user experience. In addition to replicating the core functionality of Bout, Version 2 introduces supplementary features designed to further streamline administrative processes and provide added value to users. These enhancements collectively contribute to an elevated level of performance and usability within the software.',
	[
		'Feature access permissioning system',
		'Evaluation analysis and distribution tool',
		'Evaluaation results analysis',
		'Student information store',
		'Course and section management',
		'Evaulation collection management',
		'Anonymous evaulation collection',
		'Form builder tool for evaluation collection',
		'Thesis registration management'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/boutv2-frontend',
	eveneer
);

export const eveneerBusso: ProjectType = new Project(
	'BuSSO',
	'Busso stands as a Single Sign-On (SSO) solution that adeptly supports versatile authentication methods, including generic SAML (Security Assertion Markup Language) and OIDC (OpenID Connect) based protocols. This comprehensive SSO system provides a secure and efficient means of authentication, catering to the diverse needs of organizations, ensuring seamless access control, and enhancing user experience across various applications and platforms.',
	[
		'Supports SAML based authentication',
		'Supports OIDC based authentication',
		'Access logs',
		'Data Change logs',
		'Email based access control',
		'Role based access control',
		'Service provider management'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/bracu-sso',
	eveneer
);

export const eveneerBlober: ProjectType = new Project(
	'Blober',
	'Blobber is a specialized software platform designed for the purpose of MySQL query testing. It serves as a dedicated environment for users to rigorously test and evaluate MySQL queries, enhancing database query optimization and facilitating the development of efficient database interactions. This tool empowers database professionals and developers to fine-tune their SQL queries for optimal performance and accuracy.',
	[
		'Randomized question from select question pool for timed tests',
		'Randomized question from select question pool for assignments',
		'Randomized question for practice'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/blober',
	eveneer
);

export const eveneerLightSaml: ProjectType = new Project(
	'LightSaml',
	'LightSaml Implements basic SAML 2.0 data model classes, serialization/deserialization to/from xml with XML security and certificates support, and message encapsulations to bindings. This was forked form qikker-online/lightSAML',
	[
		'Basic SAML 2.0 data model classes',
		'Serialization/deserialization to/from xml with XML security',
		'Certificates support',
		'Message encapsulations to bindings'
	],
	'package',
	'open',
	'https://github.com/Mobashir-Monim/lightsaml',
	eveneer
);

export const hobbyBeep: ProjectType = new Project(
	'Beep',
	'Beep represents a sophisticated parking lot management and parking spot subscription system, leveraging Internet of Things (IoT) technology to enhance parking management. It is designed to seamlessly connect with IoT devices strategically placed within the parking facility, enabling real-time detection and monitoring of available parking spots. This advanced system not only streamlines parking spot allocation but also facilitates subscription management, providing a comprehensive solution for both parking operators and users.',
	[
		'IoT based empty spot detection',
		'Self subscription and booking',
		'Automated payment for services availed'
	],
	'software',
	'closed'
);

export const hobbyMongolTori: ProjectType = new Project(
	'Mongol Tori',
	'This website serves as a Content Management System (CMS) dedicated to the Mars Rover project undertaken by Brac University, meticulously developed and maintained by the ROBU club. It functions as a central hub for disseminating project-related information, research updates, and documentation. This CMS facilitates efficient content organization, enabling seamless collaboration and information sharing among project stakeholders and enthusiasts.',
	[
		'Sponsor management',
		'Faculty advisor management',
		'Blog and photo galary',
		'Team members management'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/mongol-tori',
	undefined
);

export const hobbyLandReg: ProjectType = new Project(
	'Land Reg',
	'Land Reg is a pioneering prototype software engineered to demonstrate the functionality of a novel blockchain consensus protocol known as the "Council Protocol." This protocol represents a Delegated Proof of Stake (DPoS) solution specifically tailored for the land registry system in Bangladesh. It showcases the potential of this innovative technology to revolutionize and streamline land registry processes, offering greater transparency, security, and efficiency in land transactions within the country.',
	[
		'Land owner verification',
		'Blockchain network management',
		'Land registration',
		'Land ownership transfer',
		'Block generation using Council Protocol'
	],
	'software',
	'open',
	'https://github.com/Mobashir-Monim/land-reg',
	undefined
);

export const techynafEcube: ProjectType = new Project(
	'Ecube',
	"Ecube Entertainment's online platform serves as a comprehensive Content Management System (CMS) and eCommerce website designed to cater to a diverse range of functionalities. This integrated system allows users to seamlessly navigate between content management and eCommerce operations. It facilitates event ticket sales, offering a user-friendly interface for customers to browse, select, and purchase tickets for various entertainment events. Moreover, it provides robust product tracking capabilities, ensuring accurate inventory management and timely replenishment. The platform also enables equipment renting services, allowing users to conveniently rent specialized entertainment equipment. Lastly, it incorporates advanced sales analysis tools, offering valuable insights into customer behavior and overall sales trends to inform strategic decisions.",
	[
		'Event registration and ticket sell',
		'Equipment rental services',
		'Product sell',
		'Sales analytics',
		'Delivery tracking'
	],
	'software',
	'closed',
	undefined,
	techynaf
);

export const techynafConnect: ProjectType = new Project(
	'Connect',
	"The Scholarship Application Collection and Tracking Platform represents a sophisticated system designed to streamline the scholarship application process. Applicants can easily submit their scholarship applications through a user-friendly interface, attaching required documents such as transcripts, essays, and recommendation letters. The platform offers comprehensive application tracking, providing applicants with real-time updates on the status of their submissions. It also includes secure document management, aiding administrators in the efficient evaluation of application materials. Additionally, integrated communication tools facilitate interactions between administrators and applicants. Robust scoring and evaluation mechanisms ensure a systematic approach to selecting scholarship recipients. The platform's reporting and analytics capabilities offer insights into application volume, demographics, and other pertinent data. Ultimately, this platform simplifies scholarship management for providers and enhances the experience for applicants.",
	[
		'Application Collection',
		'Document Mangement',
		'Scoring and Evaluation',
		'Reporting and Analysis'
	],
	'software',
	'closed',
	undefined,
	techynaf
);

export const techynafHuddle: ProjectType = new Project(
	'Huddle',
	'The Routine Scheduling and Human Resource Management System (HRMS) for Cafes is a comprehensive solution designed to optimize daily cafe operations and employee management. It includes shift scheduling features to efficiently assign work shifts, ensuring appropriate coverage during peak hours. Time and attendance tracking allows employees to record their hours worked accurately. Detailed employee records, including personal information, employment history, and certifications, facilitate HR processes. The system automates payroll calculations, generates pay stubs, and manages leave requests. Performance tracking and training record keeping support employee development. The platform empowers employees through self-service access to schedules, time-off requests, and pay stubs. Robust labor cost analysis tools aid in labor cost control. Compliance and reporting features ensure adherence to labor regulations and generate compliance reports as needed. Data security is a priority, safeguarding sensitive employee information.',
	[
		'Shift Scheduling',
		'Time and Attendance',
		'Employee Records',
		'Leave Management',
		'Employee Self-Service'
	],
	'software',
	'closed',
	undefined,
	techynaf
);

export const techynafAlfred: ProjectType = new Project(
	'Alfred',
	'The Requisition Management System for Ready-Made Garment Factories is a tailored software solution designed to streamline the requisition process and enhance operational efficiency. It enables authorized personnel to create requisitions for materials, fabrics, trims, accessories, and more. Integrated with inventory management, the system provides real-time stock level information. Requisitions can undergo an automated approval workflow, ensuring appropriate reviews and approvals. Vendor integration allows for preferred supplier selection and purchase order generation. Budget tracking capabilities prevent overspending. Real-time status tracking enhances transparency and accountability. Robust reporting and analytics tools offer insights into requisition trends and budget utilization. Document management features centralize related documents, such as invoices and purchase orders. An audit trail maintains a historical record of requisition-related activities. Role-based access control ensures authorized access, and mobile accessibility may be available. The system prioritizes data security to protect sensitive information.',
	[
		'Requisition Creation',
		'Approval Workflow',
		'Budget Tracking',
		'Status Tracking',
		'Reporting and Analytics',
		'Document Management',
		'User Access Control'
	],
	'software',
	'closed',
	undefined,
	techynaf
);

export const bracUUserValidator: ProjectType = new Project(
	'User Validator',
	"The User Validator played a pivotal role in enhancing the security and integrity of the OpenEdx LMS platform at Brac University, which was launched during the pandemic. Its primary function was to meticulously validate user accounts, ensuring that they corresponded with existing and authorized student and faculty accounts. This stringent validation process was instrumental in identifying and eliminating fake and scam accounts, thereby safeguarding the platform's credibility and user community. The User Validator's efforts were critical in maintaining the authenticity of the platform's user base, which is paramount for academic institutions, particularly during remote learning initiatives.",
	[
		'Name based similarity indexing',
		'Weighted multi factored validation',
		'Factor and weight customization'
	],
	'software',
	'closed',
	undefined,
	bracU
);

export const bracULMSUsageReportGenerator: ProjectType = new Project(
	'LMS Usage Report Generator',
	`Its primary function was to meticulously collect data from Google Analytics, providing valuable insights into the usage patterns of the platform. This data was then translated into detailed and user-friendly reports, specifically designed to cater to non-technical users. 

    These reports offered a comprehensive account of how the OpenEdx LMS platform was utilized, encompassing aspects such as user engagement, content consumption, and navigation behavior. By presenting this information in an accessible format, the report generator enabled non-technical users, including educators and administrators, to gain a deep understanding of the platform's usage dynamics without the need for technical expertise.
    
    Furthermore, this data-driven approach contributed to a more cost-effective solution. By having a clear understanding of how the platform was utilized, Brac University could make informed decisions regarding resource allocation, content optimization, and user engagement strategies. Ultimately, the LMS Usage Report Generator played a pivotal role in enhancing the efficiency and effectiveness of the OpenEdx LMS platform while ensuring cost-effectiveness in its operations.`,
	[],
	'software',
	'closed',
	undefined,
	bracU
);

export const bracUAutomatedCourseManagementScripts: ProjectType = new Project(
	'Automated Course Management Scripts',
	`The Automated Course Management Scripts provided an invaluable solution to the LMS management team, streamlining the management of courses for each semester within the learning management system (LMS). This sophisticated automation tool significantly expedited critical administrative processes.

    One of its primary functions was to efficiently handle the creation and setup of courses for each academic semester. This encompassed tasks such as course creation, enrollment of students, assignment of course materials, and scheduling. By automating these processes, the management team could swiftly adapt the LMS to new academic terms, ensuring a seamless transition between semesters.
    
    Additionally, the scripts facilitated the inclusion of instructors into the system by granting them access and enabling them to manage their course content. This not only saved time but also ensured that faculty members had the necessary tools and resources at their disposal to effectively administer their courses.
    
    The implementation of the Automated Course Management Scripts significantly enhanced the overall efficiency of LMS management, allowing the team to focus more on strategic initiatives and less on manual administrative tasks. It played a pivotal role in improving the user experience for both students and instructors while promoting a more agile and responsive LMS environment.`,
	[],
	'software',
	'closed',
	undefined,
	bracU
);
