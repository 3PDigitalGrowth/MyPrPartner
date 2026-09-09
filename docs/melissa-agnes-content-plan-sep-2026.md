# Melissa Agnes content plan, September 2026

Prepared for Lyall Mercer and Barbara Gorogh (My PR Partner / CRC Public Relations) by Alex Frew, 3P Digital. 10 September 2026.

## The idea in one paragraph

Lyall and Barbara have asked that the Crisis Masterclass be marketed with Melissa Agnes's own words wherever possible, so that review time on their side drops to minutes. Everything below is built on that rule: Melissa's material carries the weight, My PR Partner adds a short frame, an attribution line and a call to action, and nothing else. Each item lists exactly what we add, so approval is a skim rather than a rewrite.

## What we hold (audited 10 September 2026)

| Material | Where it is | Size | Status for public reuse |
|---|---|---|---|
| Session transcripts, months 1 to 7 (Crisis Ready course, Melissa presenting) | `crisis_mc_content_library/crisis_lesson_1..7.srt` (local only, never committed) | 56,000 words | Course content, licensed to Crisis Ready Institute, co-branded with My PR Partner. Excerpts fine with attribution; do not republish whole sessions. |
| Workbooks, sessions 1 to 7, plus the session 3 crisis communication exercise | Kajabi export, `3P_Ai_EA/client-adhoc/MyPrPartner/myprpartner-kajabi-export/.../downloads/` and text copies in the content library | 17,000 words | Same licence. Each opens with "A message from Melissa Agnes", already written in her voice and the most lift-ready copy in the set. Session 8 workbook is a placeholder copy of session 6. |
| Melissa's newsletter, 7 Sep 2026: "The High-Stakes Comms Formula that Actually Works" | Forwarded by Lyall 7 Sep, saved in the content library | 1,300 words | Cleared by Lyall for marketing, content and articles. Ready to publish. |
| Melissa's newsletter, 15 Jul 2026: "The AI That Erased a Database, and Lied" | Forwarded by Lyall 15 Jul, saved in the content library | 800 words | Forwarded as module context. One-line confirmation from Lyall needed before publishing. |
| The Evidence Behind Emotion-Led Crisis Management (My PR Partner research paper, July 2026) | `public/downloads/evidence-emotion-led-crisis.pdf` | 2,000 words | Live lead magnet. Cites the same research Melissa teaches. |
| Spotlight emails, editions 1 to 6 | Attached to Barbara's 18 Jun email ("Active Campaign"); not on disk anywhere we can reach | 6 PDFs | Cannot be reused until we have the files. See asks. |
| Melissa bio, headshots, stage photo | `content/courses/crisis-masterclass.tsx`, `app/about/expert-trainers/page.tsx`, `public/images/` | | Live and approved. |
| Kajabi course structure, months 1 to 12 | Kajabi product 2149481644 | | Months 1 to 7 have content; months 8 to 12 are titles only (Timelines of response, Navigating the modern noise, The five hindrances, Post-crisis, Capstone). |

Working notes for the team: every transcript and workbook has been mapped into a content file (summary, frameworks, verbatim quotable passages with position, stories, exercises, article and post candidates, cautions). They live in `crisis_mc_content_library/content_maps/`, which is git-ignored because the repo is public. Anyone drafting from Melissa's material starts there, not from the raw transcript.

## Rules that make review fast

