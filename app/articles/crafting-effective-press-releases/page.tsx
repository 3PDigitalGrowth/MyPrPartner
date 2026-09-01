import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Newspaper,
  Shield,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  JsonLd,
} from "@/components/seo/StructuredData";
import { AuthorByline } from "@/components/articles/AuthorByline";
import { NewsletterForm } from "@/components/articles/NewsletterForm";
import { formatPublishedDate, getAllArticles } from "@/lib/articles";

const SLUG = "crafting-effective-press-releases";
const CANONICAL = `https://myprpartner.com/articles/${SLUG}`;

export const metadata: Metadata = {
  title:
    "How to Write a Press Release: A Guide for Australian Organisations | My PR Partner",
  description:
    "A practical guide to press release writing for Australian organisations: finding the news angle, inverted pyramid structure, quotes, approvals, distribution, crisis use and measurement.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "how to write a press release",
    "press release Australia",
    "media release writing",
    "press release structure",
    "media relations training",
    "earned media",
  ],
  openGraph: {
    title:
      "Crafting Effective Press Releases: A Guide for Australian Organisations",
    description:
      "How to find a real news angle, structure a release journalists can use, manage approvals and pitch it without wasting anyone's time.",
    url: CANONICAL,
    siteName: "My PR Partner",
    type: "article",
    images: ["/images/articles/press-release-guide-hero.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Crafting Effective Press Releases: A Guide for Australian Organisations",
    description:
      "How to find a real news angle, structure a release journalists can use, manage approvals and pitch without wasting anyone's time.",
    images: ["/images/articles/press-release-guide-hero.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Body content (approved copy - Google Doc signed off by Lyall, Sep 2026).
// Stored as typed blocks so the page renders consistently and the copy stays
// exactly as approved.
// ─────────────────────────────────────────────────────────────────────────────

type ListItem = string | { lead: string; text: string };

type Block =
  | { t: "p"; text: string }
  | { t: "pseg"; segs: Array<{ text: string; href?: string }> }
  | { t: "h3"; text: string }
  | { t: "ul"; items: ListItem[] }
  | { t: "example"; label: string; tone: "weak" | "strong"; text: string }
  | { t: "callout"; text: string }
  | {
      t: "img";
      src: string;
      alt: string;
      caption?: string;
    }
  | { t: "table"; head: string[]; rows: string[][] };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const LEDE =
  "To write an effective press release, lead with a genuinely newsworthy development, explain the essential facts in the opening paragraph, support them with evidence and useful quotes, and make verification easy. Write for the journalist and their audience, not your organisation. Then distribute it selectively with a brief, relevant email pitch.";

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        t: "p",
        text: "A press release is not an advertisement with a date at the top. It is a source document designed to help a journalist assess, verify and report a story. This guide explains how Australian organisations can find the right angle, structure the release, manage approvals and approach media without wasting anyone's time.",
      },
      {
        t: "p",
        text: "The stakes are higher than publicity. Every release contributes to a relationship with your publics. If it is accurate, useful and honest, it can build trust. If it exaggerates, conceals obvious problems or makes unsupported claims, it can damage the reputation it was meant to protect.",
      },
    ],
  },
  {
    id: "key-takeaways",
    title: "Key takeaways",
    blocks: [
      {
        t: "p",
        text: "Good press release writing begins before the first sentence. You need a real story, a defined audience and evidence that supports the claim. The finished document should give journalists the important facts quickly, provide credible people to interview and survive scrutiny from readers, employees, parents, members, customers and regulators.",
      },
      {
        t: "ul",
        items: [
          "Start with the news, not a description of your organisation.",
          "Write for the audience of the targeted publication or program.",
          "Put the strongest verified facts in the headline and opening paragraph.",
          "Use quotes for judgement, meaning or response, not basic information.",
          "Agree on facts, spokespeople and approvals before distribution.",
          "Send relevant pitches individually and make follow-up easy.",
        ],
      },
    ],
  },
  {
    id: "summary-table",
    title: "Press release summary table",
    blocks: [
      {
        t: "p",
        text: "A useful release has a clear job for every component. The headline earns attention, the opening establishes the news, the body supplies evidence, and the contact details enable verification. If a section exists only to praise the organisation, remove it or replace it with information that helps the journalist assess the story.",
      },
      {
        t: "table",
        head: ["Component", "Purpose", "What to include", "Common mistake"],
        rows: [
          [
            "Headline",
            "State the news",
            "Specific subject, action and consequence",
            "Writing a slogan or vague announcement",
          ],
          [
            "Dateline and lead",
            "Establish the essential facts",
            "Who, what, where, when and why it matters",
            "Beginning with organisational background",
          ],
          [
            "Body",
            "Prove and explain the story",
            "Evidence, context, implications and limitations",
            "Repeating the same claim in different words",
          ],
          [
            "Quote",
            "Add human judgement",
            "Meaning, response, accountability or informed opinion",
            "Using praise that nobody would say aloud",
          ],
          [
            "Boilerplate",
            "Identify the organisation",
            "Short, factual description",
            "Adding a full company history",
          ],
          [
            "Media contact",
            "Enable verification",
            "Named contact, mobile, email and availability",
            "Listing an unattended general inbox",
          ],
          [
            "Email pitch",
            "Explain relevance",
            "Personalised reason the story suits that journalist",
            "Copying the full release into a generic blast",
          ],
        ],
      },
    ],
  },
  {
    id: "what-is-a-press-release",
    title: "What is a press release, and when should you use one?",
    blocks: [
      {
        t: "img",
        src: "/images/articles/press-release-guide-journalist.jpg",
        alt: "A journalist at a busy news desk reading a printed media statement",
        caption:
          "A release is a source document: its job is to help a journalist assess, verify and report the story.",
      },
      {
        t: "p",
        text: "A press release is a factual written statement supplied to media about a development that may warrant coverage. Use one when several journalists need the same verified information, particularly for announcements, research, events, appointments, public responses or crises. Do not issue one merely because your organisation wants attention.",
      },
      {
        t: "p",
        text: "Media relations is one part of public relations. It is often called earned media because you do not buy the placement. You earn editorial consideration by supplying something relevant, credible and timely.",
      },
      {
        t: "p",
        text: "That distinction matters. Payment can secure an advertisement. A release cannot secure independent coverage, nor should it try to disguise promotion as news.",
      },
      { t: "p", text: "A release may be appropriate when your organisation is:" },
      {
        t: "ul",
        items: [
          "announcing a decision with consequences for a defined public",
          "publishing original research or useful local data",
          "responding to an issue already attracting public attention",
          "offering qualified expertise on a current development",
          "launching a service with a meaningful first, solution or community impact",
          "advising people about an event, closure, recall or safety issue",
          "making an experienced spokesperson available for interview.",
        ],
      },
      {
        t: "p",
        text: "Routine activity is rarely enough. A new website, internal award or ordinary product update may matter inside your organisation without being news outside it.",
      },
      {
        t: "callout",
        text: "Ask one blunt question: what changes for the audience because this happened?",
      },
      {
        t: "p",
        text: "If the answer is unclear, the story is not ready. You might need stronger evidence, a more relevant angle or a different communication channel. An email to members, a parent notice, a website update or a social post may serve the public better.",
      },
    ],
  },
  {
    id: "audience-and-news-angle",
    title: "How do you identify the audience and news angle?",
    blocks: [
      {
        t: "p",
        text: "A strong angle connects a verified development with the interests of a particular media audience. Define who is affected, what has changed, why it matters now and why your organisation can speak credibly. The same event may require different angles for local news, education media, business publications and an industry newsletter.",
      },
      {
        t: "p",
        text: "Start with the people, not the media list. Public relations means having a relationship with your publics. For a school, those publics could include parents, students, employees, nearby residents and education authorities. For an association, they may include members, regulators, customers and the broader community.",
      },
      {
        t: "p",
        text: "Then identify which media reach those people and what those outlets consistently cover. Read recent work before pitching. A metropolitan business reporter and a regional radio producer make different editorial decisions, even when looking at the same announcement.",
      },
      { t: "h3", text: "Test the news value" },
      {
        t: "p",
        text: "A credible release usually contains one or more of these qualities:",
      },
      {
        t: "ul",
        items: [
          { lead: "Impact:", text: "The development affects a meaningful group of people." },
          { lead: "Timeliness:", text: "It relates to something happening now or soon." },
          { lead: "Proximity:", text: "It has a clear local or Australian connection." },
          {
            lead: "Consequence:",
            text: "It changes access, cost, safety, policy or behaviour.",
          },
          {
            lead: "Conflict or accountability:",
            text: "It addresses disagreement, failure or responsibility.",
          },
          {
            lead: "Human relevance:",
            text: "Real people can explain what the change means.",
          },
          {
            lead: "Authority:",
            text: "The organisation holds evidence or expertise others cannot easily provide.",
          },
        ],
      },
      {
        t: "p",
        text: 'Do not inflate a weak story with words such as "groundbreaking" or "leading". Those are claims, not evidence.',
      },
      { t: "h3", text: "Write the angle as one sentence" },
      { t: "p", text: "Before drafting, complete this sentence:" },
      {
        t: "callout",
        text: "This matters to [specific audience] because [verified development] means [clear consequence] now.",
      },
      {
        t: "p",
        text: 'For example, imagine an industry association releasing new guidance after a regulatory change. "New guidance launched" is not the angle. The angle is that Australian operators now need to alter a specific practice to meet their obligations, and the association can explain what they should do next.',
      },
      {
        t: "p",
        text: "That sentence becomes your editorial filter. Facts that prove or explain it stay. Corporate history and unrelated messages go.",
      },
    ],
  },
  {
    id: "structure",
    title: "How should you structure a press release?",
    blocks: [
      {
        t: "img",
        src: "/images/articles/press-release-guide-editing.jpg",
        alt: "A communications professional marking up a printed draft document with a pen",
        caption:
          "The inverted pyramid: the most important verified information first, then evidence, quotes and context.",
      },
      {
        t: "p",
        text: "Structure a press release using the inverted pyramid. Put the most important verified information first, followed by supporting evidence, quotes, context and organisational details. A journalist should understand the story from the headline and opening paragraph, then find progressively deeper information without searching through promotional material.",
      },
      { t: "h3", text: "Headline" },
      {
        t: "p",
        text: "Write a factual headline that states what happened. Use an active verb and identify the consequence where possible.",
      },
      {
        t: "example",
        label: "Weak",
        tone: "weak",
        text: "Local organisation announces exciting new initiative",
      },
      {
        t: "example",
        label: "Stronger",
        tone: "strong",
        text: "Regional schools introduce shared bushfire communication protocol",
      },
      {
        t: "p",
        text: "The stronger version identifies the people, action and subject. It gives an editor something concrete to assess.",
      },
      {
        t: "p",
        text: "Avoid clickbait, exclamation marks and claims you cannot demonstrate. The headline must still be accurate when separated from the rest of the release.",
      },
      { t: "h3", text: "Optional subheading" },
      {
        t: "p",
        text: "A subheading can add evidence or explain why the development matters. It should not repeat the headline.",
      },
      {
        t: "p",
        text: "If the headline announces new industry guidance, the subheading might identify the affected organisations or the compliance problem being addressed.",
      },
      { t: "h3", text: "Dateline and opening paragraph" },
      {
        t: "p",
        text: "The opening should answer the essential questions in plain English:",
      },
      {
        t: "ul",
        items: [
          "Who is involved?",
          "What has happened?",
          "Where does it apply?",
          "When does it take effect?",
          "Why does it matter?",
          "How will it work, if that is essential to understanding the news?",
        ],
      },
      {
        t: "p",
        text: "Do not force every answer into one overloaded sentence. Prioritise what a reader needs first.",
      },
      { t: "p", text: "A practical opening might read:" },
      {
        t: "example",
        label: "Example",
        tone: "strong",
        text: "SYDNEY, 10 August 2026: An Australian education association has released new crisis communication guidance to help schools assign decision-making, spokesperson and parent-notification responsibilities before an emergency occurs.",
      },
      {
        t: "p",
        text: "This is hypothetical, but its structure is useful. It names the source, action, audience and consequence immediately.",
      },
      { t: "h3", text: "Supporting paragraphs" },
      {
        t: "p",
        text: "The next paragraphs should establish the evidence and context. Explain what prompted the announcement, who is affected, what will happen next and any important limits.",
      },
      {
        t: "p",
        text: "Keep paragraphs short. Journalists may review releases on a mobile while handling several stories. Dense blocks make verification harder.",
      },
      {
        t: "p",
        text: "Attribute claims clearly. Distinguish fact from opinion. If your release refers to research, include the methodology, sample, dates, sponsor and a link to the complete material. Do not select a striking result while hiding qualifications that change its meaning.",
      },
      { t: "h3", text: "Quotes" },
      {
        t: "p",
        text: "A quote should add something the factual paragraphs cannot. Good quotes offer judgement, explain consequences, acknowledge responsibility or express a clear position.",
      },
      {
        t: "example",
        label: "Weak",
        tone: "weak",
        text: '"We are delighted to announce this exciting initiative and look forward to its success."',
      },
      {
        t: "example",
        label: "Better",
        tone: "strong",
        text: "\"Schools should not be deciding who contacts parents while an incident is unfolding. Those responsibilities need to be assigned, tested and understood beforehand,\" the association's chief executive said.",
      },
      {
        t: "p",
        text: "The second quote sounds like a person with a view. It also gives the journalist a proposition worth examining.",
      },
      {
        t: "p",
        text: "Never invent, polish beyond recognition or approve a quote without the speaker. A quotation is an assertion that the named person said those words.",
      },
      { t: "h3", text: "Boilerplate and media contact" },
      {
        t: "p",
        text: "Finish with a short factual description of the organisation. Explain what it does, who it serves and where it operates. This is not the place for every award, value and service line.",
      },
      {
        t: "p",
        text: "Then provide a named media contact with a monitored mobile number and email address. State whether interviews, photographs, footage, spokespeople or supporting documents are available.",
      },
    ],
  },
  {
    id: "write-clearly",
    title: "How do you write clearly without sounding promotional?",
    blocks: [
      {
        t: "p",
        text: "Write in plain English, prefer specific facts to adjectives and remove any sentence that exists only to praise the organisation. Press release writing should sound like a reliable source briefing a journalist, not a brochure. Clear language also reduces ambiguity when editors shorten, quote or paraphrase your material.",
      },
      {
        t: "pseg",
        segs: [
          { text: "The " },
          {
            text: "Australian Government Style Manual",
            href: "https://www.stylemanual.gov.au/writing-and-designing-content/clear-language-and-writing-style/plain-language-and-word-choice",
          },
          {
            text: " recommends familiar words, concise sentences and information organised around the user's needs. Its plain language guidance is useful beyond government because the underlying discipline is the same: make the intended meaning easy to find.",
          },
        ],
      },
      { t: "h3", text: "Replace claims with proof" },
      {
        t: "p",
        text: "Instead of calling a program innovative, explain what it does differently. Instead of saying demand is growing, provide verified evidence or remove the claim. Instead of describing an executive as a leading expert, state their relevant role and experience.",
      },
      { t: "p", text: "Specific language is more credible:" },
      {
        t: "ul",
        items: [
          '"The service will open at three regional locations" is stronger than "The service will expand significantly".',
          '"Members must complete the new process before enrolment" is clearer than "Members are encouraged to engage with updated arrangements".',
          '"The school will close on Tuesday while engineers inspect the building" is better than "Operations will be temporarily impacted".',
        ],
      },
      {
        t: "p",
        text: "The examples above are illustrative, not reported events.",
      },
      { t: "h3", text: "Edit in passes" },
      {
        t: "p",
        text: "Use separate editing passes rather than trying to fix everything at once:",
      },
      {
        t: "ul",
        items: [
          { lead: "News pass:", text: "Is the development clear in the first paragraph?" },
          { lead: "Evidence pass:", text: "Can every factual claim be verified?" },
          {
            lead: "Audience pass:",
            text: "Does the release explain why readers should care?",
          },
          {
            lead: "Language pass:",
            text: "Can jargon, repetition and praise be removed?",
          },
          {
            lead: "Risk pass:",
            text: "Are privacy, legal, safety or confidentiality issues addressed?",
          },
          {
            lead: "Action pass:",
            text: "Can a journalist reach the right person quickly?",
          },
        ],
      },
      {
        t: "p",
        text: "Read the release aloud. If a quote sounds like a committee wrote it, rewrite it in the speaker's natural language.",
      },
    ],
  },
  {
    id: "approvals-and-checks",
    title: "What approvals and checks are required before release?",
    blocks: [
      {
        t: "p",
        text: "A press release should be checked by the people responsible for the facts, operational response, communications and organisational authority. Legal advice may be necessary, but legal accuracy is not the same as public credibility. The accountable decision-maker must resolve conflicts and approve the final position.",
      },
      {
        t: "p",
        text: "Build an approval process before deadlines arrive. At minimum, assign responsibility for drafting, fact-checking, privacy review, spokesperson approval, final authorisation and distribution.",
      },
      {
        t: "pseg",
        segs: [
          {
            text: "Check names, titles, dates, locations, links, contact details and quoted words. Confirm that claimed services, outcomes and comparisons are accurate. The ",
          },
          {
            text: "ACCC guidance on advertising and promotions",
            href: "https://www.accc.gov.au/business/advertising-and-promotions",
          },
          {
            text: " explains that businesses must not make false or misleading claims. A media release is not exempt merely because no advertising space was purchased.",
          },
        ],
      },
      {
        t: "pseg",
        segs: [
          {
            text: "Personal information needs particular care. A school should not identify a student, publish an image or disclose sensitive circumstances simply because it strengthens the story. Review consent, safeguarding duties and the Australian Privacy Principles where they apply. The Office of the Australian Information Commissioner's ",
          },
          {
            text: "Australian Privacy Principles guidelines",
            href: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines",
          },
          {
            text: " provide the relevant framework for organisations covered by the Privacy Act.",
          },
        ],
      },
      { t: "h3", text: "Never ask a lawyer to write a press release" },
      {
        t: "p",
        text: "Ask lawyers to identify legal risks, test factual accuracy and advise on exposure. Do not ask them to own the public message.",
      },
      {
        t: "p",
        text: "A statement designed only to minimise courtroom risk may sound evasive, cold or incomprehensible to the people who need reassurance. You can win a legal argument and still lose the trust of your publics.",
      },
    ],
  },
  {
    id: "distribution-and-pitching",
    title: "How should you distribute and pitch the release?",
    blocks: [
      {
        t: "p",
        text: "Send the release to journalists whose audience and reporting area genuinely match the story. Use a short personalised email that states the news, explains its relevance and offers access to evidence or interviewees. Distribution quality matters more than the size of an unfiltered media list.",
      },
      {
        t: "p",
        text: "Research recent coverage before making contact. Record the journalist's publication, role, location, relevant topics and stated contact preferences. Media roles change frequently, so verify details rather than relying indefinitely on an old spreadsheet.",
      },
      { t: "h3", text: "Write the email pitch" },
      {
        t: "p",
        text: 'Use a clear subject line based on the story, not "Media release". In the body:',
      },
      {
        t: "ul",
        items: [
          "address the journalist by name",
          "state the central development immediately",
          "explain why it fits their audience or recent reporting",
          "identify available interviews, images or local case material",
          "include the release below the message or as an accessible attachment",
          "provide one reliable contact.",
        ],
      },
      {
        t: "p",
        text: "Do not pretend to have read a journalist's work if you have not. False familiarity is easy to recognise.",
      },
      { t: "h3", text: "Prepare supporting assets" },
      {
        t: "p",
        text: "Make it easy to cover the story accurately. Depending on the subject, your media pack might include:",
      },
      {
        t: "ul",
        items: [
          "high-resolution photographs with captions and permissions",
          "short video footage without promotional music or graphics",
          "spokesperson biographies",
          "research methodology and source documents",
          "a concise fact sheet",
          "pronunciation guidance",
          "regional data or contacts",
          "accessibility information.",
        ],
      },
      {
        t: "p",
        text: "Label files clearly. A journalist should not need to open several attachments to discover what they contain.",
      },
      { t: "h3", text: "Follow up with judgement" },
      {
        t: "p",
        text: "A polite follow-up can be useful when you have new information, a deadline or a particularly strong fit. Repeated calls asking whether the journalist received your email do not improve the story.",
      },
      {
        t: "p",
        text: "If you call, add value. Mention a newly available spokesperson, local example, relevant development or clarification. Respect a refusal and update your records.",
      },
      {
        t: "pseg",
        segs: [
          { text: "The Australian Press Council's " },
          {
            text: "Standards of Practice",
            href: "https://presscouncil.org.au/standards/",
          },
          {
            text: " emphasise accuracy, fairness and correction in published material. Your release should help journalists meet those obligations by making sources, context and verification accessible.",
          },
        ],
      },
    ],
  },
  {
    id: "crisis",
    title: "How do press releases work during a crisis?",
    blocks: [
      {
        t: "p",
        text: "In a crisis, a release should communicate verified facts, immediate actions, public guidance and the next expected update. It cannot repair an unresolved underlying problem or substitute for operational action. Sometimes a holding statement is appropriate, and sometimes silence is wiser. The situation should determine the response, not a slogan.",
      },
      {
        t: "p",
        text: 'People often repeat, "Tell it all, tell it fast, tell the truth." There is truth in it, but it is not a rule to follow blindly.',
      },
      {
        t: "p",
        text: 'You should not publish unverified allegations, compromise an investigation, identify vulnerable people or create a safety risk merely to appear fast. Equally, "no comment" should not become a shield for avoidable secrecy.',
      },
      { t: "p", text: "A useful holding statement can confirm:" },
      {
        t: "ul",
        items: [
          "what is known",
          "what is not yet confirmed",
          "what the organisation is doing",
          "what affected people should do",
          "when further information is expected",
          "where enquiries should be directed.",
        ],
      },
      {
        t: "p",
        text: "Accuracy usually beats speed when the two genuinely conflict. Preparation helps you achieve both.",
      },
      {
        t: "p",
        text: "Create templates, contact lists, approval roles and monitoring procedures before an incident. Most organisations think about communications after something goes wrong. By then, basic decisions compete with operational pressure.",
      },
      {
        t: "p",
        text: "Public relations cannot help if the underlying problem is ignored. Plenty of dodgy operators think they can spin their way through anything. They cannot. Fix what is wrong, protect affected people and then communicate honestly about the action being taken.",
      },
    ],
  },
  {
    id: "trust-document",
    title: "A press release is a trust document, not a publicity document",
    blocks: [
      {
        t: "p",
        text: "The most useful releases do more than generate coverage. They show whether an organisation understands its publics, accepts legitimate concerns and can support its words with action. Judge the draft by the trust it can sustain after journalists, employees, members and critics examine it.",
      },
      {
        t: "p",
        text: 'An industry association I advised was facing what a journalist described as a "hidden camera investigation" into bad behaviour by some people in its industry. The easy response would have been denial, silence or an aggressive statement attacking the program.',
      },
      { t: "p", text: "We recognised that the story was legitimate." },
      {
        t: "p",
        text: "Instead of waiting for the television report, we developed a strategy that addressed the conduct. The association announced a crackdown and approached other media outlets with the action it was taking. It accepted the public interest rather than pretending the behaviour did not matter.",
      },
      {
        t: "p",
        text: "The result was a change in the story. The association was congratulated for acting in the public's interest, and the original report was outdated by the time it aired.",
      },
      {
        t: "p",
        text: "The principle is bigger than getting ahead of a news cycle. A release becomes credible when the action behind it is credible. Words did not solve that problem. A decision to address the behaviour made honest communication possible.",
      },
      {
        t: "p",
        text: "The same principle applies outside crises. I worked with a legal firm that wanted to become a recognised voice of authority. We did not depend on occasional announcements. We built a communications and media strategy around monitoring current news, developing legitimate stories and offering expert legal comment when relevant issues broke.",
      },
      {
        t: "p",
        text: "The firm is now regularly featured across Australian news media and has gained new clients. Its marketing team can also use that independent coverage as evidence of authority.",
      },
      {
        t: "p",
        text: "The lesson is consistency. One release may introduce you to a journalist. Repeatedly providing accurate, relevant and usable information builds the relationship.",
      },
    ],
  },
  {
    id: "measurement",
    title: "How should you measure press release performance?",
    blocks: [
      {
        t: "p",
        text: "Measure a release against its communication objective, not merely the number of mentions. Review whether the right audiences received the message, coverage was accurate, spokespeople were quoted, enquiries were relevant and trust was supported. A large volume of unsuitable coverage may be less useful than one authoritative report.",
      },
      {
        t: "p",
        text: "Before distribution, define what success means. Possible indicators include:",
      },
      {
        t: "ul",
        items: [
          "coverage in publications used by the intended public",
          "accurate inclusion of the central message",
          "requests for interviews or further evidence",
          "visits to the relevant information page",
          "enquiries from members, parents, customers or policymakers",
          "corrections required because the release was unclear",
          "questions that reveal missing information",
          "future approaches from journalists seeking expertise.",
        ],
      },
      {
        t: "p",
        text: "Separate output from outcome. A published article is an output. Better-informed parents, increased member understanding or recognition as a credible expert are outcomes.",
      },
      {
        t: "p",
        text: "Review what journalists used and ignored. If every report explains the story differently from your release, your angle may have been unclear. If reporters repeatedly ask the same question, add that answer to future materials. If nobody responds, reassess the news value before blaming the distribution time.",
      },
      {
        t: "p",
        text: "Media coverage is valuable, but it is not fully controllable. Editors decide whether to cover a story, which facts to emphasise and what additional perspectives to seek. That independence is the reason earned media can carry credibility.",
      },
      {
        t: "p",
        text: "My PR Partner teaches Australian organisations to build this capability in-house through PR training, crisis communication masterclasses, practical checklists, guides and on-call support. The goal is not dependency on an agency. It is helping your team make sound decisions, communicate clearly and know when outside advice is genuinely needed.",
      },
    ],
  },
];

