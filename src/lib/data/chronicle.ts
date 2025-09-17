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
		year: '2024',
		title: 'Master Artificer',
		company: 'Digital Forge Inc.',
		location: 'Remote Realm',
		description:
			'Leading a guild of developers in crafting enterprise-level applications using the most powerful modern enchantments.',
		technologies: ['React', 'Next.js', 'TypeScript', 'AWS'],
		icon: 'Sword',
		current: true
	},
	{
		year: '2022',
		title: 'Senior Code Weaver',
		company: 'TechCraft Solutions',
		location: 'Jakarta, Indonesia',
		description:
			'Specialized in weaving complex web applications and mentoring junior apprentices in the ancient arts of programming.',
		technologies: ['Vue.js', 'Node.js', 'Python', 'Docker'],
		icon: 'Shield',
		current: false
	},
	{
		year: '2020',
		title: 'Full-Stack Adventurer',
		company: 'StartupQuest Ltd.',
		location: 'Bandung, Indonesia',
		description:
			'Embarked on numerous quests to build scalable applications from the ground up, mastering both frontend and backend realms.',
		technologies: ['JavaScript', 'PHP', 'MySQL', 'Laravel'],
		icon: 'Zap',
		current: false
	}
];

export const skills: SkillGroup[] = [
	{
		category: 'Frontend Sorcery',
		skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
	},
	{
		category: 'Backend Mastery',
		skills: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB']
	},
	{
		category: 'Cloud Enchantments',
		skills: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD']
	},
	{
		category: 'Tools of Power',
		skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Linux']
	}
];
