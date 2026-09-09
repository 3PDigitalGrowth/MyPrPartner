import Link from "next/link";
import {
  AlertTriangle,
  GraduationCap,
  HeartHandshake,
  Layers,
  ListChecks,
  Mic,
  Scale,
  Shield,
  ShieldCheck,
  Siren,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";
import { IssueOrCrisisCheck } from "@/components/landing/IssueOrCrisisCheck";

/**
 * Issue or crisis? A five-question self-check built on Melissa Agnes's
 * Crisis Ready® framework (session 2 of the Crisis Masterclass). Targets
 * "issue vs crisis", "what is a crisis definition" and "issues management".
 *
 * This page leads with the self-check and the definitions rather than the
 * narrative. The fuller story of the same session lives at the sibling
 * article /articles/issue-or-crisis-why-the-label-decides-the-response.
 *
 * Deliberately kept out of the main navigation. See the note in app/sitemap.ts.
 */
export const issueOrCrisisConfig: LandingConfig = {
  slug: "issue-or-crisis",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Issue or crisis?", href: "/issue-or-crisis" },
  ],

  hero: {
    eyebrow: "Self-check",
    eyebrowIcon: Scale,
    title: "Issue or crisis?",
    titleHighlight: "Five questions before you escalate.",
    subhead:
      "A short framework from the Crisis Ready® course, built by crisis communication authority Melissa Agnes and taught inside the My PR Partner Crisis Masterclass. Answer five questions about the situation in front of you and get a plain read on whether it needs full escalation or normal handling.",
    trustBadges: [
      "Built on the Crisis Ready® framework",
      "Five questions, two minutes",
      "No sign-up required",
    ],
    backgroundImage: "/images/pages/issue-or-crisis.jpg",
    backgroundAlt: "",
    primaryCta: { href: "#self-check", label: "Run the five-question check" },
    secondaryCta: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
  },

  quickAnswer: {
    heading: "What is the difference between an issue and a crisis?",
    body: (
      <>
        <p>
          An issue is a situation your team can handle inside normal process. It does not stop
          business as usual, it does not need escalating straight to the top of leadership, and it
          does not threaten material impact on people, the environment, operations, reputation or
          the bottom line. A crisis does all three.
        </p>
        <p>
          Melissa Agnes, the crisis communication authority behind the Crisis Masterclass, teaches
          three tests for a crisis: it stops business as usual to some extent, it needs immediate
          escalation to the top of leadership, and it threatens material impact on one or more of
          five categories. Miss any one of the three and you are managing an issue, not a crisis.
        </p>
        <p>
          Scale decides the rest. The same event can be an issue for one organisation and a crisis
          for another, because whether something crosses the line depends on the size of the impact
          against your capacity to respond with the people and process you already have. That is why
          the checklist below asks about the situation in front of you specifically, not situations
          in general.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "definitions",
    eyebrow: "Three-part test",
    heading: "Issue, crisis or emergency: which is it?",
    subhead:
      "Melissa Agnes's Crisis Ready® framework sorts any situation into one of three categories. Here is the short version of each. The exact wording is quoted in full further down the page.",
    cards: [
      {
        title: "Issue",
        body: "Does not stop business as usual, does not need escalation to senior leadership, and does not threaten material impact on people, environment, operations, reputation or the bottom line. It stays with whoever owns it as part of their normal job.",
        icon: ListChecks,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Crisis",
        body: "Stops business as usual, forces immediate escalation to the top of leadership, and threatens material impact on people, environment, operations, reputation or the bottom line. Whether it counts as one depends on scale against your capacity to respond.",
        icon: AlertTriangle,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "Emergency",
        body: "Needs immediate action to protect health, safety, life, property or the environment, with hands on the scene right now to assess it. An emergency can turn out to be an issue or a crisis, but it is never a non-issue.",
        icon: Siren,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "self-check",
      eyebrow: "Try it",
      heading: "Run the check on the situation in front of you",
      nodes: [
        {
          kind: "p",
          text: "Answer for the real situation in front of you, not a hypothetical one. The five questions below use the same tests Melissa Agnes teaches in session two of the Crisis Masterclass, plus her test for an emergency, so the verdict reflects the framework the rest of this page is built on.",
        },
        { kind: "custom", node: <IssueOrCrisisCheck /> },
      ],
    },
    {
      id: "crisis-definition",
      eyebrow: "Definitions",
      heading: "What makes a crisis a crisis",
      nodes: [
        {
          kind: "p",
          text: "This is the definition the Crisis Masterclass workbook opens with. It is the most quotable line in the course, and it is worth having word for word.",
        },
        {
          kind: "quote",
          text: "A crisis is an event, incident, or emergency that does THREE things: it stops business as usual to some extent, it requires immediate escalation to leadership (they get pulled from meetings, vacation, or sleep), and it threatens material impact on one or more of five categories.",
          cite: "Crisis Ready® course workbook, session 2, My PR Partner Crisis Masterclass",
        },
        {
          kind: "ul",
          items: [
            "People (internal and/or external)",
            "Environment (planet and/or economy)",
            "Operations (ability to function)",
            "Reputation (trust, credibility, brand equity)",
            "Bottom line (financial impact)",
          ],
        },
      ],
    },
    {
      id: "issue-definition",
      eyebrow: "Definitions",
      heading: "What an issue is",
      nodes: [
        {
          kind: "p",
          text: "An issue is not a lesser crisis. It is a different category altogether, with a different owner and a different process.",
        },
        {
          kind: "quote",
          text: "An issue is an event, incident, or emergency that does not stop business as usual, does not require escalation to senior leadership, and does not threaten material impact on the five categories above.",
          cite: "Crisis Ready® course workbook, session 2, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "emergency-definition",
      eyebrow: "Definitions",
      heading: "Where emergencies fit",
      nodes: [
        {
          kind: "p",
          text: "An emergency sits across both of the categories above. It is a test of urgency, not of scale, and it always triggers an immediate response.",
        },
        {
          kind: "quote",
          text: "An emergency is an event or incident that requires immediate action to manage or mitigate threats to health, safety, life, property, or environment, that needs hands on deck right now to assess and respond, and that can be either an issue or a crisis, but is never a non-issue.",
          cite: "Crisis Ready® course workbook, session 2, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "continuum",
      eyebrow: "Scale, not severity",
      heading: "The continuum, and why the label carries a penalty",
      nodes: [
        {
          kind: "p",
          text: "Issue and crisis are not two boxes. Melissa Agnes places them on a single continuum, and where your organisation sits on it can change by the hour.",
        },
        {
          kind: "quote",
          text: "So essentially, when we're looking at issues and crises, we have to remember that they kind of exists on a continuum. So if you were to have a scale in front of you and here was non-issue, and then we have a little bit of an escalation, and that goes to issue, and then we have a little bit more of an escalation, and that goes to crisis, where a crisis ready organisation lives, the vast majority of the time is in that non-issue to issue level.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "If your team is responding, or in this case actually reacting to an issue as though it's a crisis, what are the risks involved with that? What are the consequences involved with that? And reversely is true as well. If your team is responding or reacting to a crisis as though it's just an issue, what are the consequences and the risks involved with that? Both present crisis response penalties.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          kind: "cta",
          text: "Crisis Masterclass month two builds this framework into your own high-risk scenarios, with a worked example.",
          href: "/crisis-masterclass",
          cta: "See the program",
        },
      ],
    },
    {
      id: "thresholds",
      eyebrow: "Set them before you need them",
      heading: "Thresholds of impact",
      nodes: [
        {
          kind: "p",
          text: "A threshold is a number, a headcount or a deadline you set in advance, so the call does not have to be made from scratch under pressure. Melissa Agnes points to seven categories worth setting one for.",
        },
        {
          kind: "ul",
          items: [
            "Environmental",
            "Financial",
            "Legal and regulatory",
            "Operational",
            "People, internal and external",
            "Reputational",
            "Social and societal",
          ],
        },
        {
          kind: "quote",
          text: "So at the onset of COVID... the businesses that had a financial runway of two weeks, for example. So after two weeks of not selling, they would have to close their doors or lay people off or just start cutting back, that for those businesses, two weeks was their financial threshold, at which point they would need to start panicking. Versus another company, for example, that might've had 18 months of liquidity and financial runway, meaning that they could keep their lights on, they could keep paying their people, they could make zero sales for 18 months before they actually began to panic and think, oh my goodness, we're gonna go out of business.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          kind: "cta",
          text: "Inside the Crisis Masterclass, month two walks through setting thresholds for your own high-risk scenarios.",
          href: "/crisis-masterclass/inside",
          cta: "See what's inside",
        },
      ],
    },
    {
      id: "where-this-sits",
      eyebrow: "Where this sits",
      heading: "Where this sits in the Crisis Masterclass",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              This page covers the definitions and the self-check. The full framework, with worked
              examples and a template for your own high-risk scenarios, is{" "}
              <Link
                href="/crisis-masterclass/inside"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                month two of the Crisis Masterclass
              </Link>
              , delivered by Melissa Agnes and Lyall Mercer. For the fuller story behind these
              definitions, including the thought exercise Melissa uses to teach the distinction, read{" "}
              <Link
                href="/articles/issue-or-crisis-why-the-label-decides-the-response"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Issue or Crisis? Why the Label Decides the Response
              </Link>
              . Once you know which one you are looking at, month three&apos;s{" "}
              <Link
                href="/crisis-ready-formula"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Validate, Relate, Prove formula
              </Link>{" "}
              is what you say next. And the free{" "}
              <Link
                href="/resources/crisis-checklist"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                crisis vulnerability checklist
              </Link>{" "}
              is a good next step if this page raised more questions than it answered.
            </>
          ),
        },
      ],
    },
  ],

  trainers: {
    id: "trainers",
    eyebrow: "Who built this framework",
    heading: "The framework behind the check",
    subhead:
      "Built directly from the Crisis Ready® course Melissa Agnes teaches inside the My PR Partner Crisis Masterclass, delivered in Australia with Lyall Mercer.",
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
        Melissa Agnes teaches the full framework, with worked examples for your own high-risk
        scenarios, in the{" "}
        <Link
          href="/crisis-masterclass"
          className="font-semibold text-teal-light underline underline-offset-2"
        >
          Crisis Masterclass
        </Link>
        . Read more about her work on the{" "}
        <Link
          href="/melissa-agnes"
          className="font-semibold text-teal-light underline underline-offset-2"
        >
          Melissa Agnes page
        </Link>
        .
      </>
    ),
  },

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "Issue or crisis questions",
    items: [
      {
        question: "Can a positive event be a crisis?",
        answer:
          "Yes. The framework tests for the effect, not the tone of the event: whether it stops business as usual, forces escalation to the top of leadership, and threatens material impact. A sudden spike in demand can do all three just as easily as bad news can, if it outstrips your capacity to respond.",
      },
      {
        question: "Who decides whether something is escalated?",
        answer:
          "The framework does. If a situation meets the three tests, it is escalated straight to the top of leadership by design, not by someone's judgement call on the day. Setting that threshold in advance, before a real situation arrives, is what stops the decision becoming a debate in the moment.",
      },
      {
        question: "Is a media enquiry automatically a crisis?",
        answer:
          "No. A single enquiry your team can handle inside normal process is an issue, not a crisis. It only tips over when it stops business as usual, needs leadership involved immediately, and threatens material impact on people, environment, operations, reputation or the bottom line.",
      },
      {
        question: "How do we set our thresholds?",
        answer:
          "By scenario, not by comparing one situation to another. Melissa Agnes uses two businesses facing the same event with different cash reserves: one had a two-week threshold before panic set in, the other had eighteen months. Set a quantifiable threshold for each of your high-risk scenarios in turn.",
      },
      {
        question: "What if we treat an issue as a crisis?",
        answer:
          "It carries its own version of the crisis response penalty: unnecessary stress on the team, resources pulled toward something that did not need full escalation, and credibility spent for no reason. Treating a crisis as an issue is just as costly, so the label has to be accurate in both directions.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "Where to go from here",
    subhead:
      "The self-check sorts the situation. These build the thresholds, the language and the year around it.",
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
        eyebrow: "The 12 months",
        title: "Inside the Crisis Masterclass",
        body: "What each of the twelve monthly sessions actually covers, month by month, in Melissa Agnes's own words.",
        cta: "See the 12 months",
        icon: Layers,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/crisis-ready-formula",
        eyebrow: "The formula",
        title: "The Crisis Ready formula",
        body: "Validate, Relate, Prove: what to say once you know you are dealing with a crisis, with a worked example and a template.",
        cta: "Read the formula",
        icon: HeartHandshake,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
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
        href: "/crisis-media-training",
        eyebrow: "Guide",
        title: "Crisis media training",
        body: "Practical media training for the people who would actually front a camera or a microphone if one of these situations became a crisis.",
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
    eyebrow: "Next step",
    heading: "Know the label. Then know what to say.",
    body: "You now know whether the situation in front of you is an issue, a crisis or an emergency. The Crisis Masterclass is where you build what happens next: thresholds for your own high-risk scenarios, and the Validate, Relate, Prove formula for what you actually say.",
    primary: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
    secondary: { href: "/melissa-agnes", label: "Meet Melissa Agnes" },
    backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  seo: {
    title: "Issue vs Crisis: What's the Difference? | My PR Partner",
    description:
      "Not every setback is a crisis. Run My PR Partner's five-question self-check, see Melissa Agnes's exact definitions, and know when to escalate.",
    canonical: "https://myprpartner.com/issue-or-crisis",
    ogImage: "/images/pages/issue-or-crisis.jpg",
  },
};
