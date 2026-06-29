import {
  AlertTriangle,
  BookOpen,
  Compass,
  Lock,
  MessageSquare,
  Newspaper,
  Share2,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LeadMagnetConfig } from "@/components/lead-magnet/types";

export const crisisChecklistConfig: LeadMagnetConfig = {
  slug: "crisis-checklist",
  resourceLabel: "Crisis Vulnerability Checklist",
  downloadHref: "/downloads/crisis-checklist.pdf",
  downloadFilename: "My-PR-Partner-Crisis-Vulnerability-Checklist.pdf",

  hero: {
    eyebrow: "Free download",
    eyebrowIcon: ShieldCheck,
    title: "The Crisis Vulnerability Checklist that helps",
    titleHighlight: "protect you and avoid a crisis.",
    subhead:
      "A 30-point self-assessment that can help future-proof your organisation against reputational damage. It's not an exhaustive list, but it's a great start to assess your crisis vulnerability.",
    trustBadges: [
      "30 questions, 10 minutes",
      "Instant PDF download",
      "No credit card required",
    ],
    backgroundImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  },

  stepsSection: {
    eyebrow: "Inside the checklist",
    title:
      "30 questions that assess your vulnerability to issues that can lead to a reputational crisis.",
    subhead:
      "Each checkpoint covers areas that we know from experience can expose you to issues that can escalate. Answer honestly, fix the gaps, and you can avoid problems - and you'll be better prepared when issues do arise. Here are some of the key areas the checklist covers.",
    steps: [
      {
        title: "Communication",
        teaser:
          "The way you and your team communicates to those most important to your success is vital to your reputation yet this is rarely addressed or prioritised in many organisations. It matters.",
        icon: MessageSquare,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        title: "Media",
        teaser:
          "What happens when the media comes knocking with questions? Do you team know what to say and who to contact? Are your spokespeople prepared? If not the consequences can be dramatic.",
        icon: Newspaper,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Social media",
        teaser:
          "It's used by almost every organisation and can add great value. But what happens when it goes wrong? We've all seen it happen – a post that backfires, a comment that offends, a personal post that impacts your organisation.",
        icon: Share2,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Crisis readiness",
        teaser:
          "If you fail to plan, you plan to fail. This well known saying hits the mark when it comes to crisis preparedness. Yet many organisations have no plan, no crisis-ready team, and are not ready when an issue escalates.",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "Complaint escalation",
        teaser:
          "Where do your customers, suppliers, donors, supporters and staff go when they can't resolve an issue and are angry? Social media! Maybe even the mainstream media! It should never get to this point and smart organisations prioritise this.",
        icon: AlertTriangle,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Staff policies",
        teaser:
          "Most crises that damage reputation start from within the organisation, not externally. Your employees are your most important stakeholder, and without the right procedures, communication, policies and values, it can – and does – get ugly.",
        icon: Users,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "Data security",
        teaser:
          "Every day businesses and organisations – small and large – are being targeted by cyber-attacks, scams and social engineering. Thinking it won't happen to you is naïve, and planning for it is essential.",
        icon: Lock,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
    ],
  },

  authority: {
    eyebrow: "Why trust this checklist",
    title: "Built from real engagements, not theory.",
    body: "Each checkpoint covers areas that we know from experience can expose you to issues that can escalate. Answer honestly, fix the gaps, and you can avoid problems. You'll also be better prepared when issues arise. Here are some key areas the checklist covers.",
    bullets: [
      "Built from 15+ years of live crisis engagements, not a textbook",
      "Based on vulnerabilities within many companies and not-for-profits",
      "Hits many of the main areas that lead to reputational damage",
      "Designed for leaders to complete in under 10 minutes",
    ],
  },


  crossSells: {
    eyebrow: "Found gaps? Here's the fix.",
    title: "From checklist to capability.",
    subhead:
      "The checklist tells you where you are. These programs move your organisation to where you need to be - each one led by public relations related experts.",
    cards: [
      {
        href: "/crisis-masterclass",
        icon: Shield,
        eyebrow: "Built for this",
        title: "Crisis Masterclass",
        body: "Australia's premier crisis communications program - the full training for leaders whose reputation can't afford a bad 48 hours. Built in partnership with the Crisis Ready Institute.",
        cta: "See the masterclass",
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/programs",
        icon: Compass,
        eyebrow: "Sector programs",
        title: "All programs by sector",
        body: "Full-year programs for Schools, Industry Associations, Business and Charity - each with sector-specific crisis content and a senior-led delivery team.",
        cta: "Browse programs",
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/courses",
        icon: BookOpen,
        eyebrow: "Launching 2026",
        title: "Media training intensive",
        body: "A short, focused course on walking into an interview with a plan - core messages, bridging, the killer question, and what to do when the reporter has already made up their mind.",
        cta: "See the pipeline",
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  articles: {
    eyebrow: "Keep reading",
    title: "Latest insights",
    items: [
      {
        href: "/articles",
        eyebrow: "Latest insights",
        title: "Explore our full library of articles",
        body: "Discover practical advice and expert insights on crisis communication, media relations and reputation management to help protect and enhance your organisation's standing.",
      },
    ],
  },

  contactCta: {
    eyebrow: "Active or sensitive matter",
    title: "Something already in play?",
    body: "If your organisation is facing an active or sensitive situation right now, don't wait on a PDF. A senior adviser will review the matter in confidence and recommend the fastest sensible next step - with no obligation.",
  },

  meta: {
    title: "Free Crisis Vulnerability Checklist - My PR Partner",
    description:
      "A 30-point self-assessment that helps you spot the gaps that can lead to a reputational crisis - now a free download. Instant PDF, no credit card.",
    canonical: "https://myprpartner.com/resources/crisis-checklist",
    ogImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  },
};
