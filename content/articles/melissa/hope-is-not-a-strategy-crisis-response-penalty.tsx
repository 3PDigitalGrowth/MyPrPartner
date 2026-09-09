import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "hope-is-not-a-strategy-crisis-response-penalty",
  title: "Hope Is Not a Strategy: The Crisis Response Penalty Explained",
  summary:
    "Most organisations think crisis readiness means a plan on a shelf. Melissa Agnes explains why that mindset creates a crisis response penalty, and what a crisis ready culture actually looks like instead.",
  readTimeMinutes: 6,
  tags: ["crisis communication", "crisis leadership", "crisis readiness", "crisis response penalty"],
  seoTitle: "Crisis Readiness: The Crisis Response Penalty | My PR Partner",
  seoDescription:
    "What is crisis readiness? Melissa Agnes on the crisis response penalty, the cost of a slow crisis response, and building a crisis ready culture.",
  heroImageAlt: "A boardroom crisis communication plan binder sitting closed and dusty on an office shelf",
  heroPrompt:
    "A closed ring-binder crisis plan sitting alone and dust-covered on a high office shelf, soft directional window light, shallow depth of field, quiet and slightly ominous mood, editorial corporate photography, 16:10 composition, navy teal and white palette, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Crisis readiness is not a document. It is a culture, a shared mindset and set of capabilities that decides how fast and how well people respond when something goes wrong. Skip that culture and every crisis carries a crisis response penalty: the cost of a slow reply.",
  keywords: [
    "what is crisis readiness",
    "crisis response penalty",
    "crisis ready culture",
    "cost of a slow crisis response",
    "crisis ready mindset",
    "crisis leadership training",
    "Melissa Agnes Crisis Ready",
  ],
  sections: [
    {
      id: "what-is-crisis-readiness",
      title: "What Is Crisis Readiness?",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Most Australian boards have sat through this meeting: someone tables a crisis
              communication plan, everyone nods, and it gets filed away until something has
              already gone wrong. Melissa Agnes, founder of the Crisis Ready Institute and lead
              teacher on My PR Partner&apos;s <Link href="/crisis-masterclass">Crisis Masterclass</Link>,
              built her framework around rejecting exactly that habit. Here is her definition.
            </>
          ),
        },
        { t: "h3", text: "What crisis readiness means, in her words" },
        {
          t: "quote",
          text: "So crisis ready from the Crisis Ready Institute means to be culturally prepared for any type of situation that can negatively impact people, the environment, the economy, and ultimately the business. When I talk about Crisis Ready, I'm talking about, I just said the word cultural. It's not about having a plan that sits on a shelf. Planning is essential, but it's more about having a culture, a way of thinking, a way of being, a way of interacting, a way of seeing things, and then a way of planning and preparing that truly sets you up for success. So that when something does occur, that your team instinctively knows how to work together to resolve the situation in a way that deescalates it quickly.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Month one of the Crisis Masterclass is this exact distinction, culture over paperwork, taught in full with Melissa's own worksheets.",
          href: "/crisis-masterclass/inside",
          cta: "See inside the program",
        },
      ],
    },
    {
      id: "what-is-the-crisis-response-penalty",
      title: "What Is the Crisis Response Penalty?",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa calls the cost of getting this wrong the crisis response penalty, a term
              she coined writing <Link href="/melissa-agnes">her book</Link>, and it applies from
              the moment a crisis lands.
            </>
          ),
        },
        {
          t: "quote",
          text: "So the crisis response penalty is what happens when you ineffectively respond to a crisis in the right timeline. So successful crisis management happens when the right actions are taken to fix the situation, to right the wrongs, to stop the bleeding, to do whatever needs to be done from a tactical, actionable standpoint that needs to happen while simultaneously you communicate effectively to all relevant stakeholders internally and externally.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "what-a-slow-crisis-response-costs-you",
      title: "What a Slow Crisis Response Costs You",
      blocks: [
        { t: "p", text: <>Every extra hour of silence adds up. Melissa names three compounding costs:</> },
        {
          t: "quote",
          text: "And the longer you take to effectively respond to a crisis, three things happen. So the more it becomes everybody else's story, but yours. ... And every business is only successful when they're trustworthy and when they're credible, right? Trust is everything.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "ul",
          items: [
            <>&quot;The more ownership of the narrative you lose.&quot;</>,
            <>&quot;The more trust and credibility you therefore destroy.&quot;</>,
            <>&quot;The more material impact you and your organization will suffer as a result.&quot;</>,
          ],
        },
        {
          t: "p",
          text: (
            <>
              How you label a situation in the first hour often decides which cost you pay
              first, the subject of{" "}
              <Link href="/issue-or-crisis">a related read on issue versus crisis</Link>.
            </>
          ),
        },
        { t: "cta", preset: "checklist" },
      ],
    },
    {
      id: "connection-is-the-goal",
      title: "Connection Is the Goal",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Where most crisis frameworks aim for de-escalation, Melissa sets a different target
              for every decision made under pressure.
            </>
          ),
        },
        {
          t: "quote",
          text: "For us at Crisis Ready, when you have connection as the goal, that means that you are always seeking to have authentic and strong relationships with those who matter most to your business. Without those relationships, your business will cease to exist, whether that's your employees, your investors, your board of directors, your vendors, your clients and customers. If you don't have strong relationships with your stakeholders, you're not going to have a successful business.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "If you don't connect with people in your crisis communications, you will not resonate with them. You will just be noise, you will be unbelievable. You will lack credibility. If you don't resonate with those that you need to maintain and strengthen relationships with, then you won't own your own piece of the story. You won't own your narrative and you won't be able to influence them.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
      ],
    },
    {
      id: "a-crisis-nobody-planned-for",
      title: "A Crisis Nobody Planned For",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa tells the story of a longstanding client, a crisis communication consultant
              in Europe who had taken every one of her courses. His publisher accidentally sent
              an early, error-filled draft of his first book to the printer instead of the final
              copy, and readers began mocking a crisis professional for a book full of mistakes.
            </>
          ),
        },
        {
          t: "quote",
          text: "So to have a partner, his publishers saying, we are not going to do that. We're going to be silent about it and pretend it never happened. And hope, hope is not a strategy. Hope that it doesn't come back to bite us, was unacceptable to him.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "callout",
          text: "Mindset shapes everything in life, and mindset shapes everything when you're presented with a challenge.",
        },
      ],
    },
    {
      id: "leadership-is-about-impact",
      title: "Leadership Is About Impact",
      blocks: [
        {
          t: "p",
          text: <>Melissa ties the story to a principle she repeats often: title has nothing to do with it.</>,
        },
        {
          t: "quote",
          text: "And remember that leadership is not about rank. Leadership is about impact. So I really don't care where you sit on the organizational chart. If you are an intern at a brand new organization, fresh out of college, and you're listening to this, you're watching this, you have the most tremendous opportunity to step into this next evolution of your own leadership. And that is going to have impact.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "The sequence for turning this month's thinking into an actual response sits in the Crisis Ready® formula.",
          href: "/crisis-ready-formula",
          cta: "Read the formula",
        },
      ],
    },
    {
      id: "core-values-are-a-promise",
      title: "Core Values Are a Promise",
      blocks: [
        {
          t: "p",
          text: <>Month one&apos;s homework closes the loop: a mindset only holds if it matches real values.</>,
        },
        {
          t: "quote",
          text: "So by understanding and deciding upon which of your core values are going to be in alignment with the mindset that you want for your organization, in this capacity, you are actually creating a promise, in other words, to stay in connection based on these core values with your stakeholders.",
          cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Melissa Agnes has spent two decades building this model with organisations before, during and after a crisis.",
          href: "/melissa-agnes",
          cta: "Meet Melissa Agnes",
        },
      ],
    },
    {
      id: "month-one-of-the-masterclass",
      title: "What Month One of the Masterclass Covers",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This session opens the 12-month <Link href="/crisis-masterclass">Crisis Masterclass</Link>,
              run by My PR Partner with the Crisis Ready Institute. Co-founder Lyall Mercer
              introduces it plainly: &quot;It&apos;ll blow your mind.&quot; See what the rest of the year covers
              at <Link href="/crisis-masterclass/inside">Inside the 12 Months</Link>, or start
              today with the <Link href="/resources/crisis-checklist">crisis readiness checklist</Link>.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "What is crisis readiness?",
      answer:
        "Crisis readiness, as Melissa Agnes defines it through the Crisis Ready Institute, is a cultural state rather than a document. It means an organisation is prepared, in mindset, skillset and capability, to respond to any situation that could negatively affect people, the environment, the economy or the business itself, not because a plan exists on a shelf, but because the culture instinctively knows how to respond.",
    },
    {
      question: "What is the crisis response penalty?",
      answer:
        "The crisis response penalty is the term Melissa Agnes coined for what happens when an organisation responds too slowly or ineffectively to a crisis. The longer an effective response takes, the more narrative ownership, trust and credibility an organisation loses, and the more material impact it ultimately suffers as a result.",
    },
    {
      question: "What is a crisis ready culture?",
      answer:
        "A crisis ready culture is Melissa Agnes's term for the combination of mindset, skillset and capability that allows a team to respond well under pressure, without relying on a static plan. Mindset comes first: how leaders and staff actually think about challenges, tested against the organisation's real, lived core values rather than the ones written down.",
    },
    {
      question: "What is the cost of a slow crisis response?",
      answer:
        "A slow crisis response carries what Melissa Agnes calls the crisis response penalty. Every hour of delay costs an organisation ownership of its own narrative, then the trust and credibility that narrative was protecting, and finally material impact on the business itself. The costs compound in that order, which is why speed matters as much as the content of the response.",
    },
  ],
  related: [
    "issue-or-crisis-why-the-label-decides-the-response",
    "you-cannot-beat-emotion-with-logic",
    "maple-leaf-foods-from-tragedy-to-trust",
  ],
  sourceNote:
    "Quotes are drawn verbatim from session one of Melissa Agnes's Crisis Ready course inside My PR Partner's Crisis Masterclass. The Q&A on fear and the nervous system, and further detail of the mis-printed book story, have been trimmed for length and are not reproduced here.",
};
