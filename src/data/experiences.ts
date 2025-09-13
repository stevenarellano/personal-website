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
		company: 'AxLab',
		subgroup: 'UChicago',
		role: 'Researcher',
		location: 'Chicago, IL',
		responsibilities: [
			'Improved performance for LLM robot control by 32% through advanced prompting and PyTorch fine-tuning',
			'Developed a web application for users to enter movement and shape requests for a multi-robotic system',
		],
		when: 'Mar 2024 - Nov 2024',
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
		when: 'Aug 2024 - Oct 2024',
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
		when: 'May 2024 - Aug 2024',
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
		when: 'Apr 2023 - Jul 2023',
		logo: 'experiences/google.png',
		current: false,
		website: 'https://careers.google.com/teams/engineering-technology/',
	},
	{
		company: 'Meta',
		role: 'CS Above & Beyond Fellow',
		location: 'Menlo Park, CA',
		responsibilities: [
			'Attending weekly development workshops geared towards enhancing knowledge of programming fundamentals',
			'Collaborating with industry-leading software engineers to master essential data structure and algorithm skills',
		],
		when: 'Aug 2022 - Oct 2022',
		logo: 'experiences/meta.png',
		website: 'https://www.meta.com/',
	},
	{
		company: 'Sei Labs',
		role: 'Software Engineer',
		location: 'San Francisco, CA',
		responsibilities: [
			'Integrated 2+ cryptocurrency wallets into the platform Vortex to create a derivatives trading experience',
			"Built a Typescript SDK with 20+ functions to make gRPC calls and send messages to the Cosmos' blockchain Sei",
			'Developed the Falcon Wallet Chrome extension and mobile app used by 1000+ users with React and React Native',
			'Increased the number of compatible wallet types by 50% for Falcon Wallet by building hardware wallet HID connectivity',
		],
		when: 'Mar 2022 - Jul 2022',
		logo: 'experiences/sei-labs.png',
		subtitle: 'series a crypto startup',
		website: 'https://www.seinetwork.io/',
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
