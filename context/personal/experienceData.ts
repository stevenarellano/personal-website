export type ExperienceInfo = {
	company: string;
	role: string;
	location: string;
	responsibilities: string[];
	when: string;
	logo: string;
	subtitle?: string;
	current?: boolean;
	website?: string;
};

export const experienceData: ExperienceInfo[] = [
	{
		company: 'ChicagoDAO',
		role: 'Software Engineer',
		location: 'Chicago, IL',
		responsibilities: [
			'Managing a team of 4 by incorporating the Agile methodology Scrum using Jira Software and Google Meet',
			'Constructing 70% of the React frontend and 50% of the Rocket and MongoDB backend for the group’s Resume Book',
			'Collaborating on the operations team for the group’s upcoming $1.2 million web3 conference',
		],
		when: 'march 2022 - present',
		logo: 'experiences/dao.png',
		current: true,
		website: 'https://chicagodao.io/',
	},
	{
		company: 'Meta',
		role: 'CS Above & Beyond Fellow',
		location: 'Menlo Park, CA',
		responsibilities: [
			'Attending weekly development workshops geared towards enhancing knowledge of programming fundamentals',
			'Collaborating with industry-leading software engineers to master essential data structure and algorithm skills',
		],
		when: 'august 2022 - october 2022',
		logo: 'experiences/meta.png',
		website: 'https://www.meta.com/',
	},
	{
		company: 'Sei Labs',
		role: 'Software Engineer',
		location: 'San Francisco, CA',
		responsibilities: [
			'Integrated 2+ cryptocurrency wallets into the platform Vortex to create a derivatives trading experience',
			'Built a Typescript SDK with 20+ functions to make gRPC calls and send messages to the Cosmos’ blockchain Sei',
			'Developed the Falcon Wallet Chrome extension and mobile app used by 1000+ users with React and React Native',
			'Increased the number of compatible wallet types by 50% for Falcon Wallet by building hardware wallet HID connectivity',
		],
		when: 'march 2022 - july 2022',
		logo: 'experiences/sei-labs.png',
		subtitle: 'series a crypto startup',
		website: 'https://www.seinetwork.io/',
	},
	{
		company: 'Fractal Fantasy',
		role: 'Software Engineer',
		location: 'London, EN',
		responsibilities: [
			'Increased company visibility by 200% through creating a 3-page web app utilizing the React and ChakraUI frameworks',
			'Assembled 2+ functions to make JSON-RPC calls to the Solana backend using Project Serum’s Anchor library',
			'Constructed a cryptocurrency wallet adapter to support 6 different types of Solana wallets',
		],
		when: 'february 2022 - april 2022',
		logo: 'experiences/fractal-fantasy.jpeg',
	},
	{
		company: 'Plasticity Project',
		role: 'Software Engineer',
		location: 'Santa Cruz, CA',
		responsibilities: [
			'Constructed 20% of the frontend by developing the landing page using AngularJS and IonicUI',
			'Developed the backend using Node.js/Express.js and the database using MongoDB for the transfer of image data',
			'Created 10+ REST API endpoints to connect to the frontend',
		],
		when: 'march 2021 - may 2021',
		logo: 'experiences/plasticity.png',
	},
	{
		company: 'Harris School of Public Policy',
		role: 'Frontend SWE Intern',
		location: 'Chicago, IL',
		responsibilities: [
			'Built 20+ email components using HTML, CSS, and Javascript used in the school newsletter',
			'Imported email components into Hubspot (CRM) to send to multiple marketing lists',
		],
		when: 'january 2021 - march 2021',
		logo: 'experiences/harris.png',
	},
];

export default experienceData;
