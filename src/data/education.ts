export type EducationInfo = {
	institution: string;
	logo?: string;
	degree: string;
	location: string;
	relevantCourses: string[];
	GPA?: string;
	when: string;
};

export const EDUCATION: EducationInfo[] = [
	{
		institution: 'The University of Chicago',
		degree: 'BA in Computer Science and BA in Economics Spec. Business, (Joint) MS in Computer Science',
		location: 'Chicago, IL',
		relevantCourses: [
			'High Performance Computing',
			'Operating Systems',
			'Math Foundations for ML',
			'Compilers',
			'Time Series Analysis and Stochastic Processes',
			'Advanced C++',
			'Advanced Computer Architecture',
			'Advanced Algorithms',
			'Honors Introduction to Complexity Theory',
			'Functional Programming',
			'Data Intensive Computer Systems (PhD)',
			'Algorithmic Game Theory (PhD)',
		],
		GPA: '3.53',
		when: 'June 2025',
	},
];

export default EDUCATION;
