export type Experience = {
	company: string;
	role: string;
	location: string;
	start: string;
	end: string;
	responsibilities: string[];
	backgroundColor: string;
	logo: string;
};

export const experienceData: Experience[] = [
	{
		company: "Passport Labs",
		role: "Software Engineer",
		location: "San Francisco",
		start: "March 2022",
		end: "Present",
		responsibilities: [
			"Developed the Falcon Wallet chrome extension and mobile app used by 1000+ users using React, React Native, and Tailwind UI",
			"Implemented COSMOs mnemonic wallet connection and creation for the Falcon Wallet mobile app using CosmosSDK",
			"Promoted and built the integration of  hardware wallet HID connectivity for the Falcon Wallet chrome extension",
			"Implemented and managed the state for accounts, wallets, and chains using the Recoil library",
		],
		backgroundColor: "#893440",
		logo: "experiences/falcon-wallet.png",
	},
	{
		company: "ChicagoDAO",
		role: "Software Engineer & Director of Curriculum",
		location: "Chicago, IL",
		start: "March 2022",
		end: "Present",
		responsibilities: [
			"Compiled lists of upcoming events and organized RSO funds to send individuals to different ones",
			"Compete in monthly large-scale hackathons/conferences sponsored by significant influencers in the space",
			"Attend weekly conferences and lectures hosted by the ChicagoDAO team",
			"Participate in a quarter-long ideation project where individuals must create a web3 venture/project",
		],
		backgroundColor: "#F1F1F1",
		logo: "experiences/dao.png",
	},
	{
		company: "Fractal Fantasy",
		role: "Software Engineer",
		location: "San Francisco",
		start: "March 2022",
		end: "Present",
		responsibilities: [
			"Developed the Falcon Wallet chrome extension and mobile app used by 1000+ users using React, React Native, and Tailwind UI",
			"Implemented COSMOs mnemonic wallet connection and creation for the Falcon Wallet mobile app using CosmosSDK",
			"Promoted and built the integration of  hardware wallet HID connectivity for the Falcon Wallet chrome extension",
			"Implemented and managed the state for accounts, wallets, and chains using the Recoil library",
		],
		backgroundColor: "#88C5DB",
		logo: "experiences/fractal-fantasy.jpeg",
	},
	{
		company: "Plasticity Project",
		role: "Fullstack Software Engineer Intern",
		location: "Santa Cruz",
		start: "March 2021",
		end: "May 2021",
		responsibilities: [
			"Spearheaded a 4-man team in the development of an image recognition web app",
			"Implemented front-end landing page using AngularJS and IonicUI components",
			"Built backend components to receive an image and compare it to images in a database using JS libraries",
			"Developed the backend using Node.js and database using MongoDB for the transfer of image data",
		],
		backgroundColor: "#893440",
		logo: "experiences/plasticity.png",
	},
	{
		company: "Harris School of Public Policy",
		role: "Frontend Software Engineer Intern",
		location: "Chicago, IL",
		start: "January 2021",
		end: "March 2021",
		responsibilities: [
			"Created designs from Figma and implemented them into Hubspot CRM for school newsletters.",
			"Developed 20 website and email designs using HTML, CSS, and Javascript.",
			"Created HTML and CSS modules for scalable use for future developers.",
		],
		backgroundColor: "#F1F1F1",
		logo: "experiences/harris.png",
	},
];

export default experienceData;
