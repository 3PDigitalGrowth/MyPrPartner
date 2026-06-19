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
      "A 12-month online PR, profile, reputation and crisis communications program for Australian business owners, founders and leadership teams. Built by CRC Public Relations with 15+ years of business PR experience. Join the waitlist - first 50 businesses save 10%.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Business PR & Reputation Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR program for Australian business owners and leadership teams, powered by CRC Public Relations. Join the waitlist - first 50 save 10%.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "My PR Partner Business & NFP Program",
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
    eyebrow: "For Australian business and NFP leadership teams",
    eyebrowIcon: Briefcase,
    headline:
      "Build your business or organisation's trust and profile, and protect its reputation",
    tagline:
      "The only Australian 12-month online public relations program built for busy business and NFP managers, owners and teams",
    intro:
      "Attract new customers or supporters, become the recognised voice of authority in your industry, and lead confidently through any issue or crisis. Join the My PR Partner business and NFP community.",
    outcomes: [
      "Build a strong business or organisation profile that attracts new customers or supporters",
      "Become the voice of authority for your industry or sector",
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
    portraitImage: "/images/myprpartner business program.png",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>Australian businesses and NFPs, locally and nationally</>,
      sub: "Powered by CRC Public Relations - 15+ years in Australian business and NFP",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian business and NFP leadership teams and owners",
        "Designed for founders, CEOs, marketing, comms & client-facing teams",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "Owner, exec, comms & client teams" },
    { icon: TrendingUp, title: "Growth focused", sub: "Profile, trust and new customers" },
    { icon: Award, title: "Certificate of completion", sub: "Endorsed by CRC Public Relations" },
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
      "Affordable PR training, resources and support that empowers your whole business or NFP team",
    paragraphs: [
      "The My PR Partner Business and NFP Program is a 12-month online training program designed for busy Australian business, charity and NFP owners, managers, and communication teams. Each team member learns at a time that suits them, and content is built with the full range of roles in mind, so your executive, marketing, communications and client-facing teams share the same language and pull in the same direction.",
      "Built by CRC Public Relations, this is the distilled version of 15+ years of working alongside Australian businesses, charities and not for profit organisations through their biggest moments, from proud growth stories and national media wins to the hardest moments when their reputation came under pressure.",
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
    keyLearningsTitle: "Why business and organisation leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across owners, exec, marketing and client-facing teams",
      "A ready-to-use library of resources, templates and checklists for business and NFPs",
      "Expert support from real Australian corporate PR consultants, not academics",
      "Practical frameworks to grow profile, trust and new customer and supporter attraction",
      "Guest presenters across media, social, reputation and crisis communications",
      "Monthly interactive Q&A on your specific business or NFP circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Grow, protect, support and expertise - every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to build your business profile, win new customers, communicate confidently with media, and stand firm when your reputation is tested.",
    tiles: [
      {
        icon: TrendingUp,
        title: "Brand, growth and social media",
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
          "Receive ongoing PR support and training without consultancy costs - a real partner in your corner every month, for 12 months, and a team ready when you need them.",
      },
      {
        icon: BadgeCheck,
        title: "Expertise",
        body:
          "Access the expertise of PR, business, and NFP experts who understand the realities of Australian businesses and charities and what actually moves the needle for owners and leadership teams.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "12-month plan",
    heading: "Your month-by-month path, designed to go deeper over time",
    intro:
      "Every month delivers a training video, workbook, practical resource, Spotlight emails and an interactive Q&A. Below is the 12-month path your team follows, grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    groups: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        count: "Build the mindset and find your voice",
        items: [
          "Month 1 · A PR mindset: How public relations underpins every growth and reputation win",
          "Month 1 Resource: Communications tips for the whole team",
          "Month 2 · Becoming the voice of authority in your industry or market",
          "Month 2 Resource: 5 step guide to becoming an expert media commentator",
          "Month 3 · Identifying your vulnerabilities before they escalate into a reputational issue",
          "Month 3 Resource: The essential reputation checklist for business (special option for NFP)",
        ],
      },
      {
        label: "Phase 2: Brand, growth and social media (Months 4 to 6)",
        count: "Get on the front foot",
        items: [
          "Month 4 · PR that attracts new customers, supporters or donors: the growth PR strategy",
          "Month 4 Resource: PR and content campaign template pack",
          "Month 5 · The LinkedIn playbook: Drive business in a time-effective way",
          "Month 5 Resource: LinkedIn tips and workbook",
          "Month 6 · Using social media for business or organisation growth, with a social media specialist",
          "Month 6 Resource: Business and NFP social media tips and response library",
        ],
      },
      {
        label: "Phase 3: Reputation, issues and crisis (Months 7 to 9)",
        count: "Grow trust, manage issues",
        items: [
          "Month 7 · Trust, reputation and turning negative issues into opportunities",
          "Month 7 Resource: Issues-management framework for business and NFP",
          "Month 8 · Avoiding and preparing for a crisis: Planning for any size business or organisation",
          "Month 8 Resource: Crisis communication plan guide and templates",
          "Month 9 · Three questions you must ask to effectively communicate through a crisis",
          "Month 9 Resource: Guide from the Crisis Ready Institute",
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        items: [
          "Month 10 · Building a national or local media profile with a small team",
          "Month 10 Resource: Media list and pitch templates",
          "Month 11 · Featured business owner: What worked, what didn't, and the lessons learned",
          "Month 11 Resource: Best-practice PR playbook from a successful Australian business",
          "Month 11 option · Featured charity CEO: What worked, what didn't, and the lessons learned",
          "Month 11 Resource: Best-practice PR playbook from a successful Australian charity",
          "Month 12 · Media training for your spokespeople: the art of a great interview",
          "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "Business and NFP owners, CEOs and leaders",
    intro:
      "Elevate your business and build growth, trust, and a solid reputation through effective and PR-driven communication to your customers, staff and other stakeholders.",
    items: [
      {
        image: "/images/business_nfp.jpg",
        icon: Briefcase,
        title: "Business and NFP owners, CEOs and leaders",
        body:
          "Elevate your business and build growth, trust, and a solid reputation through effective and PR-driven communication to your customers, staff and other stakeholders.",
      },
      {
        image: "/images/business/business-persona-ceo.jpg",
        icon: Building2,
        title: "Charity and NFP leaders",
        body:
          "Stand out, build profile and gain greater supporter and donor trust, be prepared for any issue, and generate a reputation that stands up under pressure.",
      },
      {
        image: "/images/business/business-persona-comms.jpg",
        icon: Megaphone,
        title: "Marketing and communications teams",
        body:
          "Sharpen your content, channels and campaigns into consistent gains in customer, supporter or donor acquisition, brand profile and public trust, backed by frameworks from real Australian PR experts.",
      },
      {
        image: "/images/business/business-persona-client.jpg",
        icon: HandHeart,
        title: "Client-facing teams",
        body:
          "Turn every conversation, review and referral into a brand moment - because reputation is built in the frontline interactions your customers and supporters remember most.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your presenters",
    heading: "Learn from Australia's leading business and NFP PR specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a host of specialist experts and successful Australian business owners and charity CEOs who each bring real-world experience to the program.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has assisted Australian businesses, from hospitality and professional services to national brands, as well as national charities and not for profits, spoken at numerous conferences, and trained executive teams and staff in the art of effective communication, and reputation and crisis strategy.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Featured presenter · Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting business reputation when your brand is under pressure.
          </>
        ),
      },
    ],
    footnote:
      "Plus training by leading Australian and international PR, digital, growth, reputation, social media, and crisis specialists, and discussions with successful Australian business owners and charity CEOs across the year.",
  },

  careerValue: {
    eyebrow: "The value your business or organisation walks away with",
    heading: "Outcomes that matter to your specific circumstances",
    items: [
      {
        icon: TrendingUp,
        title: "Attract new customers",
        body: "Use PR and earned media to build a trusted profile that pulls the right customers and supporters towards you.",
      },
      {
        icon: Heart,
        title: "Grow customer and supporter trust",
        body: "Increase the felt value of your brand so existing customers and supporters stay longer, and become your advocates.",
      },
      {
        icon: Newspaper,
        title: "Own the media moment",
        body: "Turn media interest, good or bad, into a chance to lead the conversation about your business, NFP or industry.",
      },
      {
        icon: Handshake,
        title: "Deepen stakeholder trust",
        body: "Build the kind of credibility with customers, supporters, and staff that makes hard conversations easier and good years better.",
      },
      {
        icon: ShieldCheck,
        title: "Be issues and crisis ready",
        body: "Leave the year with frameworks, holding statements and a calm, repeatable response process for when your business or organisation is under pressure.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our business?",
        a: "The program is designed for every business – small or large. You choose who you'd like to be involved each month. This includes owners, directors, CEO/MD, executive team, marketing and communications staff, and client-facing leads. The first month is intentionally shaped so everyone benefits.",
      },
      {
        q: "What ongoing PR support is available to our business?",
        a: "Our Support Level is our most popular and includes on-call PR or issues & crisis assistance. Our Partner Level is for businesses who want the security of extra peace of mind, and includes personal, ongoing phone, email & Zoom PR support. Both of these levels also include many other features, extra resources and individual training. See our pricing and plans for details. All PR support is provided by the senior team at CRC Public Relations.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. This includes the monthly Q&A.",
      },
      {
        q: "How long does enrolment last?",
        a: "Enrolment runs for 12 months from the day your business joins. You keep access to all modules, resources and recordings (after they are released) until the end of the 12 months. Many businesses choose to continue annually so new staff onboard into the same shared PR mindset. There is also an option to renew for new second year content for those who have completed year one.",
      },
      {
        q: "When do enrolments open?",
        a: "We're opening enrolments to a small founding cohort of Australian businesses in 2026. The first 50 businesses on the waitlist receive a 10% founding-member discount on their first 12 months. Join the waitlist to lock in your place and your discount.",
      },
      {
        q: "What if we want an even deeper dive on crisis?",
        a: "The Business Program covers everything most businesses need. However if any of your team wants the deeper, personal crisis leadership available, we offer the crisis masterclass as a separate flagship program. This features the Crisis Ready course with Melissa Agnes, CEO of the Crisis Ready Institute USA as well as other crisis-specific resources. This is personal (not team) training and businesses can enrol their CEO, owners or communications manager in this separately.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The fortnightly Spotlight email keeps key ideas alive, and the monthly interactive Q&A is where you can bring your business's live situation. When something serious breaks, your team has a clear path to call on the CRC Public Relations consulting team if required (available on support levels).",
      },
      {
        q: "Can our board or partners see the content?",
        a: "Absolutely. We actively encourage directors, partners and senior advisers to access the program, especially the growth, reputation and crisis modules.",
      },
      {
        q: "How is payment handled?",
        a: "Payment will be by annual subscription per business that can be paid in monthly instalments or annually. Payment is billed through our secure learning platform at checkout. You'll receive a tax invoice by email and immediate access to your business dashboard. Annual subscribers receive one month free and have the option of paying by invoice. Pricing details will be shared with the waitlist first.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We offer a 10 day free trial. Your online payment will not be processed for 10 days and during this time you are able to cancel. If paying annually by invoice you can still cancel within 10 days for a full refund, no questions asked. There is no refund after the 10 days (see T&C for full details).",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/business/business-sticky-thumb.jpg",
    badge: "For business and NFP leadership teams",
    badgeIcon: Briefcase,
    eyebrow: "Enrol your business or organisation",
    // The fields below are unused while waitlist mode is active, but the type
    // requires them. Kept here so we can flip back to a standard pricing card
    // by simply removing `waitlist` once enrolments open.
    price: "TBA",
    priceCurrencyNote: "monthly instalment · ex GST",
    pricePlanNote: "Pricing released to the waitlist first",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/business-program-outline.pdf",
    },
    inclusionsTitle: "",
    inclusions: [],
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
        "Full program outline",
      ],
      footnote:
        "We'll email you with program updates and occasional resources. Unsubscribe any time.",
    },
    trustBadges: { poweredByCrcLogo: true },
    callbackLinkLabel: "Or request a callback from our business and NFP team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders-message.jpg",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We have a deep understanding of the unique needs facing Australian business owners and leadership teams, not for profit organisations, and faith-based charities, having worked alongside organisations of every size - from local to national brands - for 15+ years through CRC Public Relations.",
      "We've helped many businesses grow their profile, win new customers through trusted public relations, and protect their reputation when everything was on the line, and we've worked with national and global charities to help them prepare for and navigate issues and crises. That hard-won experience is what this program is built on.",
      "We're excited to bring you high-quality training and resources, with optional support when you need it, that will help you and your team at an affordable cost. We hope to welcome you to our community of business and NFP leaders.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Franchise, multi-location and group enrolments",
    badgeIcon: Users,
    heading: "Train every location, franchisee or business in your group under one enrolment",
    body:
      "We work with franchise networks, multi-location businesses and business groups on bulk enrolments. Discounted per-business pricing, shared dashboards and an optional group-wide tabletop or media-training day with CRC Public Relations are all on the table.",
    bullets: [
      "Discounted per-business pricing across a group",
      "Shared dashboard across all participating locations",
      "Optional group-wide tabletop or media-training day with CRC Public Relations",
      "Sector-specific onboarding with the My PR Partner team",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/business/business-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your owner, CEO and executive team",
    body:
      "The Business and NFP Program covers issues management and reputation defence. If your team wants the deepest crisis training available, we offer the Crisis Masterclass that includes the Crisis Ready® course with CEO of the Crisis Ready Institute Melissa Agnes. Enrol your CEO, media spokesperson and key executives in the Crisis Masterclass alongside your business and NFP program.",
    thumbImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
    featureBullets: [
      "Full 12-month Crisis Ready® course with Melissa Agnes",
      "Monthly resources, workbooks and templates",
      "Regular Q&A and live discussion opportunities",
      "The only specialised crisis communications course of its type in Australia",
    ],
    primaryCta: { label: "Learn about Crisis Masterclass", href: "/crisis-masterclass" },
    secondaryCta: { label: "Talk to our team", href: "/contact" },
  },

  finalCta: {
    eyebrow: "For Australian business and NFP leadership teams",
    eyebrowIcon: Briefcase,
    heading: "Be one of the first 50 businesses and organisations on the waitlist",
    body:
      "Enrolments open soon. Founding-member businesses and NFPs save 10% on year one and get first access before public release. Lock in your place today.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: { label: "Talk to our business team", href: "/contact" },
    footnote: "Powered by CRC Public Relations. 15+ years working with Australian businesses, charities and NFPs.",
    bgImage: "/images/business/business-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Business & NFP Program",
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
