import {
  Briefcase,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  LucideIcon,
  Server,
  Terminal,
} from "lucide-react";

export const stats: {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    value: "5+",
    label: "Years Experience",
    icon: Briefcase,
    description: "Building software solutions",
  },
  {
    value: "20+",
    label: "Projects Delivered",
    icon: Code2,
    description: "For startups & enterprises",
  },
  // {
  //   value: "15K+",
  //   label: "GitHub Stars",
  //   icon: Star,
  //   description: "Across open source projects",
  // },
  // {
  //   value: "100K+",
  //   label: "Developers Reached",
  //   icon: Users,
  //   description: "Through courses & content",
  // },
];

export const ecosystem: {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs built for scale and reliability",
    icon: Layers,
    href: "/projects",
  },
  {
    title: "Database Architecture",
    description: "Efficient data modeling with SQL and NoSQL databases",
    icon: Database,
    href: "/projects",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable systems on AWS, GCP, and Azure",
    icon: Cloud,
    href: "/projects",
  },
  {
    title: "System Design",
    description: "Distributed systems and microservices architecture",
    icon: Server,
    href: "/projects",
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated pipelines and deployment workflows",
    icon: Terminal,
    href: "/projects",
  },
  {
    title: "Frontend Integration",
    description: "Building complete products with React, Next.js and SvelteKit",
    icon: Globe,
    href: "/projects",
  },
];

export const caseStudies: {
  title: string;
  description: string;
  image: string;
  category: string;
  metrics?: { label: string; value: string }[];
  href?: string;
}[] = [
  // {
  //   title: "E-Commerce Platform Redesign",
  //   description:
  //     "Complete overhaul of a legacy e-commerce system, improving performance by 300% and conversion rates by 45%.",
  //   image:
  //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
  //   category: "E-Commerce",
  //   metrics: [
  //     { label: "Performance Boost", value: "300%" },
  //     { label: "Conversion Rate", value: "+45%" },
  //   ],
  // },
  // {
  //   title: "FinTech Mobile App",
  //   description:
  //     "Built a secure, high-performance mobile banking application serving 500K+ daily active users.",
  //   image:
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
  //   category: "FinTech",
  //   metrics: [
  //     { label: "Daily Users", value: "500K+" },
  //     { label: "Uptime", value: "99.99%" },
  //   ],
  // },
];

export const openSourceProjects: {
  title: string;
  description: string;
  tags: string[];
  stars?: number;
  status?: "active" | "maintained" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}[] = [
  {
    title: "NestJS MVP StarterKit",
    description:
      "A robust and scalable starter kit for building MVPs with NestJS Backend featuring modular architecture, built-in authentication, and API documentation.",
    tags: ["NestJs", "TypeScript", "Prisma", "PostgreSQL"],
    stars: 0,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto1027/nest-mvp-starterkit",
  },
  {
    title: "TERYAK",
    description: "TERYAK — Freedom of Shout. Once shouted, forever echoed.",
    tags: ["Svelte", "SvelteKit", "NeonDB", "PostgreSQL"],
    stars: 1,
    status: "maintained" as const,
    githubUrl: "https://github.com/iriyanto1027/teryak",
    liveUrl: "https://teryak.iriyanto.com",
  },
];

export const blogPosts: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}[] = [
  {
    title: "Why I use NestJs for past 5 years",
    excerpt:
      "Introduction It's hard to believe, but I've been using NestJS for almost five years now. My journey started back in college when I was offered a...",
    date: "Sep 19, 2025",
    readTime: "9 min read",
    category: "Backend",
  },
  {
    title: "Self Deploy the Latest Version of Signal Server v20250822.0.0",
    excerpt:
      "Introduction Signal has become one of the most trusted messaging platforms in the world, well known for its strong emphasis on privacy and security....",
    date: "Aug 22, 2025",
    readTime: "10 min read",
    category: "Signal",
  },
  {
    title: "Why I Started Writing a Blog as a Software Engineer",
    excerpt:
      "Hi, my name is Iriyanto, and I've been working as a Software Engineer for about five years now. My primary focus is on Backend Web Development, but...",
    date: "Aug 13, 2025",
    readTime: "1 min read",
    category: "Personal",
  },
];
