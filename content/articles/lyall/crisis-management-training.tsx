import Link from "next/link";
import type { ArticleDoc } from "@/content/articles/types";

const linkClass = "text-teal underline underline-offset-4 hover:text-teal-dark";

/**
 * Lyall Mercer's crisis management training guide. Body is the version Lyall
 * edited and approved in the content studio on 25 Oct 2026
 * (crisis-management-training-benefits), with his house rules applied:
 * "program" spelling and businesses before schools before associations.
 */
export const card = {
  slug: "crisis-management-training",
  title: "Unlocking the Power of Crisis Management Training",
  summary:
    "What useful crisis management training covers, what it cannot fix and why legal and PR advice must work together. Lyall Mercer on building response capability inside Australian businesses, schools and industry associations.",
  readTimeMinutes: 13,
  tags: ["crisis management training", "crisis communication", "crisis preparedness", "media training"],
  seoTitle: "Crisis Management Training: What It Should Cover | My PR Partner",
  seoDescription:
    "Learn how crisis management training builds trust and prepares Australian businesses, schools and associations to respond clearly when trouble strikes.",
  heroImageAlt:
    "A leadership team in a Sydney boardroom works through a crisis scenario timeline on a whiteboard during a training exercise",
  heroPrompt:
    "Editorial photograph of a crisis management training exercise in a modern Australian boardroom, leaders around a table of briefing sheets, one pointing at a whiteboard timeline, natural daylight, navy and teal palette, 16:9, no legible text, no logos",
} as const;