const faqItems = [
  {
    question: "How long should a press release be?",
    answer:
      "A press release should be as short as possible while containing the facts, evidence, context and contact details needed to assess the story. Most routine announcements do not need several pages. Remove repeated claims and lengthy organisational history, but do not omit qualifications that materially affect accuracy.",
  },
  {
    question: "Should I attach a press release or paste it into the email?",
    answer:
      "Provide the essential pitch in the email body so the journalist can assess it immediately. You can paste the release below the pitch, attach an accessible document or link to a media page. Avoid unusual file formats and large attachments. Follow the journalist's stated preference where one is available.",
  },
  {
    question: "What is the best time to send a press release in Australia?",
    answer:
      "There is no universal best time. Consider the journalist's deadlines, location, publication cycle and the timing of the story itself. An embargoed policy story, regional radio opportunity and event announcement require different approaches. Relevance and preparation usually matter more than searching for a supposedly perfect hour.",
  },
  {
    question: "Can a press release guarantee media coverage?",
    answer:
      "No. A release gives journalists information to assess, but editors retain control over coverage. You improve the chance of interest by offering genuine news, credible evidence, a relevant angle and accessible spokespeople. Any adviser guaranteeing independent editorial coverage is confusing earned media with paid placement.",
  },
  {
    question: "Should a school name students in a press release?",
    answer:
      "Only when identification is appropriate, properly authorised and consistent with safeguarding, privacy and school policies. Confirm informed consent for names, images and personal details. Consider whether publication could create foreseeable harm. Consent for one school activity does not automatically authorise unrestricted media use.",
  },
  {
    question: "What should I do if a press release contains an error?",
    answer:
      "Act promptly. Confirm the correct information, notify every recipient clearly, update published versions and identify exactly what changed. Do not quietly replace a document and hope nobody notices. If the error has entered media coverage, contact the journalist with a concise correction and supporting evidence.",
  },
];

