"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, GitFork, Code2 } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a legacy e-commerce system, improving performance by 300% and conversion rates by 45%.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    category: "E-Commerce",
    metrics: [
      { label: "Performance Boost", value: "300%" },
      { label: "Conversion Rate", value: "+45%" },
    ],
  },
  {
    title: "FinTech Mobile App",
    description:
      "Built a secure, high-performance mobile banking application serving 500K+ daily active users.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
    category: "FinTech",
    metrics: [
      { label: "Daily Users", value: "500K+" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    title: "Healthcare Management System",
    description:
      "End-to-end healthcare platform connecting patients with providers, featuring telemedicine capabilities.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
    category: "Healthcare",
    metrics: [
      { label: "Patients Served", value: "100K+" },
      { label: "Appointments", value: "1M+" },
    ],
  },
];

const allProjects = [
  {
    title: "ReactFlow Pro",
    description:
      "A powerful library for building node-based editors and interactive diagrams in React.",
    tags: ["React", "TypeScript", "Canvas"],
    stars: 4200,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto/reactflow-pro",
    liveUrl: "https://reactflow-pro.dev",
    category: "open-source",
    featured: true,
  },
  {
    title: "API Gateway Kit",
    description:
      "Lightweight, extensible API gateway with built-in rate limiting and authentication.",
    tags: ["Node.js", "Express", "Redis"],
    stars: 2800,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto/api-gateway-kit",
    category: "open-source",
    featured: true,
  },
  {
    title: "DevOps Toolkit",
    description:
      "Collection of scripts and templates for automating common DevOps tasks.",
    tags: ["Shell", "Docker", "Kubernetes"],
    stars: 1500,
    status: "maintained" as const,
    githubUrl: "https://github.com/iriyanto/devops-toolkit",
    category: "open-source",
  },
  {
    title: "NextAuth Starter",
    description:
      "Production-ready authentication boilerplate for Next.js applications.",
    tags: ["Next.js", "Auth", "Prisma"],
    stars: 980,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto/nextauth-starter",
    category: "open-source",
  },
  {
    title: "React Query Hooks",
    description:
      "Custom hooks collection for React Query with TypeScript support.",
    tags: ["React", "TypeScript", "React Query"],
    stars: 750,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto/react-query-hooks",
    category: "open-source",
  },
  {
    title: "Tailwind Components",
    description: "Beautiful, accessible UI components built with Tailwind CSS.",
    tags: ["Tailwind CSS", "React", "Accessibility"],
    stars: 620,
    status: "maintained" as const,
    githubUrl: "https://github.com/iriyanto/tailwind-components",
    liveUrl: "https://tailwind-components.dev",
    category: "open-source",
  },
  {
    title: "GraphQL Codegen Templates",
    description: "Custom templates for GraphQL Code Generator.",
    tags: ["GraphQL", "TypeScript", "Codegen"],
    stars: 420,
    status: "maintained" as const,
    githubUrl: "https://github.com/iriyanto/graphql-templates",
    category: "open-source",
  },
  {
    title: "VS Code Theme - Midnight",
    description: "A beautiful dark theme for Visual Studio Code.",
    tags: ["VS Code", "Theme"],
    stars: 350,
    status: "active" as const,
    githubUrl: "https://github.com/iriyanto/vscode-midnight",
    category: "open-source",
  },
  {
    title: "CLI Task Manager",
    description: "Command-line task management tool with cloud sync.",
    tags: ["Go", "CLI", "SQLite"],
    stars: 280,
    status: "archived" as const,
    githubUrl: "https://github.com/iriyanto/cli-tasks",
    category: "open-source",
  },
  {
    title: "Real-time Dashboard",
    description:
      "Enterprise analytics dashboard with real-time data visualization.",
    tags: ["React", "D3.js", "WebSocket"],
    status: "active" as const,
    liveUrl: "https://dashboard-demo.iriyanto.dev",
    category: "client",
  },
  {
    title: "SaaS Billing System",
    description: "Complete billing and subscription management system.",
    tags: ["Node.js", "Stripe", "PostgreSQL"],
    status: "active" as const,
    category: "client",
  },
  {
    title: "Content Management System",
    description:
      "Headless CMS with multi-tenant support and REST/GraphQL APIs.",
    tags: ["Next.js", "Prisma", "GraphQL"],
    status: "maintained" as const,
    category: "client",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "open-source", label: "Open Source" },
  { value: "client", label: "Client Work" },
];

const technologies = [
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

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesTech =
      selectedTech.length === 0 ||
      selectedTech.some((tech) => project.tags.includes(tech));
    return matchesSearch && matchesCategory && matchesTech;
  });

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const totalStars = allProjects.reduce((sum, p) => sum + (p.stars || 0), 0);
  const activeProjects = allProjects.filter(
    (p) => p.status === "active"
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto max-w-6xl px-4 py-20 relative">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 px-4 py-1">
                <Code2 className="h-3 w-3 mr-1" />
                {allProjects.length} Projects
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Projects & Portfolio
              </h1>
              <p className="text-xl text-muted-foreground">
                A collection of open source projects, client work, and side
                projects I've built over the years.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">
                    {totalStars.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">GitHub Stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{activeProjects}</span>
                  <span className="text-muted-foreground">Active Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <CaseStudyCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  metrics={project.metrics}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-40">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Tabs
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <TabsList>
                  {categories.map((cat) => (
                    <TabsTrigger key={cat.value} value={cat.value}>
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-muted-foreground mr-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Filter by tech:
              </span>
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
              {selectedTech.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTech([])}
                  className="text-xs"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {allProjects.length}{" "}
                projects
              </p>
            </div>
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    stars={project.stars}
                    status={project.status}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  No projects found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedTech([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
