import Link from "next/link";
import {
  BookOpen,
  Clapperboard,
  Compass,
  FileText,
  GraduationCap,
  Mic,
  MessageSquareWarning,
  Radio,
  Shield,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";

/**
 * Crisis media training. Targets the "crisis media training", "crisis media
 * management training" and "crisis management media training" cluster, which
 * Google was previously forcing onto /crisis-masterclass at positions 49-75
 * because that page never uses the phrase "media training".
 *
 * Deliberately kept out of the main navigation. See the note in app/sitemap.ts.
 */
export const crisisMediaTrainingConfig: LandingConfig = {
  slug: "crisis-media-training",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Crisis media training", href: "/crisis-media-training" },
  ],

  hero: {
    eyebrow: "Media training",
    eyebrowIcon: Mic,
    title: "Crisis media training for the",
    titleHighlight: "worst day of your year.",
    subhead:
      "Practical media training for Australian leaders and spokespeople who could find themselves in front of a camera, a microphone or a hostile inbox with very little warning. Led by former journalists and senior crisis advisers, not academics.",
    trustBadges: [
      "Delivered live and online",
      "Recorded practice interviews",
      "Former journalists as trainers",
    ],
    backgroundImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
    backgroundAlt: "",
    primaryCta: { href: "/contact", label: "Talk to a senior adviser" },
    secondaryCta: { href: "#what-it-covers", label: "See what it covers" },
  },

  quickAnswer: {
    heading: "What is crisis media training?",
    body: (
      <>
        <p>
          Crisis media training teaches the people who speak for your organisation how to handle
          media questions while a serious incident is still unfolding. It is narrower and more
          pressured than general media training. The story is moving, the facts are incomplete,
          people may have been harmed, and every answer is being judged for tone as much as
          content.
        </p>
        <p>
          A session usually covers building a holding statement in the first hour, agreeing key
          messages the whole leadership team can repeat, bridging away from speculation without
          sounding evasive, and practising on camera until the responses stop feeling scripted.
          Most Australian providers run it as a half day or full day, in person or online, with
          recorded mock interviews and playback.
        </p>
        <p>
          It is a skill, not a document. That is the difference between this and a crisis
          communication plan, and it is why organisations that already have a plan often discover
          their spokespeople have never actually practised using it.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "what-it-covers",
    eyebrow: "Inside the training",
    heading: "What crisis media training covers",
    subhead:
      "Every session is shaped around the incidents your organisation is genuinely exposed to. These are the components that appear in almost all of them.",
    cards: [
      {
        title: "The first hour",
        body: "Building a holding statement when you know almost nothing, so silence does not become the story. What you can say honestly before the facts are confirmed, and what you must never say.",
        icon: Timer,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Key messages under pressure",
        body: "Three messages the chief executive, the board chair and the front desk can all repeat without contradicting each other. Consistency across spokespeople is what stops a story running for a second week.",
        icon: MessageSquareWarning,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Bridging difficult questions",
        body: "Moving from a question you cannot answer to a message you can deliver, without the verbal tics that read as evasion on camera. Practised until it sounds like you rather than a media handbook.",
        icon: Compass,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Television, radio and podcast",
        body: "Each format punishes different habits. Television reads your face, radio reads your pauses, a podcast will let you talk yourself into trouble over an hour. We train for the formats you are actually likely to face.",
        icon: Radio,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "Recorded mock interviews",
        body: "Interviews run by people who used to ask these questions for a living, recorded and played back. Watching yourself is uncomfortable and it is the part of the day that changes behaviour.",
        icon: Clapperboard,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "Social media pile-ons",
        body: "The modern crisis often starts in comments rather than a newsroom. When to respond, when to hold, and how a screenshot of your reply becomes tomorrow's news story.",
        icon: Users,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "who-its-for",
      eyebrow: "Who it is for",
      heading: "Who needs crisis media training",
      nodes: [
        {
          kind: "p",
          text: "The people who end up in front of a camera during a crisis are rarely the communications team. They are the chief executive, the principal, the board chair, the head of the association. They are usually competent, senior and completely unpractised at being questioned in public about something that has gone badly wrong.",
        },
        {
          kind: "p",
          text: "The training is built for anyone who could reasonably be asked to speak in that moment:",
        },
        {
          kind: "ul",
          items: [
            "Chief executives, founders and managing directors of Australian businesses",
            "School principals, heads of school and business managers, who face parent, media and departmental questions at the same time",
            "Association and peak body executives who speak on behalf of a membership with competing views",
            "Not-for-profit and charity leaders, where a reputational hit puts donor income at risk",
            "Communications and marketing staff who will brief and support the spokesperson on the day",
            "Board members and deputies, who become the spokesperson when the chief executive is the subject of the story",
          ],
        },
        {
          kind: "callout",
          title: "The deputy is the one people forget",
          body: (
            <>
              If the incident concerns the chief executive, the chief executive cannot be the
              spokesperson. Train at least two people, and train the second one properly. It is the
              most common gap we see, and it surfaces in the{" "}
              <Link href="/resources/crisis-checklist" className="font-semibold text-teal-dark underline underline-offset-2">
                free crisis vulnerability checklist
              </Link>{" "}
              more often than almost anything else.
            </>
          ),
        },
      ],
    },
    {
      id: "how-it-runs",
      eyebrow: "Format",
      heading: "How a session runs",
      nodes: [
        {
          kind: "p",
          text: "Sessions are built around your organisation, not a generic case study. Before the day, we work through the incidents you are genuinely exposed to, the spokespeople who would front them, and any live sensitivities we need to work around.",
        },
        {
          kind: "ol",
          items: [
            "A short briefing on how Australian newsrooms decide what a story is, and why the second day is usually worse than the first.",
            "Building your key messages together, against a scenario drawn from your own risk profile rather than a textbook.",
            "Recorded practice interviews, run in the formats you are most likely to face, with the pressure turned up gradually.",
            "Playback and direction, which is where most of the actual learning happens.",
            "A second round of interviews, so the changes are practised rather than just noted.",
            "A written debrief covering what to fix in your messages, your approvals chain and your spokesperson bench.",
          ],
        },
        {
          kind: "p",
          text: "Delivery is live, online or in person, for a small group so everyone gets time in the chair. Half day and full day formats are both common. We will recommend the shape that suits your team after the scoping conversation rather than selling a fixed package.",
        },
        {
          kind: "h3",
          text: "Media training or crisis media training?",
        },
        {
          kind: "p",
          text: "General media training prepares you to promote something: a launch, a result, a campaign. You control the timing, you know the questions, and the worst outcome is a dull story. Crisis media training prepares you for the interview you did not schedule, about a subject you would rather not discuss, at a moment when your organisation's reputation is genuinely at stake.",
        },
        {
          kind: "p",
          text: "The skills overlap. The pressure does not. If your immediate concern is a serious incident rather than a product launch, this is the session you want.",
        },
      ],
    },
    {
      id: "training-vs-plan",
      eyebrow: "Where it fits",
      heading: "Training, plans and full crisis capability",
      nodes: [
        {
          kind: "p",
          text: "Crisis media training is one piece of crisis readiness. It is the most visible piece, because it is the part the public sees, but on its own it will not make an organisation crisis ready.",
        },
        {
          kind: "ul",
          items: [
            <>
              <strong>Crisis media training</strong> builds the skill. Your spokespeople can hold a
              line under questioning. This page.
            </>,
            <>
              <strong>A crisis communication plan</strong> builds the process. Who decides, who
              speaks, who is told and in what order. Our{" "}
              <Link href="/resources/school-crisis-communication-plan" className="font-semibold text-teal-dark underline underline-offset-2">
                guide to writing a school crisis communication plan
              </Link>{" "}
              walks through the structure, and the template applies well beyond schools.
            </>,
            <>
              <strong>The{" "}
              <Link href="/crisis-masterclass" className="font-semibold text-teal-dark underline underline-offset-2">
                Crisis Masterclass
              </Link></strong>{" "}
              builds the capability. A twelve month online program covering prevention, readiness,
              response and recovery, built in association with the Crisis Ready Institute.
            </>,
            <>
              <strong>A{" "}
              <Link href="/programs" className="font-semibold text-teal-dark underline underline-offset-2">
                sector program
              </Link></strong>{" "}
              builds it into the year. Twelve months of training, resources and on-call support for{" "}
              <Link href="/programs/schools" className="font-semibold text-teal-dark underline underline-offset-2">
                schools
              </Link>
              ,{" "}
              <Link href="/programs/business" className="font-semibold text-teal-dark underline underline-offset-2">
                businesses and not-for-profits
              </Link>{" "}
              and{" "}
              <Link href="/programs/industry-associations" className="font-semibold text-teal-dark underline underline-offset-2">
                industry associations
              </Link>
              , with crisis content shaped for each sector.
            </>,
          ],
        },
        {
          kind: "p",
          text: "Most organisations start with training because something has just happened, or nearly happened, and the gap has become obvious. That is a perfectly reasonable place to start. It is a poor place to stop.",
        },
      ],
    },
  ],

  trainers: {
    id: "trainers",
    eyebrow: "Who delivers it",
    heading: "Trained by people who have sat on both sides of the interview",
    subhead:
      "Practitioners rather than academics. Between them they have worked in newsrooms, run crises for governments and listed companies, and trained executives across the world.",
    people: [
      {
        name: "Lyall Mercer",
        title: "Co-founder, My PR Partner",
        credential:
          "A former journalist with more than 25 years of front-line public relations experience, advising governments, executives, heads of state, industry associations and schools, and coordinating international media conferences.",
        image: "/images/founders-2026/lyall-trainer.jpg",
      },
      {
        name: "Cavill Stone",
        title: "Radio and broadcast specialist",
        credential:
          "Former director of clients, people and culture at a PR agency specialising in radio and broadcast communications, with more than ten years in PR and communications.",
        image: "/images/instructors/cavill-stone.png",
      },
      {
        name: "Melissa Agnes",
        title: "Founder and CEO, Crisis Ready Institute",
        credential:
          "A recognised authority on crisis communication, crisis leadership and brand protection, and best-selling author of Crisis Ready: Building an Invincible Brand.",
        image: "/images/instructors/melissa-agnes.png",
      },
      {
        name: "Deborah Hileman",
        title: "President, Institute for Crisis Management",
        credential:
          "President of the Institute for Crisis Management in the United States, a recognised leader in crisis communication research and training, having trained executives across the globe.",
        image: "/images/instructors/deborah-hileman.png",
      },
    ],
    footnote: (
      <>
        Your session is matched to the trainer whose background fits your sector and the formats you
        are most likely to face. You can see the full roster on the{" "}
        <Link href="/about/expert-trainers" className="font-semibold text-teal-light underline underline-offset-2">
          expert trainers page
        </Link>
        .
      </>
    ),
  },

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "Crisis media training questions",
    items: [
      {
        question: "How long does crisis media training take?",
        answer:
          "Most sessions run as either a half day or a full day. A half day suits a small group refreshing existing skills. A full day is better when spokespeople have never been on camera, because it allows two rounds of recorded interviews with playback in between, which is where the improvement actually happens.",
      },
      {
        question: "Can crisis media training be delivered online?",
        answer:
          "Yes. Online delivery works well for crisis media training because most crisis interviews now happen down a video link anyway, so practising in that format is realistic rather than a compromise. In person sessions are also available where a group wants to be in the same room.",
      },
      {
        question: "How many people should attend?",
        answer:
          "Small groups work best, usually between four and eight, so everyone gets meaningful time in the interview chair. We strongly recommend training at least two spokespeople, because if an incident involves the chief executive then the chief executive cannot front it.",
      },
      {
        question: "What is the difference between media training and crisis media training?",
        answer:
          "General media training prepares you to promote something on your own timetable, where you know roughly what will be asked. Crisis media training prepares you for an interview you did not schedule, about a subject you would rather not discuss, while facts are still incomplete and your reputation is genuinely at stake. The skills overlap but the pressure is different.",
      },
      {
        question: "We already have a crisis communication plan. Do we still need this?",
        answer:
          "Usually yes. A plan sets out who decides and who speaks. It does not give the person who speaks any practice at doing it. Organisations with a well written plan and an unpractised spokesperson still perform badly on the day, because holding a line under questioning is a skill that only develops through rehearsal.",
      },
      {
        question: "How much does crisis media training cost in Australia?",
        answer:
          "It depends on the format, the group size and how much scenario development the session needs beforehand. We scope it in a short conversation and quote against what you actually need rather than selling a fixed package. Organisations wanting crisis capability across a full year usually find one of the twelve month sector programs better value than a standalone session.",
      },
      {
        question: "Can you help if we are in the middle of something right now?",
        answer:
          "Yes. If your organisation is dealing with an active or sensitive matter, contact us rather than booking training. A senior adviser from CRC Public Relations will review the situation in confidence and recommend the fastest sensible next step, with no obligation.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "Where to go from here",
    subhead:
      "Crisis media training builds the skill. These build the plan, the capability and the year around it.",
    links: [
      {
        href: "/crisis-masterclass",
        eyebrow: "Full program",
        title: "Crisis Masterclass",
        body: "A twelve month online crisis communications program covering prevention, readiness, response and recovery, built in association with the Crisis Ready Institute.",
        cta: "See the masterclass",
        icon: Shield,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/resources/crisis-checklist",
        eyebrow: "Free download",
        title: "Crisis vulnerability checklist",
        body: "A 30 point self-assessment that takes about ten minutes and shows you where the gaps are before you decide what training you need.",
        cta: "Get the checklist",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        href: "/programs",
        eyebrow: "Sector programs",
        title: "Twelve month programs",
        body: "Training, resources and on-call senior support across a full year, shaped for schools, businesses and not-for-profits, and industry associations.",
        cta: "Browse programs",
        icon: Compass,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/about/expert-trainers",
        eyebrow: "The team",
        title: "Meet the expert trainers",
        body: "The specialists who deliver our programs, including former journalists, crisis authorities and investigation specialists.",
        cta: "See the roster",
        icon: Users,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        href: "/resources/pr-guide",
        eyebrow: "Free download",
        title: "Becoming a trusted public voice",
        body: "Five practical steps to building the kind of public profile that makes a crisis easier to survive, at no cost.",
        cta: "Read the guide",
        icon: FileText,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/articles",
        eyebrow: "Insights",
        title: "Articles and insights",
        body: "Practical writing on crisis, reputation, media and strategy from senior advisers rather than marketers.",
        cta: "Read the articles",
        icon: BookOpen,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        href: "/resources/school-crisis-communication-plan",
        eyebrow: "Guide",
        title: "Writing a school crisis communication plan",
        body: "The structure, the approval chain and the first hour holding statement, with a template you can adapt.",
        cta: "Read the guide",
        icon: GraduationCap,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        sibling: true,
      },
      {
        href: "/pr-training-for-small-business",
        eyebrow: "Guide",
        title: "PR training for small business owners",
        body: "What it costs to learn PR yourself compared with an agency retainer, and what to do in the first ninety days.",
        cta: "Read the guide",
        icon: Compass,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        sibling: true,
      },
    ],
  },

  finalCta: {
    eyebrow: "Start the conversation",
    heading: "Find out what your spokespeople would actually do",
    body: "Tell us who speaks for your organisation and what you are exposed to. A senior adviser will tell you honestly whether a single session will cover it, or whether you would be better served by a full program.",
    primary: { href: "/contact", label: "Talk to a senior adviser" },
    secondary: { href: "/resources/crisis-checklist", label: "Start with the free checklist" },
    backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  seo: {
    title: "Crisis Media Training Australia | My PR Partner",
    description:
      "Crisis media training for Australian leaders and spokespeople. Led by former journalists, with recorded practice interviews. Online or in person.",
    canonical: "https://myprpartner.com/crisis-media-training",
    ogImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  },
};
