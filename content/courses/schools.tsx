import {
  Award,
  Briefcase,
  Building2,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Heart,
  HelpingHand,
  MessageSquare,
  MonitorPlay,
  Newspaper,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { CourseContent } from "@/components/course-page/types";
import { PLACEHOLDER_CHECKOUT_URL } from "@/lib/checkout";

const SITE = "https://myprpartner.com";
const PAGE_PATH = "/programs/schools";
const HERO_IMAGE = "/images/schools/schools-hero-bg.jpg";

const CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_KAJABI_SCHOOLS_CHECKOUT_URL || PLACEHOLDER_CHECKOUT_URL;

export const schoolsContent: CourseContent = {
  slug: "schools",

  seo: {
    metaTitle:
      "Schools PR Program | Communications, Reputation & Crisis Training for Australian Schools | My PR Partner",
    metaDescription:
      "A 12-month online PR and crisis training program for Australian school leadership teams. Principals, executive leaders, communications staff and crisis response teams learn together. Built by CRC Public Relations with 25+ years of schools experience.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Schools PR Program | My PR Partner",
    twitterDescription:
      "A 12-month online PR and crisis training program for Australian school leadership teams, powered by CRC Public Relations.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "My PR Partner Schools Program",
    schemaDescription:
      "A 12-month online PR, reputation and crisis training program for Australian school leadership teams. Monthly modules with training videos, workbooks, practical resources, interactive Q&A and a rotating panel of expert Australian PR, legal and safeguarding specialists.",
    providerName: "My PR Partner",
    providerUrl: SITE,
    instructors: [
      {
        name: "Lyall Mercer",
        description:
          "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations. 25+ years of PR and crisis consulting with Australian schools, charities and associations.",
      },
      {
        name: "Tim Sterne",
        description:
          "Director, Basalt Solutions. Former teacher and police detective. Independent ethics and integrity specialist for the education sector.",
      },
      {
        name: "Tim Whincop",
        description:
          "Director, Vocare Law. School governance and education law specialist.",
      },
    ],
  },

  checkout: {
    baseUrl: CHECKOUT_BASE_URL,
    utmMedium: "schools",
    utmCampaign: "enrol",
  },

  hero: {
    eyebrow: "For Australian school leadership teams",
    eyebrowIcon: GraduationCap,
    headline: "My PR Partner Schools Program",
    tagline:
      "Take your school's communication, reputation and crisis readiness to the next level",
    intro:
      "A 12-month online PR training program built exclusively for Australian school leadership teams. Principals, executive leaders, communications staff and crisis response teams learn together, so your whole school speaks with one confident voice.",
    outcomes: [
      "Elevate your school's brand, image and positive media profile",
      "Build deeper trust with parents, staff and the wider school community",
      "Manage negative issues effectively and turn challenges into opportunities",
      "Be prepared for, and confidently navigate, any major issue or crisis",
      "Protect and strengthen your school's reputation across every channel",
    ],
    primaryCta: { label: "Enrol your school", useCheckoutUrl: true },
    secondaryCta: { label: "Download program outline", href: "/downloads/schools-program-outline.pdf" },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/schools/schools-hero-portrait.jpg",
    portraitCallout: {
      eyebrow: "Trusted by",
      title: <>Australia's leading independent, faith-based and diocesan schools</>,
      sub: "Powered by CRC Public Relations, with 25+ years in the sector",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian school leadership teams",
        "Endorsed by school associations across Australia",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "Leadership, comms and crisis staff" },
    { icon: ShieldCheck, title: "Crisis Ready\u00AE included", sub: "Melissa Agnes module built in" },
    { icon: Award, title: "Certificate of completion", sub: "Recognised industry training" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What's included" },
    { id: "structure", label: "12-month plan" },
    { id: "instructors", label: "Presenters" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading:
      "Affordable PR training, resources and support that enables your whole school team",
    paragraphs: [
      "The My PR Partner Schools Program is a 12-month online training program designed for busy Australian school professionals. Each team member learns at a time that suits them, and content is built with the full range of school roles in mind, so your whole team shares the same language and supports each other when it matters most.",
      "Built by CRC Public Relations, this is the distilled version of 25+ years of sitting beside Australian schools through their biggest PR moments, from proud media wins to the toughest allegations, governance challenges and tragedies no school wants to face.",
    ],
    keyLearningsTitle: "Why school leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across principals, exec, comms and teaching staff",
      "A ready-to-use library of resources, templates and checklists",
      "Expert support from real Australian school PR consultants, not academics",
      "Practical crisis-ready frameworks you can deploy the same day",
      "Guest presenters across law, safeguarding, media and social media",
      "Monthly interactive Q&A for your specific school circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Training, resources and support, every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to build trust, handle issues and stand confidently in front of parents, staff, media and community.",
    tiles: [
      {
        icon: MonitorPlay,
        title: "Training video + workbook",
        body:
          "A new training module each month, with a workbook designed for team discussion. Built to go deeper over time, not wider and shallower.",
      },
      {
        icon: FileText,
        title: "Practical resource",
        body:
          "A downloadable tool every month: checklists, templates, policies and playbooks you can adapt to your school the same afternoon.",
      },
      {
        icon: MessageSquare,
        title: "Fortnightly Spotlight email",
        body:
          "Short, sharp, timely insights to keep the ideas alive between modules, including live examples from Australian schools.",
      },
      {
        icon: HelpingHand,
        title: "Interactive Q&A",
        body:
          "Bring your specific school circumstances to a monthly live Q&A with Lyall and the expert panel. Real advice for your real situations.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "12-month plan",
    heading: "Your month-by-month path, designed to go deeper over time",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, a fortnightly Spotlight email and an interactive Q&A. Below is the 12-month path your team follows, grouped into four quarterly phases.",
    groups: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        count: "Build the mindset and spot the risks",
        items: [
          "Month 1 \u00B7 Having a PR mindset: why communication builds trust every single time",
          "Month 1 Resource: Communications tips for all staff, including teachers",
          "Month 2 \u00B7 Understanding vulnerabilities: spotting your school's \"sliding doors\" moments before they escalate",
          "Month 2 Resource: The essential reputation checklist for schools",
          "Month 3 \u00B7 How to deal with allegations, with Tim Sterne (Basalt Solutions)",
          "Month 3 Resource: Allegation-handling framework from Basalt Solutions",
        ],
      },
      {
        label: "Phase 2: Brand, media and governance (Months 4 to 6)",
        count: "Get on the front foot",
        items: [
          "Month 4 \u00B7 Elevate your school brand: turn public interest into free positive publicity",
          "Month 4 Resource: Template media releases for common school stories",
          "Month 5 \u00B7 Handling media enquiries and interest: protect your school when the media comes knocking",
          "Month 5 Resource: Template school media policy",
          "Month 6 \u00B7 School board and governance risks, with Tim Whincop (Vocare Law)",
          "Month 6 Resource: Governance and reputation risk guide (Vocare Law)",
        ],
      },
      {
        label: "Phase 3: Crisis-ready (Months 7 to 9)",
        count: "Ready for the hardest days",
        items: [
          "Month 7 \u00B7 Dealing with tragedy: Lyall in conversation with Dan Brown, Principal of Emmanuel College",
          "Month 7 Resource: Checklist to navigate tragic events",
          "Month 8 \u00B7 Being crisis ready: the plan, the team, the templates",
          "Month 8 Resource: Basic school crisis plan template",
          "Month 9 \u00B7 Doing social media well, with a specialist social media presenter",
          "Month 9 Resource: School social media tips and responses library",
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        count: "Sharpen and apply",
        items: [
          "Month 10 \u00B7 Hot button issues and Crisis Ready\u00AE with Melissa Agnes (Crisis Ready Institute, USA)",
          "Month 10 Resource: Crisis Ready\u00AE school-focused toolkit",
          "Month 11 \u00B7 Q&A month: the biggest questions and scenarios from program participants",
          "Month 11 Resource: Best-practice recap document from the year",
          "Month 12 \u00B7 Media training for your spokespeople: the art of a great school interview",
          "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "A tailored program exclusively for school leadership teams",
    intro:
      "Your whole leadership team learns together, so everyone speaks with one voice in high-stakes moments and no one carries the reputation load alone.",
    items: [
      {
        image: "/images/schools/schools-persona-principal.jpg",
        icon: GraduationCap,
        title: "Principals and executive leaders",
        body:
          "Lead your school community with confidence, from day-to-day trust building to the hardest headlines you'll ever face.",
      },
      {
        image: "/images/schools/schools-persona-comms.jpg",
        icon: Briefcase,
        title: "Communications and marketing teams",
        body:
          "Turn content, channels and relationships into measurable gains in enrolments, reputation and community trust.",
      },
      {
        image: "/images/schools/schools-persona-board.jpg",
        icon: Building2,
        title: "School boards and governance leads",
        body:
          "Understand your reputation risk, your legal exposure and your role as the school's ultimate trust holders.",
      },
      {
        image: "/images/schools/schools-persona-crisis.jpg",
        icon: ShieldAlert,
        title: "Crisis response and safeguarding staff",
        body:
          "Be ready for allegations, incidents and media interest with plans, checklists and frameworks built for schools.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your presenters",
    heading: "Learn from Australia's leading schools PR and education specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a panel of guest experts who each lead the month covering their specialty.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25-year PR career spanning six continents. Lyall has guided Australian schools, charities, associations, businesses and governments through crisis moments and reputation-building campaigns for over 25 years.",
      },
      {
        image: "/images/instructors/tim-sterne.png",
        name: "Tim Sterne",
        title: "Month 3 \u00B7 Director, Basalt Solutions",
        bio:
          "Former teacher and police detective. Tim is an independent ethics and integrity specialist for Australian schools, and one of the country's leading voices on handling allegations with due process and minimised reputational risk.",
      },
      {
        image: "/images/schools/schools-persona-board.jpg",
        name: "Tim Whincop",
        title: "Month 6 \u00B7 Director, Vocare Law",
        bio:
          "School governance and education law specialist. Tim leads the Month 6 session on school board and governance risks, drawing on years of advising Australian independent and faith-based schools.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Month 10 \u00B7 Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia.
          </>
        ),
      },
    ],
    footnote:
      "Plus conversations with serving school principals, a specialist social media presenter, and a rotating panel of 10+ Australian PR, legal and safeguarding experts across the year.",
  },

  testimonials: {
    eyebrow: "What Australian schools and sector leaders say",
    heading: "Built on 25+ years of real work with Australian schools",
    items: [
      {
        quote:
          "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
        name: "Vanessa Cheng",
        title: "Executive Officer",
        org: "Australian Association of Christian Schools",
      },
      {
        quote:
          "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
        name: "Peter White AM",
        title: "Managing Director",
        org: "Finance Brokers Association of Australia",
      },
      {
        quote:
          "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
        name: "Hamish Watson",
        title: "Director",
        org: "Cafe 63",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value your school walks away with",
    heading: "Outcomes that matter in the staffroom, the boardroom and the newsroom",
    items: [
      {
        icon: Sparkles,
        title: "Elevate your brand",
        body: "Position your school as the school of choice for future families, without extra advertising spend.",
      },
      {
        icon: Heart,
        title: "Deepen community trust",
        body: "Build a written communications rhythm that earns trust with parents, staff and community every week.",
      },
      {
        icon: Newspaper,
        title: "Own the media moment",
        body: "Turn media interest, good or bad, into a chance to show the best of your school.",
      },
      {
        icon: Scale,
        title: "Reduce governance risk",
        body: "Give your board, principal and legal advisers a shared framework for reputation and governance risk.",
      },
      {
        icon: ShieldCheck,
        title: "Be genuinely crisis ready",
        body: "Leave the year with a tested crisis plan, trained spokespeople and a calm, repeatable response process.",
      },
      {
        icon: Compass,
        title: "Navigate tragedy with care",
        body: "Have a blueprint for the hardest moments no school plans for but must be ready to lead through.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our school?",
        a: "The program is designed for your whole leadership team. Depending on the tier you choose, you can include principals and executive leaders, your communications and marketing team, school board and governance leads, crisis response and safeguarding staff, and teaching staff who contribute to school communications. Month 1 is intentionally shaped so all staff can benefit.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. The monthly Q&A runs live over video and is recorded so anyone who missed it can watch back inside the member portal.",
      },
      {
        q: "How long does enrolment last?",
        a: "Enrolment runs for 12 months from the day your school joins. You keep access to all modules, resources and recordings for the full year. Many schools choose to continue annually so new staff onboard into the same shared PR mindset.",
      },
      {
        q: "What is Month 10's Crisis Ready\u00AE content?",
        a: "Month 10 includes the school-focused Crisis Ready\u00AE content from Melissa Agnes, founder of the Crisis Ready Institute in the United States. My PR Partner is the exclusive Australasian partner of Crisis Ready Institute, so this content is not available through any other Australian provider.",
      },
      {
        q: "What if we want an even deeper dive on crisis?",
        a: "The Schools Program covers everything most schools need, including Crisis Ready\u00AE. If your team wants the deepest crisis training available, with the full Melissa Agnes course and Australian case-study library, we offer the Crisis Masterclass as a separate flagship program. Many schools enrol their principal and board chair in both.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The fortnightly Spotlight email keeps key ideas alive, and the monthly interactive Q&A is where you can bring your school's live situation. When something serious breaks, your team has a clear path to call on the CRC Public Relations consulting team if required.",
      },
      {
        q: "Can our school board see the content?",
        a: "Absolutely. Month 6 is a dedicated governance session with Tim Whincop from Vocare Law, and we actively encourage board members to access the program. Schools on the larger tier get board-level seats included.",
      },
      {
        q: "How is payment handled?",
        a: "Payment is a single annual fee per school, billed through our secure learning platform at checkout. Payment plans are available. You'll receive a tax invoice by email and immediate access to your school dashboard.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We offer a 14-day satisfaction guarantee. If the program is not right for your school, contact our team within 14 days of enrolment for a full refund, no questions asked.",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/schools/schools-sticky-thumb.jpg",
    badge: "For school teams",
    badgeIcon: GraduationCap,
    eyebrow: "Enrol your school",
    price: "$440",
    priceCurrencyNote: "AUD per month",
    pricePlanNote: "Pay annually and save $440",
    tierSelectorLabel: "Choose your level",
    defaultTierId: "support",
    tiers: [
      {
        id: "train",
        label: "Train Level",
        description: "Team training and resources",
        price: "$440",
        priceCurrencyNote: "AUD per month",
        pricePlanNote: "Pay annually and save $440",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly video & audio resources",
          "Weekly Spotlight email",
          "Interactive Q&A",
          "Bonus training and resources",
          "Featured schools video training",
        ],
      },
      {
        id: "support",
        label: "Support Level",
        description: "Training plus on-call PR support",
        price: "$840",
        priceCurrencyNote: "AUD per month",
        pricePlanNote: "Pay annually and save $840",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly video & audio resources",
          "Weekly Spotlight email",
          "Interactive Q&A",
          "Bonus training and resources",
          "Featured schools video training",
        ],
        plusHeading: "Train Level PLUS:",
        plusInclusions: [
          "The essential reputational & vulnerability checklist for schools",
          "Issues & crisis communications planning 'templates and tips' for schools",
          "One hour crisis planning consultation",
          "On-call PR or issues & crisis management assistance (6 hours)",
          "Access to special PR consultancy rates (for extra work if required over and above these inclusions)",
        ],
      },
      {
        id: "partner",
        label: "Partner Level",
        description: "Full PR partnership with media training",
        price: "$1,340",
        priceCurrencyNote: "AUD per month",
        pricePlanNote: "Pay annually and save $1,340",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly video & audio resources",
          "Weekly Spotlight email",
          "Interactive Q&A",
          "Bonus training and resources",
          "Featured schools video training",
        ],
        plusHeading: "Train Level PLUS:",
        plusInclusions: [
          "The essential reputational & vulnerability checklist for schools",
          "Issues & crisis communications planning 'templates and tips' for schools",
          "One hour crisis planning consultation",
          { text: "Personal, ongoing phone, email & Zoom PR support (20 hours)", highlighted: true },
          { text: "Comprehensive, personalised online half-day media training", highlighted: true },
          "Access to special PR consultancy rates (for extra work if required over and above these inclusions)",
        ],
      },
    ],
    primaryCtaLabel: "Enrol your school",
    secondaryCta: {
      label: "Download program outline",
      href: "/downloads/schools-program-outline.pdf",
    },
    inclusionsTitle: "Every enrolment includes",
    inclusions: [
      "12 months full access for your leadership team",
      "12 monthly training videos and team workbooks",
      "12 monthly practical resources and templates",
      "Fortnightly Spotlight email for your school",
      "Monthly interactive Q&A with Lyall and the expert panel",
      "Crisis Ready\u00AE content with Melissa Agnes (Month 10)",
      "Guest-led modules with Tim Sterne and Tim Whincop",
      "On-call spokesperson media training (Month 12)",
      "Certificate of completion for participating staff",
    ],
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our schools team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We built the Schools Program because too many Australian schools carry the reputation load alone. A principal should not be the only person in the building who knows what to say when the phone rings at 7am and a journalist is on the other end.",
      "Since 2010, CRC Public Relations has walked with Australian schools through their proudest moments and their hardest ones. This program is that experience, distilled into monthly training your whole team can use, so every leader, every comms officer and every teacher is pulling in the same direction.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Multi-school and diocese enrolments",
    badgeIcon: Users,
    heading: "Train every school in your group under one enrolment",
    body:
      "We work with dioceses, independent school groups and school associations on multi-school enrolments. Bulk rates, shared resources and an optional tabletop exercise facilitated by CRC Public Relations are all on the table.",
    bullets: [
      "Discounted per-school pricing across a group",
      "Shared dashboard across all participating schools",
      "Optional sector-wide tabletop exercise with CRC Public Relations",
      "Sector-specific onboarding with the My PR Partner team",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/schools/schools-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your principal and board chair",
    body:
      "The Schools Program covers Crisis Ready\u00AE at Month 10. If you want the full 12-month flagship program with every Crisis Ready\u00AE module, the Australian case-study library and direct access to Melissa Agnes, enrol your principal and board chair in the Crisis Masterclass alongside your school program.",
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
    eyebrow: "For Australian school leadership teams",
    eyebrowIcon: GraduationCap,
    heading: "Give your whole school team one confident voice this year",
    body:
      "Enrol your school today and start the 12-month program that has helped Australian independent, faith-based and diocesan schools build trust, protect reputation and lead through the hardest moments.",
    primaryCtaLabel: "Enrol your school",
    secondaryCta: { label: "Talk to our schools team", href: "/contact" },
    footnote: "14-day satisfaction guarantee. Powered by CRC Public Relations.",
    bgImage: "/images/schools/schools-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Schools Program",
    priceShort: "From $440 AUD/mo",
    ctaLabel: "Enrol your school",
  },
};
