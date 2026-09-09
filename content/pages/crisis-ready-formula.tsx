import Link from "next/link";
import {
  Compass,
  Ear,
  FileText,
  GraduationCap,
  Heart,
  HeartHandshake,
  Mic,
  Scale,
  Shield,
  ShieldCheck,
  Wind,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";

/**
 * Crisis Ready® formula. Targets "crisis communication formula", with
 * "validate relate prove" and "Crisis Ready formula" as secondary phrases.
 * Sourced from session 3 of the My PR Partner Crisis Masterclass (Melissa
 * Agnes, Crisis Ready Institute) and Melissa's 7 September 2026 newsletter,
 * "The High-Stakes Comms Formula that Actually Works". The newsletter is
 * published in full as /articles/high-stakes-comms-formula, so quotes here
 * are kept short: this page's job is the definitions, the order, the
 * examples and the practice exercise.
 *
 * Deliberately kept out of the main navigation, matching the pattern set by
 * crisis-media-training.tsx.
 */
export const crisisReadyFormulaConfig: LandingConfig = {
  slug: "crisis-ready-formula",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Crisis Ready formula", href: "/crisis-ready-formula" },
  ],

  hero: {
    eyebrow: "Crisis Ready® formula",
    eyebrowIcon: HeartHandshake,
    title: "Validate, relate, prove:",
    titleHighlight: "the order that gets a crisis message heard.",
    subhead:
      "A three-part communication formula from Melissa Agnes and the Crisis Ready Institute, taught inside the My PR Partner Crisis Masterclass. Meet the emotion first. Only then does the logic have anywhere to land.",
    trustBadges: [
      "Built by the Crisis Ready Institute",
      "Taught in session three of the Masterclass",
      "A sequence, not a slogan",
    ],
    backgroundImage: "/images/pages/crisis-ready-formula.jpg",
    backgroundAlt: "",
    primaryCta: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
    secondaryCta: { href: "#the-formula", label: "See the formula" },
  },

  quickAnswer: {
    heading: "What is the Crisis Ready® formula?",
    body: (
      <>
        <p>
          The Crisis Ready® formula is a communication sequence created by Melissa Agnes of the
          Crisis Ready Institute, and it is the core teaching of session three in the My PR Partner
          Crisis Masterclass. It sets out the order a leader follows when speaking to people who are
          frightened, angry or unsettled: meet the emotion before you offer the facts, because a
          person in a fear response cannot properly take logic in yet.
        </p>
        <p>
          In her newsletters, Melissa frames it as four steps, in this order: Regulate, Validate,
          Relate, Prove. Regulate is the leader&apos;s own preparation, getting yourself grounded
          before you speak or write, so you are not communicating from your own fear. Validate names
          the emotion your audience is feeling and gives them permission to feel it. Relate connects
          that emotion to something you both care about. Prove, which only does its job once the
          first two have landed, delivers the facts, the actions and the path forward through
          reassurance, hope and courage.
        </p>
        <p>
          Inside the Crisis Masterclass workbook, the taught formula is the three-part core: Validate,
          Relate, Prove, with Regulate treated as the leader&apos;s own discipline rather than a line
          in the statement itself. Both versions describe the same order and the same reasoning:
          connection first, logic second.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "the-formula",
    eyebrow: "The order",
    heading: "The four steps, in order",
    subhead:
      "Each step does a different job, and skipping ahead to Prove is the single most common mistake in a crisis statement.",
    cards: [
      {
        title: "Regulate",
        body: (
          <>
            Your own preparation before you speak or write: getting grounded and clear so you can
            lead from steadiness rather than your own fear. It never appears in the statement itself,
            but it decides how everything else lands.
          </>
        ),
        icon: Wind,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Validate",
        body: (
          <>
            Name the emotion your audience is feeling and give them permission to feel it, with no
            &quot;but&quot; afterwards. People need to feel seen and heard before they can hear
            anything else you have to say.
          </>
        ),
        icon: Ear,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Relate",
        body: (
          <>
            Connect that emotion to something you both care about: a shared value, a shared concern,
            a reason your organisation exists. This is what turns an audience into people you are
            actually leading.
          </>
        ),
        icon: Heart,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Prove",
        body: (
          <>
            Only once Validate and Relate have landed do the facts do their work, through three
            elements: Reassurance (&quot;you&apos;re safe with us&quot;), Hope (&quot;there&apos;s a
            path forward&quot;) and Courage (&quot;we&apos;re accountable&quot;).
          </>
        ),
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "why-fact-first-fails",
      eyebrow: "The problem",
      heading: "Why fact-first statements fail",
      nodes: [
        {
          kind: "p",
          text: "When something goes wrong, most leaders reach for logic first. It feels like the responsible thing to do: gather the facts, check the timeline, get the wording legally sound. Melissa Agnes has watched the same pattern play out for years, and explains why it keeps missing the mark.",
        },
        {
          kind: "quote",
          text: "While those facts may be accurate, they are often ineffective because the people receiving them have not yet been primed to receive the logical side of the response. Emotionality feels like the part of the situation you cannot control, so it gets treated as weather. Something to wait out or avoid altogether. But it isn't weather. It's information. It follows patterns.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          kind: "p",
          text: "A fear-based emotion moves a person into survival mode, and survival mode reduces access to the part of the brain a carefully worded statement is aimed at. That is the mechanism behind the CrisisReady® Rule: you cannot beat emotion with logic.",
        },
        {
          kind: "cta",
          text: "Session three of the Crisis Masterclass builds the full formula with a worked example and a drafting template.",
          href: "/crisis-masterclass",
          cta: "See the program",
        },
      ],
    },
    {
      id: "validate",
      eyebrow: "Step one",
      heading: "Validate",
      nodes: [
        {
          kind: "p",
          text: "Validate is where most statements go missing. It costs nothing to include and it is usually the first thing a rushed draft leaves out.",
        },
        {
          kind: "quote",
          text: "Validate: Name the emotion, give permission to feel it. People need to feel seen and heard before they can hear you.",
          cite: "Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "You don't need to agree with someone's emotion to validate it. You simply need to acknowledge that it exists and demonstrate compassion for what they're feeling and the experience they're living.",
          cite: "Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          kind: "callout",
          title: "What it sounds like",
          body: (
            <>
              &quot;We know this news is concerning, and if you&apos;re feeling worried or
              frustrated right now, we completely understand.&quot; &quot;This situation has created
              uncertainty, and it&apos;s natural to feel anxious about what comes next.&quot;
            </>
          ),
        },
        {
          kind: "cta",
          text: "See exactly what each of the twelve Crisis Masterclass sessions covers, month by month.",
          href: "/crisis-masterclass/inside",
          cta: "See what's inside",
        },
      ],
    },
    {
      id: "relate",
      eyebrow: "Step two",
      heading: "Relate",
      nodes: [
        {
          kind: "p",
          text: "Once people feel heard, the next thing they want to know is whether the thing they care about actually matters to you too. Relate is where you show them it does.",
        },
        {
          kind: "quote",
          text: "Relate: Connect to what matters most. After validating emotions, connect to the shared values, needs, or desires that sit beneath the emotion.",
          cite: "Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "Relate to the aspirational, meaningful truth, not just the surface issue.",
          cite: "Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          kind: "callout",
          title: "What it sounds like",
          body: (
            <>
              &quot;We exist because we believe every family deserves products they can trust
              without hesitation. When we fall short of that promise, it goes against everything we
              stand for.&quot; &quot;We&apos;re in this together, and what happens to you matters
              deeply to us.&quot;
            </>
          ),
        },
      ],
    },
    {
      id: "prove",
      eyebrow: "Step three",
      heading: "Prove: reassurance, hope and courage",
      nodes: [
        {
          kind: "p",
          text: "Prove is the part most organisations are already good at. The mistake is reaching for it first, before Validate and Relate have done their work.",
        },
        {
          kind: "quote",
          text: "The delicate dance of reassurance, hope, and courage. Only AFTER you've validated emotion and related to shared values can you move into proving that you're trustworthy and capable of leading through this moment.",
          cite: "Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          kind: "ul",
          items: [
            <>
              <strong>Reassurance:</strong> &quot;You&apos;re safe with us / We&apos;ve got this, and
              you.&quot;
            </>,
            <>
              <strong>Hope:</strong> &quot;There&apos;s a path forward / Let&apos;s create a better
              tomorrow, together.&quot;
            </>,
            <>
              <strong>Courage:</strong> &quot;We&apos;re accountable / We&apos;ll stay with
              you.&quot;
            </>,
          ],
        },
        {
          kind: "cta",
          text: "Practise the full formula on your own high-risk scenario inside the Crisis Masterclass.",
          href: "/crisis-masterclass",
          cta: "See the Crisis Masterclass",
        },
      ],
    },
    {
      id: "try-it",
      eyebrow: "Practice",
      heading: "Try it on your own scenario",
      nodes: [
        {
          kind: "p",
          text: "Melissa sets a short practical exercise in her newsletter for putting the formula to work on a real scenario. It is worth doing on paper before you ever need it under pressure.",
        },
        {
          kind: "ol",
          items: [
            "Identify the fear-based emotions that your (already identified) stakeholders will likely feel in the event of that situation. Name them outright.",
            "Do the research on those emotions: what happens physiologically in a person's body when they feel those specific emotions? Identify the underlying need(s) that is longing to be met.",
            "Determine how you could use the Validate and Relate part of the Crisis Ready® Formula to truly address those needs in an effective way.",
            "Read through your pre-drafted comms and compare the results of this exercise with what you had previously drafted, then take the opportunity to strengthen the drafts accordingly.",
          ],
        },
        {
          kind: "p",
          text: "No crisis communication program yet, and therefore no pre-identified scenario? Run the same exercise against the last high-stakes communication your organisation actually sent.",
        },
      ],
    },
    {
      id: "where-it-sits",
      eyebrow: "Inside the Masterclass",
      heading: "Where the formula sits in the Crisis Masterclass",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              Validate, Relate, Prove is session three of the twelve month{" "}
              <Link href="/crisis-masterclass" className="font-semibold text-teal-dark underline underline-offset-2">
                Crisis Masterclass
              </Link>
              . By the time it arrives, you have already worked through mindset and the issue versus
              crisis framework, so the formula has a real scenario to practise on rather than a
              generic example. You can see the full month-by-month{" "}
              <Link href="/crisis-masterclass/inside" className="font-semibold text-teal-dark underline underline-offset-2">
                curriculum here
              </Link>
              .
            </>
          ),
        },
        {
          kind: "p",
          text: (
            <>
              Melissa&apos;s original newsletter walkthrough of this formula is published in full at{" "}
              <Link href="/articles/high-stakes-comms-formula" className="font-semibold text-teal-dark underline underline-offset-2">
                the high-stakes comms formula that actually works
              </Link>
              , and the science behind why logic alone cannot do this job is covered in{" "}
              <Link href="/articles/you-cannot-beat-emotion-with-logic" className="font-semibold text-teal-dark underline underline-offset-2">
                you cannot beat emotion with logic
              </Link>
              . More on Melissa and the Crisis Ready Institute is on{" "}
              <Link href="/melissa-agnes" className="font-semibold text-teal-dark underline underline-offset-2">
                her profile page
              </Link>
              .
            </>
          ),
        },
      ],
    },
  ],

  trainers: {
    id: "trainers",
    eyebrow: "Who teaches it",
    heading: "Taught by the people who built it",
    subhead:
      "The formula itself is Melissa Agnes's, delivered inside the Crisis Masterclass in partnership with My PR Partner.",
    people: [
      {
        name: "Lyall Mercer",
        title: "Co-founder, My PR Partner",
        credential:
          "A former journalist with more than 25 years of front-line public relations experience, advising governments, executives, heads of state, industry associations and schools, and coordinating international media conferences.",
        image: "/images/founders-2026/lyall-trainer.jpg",
      },
      {
        name: "Melissa Agnes",
        title: "Founder and CEO, Crisis Ready Institute",
        credential:
          "A recognised authority on crisis communication, crisis leadership and brand protection, and best-selling author of Crisis Ready: Building an Invincible Brand.",
        image: "/images/instructors/melissa-agnes.png",
      },
    ],
    footnote: (
      <>
        Melissa delivers the formula in session three of the Crisis Masterclass, with monthly Q&A
        alongside Lyall Mercer. See the{" "}
        <Link href="/about/expert-trainers" className="font-semibold text-teal-light underline underline-offset-2">
          full roster of expert trainers
        </Link>
        .
      </>
    ),
  },

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "Crisis Ready formula questions",
    items: [
      {
        question: "Is validating an emotion the same as admitting liability?",
        answer:
          "No. Validating means acknowledging that someone feels frightened, angry or unsettled: it says nothing about who caused it or who is at fault. You do not need to agree with the cause of an emotion to acknowledge that the emotion itself is real.",
      },
      {
        question: "What if I don't know the facts yet?",
        answer:
          "That is normal, and it is exactly why Validate and Relate come before Prove. You can validate what people are feeling and relate to what matters to them well before your investigation is finished. The facts arrive in the Prove step, once you actually have them to share.",
      },
      {
        question: "Does this work in writing as well as in person?",
        answer:
          "Yes. The formula was built for statements, emails and holding lines as much as for interviews or press conferences. The order, meet the emotion first, then offer the facts, matters whichever channel you are using.",
      },
      {
        question: "How is this different from a holding statement?",
        answer:
          "A holding statement is a document: a first response you issue while facts are still coming in. The Crisis Ready® formula is the order you use to write it, and every statement afterwards, so the emotional part of the message is never skipped.",
      },
      {
        question: "Where can I learn the full method?",
        answer:
          "Session three of the My PR Partner Crisis Masterclass, taught by Melissa Agnes, walks through the full Validate, Relate, Prove formula with a worked script and a drafting template for your own high-risk scenarios.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "Where to go from here",
    subhead:
      "The formula is one session inside a twelve month program. These take you further into the method and the plan around it.",
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
        href: "/crisis-masterclass/inside",
        eyebrow: "Curriculum",
        title: "Inside the 12 months",
        body: "A month-by-month breakdown of what each session covers, from mindset and the issue versus crisis framework through to this formula and beyond.",
        cta: "See the curriculum",
        icon: Compass,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/issue-or-crisis",
        eyebrow: "Self-check",
        title: "Issue or crisis self-check",
        body: "Work out whether what you are facing right now needs full escalation or normal operations, using the same framework the Masterclass teaches in session two.",
        cta: "Run the self-check",
        icon: Scale,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/downloads/evidence-emotion-led-crisis.pdf",
        eyebrow: "Free download",
        title: "The evidence paper",
        body: "The research behind why emotion-led crisis communication outperforms a fact-first approach, in one download.",
        cta: "Get the paper",
        icon: FileText,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        href: "/crisis-media-training",
        eyebrow: "Guide",
        title: "Crisis media training",
        body: "The formula gives you the words. Media training is where your spokespeople practise saying them on camera, under real pressure.",
        cta: "Read the guide",
        icon: Mic,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        sibling: true,
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
    ],
  },

  finalCta: {
    eyebrow: "Start the conversation",
    heading: "Practise the formula before you need it",
    body: "The Crisis Masterclass walks you through Validate, Relate, Prove on your own high-risk scenario, with a worked example and monthly Q&A with Melissa Agnes and Lyall Mercer.",
    primary: { href: "/crisis-masterclass", label: "Enrol in the Crisis Masterclass" },
    secondary: { href: "/melissa-agnes", label: "More on Melissa Agnes" },
    backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  seo: {
    title: "Crisis Communication Formula: Validate, Relate, Prove",
    description:
      "The Crisis Ready® formula: Validate, Relate, Prove. How Melissa Agnes's crisis communication formula works, with examples and a practice exercise.",
    canonical: "https://myprpartner.com/crisis-ready-formula",
    ogImage: "/images/pages/crisis-ready-formula.jpg",
  },
};
