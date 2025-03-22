import type { LucideIcon } from "lucide-react";

export interface SubNavigationItem {
  title: string;
  href: string;
}

export interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: SubNavigationItem[];
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface SocialLink extends FooterLink {
  icon: LucideIcon;
  tooltip: string;
}

export interface ContactInfo {
  addressLine1: string;
  addressLine2?: string;
  phone: string;
  email: string;
}
