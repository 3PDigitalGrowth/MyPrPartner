import {
  AlertTriangle,
  BookOpen,
  Clipboard,
  Compass,
  Eye,
  MessageSquare,
  Phone,
  Radio,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LeadMagnetConfig } from "@/components/lead-magnet/types";

export const crisisChecklistConfig: LeadMagnetConfig = {
  slug: "crisis-checklist",
  resourceLabel: "Crisis Readiness Checklist",
  downloadHref: "/downloads/crisis-checklist.pdf",
  downloadFilename: "My-PR-Partner-Crisis-Readiness-Checklist.pdf",

  hero: {
    eyebrow: "Free download",
    eyebrowIcon: ShieldCheck,
    title: "The Crisis Readiness Checklist used by",
    titleHighlight: "senior advisers before a crisis hits.",
    subhead:
      "A 10-point self-assessment senior CRC Public Relations advisers run with clients in their first meeting. Score your organisation in 10 minutes - before someone else scores it for you.",
    trustBadges: [
      "10 questions, 10 minutes",
      "Instant PDF download",
      "No credit card required",
    ],
    backgroundImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  },

  stepsSection: {
    eyebrow: "Inside the checklist",
    title: "Ten questions that reveal how ready you really are.",
    subhead:
      "Each checkpoint is a question we've asked boards, CEOs and crisis teams in live engagements. Answer honestly, and you'll walk away with a clear picture of your gaps - and a short list of what to fix first.",
    steps: [
      {
        title: "01. The 3am call",
        teaser:
          "Who picks up the phone when something breaks at 3am - and does every person who might need to call them know the number? The answer is almost never as clear as people think.",
        icon: Phone,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "02. First-hour playbook",
        teaser:
          "Do you have a documented, signed-off process for the first 60 minutes? Not a 40-page manual nobody reads - a one-pager your leadership team could run in their sleep.",
        icon: Clipboard,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "03. Scenario map",
        teaser:
          "Have you actually written down the 6 to 8 scenarios most likely to hit your organisation - and the communications implications of each? If not, you're responding live to strangers' questions.",
        icon: AlertTriangle,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "04. Spokesperson bench",
        teaser:
          "Who is media trained, right now, today? And who is the backup if the primary spokesperson is on leave, conflicted or part of the story?",
        icon: Users,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "05. Stakeholder map",
        teaser:
          "Do you know the exact order people need to hear about a crisis - staff, board, regulator, customers, media - and do you have current contact details for each?",
        icon: Compass,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "06. Holding statement",
        teaser:
          "Can you publish a factual, appropriate holding statement within 30 minutes? A blank page at that moment is a serious liability.",
        icon: MessageSquare,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        title: "07. Monitoring",
        teaser:
          "Would you know in the first 30 minutes if something was being posted about your organisation? What's watching for you right now - and who reviews what it catches?",
        icon: Eye,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "08. Channel control",
        teaser:
          "If your website, social, or email was the wrong channel to publish on, do you have alternatives? Crises rarely happen through the channels you've planned for.",
        icon: Radio,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "09. Rehearsal",
        teaser:
          "When did your leadership team last run a live crisis simulation with an external facilitator? If the answer is 'never' or 'years ago', that's your biggest gap.",
        icon: Shield,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "10. After-action capacity",
        teaser:
          "Who leads the review after a crisis ends - and does the learning actually land into policy, training and the next scenario map? Most organisations miss the single most valuable step.",
        icon: Clipboard,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
    ],
  },

  authority: {
    eyebrow: "Why trust this checklist",
    title: "Built from real engagements, not theory.",
    body: "The checkpoints in this checklist are the same questions senior CRC Public Relations advisers ask when they sit down with a new client. They're drawn from more than 25 years of real crisis work - ASX-listed boards, federal and state government, peak bodies, schools, faith-based organisations, and Pacific governments and NGOs.",
    bullets: [
      "Built from 25+ years of live crisis engagements, not a textbook",
      "Scored the same way CRC Public Relations scores new client assessments",
      "Covers the full arc - prevention, first-hour, sustained incident, recovery",
      "Designed for leaders to complete in under 10 minutes",
    ],
    stats: [
      { value: "25+", label: "Years of senior crisis advisory practice" },
      { value: "10", label: "Checkpoints, scored honestly in 10 minutes" },
      { value: "500+", label: "Communications professionals trained" },
      { value: "100%", label: "CRC Public Relations client satisfaction rating" },
    ],
  },

  testimonial: {
    quote:
      "We scored ourselves an eight out of ten and felt pretty good - until CRC Public Relations walked us through what each question actually means. We were a four. The checklist is the cheapest risk audit we've ever done.",
    name: "CEO, national peak body",
    title: "CRC Public Relations engagement, 2024",
  },

  crossSells: {
    eyebrow: "Found gaps? Here's the fix.",
    title: "From checklist to capability.",
    subhead:
      "The checklist tells you where you are. These programs move your organisation to where you need to be - each one led by senior practitioners, not account managers.",
    cards: [
      {
        href: "/crisis-masterclass",
        icon: Shield,
        eyebrow: "Built for this",
        title: "Crisis Masterclass",
        body: "Australia's premier crisis communications program - the full training for leaders whose reputation can't afford a bad 48 hours. Built with Melissa Agnes, delivered by senior CRC Public Relations advisers.",
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
    title: "Articles that pair well with the checklist",
    items: [
      {
        href: "/articles",
        eyebrow: "Crisis",
        title: "The first 60 minutes are not about the media",
        body: "Why the first hour of a crisis is about your people, not the press - and the simple sequence senior advisers walk leadership teams through before a single statement goes out.",
        readTime: "6 min read",
      },
      {
        href: "/articles",
        eyebrow: "Boardroom",
        title: "Five questions boards should ask after a crisis",
        body: "A short set of board-level questions that turn a crisis into a genuine improvement exercise - rather than a file that gets quietly closed.",
        readTime: "5 min read",
      },
      {
        href: "/articles",
        eyebrow: "Simulation",
        title: "Why most crisis simulations fail",
        body: "A practical breakdown of what makes a crisis simulation actually useful - and the classic mistakes that produce a comfortable rehearsal with no learning.",
        readTime: "8 min read",
      },
    ],
  },

  contactCta: {
    eyebrow: "Active or sensitive matter",
    title: "Something already in play?",
    body: "If your organisation is facing an active or sensitive situation right now, don't wait on a PDF. A senior adviser will review the matter in confidence and recommend the fastest sensible next step - with no obligation.",
  },

  meta: {
    title: "Free Crisis Readiness Checklist - My PR Partner",
    description:
      "The same 10-point crisis readiness assessment senior CRC Public Relations advisers run with new clients - now a free download. Instant PDF, no credit card, no follow-up calls.",
    canonical: "https://myprpartner.com/resources/crisis-checklist",
    ogImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  },
};
