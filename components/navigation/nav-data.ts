import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Heart,
  Shield,
  BookOpen,
  Users,
  HandHeart,
  Newspaper,
  FileText,
  ShieldCheck,
} from "lucide-react";

export type ProgramSectorLink = {
  href: string;
  icon: LucideIcon;
  label: string;
  descriptor: string;
};

export const programsBySector: ProgramSectorLink[] = [
  {
    href: "/programs/schools",
    icon: GraduationCap,
    label: "Schools Program",
    descriptor: "For principals, leadership teams and school communications staff",
  },
  {
    href: "/programs/industry-associations",
    icon: Building2,
    label: "Industry & Professional Associations",
    descriptor: "For executive teams, boards and member communications",
  },
  {
    href: "/programs/business",
    icon: Briefcase,
    label: "Business Program",
    descriptor: "For business owners, founders and marketing leads",
  },
  {
    href: "/programs/charity",
    icon: Heart,
    label: "Charity & Not-for-Profit",
    descriptor: "For executive directors, boards and fundraising teams",
  },
];

export const aboutLinks: ProgramSectorLink[] = [
  {
    href: "/about",
    icon: BookOpen,
    label: "Our Story",
    descriptor: "Meet the founders and the CRC PR team behind the platform",
  },
  {
    href: "/about/expert-trainers",
    icon: Users,
    label: "Expert Trainers",
    descriptor: "Meet the 10+ PR specialists who deliver our programs",
  },
  {
    href: "/about/giving-back",
    icon: HandHeart,
    label: "Giving Back",
    descriptor: "The causes we support and our community commitments",
  },
];

export type ResourceLink = ProgramSectorLink & { badges?: "free"[] };

export const resourceLinks: ResourceLink[] = [
  {
    href: "/blog",
    icon: Newspaper,
    label: "Blog",
    descriptor: "Practical PR tips, insights and industry commentary",
  },
  {
    href: "/resources/pr-guide",
    icon: FileText,
    label: "Free 5-Step PR Guide",
    descriptor: "Learn the secrets PR professionals use — no cost, no catch",
    badges: ["free"],
  },
  {
    href: "/resources/crisis-checklist",
    icon: ShieldCheck,
    label: "Crisis Readiness Checklist",
    descriptor: "Evaluate your organisation's crisis preparedness in 10 minutes",
    badges: ["free"],
  },
];

export const crisisMasterclassProgramLink = {
  href: "/crisis-masterclass",
  icon: Shield,
  label: "Crisis Masterclass",
  descriptor: "Australia's premier crisis communications training with Melissa Agnes",
} as const;
