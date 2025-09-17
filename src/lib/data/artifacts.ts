export interface ArtifactProject {
	title: string;
	description: string;
	image?: string;
	technologies: string[];
	features: string[];
	demoUrl: string;
	githubUrl: string;
	status: 'Live' | 'Beta' | 'Development';
	icon: string;
}

export const artifactProjects: ArtifactProject[] = [
	{
		title: "Dragon's Hoard - E-commerce Platform",
		description:
			'A mystical marketplace where merchants can showcase their wares with the power of modern web technologies.',
		image: 'https://picsum.photos/400/250?random=10',
		technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
		features: ['Real-time inventory', 'Secure payments', 'Admin dashboard'],
		demoUrl: '#',
		githubUrl: '#',
		status: 'Live',
		icon: 'Shield'
	},
	{
		title: 'Rune Translator - AI Language Tool',
		description:
			'An enchanted tool that translates ancient runes into modern languages using the power of artificial intelligence.',
		image: 'https://picsum.photos/400/250?random=11',
		technologies: ['React', 'Python', 'OpenAI', 'FastAPI'],
		features: ['AI-powered translation', 'Image recognition', 'Historical context'],
		demoUrl: '#',
		githubUrl: '#',
		status: 'Beta',
		icon: 'Zap'
	},
	{
		title: 'Guild Manager - Team Collaboration',
		description:
			'A comprehensive system for managing adventuring parties and their quests in the digital realm.',
		image: 'https://picsum.photos/400/250?random=12',
		technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
		features: ['Real-time chat', 'Task management', 'Progress tracking'],
		demoUrl: '#',
		githubUrl: '#',
		status: 'Development',
		icon: 'Cpu'
	}
];