export const doc: ArticleDoc = {
  slug: card.slug,
  lede: "Crisis management training prepares your people to recognise a crisis, make sound decisions, communicate clearly and protect trust under pressure. It establishes roles, escalation paths, approval processes and practical response tools. Effective training also tests your plan before a real event exposes its weaknesses, confusion or unrealistic assumptions.",
  keywords: [
    "crisis management training",
    "crisis management training australia",
    "crisis communication training",
    "crisis masterclass",
    "crisis scenario exercise",
    "crisis plan testing",
    "media training",
    "legal and PR in a crisis",
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          t: "p",
          text: "The worst time to decide who speaks, what to say and who approves it is when journalists, employees and worried families are already calling. Crisis management training moves those decisions forward. It gives your organisation a practical response system and the confidence to use it.",
        },
        {
          t: "p",
          text: "This guide explains what good training covers, what it cannot fix and how businesses, NFPs, schools, and industry associations can build useful in-house capability.",
        },
      ],
    },
    {
      id: "key-takeaways",
      title: "Key takeaways",
      blocks: [
        {
          t: "p",
          text: (
            <>
              Crisis management training is not simply media coaching or a written plan. It
              connects operational decisions with crisis communication, assigns responsibility and
              gives your team a controlled setting in which to practise. These are the central
              points to understand before choosing a course or{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                crisis masterclass
              </Link>
              .
            </>
          ),
        },
        {
          t: "ul",
          items: [
            "A crisis plan has little value if the people named in it have never rehearsed their roles.",
            "Training should distinguish a difficult issue from a genuine crisis, reducing both delay and over-reaction.",
            "Trust built before an incident affects how your publics interpret what you say during it.",
            "Communications cannot repair an unresolved operational, ethical or cultural problem.",
            "Legal advice and public relations advice must work together, but they serve different purposes.",
            "Scenario exercises should produce decisions, draft communications and specific improvements, not just discussion.",
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
          text: "The components of crisis preparedness are related, but they are not interchangeable. A plan records intended actions, training develops individual judgement, and an exercise tests whether the whole system works. Organisations need all three, supported by steady relationship-building before any crisis occurs.",
        },
        {
          t: "table",
          head: ["Component", "Primary purpose", "What useful practice looks like", "Common weakness"],
          rows: [
            [
              "Crisis plan",
              "Defines roles, authority and processes",
              "Clear escalation paths, contact details, approval rules and alternatives",
              "Written once and left untested",
            ],
            [
              "Crisis management training",
              "Builds knowledge and decision-making capability",
              "Relevant instruction, worked examples and role-specific practice",
              "Too much theory and no pressure testing",
            ],
            [
              "Scenario exercise",
              "Tests the team and its systems",
              "Realistic prompts, timed decisions, drafted responses and debriefing",
              "A comfortable conversation with no consequences",
            ],
            [
              "Crisis communication",
              "Keeps publics (stakeholders) informed and protects trust",
              "Accurate, human and audience-specific communication",
              "Treating every audience like the news media",
            ],
            [
              "Ongoing public relations",
              "Builds relationships before trouble occurs",
              "Consistent communication, listening and credible action",
              "Starting only after a problem becomes public",
            ],
          ],
        },
      ],
    },
    {
      id: "what-is-crisis-management-training",
      title: "What is crisis management training?",
      blocks: [
        {
          t: "p",
          text: "Crisis management training teaches an organisation how to identify, assess and handle events that threaten people, operations, reputation or trust. It combines leadership decisions, operational response and communication. The aim is not to memorise a script. It is to make better decisions when information is incomplete and pressure is increasing.",
        },
        {
          t: "p",
          text: (
            <>
              A useful starting point is the difference between{" "}
              <Link href="/issue-or-crisis" className={linkClass}>
                an issue and a crisis
              </Link>
              .
            </>
          ),
        },
        {
          t: "p",
          text: "An issue is a problem that can usually be handled through normal management structures. A crisis exceeds, or threatens to exceed, your usual capacity. It may demand urgent decisions, unusual authority and intense communication with several publics (stakeholders) at once.",
        },
        {
          t: "p",
          text: "That distinction matters. Clients often call me convinced they are facing a full-blown crisis. When I assess the actual impact, affected publics and organisational capacity, it is often a manageable issue. They regain perspective and avoid the cost of over-reacting.",
        },
        {
          t: "p",
          text: "Alternatively, sometimes clients under-estimate the potential escalation probability and downplay the situation. Our assessment means they are ahead of a crisis rather than playing catch-up.",
        },
        { t: "p", text: "Half the job is perspective." },
        {
          t: "p",
          text: "Training provides a shared assessment method so your team does not rely on the loudest person in the room. It asks practical questions:",
        },
        {
          t: "ul",
          items: [
            "Is anyone unsafe or at risk of harm?",
            "Which operations have stopped or may stop?",
            "What facts are confirmed, disputed or unknown?",
            "Which publics are affected now?",
            "Could the issue spread through media, regulatory or political attention?",
            "Can normal management processes contain it?",
          ],
        },
        {
          t: "p",
          text: (
            <>
              The{" "}
              <a
                href="https://knowledge.aidr.org.au/resources/managing-organisational-crises-masterclass/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Australian Institute for Disaster Resilience
              </a>{" "}
              treats organisational crisis management as a leadership capability, not merely a
              communications task. That is the right approach. Communication supports the response,
              but it cannot replace competent operational action.
            </>
          ),
        },
        { t: "cta", preset: "issue-or-crisis" },
      ],
    },
    {
      id: "what-should-training-teach",
      title: "What should crisis management training teach?",
      blocks: [
        {
          t: "p",
          text: "Good crisis management training should teach assessment, command structure, decision-making, public mapping, message development, media handling and recovery. It should also show participants how these elements interact. A media statement cannot be approved sensibly if nobody knows who owns the facts, operational response or final decision.",
        },
        { t: "h3", text: "Recognition and escalation" },
        {
          t: "p",
          text: "Your people need clear triggers for escalating an issue. These triggers may involve safety, service disruption, regulatory attention, serious misconduct, cyber incidents or sustained public concern.",
        },
        {
          t: "p",
          text: "The process should identify who can activate the crisis team and what happens if that person is unavailable. Contact lists alone are not enough. Your team must understand the authority attached to each role.",
        },
        { t: "h3", text: "Roles and decision rights" },
        {
          t: "p",
          text: "Every crisis creates questions about ownership. Who leads? Who verifies facts? Who communicates with employees? Who contacts families, members, customers, regulators or insurers? Who keeps records? Who has final approval?",
        },
        {
          t: "p",
          text: "Training should answer these questions before a scenario begins. Otherwise, the exercise tests confusion rather than capability.",
        },
        {
          t: "p",
          text: "A business or non-profit may need operations, communications, technology and customer service in the room. An industry association must also decide where its responsibility ends and a member's responsibility begins. For schools, the principal may lead while another person manages parent communication and reception staff follow an agreed call-handling process.",
        },
        { t: "h3", text: "A relationship with your publics" },
        {
          t: "p",
          text: "Public relations means having a relationship with your publics. They are people, not entries in a stakeholder spreadsheet.",
        },
        {
          t: "p",
          text: "Training should identify what each public needs to know, what they are likely to fear and which channel they trust. Employees may need direct instructions. Parents may need reassurance about safety and collection arrangements. Association members may need consistent guidance before speaking publicly.",
        },
        {
          t: "p",
          text: "Sending the same statement to everyone may seem efficient, but is rarely effective.",
        },
        { t: "h3", text: "Message development" },
        {
          t: "p",
          text: "A useful crisis message normally addresses what happened, what the organisation is doing, what affected people should do and when further information will be available. It should distinguish confirmed facts from assumptions.",
        },
        {
          t: "p",
          text: "Teams should practise drafting holding statements, internal updates, website notices, call-centre guidance, social posts and spokesperson notes. The purpose is not to produce a folder of generic templates. It is to learn how to adapt a reliable structure without sounding evasive or mechanical.",
        },
        {
          t: "p",
          text: (
            <>
              The US Centers for Disease Control and Prevention&apos;s{" "}
              <a
                href="https://www.cdc.gov/cerc/php/cerc-manual/index.html"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Crisis and Emergency Risk Communication manual
              </a>{" "}
              is built around communicating during high-concern events. Its broader lesson applies
              in Australia: audiences under pressure need information they can understand and act
              upon.
            </>
          ),
        },
        { t: "h3", text: "Media and interview skills" },
        {
          t: "p",
          text: (
            <>
              <Link href="/crisis-media-training" className={linkClass}>
                Media training
              </Link>{" "}
              is part of crisis preparation, but it is not the whole program. A spokesperson needs
              to answer difficult questions, correct false assumptions and avoid speculation. They
              also need enough authority to sound credible.
            </>
          ),
        },
        {
          t: "p",
          text: "The exercise should include realistic follow-up questions. Reading an approved statement into a camera proves very little. The real test begins when a journalist asks why the organisation failed to act earlier.",
        },
        { t: "h3", text: "Recovery and review" },
        {
          t: "p",
          text: "Crisis work continues after public attention falls. Your organisation may need to support affected people, restore services, answer regulators, correct misinformation and explain changes.",
        },
        {
          t: "p",
          text: "Training should include a structured debrief. Record what worked, what failed and who owns each improvement. Otherwise, the same weaknesses will appear in the next exercise or incident.",
        },
        {
          t: "p",
          text: (
            <>
              <a
                href="https://www.iso.org/standard/50267.html"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                ISO 22361:2022
              </a>
              , the international guideline for crisis management, addresses the development of
              crisis management capability and the conditions needed for an effective response.
              That broader organisational focus is important. A polished communications team cannot
              compensate for weak governance.
            </>
          ),
        },
      ],
    },
    {
      id: "how-it-benefits-an-organisation",
      title: "How does crisis management training benefit an organisation?",
      blocks: [
        {
          t: "p",
          text: "Crisis management training reduces avoidable confusion and improves the quality of decisions made under pressure. It helps people recognise their responsibilities, communicate with the right publics and find weaknesses before those weaknesses become public. Its deeper benefit is trust: your organisation is more likely to act consistently with what it has promised.",
        },
        { t: "h3", text: "It creates faster, cleaner decisions" },
        {
          t: "p",
          text: "Speed matters, but frantic activity is not the same as a good response. Training establishes where information goes, who decides and how approval works. That prevents drafts moving endlessly between people who do not have final authority.",
        },
        { t: "h3", text: "It exposes gaps in the plan" },
        {
          t: "p",
          text: "A plan can look complete until someone asks how the team will respond if the principal is off site, the network is unavailable or the chief executive is directly involved in the allegation.",
        },
        {
          t: "p",
          text: "Scenario work finds these gaps safely. It also tests practical details such as remote access, contact records, monitoring arrangements and alternative communication channels.",
        },
        { t: "h3", text: "It protects relationships" },
        {
          t: "p",
          text: "Trust is built before a crisis. If your organisation has communicated openly and acted consistently, your publics have context for judging what you say when something goes wrong.",
        },
        {
          t: "p",
          text: "This is why crisis communication cannot sit apart from everyday public relations. Reputation is not formed by accident. It is the accumulated result of what you do, what you say and whether those things match.",
        },
        { t: "h3", text: "It helps people communicate without speculation" },
        {
          t: "p",
          text: "Pressure creates a strong urge to fill silence. That is dangerous when facts are still emerging. Training helps spokespeople acknowledge concern, explain what is known and commit to the next update without guessing.",
        },
        {
          t: "p",
          text: (
            <>
              This is especially important during data breaches. The{" "}
              <a
                href="https://www.oaic.gov.au/privacy/notifiable-data-breaches/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Office of the Australian Information Commissioner&apos;s data breach preparation and
                response guide
              </a>{" "}
              explains how organisations should prepare for and respond to breaches, including
              assessment and notification responsibilities. Communications must follow verified
              facts and applicable obligations.
            </>
          ),
        },
        { t: "h3", text: "It supports continuity and recovery" },
        {
          t: "p",
          text: "Crisis communication should help people make decisions. Clear instructions can support staff, customers, parents or members while operational teams restore normal services.",
        },
        {
          t: "p",
          text: "Training connects these tasks. It prevents communications becoming a separate performance conducted while the organisation struggles behind the scenes.",
        },
        { t: "capture" },
      ],
    },
    {
      id: "common-misconceptions",
      title: "Common misconceptions about crisis management training",
      blocks: [
        {
          t: "p",
          text: "The biggest misconception is that crisis training teaches an organisation how to control the story. It does not. Useful training teaches you to assess reality, fix what is wrong and communicate credibly. You cannot message your way out of misconduct, poor governance or a response that is visibly failing.",
        },
        { t: "h3", text: "\"Tell it all, tell it fast, tell the truth\" is not an automatic rule" },
        {
          t: "p",
          text: "There is truth in this familiar crisis slogan, but it should not be followed blindly. Sometimes immediate public comment would breach privacy, compromise an investigation or amplify an allegation that has no public traction.",
        },
        { t: "p", text: "Sometimes silence is the best option." },
        {
          t: "p",
          text: "The correct response depends on harm, public interest, legal obligations, audience needs and the likelihood of the matter spreading. Training should develop judgement, not replace judgement with slogans.",
        },
        { t: "h3", text: "PR cannot spin its way through anything" },
        {
          t: "p",
          text: "Plenty of dodgy operators think they can spin through any problem. They cannot.",
        },
        {
          t: "p",
          text: "If the underlying conduct continues, communications will eventually expose the gap between words and reality. The work starts by correcting the problem. Public relations then helps the organisation explain what happened, accept appropriate responsibility and rebuild confidence through evidence.",
        },
        { t: "h3", text: "A crisis plan is not proof of readiness" },
        { t: "p", text: "A document does not make decisions. People do." },
        {
          t: "p",
          text: "Plans often contain outdated contacts, vague responsibilities or approval processes that collapse outside business hours. Training and exercises show whether the plan reflects how your organisation actually operates.",
        },
        { t: "h3", text: "Never ask a lawyer to write a press release" },
        {
          t: "p",
          text: "Legal review is often essential. Legal control of the public message is not.",
        },
        {
          t: "p",
          text: "At a royal commission, a CEO's barrister wanted to block the release of a prepared public statement that was important for the reputation of the CEO and organisation, and created no legal risk. The CEO instructed me to release it, using his authority over the lawyer's objection. The statement went out.",
        },
        {
          t: "p",
          text: "The lesson was clear. Legal and PR must work together and support each other. You can win in court and still lose the brand. The question for the lawyer is simple - Will this statement create a legal risk? If yes, the statement should be revised. If no, it should be used.",
        },
        {
          t: "p",
          text: "Lawyers naturally are cautious, as they should be, but just as PR professionals must consider legal ramifications, lawyers must remember that reputation is equally vital. Good lawyers understand this. A legal document is designed to protect a legal position. A public statement must also sound human, answer legitimate concerns and build trust. Those are different jobs. Lawyers and communications advisers should challenge each other, then give the authorised decision-maker clear options.",
        },
      ],
    },
    {
      id: "practical-crisis-masterclass",
      title: "What should a practical crisis masterclass include?",
      blocks: [
        {
          t: "p",
          text: "A practical crisis masterclass should combine concise teaching with a scenario relevant to the participants. It should test decisions, communication and authority rather than reward people for recalling theory. Participants should leave with clearer roles, usable materials and a prioritised list of changes to their crisis arrangements.",
        },
        {
          t: "p",
          text: "Before enrolling, ask what the program actually requires participants to do.",
        },
        { t: "p", text: "Useful elements include:" },
        {
          t: "ul",
          items: [
            "A pre-session review of the organisation's risks, plan and public groups.",
            "Clear explanation of issues, emergencies and organisational crises.",
            "A scenario suited to the sector rather than a generic disaster.",
            "New information introduced as the exercise develops.",
            "Drafting tasks for internal and external communication.",
            "Spokesperson questioning or an interview simulation.",
            "Discussion of legal, regulatory and privacy constraints.",
            "A debrief with assigned actions and responsibility.",
          ],
        },
        {
          t: "p",
          text: "Avoid training built entirely around dramatic media interviews. Many crises begin quietly. The first warning may be an employee email, a parent complaint, unusual system activity or a journalist requesting a response by a deadline.",
        },
        {
          t: "p",
          text: "The early management decisions often matter more than the eventual press conference.",
        },
        {
          t: "p",
          text: "My PR Partner is designed for organisations that want this capability in-house rather than outsourcing every communication decision to an agency. That is particularly useful for businesses, schools and associations whose own people know their operations, publics and responsibilities best.",
        },
        {
          t: "p",
          text: "An outside adviser can still provide perspective. From the outset, you are not our client. We are a partner in your success. We are your adviser and advocate, but the capability must also exist inside your organisation.",
        },
        { t: "cta", preset: "masterclass" },
      ],
    },
    {
      id: "knowing-whether-you-have-a-crisis",
      title: "Half the job is knowing whether you have a crisis",
      blocks: [
        {
          t: "p",
          text: "My non-consensus view is that crisis training should spend less time on dramatic press conferences and more time on diagnosis. Organisations often suffer because they under-react to serious warning signs or over-react to manageable criticism. A trained team should be able to tell the difference and explain its reasoning.",
        },
        {
          t: "p",
          text: "Consider an industry association that was about to feature in what a journalist described as a \"hidden camera investigation\". The reported conduct was legitimate and involved poor behaviour by some people in the industry.",
        },
        {
          t: "p",
          text: "Waiting for the television story would have surrendered the message. Denial would have damaged trust.",
        },
        {
          t: "p",
          text: "We developed a strategy that addressed the behaviour itself. The association announced a crackdown and spoke with other media outlets before the original report aired. It was recognised for acting in the public interest, and the planned story had lost its force by the time it appeared.",
        },
        {
          t: "p",
          text: "The principle is not \"get your story out first\". That would be another simplistic slogan.",
        },
        {
          t: "p",
          text: "The principle is to assess whether the criticism is valid, act on the underlying problem and communicate evidence of that action. The strategy worked because the operational response gave the communications credibility.",
        },
        {
          t: "p",
          text: "This is what crisis management training should rehearse. Not spin. Not clever lines. Sound judgement under pressure.",
        },
      ],
    },
    {
      id: "applying-the-training",
      title: "Applying the training in businesses, schools and associations",
      blocks: [
        {
          t: "p",
          text: "The core disciplines remain consistent across sectors, but the publics, risks and decision structures differ. Effective training should reflect those differences. A school cannot copy a corporate cyber exercise unchanged, while an association needs to account for member independence and the limits of its authority.",
        },
        { t: "h3", text: "Businesses" },
        {
          t: "p",
          text: "Businesses need to connect operational continuity with customer, employee, supplier and regulator communication. Likely scenarios include cyber incidents, product concerns, workplace events, executive conduct and prolonged service failure.",
        },
        {
          t: "p",
          text: "The exercise should involve people who own the operational response. Communications staff cannot verify system restoration, product safety or employee welfare without them.",
        },
        { t: "h3", text: "Schools" },
        {
          t: "p",
          text: "Schools communicate with students, parents, staff, governing bodies, authorities and local communities. Safety, privacy and duty of care are central.",
        },
        {
          t: "p",
          text: "Training should test parent notifications, staff instructions, reception scripts, media enquiries and the handling of unverified social media claims. It should also account for events occurring during travel, camps or outside normal hours.",
        },
        { t: "h3", text: "Industry associations" },
        {
          t: "p",
          text: "Associations face a distinct problem. The conduct of one member can affect the reputation of the whole sector, even when the association has limited enforcement power.",
        },
        {
          t: "p",
          text: "Training should clarify when the association speaks, how it gathers facts, what it expects from members and whether it can demonstrate credible action. It must also separate the public interest from the instinct to defend every member automatically.",
        },
      ],
    },
    {
      id: "build-capability-before-you-need-it",
      title: "Build capability before you need it",
      blocks: [
        {
          t: "p",
          text: "Crisis management training is valuable because it forces important conversations before pressure distorts them. It clarifies who decides, which publics matter and how your organisation will communicate honestly. It also reveals an uncomfortable truth: reputation depends on behaviour first and communication second.",
        },
        {
          t: "p",
          text: "Most organisations think seriously about communication only when something goes wrong. By then, trust may already be weak and the basic decisions may be happening in public.",
        },
        { t: "p", text: "Do the work earlier." },
        {
          t: "p",
          text: (
            <>
              My PR Partner&apos;s crisis management training,{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                crisis masterclass
              </Link>{" "}
              and practical resources help Australian businesses, schools, and industry
              associations build their own response capability. Training can be supported by{" "}
              <Link href="/resources/crisis-checklist" className={linkClass}>
                crisis checklists
              </Link>
              ,{" "}
              <Link href="/resources/pr-guide" className={linkClass}>
                PR guides
              </Link>{" "}
              and on-call advice when outside perspective is needed.
            </>
          ),
        },
        {
          t: "p",
          text: "Our focus is not on us and our profile, but on YOU and YOUR reputation.",
        },
        {
          t: "p",
          text: (
            <>
              If your team has a crisis plan that has never been tested, or no agreed plan at all,{" "}
              <Link href="/crisis-masterclass" className={linkClass}>
                sign up for My PR Partner&apos;s crisis management training
              </Link>
              . We believe in you, and we have your back. More importantly, we will help your
              people build the judgement to act when it matters.
            </>
          ),
        },
        { t: "cta", preset: "checklist" },
      ],
    },
  ],
  faq: [
    {
      question: "What is crisis management training?",
      answer:
        "Crisis management training prepares people to assess serious events, make decisions, coordinate a response and communicate with affected publics. It normally covers escalation, team roles, information verification, message development, media handling and recovery. Practical programs also use scenarios to test whether the organisation's written arrangements work.",
    },
    {
      question: "Who should attend crisis management training?",
      answer:
        "People with decision-making or response responsibilities should attend. Depending on the organisation, this may include principals, executives, communications staff, operations managers, technology teams, human resources, board representatives and customer-facing employees. The group should include both authorised decision-makers and the people expected to carry out their decisions.",
    },
    {
      question: "Is crisis communication training the same as media training?",
      answer:
        "No. Media training develops interview and spokesperson skills. Crisis communication training covers a broader system, including public identification, internal updates, approval, message development, call handling, digital channels and communication during recovery. Media interaction is important, but many affected people will never receive their information through a journalist.",
    },
    {
      question: "How often should an organisation run crisis training?",
      answer:
        "Training should be repeated when risks, leaders, systems, legal obligations or team responsibilities change. Exercises should also form part of an ongoing preparedness program rather than being treated as a one-off event. The appropriate schedule depends on the organisation's exposure, staff changes and the weaknesses found during previous exercises.",
    },
    {
      question: "Can crisis management training prevent a crisis?",
      answer:
        "At times, absolutely yes. Understanding and identifying vulnerabilities means the risk is mitigated or eliminated before an issue arises. Many crises can be tracked back to a specific point - a decision that if made differently would have avoided the original issue. Stopping a manageable issue becoming worse through delay, speculation or contradictory communication means that major crises are avoided. Of course crisis management training cannot prevent every crisis because some are completely unexpected. However it can expose warning signs, unclear ownership and weak processes before they contribute to a serious event. Prevention still depends on leaders acting on what the training reveals.",
    },
    {
      question: "Should lawyers approve crisis statements?",
      answer:
        "Lawyers should review statements when legal rights, investigations, privacy or regulatory duties are involved. They should not automatically control the entire public message. The authorised leader must weigh legal risk against safety, trust and public expectations, supported by both legal and communications advice.",
    },
  ],
  references: [
    {
      name: "Australian Institute for Disaster Resilience, Managing Organisational Crises Masterclass",
      href: "https://knowledge.aidr.org.au/resources/managing-organisational-crises-masterclass/",
    },
    {
      name: "International Organization for Standardization, ISO 22361:2022 Security and resilience, Crisis management, Guidelines",
      href: "https://www.iso.org/standard/50267.html",
    },
    {
      name: "Office of the Australian Information Commissioner, Data breach preparation and response",
      href: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response",
    },
    {
      name: "US Centers for Disease Control and Prevention, Crisis and Emergency Risk Communication Manual",
      href: "https://www.cdc.gov/cerc/php/cerc-manual/index.html",
    },
  ],
  related: [
    "issue-or-crisis-why-the-label-decides-the-response",
    "calmest-person-in-the-room",
    "crafting-effective-press-releases",
  ],
};
