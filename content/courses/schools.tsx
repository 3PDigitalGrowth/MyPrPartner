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
      "A 12-month online PR and crisis training program for Australian school leadership teams. Principals, executive leaders, communications staff and crisis response teams learn together. Built by CRC Public Relations with 15+ years of schools experience.",
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
      title: <>Australia&apos;s leading independent and faith-based schools.</>,
      sub: "Powered by CRC Public Relations, with 15+ years in the sector",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: [
        "Built for Australian school leadership teams",
      ],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn at your own pace" },
    { icon: Clock, title: "12 monthly modules", sub: "Training + resource + Q&A" },
    { icon: Users, title: "Whole-team program", sub: "Leadership, comms and crisis staff" },
    { icon: ShieldCheck, title: "Optional PR support", sub: "Security and peace of mind" },
    { icon: Award, title: "School experts", sub: "Experienced and specialised" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What's included" },
    { id: "structure", label: "12-month plan" },
    { id: "instructors", label: "Presenters" },
    { id: "compare", label: "Compare plans" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading:
      "Affordable PR training, resources and support that empowers your whole school team",
    paragraphs: [
      "The My PR Partner Schools Program is a 12-month online training program designed for busy Australian school professionals. Each team member learns at a time that suits them, and content is built with the full range of school roles in mind, so your whole team shares the same language and supports each other when it matters most.",
      "Built by CRC Public Relations, this is the distilled version of 15+ years of standing beside Australian schools through their biggest PR and reputation moments, from proud media wins to the toughest allegations, challenges and tragedies no school wants to face.",
    ],
    keyLearningsTitle: "Why school leaders choose this program",
    keyLearnings: [
      "A shared PR mindset across principals, exec, comms and teaching staff",
      "A ready-to-use library of resources, templates and checklists",
      "Expert support from real Australian school PR and specialist consultants, not academics",
      "Practical crisis-ready frameworks you can deploy the same day",
      "Guest presenters across law, investigations, media, social media and crisis",
      "Monthly interactive Q&A for your specific school circumstances",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What's included every month",
    heading: "Training, resources and support, every single month for a year",
    intro:
      "This is not a passive video library. Each month, your entire team gets everything they need to build trust, handle issues and communicate confidently to parents, staff, media and the community.",
    tiles: [
      {
        icon: MonitorPlay,
        title: "Training video + workbook",
        body:
          "A new training module each month, with a workbook designed for team discussion. Built to go deeper over time.",
      },
      {
        icon: FileText,
        title: "Practical resource",
        body:
          "A downloadable tool every month: checklists, templates, policies and playbooks you can adapt to your school the same day.",
      },
      {
        icon: MessageSquare,
        title: "Fortnightly Spotlight email",
        body:
          "Short, sharp, timely insights to keep the ideas alive between modules, including examples from Australian schools.",
      },
      {
        icon: HelpingHand,
        title: "Interactive Q&A",
        body:
          "Bring your specific school circumstances to a monthly Q&A with Lyall and the expert panel. Real advice for your real situations.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "12-month plan",
    heading: "Your month-by-month school program",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, a fortnightly Spotlight email and an interactive Q&A. The 12-month path is grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    groups: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        count: "Build the mindset and spot the risks",
        modules: [
          {
            month: 1,
            title: "Having a PR mindset: Intentional communication that builds ongoing trust",
            resource: "Communications tips for all staff",
          },
          {
            month: 2,
            title:
              "Understanding vulnerabilities: spotting your school's \"sliding doors\" moments before they escalate",
            resource: "The essential reputation checklist for schools",
          },
          {
            month: 3,
            title: "How to deal with allegations, with Tim Sterne (Basalt Solutions)",
            resource: "Resource from Tim Sterne (TBD)",
          },
        ],
      },
      {
        label: "Phase 2: Brand, media and social (Months 4 to 6)",
        count: "Get on the front foot",
        modules: [
          {
            month: 4,
            title:
              "Elevate your school brand: Become the school of choice through free positive publicity",
            resource: "Template media releases",
          },
          {
            month: 5,
            title:
              "Handling media enquiries and interest: protect your school when the media comes knocking",
            resource: "Template media policy",
          },
          {
            month: 6,
            title: "Doing social media well, with a social media specialist expert",
            resource: "Social media tips",
          },
        ],
      },
      {
        label: "Phase 3: Crisis ready (Months 7 to 9)",
        count: "Ready for the hardest days",
        modules: [
          {
            month: 7,
            title:
              "Being crisis ready: Lyall Mercer with input from Melissa Agnes (Crisis Ready Institute)",
            resource: "Crisis communications guide for schools",
          },
          {
            month: 8,
            title: "School board and governance risks, with Tim Whincop (Vocare Law)",
            resource: "Resource from Tim Whincop (TBD)",
          },
          {
            month: 9,
            title: "Dealing with tragedy: Lyall speaks to Dan Brown, Principal of Emmanuel College",
            resource: "Checklist to navigate tragic events",
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
              "Hot button issues: Red flag issues that schools get wrong, and how to get it right",
            resource: "Hot button briefs for independent and faith-based schools",
          },
          {
            month: 11,
            title: "Q&A month: the biggest questions and scenarios from program participants",
          },
          {
            month: 12,
            title: "Media training for your spokespeople: the art of a great school interview",
            note: "On call all year, so your spokespeople are media-ready whenever you need them.",
          },
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "A tailored program exclusively for school leadership and comms teams",
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
    heading: "Learn from Australia's leading school PR and education specialists",
    intro:
      "Lead presenter is Lyall Mercer, supported by a panel of guest experts covering their specialty area of expertise.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has guided Australian schools, charities, associations, businesses and governments through crisis moments and reputation-building campaigns for 25+ years.",
      },
      {
        image: "/images/instructors/tim-sterne.png",
        name: "Tim Sterne",
        title: "Month 3 \u00B7 Director, Basalt Solutions",
        bio:
          "Former teacher and police detective. Tim is an independent ethics and integrity specialist for Australian and New Zealand schools, and a leading voice on handling allegations with due process and minimised reputational risk.",
      },
      {
        image: "/images/instructors/tim-whincop.png",
        name: "Tim Whincop",
        title: "Month 8 \u00B7 Director, Vocare Law",
        bio:
          "School governance and law specialist. Tim leads the Month 8 session on school board and governance risks, drawing on years of advising Australian charities, ministries, and independent and faith-based schools.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Month 7 \u00B7 Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Author and creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model, presenting exclusively through My PR Partner in Australasia.
          </>
        ),
      },
    ],
    footnote:
      "Plus conversations with serving school principals and specialist social media, PR, reputation, legal and safeguarding experts.",
  },

  testimonials: {
    eyebrow: "What Australian schools and sector leaders say",
    heading: "Built on 15+ years of real work with Australian schools",
    items: [
      {
        quote:
          "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
        name: "Executive officer",
        title: "",
        org: "National schools association",
      },
      {
        quote:
          "We have enjoyed a valued partnership with CRC Public Relations for over a decade, which has been instrumental in maintaining Emmanuel College's strong reputation within the community.",
        name: "Dan Brown",
        title: "Principal",
        org: "Emmanuel College",
      },
      {
        quote:
          "Occasionally there may be matters impacting one of our fifteen schools which need to be managed sensitively. We have found it prudent to seek advice from CRC Public Relations who help us communicate effectively.",
        name: "John Lyndon",
        title: "CEO",
        org: "Christian Community Ministries",
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
        body: "Create a communications culture that earns continual trust with parents, staff and the school community.",
      },
      {
        icon: Newspaper,
        title: "Deal with the media confidently",
        body: "Embrace positive opportunities and deal with all media enquiries in a way that protects your reputation.",
      },
      {
        icon: Scale,
        title: "Reduce governance risk",
        body: "Give your board, principal and legal advisers a shared framework for reputation and governance risk.",
      },
      {
        icon: ShieldCheck,
        title: "Be genuinely crisis ready",
        body: "Have a tested crisis communications plan, prepared spokespeople, and team-wide understanding.",
      },
      {
        icon: Compass,
        title: "Navigate issues effectively",
        body: "Lead and succeed through the toughest issues schools face with your reputation protected.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who exactly can access the program at our school?",
        a: "The program is designed for your whole leadership team. You choose who you'd like to be involved each month. This includes principals and executive leaders, your communications and marketing team, school board and governance leads, crisis response and safeguarding staff, and teaching staff who contribute to school communications. The first month is intentionally shaped so all staff can benefit.",
      },
      {
        q: "What ongoing PR support is available to our school?",
        a: "Our Support Level is our most popular and includes on-call PR or issues & crisis assistance. Our Partner Level is for schools who want the security of extra peace of mind, and includes personal, ongoing phone, email & Zoom PR support. Both of these levels also include many other features, extra resources and individual training. See our pricing and plans for details. All PR support is provided by the senior team at CRC Public Relations.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and a downloadable resource released monthly. This includes the monthly Q&A.",
      },
      {
        q: "How long does enrolment last?",
        a: "Enrolment runs for 12 months from the day your school joins. You keep access to all modules, resources and recordings (after they are released) until the end of the 12 months. Many schools choose to continue annually so new staff onboard into the same shared PR mindset. There is also an option to renew for new second year content for those who have completed year one.",
      },
      {
        q: "What if we want an even deeper dive on crisis?",
        a: "The Schools Program covers everything most schools need, however if any of your team wants the deeper, personal crisis leadership available, we offer the crisis masterclass as a separate flagship program. This features the Crisis Ready course with Melissa Agnes, CEO of the Crisis Ready Institute USA as well as other crisis-specific resources. This is personal (not team) training and schools can enrol their principal, board chair, or communications manager in this separately.",
      },
      {
        q: "Do we get support between modules?",
        a: "Yes. The fortnightly Spotlight email keeps key ideas alive, and the monthly interactive Q&A is where you can bring your school's live situation. When something serious breaks, your team has a clear path to call on the CRC Public Relations consulting team if required (available on support levels).",
      },
      {
        q: "Can our school board see the content?",
        a: "Absolutely. Month 8 is a dedicated governance session with Tim Whincop from Vocare Law, and we actively encourage board members to access the program.",
      },
      {
        q: "How is payment handled?",
        a: "Payment is by annual subscription per school that can be paid in monthly instalments or annually. Payment is billed through our secure learning platform at checkout. You'll receive a tax invoice by email and immediate access to your school dashboard. Annual subscribers receive one month free and have the option of paying by invoice.",
      },
      {
        q: "What if the program isn't the right fit for us?",
        a: "We offer a 10 day free trial. Your online payment will not be processed for 10 days and during this time you are able to cancel. If paying annually by invoice you can still cancel within 10 days for a full refund, no questions asked. There is no refund after the 10 days (see T&C for full details).",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/schools/schools-sticky-thumb.jpg",
    badge: "For school teams",
    badgeIcon: GraduationCap,
    eyebrow: "Enrol your school",
    price: "$440",
    priceCurrencyNote: "AUD per month · ex GST",
    pricePlanNote: "Pay annually and save $440",
    tierSelectorLabel: "Choose your level",
    defaultTierId: "train",
    tiers: [
      {
        id: "train",
        label: "Train Level",
        description: "Team training and resources",
        price: "$440",
        priceCurrencyNote: "AUD per month · ex GST",
        pricePlanNote: "Pay annually and save $440",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly training video + workbook",
          "Monthly practical team resource",
          "Spotlight emails",
          "Interactive Q&A",
          "Bonus training and resources",
        ],
      },
      {
        id: "support",
        label: "Support Level",
        description: "Training plus on-call PR support",
        price: "$840",
        priceCurrencyNote: "AUD per month · ex GST",
        pricePlanNote: "Pay annually and save $840",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly training video + workbook",
          "Monthly practical team resource",
          "Spotlight emails",
          "Interactive Q&A",
          "Bonus training and resources",
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
        priceCurrencyNote: "AUD per month · ex GST",
        pricePlanNote: "Pay annually and save $1,340",
        inclusionsTitle: "Inclusions tailored specifically for schools:",
        inclusions: [
          "Monthly training video + workbook",
          "Monthly practical team resource",
          "Spotlight emails",
          "Interactive Q&A",
          "Bonus training and resources",
        ],
        plusHeading: "Train Level PLUS:",
        plusInclusions: [
          "The essential reputational & vulnerability checklist for schools",
          "Issues & crisis communications planning 'templates and tips' for schools",
          "One hour crisis planning consultation",
          "On-call PR or issues & crisis management assistance (6 hours)",
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
      "Crisis Ready\u00AE input from Melissa Agnes (Month 7)",
      "Guest-led modules with Tim Sterne and Tim Whincop",
      "On-call spokesperson media training (Month 12)",
      "Certificate of completion for participating staff",
    ],
    trustBadges: { poweredByCrcLogo: true },
    callbackLinkLabel: "Or request a callback from our schools team",
    callbackHref: "/contact",
  },

  planComparison: {
    eyebrow: "Compare plans",
    heading: "Choose the level of support that fits your school",
    intro:
      "Every level includes the full 12-month training program. Support and Partner add hands-on PR assistance and crisis-readiness from the CRC Public Relations team. Select a plan to load it into the enrolment panel.",
    anchorId: "compare",
    features: [
      { label: "Monthly training video + workbook", tiers: ["train", "support", "partner"] },
      { label: "Monthly practical team resource", tiers: ["train", "support", "partner"] },
      { label: "Spotlight emails", tiers: ["train", "support", "partner"] },
      { label: "Interactive Q&A", tiers: ["train", "support", "partner"] },
      { label: "Bonus training and resources", tiers: ["train", "support", "partner"] },
      {
        label: "The essential reputational & vulnerability checklist for schools",
        tiers: ["support", "partner"],
      },
      {
        label: "Issues & crisis communications planning templates and tips for schools",
        tiers: ["support", "partner"],
      },
      { label: "One hour crisis planning consultation", tiers: ["support", "partner"] },
      { label: "Access to special PR consultancy rates", tiers: ["support", "partner"] },
      {
        label: "On-call PR or issues & crisis management assistance (6 hours)",
        tiers: ["support", "partner"],
      },
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
      "We built the Schools Program because Australian schools \u2013 particularly independent and faith based \u2013 are under more media, public and parent scrutiny than ever before. Most are not equipped to handle challenging issues and communication training isn\u2019t offered to educators. Too many schools fail at communicating during high-stakes moments, are not building trust with their community, and don\u2019t take advantage of positive opportunities to showcase their school in a positive light.",
      "Since 2010, CRC Public Relations has walked with Australian schools through their proudest moments and their hardest ones. This program is that experience, distilled into monthly training your whole team can use, so every leader, every comms professional, and every teacher is working and communicating together.",
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Multi-school enrolments",
    badgeIcon: Users,
    heading: "Train every school in your organisation under one enrolment",
    body:
      "We work with independent schools groups under the same ownership and dioceses on multi-school enrolments. Bulk rates, shared resources and optional training facilitated by CRC Public Relations are all possible.",
    bullets: [
      "Discounted per-school pricing across a group",
      "Tailored training can be discussed",
      "Special PR support pricing negotiable if communications controlled centrally",
      "Individual, customised Q&A possible",
    ],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/schools/schools-group-bg.jpg",
  },

  relatedProgram: {
    eyebrow: "Want to go deeper on crisis?",
    heading: "Add the Crisis Masterclass for your principal and board chair",
    body:
      "The Schools Program includes a module featuring part of the Crisis Ready course. If you\u2019d like the full 12-month flagship program with every Crisis Ready\u00AE module taught by Melissa Agnes, CEO of the Crisis Ready Institute USA (tailored for Australia), and other training from Lyall Mercer, enrol your principal and board chair in the Crisis Masterclass alongside your school program.",
    thumbImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
    featureBullets: [
      "Full 12-month Crisis Masterclass",
      "Full Crisis Ready\u00AE course with Melissa Agnes",
      "Monthly Q&A",
      "Detailed workbooks and resources.",
    ],
    primaryCta: { label: "Learn about the My PR Partner Crisis Masterclass", href: "/crisis-masterclass" },
    secondaryCta: { label: "Talk to our team", href: "/contact" },
  },

  finalCta: {
    eyebrow: "For Australian school leadership teams",
    eyebrowIcon: GraduationCap,
    heading: "Give your whole school team one confident voice this year",
    body:
      "Enrol your school today and start the 12-month program that has helped Australian independent and faith-based schools build trust, protect reputation and lead through the hardest moments.",
    primaryCtaLabel: "Enrol your school",
    secondaryCta: { label: "Talk to our schools team", href: "/contact" },
    footnote: "10 day free trial. Powered by CRC Public Relations.",
    bgImage: "/images/schools/schools-final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Schools Program",
    priceShort: "From $440 AUD/mo",
    ctaLabel: "Enrol your school",
  },
};
