export type TalksAndPapersInfo = {
	title: string;
	description: string;
	type: 'talk' | 'paper';
	location: string;
	link?: string;
};

const TALKS_AND_PAPERS: TalksAndPapersInfo[] = [
	{
		title: 'A Primer On Initialization',
		description:
			'A lightning talk on initialization techniques in C++ presented at CppCon 2024.',
		type: 'talk',
		location: 'CppCon 2024',
	},
];

export default TALKS_AND_PAPERS;
