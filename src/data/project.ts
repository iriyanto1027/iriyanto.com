export const featuredProjects: {
  title: string;
  description: string;
  image: string;
  category: string;
  metrics: { label: string; value: string }[];
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
  // {
  //   title: "Healthcare Management System",
  //   description:
  //     "End-to-end healthcare platform connecting patients with providers, featuring telemedicine capabilities.",
  //   image:
  //     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
  //   category: "Healthcare",
  //   metrics: [
  //     { label: "Patients Served", value: "100K+" },
  //     { label: "Appointments", value: "1M+" },
  //   ],
  // },
];

export const allProjects: {
  title: string;
  description: string;
  tags: string[];
  stars?: number;
  status: "active" | "maintained" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}[] = [
  // {
  //   title: "ReactFlow Pro",
  //   description:
  //     "A powerful library for building node-based editors and interactive diagrams in React.",
  //   tags: ["React", "TypeScript", "Canvas"],
  //   stars: 4200,
  //   status: "active" as const,
  //   githubUrl: "https://github.com/iriyanto/reactflow-pro",
  //   liveUrl: "https://reactflow-pro.dev",
  //   category: "open-source",
  //   featured: true,
  // },
  // {
  //   title: "API Gateway Kit",
  //   description:
  //     "Lightweight, extensible API gateway with built-in rate limiting and authentication.",
  //   tags: ["Node.js", "Express", "Redis"],
  //   stars: 2800,
  //   status: "active" as const,
  //   githubUrl: "https://github.com/iriyanto/api-gateway-kit",
  //   category: "open-source",
  //   featured: true,
  // },
  // {
  //   title: "DevOps Toolkit",
  //   description:
  //     "Collection of scripts and templates for automating common DevOps tasks.",
  //   tags: ["Shell", "Docker", "Kubernetes"],
  //   stars: 1500,
  //   status: "maintained" as const,
  //   githubUrl: "https://github.com/iriyanto/devops-toolkit",
  //   category: "open-source",
  // },
  // {
  //   title: "NextAuth Starter",
  //   description:
  //     "Production-ready authentication boilerplate for Next.js applications.",
  //   tags: ["Next.js", "Auth", "Prisma"],
  //   stars: 980,
  //   status: "active" as const,
  //   githubUrl: "https://github.com/iriyanto/nextauth-starter",
  //   category: "open-source",
  // },
  // {
  //   title: "React Query Hooks",
  //   description:
  //     "Custom hooks collection for React Query with TypeScript support.",
  //   tags: ["React", "TypeScript", "React Query"],
  //   stars: 750,
  //   status: "active" as const,
  //   githubUrl: "https://github.com/iriyanto/react-query-hooks",
  //   category: "open-source",
  // },
  // {
  //   title: "Tailwind Components",
  //   description: "Beautiful, accessible UI components built with Tailwind CSS.",
  //   tags: ["Tailwind CSS", "React", "Accessibility"],
  //   stars: 620,
  //   status: "maintained" as const,
  //   githubUrl: "https://github.com/iriyanto/tailwind-components",
  //   liveUrl: "https://tailwind-components.dev",
  //   category: "open-source",
  // },
  // {
  //   title: "GraphQL Codegen Templates",
  //   description: "Custom templates for GraphQL Code Generator.",
  //   tags: ["GraphQL", "TypeScript", "Codegen"],
  //   stars: 420,
  //   status: "maintained" as const,
  //   githubUrl: "https://github.com/iriyanto/graphql-templates",
  //   category: "open-source",
  // },
  // {
  //   title: "VS Code Theme - Midnight",
  //   description: "A beautiful dark theme for Visual Studio Code.",
  //   tags: ["VS Code", "Theme"],
  //   stars: 350,
  //   status: "active" as const,
  //   githubUrl: "https://github.com/iriyanto/vscode-midnight",
  //   category: "open-source",
  // },
  // {
  //   title: "CLI Task Manager",
  //   description: "Command-line task management tool with cloud sync.",
  //   tags: ["Go", "CLI", "SQLite"],
  //   stars: 280,
  //   status: "archived" as const,
  //   githubUrl: "https://github.com/iriyanto/cli-tasks",
  //   category: "open-source",
  // },
  // {
  //   title: "Real-time Dashboard",
  //   description:
  //     "Enterprise analytics dashboard with real-time data visualization.",
  //   tags: ["React", "D3.js", "WebSocket"],
  //   status: "active" as const,
  //   liveUrl: "https://dashboard-demo.iriyanto.dev",
  //   category: "client",
  // },
  // {
  //   title: "SaaS Billing System",
  //   description: "Complete billing and subscription management system.",
  //   tags: ["Node.js", "Stripe", "PostgreSQL"],
  //   status: "active" as const,
  //   category: "client",
  // },
  // {
  //   title: "Content Management System",
  //   description:
  //     "Headless CMS with multi-tenant support and REST/GraphQL APIs.",
  //   tags: ["Next.js", "Prisma", "GraphQL"],
  //   status: "maintained" as const,
  //   category: "client",
  // },
];

export const categories: { value: string; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "open-source", label: "Open Source" },
  { value: "client", label: "Client Work" },
];

export const technologies: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Python",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
];
