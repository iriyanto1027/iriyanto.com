"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  stars?: number;
  status?: "active" | "maintained" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  stars,
  status = "active",
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const statusColors = {
    active: "bg-green-500/10 text-green-600 dark:text-green-400",
    maintained: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    archived: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  };

  return (
    <Card
      className={`group transition-all duration-300 hover:shadow-lg hover:border-primary/50 ${
        featured ? "border-primary/30 bg-primary/5" : ""
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge variant="secondary" className={statusColors[status]}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex items-center gap-4">
          {stars !== undefined && (
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {stars.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository (opens in new tab)"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project (opens in new tab)"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
