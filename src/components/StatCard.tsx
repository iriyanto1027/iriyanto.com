"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export function StatCard({ value, label, icon: Icon, description }: StatCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-3xl font-bold text-primary">{value}</p>
            <p className="text-sm font-medium text-foreground mt-1">{label}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-2">{description}</p>
            )}
          </div>
          <div className="rounded-full bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
