"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EcosystemCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  color?: string;
}

export function EcosystemCard({
  title,
  description,
  icon: Icon,
  href = "#",
  color = "primary",
}: EcosystemCardProps) {
  return (
    <a href={href} className="block">
      <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className={`inline-flex rounded-xl bg-${color}/10 p-3 mb-4`}>
            <Icon className={`h-6 w-6 text-primary`} />
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
