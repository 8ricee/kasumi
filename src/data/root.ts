// data/root.ts
import {
  Facebook,
  Github,
  Inbox,
  Instagram,
  Mail,
  MoveRight,
  PhoneCall,
} from "lucide-react";
import type {
  ButtonRoot,
  DialogSubscribe,
  HeroContent,
  SocialLink,
} from "@/types/root";

export const SocialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/KasumiCenter/",
    icon: Facebook,
    variant: "neon",
    title: "Facebook",
  },
  {
    href: "https://www.instagram.com/bluw913/",
    icon: Instagram,
    variant: "outline",
    title: "Instagram",
  },
  {
    href: "https://github.com/bluw913",
    icon: Github,
    variant: "neon",
    title: "GitHub",
  },
  {
    href: "https://mail.google.com",
    icon: Inbox,
    variant: "outline",
    title: "Inbox",
  },
  {
    href: "mailto:someone@example.com",
    icon: Mail,
    variant: "neon",
    title: "Email",
  },
];

export const HeroContents: HeroContent = {
  title: "Kasumi Language",
  description:
    "With modern teaching methods and a focus on practical communication skills",
  dynamicTitles: ["amazing", "new", "wonderful", "beautiful", "good", "greet"],
};

export const DialogSubscribes: DialogSubscribe = {
  icon: "/favicon/light.svg",
  badge: "Learning Now",
  title: "Never miss an update",
  description: "Subscribe to receive news and special offers.",
  emailPlaceholder: "Hi@bluw.com",
};

export const ButtonRoots: ButtonRoot[] = [
  {
    label: "Jump on a call",
    href: "tel:000000",
    icon: PhoneCall,
    variant: "outline",
  },
  {
    label: "About Center",
    href: "/home",
    icon: MoveRight,
    variant: "color",
  },
];
