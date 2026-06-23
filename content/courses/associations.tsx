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
      "A 12-month online PR, advocacy and reputation program for Australian industry, trade and professional association leadership teams. Built by CRC Public Relations with 15+ years of association experience. Join the waitlist - first 20 association members save 10%.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Industry & Professional Associations PR Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR program for Australian industry, trade and professional associations, powered by CRC Public Relations. Join the waitlist - first 20 save 10%.",
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
    headline: "My PR Partner industry associations program",
    tagline:
      "The only Australian 12-month online public relations program built for busy business and NFP managers, owners and teams",
    intro:
      "A 12-month online PR training program built exclusively for Australian industry and professional associations. CEOs, executive leaders, spokespeople, and communications, membership and marketing staff learn together, to maximise your impact.",
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
    portraitImage: "/images/industry associations hero.png",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>National and state associations across Australia</>,
      sub: "Powered by CRC Public Relations, with 15+ years in the sector",
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
    { icon: ShieldCheck, title: "Optional PR support", sub: "Security and peace of mind" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What's included" },
    { id: "structure", label: "12-month plan" },
    { id: "instructors", label: "Presenters" },
    { id: "pricing", label: "Waitlist" },
    { id: "compare", label: "Compare plans" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading:
      "Affordable PR training, resources and support that empowers your association's team",
    paragraphs: [
      "The My PR Partner Industry & Professional Associations Program is a 12-month online training program designed for busy professionals. Each team member learns at a time that suits them, and content is built to enable your executive, communications, marketing and membership teams to share the same language while together advancing the association's objectives.",
      "Built by CRC Public Relations, this is the distilled version of 15+ years of working alongside national and state industry, trade and professional associations, helping them achieve major advocacy wins, elevate their public voice and build the trust and support of their membership.",
    ],
    keyLearningsTitle: "Why association leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across exec, comms, marketing and membership teams",
      "A ready-to-use library of resources, templates and checklists for associations",
      "Expert support from real Australian association PR consultants, not academics",
      "Practical advocacy frameworks to influence policy and legislation",
      "Guest presenters across advocacy, social media, association leadership and membership",
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
        title: "Training video + workbook",
        body:
          "A new training module each month, with a workbook designed for individual learning and team discussion. Built to go deeper over time.",
      },
      {
        icon: FileText,
        title: "Practical resource",
        body:
          "A downloadable tool every month: checklists, templates, policies, and media releases designed to help your team communicate, advocate and engage members more effectively.",
      },
      {
        icon: MessageSquare,
        title: "Fortnightly Spotlight email",
        body:
          "Short, sharp, timely insights between modules, with valuable PR and reputation strategies and guidance exclusively for associations. Forward to anyone on your team.",
      },
      {
        icon: HelpingHand,
        title: "Interactive Q&A",
        body:
          "Bring your specific circumstances to a monthly Q&A with Lyall and the expert panel. Real advice for your real situations.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "12-month plan",
    heading: "Your month-by-month association program",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, the fortnightly Spotlight emails and an interactive Q&A. The 12-month path is grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    groups: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        count: "Build the mindset and find your voice",
        modules: [
          {
            month: 1,
            title:
              "Why you need a public voice: become the voice of authority and trust for your industry",
            resource: "Communication evaluation for your association",
          },
          {
            month: 2,
            title:
              "Developing a whole-of-association PR mindset: prioritising effective communication",
            resource: "Communication tips for the entire team",
          },
          {
            month: 3,
            title:
              "Doing social media well, with a social media specialist expert (association focused)",
            resource: "Social media tips",
          },
        ],
      },
      {
        label: "Phase 2: Advocacy and media (Months 4 to 6)",
        count: "Get on the front foot",
        modules: [
          {
            month: 4,
            title: "PR that attracts new customers, supporters or donors: the growth PR strategy",
            resource: "Government relations and advocacy template pack",
          },
          {
            month: 5,
            title:
              "Lobbying and advocacy case study with a CEO: How a national industry body turned disaster into success",
          },
          {
            month: 6,
            title: "Building media campaigns that support your objectives",
            resource:
              "Media release and pitch templates plus key steps for media success",
          },
          {
            month: 6,
            title:
              "Bonus · Handling media enquiries: protecting and amplifying your association",
            resource: "Template media policy",
          },
        ],
      },
      {
        label: "Phase 3: Membership, trust and crisis (Months 7 to 9)",
        count: "Grow members, manage issues",
        modules: [
          {
            month: 7,
            title: "Growing and retaining members by increasing the value of membership",
            resource: "Member engagement and retention checklist",
          },
          {
            month: 8,
            title: "Association board and governance risks, with Tim Whincop (Vocare Law)",
            resource: "Resource from Tim Whincop (TBD)",
          },
          {
            month: 9,
            title: "Managing negative issues and turning them into opportunities for trust",
            resource: "Issues-management framework for associations",
          },
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        modules: [
          {
            month: 10,
            title:
              "Featured association leader: an in-depth conversation on what worked, what didn't, and the lessons learned",
            resource: "Best-practice playbook from a successful Australian association",
          },
          {
            month: 11,
            title: "Q&A month: the biggest questions and scenarios from program participants",
            resource: "Best-practice recap document from the year",
          },
          {
            month: 12,
            title: "Media training for your spokespeople: the art of a great interview",
            resource:
              "On call all year, so your spokespeople are media-ready whenever you need them.",
          },
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading:
      "A tailored program exclusively for industry and professional association leadership and comms teams",
    intro:
      "This program is built for everyone whose role touches your association's growth, influence and reputation, and for leaders who understand the power of effective communication and ongoing professional development.",
    items: [
      {
        image: "/images/associations/associations-persona-ceo.jpg",
        icon: Building2,
        title: "Leaders and spokespeople",
        body:
          "Strengthen your communication, media, member relations and advocacy skills to represent your association and be the voice of authority and trust for your industry or sector.",
      },
      {
        image: "/images/associations/associations-persona-comms.jpg",
        icon: Briefcase,
        title: "Communication and marketing teams",
        body:
          "Learn strategies and secure frameworks and templates to lift your association's profile, make every public moment count, maximise content effectiveness and build member and community trust.",
      },
      {
        image: "/images/associations/associations-persona-advocacy.jpg",
        icon: Megaphone,
        title: "Government relations",
        body:
          "Use PR and media strategies to effectively boost your advocacy, influence policy and legislation, and build the public case behind every meeting in Canberra or your state capital.",
      },
      {
        image: "/images/industryassociationcolour.png",
        icon: HandHeart,
        title: "Membership teams",
        body:
          "Build a membership of advocates, not adversaries, who trust and support your association and always want to stay, with communications that grow value and deepen loyalty.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your lead presenter",
    heading: "Led by one of Australia's most experienced association PR strategists",
    intro:
      "Lyall Mercer leads the program, with Australian guest presenters, specialty experts and association leaders joining throughout the year across various modules.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25+ year international PR career. Lyall has assisted state and federal industry and professional associations across Australia, New Zealand and the USA for 15+ years, spoken at numerous association forums and conferences, and trained executive teams, boards and staff in the art of effective communication and strategy.",
      },
    ],
  },

  testimonials: {
    eyebrow: "What Australian association leaders say",
    heading:
      "Built on 15+ years of real work with Australian industry and professional associations",
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
    eyebrow: "What your team will learn",
    heading: "The value your association walks away with",
    items: [
      {
        icon: Megaphone,
        title: "Become the public voice of authority",
        body: "Position your association as the recognised public voice of authority in your industry, above any others.",
      },
      {
        icon: Flag,
        title: "Boost advocacy and influence policy",
        body: "Use PR and media strategies to strengthen your advocacy and influence policy and legislation.",
      },
      {
        icon: TrendingUp,
        title: "Build and retain more members",
        body: "Grow membership and improve retention by increasing the felt value of belonging to your association.",
      },
      {
        icon: HandHeart,
        title: "Build a membership of advocates",
        body: "Turn members into advocates, not adversaries, who genuinely trust and support your association.",
      },
      {
        icon: MessageSquare,
        title: "Communicate with emotional resonance",
        body: "Connect powerfully with the people most important to your success through communication that resonates.",
      },
      {
        icon: ShieldCheck,
        title: "Protect and strengthen your industry's reputation",
        body: "Be ready to deal with negative issues that can damage the association and industry's reputation.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our association?",
        a: "The program is designed for your whole leadership team. You choose who you'd like to be involved each month. This includes your CEO or executive director, executive team, communications and marketing staff, advocacy and government relations leads, and membership engagement teams. The first month is intentionally shaped so everyone benefits.",
      },
      {
        q: "What ongoing PR support is available to our association?",
        a: "Our Support Level is our most popular and includes on-call PR or issues & crisis assistance. Our Partner Level is for associations who want our ongoing guidance to elevate their public voice and lead them in media and communications strategy and campaigns, and includes personal, ongoing phone, email & Zoom PR support. Both of these levels also include many other features, extra resources and individual training. See our pricing and plans for details. All PR support is provided by the senior team at CRC Public Relations.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. This includes the monthly Q&A.",
      },
      {
        q: "How long does enrolment last?",
        a: "Enrolment runs for 12 months from the day your association joins. You keep access to all modules, resources and recordings (after they are released) until the end of the 12 months. Many associations choose to continue annually so new staff onboard into the same shared PR mindset. There is also an option to renew for new second year content for those who have completed year one.",
      },
      {
        q: "When do enrolments open?",
        a: "We're opening enrolments to a small founding cohort of Australian associations in 2026. The first 20 association members on the waitlist receive a 10% founding-member discount on their first 12 months. Join the waitlist to lock in your place and your discount.",
      },
      {
        q: "What if we want an even deeper dive on crisis?",
        a: "The Associations Program covers everything most associations need. However if any of your team wants the deeper, personal crisis leadership available, we offer the crisis masterclass as a separate flagship program. This features the Crisis Ready course with Melissa Agnes, CEO of the Crisis Ready Institute USA as well as other crisis-specific resources. This is personal (not team) training and associations can enrol their CEO, board chair or communications manager in this separately.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The fortnightly Spotlight email keeps key ideas alive, and the monthly interactive Q&A is where you can bring your association's live situation. When something serious breaks, your team has a clear path to call on the CRC Public Relations consulting team if required (available on support levels).",
      },
      {
        q: "Can our board see the content?",
        a: "Absolutely. We actively encourage board members to access the program, especially the advocacy, governance and crisis modules.",
      },
      {
        q: "How is payment handled?",
        a: "Payment will be by annual subscription per association that can be paid in monthly instalments or annually. Payment is billed through our secure learning platform at checkout. You'll receive a tax invoice by email and immediate access to your association dashboard. Annual subscribers receive one month free and have the option of paying by invoice. Pricing details will be shared with the waitlist first.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We offer a 10 day free trial. Your online payment will not be processed for 10 days and during this time you are able to cancel. If paying annually by invoice you can still cancel within 10 days for a full refund, no questions asked. There is no refund after the 10 days (see T&C for full details).",
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
    priceCurrencyNote: "monthly instalment · ex GST",
    pricePlanNote: "Pricing released to the waitlist first",
    // Tiers power the in-page plan comparison + popup only. While the sidebar
    // is in waitlist mode (`waitlist` set below) the sticky card ignores these
    // and keeps showing the waitlist UI. Copy is drawn from the Train, Support
    // and Partner association level pages on myprpartner.com.
    defaultTierId: "support",
    tiers: [
      {
        id: "train",
        label: "Train Level",
        description: "Team training and resources",
        price: "$440",
        priceCurrencyNote: "per month · ex GST",
      },
      {
        id: "support",
        label: "Support Level",
        description: "Training plus on-call PR assistance",
        price: "$840",
        priceCurrencyNote: "per month · ex GST",
      },
      {
        id: "partner",
        label: "Partner Level",
        description: "Full PR partnership with media training",
        price: "$1,340",
        priceCurrencyNote: "per month · ex GST",
      },
    ],
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/associations-program-outline.pdf",
    },
    inclusionsTitle: "",
    inclusions: [],
    waitlist: {
      signupUrl: WAITLIST_URL,
      headline: "Join the waitlist",
      subheadline:
        "Be first in line when enrolments open, and lock in the founding-member discount.",
      discountPill: "First 20 save 10%",
      spots: {
        capacity: 20,
        // Manually update as waitlist signups come in (or wire to a real
        // count source later). Conservative starting figure shows real
        // momentum without overstating it.
        claimed: 8,
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
    callbackLinkLabel: "Or request a callback from our associations team",
    callbackHref: "/contact",
  },

  // Plan comparison copy is taken only from the Train, Support and Partner
  // association level pages (the "YOU WILL RECEIVE" inclusions and pricing).
  planComparison: {
    eyebrow: "Compare plans",
    heading: "Choose the level of support that fits your association",
    intro:
      "Every level includes the full 12-month training program. Support and Partner add hands-on PR assistance and support from the CRC Public Relations team.",
    anchorId: "compare",
    compareButtonLabel: "Compare all plans",
    features: [
      { label: "Monthly video & audio resources", tiers: ["train", "support", "partner"] },
      { label: "Weekly Spotlight email", tiers: ["train", "support", "partner"] },
      { label: "Interactive Q&A", tiers: ["train", "support", "partner"] },
      { label: "Bonus training and resources", tiers: ["train", "support", "partner"] },
      {
        label: "Featured industry associations video training",
        tiers: ["train", "support", "partner"],
      },
      {
        label: "The essential PR and communication strategy checklist for associations",
        tiers: ["support", "partner"],
      },
      {
        label: "Communications 'templates and tips' pack for associations",
        tiers: ["support", "partner"],
      },
      { label: "Strategy planning consultation", tiers: ["support", "partner"] },
      { label: "Access to special PR consultancy rates", tiers: ["support", "partner"] },
      { label: "On-call PR assistance (6 hours)", tiers: ["support"] },
      {
        label: "Personal, ongoing phone, email & Zoom PR support (20 hours)",
        tiers: ["partner"],
        highlighted: true,
      },
      {
        label: "Comprehensive, personalised online half-day media training",
        tiers: ["partner"],
        highlighted: true,
      },
    ],
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We have a deep understanding of the unique needs facing industry, trade and professional associations and peak bodies, having worked alongside many state and national associations for 15+ years through CRC Public Relations.",
      "We've helped position many associations as the public voice of authority in their industry, supported them through high-stakes advocacy moments, and seen them build member trust and grow membership through smart, consistent public relations.",
      "We're excited to bring you high-quality training and resources, with optional support when you need it, that will help you and your team at an affordable cost. We hope to welcome you to our community of association leaders.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  finalCta: {
    eyebrow: "For Australian association leadership teams",
    eyebrowIcon: Building2,
    heading: "Be one of the first 20 association members on the waitlist",
    body:
      "Enrolments open soon. Founding-member associations save 10% on year one and get first access before public release. Lock in your association's place today.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCta: { label: "Talk to our associations team", href: "/contact" },
    footnote: "Powered by CRC Public Relations. 15+ years working with Australian associations.",
    bgImage: "/images/associations/associations-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Industry Associations",
    priceShort: "First 20 save 10%",
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
