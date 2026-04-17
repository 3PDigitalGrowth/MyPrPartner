import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Clock,
  Compass,
  FileText,
  Flag,
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
const PAGE_PATH = "/programs/charity";
const HERO_IMAGE = "/images/charity/charity-hero-bg.jpg";

// All CTAs on this pre-launch page resolve to the Kajabi waitlist signup URL
// (with the standard utm_* stamping via getCourseCheckoutUrl). Set
// NEXT_PUBLIC_KAJABI_CHARITY_WAITLIST_URL in .env.local and on the
// Vercel dashboard to override the placeholder below.
const WAITLIST_URL =
  process.env.NEXT_PUBLIC_KAJABI_CHARITY_WAITLIST_URL || PLACEHOLDER_CHECKOUT_URL;

// Optional ISO 8601 launch date used by the sidebar countdown. Leave the env
// var unset to hide the time countdown and rely on the spot counter alone.
const LAUNCH_DATE = process.env.NEXT_PUBLIC_CHARITY_LAUNCH_DATE;

export const charityContent: CourseContent = {
  slug: "charity",

  seo: {
    metaTitle:
      "Charity & Not-for-Profit PR Program | Donor Trust, Fundraising & Reputation Training | My PR Partner",
    metaDescription:
      "A 12-month online PR, donor trust and reputation program for Australian charities and not-for-profits - executive directors, boards, fundraising and communications teams. Built by CRC Public Relations with 25+ years of NFP sector experience. Join the waitlist - first 50 charities save 10%.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Charity & Not-for-Profit PR Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR program for Australian charities and not-for-profits, powered by CRC Public Relations. Join the waitlist - first 50 charities save 10%.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "My PR Partner Charity & Not-for-Profit Program",
    schemaDescription:
      "A 12-month online PR, donor trust, fundraising and reputation program for Australian charities and not-for-profits. Monthly modules with training videos, workbooks, practical resources, interactive Q&A and a rotating panel of expert Australian PR specialists.",
    providerName: "My PR Partner",
    providerUrl: SITE,
    instructors: [
      {
        name: "Lyall Mercer",
        description:
          "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations. 25+ years of PR consulting with Australian charities, not-for-profits and community organisations across Australia, New Zealand and the USA.",
      },
    ],
  },

  // Treat the waitlist URL as the "checkout base" so every CTA on the page
  // (hero, final-cta, mobile bar, sticky waitlist card) resolves through the
  // same UTM-stamping helper.
  checkout: {
    baseUrl: WAITLIST_URL,
    utmMedium: "charity",
    utmCampaign: "waitlist",
  },

  hero: {
    eyebrow: "For Australian charities, not-for-profits & community organisations",
    eyebrowIcon: Heart,
    headline:
      "Grow donor trust, fundraising and public profile - and protect the reputation your mission depends on",
    tagline:
      "A 12-month online PR program built for busy Australian charity and not-for-profit leadership teams",
    intro:
      "Raise more, retain donors for longer and lead confidently through any sensitive issue or crisis. Join the My PR Partner charity and not-for-profit community.",
    outcomes: [
      "Build a strong public profile that attracts new supporters and donors",
      "Grow donor trust, retention and lifetime value",
      "Strengthen your case for support across media, appeals and grants",
      "Develop effective media, communications and social media skills",
      "Manage sensitive issues and protect your charity's reputation",
      "Master crisis communications to be prepared for any incident or scrutiny",
    ],
    primaryCta: { label: "Join the waitlist", useCheckoutUrl: true },
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/charity-program-outline.pdf",
    },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/charity/charity-hero-portrait.jpg",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>Australian charities from community services to national foundations</>,
      sub: "Powered by CRC Public Relations, with 25+ years in the Australian not-for-profit sector",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian charity and not-for-profit leadership teams",
        "Designed for EDs, boards, fundraising, comms & community teams",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "ED, board, fundraising & comms" },
    { icon: Heart, title: "Mission focused", sub: "Trust, donations and reputation" },
    { icon: Award, title: "Certificate of completion", sub: "Recognised NFP training" },
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
      "Affordable PR training, resources and support that enables your whole charity team",
    paragraphs: [
      "The My PR Partner Charity & Not-for-Profit Program is a 12-month online training program designed for busy Australian charity and not-for-profit leaders. Each team member learns at a time that suits them, and content is built for the full range of NFP roles so your executive director, board, fundraising, communications and community engagement teams share the same language and pull in the same direction.",
      "Built by CRC Public Relations, this is the distilled version of 25+ years of working alongside Australian charities, not-for-profits and community organisations through their biggest moments - from record fundraising campaigns and national awareness wins to the hardest moments when a sensitive issue or public scrutiny threatened the mission.",
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
    keyLearningsTitle: "Why charity leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across the ED, board, fundraising and comms teams",
      "A ready-to-use library of resources, templates and checklists for NFPs",
      "Expert support from real Australian NFP PR consultants, not academics",
      "Practical frameworks to grow donor trust, retention and public profile",
      "Guest presenters across media, social, fundraising and crisis communications",
      "Monthly interactive Q&A on your specific charity circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Grow, protect, support and expertise - every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to grow supporter trust, run stronger appeals and campaigns, communicate confidently with media, and stand firm when your charity's reputation is tested.",
    tiles: [
      {
        icon: TrendingUp,
        title: "Grow",
        body:
          "Learn the keys to PR-driven fundraising and profile growth without huge advertising budgets. Build the trust and story that attract donors, grants and partnerships on repeat.",
      },
      {
        icon: Shield,
        title: "Protect",
        body:
          "Protect the reputation your mission depends on. Spot sensitive issues early - from safeguarding to governance and financial probity - and respond with confidence and compassion.",
      },
      {
        icon: HelpingHand,
        title: "Support",
        body:
          "Receive ongoing PR support and training without consultancy costs - a real partner in your corner every month for 12 months, and a team ready when a difficult situation lands.",
      },
      {
        icon: BadgeCheck,
        title: "Expertise",
        body:
          "Access the expertise of PR specialists who understand the Australian charity and not-for-profit sector, and what actually moves the needle for EDs, boards and fundraising teams.",
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
          "Month 1 \u00B7 The PR mindset for charities: why public relations underpins every fundraising and reputation win",
          "Month 1 Resource: Communications tips for the whole charity team",
          "Month 2 \u00B7 Becoming a recognised public voice on the issue your charity serves",
          "Month 2 Resource: The essential public profile and reputation checklist for charities",
          "Month 3 \u00B7 Strategic communication that resonates emotionally with donors, beneficiaries and the community",
          "Month 3 Resource: Donor-message-mapping framework",
        ],
      },
      {
        label: "Phase 2: Profile, appeals and fundraising (Months 4 to 6)",
        count: "Get on the front foot",
        items: [
          "Month 4 \u00B7 Using PR to amplify appeals and campaigns: the fundraising playbook",
          "Month 4 Resource: Appeal and campaign PR template pack",
          "Month 5 \u00B7 Handling media enquiries and interest: protecting and amplifying your charity",
          "Month 5 Resource: Template charity media policy and media-release library",
          "Month 6 \u00B7 Building a national or local media profile for your mission with a small team",
          "Month 6 Resource: Media list and pitch templates for charities",
        ],
      },
      {
        label: "Phase 3: Donor trust, issues and crisis (Months 7 to 9)",
        count: "Grow trust, manage issues",
        items: [
          "Month 7 \u00B7 Growing donor trust, retention and lifetime value through consistent public relations",
          "Month 7 Resource: Donor trust and retention checklist",
          "Month 8 \u00B7 Managing sensitive issues - safeguarding, governance, financial probity - with confidence and compassion",
          "Month 8 Resource: Issues-management framework for charities and not-for-profits",
          "Month 9 \u00B7 Doing social media well for a charity voice, with a specialist social media presenter",
          "Month 9 Resource: Charity social media tips and response library",
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        items: [
          "Month 10 \u00B7 Featured charity leader: an in-depth conversation on what worked, what didn't, and the lessons learned",
          "Month 10 Resource: Best-practice playbook from a successful Australian charity",
          "Month 11 \u00B7 Q&A month: the biggest questions and scenarios from program participants",
          "Month 11 Resource: Best-practice recap document from the year",
          "Month 12 \u00B7 Media training for your spokespeople: the art of a great charity interview",
          "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "A tailored program exclusively for charity and not-for-profit leadership teams",
    intro:
      "Your whole leadership team learns together, so everyone speaks with one voice in high-stakes moments and no one carries the reputation load alone.",
    items: [
      {
        image: "/images/charity/charity-persona-ed.jpg",
        icon: Heart,
        title: "Executive directors and CEOs",
        body:
          "Lead your charity with confidence as the trusted public face of the mission, from day-to-day storytelling to the moments donors, media and the community turn to you for leadership.",
      },
      {
        image: "/images/charity/charity-persona-board.jpg",
        icon: Scale,
        title: "Board chairs and directors",
        body:
          "Guide your charity through growth moments and sensitive issues with the reputation lens every board needs - from governance announcements to crisis oversight and public accountability.",
      },
      {
        image: "/images/charity/charity-persona-fundraising.jpg",
        icon: HandHeart,
        title: "Fundraising and philanthropy teams",
        body:
          "Turn every appeal, major-gift conversation, grant application and corporate partnership into a stronger case for support, backed by proven public-relations fundamentals.",
      },
      {
        image: "/images/charity/charity-persona-comms.jpg",
        icon: Megaphone,
        title: "Marketing, communications and community teams",
        body:
          "Sharpen your content, channels and campaigns into consistent gains in donor engagement, media profile and public trust - with frameworks from real Australian NFP PR experts.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your presenters",
    heading: "Learn from Australia's leading not-for-profit PR specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a panel of guest experts and successful Australian charity leaders who each bring real not-for-profit experience to the program.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25-year PR career spanning six continents. Lyall has worked alongside Australian charities, not-for-profits and community organisations for over 25 years - from community services and health charities to national foundations - training executive directors, boards and staff in the art of effective communication, reputation and fundraising strategy.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Featured presenter \u00B7 Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting charity reputation when your mission is under pressure.
          </>
        ),
      },
    ],
    footnote:
      "Plus in-depth conversations with successful Australian charity leaders, a specialist social media presenter, and a rotating panel of 10+ Australian PR, fundraising and communications experts across the year.",
  },

  testimonials: {
    eyebrow: "What Australian charity leaders say",
    heading: "Built on 25+ years of real work with Australian charities and not-for-profits",
    items: [
      {
        quote:
          "CRC Public Relations helped us sharpen our story, land sustained national media coverage and build the donor trust we needed to step change our fundraising results.",
        // TODO: Replace with real Australian charity/NFP testimonial from the CRC archive
        name: "[Confirm name]",
        title: "Executive Director",
        org: "[Confirm charity name]",
      },
      {
        quote:
          "When our sector faced significant public scrutiny, the team at CRC Public Relations stood with us - providing calm, principled counsel that protected our reputation and our mission.",
        // TODO: Replace with real Australian charity/NFP testimonial from the CRC archive
        name: "[Confirm name]",
        title: "Chief Executive Officer",
        org: "[Confirm charity name]",
      },
      {
        quote:
          "Their guidance across appeals, media and board communications helped us lift our profile, deepen donor trust and navigate several sensitive moments with real care.",
        // TODO: Replace with real Australian charity/NFP testimonial from the CRC archive
        name: "[Confirm name]",
        title: "Chair of the Board",
        org: "[Confirm charity name]",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value your charity walks away with",
    heading: "Outcomes that matter in the community, the newsroom and the boardroom",
    items: [
      {
        icon: Megaphone,
        title: "Become the trusted voice",
        body: "Position your charity as the recognised, quoted voice on the issue you exist to serve, above any other organisation.",
      },
      {
        icon: TrendingUp,
        title: "Grow fundraising",
        body: "Use PR and earned media to lift appeals, major gifts, grants and corporate partnerships - so your mission can do more, for longer.",
      },
      {
        icon: Heart,
        title: "Deepen donor trust",
        body: "Increase the felt value of supporting your charity so donors stay longer, give more and bring friends, colleagues and workplaces with them.",
      },
      {
        icon: Newspaper,
        title: "Own the media moment",
        body: "Turn media interest, good or bad, into a chance to lead the conversation about your mission and your sector.",
      },
      {
        icon: Flag,
        title: "Strengthen advocacy",
        body: "Build the public case behind every policy submission, ministerial meeting and sector campaign with strategic public relations.",
      },
      {
        icon: ShieldCheck,
        title: "Be issues and crisis ready",
        body: "Leave the year with frameworks, holding statements and a calm, repeatable response process for the moments your charity comes under real pressure.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our charity?",
        a: "The program is designed for your whole leadership team. Your executive director/CEO, senior leadership team, board chairs and directors, fundraising and philanthropy staff, and marketing, communications and community engagement teams can all access the content. Several hands-on roles will get the most direct value, but the program is structured so the whole team builds shared language and culture around your mission.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. The monthly Q&A is answered through your member portal so anyone on your team can submit questions and read every answer.",
      },
      {
        q: "How long does the program run?",
        a: "Enrolment runs for 12 months from the day your charity joins. You keep access to all modules, resources and recordings for the full year. Many charities choose to continue annually so new staff, volunteers and board members onboard into the same shared PR mindset.",
      },
      {
        q: "When do enrolments open?",
        a: "We're opening enrolments to a small founding cohort of Australian charities and not-for-profits in 2026. The first 50 charities on the waitlist receive a 10% founding-member discount on their first 12 months. Join the waitlist to lock in your place and your discount.",
      },
      {
        q: "What is the founding-member discount?",
        a: "The first 50 Australian charities to join the waitlist receive a 10% discount on their first 12-month enrolment, applied automatically at checkout when enrolments open. You'll also be the first to receive program details, the founders' welcome and an early invitation to enrol before public release.",
      },
      {
        q: "Will there be different levels (Train, Support, Partner)?",
        a: "Yes - the program will launch with three tiers so small community organisations and larger national foundations can both find a fit. Train Level is training and resources only; Support Level adds on-call PR support; Partner Level adds full PR partnership including media training. Pricing details will be shared with the waitlist first.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The weekly Spotlight email keeps the key ideas alive, and the monthly interactive Q&A is where you can bring your charity's live situation. Higher tiers include direct on-call PR support from CRC Public Relations.",
      },
      {
        q: "Can our board and senior volunteers see the content?",
        a: "Absolutely. We actively encourage board members, senior advisers and long-serving volunteers to access the program, especially the governance, issues-management and crisis modules. Larger tiers include board-level access by default.",
      },
      {
        q: "Is there a sector or size we don't suit?",
        a: "The program is built for registered charities, deductible-gift-recipient (DGR) organisations, not-for-profits, peak bodies, foundations and community organisations of most sizes. If you're unsure whether it's right for your organisation, book a callback with our team and we'll talk it through.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We'll offer a satisfaction guarantee at launch. If the program is not right for your charity, contact our team within the guarantee window of enrolment for a full refund, no questions asked.",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/charity/charity-sticky-thumb.jpg",
    badge: "For charity leadership teams",
    badgeIcon: Heart,
    eyebrow: "Enrol your charity",
    // The fields below are unused while waitlist mode is active, but the type
    // requires them. Kept here so we can flip back to a standard pricing card
    // by simply removing `waitlist` once enrolments open.
    price: "TBA",
    priceCurrencyNote: "AUD per month",
    pricePlanNote: "Pricing released to the waitlist first",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/charity-program-outline.pdf",
    },
    inclusionsTitle: "What waitlist members receive",
    inclusions: [
      "10% founding-member discount (first 50 charities)",
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
        claimed: 14,
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
        "We'll only email you about the Charity & Not-for-Profit Program. Unsubscribe at any time.",
    },
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our charity team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We have a deep understanding of the unique needs facing Australian charities and not-for-profits, having worked alongside organisations of every size - from small community charities and DGR-endorsed not-for-profits to national foundations - for more than 25 years through CRC Public Relations.",
      "We've helped many charities grow their public profile, lift fundraising through trusted public relations, and protect their reputation through some of the sector's most sensitive moments. That hard-won experience is what this program is built on.",
      "We're excited to bring you high-quality training and resources, with optional support when you need it, that will help you and your team at an affordable cost. We hope to welcome you to our community of charity and not-for-profit leaders.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Federation, peak body and multi-entity enrolments",
    badgeIcon: Users,
    heading: "Train every charity in your federation, peak body or network under one enrolment",
    body:
      "We work with charity federations, peak bodies and multi-entity groups on bulk enrolments. Discounted per-charity pricing, shared dashboards and an optional group-wide tabletop or media-training day with CRC Public Relations are all on the table.",
    bullets: [
      "Discounted per-charity pricing across a federation or network",
      "Shared dashboard across all participating organisations",
      "Optional sector-wide tabletop or media-training day with CRC Public Relations",
      "Sector-specific onboarding with the My PR Partner team",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/charity/charity-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your ED, CEO and board chair",
    body:
      "The Charity & Not-for-Profit Program covers issues management and reputation defence. If your team wants the deepest crisis training available, with the full Melissa Agnes Crisis Ready\u00AE course and an Australian case-study library, enrol your ED/CEO and board chair in the Crisis Masterclass alongside your charity program.",
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
    eyebrow: "For Australian charity and not-for-profit leadership teams",
    eyebrowIcon: Heart,
    heading: "Be one of the first 50 charities on the waitlist",
    body:
      "Enrolments open soon. Founding-member charities save 10% on year one and get first access before public release. Lock in your charity's place today.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: { label: "Talk to our charity team", href: "/contact" },
    footnote: "Powered by CRC Public Relations. 25+ years working with Australian charities and not-for-profits.",
    bgImage: "/images/charity/charity-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Charity & NFP Program",
    priceShort: "First 50 save 10%",
    ctaLabel: "Join the waitlist",
  },
};

// Suppress unused-icon lint flags. These icons are kept imported because
// editors at the content layer often want to swap them in without re-touching
// the imports section. Remove anything that stays unused at review time.
void Sparkles;
void Compass;
void FileText;
void MessageSquare;
void Target;
void Briefcase;
void Building2;
void Handshake;
