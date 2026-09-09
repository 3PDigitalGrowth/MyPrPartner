import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

const linkClass = "text-teal underline underline-offset-4 hover:text-teal-dark";

export const card = {
  slug: "high-stakes-comms-formula",
  title: "The High-Stakes Comms Formula that Actually Works",
  summary:
    "Most crisis statements lead with facts and wonder why nobody responds. Melissa Agnes explains the Validate, Relate, Prove order that gets a high-stakes message heard, straight from her Crisis Ready Institute newsletter.",
  readTimeMinutes: 7,
  tags: ["crisis communication", "crisis leadership", "high-stakes communication", "validate relate prove"],
  seoTitle: "Crisis Communication Formula That Works | My PR Partner",
  seoDescription:
    "Melissa Agnes's crisis communication formula: Validate, Relate, Prove. Why fact-first statements fail and what gets a high-stakes message heard.",
  heroImageAlt:
    "A composed executive delivering a high-stakes statement to a hushed room, warm light against a dark backdrop",
  heroPrompt:
    "Editorial photograph of a composed executive speaking mid-statement in a dim press room, warm key light on the face, navy and teal ambient tones, shallow depth of field, journalists in soft focus, 16:10, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Melissa Agnes's crisis communication formula for high-stakes moments runs Regulate, Validate, Relate, Prove, in that order. Most organisations lead with Prove, the facts and the timeline, before anyone has been validated or related to, which is why the statement lands and nothing moves. Validate and Relate decide whether Prove ever gets heard.",
  keywords: [
    "crisis communication formula",
    "validate relate prove",
    "high-stakes communication",
    "crisis ready formula",
    "how to respond to a crisis",
    "emotion in crisis communication",
    "crisis leadership training",
    "Melissa Agnes crisis communication",
  ],
  sections: [
    {
      id: "why-it-misses-the-mark",
      title: "Why most high-stakes communications miss the mark",
      blocks: [
        {
          t: "p",
          text: (
            <>
              When something goes wrong, most organisations reach for the facts first: the
              timeline, the legally sound wording, the operational update. Melissa Agnes has
              spent two decades watching that approach fall flat, and her explanation of why sits
              at the centre of month three of the{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                Crisis Masterclass
              </Link>
              .
            </>
          ),
        },
        {
          t: "p",
          text: "She set it out in her newsletter this week and has given us the go-ahead to share it in full. Read it with your own last difficult statement in mind.",
        },
        {
          t: "p",
          text: "Here is the pattern she watches.",
        },
        {
          t: "quote",
          text: "Here is what I watch happen, over and over, and over and over. When something goes wrong, leaders reach for logic. They gather the facts, they establish the timeline, they get the wording legally sound, and they issue a statement based on as many facts as they can provide (or feel comfortable providing). While those facts may be accurate, they are often ineffective because the people receiving them have not yet been primed to receive the logical side of the response. Why do most leaders reach for the logic first? The answer is simple: because it's the most comfortable thing to do in an already uncomfortable situation.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "quote",
          text: `Let's face it, dealing with fear-based emotions isn't fun. It's messy, potentially confrontational, and requires a lot of courage. As a result, most leaders attempt to take the "safe" route and handle them at arm's length. I.e., half-heartedly acknowledged in a sentence (e.g., "our thoughts and prayers are with all those impacted"), then moved past on the way to the operational update (that logic I referred to above). Put simply: emotionality feels like the part of the situation you cannot control, so it gets treated as weather. Something to wait out or avoid altogether. But it isn't weather. It's information. It follows patterns. And if you can understand those patterns, you can work with it deliberately and strategically, in the interest of creating connection and deepening trust.`,
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "pill",
          text: "Month three of the Crisis Masterclass is this exact formula, with a worked example and a template.",
          href: "/crisis-masterclass",
          cta: "See the program",
        },
      ],
    },
    {
      id: "why-you-cannot-beat-emotion-with-logic",
      title: "Why you cannot beat emotion with logic",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This is the mechanism underneath the{" "}
              <Link href="/crisis-ready-formula" className={linkClass}>
                Crisis Ready Rule
              </Link>
              .
            </>
          ),
        },
        {
          t: "quote",
          text: `Let's break this down. Every high-stakes moment (e.g., disruption, change, crisis, loss) produces some form of fear-based emotion. For example, anger, grief, worry, overwhelm, betrayal. Why? Because a high-stakes moment comes with some form of uncertainty, and the self (the ego / the "I") does not like uncertainty. It does not like uncertainty because it cannot guarantee your safety in the unknown. And part of the ego's job is to keep you alive, so that safety is rather essential.`,
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "quote",
          text: "So, what does this part of the self do? If it cannot guarantee your safety, then on some level, it feels unsafe. Feeling unsafe generates a fear-based emotion. And that fear-based emotion begins to move a person into survival mode, and in survival mode the amygdala can hijack the prefrontal cortex, reducing access to it, which is precisely the part of the brain you are attempting to speak to when you issue a carefully worded, fact-based statement. And as we teach at Crisis Ready Institute, every fear-based emotion carries an underlying need that is longing to be met.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "callout",
          text: "Disruption / Unknown = Feeling unsafe on some level = Fear-Based Emotionality = Survival Mode = Amygdala on and Prefrontal Cortex off = Extremely challenging to have your communications resonate and connect the way you want and need them to.",
        },
        {
          t: "quote",
          text: "This is why so many high-stakes communications fail. Not because the facts were wrong, and not because the writing was weak. They fail because nobody in the process takes the time to understand the effects of the emotionality in the situation. So, the communication goes out addressed to a part of the brain that has gone offline. Which leaves the far more useful question: so what do you do instead?",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
      ],
    },
    {
      id: "what-does-hit-the-mark",
      title: "Here is what does hit the mark",
      blocks: [
        {
          t: "p",
          text: "Here is the order she teaches instead.",
        },
        {
          t: "quote",
          text: "The Crisis Ready® Formula for High-Stakes Communication: Regulate. Validate. Relate. Prove. In this order. Regulate is your own nervous system: getting grounded, getting into coherence, opening your own prefrontal cortex back up so that you, yourself, can lead from creation rather than from survival. This is a discipline of its own and I'll come back to it properly another time. Prove is the logic. The facts, the timeline, the evidence, the actions being taken, the vision you're leading people towards. It is the part most organizations are already good at, and it is the part most of them lead with. But Prove cannot do its job as effectively as you need it to, until Validate and Relate have done theirs. This is the piece missing from too many high-stakes communications, and from too many leaders. They are the two that decide whether Prove ever gets heard. So, let's dig into them.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "pill",
          text: "This order, Validate, Relate, Prove, is unpacked in full with a worked example inside the Crisis Masterclass.",
          href: "/crisis-ready-formula",
          cta: "Read the formula",
        },
      ],
    },
    {
      id: "validate",
      title: "Validate",
      blocks: [
        {
          t: "p",
          text: "The first move is naming what people feel.",
        },
        {
          t: "quote",
          text: "You cannot beat emotion with logic, so you first have to meet the emotion with emotion. This piece of the equation is about actively validating the emotional state or emotional experience of those you're responsible for communicating with and leading. When someone is in a fear-based emotion, one of the most courageous and supportive things you can do is truly witness them in their experience so they feel seen and heard. Do this, and trust begins to form. Do this, and a softening begins to happen that allows you to truly lead them through the challenging moment. But here's the catch: in order to validate someone's emotional experience, you have to be able to identify and NAME the emotion itself, which is where most leaders and communicators shy away.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "example",
          label: "Validate can sound like",
          tone: "strong",
          text: "The frustration we are hearing right now makes complete sense given what happened.",
        },
        {
          t: "example",
          label: "Or",
          tone: "strong",
          text: "We know this has been an incredibly difficult time for our community.",
        },
        {
          t: "callout",
          text: "You do not have to agree with how someone feels in order to witness them in their emotional experience. Because, while it may not be your emotional experience, that doesn't make it any less real or true for them.",
        },
        { t: "cta", preset: "formula" },
        { t: "capture" },
      ],
    },
    {
      id: "relate",
      title: "Relate",
      blocks: [
        {
          t: "p",
          text: "The second move is proving their concern is yours.",
        },
        {
          t: "quote",
          text: "Once people feel seen and heard in their emotional experience, the next thing they care about is whether the thing that they care so deeply about actually matters to you. Because if it doesn't, why would you be the leader to help them move through the situation? So, the relate piece is about showcasing that the things that matter so deeply to those you're communicating with (the things that triggered these deep emotional states in the first place) also matter to you. And you do this by saying so and showing so.",
          cite: "Melissa Agnes, Crisis Ready Institute newsletter, 7 September 2026",
        },
        {
          t: "callout",
          text: "Remember: Crisis Management = Simultaneous Action + Communication in the right timeline.",
        },
        {
          t: "example",
          label: "Relate can sound like",
          tone: "strong",
          text: "This community has always cared about keeping its kids safe on the streets, and that is exactly what is driving every decision we are making right now.",
        },
        {
          t: "callout",
          text: "Pro tip: find a way to relate to people through your core values.",
        },
        {
          t: "pill",
          text: "Relate is the second of the two moves Melissa teaches in month three, before Prove ever gets heard.",
          href: "/crisis-masterclass/inside",
          cta: "See month three",
        },
      ],
    },
    {
      id: "putting-the-formula-into-practice",
      title: "Putting the formula into practice",
      blocks: [
        {
          t: "p",
          text: "Two steps, then a practical exercise.",
        },
        {
          t: "ol",
          items: [
            {
              lead: "Understand deeper context.",
              text: "What happened, and what it represents to the people impacted. This is easier said than done.",
            },
            {
              lead: "Understand resulting emotionality.",
              text: "The specific emotions, their components, and the needs underneath them.",
            },
          ],
        },
        { t: "h3", text: "Your practical exercise" },
        {
          t: "ul",
          items: [
            "Identify the fear-based emotions that your (already identified) stakeholders will likely feel in the event of that situation. Name them outright.",
            "Do the research on those emotions: what happens physiologically in a person's body when they feel those specific emotions? Identify the underlying need(s) that is longing to be met.",
            "Determine how you could use the Validate and Relate part of the Crisis Ready® Formula to truly address those needs in an effective way.",
            "Read through your pre-drafted comms and compare the results of this exercise with what you had previously drafted, and take the opportunity to strengthen the drafts accordingly.",
          ],
        },
        {
          t: "callout",
          text: "If you don't have a crisis comms program, first off, you should, and second, you can still put this exercise into practice by reviewing the last high-stakes communication you drafted or released.",
        },
      ],
    },
    {
      id: "learning-this-skill-changes-the-game",
      title: "Learning this skill changes the game",
      blocks: [
        {
          t: "p",
          text: "She is candid about how hard this is.",
        },
        {
          t: "callout",
          text: "All of this may sound logical and feel relatively simple, but trust me when I say that it is extremely challenging to do in practice. Especially when you yourself are in a stress response, because you are the one managing the high-stakes situation.",
        },
        { t: "cta", preset: "enrol" },
      ],
    },
    {
      id: "where-this-sits-in-the-crisis-masterclass",
      title: "Where this sits in the Crisis Masterclass",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This formula is month three of the Crisis Masterclass, delivered by Melissa Agnes
              and Lyall Mercer with a worked example and a template you run on your own
              high-risk scenarios, not just read about. The full page on the{" "}
              <Link href="/crisis-ready-formula" className={linkClass}>
                Crisis Ready formula
              </Link>{" "}
              walks through Validate, Relate and Prove in more depth, with the self-check from
              this newsletter built in. If you want to see what the other eleven months cover
              before you commit,{" "}
              <Link href="/crisis-masterclass/inside" className={linkClass}>
                Inside the 12 months
              </Link>{" "}
              is Melissa&apos;s own description of each one. Enrol any time from the{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                Crisis Masterclass
              </Link>{" "}
              page.
            </>
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: "What is the Crisis Ready formula for high-stakes communication?",
      answer:
        "Melissa Agnes's Crisis Ready Formula runs Regulate, Validate, Relate, Prove, in that order. Regulate is getting your own nervous system grounded. Validate names the fear-based emotion people are feeling. Relate shows that what matters to them matters to you. Prove, the facts and the timeline, only lands once the first two have been done.",
    },
    {
      question: "What does \"you cannot beat emotion with logic\" mean?",
      answer:
        "It is Melissa Agnes's Crisis Ready Rule: a high-stakes moment produces fear-based emotion in everyone involved, which can push the amygdala to override the prefrontal cortex, the part of the brain a fact-based statement is trying to reach. A fact-first response goes out addressed to a part of the brain that has gone offline.",
    },
    {
      question: "What is the difference between Validate and Relate?",
      answer:
        "Validate means naming the emotion someone is feeling so they feel seen and heard, for example, \"the frustration we are hearing makes complete sense given what happened.\" Relate means showing that the thing they care about also matters to you, often through your own core values, so they trust you to lead them through it.",
    },
    {
      question: "Where does this formula fit in the Crisis Masterclass?",
      answer:
        "Validate, Relate, Prove is month three of the twelve-month Crisis Masterclass with Melissa Agnes and Lyall Mercer, built out with a worked example and a template you run on your own high-risk scenarios, alongside a monthly Q&A and a certificate endorsed by CRC Public Relations.",
    },
  ],
  related: [
    "you-cannot-beat-emotion-with-logic",
    "issue-or-crisis-why-the-label-decides-the-response",
    "calmest-person-in-the-room",
  ],
  sourceNote:
    "Melissa Agnes's words appear as pull-quotes from her 7 September 2026 Crisis Ready Institute newsletter, cleared for publication. Cut for length: her reference to the previous newsletter, two YouTube links, one case-study reference, and the Crisis Ready Autumn Intensive promotion.",
};
