export type EducationInfo = {
	institution: string;
	program: string;
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
		program: 'Computer Science',
		degree: 'MS in Computer Science',
		location: 'Chicago, IL',
		relevantCourses: [
			'Operating Systems',
			'Math Foundations for ML',
			'Time Series Analysis',
			'Data Intensive Computer Systems',
			'Algorithmic Game Theory',
		],
		GPA: '3.53',
		when: 'Expected 2025',
	},
	{
		institution: 'The University of Chicago',
		program:
			'Computer Science and Economics with a Specialization in Business',
		degree: 'BA in Computer Science and BA in Economics',
		location: 'Chicago, IL',
		relevantCourses: [
			'Operating Systems',
			'Math Foundations for ML',
			'Time Series Analysis',
			'Data Intensive Computer Systems (PhD)',
			'Algorithmic Game Theory (PhD)',
		],
		GPA: '3.53',
		when: 'Expected 2025',
	},
];

export default EDUCATION;
