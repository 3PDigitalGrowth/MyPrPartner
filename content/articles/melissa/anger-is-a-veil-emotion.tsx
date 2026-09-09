import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "anger-is-a-veil-emotion",
  title:
    "Anger Is a Veil Emotion: What Is Really Happening When Stakeholders Get Angry",
  summary:
    "Anger is usually the loudest emotion in a crisis, but Melissa Agnes calls it a veil: it rarely sits alone. Here is how to read what anger is covering, and what disappointment, fear, grief and relief actually need from a leader.",
  readTimeMinutes: 6,
  tags: [
    "crisis communication",
    "stakeholder anger",
    "emotional intelligence",
    "crisis leadership",
  ],
  seoTitle:
    "Responding to Angry Stakeholders in a Crisis | My PR Partner",
  seoDescription:
    "Melissa Agnes on why anger is a veil emotion and what it hides: how to respond to angry stakeholders and angry parents in a crisis without escalating them.",
  heroImageAlt:
    "A community member speaking with a raised hand in a tense public meeting, other attendees watching",
  heroPrompt:
    "Editorial photograph of a tense community meeting, a person mid-sentence with one hand raised, other attendees turned toward them in a council chamber, soft directional light, muted navy and teal palette with warm skin tones, shallow depth of field, 16:10, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede:
    "When a stakeholder is furious at you in a crisis, the instinct is to defend, explain or talk down the anger itself. Melissa Agnes teaches a different move: treat anger as a veil emotion covering something else. Responding to angry stakeholders in a crisis starts with naming what is actually underneath the anger.",
  keywords: [
    "how to respond to angry stakeholders in a crisis",
    "dealing with angry parents",
    "responding to public anger communication",
    "anger is a veil emotion",
    "crisis communication emotions",
    "Melissa Agnes crisis ready",
    "disappointment anger fear grief crisis",
  ],
  sections: [
    {
      id: "how-to-respond-to-angry-stakeholders",
      title: "How to Respond to Angry Stakeholders in a Crisis",
      blocks: [
        {
          t: "p",
          text: (
            <>
              A parent stands up in a school hall meeting, furious over a
              decision the board made without asking. A member fires off an
              email in capital letters, threatening to leave the
              association over a fee change. A council chamber goes quiet,
              then loud, as a resident accuses the mayor of hiding the real
              numbers. Three rooms, three issues, one emotion running the
              show: anger.
            </>
          ),
        },
      ],
    },
    {
      id: "every-emotion-carries-a-need",
      title: "Every Emotion Carries a Need",
      blocks: [
        {
          t: "p",
          text: (
            <>
              <Link href="/melissa-agnes">Melissa Agnes&apos;s</Link> Crisis
              Ready® course spends much of session four on five emotions
              that recur in a crisis: disappointment, anger, fear, grief and
              relief. Each one is carrying a need, and meeting that need is
              what gives the emotion somewhere to go.
            </>
          ),
        },
        {
          t: "quote",
          text: "I tend to call anger a veil emotion because research shows that anger very, very rarely sits alone. Anger is usually comes to the forefront, is the most dominating and domineering emotion. But behind the anger are other emotions that could be betrayal, it could be disappointment, it could be shame, it could be grief, it could be fear, it could be injustice, it could be vulnerability, whatever it might be. I used to get really angry when people would make me angry because I knew that my anger was something I had to deal with, I had to manage through.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Session four of the Crisis Masterclass works through all five emotions in full, with the need each one is carrying.",
          href: "/crisis-masterclass/inside",
          cta: "See inside the program",
        },
      ],
    },
    {
      id: "five-emotions-crisis-leaders-meet",
      title: "The Five Emotions Behind Stakeholder Anger",
      blocks: [
        { t: "h3", text: "Disappointment: Unmet Expectations" },
        {
          t: "p",
          text: (
            <>
              Disappointment is often the quiet emotion sitting underneath
              anger and grief alike.
            </>
          ),
        },
        {
          t: "quote",
          text: "As per Atlas of the Heart, by Brene Brown, disappointment is unmet expectations. The more significant the expectations, the more significant the disappointment. So disappointment causes disconnection in relationships. And per Brown's research, there are two types of disappointment. There's unexamined slash unexpressed disappointment, and there's examined slash expressed disappointment. So disappointment as an emotion, the need behind it, what it is needing from its leadership is to be understood.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        {
          t: "ul",
          items: [
            {
              lead: "Unexamined or unexpressed",
              text: "an expectation the stakeholder never told you about, but still measures you against.",
            },
            {
              lead: "Examined or expressed",
              text: "an expectation they did tell you about, that then went unmet.",
            },
          ],
        },
        { t: "h3", text: "Anger: What Sits Behind It" },
        {
          t: "p",
          text: (
            <>
              Anger is rarely the whole story. Whatever is really driving
              the fury is usually something else, and knowing whether you
              are facing <Link href="/issue-or-crisis">an issue or a crisis</Link>{" "}
              changes how fast you need to find it. In her words:
            </>
          ),
        },
        {
          t: "ul",
          items: [
            "Betrayal",
            "Disappointment",
            "Shame",
            "Grief",
            "Fear",
            "Injustice",
            "Vulnerability",
          ],
        },
        {
          t: "pill",
          text: "The Crisis Ready Formula is how you strategise a response that meets what anger is covering, not just the anger itself.",
          href: "/crisis-ready-formula",
          cta: "See the formula",
        },
        { t: "h3", text: "Fear: Faster Than Thought" },
        {
          t: "p",
          text: (
            <>
              Agnes covered fear in detail the session before this one. Here
              is the short recap, and the one word in the textbook
              definition she pushes back on.
            </>
          ),
        },
        {
          t: "quote",
          text: "So fear is a negative, short lasting, high alert emotion in response to a perceived threat. I mentioned last session, the only thing I disagree with there is that we say negative, but that's Brene Brown's Atlas of the Heart definition of fear. We know that fear is so rapid fire that the psychological reaction can occur before the person even consciously realises that they're in a state of fear.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Grief: Loss, Longing and Feeling Lost" },
        {
          t: "p",
          text: <>Grief rarely arrives as one feeling. Agnes breaks it into three parts:</>,
        },
        {
          t: "quote",
          text: "So the three elements are loss, longing, and feeling lost. Somebody is in grief, they're feeling a profound level of loss right now, probably inexplicable. That we couldn't explain it. We couldn't unless we're in their shoes. Like we couldn't truly feel that depth of loss. They've lost. Maybe it's normality, maybe it's the loss of what could have been. So we have to understand that longing. So in that loss, they're also longing to go back to when that loss wasn't there, when that void was whole. So there's this deep sense of longing to go back to yesterday when this pain wasn't here, when this loss hadn't occurred yet. And the third piece is feeling lost of what does tomorrow look like.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
        {
          t: "pill",
          text: "Knowing whether you are dealing with an issue or a crisis changes which of these emotions you should expect first.",
          href: "/issue-or-crisis",
          cta: "Get the label right",
        },
        { t: "h3", text: "Relief" },
        {
          t: "p",
          text: (
            <>
              Crisis leaders rarely plan for relief, but Agnes teaches it as
              the fifth emotion on the list. This definition is not from
              Atlas of the Heart; she credits it to relief researchers Ira
              Roseman and Andreas Evdokas.
            </>
          ),
        },
        {
          t: "quote",
          text: "So as per, this is not from Atlas of the Heart, this is from researchers Ira Roseman and Andreas Evdokas. So relief is the feeling of tension leaving the body. So the shoulders relax. Just that tension evacuating, being able to breathe more easily, is that thoughts of the worst being over and feeling safe for the moment, resting and wanting to get onto something else.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "what-this-changes",
      title: "What This Changes About Your Next Statement",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Once you can name what anger is veiling, your next public
              statement changes shape. You are not only responding to the
              fury in the room, you are meeting the disappointment, fear or
              grief underneath it. That is the job of the validate step in{" "}
              <Link href="/crisis-ready-formula">
                the Crisis Ready Formula
              </Link>
              : naming the real emotion before you try to fix anything,
              reassure anyone or explain what happens next.
            </>
          ),
        },
        { t: "cta", preset: "formula" },
      ],
    },
    {
      id: "you-cannot-control-how-people-feel",
      title: "You Cannot Control How People Feel",
      blocks: [
        {
          t: "p",
          text: (
            <>
              None of this means you can talk a stakeholder out of how they
              feel. Agnes is blunt about that.
            </>
          ),
        },
        {
          t: "callout",
          text: "We cannot control how people feel. What you can control is how you're able to be present.",
        },
      ],
    },
    {
      id: "where-this-goes-next",
      title: "Where This Goes Next",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This is one piece of a larger framework.{" "}
              <Link href="/articles/four-levels-of-safety-crisis-leader">
                The four levels of safety a leader owes people in a crisis
              </Link>{" "}
              sit alongside it, and{" "}
              <Link href="/articles/you-cannot-beat-emotion-with-logic">
                why you cannot beat emotion with logic
              </Link>{" "}
              explains why naming the feeling comes before the facts. Agnes
              teaches the full breakdown inside{" "}
              <Link href="/crisis-masterclass/inside">
                month four of the Crisis Masterclass
              </Link>
              , part of the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link>{" "}
              program.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "Why does anger feel like the biggest emotion in a crisis?",
      answer:
        "Because it usually is, on the surface. Melissa Agnes calls anger a veil emotion: research shows it rarely sits alone, and it comes to the front while masking whatever is really driving it, whether that is betrayal, disappointment, grief, fear or a sense of injustice. Responding to the anger alone leaves the real emotion unmet.",
    },
    {
      question:
        "How do you respond to angry stakeholders in a crisis without escalating them?",
      answer:
        "Start by treating the anger as the surface layer rather than the whole story. Work out what desired outcome was blocked, or what felt like a violation of how things should be, since that is what triggers anger under Brene Brown's Atlas of the Heart definition, then address the disappointment, fear or grief sitting behind it.",
    },
    {
      question:
        "What is the difference between disappointment and anger in a crisis?",
      answer:
        "Disappointment comes from an unmet expectation, whether or not that expectation was ever communicated. Anger is what happens when something blocks a desired outcome or violates how things should be. In practice the two often travel together, with disappointment as one of the emotions anger's veil is covering.",
    },
    {
      question:
        "How do you deal with angry parents or community members in a public meeting?",
      answer:
        "The same four levels of safety apply as in any crisis: physical, psychological, emotional and energetic. Practically, that means a calm environment, room for people to disagree without punishment, permission to feel the anger without being shamed for it, and a leader whose own nervous system is regulated enough to hold the room.",
    },
  ],
  references: [
    {
      name: "Brene Brown, Atlas of the Heart (Random House, 2021)",
      href: "https://www.penguinrandomhouse.com/books/557596/atlas-of-the-heart-by-brene-brown-phd-msw/",
    },
    {
      name: 'Ira J. Roseman and Andreas Evdokas, "Appraisals Cause Experienced Emotions: Experimental Evidence", Cognition and Emotion',
      href: "https://www.tandfonline.com/doi/abs/10.1080/02699930244000390",
    },
  ],
  related: [
    "four-levels-of-safety-crisis-leader",
    "you-cannot-beat-emotion-with-logic",
    "high-stakes-comms-formula",
  ],
  sourceNote:
    "Quotes on the veil emotion, disappointment, fear, grief and relief are drawn from session 4 of Melissa Agnes's Crisis Ready® course, part of My PR Partner's Crisis Masterclass advanced certification material, trimmed for length and spoken filler. The session's journalling exercises, the fiance anecdote and the hamster story used in the closing Q&A are not reproduced here.",
};
