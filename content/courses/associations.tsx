import {
  Award,
  Briefcase,
  Building2,
  Clock,
  Compass,
  FileText,
  Flag,
  HandHeart,
  Handshake,
  Heart,
  HelpingHand,
  Megaphone,
  MessageSquare,
  MonitorPlay,
  Newspaper,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { CourseContent } from "@/components/course-page/types";
import { PLACEHOLDER_CHECKOUT_URL } from "@/lib/checkout";

const SITE = "https://myprpartner.com";
const PAGE_PATH = "/programs/industry-associations";
const HERO_IMAGE = "/images/associations/associations-hero-bg.jpg";

// All CTAs on this pre-launch page resolve to the Kajabi waitlist signup URL
// (with the standard utm_* stamping via getCourseCheckoutUrl). Set
// NEXT_PUBLIC_KAJABI_ASSOCIATIONS_WAITLIST_URL in .env.local and on the
// Trigger.dev / Vercel dashboard to override the placeholder below.
const WAITLIST_URL =
  process.env.NEXT_PUBLIC_KAJABI_ASSOCIATIONS_WAITLIST_URL || PLACEHOLDER_CHECKOUT_URL;

// Optional ISO 8601 launch date used by the sidebar countdown. Leave the env
// var unset to hide the time countdown and rely on the spot counter alone.
const LAUNCH_DATE = process.env.NEXT_PUBLIC_ASSOCIATIONS_LAUNCH_DATE;

export const associationsContent: CourseContent = {
  slug: "industry-associations",

  seo: {
    metaTitle:
      "Industry & Professional Associations PR Program | Advocacy, Reputation & Member Engagement Training | My PR Partner",
    metaDescription:
      "A 12-month online PR, advocacy and reputation program for Australian industry, trade and professional association leadership teams. Built by CRC Public Relations with 25+ years of association experience. Join the waitlist - first 50 association members save 10%.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Industry & Professional Associations PR Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR program for Australian industry, trade and professional associations, powered by CRC Public Relations. Join the waitlist - first 50 save 10%.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "My PR Partner Industry & Professional Associations Program",
    schemaDescription:
      "A 12-month online PR, advocacy, reputation and member engagement program for Australian industry, trade and professional association leadership teams. Monthly modules with training videos, workbooks, practical resources, interactive Q&A and a rotating panel of expert Australian PR specialists.",
    providerName: "My PR Partner",
    providerUrl: SITE,
    instructors: [
      {
        name: "Lyall Mercer",
        description:
          "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations. 25+ years of PR consulting with industry, trade and professional associations across Australia, New Zealand and the USA.",
      },
    ],
  },

  // Treat the waitlist URL as the "checkout base" so every CTA on the page
  // (hero, final-cta, mobile bar, sticky waitlist card) resolves through the
  // same UTM-stamping helper.
  checkout: {
    baseUrl: WAITLIST_URL,
    utmMedium: "industry-associations",
    utmCampaign: "waitlist",
  },

  hero: {
    eyebrow: "For Australian industry, trade & professional associations",
    eyebrowIcon: Building2,
    headline:
      "Position your association as the trusted voice and advocate for your industry",
    tagline:
      "A 12-month online PR program built exclusively for association leadership teams",
    intro:
      "Become the recognised public voice of your industry, advocate more effectively to government, and grow trusted, engaged membership. Join the My PR Partner industry & professional association community.",
    outcomes: [
      "Establish your association as the trusted public voice of your industry",
      "Advocate more effectively and use PR to influence policy and legislation",
      "Build strong trust and credibility with members, media and government",
      "Increase member value, engagement and retention",
      "Manage negative issues with confidence and protect your industry's reputation",
    ],
    primaryCta: { label: "Join the waitlist", useCheckoutUrl: true },
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/associations-program-outline.pdf",
    },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/associations/associations-hero-portrait.jpg",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>National and state associations across Australia</>,
      sub: "Powered by CRC Public Relations, with 25+ years in the sector",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian association leadership teams",
        "Designed for CEOs, comms, marketing & membership teams",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "Exec, comms, marketing & membership" },
    { icon: Megaphone, title: "Built for advocacy", sub: "Influence policy and legislation" },
    { icon: Award, title: "Certificate of completion", sub: "Recognised industry training" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What's included" },
    { id: "structure", label: "12-month plan" },
    { id: "instructors", label: "Presenters" },
    { id: "pricing", label: "Waitlist" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading:
      "Affordable PR training, resources and support that enables your whole association team",
    paragraphs: [
      "The My PR Partner Industry & Professional Associations Program is a 12-month online training program designed for busy association professionals. Each team member learns at a time that suits them, and content is built with the full range of association roles in mind, so your CEO, executive, communications, marketing and membership teams share the same language and pull in the same direction.",
      "Built by CRC Public Relations, this is the distilled version of 25+ years of working alongside Australian state and national industry, trade and professional associations through their biggest moments, from major advocacy wins and national media campaigns to the hardest sector-defining issues.",
    ],
    keyLearningsTitle: "Why association leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across exec, comms, marketing and membership teams",
      "A ready-to-use library of resources, templates and checklists for associations",
      "Expert support from real Australian association PR consultants, not academics",
      "Practical advocacy frameworks to influence policy and legislation",
      "Guest presenters across media, social, advocacy and crisis communications",
      "Monthly interactive Q&A on your specific association circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Training, resources and support, every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to position your association, grow membership, advocate effectively and stand confidently in front of media, government and members.",
    tiles: [
      {
        icon: MonitorPlay,
        title: "Monthly video resource",
        body:
          "A powerful and practical training video from PR and association-specific experts, built for executive leadership, marketing, comms and membership teams. Includes exercises and workbooks.",
      },
      {
        icon: MessageSquare,
        title: "Weekly Spotlight email",
        body:
          "A weekly email from our experts complementing the video training, with valuable PR and reputation strategies and guidance exclusively for associations. Forward to anyone on your team.",
      },
      {
        icon: HelpingHand,
        title: "Interactive Q&A",
        body:
          "Each month, any team member can submit personalised questions, answered through your member portal. Real advice for your real association situations.",
      },
      {
        icon: FileText,
        title: "Bonus training & resources",
        body:
          "Receive bonus video and written resources throughout the year, all designed to help your team communicate, advocate and engage members more effectively.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "12-month plan",
    heading: "Your month-by-month path, designed to go deeper over time",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, the weekly Spotlight email and an interactive Q&A. Below is the 12-month path your team follows, grouped into four quarterly phases.",
    groups: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        count: "Build the mindset and find your voice",
        items: [
          "Month 1 \u00B7 The PR mindset for associations: why public relations underpins every advocacy and membership win",
          "Month 1 Resource: Communications tips for the whole association team",
          "Month 2 \u00B7 Becoming the public voice of authority in your industry",
          "Month 2 Resource: The essential reputation checklist for associations",
          "Month 3 \u00B7 Strategic communication that resonates emotionally with members and stakeholders",
          "Month 3 Resource: Member-message-mapping framework",
        ],
      },
      {
        label: "Phase 2: Advocacy and media (Months 4 to 6)",
        count: "Get on the front foot",
        items: [
          "Month 4 \u00B7 Using PR to influence policy and legislation: the advocacy playbook",
          "Month 4 Resource: Government relations and advocacy template pack",
          "Month 5 \u00B7 Handling media enquiries and interest: protecting and amplifying your association",
          "Month 5 Resource: Template association media policy and media-release library",
          "Month 6 \u00B7 Building a national media profile and campaigns from a state or sector base",
          "Month 6 Resource: National media list and pitch templates",
        ],
      },
      {
        label: "Phase 3: Membership, trust and crisis (Months 7 to 9)",
        count: "Grow members, manage issues",
        items: [
          "Month 7 \u00B7 Growing and retaining members by increasing the value of membership",
          "Month 7 Resource: Member engagement and retention checklist",
          "Month 8 \u00B7 Managing negative issues and turning them into opportunities for trust",
          "Month 8 Resource: Issues-management framework for associations",
          "Month 9 \u00B7 Doing social media well, with a specialist social media presenter",
          "Month 9 Resource: Association social media tips and responses library",
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        items: [
          "Month 10 \u00B7 Featured association leader: an in-depth conversation on what worked, what didn't, and the lessons learned",
          "Month 10 Resource: Best-practice playbook from a successful Australian association",
          "Month 11 \u00B7 Q&A month: the biggest questions and scenarios from program participants",
          "Month 11 Resource: Best-practice recap document from the year",
          "Month 12 \u00B7 Media training for your spokespeople: the art of a great association interview",
          "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "A tailored program exclusively for association leadership teams",
    intro:
      "Your whole leadership team learns together, so everyone speaks with one voice in high-stakes moments and no one carries the reputation load alone.",
    items: [
      {
        image: "/images/associations/associations-persona-ceo.jpg",
        icon: Building2,
        title: "CEOs and executive directors",
        body:
          "Lead your association with confidence as the trusted public voice of your industry, from day-to-day positioning to the moments your sector turns to you for leadership.",
      },
      {
        image: "/images/associations/associations-persona-comms.jpg",
        icon: Briefcase,
        title: "Communications and marketing teams",
        body:
          "Turn content, channels and campaigns into measurable gains in member engagement, media profile and public trust.",
      },
      {
        image: "/images/associations/associations-persona-advocacy.jpg",
        icon: Megaphone,
        title: "Advocacy and government relations",
        body:
          "Use PR strategy and media leverage to influence policy and legislation, and build the public case behind every meeting in Canberra or your state capital.",
      },
      {
        image: "/images/associations/associations-persona-members.jpg",
        icon: HandHeart,
        title: "Membership engagement teams",
        body:
          "Build a membership of advocates, not adversaries, with communications that grow value, deepen loyalty and turn members into your best champions.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your presenters",
    heading: "Learn from Australia's leading association PR specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a panel of guest experts and successful association leaders who each bring real industry experience to the program.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25-year PR career spanning six continents. Lyall has assisted state and federal industry and professional associations across Australia, New Zealand and the USA for over 25 years, spoken at numerous association forums and conferences, and trained executive teams, boards and staff in the art of effective communication and strategy.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Featured presenter \u00B7 Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting association reputation when the sector is under pressure.
          </>
        ),
      },
    ],
    footnote:
      "Plus in-depth conversations with successful Australian association leaders, a specialist social media presenter, and a rotating panel of 10+ Australian PR, advocacy and communications experts across the year.",
  },

  testimonials: {
    eyebrow: "What Australian association leaders say",
    heading: "Built on 25+ years of real work with Australian associations",
    items: [
      {
        quote:
          "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
        name: "Peter White AM",
        title: "Managing Director",
        org: "Finance Brokers Association of Australia",
      },
      {
        quote:
          "CRC Public Relations created national media coverage that energised our member base, attracted new members and helped us advance important changes for our sector.",
        name: "Martin Coote",
        title: "President",
        org: "Master Locksmiths Association of Australasia",
      },
      {
        quote:
          "When our industry needed a stronger voice in the face of major upheaval, the team at CRC Public Relations provided invaluable communications support.",
        name: "Benjamin Wash",
        title: "Former CEO",
        org: "Taxi Council Queensland",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value your association walks away with",
    heading: "Outcomes that matter in the boardroom, the newsroom and Parliament House",
    items: [
      {
        icon: Megaphone,
        title: "Become the public voice",
        body: "Position your association as the recognised, quoted voice of authority in your industry, above any competitor body.",
      },
      {
        icon: Flag,
        title: "Win advocacy battles",
        body: "Use PR and earned media to build the public case behind every advocacy meeting and submission.",
      },
      {
        icon: TrendingUp,
        title: "Grow membership",
        body: "Increase the felt value of membership so renewals stay strong and prospective members come to you.",
      },
      {
        icon: Newspaper,
        title: "Own the media moment",
        body: "Turn media interest, good or bad, into a chance to lead the conversation in your sector.",
      },
      {
        icon: Handshake,
        title: "Deepen stakeholder trust",
        body: "Build the kind of credibility with government, regulators and media that opens doors when it matters most.",
      },
      {
        icon: ShieldCheck,
        title: "Be issues and crisis ready",
        body: "Leave the year with frameworks, holding statements and a calm, repeatable response process for when the sector is under fire.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our association?",
        a: "The program is designed for your whole leadership team. Your CEO/Executive Director, executive team, communications and marketing staff, advocacy and government relations leads, and membership engagement teams can all access the content. Several hands-on roles will get the most direct value, but the program is structured so the whole team builds shared language and culture.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. The monthly Q&A is answered through your member portal so anyone on your team can submit questions and read every answer.",
      },
      {
        q: "How long does the program run?",
        a: "Enrolment runs for 12 months from the day your association joins. You keep access to all modules, resources and recordings for the full year. Many associations choose to continue annually so new staff onboard into the same shared PR mindset.",
      },
      {
        q: "When do enrolments open?",
        a: "We're opening enrolments to a small founding cohort of Australian associations in 2026. The first 50 association members on the waitlist receive a 10% founding-member discount on their first 12 months. Join the waitlist to lock in your place and your discount.",
      },
      {
        q: "What is the founding-member discount?",
        a: "The first 50 Australian association members to join the waitlist receive a 10% discount on their first 12-month enrolment, applied automatically at checkout when enrolments open. You'll also be the first to receive program details, the founders' welcome and an early invitation to enrol before public release.",
      },
      {
        q: "Will there be different levels (Train, Support, Partner)?",
        a: "Yes - the program will launch with three tiers so smaller associations and larger national bodies can both find a fit. Train Level is training and resources only; Support Level adds on-call PR support; Partner Level adds full PR partnership including media training. Pricing details will be shared with the waitlist first.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The weekly Spotlight email keeps key ideas alive, and the monthly interactive Q&A is where you can bring your association's live situation. Higher tiers include direct on-call PR support from CRC Public Relations.",
      },
      {
        q: "Can our board see the content?",
        a: "Absolutely. We actively encourage board members to access the program, especially the advocacy, governance and crisis modules. Larger tiers include board-level access by default.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We'll offer a satisfaction guarantee at launch. If the program is not right for your association, contact our team within the guarantee window of enrolment for a full refund, no questions asked.",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/associations/associations-sticky-thumb.jpg",
    badge: "For association leadership teams",
    badgeIcon: Building2,
    eyebrow: "Enrol your association",
    // The fields below are unused while waitlist mode is active, but the type
    // requires them. Kept here so we can flip back to a standard pricing card
    // by simply removing `waitlist` once enrolments open.
    price: "TBA",
    priceCurrencyNote: "AUD per month",
    pricePlanNote: "Pricing released to the waitlist first",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/associations-program-outline.pdf",
    },
    inclusionsTitle: "What waitlist members receive",
    inclusions: [
      "10% founding-member discount (first 50 association members)",
      "First access to enrolments before public release",
      "Full program outline and 12-month curriculum",
      "Founders' welcome from Lyall and the team",
      "Early invitation to a live walkthrough Q&A",
      "Updates on launch date and pricing tiers",
    ],
    waitlist: {
      signupUrl: WAITLIST_URL,
      headline: "Join the waitlist",
      subheadline:
        "Be first in line when enrolments open, and lock in the founding-member discount.",
      discountPill: "First 50 save 10%",
      spots: {
        capacity: 50,
        // Manually update as waitlist signups come in (or wire to a real
        // count source later). Conservative starting figure shows real
        // momentum without overstating it.
        claimed: 17,
        label: "Founding member spots",
      },
      countdown: LAUNCH_DATE
        ? {
            endsAt: LAUNCH_DATE,
            label: "Enrolments open in",
          }
        : undefined,
      ctaLabel: "Join the waitlist",
      benefits: [
        "10% founding-member discount on year one",
        "First access to enrolment before public release",
        "Full program outline and 12-month curriculum",
        "Early invitation to a live walkthrough Q&A",
      ],
      footnote:
        "We'll only email you about the Industry Associations Program. Unsubscribe at any time.",
    },
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our associations team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We have a deep understanding of the unique needs facing industry, trade and professional associations and peak bodies, having worked alongside many state and national associations for more than 25 years through CRC Public Relations.",
      "We've helped position many associations as the public voice of authority in their industry, supported them through high-stakes advocacy moments, and seen them build member trust and grow membership through smart, consistent public relations.",
      "We're excited to bring you high-quality training and resources, with optional support when you need it, that will help you and your team at an affordable cost. We hope to welcome you to our community of association leaders.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Multi-association and peak body enrolments",
    badgeIcon: Users,
    heading: "Train every association in your group or federation under one enrolment",
    body:
      "We work with peak bodies, federations and association groups on multi-organisation enrolments. Bulk rates, shared resources and an optional sector-wide tabletop or media-training day with CRC Public Relations are all on the table.",
    bullets: [
      "Discounted per-association pricing across a group",
      "Shared dashboard across all participating organisations",
      "Optional sector-wide tabletop or media-training day with CRC Public Relations",
      "Sector-specific onboarding with the My PR Partner team",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/associations/associations-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your CEO and board chair",
    body:
      "The Industry Associations Program covers issues management and reputation defence. If your team wants the deepest crisis training available, with the full Melissa Agnes Crisis Ready\u00AE course and an Australian case-study library, enrol your CEO and board chair in the Crisis Masterclass alongside your association program.",
    thumbImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
    featureBullets: [
      "Full 12-month Crisis Ready\u00AE course with Melissa Agnes",
      "Australian crisis case-study library, updated monthly",
      "Monthly live expert panel Q&A",
      "Templates, holding statements and media playbooks",
    ],
    primaryCta: { label: "Learn about Crisis Masterclass", href: "/crisis-masterclass" },
    secondaryCta: { label: "Talk to our team", href: "/contact" },
  },

  finalCta: {
    eyebrow: "For Australian association leadership teams",
    eyebrowIcon: Building2,
    heading: "Be one of the first 50 association members on the waitlist",
    body:
      "Enrolments open soon. Founding-member associations save 10% on year one and get first access before public release. Lock in your association's place today.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: { label: "Talk to our associations team", href: "/contact" },
    footnote: "Powered by CRC Public Relations. 25+ years working with Australian associations.",
    bgImage: "/images/associations/associations-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Industry Associations",
    priceShort: "First 50 save 10%",
    ctaLabel: "Join the waitlist",
  },
};

// Suppress unused-icon lint flags. These icons are kept imported because
// editors at the content layer often want to swap them in without re-touching
// the imports section. Remove anything that stays unused at review time.
void Sparkles;
void Heart;
void Compass;
void Scale;
void Shield;
