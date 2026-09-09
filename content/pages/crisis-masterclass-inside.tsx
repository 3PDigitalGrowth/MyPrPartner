import Link from "next/link";
import {
  Award,
  BookOpen,
  Compass,
  FileText,
  Layers,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";
import { MonthByMonth, type MonthEntry } from "@/components/landing/MonthByMonth";

/**
 * Inside the 12 months: the Crisis Masterclass described month by month in
 * Melissa Agnes's own words. Each released month carries the "A message from
 * Melissa Agnes" opener that heads that session's workbook, verbatim except
 * for the "complete your workbook before next month" housekeeping lines.
 * Months 8 to 12 show the session title only; their openers are added as each
 * session is released.
 */

export const masterclassMonths: MonthEntry[] = [
  {
    month: 1,
    title: "Defining crisis ready",
    paragraphs: [
      "Welcome to the beginning of our 12-month journey together. I'm genuinely excited to share session 1 with you: Defining Crisis Ready.",
      "Over the next year, we're going to transform how you see, approach, and lead through moments of crisis and change. That transformation doesn't begin with tactics or templates. It begins with something far more fundamental: mindset.",
      "This isn't theory. This is the inner work that creates outer results.",
      "As I mention in the session, transformation often comes with discomfort. You may feel stretched. You may encounter resistance in yourself, in your thinking, or in your environment. When that happens, lean in because that's where your deepest opportunity for growth lives. We don't grow when we stay complacent. We grow when we stretch ourselves into the next version of who we're meant to become.",
      "I'm honoured to walk this path with you. Let's begin.",
    ],
    discover: [
      "Why mindset is the foundation of Crisis Ready® success, and how it shapes every action, decision, and result in high-stakes moments",
      "The Crisis Response Penalty (CRP): what it costs organisations when they fail to respond effectively in the right timeline (and how to avoid it entirely)",
      "Connection as the ultimate goal: why authentic relationship-building with stakeholders is your greatest strategic advantage",
      "Your core values as decision-making anchors: defining what matters most so you lead with integrity when the pressure is on",
    ],
    signoff: "With connection and clarity, Melissa Agnes, Founder, Crisis Ready Institute, in partnership with My PR Partner",
  },
  {
    month: 2,
    title: "Issue vs. crisis: getting the distinction right",
    paragraphs: [
      "Last month, we laid the foundation with mindset and core values. This month, we're building on that with one of the most practical tools in your Crisis Ready® toolkit: accurately distinguishing between an issue and a crisis.",
      "This distinction matters more than most organisations realise. Getting it right changes everything.",
      "Your workbook will guide you to define issues and crises for your organisation using clear frameworks, identify your material impact thresholds, and select the high-risk scenarios that become the foundation for everything we build moving forward. This is where your Crisis Ready® program begins to take real, tangible shape.",
    ],
    discover: [
      "The Crisis vs. Issue Framework: a globally-recognised structure you'll customise for your organisation, including the five categories of material impact and why emergency assessment matters",
      "Why miscategorisation costs you: how wrongly labelling situations creates unnecessary stress, triggers the Crisis Response Penalty (CRP), and squanders trust and resources",
      "Your high-risk scenarios: identifying the specific situations you'll use to build your crisis communication strategies throughout this entire program",
    ],
    ps: "P.S. A crisis for one organisation doesn't necessarily translate into a crisis for another. Your definitions honour your unique context and capacity.",
    signoff: "With gratitude and anticipation, Melissa Agnes, Founder & CEO, Crisis Ready Institute, in partnership with My PR Partner",
  },
  {
    month: 3,
    title: "You can't beat emotion with logic",
    paragraphs: [
      "Over the past two months, we've built your foundation (mindset and values) and established one of your frameworks (thresholds for issue vs. crisis). This month, we're diving into what most crisis training ignores: the emotional reality of high-stakes communication and why logic alone will never be enough.",
      "This session explores something deep. So, if it feels intense, that's because it is. Take your time with this content. Let it land. Let yourself reflect. I promise, it'll be worth it.",
      "Your workbook will guide you to understand why emotion must be met (not bypassed), explore the science behind human connection, and practice the Validate, Relate, Prove formula on one of your high-risk scenarios. You'll also receive a crisis communication exercise with a detailed model example and reusable template for ongoing practice.",
      "This is where you learn to connect, not convince. Remembering that connection is always the goal.",
    ],
    discover: [
      "Why you can't beat emotion with logic, and the Crisis Ready® Validate, Relate, Prove formula that lets you resonate through fear-based emotions instead of trying to bypass them",
      "The science of connection: neuroscience, psychology and many other sciences show people are wired for connection, not division. We'll also explore how vulnerability is the fastest path to the trust your stakeholders are craving",
      "How to prove through the delicate dance of reassurance, hope, and courage so you show up as an emotive, imperfect human who creates safety and inspires followership",
    ],
    ps: "P.S. True leaders in moments of crisis do not create division. They create connection. This session shows you how.",
    signoff: "Connectively yours, Melissa Agnes, Founder & CEO, Crisis Ready Institute, in partnership with My PR Partner",
  },
  {
    month: 4,
    title: "Four levels of safety in crisis communication",
    paragraphs: [
      "Last month, you learned the Validate, Relate, Prove formula for meeting emotion head-on. This month, we're going deeper into what makes that formula work even further, by creating safety at four distinct levels so your stakeholders can actually hear you, trust you, and follow your leadership.",
      "This is advanced material from the Crisis Ready® Certification program. It will shift how you see your role as a crisis communicator and leader.",
      "Your workbook will guide you to assess your organisation's current state across all four levels of safety, understand what each emotion needs from your leadership, and apply safety strategies to one of your high-risk scenarios. This is where self-awareness meets strategic action.",
      "This session builds the foundation for trauma-informed, deeply resonant crisis leadership. The safety you create determines the trust you earn.",
    ],
    discover: [
      "The four levels of safety (physical, psychological, emotional, energetic) that are your responsibility to create as a crisis communicator, and why most leaders only address one of the four",
      "Trauma-informed crisis leadership and how to minimise traumatisation and retraumatisation when crises create situations that are too much, too fast, too soon for people's nervous systems to process",
      "The needs beneath five critical emotions (disappointment, anger, fear, grief, relief) so you can strategically guide stakeholders from fear-based reactions toward the relief and connection they're craving",
    ],
    ps: "P.S. Control is a tool of fear. Your role isn't to control how people feel but to create the safety where healing and forward movement become possible.",
    signoff: "With gratitude and warmth, Melissa Agnes, Founder, Crisis Ready Institute, in partnership with My PR Partner",
  },
  {
    month: 5,
    title: "Leading from energetic safety",
    paragraphs: [
      "Last month, you learned about the four levels of safety you're responsible for creating as a crisis communicator and leader. This month, we're going deep into the fourth level: energetic safety. This is advanced material from the Crisis Ready® certification that certifies visionary leaders.",
      "Here's the truth: safety comes from within. And the most regulated person in the room is the most powerful person in the room.",
      "Your workbook will guide you to understand how safety comes from within, learn the science behind energetic resonance, and practice the heart breathing technique that creates coherence. This is a skill that develops with practice, like building a new muscle by going to the gym. The more you practice, the faster you'll access equanimity when you need it most.",
      "This session transforms how you show up as a leader, energetically and practically. The coherence you cultivate becomes the safety you lend.",
    ],
    discover: [
      "Heart-brain coherence and equanimity (the state of mental balance and inner calm regardless of external chaos), and why this is the foundation of your ability to lend deep safety to those you're leading",
      "The science of energetic safety and how nervous systems co-regulate, and why your internal state matters more than your words",
      "The heart breathing technique (from HeartMath Institute) that gets you out of your brain (where fear lives) and into your body (where safety, clarity, and coherence live)",
    ],
    ps: "P.S. You can't give what you don't have. In order to lend safety to those you're leading and communicating with, you must first cultivate it within yourself.",
    signoff: "With gratitude, Melissa Agnes, Founder, Crisis Ready Institute, in partnership with My PR Partner",
  },
  {
    month: 6,
    title: "Strategic storytelling in crisis communication",
    paragraphs: [
      "Over the past five months, we've covered mindset, frameworks, emotion, safety, and coherence. This month, we're taking everything you've learned and applying it through a visionary lens: the long-term view. Most crisis communicators want a one-and-done approach. They want to communicate once, close the chapter, and revert to normal.",
      "When we boil it down, that instinct comes from fear and it leaves massive opportunities on the table.",
      "Your workbook will guide you to shift from reactive one-and-done thinking to visionary layered communication, understand the principles of strategic storytelling, and map a layered communication strategy for one of your high-risk scenarios. This is where you become the crisis leader and communicator who doesn't just manage the moment: you shape the future.",
      "Session 7 features one of the best crisis communication case studies ever. You won't want to miss it!",
    ],
    discover: [
      "Why visionary crisis leaders and communicators take the long-term view instead of rushing back to \"normal\" (which is where the crisis originated in the first place), and how courage means holding a vision of who you want to become post-crisis",
      "Crisis as an onion and strategic narrative layering so you can take stakeholders on the journey with you, building trust through transparent evolution rather than trying to control everything in a single statement",
      "The science and art of storytelling in crisis, and how the BBC used layered WhatsApp storytelling during the Ebola outbreak in West Africa",
    ],
    ps: "P.S. Storytelling in crisis isn't spin or avoidance. It's owning the reality you're living, the lessons you're learning, and taking people on the journey with you to strengthen trust, credibility, and long-term relationships.",
  },
  {
    month: 7,
    title: "From tragedy to trust: Maple Leaf Foods masterclass",
    paragraphs: [
      "This month, we're bringing everything together (mindset, emotion, safety, coherence, and layered storytelling) through one of the most powerful crisis communication case studies you've likely never heard of.",
      "In 2008, a Listeria outbreak linked to Maple Leaf Foods resulted in deaths across Canada. The crisis could have destroyed the company. Instead, their response transformed them into an industry leader.",
      "Your workbook will guide you to analyse what made Maple Leaf's response so successful, understand the difference between \"who do we want to be\" versus \"where do we want to be,\" and begin critical conversations with your team (not just comms: bring in HR, ops, legal, make this cultural) about authentic crisis leadership as a brand.",
      "This is the session that shows you what's possible when you have the courage to lead with vulnerability, truth, and vision.",
    ],
    discover: [
      "How CEO Michael McCain became the face of authentic, vulnerable crisis leadership by going on camera (revolutionary for 2008), accepting full responsibility, and saying he ignored both lawyers and accountants because \"this is about our being accountable for providing consumers with safe food.\"",
      "The strategic timeline of Maple Leaf's response from August 2008 through 2010 and beyond, showing how they took the long-term view, layered their communications, and chose to make this tragedy part of their brand identity rather than burying it",
      "The roadmap for visionary crisis leadership and communication that brings together everything you've learned: mindset, human nature, empowered skills, courage to be vulnerable, clear vision, and layered response",
    ],
    ps: "P.S. Connection is the goal, and vulnerability is one of the fastest, most authentic pathways to connection. Maple Leaf Foods proved this. The question is: Who do you want to be when a crisis comes?",
  },
  { month: 8, title: "Timelines of response and owning your narrative" },
  { month: 9, title: "Navigating the modern noise" },
  { month: 10, title: "Moving through resistance: the five Crisis Ready® hindrances" },
  { month: 11, title: "Post-crisis: from surviving to strengthening" },
  { month: 12, title: "Capstone tabletop simulation" },
];

export const crisisMasterclassInsideConfig: LandingConfig = {
  slug: "crisis-masterclass/inside",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Crisis Masterclass", href: "/crisis-masterclass" },
    { name: "Inside the 12 months", href: "/crisis-masterclass/inside" },
  ],

  hero: {
    eyebrow: "Inside the program",
    eyebrowIcon: Layers,
    title: "The Crisis Masterclass, month by month,",
    titleHighlight: "in Melissa Agnes's own words.",
    subhead:
      "Every session of the Crisis Ready® course opens with a message from Melissa Agnes explaining what the month covers and what the workbook asks of you. Here are those messages, so you can see exactly what you are enrolling in before you enrol.",
    trustBadges: [
      "12 monthly sessions",
      "Video plus workbook every month",
      "Monthly Q&A with Melissa and Lyall",
      "Certificate endorsed by CRC Public Relations",
    ],
    backgroundImage: "/images/melissa-agnes-stage.webp",
    backgroundAlt: "",
    primaryCta: { href: "/crisis-masterclass", label: "See pricing and enrol" },
    secondaryCta: { href: "#months", label: "Read the 12 months" },
  },

  quickAnswer: {
    heading: "What does the Crisis Masterclass cover?",
    body: (
      <>
        <p>
          The Crisis Masterclass is a 12-month online crisis communication course built around
          the Crisis Ready® course by Melissa Agnes, founder of the Crisis Ready Institute, and
          available in Australasia only through My PR Partner. One session opens each month:
          a video with Melissa, a workbook, and a live Q&amp;A with Melissa and Lyall Mercer of
          CRC Public Relations.
        </p>
        <p>
          The first seven months move from mindset and{" "}
          <Link href="/issue-or-crisis" className="text-teal-dark underline underline-offset-2">
            the issue-versus-crisis framework
          </Link>{" "}
          through{" "}
          <Link href="/crisis-ready-formula" className="text-teal-dark underline underline-offset-2">
            the Validate, Relate, Prove formula
          </Link>
          , the four levels of safety, leading from a regulated nervous system and layered
          storytelling, to the{" "}
          <Link
            href="/case-study/maple-leaf-foods"
            className="text-teal-dark underline underline-offset-2"
          >
            Maple Leaf Foods case study
          </Link>
          . Months eight to twelve cover timelines of response, the modern noise of
          misinformation and AI, the five hindrances, post-crisis recovery and a capstone
          tabletop simulation.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "what-you-get",
    eyebrow: "Each month",
    heading: "What arrives every month",
    subhead:
      "Content unlocks progressively, so you work at your own pace and never fall behind a cohort.",
    cards: [
      {
        title: "A video session with Melissa Agnes",
        body: "Recorded for the Australasian program, with Lyall Mercer's introduction and a closing conversation between the two of them on how the month's ideas play out in Australian organisations.",
        icon: MonitorPlay,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "A workbook you keep",
        body: "Reflection prompts, frameworks and templates in Melissa's words, applied to the high-risk scenarios you choose in month two. Month three adds a full crisis communication exercise with a model example.",
        icon: BookOpen,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Live Q&A and Spotlight emails",
        body: "A monthly discussion with Melissa Agnes and Lyall Mercer where you bring your own situation, plus fortnightly Spotlight emails between sessions.",
        icon: Users,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "A certificate at the end",
        body: "A My PR Partner Crisis Masterclass certificate of completion, endorsed by CRC Public Relations, that a board can file as evidence of reputational-risk training.",
        icon: Award,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "months",
      eyebrow: "The 12 months",
      heading: "A message from Melissa Agnes, one for each session",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              These are the openers Melissa writes for each session workbook, reproduced as
              members receive them. The only edits are the housekeeping lines about completing
              the workbook before the next month opens. Months eight to twelve show the session
              title; their messages appear here as each session is released.
            </>
          ),
        },
        { kind: "custom", node: <MonthByMonth months={masterclassMonths} /> },
        {
          kind: "cta",
          text: "Every month above is included from day one of your enrolment, released progressively.",
          href: "/crisis-masterclass",
          cta: "See pricing and enrol",
        },
      ],
    },
    {
      id: "how-it-runs",
      eyebrow: "Format",
      heading: "How the year runs",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              Enrolment runs for 12 months from the day you join and the content is released
              progressively, so you start at month one whenever you enrol. Each session is
              self-paced: watch the video, work through the workbook, bring your questions to
              the monthly Q&amp;A. Most members set aside two to three hours a month.
            </>
          ),
        },
        {
          kind: "ul",
          items: [
            <>100% online, available throughout Australasia</>,
            <>Monthly video session, workbook and downloadable resource</>,
            <>Monthly Q&amp;A with Melissa Agnes and Lyall Mercer, with questions submitted in advance</>,
            <>Fortnightly Spotlight emails between sessions</>,
            <>Certificate of completion endorsed by CRC Public Relations</>,
            <>$340 a month ex GST, or pay annually, with a ten-day free trial</>,
          ],
        },
        {
          kind: "p",
          text: (
            <>
              If you want to read Melissa&apos;s thinking before you commit, start with{" "}
              <Link href="/articles/high-stakes-comms-formula" className="text-teal-dark underline underline-offset-2">
                the high-stakes comms formula
              </Link>{" "}
              or the{" "}
              <Link href="/articles" className="text-teal-dark underline underline-offset-2">
                full set of articles
              </Link>{" "}
              drawn from the course, and meet{" "}
              <Link href="/melissa-agnes" className="text-teal-dark underline underline-offset-2">
                Melissa Agnes
              </Link>{" "}
              on her presenter page.
            </>
          ),
        },
        {
          kind: "cta",
          text: "Not sure yet? The ten-day free trial covers the first session in full.",
          href: "/crisis-masterclass",
          cta: "Start the free trial",
        },
      ],
    },
  ],

  trainers: {
    id: "who-teaches-it",
    eyebrow: "Who delivers it",
    heading: "Melissa Agnes and Lyall Mercer, every month",
    subhead:
      "The Crisis Ready® course is presented by its creator, with Australian context and case studies from the lead strategist at CRC Public Relations.",
    people: [
      {
        name: "Melissa Agnes",
        title: "Founder and CEO, Crisis Ready Institute",
        credential:
          "Creator of the Crisis Ready® Model and author of Crisis Ready: Building an Invincible Brand in an Uncertain World. Presenting in Australasia exclusively through My PR Partner.",
        image: "/images/instructors/melissa-agnes.png",
      },
      {
        name: "Lyall Mercer",
        title: "Co-founder, My PR Partner",
        credential:
          "Lead strategist at CRC Public Relations and a former journalist with 25 years in crisis and corporate PR across six continents.",
        image: "/images/founders-2026/lyall-trainer.jpg",
      },
    ],
    footnote: (
      <>
        Plus other expert trainers from Australia covering specialist areas. Meet the full team on
        the{" "}
        <Link href="/about/expert-trainers" className="text-teal-light underline underline-offset-2">
          expert trainers page
        </Link>
        .
      </>
    ),
  },

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "Questions about the program",
    items: [
      {
        question: "Do I have to start in a particular month?",
        answer:
          "No. Enrolment runs for 12 months from the day you join and the content is released progressively, so everyone starts at month one and moves through the sessions in order at their own pace.",
      },
      {
        question: "Is this the same course Melissa Agnes runs in the United States?",
        answer:
          "It is the Crisis Ready course by Melissa Agnes, recorded for the Australasian program with Lyall Mercer and co-branded by the Crisis Ready Institute and My PR Partner. It is available in Australasia only through My PR Partner.",
      },
      {
        question: "What happens in the monthly Q&A?",
        answer:
          "Members submit questions in advance and Melissa Agnes and Lyall Mercer work through them, usually against real situations members are dealing with. Recordings stay available for the rest of your enrolment.",
      },
      {
        question: "Can a whole leadership team enrol together?",
        answer:
          "Yes. Group enrolments are available for executive teams, communications staff and boards. Contact My PR Partner for a group rate.",
      },
      {
        question: "What does it cost?",
        answer:
          "$340 a month ex GST for 12 months, or an annual payment. There is a ten-day free trial, so your payment is not processed until you have seen the first session.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Read before you enrol",
    heading: "Melissa Agnes's thinking, on the page",
    subhead:
      "Articles drawn from the course sessions and Melissa's newsletters, so you can test the ideas before the first month opens.",
    links: [
      {
        href: "/crisis-ready-formula",
        eyebrow: "Month three",
        title: "The Crisis Ready® formula",
        body: "Validate, relate, prove: the order that gets a crisis message heard, with the exercise to run on your own scenario.",
        cta: "Read the formula",
        icon: Compass,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/issue-or-crisis",
        eyebrow: "Month two",
        title: "Issue or crisis? The self-check",
        body: "Melissa's definitions of issue, crisis and emergency, and five questions to ask before you escalate.",
        cta: "Run the check",
        icon: Sparkles,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        href: "/case-study/maple-leaf-foods",
        eyebrow: "Month seven",
        title: "Maple Leaf Foods, 2008",
        body: "The case study that brings the year together: a CEO on camera, lawyers told to wait, and a brand rebuilt on food safety.",
        cta: "Read the case study",
        icon: FileText,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/melissa-agnes",
        eyebrow: "The presenter",
        title: "Melissa Agnes",
        body: "Founder of the Crisis Ready Institute, creator of the Crisis Ready® Model, and the presenter of every session.",
        cta: "Meet Melissa",
        icon: Users,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/resources/crisis-checklist",
        eyebrow: "Free download",
        title: "Crisis Vulnerability Checklist",
        body: "A 30-point self-assessment of your exposure to a reputational crisis.",
        cta: "Get the checklist",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        sibling: true,
      },
      {
        href: "/crisis-media-training",
        eyebrow: "Related guide",
        title: "Crisis media training",
        body: "Spokesperson practice for the interview on the worst day of the year.",
        cta: "Read the guide",
        icon: MonitorPlay,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        sibling: true,
      },
    ],
  },

  finalCta: {
    eyebrow: "Enrol",
    heading: "Twelve months with Melissa Agnes and Lyall Mercer",
    body: "Start with month one today. $340 a month ex GST, ten-day free trial, certificate endorsed by CRC Public Relations at the end.",
    primary: { href: "/crisis-masterclass", label: "See pricing and enrol" },
    secondary: { href: "/contact", label: "Ask about group enrolment" },
    backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  seo: {
    title: "Inside the Crisis Masterclass: 12 Months | My PR Partner",
    description:
      "The Crisis Masterclass month by month, in Melissa Agnes's own words: mindset, issue vs crisis, the Crisis Ready formula, safety, storytelling, Maple Leaf Foods.",
    canonical: "https://myprpartner.com/crisis-masterclass/inside",
    ogImage: "/images/pages/crisis-masterclass-inside.jpg",
  },
};
