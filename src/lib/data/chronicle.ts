export interface TimelineItem {
	year: string;
	title: string;
	company: string;
	location: string;
	description: string;
	technologies: string[];
	icon: string;
	current: boolean;
}

export interface SkillGroup {
	category: string;
	skills: string[];
}

export const timeline: TimelineItem[] = [
	{
		year: 'May 2025 - August 2025',
		title: 'Back End Developer',
		company: 'PGNCOM',
		location: 'Jakarta, Indonesia - Remote',
		description: '',
		technologies: ['Go (Programming Language)', 'GORM', 'Gin', 'PostgreSQL', 'REST APIs'],
		icon: 'clarity:employee-solid',
		current: false
	},
	{
		year: 'January 2025 - July 2025',
		title: 'System Analyst',
		company: 'PT Mundus Virtual Prima',
		location: 'Bandung, Indonesia - Remote',
		description: '',
		technologies: [
			'Software System Analysis',
			'Data Synchronization',
			'Laravel',
			'Microsoft SQL Server',
			'PostgreSQL'
		],
		icon: 'material-symbols:factory',
		current: false
	},
	{
		year: 'February 2025 - April 2025',
		title: 'Software Engineer',
		company: 'PT Svarga Indomulia Mediatama',
		location: 'Jakarta, Indonesia - Remote',
		description: '',
		technologies: [
			'Java',
			'Dropwizard',
			'Micronaut',
			'Amazon Web Services (AWS)',
			'Google Cloud Platform (GCP)'
		],
		icon: 'simple-icons:signal',
		current: false
	},
	{
		year: 'January 2022 - June 2025',
		title: 'Software Engineer',
		company: 'Supernova Palapa Nusantara',
		location: 'Bandung, Indonesia - Hybrid',
		description: '',
		technologies: ['NestJS', 'Spring Boot', 'Laravel', 'MongoDB', 'PostgreSQL'],
		icon: 'file-icons:nestjs',
		current: false
	},
	{
		year: 'April 2020 - March 2025',
		title: 'Back End Developer',
		company: 'Telkom University',
		location: 'Bandung, Indonesia - Hybrid',
		description: '',
		technologies: ['NestJS', 'Laravel', 'Laravel Lumen', 'PostgreSQL', 'REST APIs'],
		icon: 'mdi:laravel',
		current: false
	},
	{
		year: 'May 2019 - December 2019',
		title: 'Full Stack Developer',
		company: 'Telkom University',
		location: 'Bandung, Indonesia - Onsite',
		description: '',
		technologies: [
			'CodeIgniter',
			'Bootstrap (Framework)',
			'MySQL',
			'Full-Stack Development',
			'Web Technologies'
		],
		icon: 'devicon-plain:codeigniter',
		current: false
	},
	{
		year: 'January 2019 - May 2019',
		title: 'Teaching Assistant',
		company: 'Telkom University',
		location: 'Bandung, Indonesia - Onsite',
		description: '',
		technologies: ['Subbing', 'Teacher Mentoring', 'Data Structures', 'Algorithms', 'C++'],
		icon: 'mdi:teacher',
		current: false
	},
	{
		year: 'August 2018 - December 2018',
		title: 'Laboratory Teaching Assistant',
		company: 'Telkom University',
		location: 'Bandung, Indonesia - Onsite',
		description: '',
		technologies: ['Data Structures', 'Algorithms', 'C++', 'Teacher Mentoring'],
		icon: 'hugeicons:mentoring',
		current: false
	}
];

export const skills: SkillGroup[] = [
	{
		category: 'Frontend Sorcery',
		skills: ['SvelteKit', 'TypeScript', 'Tailwind CSS']
	},
	{
		category: 'Backend Mastery',
		skills: ['Typescript', 'Go-lang', 'PHP', 'PostgreSQL', 'MongoDB']
	},
	{
		category: 'Cloud Enchantments',
		skills: ['AWS', 'Docker', 'CI/CD']
	},
	{
		category: 'Tools of Power',
		skills: ['Git', 'VS Code', 'Postman', 'Linux']
	}
];
