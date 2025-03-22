import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import type { ContactInfo, FooterLink, NavigationItem, SocialLink } from "@/types/shell";

export const NavigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Product",
    description: "Managing a small business today is already tough.",
    items: [
      { title: "Reports", href: "/reports" },
      { title: "Statistics", href: "/statistics" },
      { title: "Dashboards", href: "/dashboards" },
      { title: "Recordings", href: "/recordings" },
    ],
  },
  {
    title: "Company",
    description: "Managing a small business today is already tough.",
    items: [
      { title: "About us", href: "/about" },
      { title: "Fundraising", href: "/fundraising" },
      { title: "Investors", href: "/investors" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];

export const FooterQuickLinks: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const FooterLegalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Settings" },
];

export const FooterSocialLinks: SocialLink[] = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: Facebook,
    tooltip: "Follow us on Facebook",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: Twitter,
    tooltip: "Follow us on Twitter",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: Instagram,
    tooltip: "Follow us on Instagram",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    tooltip: "Connect with us on LinkedIn",
  },
];

export const FooterContact: ContactInfo = {
  addressLine1: "123 Innovation Street",
  addressLine2: "Tech City, TC 12345",
  phone: "(123) 456-7890",
  email: "hello@kasumi.com",
};