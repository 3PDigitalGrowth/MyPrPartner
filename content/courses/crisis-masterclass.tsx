import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ClipboardCheck,
  Clock,
  FileText,
  Megaphone,
  MessageSquare,
  MonitorPlay,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { CourseContent } from "@/components/course-page/types";

const SITE = "https://myprpartner.com";
const PAGE_PATH = "/crisis-masterclass";
const HERO_IMAGE = "/images/crisis-masterclass/hero-bg-crisis.jpg";

const CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_KAJABI_CRISIS_CHECKOUT_URL ||
  "https://courses.myprpartner.com/offers/6vzjYRfU/checkout";

export const crisisMasterclassContent: CourseContent = {
  slug: "crisis-masterclass",

  seo: {
    metaTitle: "Crisis Management Online Course | Crisis Masterclass | My PR Partner",
    metaDescription:
      "Australia's premier crisis communications online course and 12-month online program. Learn from Melissa Agnes (Crisis Ready Institute) and CRC Public Relations experts. Built for PR professionals, business leaders, charity executives and school leaders.",
    canonicalUrl: `${SITE}${PAGE_PATH}`,
    ogImage: HERO_IMAGE,
    twitterTitle: "Crisis Masterclass | My PR Partner",
    twitterDescription:
      "Australia's premier crisis communications online course and program, powered by CRC Public Relations.",
    courseWorkload: "PT12M",
  },

  schema: {
    schemaName: "Crisis Masterclass",
    schemaDescription:
      "Australia's premier crisis communications online course. A 12-month expert-led online program featuring the Crisis Ready\u00AE course with Melissa Agnes, plus Australian case studies, templates and ongoing support from CRC Public Relations.",
    providerName: "My PR Partner",
    providerUrl: SITE,
    instructors: [
      {
        name: "Lyall Mercer",
        description:
          "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations. 25+ years in crisis and corporate PR.",
      },
      {
        name: "Melissa Agnes",
        description:
          "Founder, Crisis Ready Institute (USA). Globally recognised authority on crisis communication and crisis leadership.",
      },
    ],
  },

  checkout: {
    baseUrl: CHECKOUT_BASE_URL,
    utmMedium: "crisis-masterclass",
    utmCampaign: "enrol",
  },

  hero: {
    eyebrow: "Flagship online program, powered by CRC Public Relations",
    eyebrowIcon: ShieldCheck,
    headline: "Crisis Masterclass",
    tagline: "Australia's premier crisis communications online course and 12-month program",
    intro:
      "Built for PR and communications professionals, business and not-for-profit leaders and managers, media spokespeople, marketing and HR professionals, and all who need to lead with clarity when a crisis hits.",
    outcomes: [
      "Become the crisis leader who resonates and connects with those you are leading",
      "Overcome common (often seemingly impossible) crisis communication challenges",
      "Learn the major hindrances, and how to gain more buy-in and support from your team",
      "Access 12 months of personal interaction with world-leading crisis communications experts",
    ],
    primaryCta: { label: "Enrol now", useCheckoutUrl: true },
    secondaryCta: { label: "Download course outline", href: "/downloads/crisis-masterclass-outline.pdf" },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/crisis-masterclass/hero-portrait-crisis.jpg",
    portraitCallout: {
      eyebrow: "Featuring",
      title: (
        <>
          The world-renowned Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> course from the Crisis Ready Institute
        </>
      ),
      sub: "Exclusive to My PR Partner in Australasia",
    },
    trustStrip: {
      poweredByCrcLogo: true,
      items: ["In partnership with Crisis Ready Institute (USA)", "Australian owned and delivered"],
    },
  },

  statBar: [
    { icon: MonitorPlay, title: "100% online", sub: "Learn anywhere in Australasia" },
    { icon: Clock, title: "12-month access", sub: "Go at your own pace" },
    { icon: Users, title: "Expert trainers", sub: "Australian and international" },
    { icon: ShieldCheck, title: "Exclusive and unique", sub: "Taught nowhere else" },
    { icon: Award, title: "Certificate of completion", sub: "Endorsed by CRC Public Relations" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What you'll get" },
    { id: "structure", label: "Course structure" },
    { id: "instructors", label: "Instructors" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading: "Become your organisation's trusted crisis communications leader",
    paragraphs: [
      "Don\u2019t expect the usual. This course doesn\u2019t build plans \u2013 it builds YOU.",
      "Crisis Masterclass is a 12-month online course built for Australian organisations that can't afford to get crisis communications wrong. Whether you are a communications professional, business leader or manager, media spokesperson, or are involved with marketing, HR or legal and support your company or clients in managing a crisis, this program gives you the practical skills, formulas and expert guidance to handle any reputation threat with confidence.",
      <>
        The program blends CRC Public Relations' 20+ years of Australian crisis consulting experience with the globally recognised Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> methodology from Crisis Ready Institute CEO Melissa Agnes, and is available exclusively through My PR Partner in Australasia. You'll learn not just how to develop the right plan, but how to lead and connect with those who are most important during an issue or crisis, and you'll get ongoing support from our expert panel.
      </>,
    ],
    keyLearningsTitle: "Key learnings in this online course",
    keyLearnings: [
      "How to take the right action, with the right communication, in the right timeline",
      "A messaging framework for public-facing communication that centres truth, empathy, and strategic clarity",
      "How to meet stakeholders in the emotional landscape of a crisis and guide them toward clarity and trust",
      "Identify high-risk scenarios and take decisive action before escalation becomes unavoidable",
      "Overcome the five Crisis Ready\u00AE hindrances that stop you and others from being effective",
      "Align leadership, legal, HR, and comms functions to speak with one coherent, values-based voice",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What you'll get",
    heading: "A high-impact online program, not a passive video library",
    intro:
      "You don\u2019t just learn, you experience! Every session is rich with exercises and offers workbooks and additional resources to support you.",
    tiles: [
      {
        icon: ShieldCheck,
        title: "Exclusive Crisis Ready\u00AE 12-month course presented by Melissa Agnes",
        body:
          "Each month you\u2019ll receive a comprehensive video session exclusively tailored to the Australasian region. This course is rich with exercises, workbooks, additional resources and \u201Chomework\u201D. You don\u2019t just learn, you experience!",
      },
      {
        icon: MonitorPlay,
        title: "Video resources from My PR Partner crisis experts",
        body:
          "Powerful and practical \u2018reputation and crisis specific\u2019 training resources, presented by crisis expert and My PR Partner co-founder Lyall Mercer, other experts in reputation management, crisis communications, and specialists in areas of vulnerability.",
      },
      {
        icon: MessageSquare,
        title: "In-depth discussions & Q&A",
        body:
          "Discussions with Melissa Agnes and Lyall Mercer and opportunities to submit questions every month.",
      },
      {
        icon: FileText,
        title: "\u201CSpotlight\u201D email resource",
        body:
          "Regular email resources, providing practical training, tips and advice covering reputation management and crisis communications; designed to support you on your journey.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "Crisis Ready course for public-facing crisis readiness, with Melissa Agnes",
    heading: "Your 12-month online program breakdown",
    intro:
      "Go at your own pace. Content unlocks progressively with regular updates. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    modules: [
      {
        month: 1,
        title: "Redefining crisis readiness",
        note: "Mindset before methodology \u2014 shift from reactive to proactive and lead from presence, not panic.",
      },
      {
        month: 2,
        title: "Issue vs. crisis: getting the distinction right",
        note: "Distinguish issues from crises, learn the six thresholds of impact and calibrate your response.",
      },
      {
        month: 3,
        title: "Emotion and escalation",
        note: "You can\u2019t beat emotion with logic \u2014 meet stakeholders in the emotional landscape of a crisis and guide them toward trust and resolution.",
      },
      {
        month: 4,
        title: "Owning accountability without fuelling liability",
        note: "The art of the public apology \u2014 high-integrity communication that honours stakeholders and strengthens trust.",
      },
      {
        month: 5,
        title: "Layering and long-term trust",
        note: "Strategic communication in cascading events \u2014 anticipate next steps, maintain transparency and foster lasting trust.",
      },
      {
        month: 6,
        title: "Governing the message internally and externally",
        note: "Align leadership, legal, HR and comms to speak with one coherent, values-based voice.",
      },
      {
        month: 7,
        title: "Timelines of response & owning your narrative",
        note: "Tactical frameworks for proactive, strategically reactive, and layered crisis responses.",
      },
      {
        month: 8,
        title: "Navigating the modern noise: AI, disinformation, misinformation & deepfakes",
        note: "Own truth in an age of manufactured doubt \u2014 monitor, verify and respond to AI-generated content and coordinated disinformation.",
      },
      {
        month: 9,
        title: "Building your crisis response program",
        note: "From insight to infrastructure \u2014 scenario playbooks, activation criteria, roles, workflows and a template library.",
      },
      {
        month: 10,
        title: "Moving through resistance: the five Crisis Ready\u00AE hindrances",
        note: "Recognise and neutralise the five forces that derail capable teams in a crisis.",
      },
      {
        month: 11,
        title: "Post-crisis: from surviving to strengthening",
        note: "Rebuild brand equity and leadership credibility \u2014 turn crisis into your next credibility milestone.",
      },
      {
        month: 12,
        title: "Capstone tabletop simulation",
        note: "Practice. Pressure-test. Embody. A facilitated, real-time drill applying every framework from the year.",
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "Built for Australian leaders and communicators who carry the reputation load",
    intro:
      "PR and communications professionals, business leaders, spokespeople and all in your team who care about protecting your people, your brand and your community.",
    items: [
      {
        image: "/images/crisis-masterclass/persona-pr-pro.jpg",
        icon: Briefcase,
        title: "PR and communications professionals",
        body:
          "Take your crisis communication and crisis leadership skills to new heights and hone your skills.",
      },
      {
        image: "/images/crisis-masterclass/persona-executive.jpg",
        icon: Building2,
        title: "Business leaders and managers",
        body:
          "Understand exactly what to do, and not do, when your brand, team or customers are under pressure.",
      },
      {
        image: "/images/crisiscoursecard.png",
        icon: Radio,
        title: "Media spokespeople",
        body:
          "Learn not just how to communicate, but to connect with those most important in high-stakes moments.",
      },
      {
        image: "/images/crisis-masterclass/persona-school-leader.jpg",
        icon: Users,
        title: "Marketing, HR and legal teams",
        body:
          "Learn your role in handling a crisis, and how to all speak with one coherent, values-based voice.",
      },
    ],
  },

  instructors: {
    eyebrow: "Your instructors",
    heading: "Learn from Australia's and the world's leading crisis specialists",
    intro:
      "Every module is developed and delivered by practising consultants who live this work every day, not academics.",
    items: [
      {
        image: "/images/instructors/lyall-mercer.png",
        name: "Lyall Mercer",
        title: "Co-founder, My PR Partner | Lead Strategist, CRC Public Relations",
        bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has consulted to national and international companies, governments, executives and industry leaders in crisis communications and reputation management.",
      },
      {
        image: "/images/instructors/melissa-agnes.png",
        name: "Melissa Agnes",
        title: "Founder, Crisis Ready Institute (USA)",
        bio: (
          <>
            Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Model and best-selling author. Presenting exclusively through My PR Partner in Australasia.
          </>
        ),
      },
    ],
    footnote:
      "Plus other expert trainers from Australia covering specialist areas.",
  },

  testimonials: {
    eyebrow: "Real results",
    heading: "What former students say about the Crisis Ready course",
    items: [
      {
        quote:
          "Don’t hesitate to sign up for this course. Whether you have years of experience or are just starting out in crisis communications, you will gain insights to help you prevent, prepare for, and respond to any emergency.",
        name: "Anita J. Foster",
        title: "Executive Director Of Communications",
        org: "",
      },
      {
        quote: "Really outstanding and very useful for the day-to-day of a Crisis Management consultant!",
        name: "Miriam Omedes Archanco",
        title: "Founder",
        org: "",
      },
      {
        quote:
          "A very informative and broad selection of topics that narrow down into protecting your brand in a crisis.",
        name: "Chris Derby",
        title: "Chief Marketing Officer",
        org: "",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value you'll walk away with",
    heading: "Strategically, over the 12-month period, you will learn how to:",
    items: [
      {
        icon: ShieldCheck,
        title: "Adopt a mindset",
        body:
          "That transforms crises and challenges into opportunities for growth, evolution, and connection",
      },
      {
        icon: Megaphone,
        title: "Strengthen relationships",
        body:
          "With those who matter most to your brand and business, when it’s most challenging to do so",
      },
      {
        icon: ClipboardCheck,
        title: "Develop communication strategies",
        body:
          "That resonate emotionally, powerfully connecting you with those you are leading (whether internally and or externally)",
      },
      {
        icon: Radio,
        title: "Apply different Crisis Ready® formulas",
        body:
          "To effectively develop your crisis response strategies over the long-term",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Who is the Crisis Masterclass for?",
        a: "The Crisis Masterclass is designed for PR and communications professionals, media spokespeople, business and not-for-profit leaders and managers, and anyone in your organisation who plays a role in crisis communication and issue management needs. It’s also for PR agency teams.",
      },
      {
        q: "Is it really 100% online?",
        a: "Yes. Every module is self-paced online, with a training video, workbook and downloadable resource released monthly. This includes the monthly Q&A.",
      },
      {
        q: "How long does enrolment last?",
        a: "Enrolment runs for 12 months from the day you join. You keep access to all modules, templates, case studies, Q&A recordings and updates (after they are released) until the end of the 12 months. If new Australian case studies or Crisis Ready\u00AE content lands during your year, you get it at no extra cost.",
      },
      {
        q: "What is the Crisis Ready Course and why is it included?",
        a: "Crisis Ready® is the world-leading crisis communication and leadership methodology developed by Melissa Agnes, CEO of the Crisis Ready Institute in the United States. My PR Partner is the exclusive Australasian partner, so your enrolment gives you direct access to her material. The Crisis Masterclass is not available through any other Australian provider.",
      },
      {
        q: "Can I enrol my team or board?",
        a: "Yes. We offer group enrolment rates for organisations of any size. Get in touch and our team will put together a plan that fits.",
      },
      {
        q: "What does the certificate cover?",
        a: "On completion, you receive a My PR Partner Crisis Masterclass certificate of completion, endorsed by CRC Public Relations. It acknowledges that you have completed the full 12-month program, including Crisis Ready\u00AE modules. The certificate is not a nationally accredited or formally recognised industry training qualification.",
      },
      {
        q: "How is payment handled?",
        a: "Payment is by annual subscription that can be paid in monthly instalments or annually. Payment is billed through our secure learning platform at checkout. You'll receive a tax invoice by email and immediate access to your course dashboard. Annual subscribers receive one month free and have the option of paying by invoice.",
      },
    ],
  },

  sidebar: {
    thumbImage: "/images/crisis-masterclass/sticky-card-thumb.jpg",
    badge: "Flagship program",
    badgeIcon: ShieldCheck,
    eyebrow: "Enrol today",
    price: "$340 p/m",
    priceCurrencyNote: "AUD, incl. GST",
    pricePlanNote: "Annual plan available - pay 11 months, get all 12.",
    primaryCtaLabel: "Enrol now",
    secondaryCta: { label: "Download course outline", href: "/downloads/crisis-masterclass-outline.pdf" },
    inclusionsTitle: "What's included",
    inclusions: [
      "12 months full access to all modules",
      "The exclusive Crisis Ready\u00AE course with Melissa Agnes",
      "Training resources from My PR Partner experts",
      "Monthly Q&A",
      "Practical resources",
      "Bonus content",
      "Certificate of completion",
    ],
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the Crisis Masterclass leaders",
    heading: "A message from Lyall and Melissa",
    images: [
      "/images/expert-lyall-real.png",
      { src: "/images/melissa-agnes-stage.webp", className: "object-top" },
    ],
    imageAlt: "Melissa Agnes and Lyall Mercer, co-founders of My PR Partner",
    paragraphs: [
      <>
        I’ve always been disappointed with the lack of specialist, world-class crisis communications training available in Australasia. So we created the My PR Partner Crisis Masterclass, and as part of the masterclass we are thrilled to exclusively offer the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> course with an Aussie twist, presented by Melissa Agnes. Melissa is a such a captivating communicator, and this course will not just upskill you, but take you to deeper levels of learning and transform your mindset about crisis leadership – whatever your level of experience.
        <span className="mt-4 block font-medium">- Lyall Mercer</span>
      </>,

      <>
        This course is designed to take your crisis communication and crisis leadership skills to soaring new heights. Over the next 12 months you will learn crisis communication best practices that stem from the Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> Team’s deep pool of expertise — and that are not taught anywhere else, giving you a strategic competitive edge. If you have a passion for crisis comms and/or leadership, and if you’re interested in taking your skills to the next level, then you’re in the right place.
        <span className="mt-4 block font-medium">- Melissa Agnes</span>
      </>,
    ],
    signoff: "Lyall Mercer and Melissa Agnes, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Group and corporate enrolments",
    badgeIcon: Users,
    heading: "Train your whole leadership team at a group rate",
    body:
      "Get your executive team, board, comms team or HR, marketing and legal on the same page with group enrolment pricing.",
    bullets: [],
    cta: { label: "Enquire about group enrolment", href: "/contact" },
    ctaSubLabel: "We'll reply within one business day.",
    bgImage: "/images/crisis-masterclass/group-enrolment-bg.jpg",
  },

  finalCta: {
    eyebrow: "Australia's premier crisis communications online program",
    eyebrowIcon: ShieldCheck,
    heading: "Don't wait until you're already in a crisis",
    body:
      "Enrol today and start building the skills, plans and confidence to lead your organisation through whatever comes next.",
    primaryCtaLabel: "Enrol now",
    secondaryCta: { label: "Talk to our team", href: "/contact" },
    footnote: "Powered by CRC Public Relations and Crisis Ready Institute.",
    bgImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Crisis Masterclass",
    priceShort: "From $340 p/m AUD",
    ctaLabel: "Enrol now",
  },
};
