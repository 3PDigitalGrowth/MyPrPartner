import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "maple-leaf-foods-from-tragedy-to-trust",
  title: "From Tragedy to Trust: What Maple Leaf Foods Did in 2008",
  summary:
    "In 2008, a listeria outbreak killed at least 22 people and threatened to end Maple Leaf Foods. This case study breaks down why CEO Michael McCain's response, verified against the public record, became a benchmark other crisis leaders still study today.",
  readTimeMinutes: 7,
  tags: ["crisis communication", "case study", "crisis leadership", "corporate apology"],
  seoTitle: "Maple Leaf Foods Crisis Communication Study | My PR Partner",
  seoDescription:
    "The Maple Leaf Foods crisis communication case study: Michael McCain's 2008 listeria response, verified, and why Melissa Agnes still teaches it.",
  heroImageAlt:
    "A lone executive in a dark suit addressing a bank of television cameras and microphones in a boardroom",
  heroPrompt:
    "A lone executive in a dark suit standing before a bank of television cameras and microphones in a corporate boardroom, mid-statement, solemn and resolute expression, dramatic side lighting, shallow depth of field, 16:10, editorial photography, navy and teal colour grading, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede:
    "In 2008, a listeria outbreak linked to Maple Leaf Foods killed at least 22 people across Canada. What makes the Maple Leaf Foods crisis communication case study a benchmark is not the outbreak but the response: CEO Michael McCain went on camera immediately, accepted full responsibility, ignored his lawyers, and kept talking about it for years.",
  keywords: [
    "Maple Leaf Foods crisis communication case study",
    "Michael McCain apology",
    "listeria crisis 2008 response",
    "Maple Leaf Foods listeria outbreak",
    "crisis leadership case study",
    "corporate crisis apology examples",
    "crisis communication timeline",
    "who do we want to be crisis",
  ],
  sections: [
    {
      id: "what-happened-in-2008",
      title: "What Happened in the 2008 Maple Leaf Foods Crisis",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Every session of the <Link href="/crisis-masterclass">Crisis Masterclass</Link>{" "}
              builds toward this one. In August 2008, a listeria outbreak traced to a Maple
              Leaf Foods plant in Toronto killed at least 22 people across Canada. Most organisations
              in that position would manage the story and wait for it to pass. Maple Leaf
              Foods did the opposite.
            </>
          ),
        },
        { t: "h3", text: "The 2008 outbreak timeline" },
        {
          t: "ol",
          items: [
            { lead: "July 2008:", text: "health authorities detect a rise in listeriosis cases." },
            {
              lead: "August 2008:",
              text: "Maple Leaf traces the outbreak to its Toronto plant and recalls the products; McCain goes on camera to accept full responsibility. At least 22 people ultimately die.",
            },
            {
              lead: "January 2009:",
              text: "stricter safety protocols and staff training follow.",
            },
            {
              lead: "Mid-2009:",
              text: "McCain keeps talking publicly as Maple Leaf markets its renewed safety commitments.",
            },
            {
              lead: "2010 onward:",
              text: "Maple Leaf becomes a vocal advocate for food safety reform and keeps communicating its standards for years after.",
            },
          ],
        },
      ],
    },
    {
      id: "core-values-as-the-north-star",
      title: "Core Values as the North Star",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa Agnes teaches that <Link href="/melissa-agnes">core values</Link> work
              like a compass in a crisis. Maple Leaf Foods had built its name on food safety,
              and this crisis struck at that exact value.
            </>
          ),
        },
        {
          t: "quote",
          text: "core values become your North Star when you're faced with controversy, when you're faced with crisis, when you're faced with so many different options ahead of you, and you don't know which one to take. Reverting back to what are our core values? What do we stand for? What do we believe in, and how do we use those to connect?",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "the-ceo-who-told-his-lawyers-to-wait",
      title: "The CEO Who Told His Lawyers and Accountants to Wait",
      blocks: [
        {
          t: "p",
          text: "Within days, McCain put himself on camera, unusual for 2008. He stated plainly that Maple Leaf Foods was fully responsible, no deflecting.",
        },
        {
          t: "example",
          label: "Michael McCain, Maple Leaf Foods CEO, August 2008",
          tone: "strong",
          text: "Going through the crisis, there are two advisors I've paid no attention to. The first are the lawyers, and the second are the accountants. It's not about money or legal liability. This is about our being accountable for providing consumers with safe food.",
        },
        {
          t: "p",
          text: (
            <>
              Later, with Lyall Mercer, Melissa applies this to organisations whose{" "}
              <Link href="/crisis-masterclass/inside">CEO cannot override legal advice</Link>.
            </>
          ),
        },
        {
          t: "quote",
          text: "Lawyers have been taught their lane. That's their practice. They've been taught certain things. They look at it through their one lens, their filter. But that is not the whole picture. There's a saying in crisis communication that you can win in the court of law and fail in the court of public opinion and not have a brand anymore. That's fact.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7 Q&A with Lyall Mercer, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Month three covers the formula behind McCain's response: validate, relate, prove.",
          href: "/crisis-ready-formula",
          cta: "See the formula",
        },
      ],
    },
    {
      id: "sympathy-that-was-not-a-template",
      title: "Sympathy That Was Not a Template",
      blocks: [
        {
          t: "p",
          text: "Compare McCain's sympathy statement with the line most companies default to. Melissa reads them side by side.",
        },
        {
          t: "example",
          label: "Michael McCain, Maple Leaf Foods CEO, August 2008",
          tone: "strong",
          text: "This is a terrible tragedy. To those people who have become ill and to the families who have lost loved ones, I want to express my deepest and most sincere sympathies. Words cannot begin to express our sadness for your pain.",
        },
        {
          t: "quote",
          text: "That was not a, 'Our hearts go out to all those affected by this incident. Your safety is of our top concern,' which is something that we read far too often from brands who are in similar or different, but still consequential situations.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          t: "quote",
          text: "There's so many times in moments of crisis, especially societal controversies or societal crises, that can be disruptive for an organisation, where an organisation might come out with a huge, beautiful statement that's all fluff, that they're not backing, that they don't actually mean. It's a PR stunt, and it doesn't fly. People see right through it. You have to have both. You have to have the right actions, the right communications being done simultaneously and mirroring each other.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "the-vulnerability-hangover",
      title: "The Vulnerability Hangover",
      blocks: [
        {
          t: "p",
          text: "Melissa connects McCain's approach to Brene Brown's idea of a vulnerability hangover, the doubt that hits after sharing more than feels safe.",
        },
        {
          t: "quote",
          text: "It's extremely exposing. It's extremely vulnerable. Brene Brown talks about vulnerability hangovers, when you are really, truly, authentically you, and you share a little bit more than your comfort zone allows, and you wake up the next morning wondering if you shared too much. That's called a vulnerability hangover. We all experience it. I imagine that Michael McCain had a vulnerability hangover after creating that video and after that video went out into the world. But he had the courage to do it anyway, and it paid off. Why? Because connection is the goal, and vulnerability is one of the fastest, most authentic pathways to connection. And he aced it.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        { t: "capture" },
      ],
    },
    {
      id: "what-it-cost-and-what-it-built",
      title: "What It Cost, and What It Built",
      blocks: [
        {
          t: "p",
          text: "The over $27 million figure Melissa cites matches what Maple Leaf Foods paid to settle the class action. What came after mattered more.",
        },
        {
          t: "quote",
          text: "Despite initial financial losses and reputational damage, estimated at the time to be over $27 million, Maple Leaf Foods successfully regained consumer confidence through its authentic and sustained response. Authentic and sustained response. True desire to connect, true desire to evolve into who they wanted to be, and not shying away from the fact that this awful situation is now a part of their DNA, because it is. And as of November 2024, the brand was valued at approximately 2 billion, with a B, dollars USD.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Session seven walks the whole Maple Leaf Foods timeline and the roadmap that came from it.",
          href: "/crisis-masterclass/inside",
          cta: "Preview the program",
        },
        { t: "cta", preset: "inside" },
      ],
    },
    {
      id: "you-cannot-beat-emotion-with-logic",
      title: "You Cannot Beat Emotion With Logic",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa closes the case study with the principle underneath it: a leader who
              reaches for logic when people are afraid is avoiding the feeling in the room. The
              Masterclass gives this its own full session: read{" "}
              <Link href="/articles/you-cannot-beat-emotion-with-logic">
                You Cannot Beat Emotion With Logic
              </Link>
              .
            </>
          ),
        },
        { t: "callout", text: "Know that you can't beat emotion with logic." },
      ],
    },
    {
      id: "who-do-we-want-to-be",
      title: "Who Do We Want to Be?",
      blocks: [
        {
          t: "p",
          text: "This question comes from the closing conversation between Melissa and co-founder Lyall Mercer. Most organisations ask where they want to be. Melissa's reframe: who you were yesterday got you here, and who you become through it decides what's next.",
        },
        {
          t: "quote",
          text: "You have to ask the who. Because who do I get to be to be the person who's able to lead that 10Xed company? Who do I get to be? I'm saying who do I get to be, not who do I have to be, because I don't want it to be a chore. Who do I get to step into? What's the next evolution of who I am to reach that next level?",
          cite: "Melissa Agnes, Crisis Ready® course, session 7 Q&A with Lyall Mercer, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Melissa Agnes built the Crisis Ready® Model from cases like this one.",
          href: "/melissa-agnes",
          cta: "Meet Melissa Agnes",
        },
      ],
    },
    {
      id: "what-session-seven-covers",
      title: "What Session Seven of the Crisis Masterclass Covers",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This case study is session seven of the Crisis Masterclass. The full{" "}
              <Link href="/case-study/maple-leaf-foods">Maple Leaf Foods case study</Link> goes
              deeper, alongside{" "}
              <Link href="/articles/crisis-is-an-onion-layered-storytelling">
                the layered storytelling approach
              </Link>{" "}
              from the month before, and{" "}
              <Link href="/crisis-masterclass/inside">what the rest of the program covers</Link>.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "What happened in the Maple Leaf Foods crisis of 2008?",
      answer:
        "In 2008, a listeria outbreak traced to a Maple Leaf Foods plant in Toronto killed at least 22 people across Canada and sickened many more. The company's own products were the source, directly contradicting the food safety reputation it had built its name on. CEO Michael McCain went on camera within days to accept full responsibility, an unusual move for a corporate leader at the time.",
    },
    {
      question: "What did Michael McCain say in his 2008 apology?",
      answer:
        "McCain said he was ignoring his lawyers and accountants because the crisis was about accountability to consumers, not money or legal liability, and he offered families who had lost loved ones his deepest and most sincere sympathies. Both statements are public record from Maple Leaf Foods' August 2008 press response and are still used as reference points in crisis communication training.",
    },
    {
      question: "How much did the recall cost Maple Leaf Foods?",
      answer:
        "Melissa Agnes cites an initial estimate of over $27 million in financial and reputational damage, which matches the figure Maple Leaf Foods later paid to settle the outbreak-related class action. That number does not capture everything the company spent on recalls, protocol changes, and years of safety investment that followed, but it is the figure most consistently reported.",
    },
    {
      question: "Why is Maple Leaf Foods used as a crisis communication case study?",
      answer:
        "It shows what layered, sustained crisis communication looks like in practice. Maple Leaf Foods paired transparent, repeated messaging with real action: recalls, a root-cause investigation, new safety protocols, and years of public follow-through. The company treated the crisis as part of its identity rather than a problem to bury, which is what let it rebuild trust instead of just waiting for the story to pass.",
    },
    {
      question: "What does 'win in the court of law, lose in the court of public opinion' mean?",
      answer:
        "It is Melissa Agnes's reminder that legal caution and reputational survival are not the same test. An organisation can follow every piece of legal advice, avoid liability entirely, and still lose the brand if the public never hears an honest, human response. Maple Leaf Foods chose to risk the legal lens in favour of the relationship with its customers.",
    },
  ],
  references: [
    {
      name: "Listeriosis outbreak, Weatherill report findings (CMAJ, 2009)",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2734232/",
    },
    {
      name: "2008 Canada listeriosis outbreak, Wikipedia",
      href: "https://en.wikipedia.org/wiki/2008_Canada_listeriosis_outbreak",
    },
    {
      name: "Maple Leaf settles class action listeriosis lawsuits for $27M, CBC News",
      href: "https://www.cbc.ca/news/canada/maple-leaf-settles-class-action-listeriosis-lawsuits-for-27m-1.696972",
    },
    {
      name: "The best legal advice is often an apology, The Globe and Mail",
      href: "https://www.theglobeandmail.com/report-on-business/small-business/sb-growth/the-best-legal-advice-is-often-an-apology/article626797/",
    },
  ],
  related: [
    "crisis-is-an-onion-layered-storytelling",
    "hope-is-not-a-strategy-crisis-response-penalty",
    "high-stakes-comms-formula",
  ],
  sourceNote:
    "Michael McCain's 2008 statements are public record, verified against contemporary reporting and attributed to him directly, not to Melissa Agnes. Melissa's own commentary is excerpted from Crisis Masterclass session 7, trimmed for repetition and spoken filler; her wording is otherwise unchanged.",
};
