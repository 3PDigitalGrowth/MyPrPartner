import Link from "next/link";
import {
  Briefcase,
  Compass,
  FileText,
  GraduationCap,
  Megaphone,
  Mic,
  Newspaper,
  Phone,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";

/**
 * PR training for small business. Targets the long-tail cluster the site
 * already ranks on page one for ("affordable pr training for startups",
 * "pr training subscription for businesses", "monthly pr coaching for small
 * business owners", "public relations coaching for smes") with no page of its
 * own. Currently those searches land on the homepage or /programs/business,
 * neither of which uses the phrase "small business".
 *
 * Deliberately kept out of the main navigation. See the note in app/sitemap.ts.
 */
export const prTrainingSmallBusinessConfig: LandingConfig = {
  slug: "pr-training-for-small-business",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "PR training for small business", href: "/pr-training-for-small-business" },
  ],

  hero: {
    eyebrow: "For owners and founders",
    eyebrowIcon: Briefcase,
    title: "PR training for small business owners,",
    titleHighlight: "without hiring an agency.",
    subhead:
      "Learn to run your own public relations, with senior advisers on call when you need them. Built for Australian owners and founders who need profile and protection but cannot justify an agency retainer.",
    trustBadges: [
      "Learn it once, use it forever",
      "Senior advisers on call",
      "Built for teams without a comms person",
    ],
    backgroundImage: "/images/business/business-hero-bg.jpg",
    backgroundAlt: "",
    primaryCta: { href: "/programs/business", label: "See the business program" },
    secondaryCta: { href: "#first-ninety-days", label: "What to do first" },
  },

  quickAnswer: {
    heading: "Can a small business really do its own PR?",
    body: (
      <>
        <p>
          Yes, for most of what a small business actually needs. The parts of public relations that
          move the needle for an owner-operator are learnable: writing something a journalist will
          open, knowing who to send it to, building a public profile that makes people choose you,
          and knowing what to do on the day something goes wrong.
        </p>
        <p>
          What you cannot easily replicate yourself is judgement built over decades, and the phone
          call at 7pm when a situation is escalating and you need someone who has seen it before.
          That is the gap a training and support subscription fills. You do the work, an experienced
          adviser tells you whether you are about to make a mistake.
        </p>
        <p>
          An agency does it for you and charges accordingly. Training teaches your team to do it,
          which costs less, keeps the knowledge inside the business, and means you are never
          starting from zero when the retainer ends.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "what-you-learn",
    eyebrow: "The skills",
    heading: "What a small business owner actually needs to learn",
    subhead:
      "Not a university syllabus. The handful of things that generate enquiries, build a reputation and protect it when something goes wrong.",
    cards: [
      {
        title: "Writing something that gets opened",
        body: "Why most media releases are deleted in under three seconds, and the structure of one that is not. The difference between what interests you and what interests a newsroom.",
        icon: FileText,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Building a media list that works",
        body: "Finding the handful of journalists, editors and producers who cover your sector or your suburb, and understanding what each of them actually wants from you.",
        icon: Newspaper,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Pitching without annoying people",
        body: "How to make an approach a journalist welcomes, when to follow up, when to stop, and how to become the person they call when they need a comment on your industry.",
        icon: Megaphone,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "A public profile that sells",
        body: "Turning your own expertise into visible authority, so prospects arrive already convinced. For most owners this outperforms any single media hit.",
        icon: Users,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "Speaking to media with confidence",
        body: "What to do when a journalist calls, what you are allowed to say, and how to sound like someone worth quoting rather than someone reading a statement.",
        icon: Mic,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        title: "A plan for the bad day",
        body: "The small business version of crisis communication. A complaint that escalates, a review campaign, a staff issue that reaches social media. Knowing the first three moves matters more than having a thick document.",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "training-vs-agency",
      eyebrow: "The decision",
      heading: "Training or an agency: how to choose",
      nodes: [
        {
          kind: "p",
          text: "This is the question most owners are actually asking, and the honest answer depends on what you need rather than on what anyone is selling.",
        },
        {
          kind: "h3",
          text: "An agency makes sense when",
        },
        {
          kind: "ul",
          items: [
            "You have a specific campaign with a deadline and no internal capacity to run it",
            "You need existing media relationships opened quickly, in a sector where they take years to build",
            "You are facing something serious right now and need experienced hands on it today",
            "The commercial value of the outcome comfortably exceeds the retainer",
          ],
        },
        {
          kind: "h3",
          text: "Training makes sense when",
        },
        {
          kind: "ul",
          items: [
            "Your need is ongoing rather than a one-off campaign",
            "You want the capability to stay in the business rather than leave with the invoice",
            "Nobody on the team has ever been taught this, so every attempt starts from scratch",
            "You want to be less exposed on the day something goes wrong, not more dependent",
            "The retainer is the reason you keep putting PR off entirely",
          ],
        },
        {
          kind: "p",
          text: "The two are not opposed. Plenty of businesses learn the fundamentals, run their own day to day communications, and bring in senior help for the moments that genuinely warrant it. That is usually the most economical shape for a small business, and it is the shape our programs are built around.",
        },
        {
          kind: "callout",
          title: "The part that is easy to miss",
          body: (
            <>
              An agency retainer buys output. Training buys judgement. Output stops the month you
              stop paying; judgement does not. If you only ever do one thing, learn enough to know
              when you genuinely need help, which is also what makes you a better client if you do
              engage an agency later.
            </>
          ),
        },
      ],
    },
    {
      id: "first-ninety-days",
      eyebrow: "Getting started",
      heading: "What to do in your first ninety days",
      nodes: [
        {
          kind: "p",
          text: "Most owners stall because public relations feels boundless. It is not. Here is a sequence that produces something useful in a quarter, without a communications hire.",
        },
        {
          kind: "ol",
          items: [
            "Write down what you want people to believe about your business, in one sentence. Everything else is downstream of this, and most businesses have never done it.",
            "Build a list of twenty people who reach your customers. Journalists, newsletter writers, podcast hosts, association editors, local reporters. Twenty is enough.",
            "Fix your own profile first. If someone searches your name after meeting you, what they find should confirm the impression you made rather than undercut it.",
            "Find the story you already have. New hires, milestones, data you hold, a genuine opinion on something contested in your industry. Owners routinely sit on newsworthy material without recognising it.",
            "Write and send one thing. It will not be perfect. Sending it teaches you more than another month of preparation.",
            "Write your bad day plan. One page: who decides, who speaks, what you say in the first hour. Then put it somewhere you could actually find it at 6am.",
          ],
        },
        {
          kind: "p",
          text: (
            <>
              Two of those steps have free resources behind them. The{" "}
              <Link href="/resources/pr-guide" className="font-semibold text-teal-dark underline underline-offset-2">
                five steps to becoming a trusted public voice
              </Link>{" "}
              covers the profile work, and the{" "}
              <Link href="/resources/crisis-checklist" className="font-semibold text-teal-dark underline underline-offset-2">
                crisis vulnerability checklist
              </Link>{" "}
              will tell you in about ten minutes how exposed you currently are.
            </>
          ),
        },
      ],
    },
    {
      id: "how-support-works",
      eyebrow: "Ongoing support",
      heading: "What on-call support actually means",
      nodes: [
        {
          kind: "p",
          text: "Training on its own has a known failure mode. People learn something, feel confident, then hit the first situation the course did not cover and revert to guessing. On-call support is what closes that gap.",
        },
        {
          kind: "p",
          text: "In practice it means you can send a draft before it goes out, ask whether a journalist's request is a trap, or get a second opinion on whether a complaint is worth responding to publicly. The answers come from senior advisers at CRC Public Relations, the firm behind My PR Partner, rather than from a help desk.",
        },
        {
          kind: "p",
          text: (
            <>
              That combination, training plus resources plus someone experienced to check your
              thinking, is what the{" "}
              <Link href="/programs/business" className="font-semibold text-teal-dark underline underline-offset-2">
                twelve month business and not-for-profit program
              </Link>{" "}
              is built to deliver. It is designed for owners, founders and leadership teams rather
              than for communications departments, which is a genuinely different thing to design
              for.
            </>
          ),
        },
        {
          kind: "h3",
          text: "If you are not a business",
        },
        {
          kind: "p",
          text: (
            <>
              The same model runs for other sectors, with the content changed rather than just the
              cover page. There are dedicated programs for{" "}
              <Link href="/programs/schools" className="font-semibold text-teal-dark underline underline-offset-2">
                schools
              </Link>{" "}
              and for{" "}
              <Link href="/programs/industry-associations" className="font-semibold text-teal-dark underline underline-offset-2">
                industry and professional associations
              </Link>
              , and you can compare all of them on the{" "}
              <Link href="/programs" className="font-semibold text-teal-dark underline underline-offset-2">
                programs page
              </Link>
              .
            </>
          ),
        },
      ],
    },
  ],

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "PR training questions from small business owners",
    items: [
      {
        question: "How much time does PR training take each month?",
        answer:
          "The programs are built for people who run a business rather than study one, so the monthly commitment is deliberately modest and the material is designed to be used rather than just watched. Most of the value comes from applying one thing each month rather than from long study sessions.",
      },
      {
        question: "Is PR training worth it for a business with no marketing team?",
        answer:
          "That is exactly the situation it is built for. Businesses with a marketing team usually have someone who has done this before. An owner-operator has nobody, which means every attempt starts from first principles and most attempts get abandoned. Training plus on-call support replaces the missing experience.",
      },
      {
        question: "Do I need PR if I already do social media and advertising?",
        answer:
          "They do different jobs. Advertising is what you say about yourself and everyone knows you paid for it. Public relations is what other people say about you, which is why it carries more weight and why it is harder to buy. Most small businesses are already doing the paid half and leaving the earned half untouched.",
      },
      {
        question: "What does PR training cost compared with a PR agency?",
        answer:
          "A training subscription is a fraction of a typical agency retainer, because you are buying knowledge and access rather than someone else's time on your account. The exact figures depend on the program and the level of support you choose. The programs page sets out what is included at each level.",
      },
      {
        question: "Can this help a startup with no track record?",
        answer:
          "Yes, and startups often get more out of it than established businesses because they are building their public profile from a blank page rather than correcting one. The founder's own authority is usually the strongest asset a young company has, and it is the cheapest one to develop.",
      },
      {
        question: "What if something goes wrong and I am out of my depth?",
        answer:
          "That is what the on-call support is for. If your organisation is facing an active or sensitive matter, contact us directly rather than working through the training. A senior adviser will review it in confidence and recommend the fastest sensible next step.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "Where to go from here",
    subhead:
      "Start free, or go straight to the twelve month program built for owners and founders.",
    links: [
      {
        href: "/programs/business",
        eyebrow: "The program",
        title: "Business and not-for-profit program",
        body: "Twelve months of PR, profile, reputation and crisis training with resources and on-call senior support, built for owners, founders and leadership teams.",
        cta: "See the program",
        icon: Briefcase,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/resources/pr-guide",
        eyebrow: "Free download",
        title: "Becoming a trusted public voice",
        body: "Five practical steps to building a public profile that brings prospects to you already convinced. The same advice CRC gives its clients.",
        cta: "Get the guide",
        icon: FileText,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/resources/crisis-checklist",
        eyebrow: "Free download",
        title: "Crisis vulnerability checklist",
        body: "Thirty questions, about ten minutes, and an honest picture of how exposed your business currently is.",
        cta: "Get the checklist",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        href: "/programs",
        eyebrow: "Compare",
        title: "All programs by sector",
        body: "See how the business program compares with the schools and industry association programs, and what is included at each support level.",
        cta: "Compare programs",
        icon: Compass,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/crisis-masterclass",
        eyebrow: "Full program",
        title: "Crisis Masterclass",
        body: "For owners who want serious crisis capability rather than a one page plan, built in association with the Crisis Ready Institute.",
        cta: "See the masterclass",
        icon: Shield,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        href: "/contact",
        eyebrow: "Talk it through",
        title: "Ask before you commit",
        body: "Not sure whether training or an agency is the right answer for your situation? Ask a senior adviser and get a straight recommendation.",
        cta: "Start a conversation",
        icon: Phone,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        href: "/crisis-media-training",
        eyebrow: "Guide",
        title: "Crisis media training",
        body: "What happens when the story is already running and someone has to speak. Practice interviews with former journalists.",
        cta: "Read the guide",
        icon: Mic,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        sibling: true,
      },
      {
        href: "/resources/school-crisis-communication-plan",
        eyebrow: "Guide",
        title: "Writing a crisis communication plan",
        body: "Written for schools, but the structure works for any small organisation that needs a plan on one page.",
        cta: "Read the guide",
        icon: GraduationCap,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        sibling: true,
      },
    ],
  },

  finalCta: {
    eyebrow: "Get moving",
    heading: "Stop putting PR off because of what an agency costs",
    body: "Tell us what your business does and what you are trying to be known for. We will tell you honestly whether the program is right for you, or whether you would be better off starting with one of the free guides.",
    primary: { href: "/programs/business", label: "See the business program" },
    secondary: { href: "/contact", label: "Ask a question first" },
    backgroundImage: "/images/business/business-final-cta-bg.jpg",
  },

  seo: {
    title: "PR Training for Small Business Australia | My PR Partner",
    description:
      "Learn to run your own PR instead of paying an agency retainer. Practical training and on-call senior support for Australian small business owners.",
    canonical: "https://myprpartner.com/pr-training-for-small-business",
    ogImage: "/images/business/business-hero-bg.jpg",
  },
};
