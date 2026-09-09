import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "calmest-person-in-the-room",
  title: "The Calmest Person in the Room: Leading a Crisis From a Regulated Nervous System",
  summary:
    "Crisis trainer Melissa Agnes argues that a leader's own steadiness, not their messaging, is what actually calms a crisis room. This is the business-safe cut of her session on equanimity, regulation and writing from a clear head instead of a frightened one.",
  readTimeMinutes: 6,
  tags: ["crisis communication", "crisis leadership", "emotional regulation", "executive presence"],
  seoTitle: "How to Stay Calm in a Crisis as a Leader | My PR Partner",
  seoDescription:
    "How to stay calm in a crisis as a leader: Melissa Agnes on equanimity, regulation and why the calmest person in the room leads the response.",
  heroImageAlt:
    "A composed leader sitting still and steady while colleagues around a crisis meeting table appear tense and rushed",
  heroPrompt:
    "A composed leader sitting perfectly still at the head of a tense meeting table while colleagues around them lean forward and gesture, editorial photography, low warm key light against cool shadows, shallow depth of field, 16:10, navy teal and white palette, no text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Leaders don't calm a crisis with better wording. They calm it by regulating themselves first: Melissa Agnes teaches that the most composed person in a room, not the most senior one, sets the tone everyone else follows. Learning how to stay calm in a crisis as a leader starts with two minutes of slow breathing before the next meeting.",
  keywords: [
    "how to stay calm in a crisis as a leader",
    "crisis leadership under pressure",
    "Jacinda Ardern crisis communication",
    "equanimity in leadership",
    "regulated nervous system leadership",
    "staying calm under pressure at work",
    "crisis communication training",
    "emotional regulation for leaders",
  ],
  sections: [
    {
      id: "how-to-stay-calm-in-a-crisis-as-a-leader",
      title: "How to Stay Calm in a Crisis as a Leader",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Picture a crisis meeting forty minutes in: phones lighting up, a lawyer
              flagging exposure, someone drafting a holding statement with shaking
              hands. Now look for the person who isn&apos;t moving fast, whose voice
              hasn&apos;t risen. They are rarely the most senior person in the room.
              They are simply the one whose nervous system hasn&apos;t joined the
              panic, and that single fact changes how everyone around them behaves.
            </>
          ),
        },
        {
          t: "p",
          text: (
            <>
              <Link href="/melissa-agnes" className="font-semibold text-teal hover:text-teal-dark">
                Melissa Agnes
              </Link>{" "}
              opens this session by circling back to{" "}
              <Link
                href="/articles/four-levels-of-safety-crisis-leader"
                className="font-semibold text-teal hover:text-teal-dark"
              >
                the four levels of safety
              </Link>{" "}
              she covered the session before, then states her real claim plainly.
            </>
          ),
        },
        {
          t: "quote",
          text: "The truth about safety is that safety comes from within. And oftentimes, we see people misguidedly, because they don't know better, nobody taught them better, look for safety outside of themselves.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "what-equanimity-means-for-a-leader",
      title: "What Equanimity Means for a Leader",
      blocks: [
        {
          t: "p",
          text: <>She calls this inner state equanimity, and she is precise about what she means by it.</>,
        },
        {
          t: "quote",
          text: "It refers to a state of mental balance and even-mindedness, especially in difficult situations. So equanimity is the liberating quality that allows us to keep our hearts open and balanced, quiet and steady, regardless of external circumstances. I view equanimity as internal peace and therefore ultimate freedom.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "the-most-regulated-person-in-the-room",
      title: "The Most Regulated Person in the Room",
      blocks: [
        {
          t: "p",
          text: (
            <>
              She has a saying for what happens next, one she uses often but doesn&apos;t
              claim to have coined: the most regulated person in the room is the most
              powerful person in the room. A dysregulated group doesn&apos;t choose
              calm, it looks for it.
            </>
          ),
        },
        {
          t: "quote",
          text: "So if you walk into a room where everybody else's nervous system is frantic or is simply dysregulated, and you are composed and you're in equanimity. You've found your equanimity. You're in that place of inner safety, inner alignment... And you show up in that state, instantly, instinctively, you are the most powerful, most potent person in the room because now your system is regulating, it's co-regulating everybody else's nervous system. This is science. This is just how we work.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Month five of the Crisis Masterclass builds this exact regulation skill, with the guided practice this excerpt leaves out.",
          href: "/crisis-masterclass/inside",
          cta: "See what's inside",
        },
      ],
    },
    {
      id: "your-writing-carries-your-state",
      title: "Your Writing Carries Your State",
      blocks: [
        {
          t: "quote",
          text: "If you are writing and drafting your communications from that calm, aligned, centered space and place within yourself, you are putting an energetic stamp of safety into those words, and that energy follows those words and lands in the systems of those who read the words or hear the words.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              That same regulation shows up on the page, not just in the room. A
              holding statement drafted in a panicked forty minutes tends to read
              exactly like that: rushed and over-qualified, the same problem covered
              in{" "}
              <Link
                href="/articles/you-cannot-beat-emotion-with-logic"
                className="font-semibold text-teal hover:text-teal-dark"
              >
                why you can&apos;t beat emotion with logic
              </Link>
              .
            </>
          ),
        },
        {
          t: "pill",
          text: "Regulate is the first step of the crisis-ready formula, with a worked example and a template.",
          href: "/crisis-ready-formula",
          cta: "Read the formula",
        },
        { t: "capture" },
      ],
    },
    {
      id: "what-jacinda-ardern-did-during-lockdown",
      title: "What Jacinda Ardern Did During Lockdown",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa Agnes points to Jacinda Ardern&apos;s COVID-era Facebook Lives as
              her example, though she is careful to say the words below are her own
              paraphrase, not a documented quote.
            </>
          ),
        },
        {
          t: "quote",
          text: "I think Jacinda Ardern was a brilliant example of this during COVID when New Zealand was on lockdown, and she would host these Facebook Lives with a country of five million people, and you could see her strength, you could see her resilience... But she didn't shy away from saying, and I'm not quoting verbatim, but she didn't shy away from saying, 'I'm scared, too. This is unprecedented in the history of the world. Nobody has all the answers, and that's scary.'",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "own-the-fear-first",
      title: "Own the Fear First",
      blocks: [
        {
          t: "p",
          text: <>Steadiness starts with honesty about the fear underneath it, she says.</>,
        },
        {
          t: "quote",
          text: "The answer is that you start by owning your truth. If you can't admit to yourself that you're scared, that you're uncertain, that not everything is in your power, in your control, that you don't have all the answers and that scares you on some level. If you can't first admit it to yourself, then you're not going to be able to find your equanimity.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              She gives the same instruction to anyone stuck drafting copy they
              privately don&apos;t believe, the same discernment test she uses to
              decide whether something is even{" "}
              <Link href="/issue-or-crisis" className="font-semibold text-teal hover:text-teal-dark">
                an issue or a crisis
              </Link>
              .
            </>
          ),
        },
        {
          t: "quote",
          text: "My response to that was, if you don't buy and believe in what you are writing, delete your page or open up a new blank page. Take all of the fear and everybody else's fears out of your brain. Breathe... Find your center, and write from your heart, write from your place. Write from there, because that will stamp it with that energy. From there, you can edit.",
          cite: "Melissa Agnes, Crisis Ready® course, session 5, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "The same discernment test applies when you're deciding whether something is even a crisis yet.",
          href: "/issue-or-crisis",
          cta: "Run the check",
        },
      ],
    },
    {
      id: "a-practical-starting-point",
      title: "A Practical Starting Point",
      blocks: [
        {
          t: "h3",
          text: "How to Stay Calm in a Crisis as a Leader, Before the Next Meeting",
        },
        {
          t: "p",
          text: (
            <>
              You don&apos;t need the full course to start. Before your next crisis
              meeting, take two minutes: breathe slowly in through the nose and out
              through the mouth, and let your shoulders drop before you walk in.
              Melissa Agnes&apos;s own homework for this session runs longer: three
              five-minute sessions a day for at least a week.
            </>
          ),
        },
        { t: "cta", preset: "enrol" },
      ],
    },
    {
      id: "where-this-fits-in-the-crisis-masterclass",
      title: "Where This Fits in the Crisis Masterclass",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Regulate is the first of four steps in Melissa Agnes&apos;s crisis-ready
              formula, set out in{" "}
              <Link href="/crisis-ready-formula" className="font-semibold text-teal hover:text-teal-dark">
                the newsletter breakdown
              </Link>
              . The same discipline underpins{" "}
              <Link
                href="/articles/high-stakes-comms-formula"
                className="font-semibold text-teal hover:text-teal-dark"
              >
                the high-stakes comms formula
              </Link>
              . Session five sits inside month five of the{" "}
              <Link href="/crisis-masterclass" className="font-semibold text-teal hover:text-teal-dark">
                Crisis Masterclass
              </Link>
              , delivered with the guided practice this article leaves out.
            </>
          ),
        },
        { t: "cta", preset: "formula" },
      ],
    },
  ],
  faq: [
    {
      question: "How do I stay calm in a crisis as a leader?",
      answer:
        "Start with your own state before you touch the messaging. Crisis communications trainer Melissa Agnes teaches that a leader who is composed, even briefly, steadies the room around them faster than any script does. A practical starting point is two minutes of slow breathing before you walk into the next crisis meeting, building from there.",
    },
    {
      question: "What does equanimity mean in crisis leadership?",
      answer:
        "Equanimity is the inner steadiness a leader holds onto regardless of what is happening around them: mental balance, an open and quiet state, rather than forced calm on the surface. Melissa Agnes teaches it as something a leader builds deliberately, not a personality trait some people simply have and others don't.",
    },
    {
      question: "Why does the calmest person in a room have influence in a crisis?",
      answer:
        "A dysregulated group looks for steadiness even when it isn't consciously aware it's doing so, and organises around whoever provides it. That's the practical case for crisis leadership under pressure: the composed person in the room, not necessarily the most senior one, ends up shaping how everyone else responds.",
    },
    {
      question: "What did Jacinda Ardern do during COVID that's relevant to crisis leadership?",
      answer:
        "During New Zealand's lockdown, Jacinda Ardern paired visible strength in her Facebook Lives with plain admissions that she was scared too. Crisis trainer Melissa Agnes points to this as a model: name the fear honestly, then follow it with reassurance and a plan, rather than projecting false certainty.",
    },
  ],
  related: [
    "high-stakes-comms-formula",
    "you-cannot-beat-emotion-with-logic",
    "four-levels-of-safety-crisis-leader",
  ],
  sourceNote:
    "The quoted passages are drawn from session five of the Crisis Ready® course, a certification session delivered inside Melissa Agnes's own coaching frame. This excerpt leaves out the guided breathing script, the homework protocol, and the electromagnetic-field and physiological material from that session; the framing and explanation around the quotes are ours.",
};
