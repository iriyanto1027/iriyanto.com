"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  MapPin,
  MessageSquare,
  Github,
  Linkedin,
  Youtube,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "iriyanto1027@gmail.com",
    href: "mailto:iriyanto1027@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karawang, Indonesia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/iriyanto1027" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/iriyanto",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@kodebackstage",
  },
];

const inquiryTypes = [
  { value: "consulting", label: "Consulting & Advisory" },
  { value: "project", label: "Project Collaboration" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "mentorship", label: "Mentorship" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                <MessageSquare className="h-3 w-3 mr-1" />
                Let's Connect
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind, want to collaborate, or just want to say
                hello? I'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Contact Info */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-muted p-3 hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-medium">Available for Work</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I'm currently open to new projects and collaborations.
                      Let's build something great together.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-500" />
                        <h3 className="text-2xl font-bold mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. I'll get back to you
                          within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold mb-6">
                          Send a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="inquiryType">
                                Inquiry Type *
                              </Label>
                              <Select
                                value={formData.inquiryType}
                                onValueChange={(value) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    inquiryType: value,
                                  }))
                                }
                                required
                              >
                                <SelectTrigger
                                  id="inquiryType"
                                  aria-label="Select inquiry type"
                                >
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {inquiryTypes.map((type) => (
                                    <SelectItem
                                      key={type.value}
                                      value={type.value}
                                    >
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">
                                Company (Optional)
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                placeholder="Your company"
                                value={formData.company}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Tell me about your project or inquiry..."
                              rows={6}
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full md:w-auto"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2">⏳</span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "What services do you offer?",
                  a: "I offer full-stack development, consulting, mentorship, and technical advisory services.",
                },
                {
                  q: "What is your typical response time?",
                  a: "I respond to all inquiries within 24-48 hours on business days.",
                },
                {
                  q: "Do you take on freelance projects?",
                  a: "Yes! I'm available for select freelance projects that align with my expertise.",
                },
                {
                  q: "Are you available for speaking engagements?",
                  a: "Absolutely. I speak at conferences, meetups, and corporate events on web development topics.",
                },
              ].map((faq) => (
                <Card key={faq.q}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
