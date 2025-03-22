import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  href: string;
  icon: ComponentType<{ className?: string }>;
  variant:
    | "link"
    | "color"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "neon";
  title: string;
};

export type HeroContent = {
  title: string;
  description: string;
  dynamicTitles: string[];
};

export type DialogSubscribe = {
  icon: string;
  badge: string;
  title: string;
  description: string;
  emailPlaceholder: string;
};

export type ButtonRoot = {
  label: string;
  href: string;
  icon: LucideIcon;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "color"
    | "neon";
};
