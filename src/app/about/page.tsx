"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  ArrowRight,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { principles, skills, timeline, values } from "@/data/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  Based in Karawang, West Java, Indonesia
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  The Story Behind the Code
                </h1>
                <p className="text-xl text-muted-foreground">
                  A decade of building software, solving problems, and helping
                  developers grow.
                </p>
              </div>
              <div className="relative hidden md:block">
                <div className="relative w-72 h-72 mx-auto">
                  <Image
                    src="/images/iriyanto-profile.avif"
                    alt="Iriyanto"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold mb-8">My Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into backend engineering truly began during my
                university years, when I discovered how powerful well-designed
                systems can be in solving real-world problems. What started as
                simple curiosity about how applications work behind the scenes
                eventually grew into a deep passion for architecture,
                scalability, and building software that businesses can rely on.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since then, I've had the opportunity to work across diverse
                domains:E-Commerce, HR Tech, Logistics, Manufacturing, and
                Academia. Each project has pushed me to think beyond just
                writing code: to understand business processes, design scalable
                architectures, and collaborate with teams to deliver solutions
                that actually matter. Over the years, I've delivered more than
                10+ successful software projects, from real-time OEE systems and
                multi-tenant SaaS platforms to HR management backends and
                academic information systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In my role as a Senior Backend Engineer and technical lead, I've
                grown to appreciate the balance between technical excellence and
                team collaboration. I've led backend architecture design,
                defined API standards, mentored developers, and helped improve
                engineering workflows through best practices, automation, and
                clean architecture principles. I've also developed internal
                starter kits and coding guidelines that improved consistency and
                accelerated development across teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I focus on three things: designing scalable backend
                systems for businesses, driving technical excellence within
                engineering teams, and continuously learning new tools and
                patterns that elevate developer productivity. I believe that
                great software is built not just through strong engineering
                skills, but through empathy, collaboration, and a deep
                understanding of the problems we're trying to solve.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of work, I enjoy staying curious, exploring new
                technologies, sharing knowledge, and finding inspiration in
                everyday life. I'm a strong believer in balance: taking time to
                recharge, reflect, and return with fresh creativity and energy.
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-20 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Career Timeline
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-20">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-5 h-5 rounded-full border-4 border-background ${
                          item.type === "education"
                            ? "bg-chart-2"
                            : "bg-primary"
                        }`}
                      />

                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <Badge variant="outline" className="font-mono">
                              <Calendar className="h-3 w-3 mr-1" />
                              {item.year}
                            </Badge>
                            {item.type === "education" ? (
                              <GraduationCap className="h-4 w-4 text-chart-2" />
                            ) : (
                              <Briefcase className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-1">
                            {item.title}{" "}
                            {item.type === "work" ? `- ${item.workType}` : ""}
                          </h3>
                          <p className="text-sm text-primary flex items-center gap-1 mb-3">
                            <Building className="h-3 w-3" />
                            {item.company} - {item.location}
                          </p>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                          {(item.responsibilities || item.achievements) && (
                            <div className="mt-4 space-y-4">
                              {item.responsibilities && (
                                <div>
                                  <h4 className="font-semibold mb-2">
                                    Responsibilities:
                                  </h4>
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {item.responsibilities.map(
                                      (resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                              {item.achievements && (
                                <div>
                                  <h4 className="font-semibold mb-2">
                                    Key Achievements:
                                  </h4>
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {item.achievements.map(
                                      (achv, achvIndex) => (
                                        <li key={achvIndex}>{achv}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Engineering Principles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The guiding principles that shape how I approach software
                development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle) => (
                <Card
                  key={principle.title}
                  className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Values */}
        <section className="py-20 border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What I Value</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Core values that drive everything I do.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex rounded-full bg-primary/10 p-4 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I'm always excited to take on new challenges and collaborate with
              passionate people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
