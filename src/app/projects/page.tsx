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
import {
  allProjects,
  categories,
  featuredProjects,
  technologies,
} from "@/data/project";

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
            {featuredProjects.length === 0 && (
              <p className="text-center text-muted-foreground">
                No featured projects available at the moment. Please check back
                later.
              </p>
            )}
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
