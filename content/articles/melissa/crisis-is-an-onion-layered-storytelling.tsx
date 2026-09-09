import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "crisis-is-an-onion-layered-storytelling",
  title: "A Crisis Is an Onion: Why the Story Is Never Told Once",
  summary:
    "Melissa Agnes explains why a crisis is never told in one statement: it unfolds like an onion, layer by layer, and storytelling is the tool that carries each layer. The BBC's 2014 WhatsApp Ebola service is her proof it works.",
  readTimeMinutes: 6,
  tags: ["crisis communication", "storytelling", "crisis leadership", "melissa agnes"],
  seoTitle: "Storytelling in Crisis Communication | My PR Partner",
  seoDescription:
    "Melissa Agnes on storytelling in crisis communication: why a crisis unfolds in layers, and how the BBC's WhatsApp Ebola service proved it works.",
  heroImageAlt:
    "Close-up of translucent onion layers glowing from within, each ring lit softly against a dark navy background.",
  heroPrompt:
    "Macro photograph of a halved onion with translucent glowing layers lit from within, warm light escaping through the rings against a dark navy background, moody editorial lighting, shallow depth of field, no text, no logos, 16:10, palette navy teal white.",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede:
    "Storytelling in crisis communication works because a crisis is never one statement: it unfolds in layers, the way an onion does, and each layer needs its own honest, repeated message. Melissa Agnes teaches that leaders who try to close the story early, wanting the old normal back, lose the trust that layered storytelling builds.",
  keywords: [
    "storytelling in crisis communication",
    "ongoing crisis communication",
    "how often to communicate during a crisis",
    "BBC WhatsApp Ebola",
    "crisis as an onion",
    "layered crisis messaging",
    "Melissa Agnes crisis storytelling",
    "crisis communication repetition",
  ],
  sections: [
    {
      id: "visionary-leader-long-view",
      title: "The Visionary Leader Takes the Long View",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Most crisis statements are written to close the story, not open it: issue the
              line, hold the position, move on. <Link href="/melissa-agnes">Melissa Agnes</Link>,
              founder of the Crisis Ready Institute, argues the opposite in the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link>. Storytelling in crisis
              communication is not a single release; it unfolds the way the crisis itself does,
              in stages, repeated.
            </>
          ),
        },
        {
          t: "quote",
          text: "Defined by the Oxford Dictionary, you've got two definitions of visionary. You've got someone who thinks about or plans the future with imagination or wisdom. That's a leader that I want to be when I think of that. I definitely want to be a wise leader, especially through moments of crisis, and I want to be able to activate my imagination in times of crisis to envision the better tomorrow that as a leader or as a communicator, you are leading people towards.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Session six builds this layered-storytelling lens onto your own scenario.",
          href: "/crisis-masterclass",
          cta: "See the program",
        },
      ],
    },
    {
      id: "comfortable-doesnt-mean-safe",
      title: "Comfortable Doesn't Mean Safe",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa&apos;s cautionary example is Tony Hayward, BP&apos;s chief executive during
              the 2010 Gulf oil spill: the instinct she warns leaders against.
            </>
          ),
        },
        {
          t: "quote",
          text: 'That\'s an infamous quote by former CEO of BP, the oil company, back in 2010 when they had the catastrophic oil spill, and Tony Hayward, the former CEO, the CEO at the time, is infamously remembered by saying, "I\'d like my life back."',
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "Comfortable doesn't actually mean safe, because if we think about it, yesterday is either when the crisis happened or before the crisis happened, leading up to the crisis. So if you want to go back to normal, you're not actually looking to evolve forward, to progress forward, to learn from lessons and learnings and to do things differently, to in fact create that better version, that better next evolution of your company, of your brand, for your community, for the future that you want to lead people to.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "crisis-is-an-onion",
      title: "A Crisis Is an Onion",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa&apos;s metaphor for why leaders cannot revert to normal, part of the wider{" "}
              <Link href="/crisis-ready-formula">Crisis Ready® formula</Link>, is that a crisis
              behaves like an onion.
            </>
          ),
        },
        {
          t: "quote",
          text: "When we look at taking a long-term view and visionary crisis leadership and crisis communication, we want to look at a crisis a little bit like an onion. What you see on the surface of an onion is not the totality of the story. With an onion, you peel back layers. This is an analogy that I did not just make up. With a crisis, we don't have all of the information at the onset of the crisis. If we do, it probably wouldn't be a crisis.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        { t: "callout", text: "The more you peel, the more you reveal." },
        {
          t: "pill",
          text: "Every month of the Crisis Masterclass adds another layer to this model.",
          href: "/crisis-masterclass/inside",
          cta: "See inside the 12 months",
        },
      ],
    },
    {
      id: "why-stories-carry-a-crisis",
      title: "Why Stories Carry a Crisis",
      blocks: [
        { t: "h3", text: "Storytelling in Crisis Communication Beats Dry Facts" },
        {
          t: "p",
          text: (
            <>
              Storytelling is not spin, Melissa says: it is the vehicle for her layering. She
              cites research that people take in stories far more readily than they take in
              facts.
            </>
          ),
        },
        {
          t: "quote",
          text: "It is said by Jennifer Aaker, who is from Stanford, says that stories are remembered up to 22 times more than facts alone. This is a big reason why you don't want to just put out some dry legal jargon out of fear. You really want to bring people along the journey with you, so they're rooting for you, so they trust you, and so that they're holding the vision of where you're going together.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "The National Storytelling Network says that storytelling is the interactive art of using words and actions to reveal the elements and images of a story while encouraging the listener's imagination. We get to do that in our crisis communication.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "Great stories are not rushed, which emphasises that we don't want to just quickly communicate and revert back to normal. There's no growth in that. There's no connection in that. There's just fear in that. Stories are not rushed, they're layered. They're layered with intention, where each reveal should be a worthy extension of the previous effort.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
      ],
    },
    {
      id: "bbc-whatsapp-ebola",
      title: "What the BBC Did With WhatsApp During Ebola",
      blocks: [
        {
          t: "p",
          text: (
            <>
              West Africa was deep into the 2014 Ebola outbreak, and NGOs and governments trying
              to slow its spread were failing. The BBC found WhatsApp was the app these
              communities used daily, and ran a six-week WhatsApp Ebola Service: simple
              storybook-style images rather than long text, plus local musicians. The trial ran
              seven or eight months.
            </>
          ),
        },
        {
          t: "quote",
          text: 'What did they do? They created these storybook, story pictures that told a story. They looked like something from a child\'s book, so they were simple and clear, and in the images themselves, they told a story, and then below the images would be simple text like, "Do not touch people who died of Ebola." Simple text that is easy to comprehend with a graphic, an image of somebody touching a body with a big X. And it worked.',
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        { t: "cta", preset: "checklist" },
      ],
    },
    {
      id: "say-it-more-than-once",
      title: "Say It More Than Once",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa&apos;s next point follows directly: say something once and most people
              never hear it, the same discipline behind why{" "}
              <Link href="/articles/hope-is-not-a-strategy-crisis-response-penalty">
                hope is not a strategy
              </Link>{" "}
              in a crisis response.
            </>
          ),
        },
        {
          t: "quote",
          text: 'George Bernard Shaw said, "The single biggest problem with communication is the illusion that it has taken place." I love that quote. When I think of interpersonal relationships or even intimate spousal relationships, how often does miscommunication happen because one person thought they said something and the other person never heard it.',
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "People need to see messaging more than once to believe it, to remember it, and to believe it. We do this in our marketing messaging. In our marketing messaging, we know that we have to say the same thing over and over in different ways for people to truly believe it and hear it, for it to truly resonate, for people to act on it.",
          cite: "Melissa Agnes, Crisis Ready® course, session 6, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "practical-checklist",
      title: "The Practical Checklist",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Near the end of the session, Melissa runs through her layering guidance. In her
              words:
            </>
          ),
        },
        {
          t: "ul",
          items: [
            "Speak to how people feel, even without every answer.",
            "Prioritise urgency without losing the bigger story.",
            "Break messaging into bite-sized chunks.",
            "Communicate facts as they're confirmed.",
            "Say it more than once, in different ways.",
            "Stay open, flexible and adaptable.",
            "Show, don't tell: action plus communication.",
            "Know your audience and each platform's language.",
          ],
        },
        {
          t: "pill",
          text: "This checklist is one slice of the full Crisis Ready® formula.",
          href: "/crisis-ready-formula",
          cta: "Read the formula",
        },
      ],
    },
    {
      id: "crisis-ready-rule",
      title: "The Crisis-Ready Rule",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa closes by tying storytelling back to something simpler than any framework.
            </>
          ),
        },
        {
          t: "callout",
          text: "Successful business is built on relationships. Successful crisis management prioritises those same very relationships.",
        },
      ],
    },
    {
      id: "what-comes-next",
      title: "What Comes Next",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa ends with a teaser: next month&apos;s case study is{" "}
              <Link href="/case-study/maple-leaf-foods">Maple Leaf Foods</Link>, a brand that did
              this work long before it was common practice. It sits inside the{" "}
              <Link href="/crisis-masterclass/inside">Crisis Masterclass</Link> alongside this
              session.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "How often should you communicate during a crisis?",
      answer:
        "More than once, and more than most leaders are comfortable with. Melissa Agnes teaches that a single update rarely lands: people need to see the same message repeated in different forms before they believe and remember it. Over-communicating is rare; the far more common mistake is going quiet too soon and calling it strategy.",
    },
    {
      question: "What does the 'crisis is an onion' analogy mean?",
      answer:
        "It is Melissa Agnes's metaphor for how a crisis unfolds. You do not have every fact when a crisis begins; if you did, it likely would not be a crisis. Leaders peel back layers over time, and each layer should reveal more truth, more connection and more opportunity to communicate honestly with stakeholders.",
    },
    {
      question: "What did the BBC do with WhatsApp during the Ebola outbreak?",
      answer:
        "In 2014, the BBC found that West African communities were using WhatsApp daily, so it launched a WhatsApp Ebola Service originally planned for six weeks. It sent simple, storybook-style images explaining how the virus spread, aimed at audiences who could not read long text, and the trial ran for months longer than planned.",
    },
    {
      question: "Do stories really get remembered more than facts in a crisis?",
      answer:
        "Melissa Agnes cites Stanford researcher Jennifer Aaker's finding that stories are remembered far more often than facts alone, which is why she warns leaders against leading with dry legal language out of fear. Treat the exact multiple as a claim from her course, not as an independently verified statistic.",
    },
  ],
  references: [
    {
      name: "BBC launches WhatsApp Ebola service (ReliefWeb, 2014)",
      href: "https://reliefweb.int/report/liberia/bbc-launches-whatsapp-ebola-service",
    },
  ],
  related: [
    "maple-leaf-foods-from-tragedy-to-trust",
    "hope-is-not-a-strategy-crisis-response-penalty",
    "you-cannot-beat-emotion-with-logic",
  ],
  sourceNote:
    "Verbatim passages are excerpted from session six of Melissa Agnes's Crisis Ready® course, delivered through the My PR Partner Crisis Masterclass. Her recap of prior sessions, a personal anecdote about a friend's storytelling, and the closing Q&A with host Lyall Mercer were trimmed for length.",
};
