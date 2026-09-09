import Link from "next/link";
import {
  Award,
  BookOpen,
  Compass,
  FileText,
  Layers,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { LandingConfig } from "@/components/landing/types";
import { YouTubeEmbed } from "@/components/landing/YouTubeEmbed";
import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/lib/articles";

/**
 * Presenter page for Melissa Agnes. Built at request time from the article
 * list so every new Melissa article appears here automatically. People search
 * her name; this page is the Australasian home for it.
 */

export const MELISSA_VIDEOS = [
  {
    id: "YTAgjy2G9co",
    title: "How to Be a Visionary Leader in Uncertain Times",
    note: "Melissa on the long view a crisis leader has to hold, the theme of month six of the Crisis Masterclass.",
  },
  {
    id: "5ka7WxTP09o",
    title: "You Can't Lead From Survival Mode: How to Shift Out of Stress Fast",
    note: "The nervous-system side of crisis leadership, which months three to five of the Crisis Masterclass build on.",
  },
];

export function buildMelissaAgnesConfig(articles: Article[]): LandingConfig {
  const melissaArticles = articles.filter((a) => a.author.slug === "melissa-agnes");

  return {
    slug: "melissa-agnes",

    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Expert trainers", href: "/about/expert-trainers" },
      { name: "Melissa Agnes", href: "/melissa-agnes" },
    ],

    hero: {
      eyebrow: "Presenter, Crisis Masterclass",
      eyebrowIcon: UserRound,
      title: "Melissa Agnes,",
      titleHighlight: "creator of the Crisis Ready® Model.",
      subhead:
        "Founder and CEO of the Crisis Ready Institute, best-selling author of Crisis Ready: Building an Invincible Brand in an Uncertain World, and the presenter of every session of the Crisis Masterclass. Her Crisis Ready course is available in Australasia only through My PR Partner.",
      trustBadges: [
        "Founder, Crisis Ready Institute (USA)",
        "Creator of the Crisis Ready® Model",
        "Exclusive to My PR Partner in Australasia",
      ],
      backgroundImage: "/images/melissa-agnes-stage.webp",
      backgroundAlt: "",
      primaryCta: { href: "/crisis-masterclass", label: "Learn with Melissa in the Crisis Masterclass" },
      secondaryCta: { href: "#articles", label: "Read her articles" },
    },

    quickAnswer: {
      heading: "Who is Melissa Agnes?",
      body: (
        <>
          <p>
            Melissa Agnes is a recognised leading authority on crisis communication, crisis
            leadership and brand protection. Based in the United States, she founded the Crisis
            Ready Institute and created the Crisis Ready® Model, which has been globally
            recognised as having elevated industry best practice. She has worked with
            ministries of foreign affairs and defence, NATO and many other leading organisations,
            and is a regular contributor to media outlets across North America.
          </p>
          <p>
            In Australasia, her Crisis Ready course is delivered exclusively through the{" "}
            <Link href="/crisis-masterclass" className="text-teal-dark underline underline-offset-2">
              My PR Partner Crisis Masterclass
            </Link>
            : twelve monthly sessions presented by Melissa, with workbooks in her words and a
            monthly Q&amp;A alongside Lyall Mercer of CRC Public Relations. The core ideas of
            the course, including{" "}
            <Link href="/crisis-ready-formula" className="text-teal-dark underline underline-offset-2">
              the Validate, Relate, Prove formula
            </Link>{" "}
            and{" "}
            <Link href="/issue-or-crisis" className="text-teal-dark underline underline-offset-2">
              the issue-versus-crisis framework
            </Link>
            , are set out in her own words in the articles on this page.
          </p>
        </>
      ),
    },

    cardsSection: {
      id: "the-model",
      eyebrow: "What she teaches",
      heading: "The ideas that run through the Crisis Ready® course",
      subhead:
        "Each of these is a month of the Crisis Masterclass. The articles below are Melissa's own explanation of each one.",
      cards: [
        {
          title: "Crisis ready is a culture, not a document",
          body: (
            <>
              A plan that sits on a shelf is not readiness. Melissa defines crisis ready as
              being culturally prepared for anything that can hurt people, the environment, the
              economy or the business.{" "}
              <Link href="/articles/hope-is-not-a-strategy-crisis-response-penalty" className="text-teal-dark underline underline-offset-2">
                Read about the crisis response penalty
              </Link>
              .
            </>
          ),
          icon: ShieldCheck,
          accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        },
        {
          title: "Issue or crisis: the label decides the response",
          body: (
            <>
              A crisis stops business as usual, needs escalation straight to the top and
              threatens material impact. Getting the label wrong in either direction carries a
              penalty.{" "}
              <Link href="/issue-or-crisis" className="text-teal-dark underline underline-offset-2">
                Run the five-question check
              </Link>
              .
            </>
          ),
          icon: Sparkles,
          accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        },
        {
          title: "You cannot beat emotion with logic",
          body: (
            <>
              Fear puts people into survival mode and takes the reasoning brain offline. Validate
              the emotion, relate to what people care about, then prove.{" "}
              <Link href="/crisis-ready-formula" className="text-teal-dark underline underline-offset-2">
                Read the formula
              </Link>
              .
            </>
          ),
          icon: Compass,
          accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
        },
        {
          title: "Four levels of safety",
          body: (
            <>
              Physical, psychological, emotional and energetic. A leader is responsible for all
              four, and most only think about the first.{" "}
              <Link href="/articles/four-levels-of-safety-crisis-leader" className="text-teal-dark underline underline-offset-2">
                The four levels explained
              </Link>
              .
            </>
          ),
          icon: Layers,
          accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
        },
        {
          title: "The calmest person in the room",
          body: (
            <>
              The most regulated person in the room is the most powerful person in it. Safety
              comes from within, and a leader lends it.{" "}
              <Link href="/articles/calmest-person-in-the-room" className="text-teal-dark underline underline-offset-2">
                Leading from a regulated nervous system
              </Link>
              .
            </>
          ),
          icon: UserRound,
          accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        },
        {
          title: "A crisis is an onion",
          body: (
            <>
              The story is never told once. Layer it, say it more than once, and take people
              with you to where the organisation is going.{" "}
              <Link href="/case-study/maple-leaf-foods" className="text-teal-dark underline underline-offset-2">
                See it done at Maple Leaf Foods
              </Link>
              .
            </>
          ),
          icon: FileText,
          accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
        },
      ],
    },

    bodySections: [
      {
        id: "articles",
        eyebrow: "In her own words",
        heading: "Articles by Melissa Agnes",
        nodes: [
          {
            kind: "p",
            text: (
              <>
                Drawn from her Crisis Ready Institute newsletters and the sessions of the Crisis
                Masterclass, each piece is Melissa&apos;s writing with a short frame from My PR
                Partner. New articles appear here as they publish.
              </>
            ),
          },
          {
            kind: "custom",
            node:
              melissaArticles.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {melissaArticles.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              ) : (
                <p className="text-[15px] text-text-medium">Articles are on their way.</p>
              ),
          },
          {
            kind: "cta",
            text: "Everything in these articles is taught in full, with workbooks and a monthly Q&A, inside the Crisis Masterclass.",
            href: "/crisis-masterclass/inside",
            cta: "See inside the 12 months",
          },
        ],
      },
      {
        id: "watch",
        eyebrow: "Watch",
        heading: "Melissa Agnes on leadership under pressure",
        nodes: [
          {
            kind: "p",
            text: (
              <>
                Two talks from Melissa&apos;s own channel that sit closest to what the Crisis
                Masterclass teaches. The course sessions themselves are recorded for members
                only.
              </>
            ),
          },
          {
            kind: "custom",
            node: (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {MELISSA_VIDEOS.map((v) => (
                  <figure key={v.id}>
                    <YouTubeEmbed id={v.id} title={v.title} />
                    <figcaption className="mt-3">
                      <p className="font-heading text-[15.5px] font-bold text-text-dark">{v.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-text-medium">{v.note}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ),
          },
          {
            kind: "cta",
            text: "The full course, twelve sessions with Melissa, is $340 a month with a ten-day free trial.",
            href: "/crisis-masterclass",
            cta: "See the Crisis Masterclass",
          },
        ],
      },
      {
        id: "about",
        eyebrow: "Background",
        heading: "About Melissa Agnes",
        nodes: [
          {
            kind: "p",
            text: (
              <>
                Melissa Agnes is the founder and CEO of the Crisis Ready Institute and the
                creator of the Crisis Ready® Model. Her book, Crisis Ready: Building an
                Invincible Brand in an Uncertain World, set out the idea that runs through
                everything she teaches: readiness is a culture, connection is the goal, and
                you cannot beat emotion with logic.
              </>
            ),
          },
          {
            kind: "p",
            text: (
              <>
                She has advised ministries of foreign affairs and defence, NATO and many other
                leading organisations on building brands that can withstand the most damaging
                events, and she is a regular contributor to media outlets across North America.
                In the Crisis Masterclass she presents every session, writes the workbook that
                accompanies it, and joins Lyall Mercer for the monthly Q&amp;A.
              </>
            ),
          },
          {
            kind: "quote",
            text: "Leadership is not about rank. Leadership is about impact. So I really don't care where you sit on the organizational chart. If you are an intern at a brand new organization, fresh out of college, and you're listening to this, you're watching this, you have the most tremendous opportunity to step into this next evolution of your own leadership.",
            cite: "Melissa Agnes, Crisis Ready® course, session 1, My PR Partner Crisis Masterclass",
          },
          {
            kind: "p",
            text: (
              <>
                Melissa is one of the{" "}
                <Link href="/about/expert-trainers" className="text-teal-dark underline underline-offset-2">
                  expert trainers
                </Link>{" "}
                behind My PR Partner&apos;s programs. Her work appears in the{" "}
                <Link href="/crisis-masterclass" className="text-teal-dark underline underline-offset-2">
                  Crisis Masterclass
                </Link>{" "}
                and in the crisis modules of the{" "}
                <Link href="/programs/business" className="text-teal-dark underline underline-offset-2">
                  business
                </Link>{" "}
                and{" "}
                <Link href="/programs/schools" className="text-teal-dark underline underline-offset-2">
                  schools
                </Link>{" "}
                programs.
              </>
            ),
          },
        ],
      },
    ],

    faq: {
      id: "faq",
      eyebrow: "Common questions",
      heading: "Questions about Melissa Agnes and the course",
      items: [
        {
          question: "Can I take Melissa Agnes's Crisis Ready course in Australia?",
          answer:
            "Yes. In Australasia the Crisis Ready course is delivered exclusively through the My PR Partner Crisis Masterclass, a 12-month online program with a session from Melissa each month, workbooks, a monthly Q&A and a certificate endorsed by CRC Public Relations.",
        },
        {
          question: "Does Melissa Agnes take part live?",
          answer:
            "Each month's session is a recorded video presented by Melissa for the Australasian program. The monthly Q&A is a live discussion with Melissa Agnes and Lyall Mercer, with member questions submitted in advance.",
        },
        {
          question: "What is the Crisis Ready® Model?",
          answer:
            "The Crisis Ready® Model is Melissa Agnes's approach to crisis readiness as a culture rather than a plan: mindset, skillset and capabilities built before a crisis, with connection as the goal of every crisis communication. The Crisis Masterclass works through it over twelve months.",
        },
        {
          question: "Is her book part of the course?",
          answer:
            "The course stands on its own. Melissa's book, Crisis Ready: Building an Invincible Brand in an Uncertain World, is useful background reading and is referenced in the sessions, but it is not required.",
        },
      ],
    },

    related: {
      id: "related",
      eyebrow: "Next steps",
      heading: "Learn with Melissa",
      subhead: "Where her material lives on this site, and how to take the full course.",
      links: [
        {
          href: "/crisis-masterclass",
          eyebrow: "The full program",
          title: "Crisis Masterclass",
          body: "Twelve months with Melissa Agnes and Lyall Mercer. $340 a month ex GST, ten-day free trial.",
          cta: "See pricing and enrol",
          icon: Award,
          accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        },
        {
          href: "/crisis-masterclass/inside",
          eyebrow: "Month by month",
          title: "Inside the 12 months",
          body: "Melissa's own message for every session, so you can see what you are enrolling in.",
          cta: "See inside",
          icon: Layers,
          accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
        },
        {
          href: "/crisis-ready-formula",
          eyebrow: "The formula",
          title: "Validate, relate, prove",
          body: "The order that gets a high-stakes message heard, with the exercise to run on your own scenario.",
          cta: "Read the formula",
          icon: Compass,
          accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
        },
        {
          href: "/resources/crisis-checklist",
          eyebrow: "Free download",
          title: "Crisis Vulnerability Checklist",
          body: "A 30-point self-assessment of your exposure to a reputational crisis.",
          cta: "Get the checklist",
          icon: ShieldCheck,
          accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
          sibling: true,
        },
        {
          href: "/crisis-media-training",
          eyebrow: "Related guide",
          title: "Crisis media training",
          body: "Spokesperson practice for the interview on the worst day of the year.",
          cta: "Read the guide",
          icon: MonitorPlay,
          accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
          sibling: true,
        },
        {
          href: "/articles",
          eyebrow: "All articles",
          title: "Articles and insights",
          body: "Crisis, reputation, media and strategy from Melissa Agnes, Lyall Mercer and the CRC Public Relations team.",
          cta: "Browse the articles",
          icon: BookOpen,
          accent: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
          sibling: true,
        },
      ],
    },

    finalCta: {
      eyebrow: "Enrol",
      heading: "Learn crisis leadership from the person who wrote the model",
      body: "Twelve monthly sessions with Melissa Agnes, workbooks in her words, and a monthly Q&A with Melissa and Lyall Mercer. Exclusive to My PR Partner in Australasia.",
      primary: { href: "/crisis-masterclass", label: "See the Crisis Masterclass" },
      secondary: { href: "/crisis-masterclass/inside", label: "See inside the 12 months" },
      backgroundImage: "/images/crisis-masterclass/final-cta-bg.jpg",
    },

    seo: {
      title: "Melissa Agnes: Crisis Ready Course Australia | My PR Partner",
      description:
        "Melissa Agnes, creator of the Crisis Ready Model, presents the Crisis Masterclass exclusively through My PR Partner in Australasia. Articles, talks and course.",
      canonical: "https://myprpartner.com/melissa-agnes",
      ogImage: "/images/melissa-agnes-stage.webp",
    },
  };
}
