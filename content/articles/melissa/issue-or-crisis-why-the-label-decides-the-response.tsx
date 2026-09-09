import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "issue-or-crisis-why-the-label-decides-the-response",
  title: "Issue or Crisis? Why the Label Decides the Response",
  summary:
    "Melissa Agnes's framework for telling an issue from a crisis, built on scale of impact and escalation, not gut feeling. Includes her crisis, issue and emergency definitions and the continuum a crisis ready organisation tries to stay inside.",
  readTimeMinutes: 6,
  tags: ["crisis communication", "issue management", "crisis leadership", "risk management"],
  seoTitle: "Difference Between an Issue and a Crisis | My PR Partner",
  seoDescription:
    "Melissa Agnes explains the difference between an issue and a crisis: the framework, the five impact categories and why the wrong label costs you.",
  heroImageAlt:
    "A council chief executive stands at a glass office window at dusk on a Friday, phone in hand",
  heroPrompt:
    "Editorial photograph of a senior executive standing at a glass office window at dusk, city lights beginning to show, phone held in one hand, calm and thoughtful expression, shallow depth of field, navy and teal and white palette, 16:10 composition, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "The difference between an issue and a crisis comes down to two tests: does it stop business as usual, and does it threaten material impact on people, environment, operations, reputation or the bottom line. Miscall it either way and you pay what crisis trainer Melissa Agnes calls the crisis response penalty.",
  keywords: [
    "difference between an issue and a crisis",
    "what is a crisis definition",
    "issues management vs crisis management",
    "crisis response penalty",
    "issue vs crisis framework",
    "material impact categories",
    "crisis ready model",
    "when does an issue become a crisis",
  ],
  sections: [
    {
      id: "why-the-label-matters",
      title: "Why the Difference Between an Issue and a Crisis Matters",
      blocks: [
        {
          t: "p",
          text: (
            <>
              It&apos;s 4pm on a Friday and the phone won&apos;t stop. A school principal has
              an email from three angry parents. A council general manager has a burst water
              main and a reporter on the line. A CEO has a Slack thread about a product fault
              spreading fast. Each has about thirty seconds to decide: does this wait until
              Monday, or does it go to the board tonight? Call it wrong either way and it
              costs something real.
            </>
          ),
        },
        { t: "h3", text: "Getting the difference between an issue and a crisis right" },
        {
          t: "p",
          text: (
            <>
              Melissa Agnes spends a full session of the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link> on this distinction
              alone.
            </>
          ),
        },
        {
          t: "quote",
          text: "In the meantime, it's really important for a few reasons to get your definitions right. One, mislabeling a crisis as an issue or an issue as a crisis can very easily and very quickly escalate harm to the organisation. So what I like to call the crisis response penalty and squander trust, reputation, and brand equity, even if just put at the most basic of level, if your team believes that a situation is a crisis, when really it's an issue that's gonna cause a lot of stress internally, and even just from that standpoint, you and your team deserve to not have that stress when you don't need it.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Month three of the Crisis Masterclass turns the label into a script, with the formula for what to say once you know which one you're facing.",
          href: "/crisis-ready-formula",
          cta: "See the formula",
        },
      ],
    },
    {
      id: "what-makes-a-crisis-a-crisis",
      title: "What Makes a Crisis a Crisis",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Agnes doesn&apos;t hand you a fixed definition. She gives you a test.
            </>
          ),
        },
        {
          t: "quote",
          text: "A crisis is an event, incident, or emergency that does THREE things: 1. Stops business as usual to some extent. 2. Requires immediate escalation to leadership (they get pulled from meetings, vacation, or sleep). 3. Threatens material impact on one or more of these five categories:",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "ul",
          items: [
            { lead: "People", text: "internal and/or external" },
            { lead: "Environment", text: "planet and/or economy" },
            { lead: "Operations", text: "ability to function" },
            { lead: "Reputation", text: "trust, credibility, brand equity" },
            { lead: "Bottom line", text: "financial impact" },
          ],
        },
        {
          t: "p",
          text: (
            <>
              Scale of impact against your capacity to respond: same event, different
              organisation, different answer.
            </>
          ),
        },
      ],
    },
    {
      id: "what-an-issue-is",
      title: "What an Issue Is",
      blocks: [
        {
          t: "p",
          text: (
            <>
              An issue isn&apos;t a lesser crisis. It&apos;s a different category.
            </>
          ),
        },
        {
          t: "quote",
          text: "An issue is an event, incident, or emergency that: does NOT stop business as usual; does NOT require escalation to senior leadership; does NOT threaten material impact on the five categories above. Issue management is part of someone's job description. It's handled within normal operations without major disruption.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        { t: "cta", preset: "issue-or-crisis" },
      ],
    },
    {
      id: "where-emergencies-fit",
      title: "Where Emergencies Fit",
      blocks: [
        {
          t: "p",
          text: (
            <>
              An emergency sits beside both categories, not between them: a test of whether
              people need to move right now.
            </>
          ),
        },
        {
          t: "quote",
          text: "An emergency is an event or incident that: requires immediate action to manage or mitigate threats to health, safety, life, property, or environment; needs hands on deck RIGHT NOW to assess and respond; can be either an issue OR a crisis (but is never a non-issue).",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "the-continuum",
      title: "The Continuum: From Non-Issue to Issue to Crisis",
      blocks: [
        {
          t: "p",
          text: <>Agnes places all of this on one scale rather than three separate boxes.</>,
        },
        {
          t: "quote",
          text: "So essentially, when we're looking at issues and crises, we have to remember that they kind of exists on a continuum. So if you were to have a scale in front of you and here was non-issue, and then we have a little bit of an escalation, and that goes to issue, and then we have a little bit more of an escalation, and that goes to crisis, where a crisis ready organisation lives, the vast majority of the time is in that non-issue to issue level.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              That scale sits differently for every organisation. Her favourite illustration
              is Zoom, the video conferencing platform that saw demand surge at the start of
              COVID.
            </>
          ),
        },
        {
          t: "quote",
          text: "All of a sudden Zoom had an influx of demand and market opportunity to really position themselves and to really scale their business up, right? So here we had a crisis for a lot of different companies and an opportunity for another company. So just kind of sharing this to reiterate how a crisis for one doesn't necessarily translate into a crisis for another or a crisis for all. So it's really important for your organisation to clearly understand and set the criteria around what is a crisis for you?",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
        {
          t: "pill",
          text: "The Crisis Masterclass is Melissa Agnes's full course, delivered in Australasia through My PR Partner.",
          href: "/melissa-agnes",
          cta: "Meet Melissa Agnes",
        },
      ],
    },
    {
      id: "thresholds-of-impact",
      title: "Thresholds of Impact: When Does an Issue Become a Crisis?",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Once you have your five categories, the next job is making them specific.
              Agnes points to seven areas worth mapping.
            </>
          ),
        },
        {
          t: "quote",
          text: "So when you're looking at your thresholds of impact or your thresholds of escalation, some areas of impact that you want to look at are environmental, financial, legal, and regulatory, operational people internally and externally, reputational and social and societal.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              She demonstrates it through financial runway, comparing two real businesses
              from{" "}
              <Link href="/articles/hope-is-not-a-strategy-crisis-response-penalty">
                the early weeks of COVID
              </Link>
              .
            </>
          ),
        },
        {
          t: "quote",
          text: "So at the onset of COVID, when people were starting to work from home and to be on lockdown and businesses didn't know what tomorrow held, the businesses that had a financial runway of two weeks, for example, so after two weeks of not selling, they would have to close their doors or lay people off or just start cutting back, that for those businesses, two weeks was their financial threshold, at which point they would need to start panicking. Versus another company, for example, that might've had 18 months of liquidity and financial runway, meaning that they could keep their lights on, they could keep paying their people, they could make zero sales for 18 months before they actually began to panic and think, oh my goodness, we're gonna go out of business.",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Session 2 of the Crisis Masterclass walks you through setting these thresholds for your own high risk scenarios, with a worked template.",
          href: "/crisis-masterclass/inside",
          cta: "See inside the program",
        },
      ],
    },
    {
      id: "both-directions-carry-a-penalty",
      title: "Both Directions Carry a Penalty",
      blocks: [
        {
          t: "p",
          text: (
            <>
              It&apos;s tempting to assume the safe move is always to call something a
              crisis. Agnes is direct about why{" "}
              <Link href="/articles/you-cannot-beat-emotion-with-logic">
                overreacting carries its own cost
              </Link>
              .
            </>
          ),
        },
        {
          t: "quote",
          text: "If your team is responding, or in this case actually reacting to an issue as though it's a crisis, what are the risks involved with that? What are the consequences involved with that? And reversely is true as well. If your team is responding or reacting to a crisis as though it's just an issue, what are the consequences and the risks involved with that?",
          cite: "Melissa Agnes, Crisis Ready® course, session 2, My PR Partner Crisis Masterclass",
        },
        {
          t: "callout",
          text: "Both present, both consequences, present crisis response penalties.",
        },
      ],
    },
    {
      id: "where-to-go-from-here",
      title: "Where to Go From Here",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Agnes built a <Link href="/issue-or-crisis">five-question self-check</Link> for
              your own leadership team, using your own scenarios rather than a college
              student&apos;s laptop. Once the label is settled,{" "}
              <Link href="/articles/high-stakes-comms-formula">
                knowing what to say next
              </Link>{" "}
              is what the rest of the <Link href="/crisis-masterclass">Crisis Masterclass</Link>{" "}
              teaches.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "What is the difference between an issue and a crisis?",
      answer:
        "An issue does not stop normal operations and does not need to go to senior leadership. A crisis stops business as usual, forces immediate escalation to leadership, and threatens material impact on people, environment, operations, reputation or the bottom line. The test is scale of impact against your organisation's capacity to respond.",
    },
    {
      question: "What is a crisis, in one definition?",
      answer:
        "Crisis trainer Melissa Agnes defines a crisis as a situation that stops business as usual, requires immediate escalation to the top of leadership, and threatens material impact on one or more of five categories: people, environment, operations, reputation and bottom line. Whether it counts as a crisis depends on scale of impact against your capacity to respond.",
    },
    {
      question: "Is every emergency a crisis?",
      answer:
        "No. An emergency needs immediate action to manage a threat to health, safety, life, property or the environment, but it can turn out to be either an issue or a crisis once your team assesses it. The one thing an emergency is never is a non-issue: it always needs some hands on deck.",
    },
    {
      question: "Can a positive event ever become a crisis?",
      answer:
        "Yes. A crisis can come from a positive situation as easily as a negative one. A sudden surge in demand, a viral moment or rapid growth can threaten the same five categories, people, operations, reputation, bottom line, if an organisation lacks the capacity to manage the scale of what is happening.",
    },
    {
      question: "Who created the issue versus crisis framework?",
      answer:
        "The framework comes from Melissa Agnes, founder of the Crisis Ready Institute and creator of the Crisis Ready® Model. In Australasia it's taught through the My PR Partner Crisis Masterclass, a twelve-month program she delivers with My PR Partner co-founder Lyall Mercer.",
    },
  ],
  related: [
    "high-stakes-comms-formula",
    "hope-is-not-a-strategy-crisis-response-penalty",
    "you-cannot-beat-emotion-with-logic",
  ],
  sourceNote:
    "Quoted material is drawn from session 2 of Melissa Agnes's Crisis Ready course and its companion workbook, delivered through the My PR Partner Crisis Masterclass. Passages are excerpted for length, one repeated phrase has been trimmed, and the workbook's crisis, issue and emergency definitions have been reformatted from bullet points into running text without changing her wording.",
};
