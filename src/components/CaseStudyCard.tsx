"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  metrics?: { label: string; value: string }[];
  href?: string;
}

export function CaseStudyCard({
  title,
  description,
  image,
  category,
  metrics,
  href = "#",
}: CaseStudyCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-primary/90">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {metrics && (
          <div className="flex gap-6 mb-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Case Study
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
}
