export type ProjectInfo = {
	title: string;
	blurp: string;
	description: string;
	logo: string;
	tools: string[];
	website?: string;
	github?: string;
};
const projectData: ProjectInfo[] = [
	{
		tools: ['react, flask'],
		title: 'Decked Out',
		blurp: 'Presentation Generating AI Web App',
		description:
			'Decked Out generates a presentation given a short prompt or an essay about what you want the presentation to be about.',
		github: 'https://github.com/the-buildrs/decked-out',
		logo: 'projects/decked-out.png',
	},
	{
		tools: ['react', 'chakraUI', 'express', 'postgresSql'],
		title: 'Ten Takeaways',
		blurp: 'Book Summary Web App',
		description:
			'Ten Takeaways is an app used to log my progression and book reading as I go through the year. ',
		github: 'https://github.com/stevenarellano/ten-takeaways',
		website: 'https://book-summaries.vercel.app/',
		logo: 'projects/books.png',
	},
	{
		tools: ['react'],
		title: 'Speed Typing',
		blurp: 'Typing Speed Tester',
		description:
			'This web app helps individuals increase their typing speed by providing a variety of levels and training for an individual todo',
		github: 'https://github.com/stevenarellano/speed-typing',
		website: 'https://stevenarellano.github.io/speed-typing/',
		logo: 'projects/typing.png',
	},
	{
		tools: ['react', 'chakraUI'],
		title: 'Terra Finder Clone',
		blurp: 'Blockchain querying application',
		description:
			'A clone of the popular (or not so much so anymore) terra finder',
		github: 'https://github.com/stevenarellano/terra-finder',
		website: 'https://terra-finder-clone.vercel.app/',
		logo: 'projects/terra.png',
	},
];

export default projectData;
