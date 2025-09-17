export interface BlogPost {
	title: string;
	description: string;
	date: string;
	readTime: string;
	image?: string;
	category: string;
	slug?: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: 'The Art of Clean Code: Lessons from Medieval Craftsmanship',
		description:
			'Exploring how the principles of medieval craftsmanship apply to modern software development.',
		date: '2024-12-15',
		readTime: '8 min read',
		image: 'https://picsum.photos/300/200?random=1',
		category: 'Craftsmanship',
		slug: 'art-of-clean-code-medieval-craftsmanship'
	},
	{
		title: 'Building Scalable APIs: The Fortress Architecture',
		description:
			'Designing robust APIs that can withstand the test of time, like medieval fortresses.',
		date: '2024-12-10',
		readTime: '12 min read',
		image: 'https://picsum.photos/300/200?random=2',
		category: 'Architecture',
		slug: 'scalable-apis-fortress-architecture'
	},
	{
		title: 'TypeScript Mastery: Forging Type-Safe Applications',
		description: 'Master the art of TypeScript like a blacksmith masters the forge.',
		date: '2024-12-05',
		readTime: '15 min read',
		image: 'https://picsum.photos/300/200?random=3',
		category: 'TypeScript',
		slug: 'typescript-mastery-forging-type-safe-applications'
	}
];
