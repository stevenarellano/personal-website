export type TalksAndPapersInfo = {
	title: string;
	description: string;
	type: 'talk' | 'paper';
	location: string;
	link?: string;
};

const TALKS_AND_PAPERS: TalksAndPapersInfo[] = [
	{
		title: 'Shape n’ Swarm: Manipulation-Aware Generative Actuation with Swarm UI and LLMs',
		description:
			'A research paper on swarm manipulation and generative actuation using Swarm UI and LLMs, currently under review for CHI 2025.',
		type: 'paper',
		location: 'CHI 2025',
	},
	{
		title: 'A Primer On Initialization',
		description:
			'A lightning talk on initialization techniques in C++ presented at CppCon 2024.',
		type: 'talk',
		location: 'CppCon 2024',
	},
];

export default TALKS_AND_PAPERS;
