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
		title: 'NestJS MVP StarterKit',
		description:
			'A robust and scalable starter kit for building MVPs with NestJS Backend featuring modular architecture, built-in authentication, and API documentation.',
		image: 'https://miro.medium.com/v2/resize:fit:1400/0*0YVsCwrWGUScBeQx.jpeg',
		technologies: ['NestJS', 'TypeScript'],
		features: ['Modular architecture', 'Built-in authentication', 'API documentation'],
		demoUrl: '#',
		githubUrl: '#',
		status: 'Development',
		icon: ''
	},
	{
		title: 'SvelteKit MVP StarterKit',
		description:
			'A robust and scalable starter kit for building MVPs with SvelteKit Frontend featuring routing, state management, and responsive design.',
		image: 'https://miro.medium.com/v2/resize:fit:1000/1*wfdrNnLr0mCJDEnRB8qRGA.png',
		technologies: ['SvelteKit', 'Skeleton UI', 'TailwindCSS'],
		features: ['Routing', 'State management', 'Responsive design'],
		demoUrl: '#',
		githubUrl: '#',
		status: 'Development',
		icon: ''
	}
];
