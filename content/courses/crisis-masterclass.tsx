import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ClipboardCheck,
  Clock,
  FileText,
  GraduationCap,
  HandHeart,
  Megaphone,
  MessageSquare,
  MonitorPlay,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { CourseContent } from "@/components/course-page/types";
import { PLACEHOLDER_CHECKOUT_URL } from "@/lib/checkout";

const SITE = "https://myprpartner.com";
const PAGE_PATH = "/crisis-masterclass";
const HERO_IMAGE = "/images/crisis-masterclass/hero-bg-crisis.jpg";

const CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_KAJABI_CRISIS_CHECKOUT_URL || PLACEHOLDER_CHECKOUT_URL;

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
      "Built for PR and communications professionals, business owners, charity and not-for-profit leaders, school principals and industry associations who need to lead with clarity when a crisis hits.",
    outcomes: [
      "Build, test and lead your organisation's crisis response with confidence",
      "Apply the globally recognised Crisis Ready\u00AE methodology from Melissa Agnes",
      "Work through real Australian case studies, templates and workbooks",
      "Access a 12-month expert panel of Australia's leading PR and crisis specialists",
    ],
    primaryCta: { label: "Enrol now", useCheckoutUrl: true },
    secondaryCta: { label: "Download course outline", href: "/downloads/crisis-masterclass-outline.pdf" },
    bgImage: HERO_IMAGE,
    portraitImage: "/images/crisis-masterclass/hero-portrait-crisis.jpg",
    portraitCallout: {
      eyebrow: "Featuring",
      title: (
        <>
          The Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> course with Melissa Agnes
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
    { icon: MonitorPlay, title: "100% online", sub: "Learn anywhere in Australia" },
    { icon: Clock, title: "12-month access", sub: "Go at your own pace" },
    { icon: Users, title: "10+ expert trainers", sub: "Australian and international" },
    { icon: ShieldCheck, title: "Crisis Ready\u00AE inclusive", sub: "Melissa Agnes methodology" },
    { icon: Award, title: "Certificate of completion", sub: "Recognised industry training" },
  ],

  anchors: [
    { id: "overview", label: "Overview" },
    { id: "what-youll-learn", label: "What you'll learn" },
    { id: "structure", label: "Course structure" },
    { id: "instructors", label: "Instructors" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
  ],

  overview: {
    eyebrow: "Overview",
    heading: "Become your organisation's trusted crisis communications leader",
    paragraphs: [
      "Crisis Masterclass is a 12-month online course and program built for Australian organisations that can't afford to get crisis communications wrong. Whether you lead PR for a growing business, sit on a charity board, run an industry association, or manage reputation for a school community, this program gives you the practical skills, templates and expert guidance to handle any reputation threat with confidence.",
      <>
        The program blends CRC Public Relations' 25+ years of Australian crisis consulting experience with the globally recognised Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> methodology from Melissa Agnes, available exclusively through My PR Partner in Australasia. You'll work through Australian case studies, build your own crisis plan, and get ongoing support from our expert panel.
      </>,
    ],
    keyLearningsTitle: "Key learnings in this online course",
    keyLearnings: [
      "The modern Australian crisis landscape: what's changed and why readiness matters",
      "How to detect and assess issues before they escalate",
      "Practical crisis communications planning, built around your organisation",
      "Media response, holding statements and dealing with hostile journalists",
      "Managing stakeholder, staff and community communications under pressure",
      "Leading a post-crisis recovery that rebuilds trust and reputation",
    ],
  },

  whatYoullLearn: {
    eyebrow: "What you'll get",
    heading: "A high-impact online program, not a passive video library",
    intro:
      "Every element is designed to move you from \"I hope we never have a crisis\" to \"we've got this, let's lead.\"",
    tiles: [
      {
        icon: BookOpen,
        title: "Real case study scenarios",
        body:
          "Work through real Australian crises across education, business, not-for-profit and association sectors. See what went right, what went wrong, and what you'd do differently.",
      },
      {
        icon: MessageSquare,
        title: "In-depth discussions",
        body:
          "Live Q&A sessions and a members-only community where you can workshop your own scenarios with Lyall Mercer, Melissa Agnes and the expert panel.",
      },
      {
        icon: FileText,
        title: "Templates and resources",
        body:
          "Download crisis plans, holding statements, media response guides, stakeholder maps and social media playbooks built by practising Australian PR consultants.",
      },
      {
        icon: Award,
        title: "Certificate of completion",
        body:
          "Earn a My PR Partner Crisis Masterclass certificate when you complete the program, backed by CRC Public Relations and Crisis Ready Institute.",
      },
    ],
  },

  courseStructure: {
    eyebrow: "Course structure",
    heading: "Your 12-month online program breakdown",
    intro:
      "Go at your own pace. Content unlocks progressively, with new Australian case studies and expert spotlights added across the year so the program grows with you.",
    groups: [
      {
        label: "Core crisis modules",
        count: "6 modules",
        items: [
          "The modern Australian crisis landscape",
          "Issue detection and early warning systems",
          "Building your crisis communications plan",
          "Media response and the 24-hour news cycle",
          "Stakeholder, staff and community communications",
          "Recovery, reputation rebuilding and lessons learned",
        ],
      },
      {
        label: "The Crisis Ready\u00AE program with Melissa Agnes",
        count: "Exclusive in Australasia",
        items: [
          "The Crisis Ready\u00AE Model: a proactive framework",
          "Risk culture and stakeholder relationships",
          "Leading your team through high-stakes moments",
          "Social media, misinformation and digital crises",
        ],
      },
      {
        label: "Australian case study library",
        count: "Ongoing additions",
        items: [
          "Education sector: managing school community crises",
          "Business and corporate: product, people and leadership issues",
          "Charity and not-for-profit: donor trust and safeguarding",
          "Industry associations: member and regulatory challenges",
        ],
      },
      {
        label: "Templates, workbooks and Q&A",
        count: "Downloadable and ongoing",
        items: [
          "Crisis plan template with Australian guidance",
          "Holding statements and media response guides",
          "Stakeholder mapping and communications matrix",
          "Live monthly Q&A with the expert panel",
        ],
      },
    ],
  },

  personas: {
    eyebrow: "Who it's for",
    heading: "Built for Australian leaders who carry the reputation load",
    intro:
      "You don't need a PR background. You just need to care about protecting your people, your brand and your community.",
    items: [
      {
        image: "/images/crisis-masterclass/persona-pr-pro.jpg",
        icon: Briefcase,
        title: "PR and communications professionals",
        body:
          "Lift your crisis capability, add Crisis Ready\u00AE to your toolkit and bring frameworks you can use on day one.",
      },
      {
        image: "/images/crisis-masterclass/persona-executive.jpg",
        icon: Building2,
        title: "Business owners and executives",
        body:
          "Understand exactly what to do, and not do, when your brand, team or customers are under pressure.",
      },
      {
        image: "/images/crisis-masterclass/persona-nfp-leader.jpg",
        icon: HandHeart,
        title: "Charity and not-for-profit leaders",
        body:
          "Protect donor trust, safeguarding commitments and community relationships with plans that fit your sector.",
      },
      {
        image: "/images/crisis-masterclass/persona-school-leader.jpg",
        icon: GraduationCap,
        title: "School and association leaders",
        body:
          "Lead communications with parents, members, regulators and media when the stakes are at their highest.",
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
        bio: "Former journalist with a 25-year PR career spanning six continents. Lyall has consulted to national and international companies, governments, executives and industry leaders in crisis communications and reputation management.",
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
      "Plus a rotating panel of 10+ expert trainers across Australia covering media training, stakeholder engagement, legal and regulatory communications, and digital and social media crisis.",
  },

  testimonials: {
    eyebrow: "Real results",
    heading: "What Australian organisations say about working with us",
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
          "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
        name: "Hamish Watson",
        title: "Director",
        org: "Cafe 63",
      },
      {
        quote:
          "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
        name: "Vanessa Cheng",
        title: "Executive Officer",
        org: "Australian Association of Christian Schools",
      },
    ],
  },

  careerValue: {
    eyebrow: "The value you'll walk away with",
    heading: "Outcomes that matter in the boardroom and the newsroom",
    items: [
      {
        icon: ShieldCheck,
        title: "Protect your reputation",
        body: "Build a written, practised plan so a crisis never catches you flat-footed.",
      },
      {
        icon: Megaphone,
        title: "Lead confidently with the media",
        body: "Hold the line in the toughest interview, press conference or social media moment.",
      },
      {
        icon: ClipboardCheck,
        title: "Build your own crisis plan",
        body: "Finish the program with a ready-to-use plan tailored to your organisation.",
      },
      {
        icon: Radio,
        title: "Train your team",
        body: "Share frameworks, templates and tabletop exercises with your leadership group.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "Is the Crisis Masterclass fully online?",
        a: "Yes, it is 100% online. You can complete every module at your own pace from anywhere in Australia, with live Q&A sessions held over video. All recordings are available inside the member portal.",
      },
      {
        q: "How long will I have access?",
        a: "Your enrolment includes 12 months of access to all modules, templates, case studies, Q&A sessions and updates. If new Australian case studies or Crisis Ready\u00AE content lands during your year, you get it at no extra cost.",
      },
      {
        q: "Do I need a PR or communications background?",
        a: "No. The program is designed for leaders, owners, executives, school and association staff who may not have a formal PR background. Everything is taught from first principles, with clear Australian examples.",
      },
      {
        q: "What is Crisis Ready\u00AE and why is it included?",
        a: "Crisis Ready\u00AE is the world-leading crisis communication and leadership methodology developed by Melissa Agnes of Crisis Ready Institute in the United States. My PR Partner is the exclusive Australasian partner, so your enrolment gives you direct access to her material, which is not available through any other Australian provider.",
      },
      {
        q: "Can I enrol my team?",
        a: "Yes. We offer group enrolment rates for organisations of any size, including customised onboarding and optional team tabletop exercises. Get in touch and our team will put together a plan that fits.",
      },
      {
        q: "What does the certificate cover?",
        a: "On completion, you receive a My PR Partner Crisis Masterclass certificate of completion, endorsed by CRC Public Relations. It recognises that you have completed the full 12-month program, including Crisis Ready\u00AE modules.",
      },
      {
        q: "How is payment handled?",
        a: "Payment is processed securely through our learning platform at checkout. You'll receive a tax invoice by email and immediate access to your course dashboard.",
      },
      {
        q: "Can I get a refund?",
        a: "We offer a 14-day satisfaction guarantee. If the program isn't right for you, contact our team within 14 days of enrolment for a full refund, no questions asked.",
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
      "The Crisis Ready\u00AE course with Melissa Agnes",
      "Monthly live Q&A with the expert panel",
      "Crisis plan templates and workbooks",
      "Australian case study library (updated monthly)",
      "Media response guides and holding statement library",
      "Member portal with ongoing content drops",
      "Certificate of completion",
    ],
    trustBadges: { poweredByCrcLogo: true, crisisReadyBadge: true },
    callbackLinkLabel: "Or request a callback from our team",
    callbackHref: "/contact",
  },

  foundersWelcome: {
    eyebrow: "From the founders",
    heading: "A message from Lyall and Barbara",
    image: "/images/founders.png",
    imageAlt: "Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner",
    paragraphs: [
      "We built Crisis Masterclass because too many Australian organisations are caught unprepared when a crisis hits. Since 2010, our parent company CRC Public Relations has walked alongside schools, charities, associations, governments and businesses through their most difficult moments.",
      <>
        This program is the distilled version of that experience, paired with the world-leading Crisis Ready<sup className="ml-0.5 align-super text-[10px]">®</sup> methodology from Melissa Agnes. We're proud to make it available, online, to every Australian leader who wants to lead confidently through whatever comes next.
      </>,
    ],
    signoff: "Lyall Mercer and Barbara Gorogh, Co-founders",
    showCrcLogo: true,
  },

  groupBand: {
    badge: "Group and corporate enrolments",
    badgeIcon: Users,
    heading: "Train your whole leadership team at a group rate",
    body:
      "Get your executive team, board, comms team or school leadership on the same page with group enrolment pricing, optional onboarding and team tabletop exercises tailored to your organisation.",
    bullets: [
      "Discounted group pricing",
      "Team progress reporting",
      "Optional tabletop exercise facilitated by CRC Public Relations",
      "Custom onboarding call with our team",
    ],
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
    footnote: "14-day satisfaction guarantee. Powered by CRC Public Relations and Crisis Ready Institute.",
    bgImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  mobileBar: {
    label: "Crisis Masterclass",
    priceShort: "From $340 p/m AUD",
    ctaLabel: "Enrol now",
  },
};
