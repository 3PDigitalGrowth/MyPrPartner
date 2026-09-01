import Link from "next/link";
import {
  AlertTriangle,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Mic,
  Phone,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";

/**
 * How to write a crisis communication plan for an Australian school.
 *
 * The Australian results for this query are almost entirely American K-12
 * material (ParentSquare, SchoolStatus, Verizon, ISM). There is no Australian
 * guide with a usable structure, which is the gap this page fills. The plan
 * structure is written out in full on the page rather than gated behind a PDF,
 * so it is indexable and quotable. A downloadable template can be added later
 * once the client decides between a free file and an email gate.
 *
 * Deliberately kept out of the main navigation. See the note in app/sitemap.ts.
 */
export const schoolCrisisPlanConfig: LandingConfig = {
  slug: "school-crisis-communication-plan",

  // Two levels only. The site has no /resources index page, so a crumb labelled
  // "Resources" would have to point at an unrelated resource, which misleads
  // both readers and search engines. Breadcrumbs do not have to mirror the URL.
  breadcrumbs: [
    { name: "Home", href: "/" },
    {
      name: "School crisis communication plan",
      href: "/resources/school-crisis-communication-plan",
    },
  ],

  hero: {
    eyebrow: "Guide for school leaders",
    eyebrowIcon: GraduationCap,
    title: "How to write a crisis communication plan",
    titleHighlight: "for an Australian school.",
    subhead:
      "The structure, the approval chain and the first hour, written for principals, business managers and communications staff. Australian context, not an American district template.",
    trustBadges: [
      "Full plan structure on this page",
      "Written for Australian schools",
      "From senior crisis advisers",
    ],
    backgroundImage: "/images/schools/schools-hero-bg.jpg",
    backgroundAlt: "",
    primaryCta: { href: "#plan-structure", label: "See the plan structure" },
    secondaryCta: { href: "/programs/schools", label: "Schools program" },
  },

  quickAnswer: {
    heading: "What is a school crisis communication plan?",
    body: (
      <>
        <p>
          A school crisis communication plan sets out who decides, who speaks, and who is told in
          what order when something serious happens. It sits alongside your emergency management
          plan rather than inside it. The emergency plan keeps people safe. The communication plan
          protects trust in the school while that is happening.
        </p>
        <p>
          A workable plan is short. It names the crisis communication team and their deputies, sets
          out an approval chain that functions at 6am on a Sunday, holds pre-approved holding
          statements, and lists your audiences in the order they must hear from you. Staff, then
          families, then the wider community, then media. Almost every school that handles an
          incident badly got that order wrong.
        </p>
        <p>
          The most common failure is not the absence of a plan. It is a thorough plan nobody has
          read, held by one person, containing a spokesperson who has never practised being one.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "what-schools-face",
    eyebrow: "The realistic list",
    heading: "The incidents Australian schools actually face",
    subhead:
      "Plans written around a natural disaster tend to fail on the incidents that are far more likely, more sensitive, and much harder to talk about publicly.",
    cards: [
      {
        title: "A staff conduct allegation",
        body: "The hardest category, because privacy obligations, an investigation and parent anger all arrive together and the school can say least exactly when families demand most.",
        icon: AlertTriangle,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "A serious injury or death",
        body: "On an excursion, on site, or involving a student outside school hours. The community needs care and information in the right order, and the family's wishes lead everything.",
        icon: Shield,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "A parent campaign online",
        body: "A private Facebook group builds for a fortnight before the school hears about it. By the time it reaches you it has a narrative, momentum and often a journalist attached.",
        icon: Users,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Student conduct that reaches media",
        body: "Bullying, an assault, a video circulating, an image generated and shared. Fast moving, involves minors, and legally constrained in what the school can confirm.",
        icon: Mic,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "A data breach",
        body: "Student and family records are attractive targets. Notification obligations run on a legal clock that will not wait for your communications to be ready.",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "A financial or governance issue",
        body: "Board conflict, a funding problem, a departure that is not explained. Silence is read as concealment and the story is written from whoever will talk.",
        icon: ClipboardList,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "plan-structure",
      eyebrow: "The structure",
      heading: "What goes in the plan, section by section",
      nodes: [
        {
          kind: "p",
          text: "Keep the whole thing to a handful of pages. A plan that runs to forty pages will not be opened during an incident, and a plan that is not opened is not a plan.",
        },
        {
          kind: "h3",
          text: "1. The crisis communication team",
          id: "team",
        },
        {
          kind: "p",
          text: "Name people and roles, not job titles alone. For each one, list a mobile number and a named deputy. The team is usually the principal, the board or council chair, the business manager, the communications lead if you have one, and whoever owns your legal advice.",
        },
        {
          kind: "ul",
          items: [
            "Who convenes the team, and how, including out of hours",
            "Who has authority to approve a public statement without waiting for a full meeting",
            "Who owns the relationship with the department, the diocese or the governing body",
            "Who is explicitly not a spokesperson, which matters as much as who is",
          ],
        },
        {
          kind: "h3",
          text: "2. The approval chain",
          id: "approvals",
        },
        {
          kind: "p",
          text: "Test this against a Sunday morning. If your chain requires three sign-offs and one of them is on leave, you will be silent for six hours while a parent group is not. Build in a named delegate for every approver and a rule for what happens when someone cannot be reached inside thirty minutes.",
        },
        {
          kind: "h3",
          text: "3. Audiences, in order",
          id: "audiences",
        },
        {
          kind: "p",
          text: "Sequence matters more than speed. Staff first, because a teacher who learns from a parent cannot help you. Then directly affected families. Then the wider parent community. Then the department, diocese or governing body, according to your obligations, which may move them earlier. Then media, then your website and social channels.",
        },
        {
          kind: "callout",
          title: "The order is the plan",
          body: "If you take one thing from this guide, take the sequence. Most reputational damage in schools comes from an audience hearing about an incident from the wrong source, not from the incident itself.",
        },
        {
          kind: "h3",
          text: "4. Holding statements, written in advance",
          id: "holding",
        },
        {
          kind: "p",
          text: "Draft these now, while nothing is happening. A holding statement confirms you are aware, says what you are doing, expresses appropriate concern, and commits to a next update by a stated time. It does not speculate, allocate blame, or confirm details you have not verified.",
        },
        {
          kind: "p",
          text: "Write one for each of your realistic scenarios. On the day you will be editing rather than composing, which is the difference between responding in forty minutes and responding in four hours.",
        },
        {
          kind: "h3",
          text: "5. Monitoring",
          id: "monitoring",
        },
        {
          kind: "p",
          text: "Name who is watching the school's social channels, local community groups where you have visibility, and review platforms, and how often during an active incident. Include what they escalate and to whom. A parent comment that goes unanswered for a day is a story; the same comment answered in an hour usually is not.",
        },
        {
          kind: "h3",
          text: "6. The debrief",
          id: "debrief",
        },
        {
          kind: "p",
          text: "Book it before you need it. Within two weeks of any incident, the team reviews what was said, what was missed, how long each step took, and what changes in the plan. Schools that skip this step make the same mistake twice.",
        },
      ],
    },
    {
      id: "first-hour",
      eyebrow: "The first hour",
      heading: "What to do in the first sixty minutes",
      nodes: [
        {
          kind: "p",
          text: "The plan exists for this hour. Everything else is preparation for it.",
        },
        {
          kind: "ol",
          items: [
            "Confirm what you actually know, separately from what you have been told. Write the two lists apart from each other.",
            "Convene the crisis communication team, even briefly, even by phone. One person deciding alone is how schools end up saying something they cannot walk back.",
            "Check your obligations before you speak. Privacy, mandatory reporting, departmental or diocesan notification, and anything the police have asked you not to disclose.",
            "Adapt the relevant holding statement. Do not write from scratch, and do not wait for complete information before saying anything at all.",
            "Brief staff first, with clear instruction on what they may and may not say, and where to direct questions.",
            "Communicate to affected families, then the wider community, in the sequence your plan sets out.",
            "Nominate one spokesperson and one point of contact for media enquiries, and make sure reception and the front office know exactly where to send calls.",
          ],
        },
        {
          kind: "callout",
          title: "Silence is a message",
          body: (
            <>
              Schools frequently choose to say nothing until they know everything, which reads as
              concealment even when it is caution. You can acknowledge an incident, express concern
              and commit to an update without confirming a single contested fact. That is what a
              holding statement is for.
            </>
          ),
        },
      ],
    },
    {
      id: "beyond-the-document",
      eyebrow: "The gap most schools miss",
      heading: "A plan is not the same as being ready",
      nodes: [
        {
          kind: "p",
          text: "Writing the plan is the straightforward part. Schools that handle incidents well have done three further things, and they are the three that get postponed.",
        },
        {
          kind: "ul",
          items: [
            "Rehearsed it. One tabletop exercise a year, run against a realistic scenario, will find more problems in ninety minutes than another redraft ever will.",
            <>
              Practised the spokesperson. A principal who has never been interviewed under pressure
              will not perform well the first time, and the first time should not be a real
              incident.{" "}
              <Link href="/crisis-media-training" className="font-semibold text-teal-dark underline underline-offset-2">
                Crisis media training
              </Link>{" "}
              exists for exactly this.
            </>,
            "Made it findable. The plan lives where the team can reach it from a phone, at home, at night, when the school network may be exactly what is unavailable.",
          ],
        },
        {
          kind: "p",
          text: (
            <>
              If you want an honest read on where your school currently sits, the{" "}
              <Link href="/resources/crisis-checklist" className="font-semibold text-teal-dark underline underline-offset-2">
                crisis vulnerability checklist
              </Link>{" "}
              is thirty questions and takes about ten minutes. It covers communication, media,
              social media, staff policies and data security, and most school leaders find at least
              two gaps they had not considered.
            </>
          ),
        },
        {
          kind: "p",
          text: (
            <>
              For schools that want this handled properly across a year rather than in a single
              burst, the{" "}
              <Link href="/programs/schools" className="font-semibold text-teal-dark underline underline-offset-2">
                My PR Partner schools program
              </Link>{" "}
              runs twelve months of training, resources and on-call senior support for the whole
              leadership team, with content built for Australian schools rather than adapted from
              corporate material.
            </>
          ),
        },
      ],
    },
  ],

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "School crisis communication plan questions",
    items: [
      {
        question: "What is the difference between a crisis communication plan and an emergency management plan?",
        answer:
          "An emergency management plan deals with physical safety: evacuation, lockdown, first aid, headcounts. A crisis communication plan deals with what everyone is told, by whom, in what order, and what the school says publicly. They should reference each other but they are separate documents with different owners, because the person managing an evacuation cannot simultaneously be drafting a statement.",
      },
      {
        question: "Who should be on a school crisis communication team?",
        answer:
          "Typically the principal, the board or council chair, the business manager, the communications lead where one exists, and access to legal advice. Every member needs a named deputy with a mobile number, because incidents do not wait for people to return from leave.",
      },
      {
        question: "Should the principal always be the spokesperson?",
        answer:
          "Usually, because the community expects to hear from the school's leader. The exception matters though: if the incident concerns the principal, the principal cannot front it, and the board or council chair steps in. Schools that have not trained a second spokesperson discover this at the worst possible moment.",
      },
      {
        question: "How long should a school crisis communication plan be?",
        answer:
          "Short enough to be read during an incident. A handful of pages covering the team, the approval chain, audience sequence, holding statements and monitoring is far more useful than a comprehensive document nobody opens. Detail belongs in appendices, not in the part you need at 6am.",
      },
      {
        question: "How often should the plan be reviewed?",
        answer:
          "At least annually, plus after any incident and whenever a member of the crisis communication team changes. Contact details go stale faster than anything else in the document, and a plan with a departed staff member's mobile number in it is worse than no plan because it creates false confidence.",
      },
      {
        question: "Do we need to tell parents about everything?",
        answer:
          "No, and privacy obligations often prevent it. The question is not whether to disclose every detail but whether families hear about a significant incident from the school or from somewhere else. You can communicate that something has happened and that it is being handled without disclosing anything you are not permitted to share.",
      },
      {
        question: "Can you help us write or test our plan?",
        answer:
          "Yes. Senior advisers work with Australian schools on plan development, tabletop exercises and spokesperson training, and the schools program includes this across a full year. If your school is dealing with an active or sensitive matter right now, contact us directly rather than starting with training.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "From plan to genuine readiness",
    subhead:
      "The document is the starting point. These are what turn it into a school that handles a bad week well.",
    links: [
      {
        href: "/programs/schools",
        eyebrow: "The program",
        title: "Schools program",
        body: "Twelve months of PR, reputation and crisis training for principals, executive leaders and communications staff, built specifically for Australian schools.",
        cta: "See the schools program",
        icon: GraduationCap,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/resources/crisis-checklist",
        eyebrow: "Free download",
        title: "Crisis vulnerability checklist",
        body: "Thirty questions across communication, media, social media, staff policies and data security. About ten minutes, and it will find gaps.",
        cta: "Get the checklist",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        href: "/crisis-masterclass",
        eyebrow: "Full program",
        title: "Crisis Masterclass",
        body: "Serious crisis capability across prevention, readiness, response and recovery, built in association with the Crisis Ready Institute.",
        cta: "See the masterclass",
        icon: Shield,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/about/expert-trainers",
        eyebrow: "The team",
        title: "Meet the expert trainers",
        body: "Including an internal investigations specialist who works specifically with the education sector, and former journalists who run the media practice.",
        cta: "See the roster",
        icon: Users,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        href: "/resources/pr-guide",
        eyebrow: "Free download",
        title: "Becoming a trusted public voice",
        body: "Five steps to building the standing that makes a school's communication believed when it matters most.",
        cta: "Read the guide",
        icon: FileText,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/contact",
        eyebrow: "Something in play",
        title: "Active or sensitive matter",
        body: "If your school is dealing with something right now, speak to a senior adviser in confidence rather than starting with a guide.",
        cta: "Contact us",
        icon: Phone,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
      },
      {
        href: "/crisis-media-training",
        eyebrow: "Guide",
        title: "Crisis media training",
        body: "Practising the interview before it happens, with recorded mock interviews run by former journalists.",
        cta: "Read the guide",
        icon: Mic,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        sibling: true,
      },
      {
        href: "/pr-training-for-small-business",
        eyebrow: "Guide",
        title: "PR training without an agency",
        body: "The same do-it-yourself model written for business owners, including how to decide between training and an agency.",
        cta: "Read the guide",
        icon: Compass,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        sibling: true,
      },
    ],
  },

  finalCta: {
    eyebrow: "For school leaders",
    heading: "Build the plan, then practise using it",
    body: "Most schools we work with have a document and no rehearsal. Tell us where your school currently sits and a senior adviser will recommend the shortest path to being genuinely ready, whether that is a tabletop exercise, spokesperson training, or the full year program.",
    primary: { href: "/programs/schools", label: "See the schools program" },
    secondary: { href: "/contact", label: "Talk to a senior adviser" },
    backgroundImage: "/images/schools/schools-final-cta-bg.jpg",
  },

  seo: {
    title: "School Crisis Communication Plan Guide | My PR Partner",
    description:
      "How to write a crisis communication plan for an Australian school: the team, the approval chain, audience order, holding statements and the first hour.",
    canonical: "https://myprpartner.com/resources/school-crisis-communication-plan",
    ogImage: "/images/schools/schools-hero-bg.jpg",
  },
};
