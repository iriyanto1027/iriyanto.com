"use client";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { EcosystemCard } from "@/components/EcosystemCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/about";
import {
  blogPosts,
  caseStudies,
  ecosystem,
  openSourceProjects,
  stats,
} from "@/data/home-page";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  MessageSquare,
  Server,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-1">
                  <Zap className="h-3 w-3 mr-1" />
                  Available for new projects
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Iriyanto
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  <span className="text-foreground font-medium">
                    Software Engineer
                  </span>{" "}
                  specializing in scalable APIs, distributed systems, and cloud
                  architecture—with frontend skills to ship complete products
                  end-to-end.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-primary/5">
                    <Server className="h-3 w-3 mr-1" />
                    Backend Specialist
                  </Badge>
                  <Badge variant="outline">API Design</Badge>
                  <Badge variant="outline">Distributed Systems</Badge>
                  <Badge variant="outline">Database Architecture</Badge>
                  <Badge variant="outline">Cloud Infrastructure</Badge>
                  <Badge variant="outline">Full-Stack Capable</Badge>
                  <Badge variant="outline">AI/ML Integration</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-primary/5 blur-3xl" />
                  <Image
                    src="/images/iriyanto-profile.avif"
                    alt="Iriyanto"
                    fill
                    className="object-cover rounded-full border-4 border-background shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Highlights / Stats */}
        <section className="py-16 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deep backend specialization with the frontend capability to
                deliver complete, production-ready products.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystem.map((item, index) => (
                <EcosystemCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Deep dives into some of my most impactful projects and the
                  results achieved.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard
                  key={study.title}
                  title={study.title}
                  description={study.description}
                  image={study.image}
                  category={study.category}
                  metrics={study.metrics}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Writing */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Latest Writing
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Thoughts on software development, industry trends, and lessons
                  learned.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link
                  href="https://blog.iriyanto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.title}
                  className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-20 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Open Source
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Contributing to the developer community through open source
                  projects.
                </p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/iriyanto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {openSourceProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  stars={project.stars}
                  status={project.status}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=600&fit=crop"
                    alt="Iriyanto working"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">5+ Years</p>
                      <p className="text-sm text-muted-foreground">
                        In Tech Industry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                <p className="text-muted-foreground">
                  I'm a backend-focused engineer based in Karawang, Indonesia.
                  My core expertise lies in designing and building scalable
                  backend systems—APIs, databases, distributed architectures,
                  and cloud infrastructure—with a growing focus on AI/ML
                  integration to power intelligent, modern applications.
                </p>
                <p className="text-muted-foreground">
                  While backend is my foundation, I've developed strong frontend
                  capabilities to deliver complete products independently. This
                  end-to-end skill set allows me to architect systems
                  holistically and ship polished solutions without handoffs.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Core Backend Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground mt-4">
                    Cloud & DevOps
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground mt-4">
                    AI/ML Integration
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.ai.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground mt-4">
                    Frontend Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild>
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-linear-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities and interesting ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:iriyanto1027@gmail.com">
                  iriyanto1027@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
