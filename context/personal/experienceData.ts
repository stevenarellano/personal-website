export type Experience = {
	company: string;
	role: string;
	location: string;
	start: string;
	end: string;
	responsibilities: string[];
	backgroundColor: string;
	logo: string;
};

export const experienceData: Experience[] = [
	{
		company: 'Meta',
		role: 'Computer Science Above & Beyond Fellow',
		location: 'Menlo Park, CA',
		start: 'August 2022',
		end: 'Present',
		responsibilities: [
			'Attending weekly development workshops geared towards enhancing knowledge of programming fundamentals',
			'Collaborating with industry-leading software engineers to master essential data structure and algorithm skills',
		],
		backgroundColor: '#F1F1F1',
		logo: 'experiences/meta.png',
	},
	{
		company: 'ChicagoDAO',
		role: 'Software Engineer & Director of Curriculum',
		location: 'Chicago, IL',
		start: 'March 2022',
		end: 'Present',
		responsibilities: [
			'Managing a team of 4 by incorporating the Agile methodology Scrum using Jira Software and Google Meet',
			'Constructing 70% of the React frontend and 50% of the Rocket and MongoDB backend for the group’s Resume Book',
			'Collaborating on the operations team for the group’s upcoming $1.2 million web3 conference',
		],
		backgroundColor: '#676767',
		logo: 'experiences/dao.png',
	},
	{
		company: 'Sei Labs',
		role: 'Software Engineer',
		location: 'San Francisco',
		start: 'March 2022',
		end: 'Present',
		responsibilities: [
			'Integrated 2+ cryptocurrency wallets into the platform Vortex to create a derivatives trading experience',
			'Built a Typescript SDK with 20+ functions to make gRPC calls and send messages to the Cosmos’ blockchain Sei',
			'Developed the Falcon Wallet Chrome extension and mobile app used by 1000+ users with React and React Native',
			'Increased the number of compatible wallet types by 50% for Falcon Wallet by building hardware wallet HID connectivity',
		],
		backgroundColor: '#F1F1F1',
		logo: 'experiences/sei-labs.png',
	},
	{
		company: 'Fractal Fantasy',
		role: 'Software Engineer',
		location: 'San Francisco',
		start: 'March 2022',
		end: 'Present',
		responsibilities: [
			'Increased company visibility by 200% through creating a 3-page web app utilizing the React and ChakraUI frameworks',
			'Assembled 2+ functions to make JSON-RPC calls to the Solana backend using Project Serum’s Anchor library',
			'Constructed a cryptocurrency wallet adapter to support 6 different types of Solana wallets',
		],
		backgroundColor: '#88C5DB',
		logo: 'experiences/fractal-fantasy.jpeg',
	},
	{
		company: 'Plasticity Project',
		role: 'Fullstack Software Engineer Intern',
		location: 'Santa Cruz',
		start: 'March 2021',
		end: 'May 2021',
		responsibilities: [
			'Constructed 20% of the frontend by developing the landing page using AngularJS and IonicUI',
			'Developed the backend using Node.js/Express.js and the database using MongoDB for the transfer of image data',
			'Created 10+ REST API endpoints to connect to the frontend',
		],
		backgroundColor: '#893440',
		logo: 'experiences/plasticity.png',
	},
	{
		company: 'Harris School of Public Policy',
		role: 'Frontend Software Engineer Intern',
		location: 'Chicago, IL',
		start: 'January 2021',
		end: 'March 2021',
		responsibilities: [
			'Built 20+ email components using HTML, CSS, and Javascript used in the school newsletter',
			'Imported email components into Hubspot (CRM) to send to multiple marketing lists',
		],
		backgroundColor: '#F1F1F1',
		logo: 'experiences/harris.png',
	},
];

export default experienceData;
