import Link from "next/link";
import {
  BookOpen,
  Compass,
  FileText,
  HeartHandshake,
  Mic,
  Scale,
  Shield,
  ShieldCheck,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";

/**
 * Maple Leaf Foods, 2008: the reference crisis-response case study.
 * Targets "Maple Leaf Foods crisis management case study", with "Michael
 * McCain apology 2008" and "listeria outbreak crisis communication" as
 * secondary phrases.
 *
 * This is the reference version of the case study: a verified timeline, the
 * public statements and what the response teaches, sourced against public
 * reporting rather than the course transcript alone. Melissa Agnes's own
 * telling of the case, built from session 7 of the Crisis Masterclass, lives
 * at /articles/maple-leaf-foods-from-tragedy-to-trust and is linked from here.
 *
 * Every figure in the prose (outside the quote blocks) is checked against a
 * public source, listed in the "sources" body section at the foot of the
 * page. Where course figures could not be independently verified (the "$2
 * billion" brand valuation Melissa cites) they appear only inside her quoted
 * words, never asserted as fact in our own prose.
 *
 * Deliberately kept out of the main navigation, matching the pattern set by
 * crisis-media-training.tsx.
 */
export const mapleLeafFoodsConfig: LandingConfig = {
  slug: "case-study/maple-leaf-foods",

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Articles & insights", href: "/articles" },
    { name: "Maple Leaf Foods case study", href: "/case-study/maple-leaf-foods" },
  ],

  hero: {
    eyebrow: "Case study",
    eyebrowIcon: FileText,
    title: "Maple Leaf Foods, 2008:",
    titleHighlight: "from tragedy to trust.",
    subhead:
      "A listeria outbreak linked to Maple Leaf Foods killed at least 22 Canadians in 2008. What the company did next, on camera, in public, for years afterwards, is still the case Melissa Agnes teaches as the model crisis response. This is the verified timeline, the public statements and what it means for Australian organisations.",
    trustBadges: ["Verified public record", "Full response timeline", "Taught in the Crisis Masterclass"],
    backgroundImage: "/images/pages/maple-leaf-foods.jpg",
    backgroundAlt: "",
    primaryCta: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
    secondaryCta: { href: "#timeline", label: "See the timeline" },
  },

  quickAnswer: {
    heading: "What did Maple Leaf Foods do in the 2008 listeria crisis?",
    body: (
      <>
        <p>
          In August 2008, Maple Leaf Foods confirmed that listeria from its Toronto processing
          plant had caused a national outbreak, linked to at least 22 deaths and dozens of serious
          illnesses. It remains the deadliest foodborne illness outbreak in Canadian history. CEO
          Michael McCain went on camera himself, on 23 August 2008, and said the company was fully
          responsible, without shifting blame onto suppliers, regulators or bad luck.
        </p>
        <p>
          What followed was not one statement. Maple Leaf recalled the affected products,
          investigated the root cause, rebuilt its safety protocols, and kept talking about the
          crisis publicly for years, well past the point most organisations would prefer a story to
          disappear. The company put the direct cost of the recall at around $20 million when it
          first reported the figure, later revised to as much as $30 million, and separately settled
          a related class action for $27 million in December 2008.
        </p>
        <p>
          A federal independent investigation led by Sheila Weatherill, appointed in January 2009,
          confirmed 22 deaths and set out where Canada&apos;s food safety system had failed. Maple
          Leaf stayed in business, kept its CEO, and by the 2024 financial year reported close to
          $4.9 billion CAD in annual revenue. The response, more than the crisis itself, is what gets
          taught from this case.
        </p>
      </>
    ),
  },

  cardsSection: {
    id: "what-they-did",
    eyebrow: "The response",
    heading: "What Maple Leaf Foods did",
    subhead:
      "Four decisions carry most of the weight in why this response is still studied today.",
    cards: [
      {
        title: "Accepted responsibility on camera",
        body: "CEO Michael McCain recorded the first response himself, days after the outbreak was confirmed, and said the company was fully responsible. No spokesperson stood between the decision and the public, unusual in 2008, when YouTube and social media were barely mainstream.",
        icon: Mic,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Put public health ahead of legal advice",
        body: "McCain said he was ignoring his lawyers and accountants because the issue was accountability to consumers, not money or liability. He backed that with an unhedged apology to victims and their families, not a lawyer-approved statement of regret.",
        icon: Scale,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Fixed the cause and said so",
        body: "Maple Leaf recalled the products, ran an internal investigation into the root cause, and rebuilt its safety protocols and staff training. It explained each step publicly instead of settling the matter quietly with regulators and moving on.",
        icon: ShieldCheck,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Kept talking for years",
        body: "McCain kept discussing the crisis publicly through 2009 and 2010, and Maple Leaf became a vocal advocate for industry-wide food safety reform. The company still references the 2008 outbreak in how it talks about food safety today.",
        icon: Compass,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  bodySections: [
    {
      id: "timeline",
      eyebrow: "Verified timeline",
      heading: "The Maple Leaf Foods timeline",
      nodes: [
        {
          kind: "p",
          text: "Every date below is checked against public reporting rather than taken from the course transcript alone. Full sources are listed at the foot of this page.",
        },
        {
          kind: "ol",
          items: [
            "July 2008: Canadian regulators detect a rise in listeriosis cases.",
            "August 2008: Maple Leaf Foods identifies its Toronto plant as the outbreak source. On 23 August, CEO Michael McCain holds a press conference and releases a video statement accepting full responsibility.",
            "August 2008: A sequence of public statements over the following weeks repeats the same message: preventative action, consumer interests, public health first.",
            "September 2008: Additional recalls follow, and a company-wide review of safety protocols begins.",
            "December 2008: Maple Leaf settles a related class action for $27 million.",
            "January 2009: Enhanced safety protocols and new staff training are introduced. The federal government appoints Sheila Weatherill to independently investigate the outbreak.",
            "2009: The Weatherill report is released, confirming 22 deaths and setting out failures in Canada's food safety system.",
            "Mid-2009: McCain continues discussing the crisis publicly, and Maple Leaf launches marketing built around renewed safety commitments.",
            "2010: Maple Leaf becomes a vocal advocate for industry-wide food safety reform.",
            "2024: Maple Leaf Foods reports annual revenue of close to $4.9 billion CAD.",
          ],
        },
        {
          kind: "cta",
          text: "Session 7 of the Crisis Masterclass walks through this whole case with Melissa Agnes, plus a closing Q&A on working with lawyers.",
          href: "/crisis-masterclass",
          cta: "See the Crisis Masterclass",
        },
      ],
    },
    {
      id: "what-mccain-said",
      eyebrow: "The words",
      heading: "What Michael McCain said",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              Two lines from McCain&apos;s response are still quoted in crisis communication
              training today. Both are excerpted in{" "}
              <Link
                href="/articles/maple-leaf-foods-from-tragedy-to-trust"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Melissa Agnes&apos;s teaching on this case
              </Link>
              , and both are worth reading in full.
            </>
          ),
        },
        {
          kind: "quote",
          text: "Going through the crisis, there are two advisors I've paid no attention to. The first are the lawyers, and the second are the accountants. It's not about money or legal liability. This is about our being accountable for providing consumers with safe food.",
          cite: "Michael McCain, Maple Leaf Foods, August 2008",
        },
        {
          kind: "quote",
          text: "This is a terrible tragedy. To those people who have become ill and to the families who have lost loved ones, I want to express my deepest and most sincere sympathies. Words cannot begin to express our sadness for your pain.",
          cite: "Michael McCain, Maple Leaf Foods, August 2008",
        },
      ],
    },
    {
      id: "why-it-worked",
      eyebrow: "Melissa Agnes's read",
      heading: "Why it worked, in Melissa Agnes's words",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              <Link
                href="/melissa-agnes"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Melissa Agnes
              </Link>
              , founder of the Crisis Ready Institute, teaches this case study in session 7 of the
              Crisis Masterclass. Four of her points explain why the response worked, in her own
              words.
            </>
          ),
        },
        {
          kind: "quote",
          text: "core values become your North Star when you're faced with controversy, when you're faced with crisis, when you're faced with so many different options ahead of you, and kind of like roadmap options ahead of you, and you don't know which one to take. Reverting back to what are our core values? What do we stand for? What do we believe in, and how do we use those to connect?",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "That was not a, 'Our hearts go out to all those affected by this incident. Your safety is of our top concern,' which is something that we read far too often from brands who are in similar or different, but still consequential situations, right?",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "an organisation might come out with a huge, beautiful statement that's all fluff, that they're not backing, that they don't actually mean. It's a PR stunt, and it doesn't fly. People see right through it. You have to have both. You have to have the right actions, the right communications being done simultaneously and mirroring each other.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          kind: "quote",
          text: "I imagine that Michael McCain had a vulnerability hangover after creating that video and after that video went out into the world. But he had the courage to do it anyway, and it paid off. Why? Because connection is the goal, and vulnerability is one of the fastest, most authentic pathways to connection. And he aced it.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass",
        },
        {
          kind: "cta",
          text: "This is one case study out of twelve months of Crisis Masterclass curriculum.",
          href: "/crisis-masterclass/inside",
          cta: "See what's inside",
        },
      ],
    },
    {
      id: "court-of-law-and-public-opinion",
      eyebrow: "Law versus reputation",
      heading: "The court of law and the court of public opinion",
      nodes: [
        {
          kind: "p",
          text: "In the closing conversation of session 7, Melissa Agnes is asked by Lyall Mercer, co-founder of My PR Partner, how a spokesperson without McCain's authority should handle a lawyer who says say nothing. Her answer is the line the Masterclass keeps coming back to.",
        },
        {
          kind: "quote",
          text: "One, lawyers have been taught their lane, right? That's their practice. They've been taught certain things. They look at it through their one lens. They look at it through their lens, their filter. But that is not the whole picture. There's a saying in crisis communication that you can win in the court of law and fail in the court of public opinion and not have a brand anymore. That's fact.",
          cite: "Melissa Agnes, Crisis Ready® course, session 7, My PR Partner Crisis Masterclass, in conversation with Lyall Mercer",
        },
        {
          kind: "p",
          text: (
            <>
              Legal caution and reputational judgement are not the same question, and treating them
              as one is how organisations end up technically compliant and publicly distrusted.
              Whether an incident needs this level of response in the first place is its own
              decision: see{" "}
              <Link href="/issue-or-crisis" className="font-semibold text-teal-dark underline underline-offset-2">
                issue or crisis
              </Link>{" "}
              for how to tell the difference.
            </>
          ),
        },
      ],
    },
    {
      id: "what-it-teaches",
      eyebrow: "For Australian organisations",
      heading: "What it teaches Australian organisations",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              Three things carry over directly. Layer the response: Maple Leaf did not issue one
              statement and move on, it recalled, investigated, fixed, then kept talking about the
              fix for years, the idea Melissa Agnes teaches as{" "}
              <Link
                href="/articles/crisis-is-an-onion-layered-storytelling"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                a crisis is an onion
              </Link>
              . Keep action and communication on the same timeline: recalling the products and
              explaining why mattered as much as the recall itself, the{" "}
              <Link href="/crisis-ready-formula" className="font-semibold text-teal-dark underline underline-offset-2">
                validate, relate, prove
              </Link>{" "}
              pattern shows up in almost every McCain statement quoted above. And take the long
              view: whether an incident is an{" "}
              <Link href="/issue-or-crisis" className="font-semibold text-teal-dark underline underline-offset-2">
                issue or a crisis
              </Link>{" "}
              changes how hard you respond, and Maple Leaf treated this as worth years of
              follow-through, not a story to manage for a fortnight and drop.
            </>
          ),
        },
        {
          kind: "cta",
          text: "Not sure whether your organisation is set up to respond like this yet?",
          href: "/resources/crisis-checklist",
          cta: "Take the free checklist",
        },
      ],
    },
    {
      id: "where-this-sits",
      eyebrow: "Inside the Masterclass",
      heading: "Where this sits in the Crisis Masterclass",
      nodes: [
        {
          kind: "p",
          text: (
            <>
              This case study is session 7 of the twelve month Crisis Masterclass, the month
              Melissa Agnes uses to tie mindset, emotion and leadership together into one real
              example before the program moves on to sequencing a response. See what each month
              covers on{" "}
              <Link
                href="/crisis-masterclass/inside"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Inside the 12 months
              </Link>
              , or go straight to the{" "}
              <Link href="/crisis-masterclass" className="font-semibold text-teal-dark underline underline-offset-2">
                Crisis Masterclass
              </Link>{" "}
              program page for pricing and the ten day free trial.
            </>
          ),
        },
      ],
    },
    {
      id: "sources",
      eyebrow: "Sources",
      heading: "Sources for the figures on this page",
      nodes: [
        {
          kind: "p",
          text: "Every figure stated as fact in the prose above (outside the quoted material) is checked against one of these.",
        },
        {
          kind: "ul",
          items: [
            <>
              <a
                href="https://en.wikipedia.org/wiki/2008_Canada_listeriosis_outbreak"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                2008 Canada listeriosis outbreak, Wikipedia
              </a>{" "}
              : the Toronto plant identification, McCain&apos;s 23 August 2008 statement and the
              December 2008 class action settlement.
            </>,
            <>
              <a
                href="https://www.theglobeandmail.com/report-on-business/maple-leaf-pushed-to-loss-by-listeria-crisis/article20389069/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Maple Leaf pushed to loss by listeria crisis, The Globe and Mail
              </a>{" "}
              : the company&apos;s $20 million and $30 million recall cost estimates.
            </>,
            <>
              <a
                href="https://www.canada.ca/en/news/archive/2009/01/prime-minister-harper-announces-appointment-independent-investigator-listeriosis-outbreak.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Prime Minister announces appointment of independent investigator, Government of
                Canada
              </a>{" "}
              : Sheila Weatherill&apos;s January 2009 appointment.
            </>,
            <>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2734232/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Listeriosis probe identifies multiple deficiencies, CMAJ (via NIH PMC)
              </a>{" "}
              : the Weatherill report&apos;s finding of 22 deaths and its 2009 release.
            </>,
            <>
              <a
                href="https://www.mapleleaffoods.com/news/fourth-quarter-full-year-2024-financial-results/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                Fourth Quarter and Full Year 2024 Financial Results, Maple Leaf Foods
              </a>{" "}
              : reported 2024 revenue of $4,895.0 million CAD.
            </>,
            <>
              <a
                href="https://www.barfblog.com/2008/08/mccain-apologizes-for-maple-leaf-listeria-excellent-risk-communication-will-the-management-of-the-risk-stand-scrutiny/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-dark underline underline-offset-2"
              >
                McCain apologizes for Maple Leaf listeria, barfblog
              </a>{" "}
              : a contemporaneous record, posted 24 August 2008, of McCain&apos;s response.
            </>,
          ],
        },
      ],
    },
  ],

  trainers: {
    id: "trainers",
    eyebrow: "Taught by",
    heading: "Taught by the people who built this into the program",
    subhead:
      "Session 7 is delivered by Melissa Agnes and hosted in conversation with Lyall Mercer, who runs the closing Q&A on working with lawyers.",
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
  },

  faq: {
    id: "faq",
    eyebrow: "Common questions",
    heading: "Maple Leaf Foods case study questions",
    items: [
      {
        question: "Did Maple Leaf Foods recover?",
        answer:
          "Yes. Maple Leaf Foods settled a related class action for $27 million in December 2008, kept its CEO in place, and stayed in business. By the 2024 financial year it reported annual revenue of close to $4.9 billion CAD, still referencing the 2008 outbreak in how it talks about food safety.",
      },
      {
        question: "Why is the McCain apology considered a model?",
        answer:
          "Because McCain appeared on camera himself within days, said the company was fully responsible without shifting blame, and kept discussing the crisis publicly for years afterwards rather than moving on once the story died down. That combination, a human response backed by years of follow-through, is what Melissa Agnes teaches as a template.",
      },
      {
        question: "What is the crisis response penalty?",
        answer:
          "It is Melissa Agnes's term for the extra reputational cost an organisation pays when its response leans on logic and legal caution instead of acknowledging what people are feeling. Maple Leaf avoided it by validating the fear and grief first, then explaining what it was doing about the cause.",
      },
      {
        question: "Is this taught in the Crisis Masterclass?",
        answer:
          "Yes. It is session 7 of the twelve month Crisis Masterclass, delivered by Melissa Agnes as the case study that ties together the program's first six months on mindset, emotion and crisis leadership, with a closing Q&A on working with lawyers.",
      },
    ],
  },

  related: {
    id: "related",
    eyebrow: "Next steps",
    heading: "Where to go from here",
    subhead:
      "This case study is one example. These build the skill, the plan and the program around it.",
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
        body: "What each month of the Crisis Masterclass actually covers, in Melissa Agnes's own words, session by session.",
        cta: "See what's inside",
        icon: Compass,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/articles/maple-leaf-foods-from-tragedy-to-trust",
        eyebrow: "Article",
        title: "From tragedy to trust",
        body: "Melissa Agnes's own telling of the Maple Leaf Foods case, written up from session 7 of the Crisis Masterclass.",
        cta: "Read the article",
        icon: BookOpen,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        href: "/crisis-ready-formula",
        eyebrow: "The formula",
        title: "The Crisis Ready® formula",
        body: "The validate, relate, prove structure behind McCain's statements, with a worked example and a template you can apply.",
        cta: "See the formula",
        icon: HeartHandshake,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        href: "/crisis-media-training",
        eyebrow: "Guide",
        title: "Crisis media training",
        body: "How to build the on-camera skill McCain used, for the spokespeople who would front a crisis for your organisation.",
        cta: "Read the guide",
        icon: Mic,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        sibling: true,
      },
      {
        href: "/issue-or-crisis",
        eyebrow: "Guide",
        title: "Issue or crisis?",
        body: "How to tell whether something needs a Maple Leaf-level response or a smaller one, before you commit to either.",
        cta: "Read the guide",
        icon: Scale,
        accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
        sibling: true,
      },
    ],
  },

  finalCta: {
    eyebrow: "Start the conversation",
    heading: "Find out what your organisation would actually do",
    body: "Tell us the scenario you are most exposed to. A senior adviser will tell you honestly how your current plan and spokespeople would hold up against it, and what a Maple Leaf-style response would take to build.",
    primary: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
    secondary: { href: "/melissa-agnes", label: "Meet Melissa Agnes" },
    backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
  },

  seo: {
    title: "Maple Leaf Foods Crisis Management Case Study 2008",
    description:
      "The Maple Leaf Foods crisis management case study, verified: McCain's 2008 apology, the recall, the Weatherill inquiry and what it teaches leaders.",
    canonical: "https://myprpartner.com/case-study/maple-leaf-foods",
    ogImage: "/images/pages/maple-leaf-foods.jpg",
  },
};