const references = [
  {
    name: "Australian Competition and Consumer Commission, Advertising and promotions",
    href: "https://www.accc.gov.au/business/advertising-and-promotions",
  },
  {
    name: "Australian Government Style Manual, Plain language and word choice",
    href: "https://www.stylemanual.gov.au/writing-and-designing-content/clear-language-and-writing-style/plain-language-and-word-choice",
  },
  {
    name: "Australian Press Council, Standards of Practice",
    href: "https://presscouncil.org.au/standards/",
  },
  {
    name: "Office of the Australian Information Commissioner, Australian Privacy Principles guidelines",
    href: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Rendering helpers
// ─────────────────────────────────────────────────────────────────────────────

function BlockRenderer({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <p className="mt-5 text-[16px] leading-[1.75] text-text-medium md:text-[17px]">
          {block.text}
        </p>
      );
    case "pseg":
      return (
        <p className="mt-5 text-[16px] leading-[1.75] text-text-medium md:text-[17px]">
          {block.segs.map((seg, i) =>
            seg.href ? (
              <a
                key={i}
                href={seg.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal underline-offset-4 hover:text-teal-dark hover:underline"
              >
                {seg.text}
              </a>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>
      );
    case "h3":
      return (
        <h3 className="mt-9 font-heading text-[20px] font-bold leading-snug text-text-dark md:text-[22px]">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15.5px] leading-[1.7] text-text-medium md:text-[16.5px]"
            >
              <span
                aria-hidden
                className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
              />
              <span>
                {typeof item === "string" ? (
                  item
                ) : (
                  <>
                    <strong className="font-semibold text-text-dark">
                      {item.lead}
                    </strong>{" "}
                    {item.text}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      );
    case "example":
      return (
        <figure
          className={`mt-5 rounded-card border-l-4 p-5 md:p-6 ${
            block.tone === "weak"
              ? "border-[#C98484] bg-[#FBF4F4]"
              : "border-teal bg-[#F0FAFB]"
          }`}
        >
          <figcaption
            className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${
              block.tone === "weak" ? "text-[#A85B5B]" : "text-teal-dark"
            }`}
          >
            {block.label}
          </figcaption>
          <p className="mt-2 font-heading text-[15.5px] font-semibold leading-relaxed text-text-dark md:text-[16.5px]">
            {block.text}
          </p>
        </figure>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-card bg-text-dark p-6 md:p-7">
          <p className="font-heading text-[17px] font-bold leading-relaxed text-white md:text-[19px]">
            {block.text}
          </p>
        </div>
      );
    case "img":
      return (
        <figure className="mt-7">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card bg-[#F7F8FA]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-text-medium">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-card border border-[#E5E7EB]">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-text-dark">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3.5 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8FA]"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-t border-[#F1F2F5] px-4 py-3.5 align-top text-[14px] leading-relaxed ${
                        j === 0
                          ? "font-semibold text-text-dark"
                          : "text-text-medium"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function SectionRenderer({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </section>
  );
}

type CourseCta = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  accent: string;
  icon: typeof Shield;
};

function CourseCtaCard({ card }: { card: CourseCta }) {
  const Icon = card.icon;
  return (
    <aside className="mt-10 overflow-hidden rounded-card border border-[#E5E7EB] bg-[#F7F8FA]">
      <div className="h-1.5 w-full" style={{ background: card.accent }} />
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white"
            style={{ background: card.accent }}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal">
              {card.eyebrow}
            </p>
            <h3 className="mt-1 font-heading text-[19px] font-bold leading-snug text-text-dark md:text-[21px]">
              {card.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-text-medium">
          {card.body}
        </p>
        <Link
          href={card.href}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          {card.cta}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

const prTrainingCta: CourseCta = {
  href: "/courses",
  eyebrow: "Build the skill in-house",
  title: "Short, focused PR courses - with founding-member pricing",
  body: "Everything in this guide is teachable. Our on-demand course library covers media relations, press release writing and spokesperson skills, built by the senior advisers behind CRC Public Relations. Register your interest now and save 10% on your first course as a founding member.",
  cta: "Browse the courses",
  accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  icon: GraduationCap,
};

const crisisCta: CourseCta = {
  href: "/crisis-masterclass",
  eyebrow: "Most popular program",
  title: "Ready before the crisis: the Crisis Masterclass",
  body: "Holding statements, spokesperson roles and approval chains only work if they exist before the incident. The Crisis Masterclass is Australia's premier crisis communications program, delivered in partnership with the Crisis Ready Institute, and it walks your team through exactly this preparation.",
  cta: "See the masterclass",
  accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  icon: Shield,
};

const endCards = [
  {
    href: "/crisis-masterclass",
    icon: Shield,
    eyebrow: "Most popular",
    title: "Crisis Masterclass",
    body: "Australia's premier crisis communications program - in partnership with the Crisis Ready Institute.",
    cta: "See the masterclass",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/courses",
    icon: BookOpen,
    eyebrow: "Founding-member pricing",
    title: "On-demand PR courses",
    body: "Short, focused courses from senior advisers. Register interest and save 10% on your first course.",
    cta: "Browse the courses",
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
  {
    href: "/resources/crisis-checklist",
    icon: ShieldCheck,
    eyebrow: "Free download",
    title: "Crisis Vulnerability Checklist",
    body: "A 30-point self-assessment of your vulnerability to a reputational crisis. Score your org in 10 minutes.",
    cta: "Get the checklist",
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default async function PressReleaseGuidePage() {
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === SLUG);
  if (!article) return null;

  // Sections 0-5 run to the end of "How should you structure a press release?";
  // the first email capture sits there, then the course CTAs are woven through
  // the back half of the article.
  const beforeCapture = sections.slice(0, 6);
  const writeClearly = sections[6];
  const approvals = sections[7];
  const distribution = sections[8];
  const crisis = sections[9];
  const trust = sections[10];
  const measurement = sections[11];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.summary,
          image: `https://myprpartner.com${article.heroImage}`,
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
          inLanguage: "en-AU",
          mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
          author: {
            "@type": "Person",
            name: "Lyall Mercer",
            jobTitle: "Co-founder, My PR Partner",
            url: "https://myprpartner.com/about/expert-trainers",
          },
          publisher: {
            "@type": "Organization",
            name: "My PR Partner",
            url: "https://myprpartner.com",
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "Articles & insights", url: "https://myprpartner.com/articles" },
          { name: article.title, url: CANONICAL },
        ]}
      />
      <FaqJsonLd items={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── ARTICLE HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={article.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(7,175,187,0.72) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[860px] text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                {article.category}
              </div>
              <h1 className="font-heading text-[30px] font-bold leading-[1.12] text-white sm:text-[38px] md:text-[46px]">
                {article.title}
              </h1>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13.5px] text-white/85">
                <span className="inline-flex items-center gap-2.5">
                  {article.author.avatar && (
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                  <span className="font-semibold text-white">
                    {article.author.name}
                  </span>
                  <span className="hidden sm:inline">{article.author.role}</span>
                </span>
                <span>{formatPublishedDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {article.readTimeMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEDE / QUICK ANSWER ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[760px]">
              <div className="rounded-card border border-[#E5E7EB] bg-[#F0FAFB] p-6 md:p-8">
                <p className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal-dark">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  The short answer
                </p>
                <p className="mt-3 text-[16.5px] font-medium leading-[1.7] text-text-dark md:text-[17.5px]">
                  {LEDE}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
            <div className="mx-auto max-w-[760px]">
              {beforeCapture.map((s) => (
                <SectionRenderer key={s.id} section={s} />
              ))}

              {/* ── EMAIL CAPTURE #1 (mid-article) ── */}
              <div className="mt-12">
                <NewsletterForm theme="light" />
              </div>

              <SectionRenderer section={writeClearly} />
              <CourseCtaCard card={prTrainingCta} />
              <SectionRenderer section={approvals} />
              <SectionRenderer section={distribution} />
              <SectionRenderer section={crisis} />
              <CourseCtaCard card={crisisCta} />
              <SectionRenderer section={trust} />
              <SectionRenderer section={measurement} />

              {/* ── FAQ ── */}
              <section id="faq" className="scroll-mt-28">
                <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
                  Frequently asked questions
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-text-medium md:text-[17px]">
                  These questions address the practical decisions Australian
                  organisations face when preparing and distributing a release.
                  The central principles remain consistent: provide real news,
                  verify every claim, make the journalist&apos;s work easier and
                  protect trust. Formatting matters, but sound judgement and
                  credible action matter more than any template.
                </p>
                <div className="mt-6 space-y-3">
                  {faqItems.map((f) => (
                    <details
                      key={f.question}
                      className="group rounded-card border border-[#E5E7EB] bg-white open:shadow-card"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-[16px] font-bold text-text-dark md:p-6 md:text-[17px] [&::-webkit-details-marker]:hidden">
                        {f.question}
                        <span
                          aria-hidden
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#F0FAFB] text-teal transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-text-medium md:px-6 md:pb-6">
                        {f.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ── REFERENCES ── */}
              <section id="references" className="scroll-mt-28">
                <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
                  References
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-text-medium md:text-[17px]">
                  The following Australian sources support the guidance on plain
                  language, media standards, promotional claims and privacy.
                  They do not replace advice tailored to your organisation&apos;s
                  legal duties, safeguarding responsibilities or circumstances.
                  Check current requirements and obtain qualified advice when a
                  release involves material legal, regulatory or safety risks.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {references.map((ref) => (
                    <li
                      key={ref.href}
                      className="flex gap-3 text-[15.5px] leading-[1.7] text-text-medium"
                    >
                      <span
                        aria-hidden
                        className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
                      />
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal underline-offset-4 hover:text-teal-dark hover:underline"
                      >
                        {ref.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ── AUTHOR CARD ── */}
              <div className="mt-14 rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <AuthorByline author={article.author} size="md" />
                  <Link
                    href="/about/expert-trainers"
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors hover:text-teal-dark"
                  >
                    Meet the trainers
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-text-medium">
                  Lyall Mercer is co-founder of My PR Partner and lead
                  strategist for CRC Public Relations. A former journalist with
                  25+ years of front-line public relations experience, he has
                  advised national and international companies, governments,
                  executives, industry associations and schools on media,
                  reputation and crisis communications.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── COURSE CROSS-SELL BAND ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                Go from reading to capability
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                Learn to do this with your own team
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                This guide covers the method. Our programs and courses build the
                muscle - senior-led training that leaves the capability inside
                your organisation, not with an agency.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {endCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: card.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-1 font-heading text-[18px] font-bold leading-snug text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-medium">
                      {card.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      {card.cta}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EMAIL CAPTURE #2 (newsletter band) ── */}
        <section
          id="subscribe"
          className="relative scroll-mt-28 overflow-hidden bg-text-dark"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/lead-magnet-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-6">
                <h2 className="font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                  Found this useful? The next one lands in your inbox.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  Practical PR writing from senior advisers - crisis,
                  reputation, media and strategy. One thoughtful email,
                  fortnightly at most. Unsubscribe with one click, any time.
                </p>
              </div>
              <div className="lg:col-span-6">
                <NewsletterForm theme="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
