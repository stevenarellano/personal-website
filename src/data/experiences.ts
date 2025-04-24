export type ExperienceInfo = {
	company: string;
	subgroup?: string;
	role: string;
	location: string;
	responsibilities: string[];
	when: string;
	logo: string;
	subtitle?: string;
	current?: boolean;
	website?: string;
};

export const EXPERIENCES: ExperienceInfo[] = [
	{
		company: 'University of Chicago Department of Computer Science',
		subgroup: 'Actuated Experience Lab',
		role: 'Researcher',
		location: 'Chicago, IL',
		responsibilities: [
			'Improved performance for LLM robot control by 32% through advanced prompting and PyTorch fine-tuning',
			'Developed a web application for users to enter movement and shape requests for a multi-robotic system',
		],
		when: 'March 2024 - November 2024',
		logo: 'experiences/uchicago-cs.jpg',
		current: true,
		website: 'https://www.axlab.cs.uchicago.edu/',
	},
	{
		company: 'Google',
		subgroup: 'Spanner Team',
		role: 'Software Engineering Intern',
		location: 'Cambridge, MA',
		responsibilities: [
			'Increased named schema testing speed by 95% by implementing the feature in a database emulator in C++',
			'Increased user-defined function testing speed by 95% by implementing the feature in a database emulator in C++',
		],
		when: 'August 2024 - October 2024',
		logo: 'experiences/google.png',
		current: false,
		website:
			'https://github.com/GoogleCloudPlatform/cloud-spanner-emulator',
	},
	{
		company: 'Two Sigma',
		subgroup: 'Network Software Engineering Team',
		role: 'Software Engineering Intern',
		location: 'New York, NY',
		responsibilities: [
			'Built a data center visualization app providing analytics such as device count, temperature, and power use using React',
			'Enhanced parallel processing efficiency in an inventory service by migrating the backend from Python to Go',
			'Developed 5+ gRPC endpoints using Go to provide device data and data visualization support',
		],
		when: 'May 2024 - August 2024',
		logo: 'experiences/two-sigma.png',
		current: false,
		website: 'https://www.twosigma.com/',
	},
	{
		company: 'Google',
		subgroup: 'Gemini AI Team',
		role: 'Software Engineering Intern',
		location: 'New York, NY',
		responsibilities: [
			'Optimized LLM task performance by 66.21% through experimenting with advanced prompt tuning in Google Colab',
			'Created 5+ UI components utilizing Angular to call the backend using gRPC and enable client interaction with LLMs',
			'Developed 9+ gRPC endpoints on the backend utilizing C++ and Python to call LLMs and modify SQL databases',
		],
		when: 'April 2023 - July 2023',
		logo: 'experiences/google.png',
		current: false,
		website: 'https://careers.google.com/teams/engineering-technology/',
	},
	{
		company: 'ChicagoDAO',
		subgroup: 'Board',
		role: 'Software Engineer',
		location: 'Chicago, IL',
		responsibilities: [
			'Managing a team of 4 by incorporating the Agile methodology Scrum using Jira Software and Google Meet',
			'Constructing 70% of the React frontend and 50% of the Rocket and MongoDB backend for the group’s Resume Book',
			'Collaborating on the operations team for the group’s upcoming $1.2 million web3 conference',
		],
		when: 'March 2022 - April 2023',
		logo: 'experiences/dao.png',
		current: false,
		website: 'https://chicagodao.io/',
	},
	{
		company: 'Launch House',
		role: 'Member',
		location: 'Los Angeles, CA',
		responsibilities: [
			'Participated as member of Launch House, formerly funded by a16z',
			'Launch House was previously a community for founders to learn and grow their businesses',
		],
		when: 'February 2022 - March 2022',
		logo: 'experiences/launch-house.png',
		website: 'https://www.launchhouse.com/',
	},
	{
		company: 'Meta',
		role: 'CS Above & Beyond Fellow',
		location: 'Menlo Park, CA',
		responsibilities: [
			'Attending weekly development workshops geared towards enhancing knowledge of programming fundamentals',
			'Collaborating with industry-leading software engineers to master essential data structure and algorithm skills',
		],
		when: 'August 2022 - October 2022',
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
		when: 'March 2022 - July 2022',
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
		when: 'February 2022 - April 2022',
		logo: 'experiences/fractal-fantasy.jpeg',
	},
	{
		company: 'Plasticity Project',
		role: 'Software Engineering Intern',
		location: 'Santa Cruz, CA',
		responsibilities: [
			'Constructed 20% of the frontend by developing the landing page using AngularJS and IonicUI',
			'Developed the backend using Node.js/Express.js and the database using MongoDB for the transfer of image data',
			'Created 10+ REST API endpoints to connect to the frontend',
		],
		when: 'March 2021 - May 2021',
		logo: 'experiences/plasticity.png',
	},
	{
		company: 'Harris School of Public Policy',
		role: 'Software Engineering Intern',
		location: 'Chicago, IL',
		responsibilities: [
			'Built 20+ email components using HTML, CSS, and Javascript used in the school newsletter',
			'Imported email components into Hubspot (CRM) to send to multiple marketing lists',
		],
		when: 'January 2021 - March 2021',
		logo: 'experiences/harris.png',
	},
];

export const BLANK_EXPERIENCE: ExperienceInfo = {
	company: '',
	role: '',
	location: '',
	responsibilities: [],

	when: '',
	logo: '',
};

export default EXPERIENCES;