1. Melissa's words stay Melissa's. Verbatim passages are quoted, not paraphrased. Her American spelling stays inside quotes. Transcription slips are tidied, nothing is added.
2. We add three things and no more: a frame of 60 to 120 words (why this matters to an Australian leader this month), one attribution block, one call to action. Everything we write is marked in the draft so Lyall can see it at a glance.
3. The same attribution block goes on every piece: "Melissa Agnes is the founder of the Crisis Ready Institute and creator of the Crisis Ready® Model. Her Crisis Ready course is available in Australasia exclusively through the My PR Partner Crisis Masterclass." Short pull-quotes carry "Melissa Agnes, Crisis Ready® course, My PR Partner Crisis Masterclass".
4. Excerpt, do not export. Public pieces use passages of up to 300 words from any one session and never the full worked examples or workbook exercises, which are what people pay for. Sessions 4 and 5 are labelled "advanced material from the Crisis Ready® Certification" in the workbooks, so they get shorter excerpts.
5. Figures get a source before they go live. The Maple Leaf Foods numbers (23 deaths, over $27 million, $2 billion valuation in November 2024), the Jennifer Aaker "22 times" statistic, and the Replit story all need a public source pinned in the draft.
6. Review is yes or no. Each batch lands on the Copy Desk page in cohorts. Lyall and Barbara reply "go" or mark the line they want changed. Nothing needs to be written on their side.

One thing to settle with Lyall this week: the workbooks carry "All content is licensed intellectual property of Crisis Ready® Institute. Used with permission for Australian distribution." Lyall has said the material is ours to use. A one-line note from Melissa or her team confirming public excerpts with attribution closes that off permanently, and it is worth having in writing before the first course excerpt (not the newsletter) is published.

## New pages on myprpartner.com

