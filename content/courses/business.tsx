import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Clock,
  Compass,
  FileText,
  Handshake,
  HandHeart,
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
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { CourseContent } from "@/components/course-page/types";
import { PLACEHOLDER_CHECKOUT_URL } from "@/lib/checkout";

const SITE = "https://myprpartner.com";
const PAGE_PATH = "/programs/business";
const HERO_IMAGE = "/images/business/business-hero-bg.jpg";

// All CTAs on this pre-launch page resolve to the Kajabi waitlist signup URL
// (with the standard utm_* stamping via getCourseCheckoutUrl). Set
// NEXT_PUBLIC_KAJABI_BUSINESS_WAITLIST_URL in .env.local and on the
// Vercel dashboard to override the placeholder below.
const WAITLIST_URL =
  process.env.NEXT_PUBLIC_KAJABI_BUSINESS_WAITLIST_URL || PLACEHOLDER_CHECKOUT_URL;

// Optional ISO 8601 launch date used by the sidebar countdown. Leave the env
// var unset to hide the time countdown and rely on the spot counter alone.
const LAUNCH_DATE = process.env.NEXT_PUBLIC_BUSINESS_LAUNCH_DATE;

export const businessContent: CourseContent = {
  slug: "business",

  seo: {
    metaTitle:
      "Business PR, Profile & Crisis Communications Program | Build Trust, Grow & Protect Your Reputation | My PR Partner",
    metaDescription:
      "A 12-month online PR, profile, reputation and crisis communications program for Australian business owners, founders and leadership teams. Built by CRC Public Relations with 25+ years of business PR experience. Join the waitlist — first 50 businesses save 10%.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Business PR & Reputation Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR program for Australian business owners and leadership teams, powered by CRC Public Relations. Join the waitlist — first 50 save 10%.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "My PR Partner Business Program",
    schemaDescription:
      "A 12-month online PR, brand profile, reputation and crisis communications program for Australian business owners, founders and leadership teams. Monthly modules with training videos, workbooks, practical resources, interactive Q&A and a rotating panel of expert Australian PR specialists.",
    providerName: "My PR Partner",
    providerUrl: SITE,
    instructors: [
      {
        name: "Lyall Mercer",
        description:
          "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations. 25+ years of PR consulting with businesses across Australia, New Zealand and the USA.",
      },
    ],
  },

  // Treat the waitlist URL as the "checkout base" so every CTA on the page
  // (hero, final-cta, mobile bar, sticky waitlist card) resolves through the
  // same UTM-stamping helper.
  checkout: {
    baseUrl: WAITLIST_URL,
    utmMedium: "business",
    utmCampaign: "waitlist",
  },

  hero: {
    eyebrow: "For Australian business owners, founders & leadership teams",
    eyebrowIcon: Briefcase,
    headline:
      "Build the profile, trust and reputation your business needs to grow, and the skills to protect it",
    tagline:
      "A 12-month online PR program built for busy Australian business owners and their teams",
    intro:
      "Attract new customers, become the recognised voice of authority in your industry, and lead confidently through any issue or crisis. Join the My PR Partner business community.",
    outcomes: [
      "Build a strong business profile that attracts new customers",
      "Become the voice of authority for your industry",
      "Build trust in your brand, team and communications",
      "Develop effective media, communications and social media skills",
      "Manage negative issues and protect your reputation",
      "Master crisis communications to be prepared for any issue",
    ],
    primaryCta: { label: "Join the waitlist", useCheckoutUrl: true },
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/business-program-outline.pdf",
    },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/business/business-hero-portrait.jpg",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>Australian businesses from cafés to national brands</>,
      sub: "Powered by CRC Public Relations, with 25+ years in Australian business PR",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian business owners and leadership teams",
        "Designed for founders, CEOs, marketing, comms & client-facing teams",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "Owner, exec, comms & client teams" },
    { icon: TrendingUp, title: "Growth focused", sub: "Profile, trust and new customers" },
    { icon: Award, title: "Certificate of completion", sub: "Recognised business training" },
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
      "Affordable PR training, resources and support that enables your whole business team",
    paragraphs: [
      "The My PR Partner Business Program is a 12-month online training program designed for busy Australian business owners. Each team member learns at a time that suits them, and content is built with the full range of business roles in mind, so your owners, executive, marketing, communications and client-facing teams share the same language and pull in the same direction.",
      "Built by CRC Public Relations, this is the distilled version of 25+ years of working alongside Australian businesses through their biggest moments, from proud growth stories and national media wins to the hardest moments when their reputation came under pressure.",
      <blockquote
        key="buffett-quote"
        className="mt-2 rounded-xl border-l-4 border-teal bg-[#F7F8FA] px-6 py-5 italic text-text-dark"
      >
        <p className="text-[17px] leading-relaxed md:text-[18px]">
          &ldquo;It takes 20 years to build a reputation and five minutes to ruin it.
          If you think about that, you&rsquo;ll do things differently.&rdquo;
        </p>
        <footer className="mt-3 not-italic text-[13px] font-semibold uppercase tracking-[0.08em] text-text-medium">
          Warren Buffett
        </footer>
      </blockquote>,
    ],
    keyLearningsTitle: "Why business owners choose this program",
    keyLearnings: [
      "A shared PR mindset across owners, exec, marketing and client-facing teams",
      "A ready-to-use library of resources, templates and checklists for business",
      "Expert support from real Australian business PR consultants, not academics",
      "Practical frameworks to grow profile, trust and new customer attraction",
      "Guest presenters across media, social, reputation and crisis communications",
      "Monthly interactive Q&A on your specific business circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Grow, protect, support and expertise — every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to build your business profile, win new customers, communicate confidently with media, and stand firm when your reputation is tested.",
    tiles: [
      {
        icon: TrendingUp,
        title: "Grow",
        body:
          "Learn the keys to PR-driven business growth without huge advertising costs. Build the profile, trust and story that win new customers on repeat.",
      },
      {
        icon: Shield,
        title: "Protect",
        body:
          "Protect your valuable reputation and avoid a crisis that can damage your business. Spot issues early and respond with confidence and control.",
      },
      {
        icon: HelpingHand,
        title: "Support",
        body:
          "Receive ongoing PR support and training without consultancy costs — a real partner in your corner every month, for 12 months, and a team ready when you need them.",
      },
      {
        icon: BadgeCheck,
        title: "Expertise",
        body:
          "Access the expertise of PR and business experts who understand the realities of Australian business and what actually moves the needle for owners and leadership teams.",
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
          "Month 1 \u00B7 The PR mindset for business: why public relations underpins every growth and reputation win",
          "Month 1 Resource: Communications tips for the whole business team",
          "Month 2 \u00B7 Becoming the voice of authority in your industry or market",
          "Month 2 Resource: The essential profile and reputation checklist for business",
          "Month 3 \u00B7 Strategic communication that resonates emotionally with customers and staff",
          "Month 3 Resource: Customer-message-mapping framework",
        ],
      },
      {
        label: "Phase 2: Profile and growth (Months 4 to 6)",
        count: "Get on the front foot",
        items: [
          "Month 4 \u00B7 Using PR to attract new customers: the business growth playbook",
          "Month 4 Resource: PR and content campaign template pack",
          "Month 5 \u00B7 Handling media enquiries and interest: protecting and amplifying your business",
          "Month 5 Resource: Template business media policy and media-release library",
          "Month 6 \u00B7 Building a national or local media profile with a small team",
          "Month 6 Resource: Media list and pitch templates for business",
        ],
      },
      {
        label: "Phase 3: Trust, issues and crisis (Months 7 to 9)",
        count: "Grow trust, manage issues",
        items: [
          "Month 7 \u00B7 Growing customer loyalty and referrals by increasing the felt value of your brand",
          "Month 7 Resource: Customer trust and loyalty checklist",
          "Month 8 \u00B7 Managing negative issues and turning them into opportunities to build trust",
          "Month 8 Resource: Issues-management framework for business",
          "Month 9 \u00B7 Doing social media well, with a specialist social media presenter",
          "Month 9 Resource: Business social media tips and response library",
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        items: [
          "Month 10 \u00B7 Featured business owner: an in-depth conversation on what worked, what didn't, and the lessons learned",
          "Month 10 Resource: Best-practice playbook from a successful Australian business",
          "Month 11 \u00B7 Q&A month: the biggest questions and scenarios from program participants",
          "Month 11 Resource: Best-practice recap document from the year",
          "Month 12 \u00B7 Media training for your spokespeople: the art of a great business interview",
          "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "A tailored program for Australian business leadership teams",
    intro:
      "Your whole leadership team learns together, so everyone speaks with one voice in high-stakes moments and no one carries the reputation load alone.",
    items: [
      {
        image: "/images/business/business-persona-owner.jpg",
        icon: Briefcase,
        title: "Business owners and founders",
        body:
          "Lead your business with confidence as the trusted voice and face of your brand, from day-to-day positioning to the moments your customers, staff and suppliers look to you for leadership.",
      },
      {
        image: "/images/business/business-persona-ceo.jpg",
        icon: Building2,
        title: "CEOs and managing directors",
        body:
          "Turn your position, your team and your track record into measurable gains in profile, trust and commercial growth — and a reputation that stands up under pressure.",
      },
      {
        image: "/images/business/business-persona-comms.jpg",
        icon: Megaphone,
        title: "Marketing and communications teams",
        body:
          "Sharpen your content, channels and campaigns into consistent gains in customer acquisition, brand profile and public trust, backed by frameworks from real Australian PR experts.",
      },
      {
        image: "/images/business/business-persona-client.jpg",
        icon: HandHeart,
        title: "Client-facing and sales teams",
        body:
          "Turn every customer conversation, review and referral into a brand moment — because reputation is built in the frontline interactions your customers remember most.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your presenters",
    heading: "Learn from Australia's leading business PR specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a panel of guest experts and successful Australian business owners who each bring real-world experience to the program.",
    items: [
      {
        image: "/images/expert-lyall-real.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25-year PR career spanning six continents. Lyall has assisted Australian businesses, from hospitality and professional services to national brands, for over 25 years. He has spoken at numerous business forums and conferences, and trained owners, executive teams and staff in the art of effective communication and reputation strategy.",
      },
      {
        image: "/images/expert-melissa-real.png",
        name: "Melissa Agnes",
        title: "Featured presenter \u00B7 Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting business reputation when your brand is under pressure.
          </>
        ),
      },
    ],
    footnote:
      "Plus in-depth conversations with successful Australian business owners, a specialist social media presenter, and a rotating panel of 10+ Australian PR, marketing and communications experts across the year.",
  },

  testimonials: {
    eyebrow: "What Australian business leaders say",
    heading: "Built on 25+ years of real work with Australian businesses",
    items: [
      {
        quote:
          "The invaluable customer relations support from CRC Public Relations has helped us build a high level of trust in our customer base, and significant growth for our business.",
        // TODO: confirm the exact name from the CRC Public Relations testimonial archive
        name: "[Confirm name]",
        title: "Owner",
        org: "Caff\u00E9 Ko",
      },
      {
        quote:
          "CRC Public Relations has worked extensively across the Pacific Region, providing high-level advice to governments and organisations on sensitive communications and reputation issues.",
        // TODO: confirm the exact name from the CRC Public Relations testimonial archive
        name: "[Confirm name]",
        title: "Secretary General",
        org: "Pacific Islands Forum",
      },
      {
        quote:
          "The team at CRC Public Relations has stood with us during some of our most difficult times, providing a calm voice of reason in shaping our public messaging.",
        // TODO: confirm the exact name from the CRC Public Relations testimonial archive
        name: "[Confirm name]",
        title: "Former CEO",
        org: "EU Australia",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value your business walks away with",
    heading: "Outcomes that matter in the market, the newsroom and at the kitchen table",
    items: [
      {
        icon: Megaphone,
        title: "Become the voice of authority",
        body: "Position your business as the recognised, quoted voice in your industry, above your competitors.",
      },
      {
        icon: TrendingUp,
        title: "Attract new customers",
        body: "Use PR and earned media to build a trusted profile that pulls the right customers towards you on repeat.",
      },
      {
        icon: Heart,
        title: "Grow customer trust",
        body: "Increase the felt value of your brand so existing customers stay longer, spend more and send referrals your way.",
      },
      {
        icon: Newspaper,
        title: "Own the media moment",
        body: "Turn media interest, good or bad, into a chance to lead the conversation about your business and your industry.",
      },
      {
        icon: Handshake,
        title: "Deepen stakeholder trust",
        body: "Build the kind of credibility with customers, suppliers and staff that makes hard conversations easier and good years better.",
      },
      {
        icon: ShieldCheck,
        title: "Be issues and crisis ready",
        body: "Leave the year with frameworks, holding statements and a calm, repeatable response process for when your business is under pressure.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our business?",
        a: "The program is designed for your whole leadership team. Your owners, directors, CEO/MD, executive team, marketing and communications staff, and client-facing leads can all access the content. Several hands-on roles will get the most direct value, but the program is structured so the whole team builds shared language and culture around your brand.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. The monthly Q&A is answered through your member portal so anyone on your team can submit questions and read every answer.",
      },
      {
        q: "How long does the program run?",
        a: "Enrolment runs for 12 months from the day your business joins. You keep access to all modules, resources and recordings for the full year. Many businesses choose to continue annually so new staff onboard into the same shared PR mindset.",
      },
      {
        q: "When do enrolments open?",
        a: "We're opening enrolments to a small founding cohort of Australian businesses in 2026. The first 50 businesses on the waitlist receive a 10% founding-member discount on their first 12 months. Join the waitlist to lock in your place and your discount.",
      },
      {
        q: "What is the founding-member discount?",
        a: "The first 50 Australian businesses to join the waitlist receive a 10% discount on their first 12-month enrolment, applied automatically at checkout when enrolments open. You'll also be the first to receive program details, the founders' welcome and an early invitation to enrol before public release.",
      },
      {
        q: "Will there be different levels (Train, Support, Partner)?",
        a: "Yes — the program will launch with three tiers so sole traders, small teams and larger businesses can all find a fit. Train Level is training and resources only; Support Level adds on-call PR support; Partner Level adds full PR partnership including media training. Pricing details will be shared with the waitlist first.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The weekly Spotlight email keeps the key ideas alive, and the monthly interactive Q&A is where you can bring your business's live situation. Higher tiers include direct on-call PR support from CRC Public Relations.",
      },
      {
        q: "Can our board or franchise partners see the content?",
        a: "Absolutely. We actively encourage directors, franchise partners and senior advisers to access the program, especially the growth, reputation and crisis modules. Larger tiers include group-level access by default.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We'll offer a satisfaction guarantee at launch. If the program is not right for your business, contact our team within the guarantee window of enrolment for a full refund, no questions asked.",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/business/business-sticky-thumb.jpg",
    badge: "For business leadership teams",
    badgeIcon: Briefcase,
    eyebrow: "Enrol your business",
    // The fields below are unused while waitlist mode is active, but the type
    // requires them. Kept here so we can flip back to a standard pricing card
    // by simply removing `waitlist` once enrolments open.
    price: "TBA",
    priceCurrencyNote: "AUD per month",
    pricePlanNote: "Pricing released to the waitlist first",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/business-program-outline.pdf",
    },
    inclusionsTitle: "What waitlist members receive",
    inclusions: [
      "10% founding-member discount (first 50 businesses)",
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
        // count source later). User-confirmed starting figure.
        claimed: 16,
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
        "We'll only email you about the Business Program. Unsubscribe at any time.",
    },
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our business team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We have a deep understanding of the unique needs facing Australian business owners and leadership teams, having worked alongside businesses of every size — from local hospitality and professional services firms to national brands — for more than 25 years through CRC Public Relations.",
      "We've helped many businesses grow their profile, win new customers through trusted public relations, and protect their reputation when everything was on the line. That hard-won experience is what this program is built on.",
      "We're excited to bring you high-quality training and resources, with optional support when you need it, that will help you and your team at an affordable cost. We hope to welcome you to our community of business leaders.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Franchise, multi-location and group enrolments",
    badgeIcon: Users,
    heading: "Train every location, franchisee or business in your group under one enrolment",
    body:
      "We work with franchise networks, multi-location businesses and business groups on bulk enrolments. Discounted per-business pricing, shared dashboards and an optional group-wide tabletop or media-training day with CRC are all on the table.",
    bullets: [
      "Discounted per-business pricing across a group",
      "Shared dashboard across all participating locations",
      "Optional group-wide tabletop or media-training day with CRC",
      "Sector-specific onboarding with the My PR Partner team",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/business/business-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your owner and executive team",
    body:
      "The Business Program covers issues management and reputation defence. If your team wants the deepest crisis training available, with the full Melissa Agnes Crisis Ready\u00AE course and an Australian case-study library, enrol your owner and key executives in the Crisis Masterclass alongside your business program.",
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
    eyebrow: "For Australian business owners and leadership teams",
    eyebrowIcon: Briefcase,
    heading: "Be one of the first 50 businesses on the waitlist",
    body:
      "Enrolments open soon. Founding-member businesses save 10% on year one and get first access before public release. Lock in your business's place today.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: { label: "Talk to our business team", href: "/contact" },
    footnote: "Powered by CRC Public Relations. 25+ years working with Australian businesses.",
    bgImage: "/images/business/business-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Business Program",
    priceShort: "First 50 save 10%",
    ctaLabel: "Join the waitlist",
  },
};

// Suppress unused-icon lint flags. These icons are kept imported because
// editors at the content layer often want to swap them in without re-touching
// the imports section. Remove anything that stays unused at review time.
void Sparkles;
void Compass;
void Scale;
void FileText;
void MessageSquare;
void Target;
