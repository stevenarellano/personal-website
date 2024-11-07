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
		degree: '(Joint) MS in Computer Science',
		location: 'Chicago, IL',
		relevantCourses: ['Time Series Analysis and Stochastic Processes'],
		GPA: '3.53',
		when: 'Expected 2025',
	},
	{
		institution: 'The University of Chicago',
		degree: 'BA in Computer Science and BA in Economics Spec. Business',
		location: 'Chicago, IL',
		relevantCourses: [
			'Operating Systems',
			'Math Foundations for ML',
			'Data Intensive Computer Systems (PhD)',
			'Algorithmic Game Theory (PhD)',
		],
		GPA: '3.53',
		when: 'Expected 2025',
	},
];

export default EDUCATION;
