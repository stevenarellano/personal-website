export type AwardInfo = {
	issuer: string;
	item: string;
	extra?: string;
	year: number;
	description: string;
	link?: string;
};

export const AWARDS: AwardInfo[] = [
	{
		issuer: 'Solana Grizzlython',
		item: 'University Award',
		extra: '$20,000',
		year: 2023,
		description:
			'Won the University Award for building the best project by students in the Solana Grizzlython hackathon: Digidivers.',
		link: 'https://solana.com/news/solana-grizzlython-winners',
	},
	{
		issuer: 'Solana Sandstorm Hackathon',
		item: '2nd Place of Decentralized Wireless (DeWi) Track',
		extra: '$500',
		link: 'https://x.com/LamportDAO/status/1621789372382351360',
		description:
			'Won second place for building a peer to peer market place that allows users with IoT devices to connect to a LNS (LoRaWAN Network Server) and sell their data to buyers.',
		year: 2023,
	},
	{
		issuer: 'Global Investment Contest',
		item: '3rd Place',
		year: 2020,
		description:
			'Pitched a portfolio of stocks and ETFs focused on sustainable and impact investing, achieving third prize in the 2020 Global Investment Contest.',
		link: 'https://www.linkedin.com/in/global-investment-contest/',
	},
];

export default AWARDS;
