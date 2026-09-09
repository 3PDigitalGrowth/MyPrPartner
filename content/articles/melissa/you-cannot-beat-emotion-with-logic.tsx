import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "you-cannot-beat-emotion-with-logic",
  title: "You Cannot Beat Emotion With Logic: What Happens to People in a Crisis",
  summary:
    "When a crisis hits, the brain moves into survival mode before logic gets a say. Melissa Agnes explains why emotion in crisis communication has to be met first, and the validate, relate, prove formula that does it.",
  readTimeMinutes: 7,
  tags: ["crisis communication", "emotional intelligence", "leadership", "psychology"],
  seoTitle: "Emotion in Crisis Communication Explained | My PR Partner",
  seoDescription:
    "Melissa Agnes on why emotion in crisis communication overrides logic, what survival mode does to the brain, and the validate, relate, prove formula that meets it.",
  heroImageAlt:
    "A composed crisis communications leader at a table while colleagues around them show visible tension in a dim meeting room.",
  heroPrompt:
    "Editorial photograph of a composed crisis communications leader in a dim boardroom at night, colleagues around the table showing visible tension and worry, leader's expression calm and present, dramatic low key lighting, shallow depth of field, 16:10 composition, navy and teal and white palette, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Emotion in crisis communication decides whether people hear you at all. When a crisis hits, the brain moves into survival mode and the prefrontal cortex, the part that processes logic, goes offline. Melissa Agnes's Crisis Ready® formula, validate, relate, then prove, meets people in that state instead of trying to argue them out of it.",
  keywords: [
    "emotion in crisis communication",
    "why crisis statements fail",
    "survival mode prefrontal cortex crisis",
    "validate relate prove formula",
    "crisis ready formula",
    "vulnerability in crisis leadership",
    "fear-based emotions crisis",
    "Melissa Agnes crisis communication",
  ],
  sections: [
    {
      id: "communicators-carry-the-weight",
      title: "Communicators Carry the Weight of Emotion in Crisis Communication",
      blocks: [
        {
          t: "p",
          text: (
            <>
              A crisis rarely fails because the facts were unclear. It fails because everyone
              involved is flooded with feeling before a single sentence lands. Melissa Agnes
              teaches this in session three of the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link>: emotion in crisis
              communication is the ground a message has to cross first, which is why crisis
              statements fail.
            </>
          ),
        },
        {
          t: "quote",
          text: "Here is a very deep truth. Communication can be the most challenging aspect of crisis management, and I say can be to be easy about it, to be light. In all fairness, communicators have the most on their shoulders when it comes to crisis management. And the reason for that is because crises are some of the most emotional times for everyone involved.",
          cite: "Melissa Agnes, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "ego-cant-tell-new-from-dangerous",
      title: "The Ego Cannot Tell New From Dangerous",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This is not only about the audience. The leader delivering the news runs on the
              same wiring: the ego, whose only job is self-preservation, and it is not a
              sophisticated one.
            </>
          ),
        },
        {
          t: "quote",
          text: "As human beings, we all have an ego. We could not be a human without having an ego. Our ego is simply our individuality. Part of our ego's job is to keep us alive. So me, as Melissa Agnes, my ego's job is to make sure that Melissa Agnes stays alive. Unfortunately, the ego cannot discern between a situation that is dangerous, so therefore puts our life in jeopardy, and a situation that is merely uncomfortable because it's new and it's uncertain.",
          cite: "Melissa Agnes, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Session three of the Crisis Masterclass builds the full validate, relate, prove sequence around one worked scenario, step by step.",
          href: "/crisis-masterclass/inside",
          cta: "See what's inside",
        },
      ],
    },
    {
      id: "survival-mode-and-the-brain",
      title: "What Survival Mode Does to the Brain",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Newness alone is enough to trip this switch, and a crisis supplies newness by the
              hour.
            </>
          ),
        },
        {
          t: "quote",
          text: "What we know about survival mode is that when you're in a state of survival mode, your prefrontal cortex shuts down. So what happens in the body is survival mode, or fear, triggers the amygdala, and the amygdala floods the body with cortisol and adrenaline. This shuts down the prefrontal cortex. The prefrontal cortex is the part of our brain that gives us access to strategic thinking, to innovative and creative problem solving, to visionary instincts and creativity.",
          cite: "Melissa Agnes, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              This is the survival mode prefrontal cortex crisis dynamic. What leaders owe people
              once it happens is covered in a later session on the{" "}
              <Link href="/articles/four-levels-of-safety-crisis-leader">
                four levels of safety
              </Link>{" "}
              a crisis leader has to create.
            </>
          ),
        },
      ],
    },
    {
      id: "connection-is-the-pathway-out",
      title: "Connection Is the Pathway Out",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Agnes grounds this in evidence she returns to across{" "}
              <Link href="/melissa-agnes">her work</Link>:
            </>
          ),
        },
        { t: "h3", text: "The Science Behind Emotion in Crisis Communication" },
        {
          t: "ul",
          items: [
            {
              lead: "Mirror neurons:",
              text: "connect with one person in a room and the feeling spreads through everyone watching.",
            },
            {
              lead: "Maslow's Hierarchy of Needs:",
              text: "love and belonging sit just above safety, not somewhere optional.",
            },
            {
              lead: "Sociological evidence:",
              text: "people in supportive communities cope better with stress.",
            },
            {
              lead: "Evolutionary evidence:",
              text: "cooperation and altruism are innate, and helping others feels good.",
            },
          ],
        },
        {
          t: "quote",
          text: "We are going to look at a formula, a crisis-ready formula, that will help you communicate, whether it's on paper, the written word, or in person, in a way that helps others come out of survival and into creation, into connection, into trust of your leadership so that you can lead them. This formula is to first validate, to then relate, and then to prove with reassurance, hope, and courage.",
          cite: "Melissa Agnes, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
      ],
    },
    {
      id: "validate-relate-prove",
      title: "Validate, Then Relate, Then Prove",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This is the formula for the moment logic is allowed back in, once people feel seen.
              It runs in order: validate, then relate, then prove. The full version sits in{" "}
              <Link href="/crisis-ready-formula">the Crisis Ready Formula</Link>.
            </>
          ),
        },
        { t: "h3", text: "Validate: Name the Emotion" },
        {
          t: "quote",
          text: "Name the emotion, give permission to feel it. People need to feel seen and heard before they can hear you. You don't need to agree with someone's emotion to validate it. You simply need to acknowledge that it exists and demonstrate compassion for what they're feeling and the experience they're living.",
          cite: "Melissa Agnes, Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Relate: Connect to What Matters Most" },
        {
          t: "quote",
          text: "Connect to what matters most. After validating emotions, connect to the shared values, needs, or desires that sit beneath the emotion. Relate to the aspirational, meaningful truth, not just the surface issue.",
          cite: "Melissa Agnes, Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Prove: Reassurance, Hope and Courage" },
        {
          t: "quote",
          text: "The delicate dance of reassurance, hope, and courage. Only AFTER you've validated emotion and related to shared values can you move into proving that you're trustworthy and capable of leading through this moment. Reassurance: you're safe with us, we've got this, and you. Hope: there's a path forward, let's create a better tomorrow, together. Courage: we're accountable, we'll stay with you.",
          cite: "Melissa Agnes, Crisis Ready® course workbook, session 3, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "The Crisis Masterclass gives you a template to practise validate, relate, prove on your own scenario before you need it.",
          href: "/crisis-masterclass",
          cta: "See the program",
        },
        { t: "cta", preset: "formula" },
      ],
    },
    {
      id: "vulnerability-clearest-path",
      title: "Vulnerability Is the Clearest Path to Connection",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Courage is the hardest third of the formula: it asks leaders to sound like people,
              not press releases.{" "}
              <Link href="/articles/calmest-person-in-the-room">
                The calmest person in the room
              </Link>{" "}
              is not the one hiding what they feel.
            </>
          ),
        },
        {
          t: "quote",
          text: "There's a difference between being emotional and being emotive. So I am not saying have the courage to get up on stage and start crying and putting yourself in the fetal position, telling the world that you're frightened. That's not what I'm saying. What I'm saying is that it takes great courage to show vulnerability in your emotions. Vulnerability is actually the clearest path to connection because in vulnerability, you are showing that you are a real, authentic human who cares. And that is the type of leadership that creates true connection, that creates true unity, that people want to follow, that people are actually craving, especially in today's world.",
          cite: "Melissa Agnes, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
        {
          t: "callout",
          text: "One of the crisis-ready rules that I want to leave you with here today is communicating openly and honestly in a crisis can be vulnerable and intimidating. It is also relatable and trustworthy. And that is what true leadership is.",
        },
        {
          t: "pill",
          text: "Melissa Agnes built the validate, relate, prove formula from her own work inside real crises, not theory.",
          href: "/melissa-agnes",
          cta: "About Melissa Agnes",
        },
      ],
    },
    {
      id: "bank-of-community-trust",
      title: "The Bank of Community Trust",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Agnes credits this idea to a friend, retired police chief Chris Chung, and flags
              that she is paraphrasing him from memory. Everyday communication is where a crisis
              response is won or lost.
            </>
          ),
        },
        {
          t: "quote",
          text: "Chris Chung said, I'm going to butcher it a little bit, and it's in my book. He said something along the lines of every day, Mountain View Police Department works to build and to put deposits into their bank of community trust because when a crisis strikes, you automatically have to take a withdrawal out of that bank. And so what you're aiming to do is to have enough trust in that bank when a crisis strikes so that when that immediate withdrawal comes out, there's still enough trust left over that you're not in the red.",
          cite: "Melissa Agnes, paraphrasing her friend Chris Chung, Crisis Ready® course, session 3, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "where-to-go-from-here",
      title: "Put the Formula to Work Before You Need It",
      blocks: [
        {
          t: "p",
          text: (
            <>
              <Link href="/crisis-ready-formula">The Crisis Ready Formula</Link> has the full
              validate, relate, prove sequence worked through one scenario, and{" "}
              <Link href="/articles/high-stakes-comms-formula">
                the high-stakes comms formula
              </Link>{" "}
              sets it in the wider structure. Both come from the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link>, one session a month
              with Agnes and Mercer.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "What does \"you cannot beat emotion with logic\" mean in crisis communication?",
      answer:
        "It means leading with facts before people feel heard rarely works. In a crisis, fear-based emotion arrives first and shuts down the part of the brain that processes logic, so a statement built entirely on data and reassurance lands on an audience that is not yet able to take it in.",
    },
    {
      question: "Why does the prefrontal cortex shut down in a crisis?",
      answer:
        "Melissa Agnes explains that fear triggers the amygdala, which floods the body with cortisol and adrenaline. That response shuts down the prefrontal cortex, the part of the brain responsible for strategic thinking and problem solving, which is why people in a crisis struggle to process logical argument straight away.",
    },
    {
      question: "What is the validate, relate, prove formula?",
      answer:
        "It is Melissa Agnes's three-part sequence for crisis communication: validate the emotion people are feeling, relate that to what matters most to them, and only then prove your organisation is trustworthy through reassurance, hope and courage. The order matters, because proof offered before validation tends to be dismissed.",
    },
    {
      question: "What is the bank of community trust?",
      answer:
        "It is an idea Melissa Agnes credits to a friend, a retired police chief, describing everyday communication as deposits into a trust account. A crisis forces a withdrawal, so an organisation with a healthy balance beforehand comes through it with more trust left over than one starting from empty.",
    },
  ],
  related: [
    "high-stakes-comms-formula",
    "four-levels-of-safety-crisis-leader",
    "calmest-person-in-the-room",
  ],
  sourceNote:
    "Quoted passages are drawn from session 3 of the Crisis Masterclass, \"You Can't Beat Emotion With Logic,\" and its companion workbook, both created by Melissa Agnes of the Crisis Ready Institute. The closing Q&A host's remarks, the module's housekeeping asides and the full worked crisis-statement example have been left out.",
};
