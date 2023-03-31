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
		tools: ['react, flask'],
		title: 'Decked Out',
		blurp: 'Presentation Generating AI Web App',
		description:
			'Decked Out generates a presentation given a short prompt or an essay about what you want the presentation to be about.',
		github: 'https://github.com/the-buildrs/decked-out',
		logo: 'https://media.discordapp.net/attachments/1088230792754376827/1091346240660320318/steve_2d_illustration_humans_making_powerpoints_with_the_help_o_1f9180d0-20d3-497c-8026-9aa6d4276aed.png?width=1622&height=936',
	},
	{
		tools: ['react', 'chakraUI', 'express', 'postgresSql'],
		title: 'Ten Takeaways',
		blurp: 'Book Summary Web App',
		description:
			'Ten Takeaways is an app used to log my progression and book reading as I go through the year. ',
		github: 'https://github.com/stevenarellano/ten-takeaways',
		website: 'https://book-summaries.vercel.app/',
		logo: 'https://cdn.discordapp.com/attachments/1088230792754376827/1091347082692010014/steve_2d_illustration_of_book_journaling_app_with_individuals_r_c1a66f58-b866-42e1-9de9-cd178a7e8511.png',
	},
	{
		tools: ['react'],
		title: 'Speed Typing',
		blurp: 'Typing Speed Tester',
		description:
			'This web app helps individuals increase their typing speed by providing a variety of levels and training for an individual todo',
		github: 'https://github.com/stevenarellano/speed-typing',
		website: 'https://stevenarellano.github.io/speed-typing/',
		logo: 'https://cdn.discordapp.com/attachments/1088230792754376827/1091346945777348688/steve_2d_illustration_of_a_typing_environment_that_teaches_you__54164222-30bd-4933-bfc4-de2ccab64f4d.png',
	},
	{
		tools: ['react', 'chakraUI'],
		title: 'Terra Finder Clone',
		blurp: 'Blockchain querying application',
		description:
			'A clone of the popular (or not so much so anymore) terra finder',
		github: 'https://github.com/stevenarellano/terra-finder',
		website: 'https://terra-finder-clone.vercel.app/',
		logo: 'https://cdn.discordapp.com/attachments/1088230792754376827/1091347128590278696/steve_2d_illustration_of_an_app_that_uses_the_terra_blockchain__cdce9331-e743-4823-a570-4a2b3b5f54a0.png',
	},
];

export default PROJECT_DATA;
