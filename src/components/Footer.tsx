"use client";

import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/iriyanto1027", icon: SiGithub, label: "GitHub" },
  {
    href: "https://linkedin.com/in/iriyanto",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/@kodebackstage",
    icon: SiYoutube,
    label: "YouTube",
  },
  { href: "mailto:iriyanto1027@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Content",
    links: [
      { href: "https://blog.iriyanto.com", label: "Blog" },
      { href: "https://course.iriyanto.com", label: "Courses" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "https://github.com/iriyanto1027", label: "GitHub" },
      { href: "https://linkedin.com/in/iriyanto", label: "LinkedIn" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              Iriyanto
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building scalable web applications and sharing knowledge through
              open source projects and tutorials.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iriyanto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
