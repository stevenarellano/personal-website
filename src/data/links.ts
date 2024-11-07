export type LinkInfo = {
	name: string;
	link: string;
	target: string;
	rel: string;
};

export const LINKS: LinkInfo[] = [
	{
		name: 'github',
		link: 'https://github.com/stevenarellano',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/stevenjarellano/',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		name: 'resume',
		link: 'assets/resume.pdf',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		name: 'mail',
		link: 'mailto:stevenjarellano2@gmail.com',
		target: '_self',
		rel: '',
	},
];

export default LINKS;
