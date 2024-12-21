export type ProjectInfo = {
	title: string;
	blurp: string;
	description: string;
	logo: string;
	tools: string[];
	website?: string;
	github?: string;
};

const PROJECTS: ProjectInfo[] = [
	{
		tools: ['react', 'express', 'mongodb'],
		title: 'Device Link',
		blurp: 'Peer-to-Peer IoT Data Sharing',
		description: 'IoT platform linking device owners and data consumers.',
		github: 'https://github.com/stevenarellano/device-link',
		logo: '/projects/device-link.png',
	},
	{
		tools: ['arduino', 'express', 'react', '3d-printing'],
		title: 'TypeTrek',
		blurp: 'Actuated Typing Race',
		description: 'Typing game that interacts with the physical world.',
		github: 'https://github.com/stevenarellano/actuated-1v1-typing',
		logo: '/projects/typetrek.png',
	},
	{
		tools: ['react', 'flask'],
		title: 'Decked Out',
		blurp: 'Presentation Generating AI Web App',
		description:
			'Create presentations from short prompts or essays about any topic.',
		github: 'https://github.com/the-buildrs/decked-out',
		logo: '/projects/decked-out.png',
	},
	{
		tools: ['react', 'chakraUI', 'express', 'postgresSql'],
		title: 'Ten Takeaways',
		blurp: 'Book Summary Web App',
		description:
			'App for tracking progress and reading books throughout the year.',
		github: 'https://github.com/stevenarellano/ten-takeaways',
		website: 'https://book-summaries.vercel.app/',
		logo: '/projects/ten-takeaways.png',
	},
	{
		tools: ['react'],
		title: 'Speed Typing',
		blurp: 'Typing Speed Tester',
		description:
			'Web app offering typing training with multiple levels to increase speed.',
		github: 'https://github.com/stevenarellano/speed-typing',
		website: 'https://stevenarellano.github.io/speed-typing/',
		logo: '/projects/speed-typing.png',
	},
	{
		tools: ['react', 'chakraUI'],
		title: 'Terra Finder Clone',
		blurp: 'Blockchain querying application',
		description:
			'A clone of the popular (or not so much so anymore) terra finder',
		github: '',
		website: '',
		logo: '/projects/terra-finder.png',
	},
];

export default PROJECTS;
