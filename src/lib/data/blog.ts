export interface BlogPost {
	title: string;
	description: string;
	date: string;
	readTime: string;
	category: string;
	image?: string;
	url?: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: 'Why I Started Writing a Blog as a Software Engineer',
		description:
			"Hi, my name is Iriyanto, and I've been working as a Software Engineer for about five years now. My primary focus is on Backend Web Development, but...",
		date: '2025-08-13',
		readTime: '1 min read',
		image:
			'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/gWjJsIGNnbY/upload/5095df5102009fbd79d2b1ff553d74d2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		category: 'Dev Journey',
		url: 'https://blog.iriyanto.com/why-i-started-writing-a-blog-as-a-software-engineer'
	},
	{
		title: 'Self Deploy the Latest Version of Signal Server v20250822.0.0',
		description:
			'Introduction Signal has become one of the most trusted messaging platforms in the world, well known for its strong emphasis on privacy and security....',
		date: '2025-08-22',
		readTime: '10 min read',
		image:
			'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/pr5lUMgocTs/upload/0240e029e0f61656c6a834468ab0cf98.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		category: 'Signal Self-Hosting Series',
		url: 'https://blog.iriyanto.com/self-deploy-the-latest-version-of-signal-server-v2025082200'
	},
	{
		title: 'Why I use NestJs for past 5 years',
		description:
			"Introduction It's hard to believe, but I've been using NestJS for almost five years now. My journey started back in college when I was offered a...",
		date: '2025-09-19',
		readTime: '9 min read',
		image:
			'https://cdn.hashnode.com/res/hashnode/image/upload/v1758216899850/6cf608dc-8e8d-47cb-9e1f-468f51097674.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		category: 'NestJS Series',
		url: 'https://blog.iriyanto.com/why-i-started-writing-a-blog-as-a-software-engineer'
	}
];
