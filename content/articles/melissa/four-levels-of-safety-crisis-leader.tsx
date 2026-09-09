import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

export const card = {
  slug: "four-levels-of-safety-crisis-leader",
  title: "The Four Levels of Safety a Leader Owes People in a Crisis",
  summary:
    "Physical safety is only one of four levels a crisis leader is responsible for creating. Melissa Agnes names psychological, emotional and energetic safety as the other three, and explains why control is not the same as leadership.",
  readTimeMinutes: 5,
  tags: ["crisis communication", "crisis leadership", "psychological safety", "trauma-informed leadership"],
  seoTitle: "Psychological Safety in Crisis Communication | My PR Partner",
  seoDescription:
    "Melissa Agnes on psychological safety in crisis communication and the four levels of safety every crisis leader is responsible for creating.",
  heroImageAlt: "A calm leader crouching to speak at eye level with a distressed colleague in a quiet corridor.",
  heroPrompt:
    "Editorial photograph of a calm leader kneeling to speak at eye level with a distressed colleague in a quiet office corridor during a workplace crisis, soft natural light, empathetic body language, shallow depth of field, 16:10, navy and teal and white palette, editorial photography, no text, no logos.",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede:
    "A leader who says everyone was safe often means nobody was hurt and the building held. Psychological safety in crisis communication asks for more than that: physical safety is only one of four levels, alongside psychological, emotional and energetic safety, that a leader is responsible for creating so people can trust and follow them.",
  keywords: [
    "psychological safety in crisis communication",
    "trauma-informed crisis leadership",
    "four levels of safety",
    "emotional safety in a crisis",
    "energetic safety leadership",
    "traumatisation in a crisis",
    "crisis leadership trust",
    "psychological safety at work",
  ],
  sections: [
    {
      id: "what-safety-really-means",
      title: "What Psychological Safety in Crisis Communication Really Means",
      blocks: [
        {
          t: "p",
          text: (
            <>
              A leader walks out of a crisis debrief and says everyone was safe the whole time.
              Nobody was hurt, the building held, security did its job. That is physical safety,
              and it matters. It is also only one part of the job. Psychological safety in crisis
              communication, the framework Melissa Agnes teaches inside the{" "}
              <Link href="/crisis-masterclass">Crisis Masterclass</Link>, treats safety as
              something a leader creates through presence and permission. A person can be unhurt
              and still be unravelling in front of you.
            </>
          ),
        },
      ],
    },
    {
      id: "why-crises-traumatise",
      title: "Why Crises Traumatise People",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa Agnes ties this back to the nervous system work she covers earlier in the
              course, the same shutdown explored in{" "}
              <Link href="/articles/you-cannot-beat-emotion-with-logic">
                You Cannot Beat Emotion With Logic
              </Link>
              : fear-based emotion shuts down clear thinking, and an unmanaged crisis can tip a
              person into something heavier.
            </>
          ),
        },
        {
          t: "quote",
          text: "So traumatisation occurs when something happens too fast, too much, and too soon to our systems. When we experience something too much too fast, too soon, essentially it is putting our system on overdrive.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
      ],
    },
    {
      id: "the-four-levels-of-safety",
      title: "The Four Levels of Safety a Leader Owes",
      blocks: [
        {
          t: "p",
          text: <>Most leaders stop at the first level. Melissa Agnes names four.</>,
        },
        {
          t: "quote",
          text: "So it's not just about, what we might assume comes to mind would be physical safety. Physical safety is absolutely one of these four levels, but it's not the only one. So your role as a leader, as a communicator is you are, or part of your role is you are responsible for helping to facilitate four different levels of safety for those that you are leading and communicating with. Those four different levels of safety are physical, as I just mentioned, psychological, emotional, and energetic.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Physical safety" },
        {
          t: "p",
          text: (
            <>This is the level people picture first: the room, the exits, the tone in the air.</>
          ),
        },
        {
          t: "quote",
          text: "So as a leader, fostering physical safety means noticing the small but powerful signals. So we're talking body language, we're talking proximity, we're talking tone environment. And ensuring that nothing in the space unintentionally communicates danger.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Psychological safety" },
        {
          t: "p",
          text: (
            <>
              This is where most leaders under-deliver: the freedom for someone to disagree with
              you and stay in the room.
            </>
          ),
        },
        {
          t: "quote",
          text: "Psychological safety is rooted in perception and trust. It's about the freedom of thought, expression and difference.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Emotional safety" },
        {
          t: "p",
          text: (
            <>
              Not the same as keeping people calm or comfortable. It is holding space for a
              reaction you did not want.
            </>
          ),
        },
        {
          t: "quote",
          text: "This is the felt permission to feel fully. It means people know that they will not be shamed or gaslit or pathologised for having an emotional response in your presence to a situation... This isn't just about keeping people comfortable. This isn't just about quickly responding to then avoid and dodge the discomfort. This is about creating a space where discomfort can be metabolised and processed together rather than avoided or suppressed.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        { t: "h3", text: "Energetic safety" },
        {
          t: "p",
          text: (
            <>
              This one has nothing to do with the words in your statement; the{" "}
              <Link href="/crisis-ready-formula">Crisis Ready Formula</Link> pairs it with a
              regulated leader, not a well-written line.
            </>
          ),
        },
        {
          t: "quote",
          text: "Energetic safety is what happens when you have a coherent heart and brain, and therefore a regulated nervous system.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "Month four of the Crisis Masterclass goes deeper into all four levels, with the reflection questions Melissa uses in her own coaching.",
          href: "/crisis-masterclass/inside",
          cta: "See inside the program",
        },
      ],
    },
    {
      id: "control-is-a-tool-of-fear",
      title: "Control Is a Tool of Fear",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Leaders reach for control when a crisis makes them feel like they are losing it,
              the same instinct that makes some leaders{" "}
              <Link href="/issue-or-crisis">mislabel a manageable issue as a crisis</Link> in the
              first place.
            </>
          ),
        },
        {
          t: "callout",
          text: "Control is a tool of fear. We seek to control as humans, we seek to control things that we fear we are losing control of.",
        },
        { t: "capture" },
      ],
    },
    {
      id: "what-you-can-control",
      title: "What You Can Actually Control",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Once you accept that a stakeholder&apos;s feelings are not yours to manage, the job
              changes shape.
            </>
          ),
        },
        {
          t: "quote",
          text: "We cannot control how people feel. You cannot control how people feel. What you can control is how you're able to be present with how people feel, how you're able to meet them in those emotions, and how you're able to not flinch and lead them and give them an opportunity to feel safe enough to follow you.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        {
          t: "pill",
          text: "The Crisis Ready Formula is how this shows up in an actual statement, not just in theory.",
          href: "/crisis-ready-formula",
          cta: "Read the formula",
        },
      ],
    },
    {
      id: "the-calmest-person-in-the-room",
      title: "The Calmest Person in the Room",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Energetic safety comes back to this line, one Melissa Agnes uses often enough that
              she cannot trace where she first heard it.
            </>
          ),
        },
        {
          t: "quote",
          text: "As human beings, we co-regulate because why? Because we're wired for a connection. We talked about that last session. So one of the things, and I don't know who to attribute this to, but I love saying, and I say frequently, the calmest person, the most regulated nervous system in the room is the most powerful person in the room.",
          cite: "Melissa Agnes, Crisis Ready® course, session 4, My PR Partner Crisis Masterclass",
        },
        {
          t: "p",
          text: (
            <>
              There is a full breakdown of what this looks like under pressure in{" "}
              <Link href="/articles/calmest-person-in-the-room">
                The Calmest Person in the Room
              </Link>
              .
            </>
          ),
        },
        {
          t: "pill",
          text: "Melissa Agnes built her whole teaching practice on this kind of nervous-system-first leadership.",
          href: "/melissa-agnes",
          cta: "Meet Melissa Agnes",
        },
      ],
    },
    {
      id: "where-to-start",
      title: "Where to Start",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Melissa Agnes&apos;s homework for this session is a no-judgement audit across all
              four levels. Where are you already strong? Where do you get defensive or shut down?
              The point is not to score yourself, it is to notice the pattern before the next
              crisis forces you to.
            </>
          ),
        },
        {
          t: "p",
          text: (
            <>
              A version of that audit, built out as a working{" "}
              <Link href="/resources/crisis-checklist">checklist</Link>, sits inside the Crisis
              Masterclass.
            </>
          ),
        },
        { t: "cta", preset: "checklist" },
      ],
    },
    {
      id: "keep-going",
      title: "Building This Into Your Leadership",
      blocks: [
        {
          t: "p",
          text: (
            <>
              This session sits inside the certification stream of the{" "}
              <Link href="/crisis-masterclass/inside">Crisis Masterclass</Link>, alongside the
              emotion breakdown covered in{" "}
              <Link href="/articles/anger-is-a-veil-emotion">Anger Is a Veil Emotion</Link>.
            </>
          ),
        },
        {
          t: "p",
          text: (
            <>
              Both build on one idea: a crisis leader&apos;s job is not to control how people
              feel, it is to be safe enough to be near.
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
  ],
  faq: [
    {
      question: "What are the four levels of safety in crisis communication?",
      answer:
        "Melissa Agnes names four: physical safety (the environment and body language), psychological safety (freedom of thought and trust), emotional safety (permission to feel without shame) and energetic safety (a leader's own regulated nervous system). A crisis leader is responsible for creating all four, not physical safety alone.",
    },
    {
      question: "What is psychological safety in a crisis?",
      answer:
        "Psychological safety is rooted in perception and trust: the sense that people can show up with their own ideas, questions and truths without being punished for it. In a crisis, that means a stakeholder can challenge a decision or ask an uncomfortable question and still feel safe in the room.",
    },
    {
      question: "Why is control the wrong goal in a crisis?",
      answer:
        "Melissa Agnes calls control a tool of fear: people reach for it when they sense they are losing it. A leader cannot control how a stakeholder feels about a crisis. What they can control is how present they are with those feelings, which builds trust rather than forced compliance.",
    },
    {
      question: "What does trauma-informed crisis leadership involve?",
      answer:
        "It starts with understanding traumatisation, when something happens too fast and too much for a person's system to process, and working to prevent it or its retraumatisation. A trauma-informed leader creates physical, psychological, emotional and energetic safety rather than assuming an unhurt person is an unaffected one.",
    },
  ],
  related: ["anger-is-a-veil-emotion", "calmest-person-in-the-room", "you-cannot-beat-emotion-with-logic"],
  sourceNote:
    "The four-levels framework and the quoted lines on traumatisation, control and presence are excerpted verbatim from Session 4 of Melissa Agnes's Crisis Ready course, part of the Crisis Masterclass's advanced certification material. The session's full emotion-by-emotion breakdown is held for a companion article, Anger Is a Veil Emotion.",
};