| Page | Built from | We write | Why |
|---|---|---|---|
| /crisis-ready-formula (Validate, Relate, Prove) | The 7 Sep newsletter in full, plus the formula definitions from the session 3 workbook | 90-word intro, CTA to the Masterclass, a sidebar "Try it on your own scenario" using Melissa's newsletter exercise | The single most searched, most quotable idea in the course. Becomes the hub every article and email links to. Download offered on the page: the evidence paper. |
| /issue-or-crisis | Session 2 workbook definitions (crisis, issue, emergency, five categories of material impact, the continuum) and Melissa's Zoom and COVID examples from the session | 80-word intro, a five-question "Issue or crisis?" self-check (her college-student exercise, adapted to an Australian workplace), CTA | Practical, safe to share with a board, and the page a principal or council GM sends to a colleague. |
| /melissa-agnes (presenter page) | Existing approved bio, headshots, the two Crisis Ready Institute YouTube videos Melissa linked in her newsletter (How to be a Visionary Leader in Uncertain Times; You Can't Lead From Survival Mode), links to every Melissa article as it publishes | 60 words | People search her name. Right now that search lands on her US site, not on the only place in Australasia that sells her course. |
| /crisis-masterclass/inside (Inside the 12 months) | The seven "A message from Melissa Agnes" workbook openers, one per month, lightly trimmed of "complete your workbook before next month" lines | 70-word intro, CTA, month cards | The strongest conversion asset we have not used: seven months of her own description of what you get, already written. Zero drafting. |
| /case-study/maple-leaf-foods | Session 7 (Melissa's telling, the McCain quotes, the 2008 to 2010 timeline) | 90 words plus verified sources for every figure | A case-study page ranks, gets shared, and shows what "layered response" means without us explaining it. |

Build notes: all five pages use the existing Next.js components (the lead-magnet and course-page patterns already in the repo), Australian English in our copy, no em dashes, and the same JSON-LD patterns as the current article page. Each page gets a Nano Banana image prompt written into the build file.

## Articles for /articles (Melissa Agnes byline)

Ordered by how little we have to add. The first two are Melissa's own published newsletters and need nothing but a frame.

| # | Working title | Source | Verbatim share | We write | Checks before publish |
|---|---|---|---|---|---|
| 1 | The High-Stakes Comms Formula that Actually Works | 7 Sep newsletter (cleared) | 95% | 80-word intro, CTA. Cut the Autumn Intensive promo and "last week's newsletter" references. | None. Assembled draft in the appendix. |
| 2 | The AI That Erased a Database, and Lied | 15 Jul newsletter | 90% | 60-word intro, optional editor's note on guardrails (Alex's reply to Lyall, 15 Jul), CTA | Lyall's OK; Replit source link. |
| 3 | Issue or crisis? Why the label decides the response | Session 2 transcript and workbook | 70% | Intro, subheads, CTA | Uses Melissa's own definitions; no figures. |
| 4 | You cannot beat emotion with logic | Session 3 (survival mode, the formula in one breath, the crisis-ready rule) | 70% | Intro, subheads, CTA | Keep the worked product-defect statement out; that is the paid exercise. |
| 5 | Hope is not a strategy: the crisis response penalty | Session 1 (definition of crisis ready, the three costs of delay, the mis-printed book story) | 70% | Intro, subheads, CTA | Keep the client story unnamed exactly as Melissa tells it. |
| 6 | The calmest person in the room | Session 5 (equanimity, co-regulation, Jacinda Ardern, "write from your place") | 60% | Intro that keeps the business frame, CTA | Leave out the electromagnetic-field passages; keep the leadership claim and the Ardern example. Melissa cannot attribute the "calmest person" line, so it is presented as a saying she uses. |
| 7 | A crisis is an onion: why the story is never told once | Session 6 (visionary leader, the onion, "say it more than once", BBC WhatsApp Ebola service) | 70% | Intro, subheads, CTA | "22 times" statistic needs the Aaker source or gets softened to "far more". |
| 8 | From tragedy to trust: what Maple Leaf Foods did in 2008 | Session 7 | 65% | Intro, timeline formatting, CTA | Verify 23 deaths, $27 million, $2 billion, and attribute the McCain quotes to McCain. |
| 9 | The four levels of safety a leader owes people in a crisis | Session 4 | 50% | Intro, the four levels as a list in Melissa's words, CTA | Certification material: keep to the four definitions and one passage. Brené Brown definitions carry her attribution. |
| 10 | Anger is a veil emotion | Session 4 | 55% | Intro, CTA | Same limits as 9. |

Each article gets the existing article template (hero image, byline, newsletter form, course CTA blocks), a Nano Banana hero prompt, IndexNow submission on publish, and a matching LinkedIn post and nurture email drawn from the same passages, so one approval covers three outputs.

## Social: a Melissa quote-card run

Format: one quote card (her headshot, the quote, "Crisis Ready® with Melissa Agnes, exclusively through My PR Partner in Australasia"), a two-line caption in Lyall's voice pointing to the matching article, and the Masterclass link. Three a week on the My PR Partner LinkedIn page, reposted from Lyall's profile. Twenty-four cards covers eight weeks.

The bank, all verbatim from the sessions and newsletter:

- "You cannot beat emotion with logic."
- "Hope is not a strategy."
- "Mindset shapes everything."
- "Leadership is not about rank. Leadership is about impact."
- "If you don't connect with people in your crisis communications, you will just be noise."
- "A crisis for one organisation doesn't necessarily translate into a crisis for another."
- "Every crisis offers an opportunity for growth, for evolution, and for connection."
- "Mislabeling a crisis as an issue, or an issue as a crisis, can very easily and very quickly escalate harm to the organisation."
- "Convincing is a tool of fear."
- "Vulnerability is actually the clearest path to connection."
- "Communicating openly and honestly in a crisis can be vulnerable and intimidating. It is also relatable and trustworthy. And that is what true leadership is."
- "You cannot control how people feel. What you can control is how you're able to be present with how people feel."
- "Control is a tool of fear."
- "Anger very, very rarely sits alone."
- "Safety comes from within."
- "The most regulated person in the room is the most powerful person in the room." (a saying Melissa uses, unattributed)
- "Comfortable doesn't actually mean safe."
- "The more you peel, the more you reveal."
- "Great stories are not rushed. They're layered."
- "People need to see messaging more than once to believe it."
- "Successful business is built on relationships. Successful crisis management prioritises those same very relationships."
- "You can win in the court of law and fail in the court of public opinion and not have a brand anymore."
- "Who do I get to be?"
- "Emotionality isn't weather. It's information. It follows patterns." (7 Sep newsletter)

Video: the course sessions are on Vimeo and are paid content, so no clips go out without Melissa's specific OK. Her two public YouTube videos can be shared as-is with a caption.

## EDMs

Warm list, fortnightly ("Melissa Agnes on..."). Recipients: newsletter sign-ups, lead-magnet downloads, past enquiries, the PR and comms list Barbara sent on 9 September, and Kajabi trial contacts. Send from Kajabi (opted-in contacts only) or the existing Active Campaign account. Each email is four parts: a two-line note from Lyall, one Melissa passage of 120 to 200 words, a link to the article, one CTA. Eight are ready to assemble from the maps:

1. "You can't beat emotion with logic" (article 1)
2. "Issue or crisis? The distinction that saves your team stress" (article 3)
3. "Hope is not a strategy" (article 5)
4. "The lawyers said wait. He didn't." (article 8)
5. "The most regulated person in the room wins" (article 6)
6. "Say it more than once" (article 7)
7. "What grief needs from a leader" (article 9)
8. "Lead with the truth, then name the lie" (article 2)

Cold sequences (Copy Desk, awaiting Lyall and Barbara's sign-off). No rewrite. One optional insert: a two-line Melissa quote block ("You cannot beat emotion with logic", attributed) under the formula paragraph in the shared day-3 email, and the /crisis-ready-formula page as the day-3 link instead of the course outline. Stronger proof, same email.

Spotlight emails to members. The sales page promises fortnightly Spotlight emails. Kajabi currently has no email sequences and no broadcasts, and the six Spotlight PDFs exist only as attachments on Barbara's June email. Once we have the files, they become a Kajabi sequence dripped to Crisis Masterclass members, and editions 1 to 6 double as nurture content for non-members with the member-only parts removed.

## Four-week run

| Week | Publish | Social | Email |
|---|---|---|---|
| 14 to 18 Sep | Article 1 (newsletter, cleared). /crisis-ready-formula page. /melissa-agnes page. | Cards 1 to 3 | Warm email 1 |
| 21 to 25 Sep | Article 3 (issue or crisis) and /issue-or-crisis page. Article 2 if Lyall clears it. | Cards 4 to 6 | Warm email 2 |
| 28 Sep to 2 Oct | Articles 4 and 5. /crisis-masterclass/inside. | Cards 7 to 9 | Warm email 3 |
| 5 to 9 Oct | Article 8 plus the Maple Leaf case-study page (figures verified). Article 6. | Cards 10 to 12 | Warm email 4 |

Then one article, three cards and one email a week until the bank is spent, and every new Crisis Ready Institute newsletter Melissa sends becomes an article within 48 hours of Lyall forwarding it.

Review load for Lyall and Barbara across the four weeks: roughly ten short drafts to skim, each with our additions marked. No writing.

## Asks of Lyall and Barbara

1. Forward Spotlight editions 1 to 6 as files (or drop them into the shared folder). They are the one asset we cannot reach.
2. One line from Melissa or her team confirming public excerpts of course material with attribution. Lyall's 7 Sep email covers the newsletter already.
3. Confirm the 15 Jul AI newsletter can be published (it was sent as module context).
4. Keep forwarding every Crisis Ready Institute newsletter, or add alex@3pdigital.com.au to her list, so the 48-hour article pipeline runs without a handoff.
5. Session 2 has no video in the export and the session 8 workbook is a copy of session 6. Worth fixing inside Kajabi before the next cohort reaches those months.
6. When months 8 to 12 are recorded, send transcripts and workbooks and the plan extends itself.

## Appendix: Article 1, assembled

Everything below is Melissa's text from her 7 September 2026 newsletter except the three marked blocks. Melissa's spelling is kept inside her text.

Title: The High-Stakes Comms Formula that Actually Works. Byline: Melissa Agnes, Founder, Crisis Ready Institute, presented through the My PR Partner Crisis Masterclass. Category: Crisis. Read time: six minutes.

[OURS, intro, 78 words] When something goes wrong, most organisations reach for the facts first: the timeline, the legally sound wording, the operational update. Melissa Agnes has spent two decades watching that approach fall flat, and her explanation of why sits at the centre of month three of the Crisis Masterclass. She set it out in her newsletter this week and has given us the go-ahead to share it in full. Read it with your own last difficult statement in mind.

Every high-stakes moment produces a fear-based emotion for everybody involved. (Yes, yourself included, like it or not.) And it's resonating through those fear-based emotions that is the most challenging aspect of your job, as a communicator (and a leader).

Hence the Crisis Ready® Rule: You cannot beat emotion with logic.

The goal here is to provide you with a strategic way to approach the fear-based emotionality that you will inevitably be faced with in a high-stakes moment, so that you can resonate and have higher impact.

**Why most high-stakes communications miss the mark**

Here is what I watch happen, over and over, and over and over.

When something goes wrong, leaders reach for logic. They gather the facts, they establish the timeline, they get the wording legally sound, and they issue a statement based on as many facts as they can provide (or feel comfortable providing).

While those facts may be accurate, they are often ineffective because the people receiving them have not yet been primed to receive the logical side of the response.

Why do most leaders reach for the logic first? The answer is simple: because it's the most comfortable thing to do in an already uncomfortable situation.

Let's face it, dealing with fear-based emotions isn't fun. It's messy, potentially confrontational, and requires a lot of courage.

As a result, most leaders attempt to take the "safe" route and handle them at arm's length. I.e., half-heartedly acknowledged in a sentence (e.g., "our thoughts and prayers are with all those impacted"), then moved past on the way to the operational update (that logic I referred to above).

Put simply: emotionality feels like the part of the situation you cannot control, so it gets treated as weather. Something to wait out or avoid altogether.

But it isn't weather. It's information. It follows patterns. And if you can understand those patterns, you can work with it deliberately and strategically, in the interest of creating connection and deepening trust.

**Why you cannot beat emotion with logic**

Let's break this down.

Every high-stakes moment (e.g., disruption, change, crisis, loss) produces some form of fear-based emotion. For example, anger, grief, worry, overwhelm, betrayal.

Why? Because a high-stakes moment comes with some form of uncertainty, and the self (the ego / the "I") does not like uncertainty. It does not like uncertainty because it cannot guarantee your safety in the unknown. And part of the ego's job is to keep you alive, so that safety is rather essential.

So, what does this part of the self do? If it cannot guarantee your safety, then on some level, it feels unsafe. Feeling unsafe generates a fear-based emotion. And that fear-based emotion begins to move a person into survival mode, and in survival mode the amygdala can hijack the prefrontal cortex, reducing access to it, which is precisely the part of the brain you are attempting to speak to when you issue a carefully worded, fact-based statement. And as we teach at Crisis Ready Institute, every fear-based emotion carries an underlying need that is longing to be met.

So: Disruption / Unknown = Feeling unsafe on some level = Fear-Based Emotionality = Survival Mode = Amygdala on and Prefrontal Cortex off = Extremely challenging to have your communications resonate and connect the way you want and need them to.

This is why so many high-stakes communications fail. Not because the facts were wrong, and not because the writing was weak. They fail because nobody in the process takes the time to understand the effects of the emotionality in the situation. So, the communication goes out addressed to a part of the brain that has gone offline.

Which leaves the far more useful question: so what do you do instead?

**Here's what does hit the mark**

The Crisis Ready® Formula for High-Stakes Communication: Regulate. Validate. Relate. Prove. In this order.

Regulate is your own nervous system: getting grounded, getting into coherence, opening your own prefrontal cortex back up so that you, yourself, can lead from creation rather than from survival. This is a discipline of its own and I'll come back to it properly another time.

Prove is the logic. The facts, the timeline, the evidence, the actions being taken, the vision you're leading people towards. It is the part most organizations are already good at, and it is the part most of them lead with.

But Prove cannot do its job as effectively as you need it to, until Validate and Relate have done theirs. This is the piece missing from too many high-stakes communications, and from too many leaders. They are the two that decide whether Prove ever gets heard.

So, let's dig into them.

**Validate**

You cannot beat emotion with logic, so you first have to meet the emotion with emotion.

This piece of the equation is about actively validating the emotional state or emotional experience of those you're responsible for communicating with and leading.

When someone is in a fear-based emotion, one of the most courageous and supportive things you can do is truly witness them in their experience so they feel seen and heard. Do this, and trust begins to form. Do this, and a softening begins to happen that allows you to truly lead them through the challenging moment.

But here's the catch: in order to validate someone's emotional experience, you have to be able to identify and NAME the emotion itself, which is where most leaders and communicators shy away.

As a very simple example, validate can sound like: "The frustration we are hearing right now makes complete sense given what happened." Or: "We know this has been an incredibly difficult time for our community."

Note: you do not have to agree with how someone feels in order to witness them in their emotional experience. Because, while it may not be your emotional experience, that doesn't make it any less real or true for them.

**Relate**

Once people feel seen and heard in their emotional experience, the next thing they care about is whether the thing that they care so deeply about actually matters to you. Because if it doesn't, why would you be the leader to help them move through the situation?

So, the relate piece is about showcasing that the things that matter so deeply to those you're communicating with (the things that triggered these deep emotional states in the first place) also matter to you. And you do this by saying so and showing so.

Remember: Crisis Management = Simultaneous Action + Communication in the right timeline.

Relate can sound like: "This community has always cared about keeping its kids safe on the streets, and that is exactly what is driving every decision we are making right now."

Pro tip: find a way to relate to people through your core values.

**Putting the Crisis Ready® Formula into practice**

The steps to getting this formula right:

1. Understand deeper context. What happened, and what it represents to the people impacted. This is easier said than done.
2. Understand resulting emotionality. The specific emotions, their components, and the needs underneath them.

Your practical exercise. Go through your crisis communication program. Pick one of your high-risk scenarios and do the following:

- Identify the fear-based emotions that your (already identified) stakeholders will likely feel in the event of that situation. Name them outright.
- Do the research on those emotions: what happens physiologically in a person's body when they feel those specific emotions? Identify the underlying need(s) that is longing to be met.
- Determine how you could use the Validate and Relate part of the Crisis Ready® Formula to truly address those needs in an effective way.
- Read through your pre-drafted comms and compare the results of this exercise with what you had previously drafted, and take the opportunity to strengthen the drafts accordingly.

Note: if you don't have a crisis comms program, first off, you should, and second, you can still put this exercise into practice by reviewing the last high-stakes communication you drafted or released.

**Learning this skill changes the game**

All of this may sound logical and feel relatively simple, but trust me when I say that it is extremely challenging to do in practice. Especially when you yourself are in a stress response, because you are the one managing the high-stakes situation.

[OURS, attribution block] Melissa Agnes is the founder of the Crisis Ready Institute and creator of the Crisis Ready® Model. Her Crisis Ready course is available in Australasia exclusively through the My PR Partner Crisis Masterclass, where the Validate, Relate, Prove formula is month three of twelve, complete with a worked example and a template you can run on your own scenarios.

[OURS, CTA, 41 words] The Crisis Masterclass is a 12-month online program with Melissa Agnes and Lyall Mercer: one session a month, workbooks, a monthly Q&A and a certificate endorsed by CRC Public Relations. See the 12 months, or start with the free evidence paper on emotion-led crisis management.

Edits made to Melissa's text: removed the opening reference to her previous newsletter (Good Good and Callaway), changed "this week's newsletter" to "here", removed the two YouTube links (they go on the presenter page), removed "As we saw in last week's case study", removed the Autumn Intensive promotion and sign-off. Nothing was added inside her text.
