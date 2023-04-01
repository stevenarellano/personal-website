export type ProjectInfo = {
	title: string;
	blurp: string;
	description: string;
	logo: string;
	tools: string[];
	website?: string;
	github?: string;
};

const PROJECT_DATA: ProjectInfo[] = [
	{
		tools: ['react', 'express', 'mongodb'],
		title: 'Device Link',
		blurp: 'Actuated Typing Race',
		description:
			'A revolutionary new platform that bridges the gap between IoT device owners and data consumers.',
		github: 'https://github.com/stevenarellano/device-link',
		logo: '/projects/device-link.png',
	},
	{
		tools: ['arduino', 'express', 'react', '3d-printing'],
		title: 'TypeTrek',
		blurp: 'Actuated Typing Race',
		description:
			'TypeTrek actuates users to practice typing by making it more enjoyable and interactive.',
		github: 'https://github.com/stevenarellano/actuated-1v1-typing',
		logo: '/projects/typetrek.png',
	},
	{
		tools: ['react', 'flask'],
		title: 'Decked Out',
		blurp: 'Presentation Generating AI Web App',
		description:
			'Decked Out generates a presentation given a short prompt or an essay about what you want the presentation to be about.',
		github: 'https://github.com/the-buildrs/decked-out',
		logo: '/projects/decked-out.png',
	},
	{
		tools: ['react', 'chakraUI', 'express', 'postgresSql'],
		title: 'Ten Takeaways',
		blurp: 'Book Summary Web App',
		description:
			'Ten Takeaways is an app used to log my progression and book reading as I go through the year. ',
		github: 'https://github.com/stevenarellano/ten-takeaways',
		website: 'https://book-summaries.vercel.app/',
		logo: '/projects/ten-takeaways.png',
	},
	{
		tools: ['react'],
		title: 'Speed Typing',
		blurp: 'Typing Speed Tester',
		description:
			'This web app helps individuals increase their typing speed by providing a variety of levels and training for an individual todo',
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
		github: 'https://github.com/stevenarellano/terra-finder',
		website: 'https://terra-finder-clone.vercel.app/',
		logo: '/projects/terra-finder.png',
	},
];

export default PROJECT_DATA;
