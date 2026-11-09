import Link from "next/link";
import HeldLink from "@/components/shared/HeldLink";
import type { ArticleDoc } from "@/content/articles/types";

const linkClass = "text-teal underline underline-offset-4 hover:text-teal-dark";

/**
 * NOT PUBLISHED. Lyall has not approved this article. The studio logged an
 * approval on 25 Oct 2026 that he did not make (his 4:10pm email that day
 * approved only the first article); it went live on 9 Nov and was pulled the
 * same day at his request. Kept here, unregistered, so his revisions can be
 * applied once he reviews it. Do not add it to registry.ts or seed.ts until
 * he signs it off by email.
 *
 * Lyall Mercer's social media crisis management guide. Body is the studio
 * draft (social-media-crisis-management-australia), with his house rules applied:
 * "program" spelling and businesses before schools before associations. One
 * sentence that quoted the internal content brief for an unsourced statistic
 * was trimmed to the point it was making.
 */
export const card = {
  slug: "social-media-crisis-management",
  title: "Navigating Social Media Crises: A Guide for Australian Organisations",
  summary:
    "How to tell criticism from a genuine crisis, who should decide, when silence is wiser and why communication cannot fix the underlying problem. Lyall Mercer on social media crisis plans for Australian businesses, schools and industry associations.",
  readTimeMinutes: 16,
  tags: ["social media crisis management", "crisis communication", "crisis plan", "reputation management"],
  seoTitle: "Social Media Crisis Management Guide for Australia | My PR Partner",
  seoDescription:
    "Learn how Australian organisations can assess, respond to and recover from social media crises with a practical crisis communication plan.",
  heroImageAlt:
    "A communications team in a Sydney office overlooking the Harbour Bridge works through a social media incident on a wall screen, with laptops and briefing notes on the desk",
  heroPrompt:
    "Editorial photograph of a communications team in a modern Australian office managing a social media incident, one person pointing at a wall monitor of abstract social feed cards, laptops and printed briefing notes, natural daylight, navy and teal palette, 16:9, no legible text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Social media crisis management is the process of identifying, assessing and responding to online events that could harm an organisation or its publics. Australian organisations need clear escalation thresholds, defined decision-makers, approved communication channels, active monitoring and a recovery process. The response must address the underlying problem, not merely manage public reaction.",
  keywords: [
    "social media crisis management",
    "social media crisis management australia",
    "social media crisis plan",
    "crisis communication plan",
    "online reputation crisis",
    "responding to negative comments",
    "crisis masterclass",
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          t: "p",
          text: "Let's start with a question. If a serious allegation appeared beneath your organisation's latest Facebook post tonight, who would decide whether to respond, what could be said and whether normal content should stop?",
        },
        {
          t: "p",
          text: "If the answer depends on who happens to be online, you do not yet have a social media crisis plan. This guide explains how businesses, schools and industry associations can build one, use it under pressure and learn from what follows.",
        },
      ],
    },
    {
      id: "key-takeaways",
      title: "Key takeaways",
      blocks: [
        {
          t: "p",
          text: "Social media crisis management starts before the first hostile post appears. The organisations that respond well have already decided what constitutes a crisis, who holds authority and how facts will be verified. They also recognise that communication cannot repair misconduct, unsafe systems or poor decisions that remain unaddressed.",
        },
        {
          t: "ul",
          items: [
            "Distinguish criticism, an operational issue and a genuine crisis before escalating.",
            "Give one person clear authority to activate the crisis communication plan.",
            "Verify facts before publishing, but do not allow internal indecision to create a damaging vacuum.",
            "Adapt messages for employees, families, members, customers, regulators and media.",
            "Pause scheduled content when it could appear careless or contradict the response.",
            "Review decisions, comments, approvals and public questions after the immediate pressure passes.",
          ],
        },
      ],
    },
    {
      id: "summary-table",
      title: "Summary table",
      blocks: [
        {
          t: "p",
          text: "A useful plan separates the event's seriousness from its online visibility. A complaint can attract attention without threatening the organisation. A quieter incident can still be a crisis if people face harm, regulators become involved or trust is at risk. This table provides a practical starting point for classification.",
        },
        {
          t: "table",
          head: ["Situation", "Typical indicators", "Appropriate response", "Authority"],
          rows: [
            [
              "Routine comment",
              "Isolated dissatisfaction, no broader harm alleged",
              "Customer service or community management response",
              "Channel manager",
            ],
            [
              "Emerging issue",
              "Repeated questions, credible allegation, growing media interest",
              "Verify facts, notify communications lead, increase monitoring",
              "Communications lead",
            ],
            [
              "Operational incident",
              "Service failure, safety concern, privacy event or disruption affecting publics",
              "Activate incident team and prepare coordinated updates",
              "Responsible executive",
            ],
            [
              "Reputation crisis",
              "Serious harm, widespread attention, regulatory exposure or loss of trust",
              "Activate crisis plan, brief leadership and communicate across relevant channels",
              "Chief executive or delegated crisis leader",
            ],
            [
              "Deliberate attack",
              "Impersonation, coordinated abuse, misinformation or account compromise",
              "Preserve evidence, secure accounts, report abuse and issue corrections where useful",
              "Crisis leader with technical support",
            ],
          ],
        },
      ],
    },
    {
      id: "what-is-social-media-crisis-management",
      title: "What is social media crisis management?",
      blocks: [
        {
          t: "p",
          text: "Social media crisis management is the coordinated work of detecting online risk, establishing facts, making decisions and communicating with affected publics. It is not simply replying to angry comments. It connects operational response, leadership, legal advice, employee communication, media relations and digital channel management around one verified account of events.",
        },
        {
          t: "p",
          text: (
            <>
              The word &quot;crisis&quot; is often used too easily. Clients regularly call me
              convinced that they are facing a full-blown crisis. From outside the immediate
              pressure, I can often see that the event is a{" "}
              <Link href="/issue-or-crisis" className={linkClass}>
                manageable issue
              </Link>
              .
            </>
          ),
        },
        {
          t: "p",
          text: "That perspective matters. Over-reacting can amplify a minor complaint, frighten employees and give an unverified allegation legitimacy. Under-reacting can leave affected people without information and make the organisation look indifferent.",
        },
        { t: "p", text: "A genuine crisis usually includes one or more of these conditions:" },
        {
          t: "ul",
          items: [
            "People may have been harmed or remain at risk.",
            "The organisation cannot continue operating normally.",
            "A credible allegation challenges the organisation's integrity.",
            "A regulator, police force or other authority may become involved.",
            "Public attention is moving beyond the original platform.",
            "Leadership decisions are required outside normal procedures.",
            "Existing trust with important publics is being damaged.",
          ],
        },
        {
          t: "p",
          text: "Social media changes the speed and visibility of these conditions. It does not change the basic purpose of PR. Public relations means having a relationship with your publics. Communication is how that relationship is maintained, particularly when people need answers.",
        },
        {
          t: "p",
          text: "Whatever channel mix applies to your particular publics, the practical lesson is clear: people increasingly expect to find information, ask questions and judge conduct on the same platforms where a crisis unfolds.",
        },
        {
          t: "p",
          text: "Social media management and crisis communication must therefore work together. The channel team should not operate separately from executives, operations or the people handling affected customers, families or members.",
        },
        { t: "cta", preset: "issue-or-crisis" },
      ],
    },
    {
      id: "what-risks-turn-an-issue-into-a-crisis",
      title: "What risks can turn a social media issue into a crisis?",
      blocks: [
        {
          t: "p",
          text: "A social media issue becomes a crisis when the online discussion exposes real harm, accelerates an operational failure or breaks trust with important publics. The main risks are not limited to hostile posts. They include misinformation, privacy breaches, unsafe conduct, account compromise, employee behaviour and an organisation's own poorly judged response.",
        },
        { t: "h3", text: "The underlying problem" },
        {
          t: "p",
          text: "Plenty of dodgy operators in PR think they can spin their way through anything. They cannot.",
        },
        {
          t: "p",
          text: "If a business has exposed customer information, a school has failed to protect a student or an association has ignored misconduct, better wording is not the first solution. The organisation must stop the harm, establish what happened and take responsibility for the matters it controls.",
        },
        { t: "p", text: "Communication can explain action. It cannot substitute for action." },
        { t: "h3", text: "Speed without verified facts" },
        {
          t: "p",
          text: "Online pressure creates a temptation to answer every question immediately. That can produce contradictions, speculation and promises the organisation cannot keep.",
        },
        {
          t: "p",
          text: "Fast does not mean careless. Your first message can acknowledge the issue, explain what action is under way and identify where verified updates will appear. It does not need to settle every fact.",
        },
        { t: "p", text: "Keep a live fact sheet with three headings:" },
        {
          t: "ul",
          items: [
            "Confirmed facts that may be communicated.",
            "Information still being verified.",
            "Information that cannot yet be released, with the reason recorded.",
          ],
        },
        {
          t: "p",
          text: "This prevents a common failure: different representatives working from different versions of events.",
        },
        { t: "h3", text: "Screenshots and deleted content" },
        {
          t: "p",
          text: "Deleting a post does not remove it from public view once screenshots circulate. Deletion can also create a second allegation, namely that the organisation is hiding its conduct.",
        },
        {
          t: "p",
          text: "Content should still be removed when it exposes private information, breaches platform rules, creates a safety risk or compromises an investigation. Record the post before removal. Note who authorised the decision and why.",
        },
        {
          t: "p",
          text: "Do not delete legitimate criticism merely because it is uncomfortable. Publish and apply a moderation policy covering threats, discriminatory abuse, spam, personal information and repeated disruption.",
        },
        { t: "h3", text: "Privacy and data breaches" },
        {
          t: "p",
          text: "A social media response can create a privacy problem even when the original incident did not. Staff may identify a complainant, confirm employment details or expose information about a child while attempting to correct the record.",
        },
        {
          t: "p",
          text: (
            <>
              Australian organisations covered by the Privacy Act 1988 must consider their
              obligations under the Notifiable Data Breaches scheme. The Office of the Australian
              Information Commissioner explains when eligible data breaches must be notified to
              affected individuals and the Commissioner (
              <a
                href="https://www.oaic.gov.au/privacy/notifiable-data-breaches"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                OAIC
              </a>
              ).
            </>
          ),
        },
        {
          t: "p",
          text: "A public post is not a replacement for direct notification. Nor should a public response identify affected individuals unless there is a lawful and compelling reason.",
        },
        { t: "h3", text: "False or misleading statements" },
        {
          t: "p",
          text: "A reassuring message can create further risk if it makes claims the organisation cannot support. Saying there is \"no risk\", that \"all customers are protected\" or that an event is \"completely resolved\" requires evidence.",
        },
        {
          t: "p",
          text: (
            <>
              The Australian Consumer Law prohibits misleading or deceptive conduct. The
              ACCC&apos;s guidance makes clear that businesses are responsible for claims made
              through social media, just as they are for claims made through other advertising
              channels (
              <a
                href="https://www.accc.gov.au/business/advertising-and-promotions/social-media"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                ACCC
              </a>
              ).
            </>
          ),
        },
        {
          t: "p",
          text: "Use precise language. State what has been confirmed, what has been done and what remains under investigation.",
        },
        { t: "h3", text: "Scheduled content that keeps publishing" },
        {
          t: "p",
          text: "A cheerful promotional post appearing during a serious incident tells your publics that internal teams are disconnected. It may also attract criticism into a second channel.",
        },
        {
          t: "p",
          text: "Your activation checklist should include paid advertisements, scheduled posts, automated email, website banners and executive accounts. Pause what could appear insensitive. Keep essential service information running where it helps affected people.",
        },
        {
          t: "pill",
          text: "Want a ready-made list of what to pause, check and record when an incident starts?",
          href: "/resources/crisis-checklist",
          cta: "Get the crisis checklist",
        },
      ],
    },
    {
      id: "develop-a-social-media-crisis-plan",
      title: "How do you develop a social media crisis plan?",
      blocks: [
        {
          t: "p",
          text: "Develop a social media crisis plan by defining escalation thresholds, assigning authority, mapping publics, protecting account access and preparing flexible response materials. The plan should sit inside the organisation's wider incident arrangements. It must tell people how decisions will be made, not merely provide a collection of pre-written statements.",
        },
        { t: "h3", text: "One: define crisis levels" },
        {
          t: "p",
          text: "Do not rely on phrases such as \"when things get serious\". Different employees will interpret them differently.",
        },
        { t: "p", text: "Define levels using observable factors:" },
        {
          t: "ul",
          items: [
            "Actual or potential harm.",
            "Number and importance of affected publics.",
            "Operational disruption.",
            "Credibility of the allegation.",
            "Rate and direction of online attention.",
            "Interest from journalists, regulators or elected representatives.",
            "Capacity of the normal team to manage the event.",
          ],
        },
        {
          t: "p",
          text: "Reach is relevant, but it is not the sole test. A post with little engagement may still reveal a major safety or governance problem.",
        },
        { t: "h3", text: "Two: assign decision rights" },
        {
          t: "p",
          text: "Your plan needs named roles, deputies and contact details. At minimum, assign responsibility for:",
        },
        {
          t: "ul",
          items: [
            "Crisis leadership.",
            "Operational facts.",
            "Social publishing and monitoring.",
            "Media enquiries.",
            "Internal communication.",
            "Legal advice.",
            "Information technology and account security.",
            "Records and decision logging.",
          ],
        },
        {
          t: "p",
          text: "The chief executive, principal or authorised executive must retain final responsibility for major public statements. Advisers advise. Leaders decide.",
        },
        {
          t: "p",
          text: "This distinction was made very clear to me during a royal commission. A CEO's barrister blocked the release of a prepared public statement. The CEO quietly instructed me to release it anyway, using his authority over the lawyer's objection.",
        },
        { t: "p", text: "The statement went out." },
        {
          t: "p",
          text: (
            <>
              The principle is not that legal advice should be ignored. It is that legal accuracy
              and public trust are different jobs. You can win in court and still lose your
              reputation. Never ask a lawyer to write a{" "}
              <Link href="/articles/crafting-effective-press-releases" className={linkClass}>
                press release
              </Link>
              . Ask the lawyer to identify legal risks, then let an experienced communicator
              produce language that people can understand.
            </>
          ),
        },
        {
          t: "p",
          text: "Only the boss can override legal advice. The PR adviser's job is to give that person a clear, honest case for the communication decision.",
        },
        { t: "h3", text: "Three: map your publics" },
        {
          t: "p",
          text: "A generic audience list is not enough. Identify who needs information, what they need and how they normally receive it.",
        },
        {
          t: "p",
          text: (
            <>
              For a{" "}
              <Link href="/programs/business" className={linkClass}>
                business
              </Link>
              , the list may include employees, customers, suppliers, investors, insurers,
              regulators and affected communities.
            </>
          ),
        },
        {
          t: "p",
          text: (
            <>
              For a{" "}
              <Link href="/programs/schools" className={linkClass}>
                school
              </Link>
              , publics may include students, parents, carers, staff, the governing body,
              education authorities, police and local media. A student safety matter should not
              be communicated as if it were a product recall.
            </>
          ),
        },
        {
          t: "p",
          text: (
            <>
              For an{" "}
              <Link href="/programs/industry-associations" className={linkClass}>
                industry association
              </Link>
              , members may need operational advice before the association speaks publicly. The
              public may also need evidence that the association is protecting standards rather
              than defending poor behaviour.
            </>
          ),
        },
        { t: "h3", text: "Four: secure publishing access" },
        {
          t: "p",
          text: "Your plan will fail if nobody can access the account or an unauthorised person still can.",
        },
        {
          t: "p",
          text: "Document account ownership, recovery addresses, multifactor authentication, password management and the process for removing access when employees or contractors leave. Keep an approved backup channel, such as the organisation's website, for use if an account is compromised.",
        },
        {
          t: "p",
          text: (
            <>
              The Australian Signals Directorate recommends that organisations prepare an
              incident response plan before a cyber incident occurs (
              <a
                href="https://www.cyber.gov.au/business-government/respond-and-recover/incident-response"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                ASD
              </a>
              ). Social account compromise should be included in that preparation.
            </>
          ),
        },
        { t: "h3", text: "Five: prepare message frameworks" },
        {
          t: "p",
          text: "Templates save time, but rigid scripts can make an organisation sound detached. Prepare frameworks for:",
        },
        {
          t: "ul",
          items: [
            "Initial acknowledgement.",
            "Service interruption.",
            "Safety incident.",
            "Privacy or cyber incident.",
            "Misinformation correction.",
            "Investigation update.",
            "Resolution and review.",
          ],
        },
        {
          t: "p",
          text: "Each framework should prompt the writer to include known facts, action taken, help available, the next source of information and contact options.",
        },
        {
          t: "p",
          text: "Avoid emotional language that has not been earned. \"We take this very seriously\" means little without evidence of what the organisation is doing.",
        },
        { t: "h3", text: "Six: practise the plan" },
        { t: "p", text: "A plan that has never been tested is an assumption." },
        {
          t: "p",
          text: "Run exercises using plausible situations. Give the team incomplete information, conflicting internal reports and realistic public questions. Test whether the right people can be contacted, whether account access works and whether approvals become a bottleneck.",
        },
        {
          t: "p",
          text: (
            <>
              Businesses should include service disruption, cyber incidents and executive
              behaviour. Schools should include scenarios involving student privacy and{" "}
              <HeldLink href="/resources/school-crisis-communication-plan" className={linkClass}>
                parent communication
              </HeldLink>
              . Industry associations should test member misconduct and{" "}
              <HeldLink href="/crisis-media-training" className={linkClass}>
                hostile media interest
              </HeldLink>
              .
            </>
          ),
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
    {
      id: "implement-the-plan-during-a-crisis",
      title: "How should an organisation implement the plan during a crisis?",
      blocks: [
        {
          t: "p",
          text: "Implement the plan by protecting people first, verifying the event, classifying its seriousness and activating the smallest team capable of managing it. Establish one source of truth, brief internal publics and publish useful information through the channels they already use. Continue monitoring so later messages answer genuine concerns rather than internal assumptions.",
        },
        { t: "h3", text: "Confirm what happened" },
        { t: "p", text: "Before discussing wording, ask operational questions:" },
        {
          t: "ul",
          items: [
            "What happened?",
            "Who may be affected?",
            "Is harm continuing?",
            "What has been done to stop it?",
            "Which facts are confirmed?",
            "Which authorities have been notified?",
            "What do affected people need to do now?",
          ],
        },
        {
          t: "p",
          text: "If these questions cannot be answered, identify who will answer them and when the team will reconvene. Do not fill gaps with guesses.",
        },
        { t: "h3", text: "Classify the event" },
        {
          t: "p",
          text: "Use the thresholds in your plan. Record the classification and revisit it as facts change.",
        },
        {
          t: "p",
          text: "A routine complaint should usually remain with the social or service team. A credible safety allegation may require immediate escalation even if it has attracted little public attention. A coordinated attack may require account security and evidence preservation rather than a long public argument.",
        },
        { t: "h3", text: "Stop the harm" },
        { t: "p", text: "This comes before reputation management." },
        {
          t: "p",
          text: "Remove unsafe products from sale. Protect affected students. Isolate compromised systems. Suspend the conduct under investigation. Provide practical support. Inform authorities where required.",
        },
        { t: "p", text: "Your communication is credible when it follows visible action." },
        { t: "h3", text: "Establish one source of truth" },
        {
          t: "p",
          text: "Create a central document controlled by an assigned person. Record confirmed facts, approved language, unanswered questions, decisions and published updates.",
        },
        {
          t: "p",
          text: "This does not mean every public receives identical wording. Employees may need detailed operational instructions. Customers may need service information. Media may need an attributable statement. The facts must remain consistent across each version.",
        },
        { t: "h3", text: "Publish the first useful response" },
        {
          t: "p",
          text: "The first response should help, not simply announce that the organisation is aware of social media comments.",
        },
        { t: "p", text: "A sound initial response usually includes:" },
        {
          t: "ul",
          items: [
            "Recognition of the event or concern.",
            "The action being taken.",
            "Instructions for affected people.",
            "A commitment to provide verified information through a named channel.",
            "Contact details where direct help is available.",
          ],
        },
        {
          t: "p",
          text: "Do not promise a precise update time unless the team can meet it. Broken communication promises become part of the crisis.",
        },
        { t: "h3", text: "Brief employees and members" },
        {
          t: "p",
          text: "Your internal publics should not learn major organisational news from Facebook or a journalist.",
        },
        {
          t: "p",
          text: "Give employees or members clear instructions about where questions should go, what information is confidential and who may speak publicly. Do not demand silence in a way that prevents lawful reporting or the raising of safety concerns.",
        },
        {
          t: "p",
          text: "Internal messages are often forwarded or captured. Write them on the assumption that they may become public.",
        },
        { t: "h3", text: "Monitor questions, not just sentiment" },
        { t: "p", text: "A crude positive or negative label does not tell you what people need." },
        { t: "p", text: "Group incoming comments by question or concern. For example:" },
        {
          t: "ul",
          items: [
            "Is anyone unsafe?",
            "Is my information affected?",
            "Is the service operating?",
            "Why did leadership not act earlier?",
            "What support is available?",
            "Is a circulating screenshot genuine?",
          ],
        },
        {
          t: "p",
          text: "Use these themes to update website information, staff scripts and later social posts. Do not allow a loud but unrepresentative account to dictate the entire response.",
        },
        { t: "h3", text: "Keep records" },
        {
          t: "p",
          text: "Capture posts, comments, media enquiries, decisions, approvals and removed content. Records support later review and may matter to insurers, regulators or legal proceedings.",
        },
        {
          t: "p",
          text: "Assign this task. In a pressured team, work owned by \"everyone\" is usually completed by no one.",
        },
      ],
    },
    {
      id: "should-you-always-respond-immediately",
      title: "Should you always respond immediately on social media?",
      blocks: [
        {
          t: "p",
          text: "No. Immediate acknowledgement is appropriate when people need safety information, service instructions or confirmation that a serious event is being addressed. Silence may be wiser when a claim has no traction, a response would identify a vulnerable person or publication could prejudice an investigation. The decision must follow evidence, not a slogan.",
        },
        {
          t: "p",
          text: "\"Tell it all, tell it fast, tell the truth\" is treated as the golden rule of crisis communication. There is truth in it, but it is not a rule to follow blindly.",
        },
        { t: "p", text: "Sometimes silence is the best option." },
        {
          t: "p",
          text: "Consider an anonymous account making an unsupported allegation that nobody has shared. A defensive corporate response may introduce the allegation to thousands of people who would never have seen it. Monitoring and private fact-finding may be the better course.",
        },
        {
          t: "p",
          text: "Silence is not the same as doing nothing. The organisation may still need to:",
        },
        {
          t: "ul",
          items: [
            "Preserve evidence.",
            "Contact affected people privately.",
            "Investigate the allegation.",
            "Prepare a holding response.",
            "Alert leadership and relevant authorities.",
            "Monitor whether the claim spreads.",
          ],
        },
        {
          t: "p",
          text: "Respond when the communication will protect people, correct material misinformation, provide useful instructions or demonstrate accountability. Avoid arguing with abuse, speculating or repeating inflammatory claims in your denial.",
        },
        {
          t: "p",
          text: "If you correct misinformation, lead with the accurate fact. Repeating the false claim in a headline can strengthen its association with your organisation.",
        },
        { t: "capture" },
      ],
    },
    {
      id: "recover-and-review",
      title: "How should an organisation recover and review after the crisis?",
      blocks: [
        {
          t: "p",
          text: "Recovery requires more than returning to scheduled posts. The organisation must support affected people, complete promised actions, correct continuing misinformation and examine how decisions were made. A formal review should identify operational failures, communication gaps and changes to the crisis plan. Trust returns through consistent conduct, not a final statement declaring the matter closed.",
        },
        { t: "h3", text: "Keep communicating after attention falls" },
        {
          t: "p",
          text: "Public attention may decline before affected people receive answers. Continue direct communication with those who experienced harm or disruption.",
        },
        {
          t: "p",
          text: "If you promised an investigation, publish the appropriate outcome. If you announced corrective action, report whether it occurred. If circumstances prevent disclosure, explain the limitation without using privacy as a blanket excuse.",
        },
        { t: "h3", text: "Conduct a structured review" },
        {
          t: "p",
          text: "Bring together the decision log, published posts, employee messages, media coverage, public questions and operational timeline.",
        },
        { t: "p", text: "Ask:" },
        {
          t: "ul",
          items: [
            "Was the event classified correctly?",
            "Did the right person activate the plan?",
            "Were affected people protected first?",
            "Which facts took too long to establish?",
            "Did approval processes delay useful information?",
            "Were messages consistent across channels?",
            "Did employees know what to do?",
            "Were privacy and recordkeeping obligations met?",
            "Which public questions were missed?",
            "What underlying condition allowed the event to occur?",
          ],
        },
        {
          t: "p",
          text: "Assign each change to an owner. A review without ownership produces an interesting document, not a safer organisation.",
        },
        { t: "h3", text: "Rebuild through conduct" },
        {
          t: "p",
          text: "Reputation is not repaired by posting more often. It is rebuilt when the organisation does what it said it would do.",
        },
        {
          t: "p",
          text: "That may mean changing a procedure, disciplining misconduct, improving security, compensating affected people, replacing a supplier or giving an independent reviewer access. Communication should make that work visible without overstating it.",
        },
        {
          t: "p",
          text: "Trust built before a crisis also matters. Organisations that communicate honestly during ordinary periods have a stronger relationship with their publics when difficult news arrives.",
        },
      ],
    },
    {
      id: "deciding-whether-you-have-a-crisis",
      title: "The overlooked skill is deciding whether you have a crisis",
      blocks: [
        {
          t: "p",
          text: "Many crisis guides focus on response speed and message templates. In my experience, the more valuable skill is classification. Organisations often treat online noise as proof of a crisis, while missing quieter events that present genuine harm. Good judgement separates visibility from impact and prevents both panic and dangerous complacency.",
        },
        { t: "p", text: "Half the job is perspective." },
        {
          t: "p",
          text: "When clients call convinced that an issue is a disaster, my first task is not drafting a statement. It is asking what has actually happened, who is affected and whether normal capacity can manage it. Often, I tell them it is an issue rather than a crisis.",
        },
        {
          t: "p",
          text: "That honest assessment prevents unnecessary escalation. It also deepens trust because your adviser and advocate should not profit from your anxiety.",
        },
        {
          t: "p",
          text: "The reverse is equally important. A low-engagement post alleging serious misconduct cannot be dismissed because it has attracted few reactions. Impact and credibility matter more than visible popularity.",
        },
        {
          t: "p",
          text: "I saw this distinction when an industry association was warned that it would feature in a television \"hidden camera investigation\". The conduct exposed by the journalist was legitimate and reflected poor behaviour by some people in the industry.",
        },
        {
          t: "p",
          text: "Waiting for the program and issuing a defensive denial would have failed. We developed a strategy that acknowledged the problem and announced a crackdown on the behaviour. Other media covered that action before the original story aired.",
        },
        {
          t: "p",
          text: "The association was recognised for acting in the public interest. By the time the original report appeared, its angle was outdated.",
        },
        {
          t: "p",
          text: "The lesson is not to beat journalists at their own game. It is to recognise a real problem, act before being forced and communicate in the interests of your publics. The strategy worked because the conduct was addressed. Spin alone would not have saved the association.",
        },
        { t: "p", text: "Use a two-axis assessment during your next exercise:" },
        {
          t: "table",
          head: ["Assessment axis", "Low end", "High end"],
          rows: [
            [
              "Real-world impact",
              "Limited inconvenience or isolated dissatisfaction",
              "Safety, privacy, financial, legal or operational harm",
            ],
            [
              "Public visibility",
              "Contained discussion with little credible interest",
              "Broad sharing, media attention or influential public concern",
            ],
          ],
        },
        {
          t: "p",
          text: "High visibility with low impact may need disciplined monitoring and proportionate correction. High impact with low visibility may require immediate operational escalation and direct notification. High impact combined with high visibility is the clearest case for full crisis activation.",
        },
        {
          t: "p",
          text: "This approach adds a question that social media dashboards cannot answer: not simply \"How much are people talking?\", but \"What has actually happened to people?\"",
        },
      ],
    },
    {
      id: "building-capability-before-the-next-incident",
      title: "Building capability before the next incident",
      blocks: [
        {
          t: "p",
          text: (
            <>
              The best time to build crisis communication capability is before an allegation,
              outage or safety event tests the organisation.{" "}
              <Link href="/articles/crisis-management-training" className={linkClass}>
                Training
              </Link>{" "}
              should give your team practical decision-making experience, clear roles and
              materials it can actually use. It should also prepare leaders to receive
              uncomfortable advice and act before reputational pressure forces their hand.
            </>
          ),
        },
        {
          t: "p",
          text: "Most crises are preventable, or at least containable. The warning signs often existed before the issue reached social media. Complaints were not connected. Account access was poorly controlled. Nobody owned the approval process. Staff were afraid to escalate bad news.",
        },
        {
          t: "p",
          text: (
            <>
              My PR Partner is designed for Australian organisations that want to handle their
              own PR with informed support behind them. Its{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                crisis communication masterclasses
              </Link>
              ,{" "}
              <Link href="/programs" className={linkClass}>
                programs
              </Link>{" "}
              and practical resources help businesses, schools and industry associations develop
              internal capability rather than automatically engaging a full agency.
            </>
          ),
        },
        { t: "p", text: "From the outset, you are not our client. You are a partner in your success." },
        {
          t: "p",
          text: "That means we will tell you when communication is necessary, when silence may be wiser and when the real problem must be fixed before any statement can help. Our focus is not on us and our profile, but on YOU and YOUR reputation.",
        },
        {
          t: "p",
          text: "If your current plan is a contact list and an old holding statement, use the questions in this guide to test it. My PR Partner's training and support services can help your team develop the plan, practise decisions and access experienced advice when an issue emerges. We have your back, but your organisation must own the decisions and the relationship with your publics.",
        },
        { t: "cta", preset: "checklist" },
      ],
    },
  ],
  faq: [
    {
      question: "What is the first step in a social media crisis?",
      answer:
        "Protect people and stop any continuing harm. Then verify what happened, identify who is affected and classify the event against your crisis thresholds. Do not begin with wording. Your first public response will be stronger when it follows operational action and uses confirmed facts.",
    },
    {
      question: "Who should respond to a social media crisis?",
      answer:
        "A trained channel manager may handle routine issues. A serious incident needs a designated crisis leader supported by operations, communications, legal and technical advisers as required. The chief executive, principal or delegated executive should approve major public positions and retain final accountability.",
    },
    {
      question: "Should negative comments be deleted?",
      answer:
        "Delete comments when they expose private information, contain threats, breach a clear moderation policy or create a safety risk. Do not remove legitimate criticism merely because it is damaging or uncomfortable. Preserve a record of removed content and document the reason for moderation.",
    },
    {
      question: "How quickly should an organisation respond?",
      answer:
        "Respond as quickly as verified, useful information allows. Urgent safety instructions should not wait for a polished statement. An unsupported allegation with little visibility may require monitoring rather than amplification. Do not publish speculation simply to appear fast, and do not promise an update schedule the team cannot maintain.",
    },
    {
      question: "Should lawyers approve crisis statements?",
      answer:
        "Lawyers should identify legal risk and check factual or regulatory concerns. They should not control the entire public message. Never ask a lawyer to write a press release. An experienced communicator should turn accurate advice into clear, human language, with the authorised executive making the final decision.",
    },
    {
      question: "What should a social media crisis plan include?",
      answer:
        "Include activation thresholds, named roles and deputies, contact details, approval authority, account access procedures, public mapping, monitoring responsibilities, message frameworks, moderation rules, legal and regulatory prompts, recordkeeping requirements and a post-crisis review process. Test the plan through realistic exercises.",
    },
  ],
  references: [
    {
      name: "Office of the Australian Information Commissioner, Notifiable Data Breaches",
      href: "https://www.oaic.gov.au/privacy/notifiable-data-breaches",
    },
    {
      name: "Australian Government, Privacy Act 1988",
      href: "https://www.legislation.gov.au/C2004A03712/latest/text",
    },
    {
      name: "Australian Competition and Consumer Commission, Social media",
      href: "https://www.accc.gov.au/business/advertising-and-promotions/social-media",
    },
    {
      name: "Australian Signals Directorate, Respond and recover from a cyber incident",
      href: "https://www.cyber.gov.au/business-government/respond-and-recover/incident-response",
    },
    {
      name: "eSafety Commissioner, Report online harm",
      href: "https://www.esafety.gov.au/report",
    },
  ],
  related: [
    "crisis-management-training",
    "issue-or-crisis-why-the-label-decides-the-response",
    "hope-is-not-a-strategy-crisis-response-penalty",
  ],
};
