# Crisis Masterclass course assistant (voice agent)

An ElevenAgents voice agent that follows up people who opened the Crisis Masterclass emails or looked at the course page without enrolling. It says up front that it's an AI, explains that Barbara (one of the directors) saw they'd had a look at the course and was keen to get in touch, and asks what was missing or holding them back. It answers from the knowledge base, then either books a call with Lyall or Barbara or takes the person's questions for an email reply. Before the call ends it sends everything to Lyall and Barbara through `send_to_course_team`. Built 11 Nov 2026 from the Luminar agent (`Luminar/automation/voice-agent/`).

- Agent: `agent_8501m74ft9v4exxrjjt0j44nkh26` ("My PR Partner - Crisis Masterclass course assistant") on 3P's ElevenLabs account (`3pdigital`, Creator plan). Ids in `agent.json`.
- Test links: `python automation/voice-agent/setup_agent.py --link` prints two. The client review link (`source=review-link`) emails Lyall and Barbara on every handoff with `[Test call]` in the subject; the internal link (`source=internal-test`) emails Alex only. Never send a link without its `var_` parameters: the talk-to page ignores the agent's placeholder values and the call drops (Luminar, 11 Nov 2026).
- Call limit: 15 minutes (`MAX_CALL_SECONDS = 900`), so Lyall and Barbara can test it properly. Bring it down for real outbound calls.
- Keys: `ELEVENLABS_API_KEY` in `~/.claude/elevenlabs.env`; `VOICE_HANDOFF_SECRET` and `ELEVENLABS_WEBHOOK_SECRET` in `~/.claude/mpp-voice.env`. None of them goes in this repo, which is public. Vercel production env holds `VOICE_HANDOFF_SECRET`, `VOICE_HANDOFF_EMAILS`, `ELEVENLABS_WEBHOOK_SECRET` and `VOICE_AGENT_ID`.

## How the handoff works

**One call report per call (Alex, 12 Nov 2026).** Lyall and Barbara get an email after every call the assistant makes, not only when someone asks for something: a short summary, the caller's sentiment (positive, neutral or negative) with the reason, one to three suggested follow-ups, any request with the details the caller confirmed, call length and the transcript. ElevenLabs posts each finished call to `https://myprpartner.com/api/voice/post-call` (`app/api/voice/post-call/route.ts`) once its analysis is done, usually within a minute. The summary, sentiment and follow-ups are analysis fields (`call_summary`, `sentiment`, `sentiment_reason`, `follow_up_actions`) written by `claude-sonnet-5-5`. Calls where the caller never spoke are skipped.

`send_to_course_team` is a webhook tool. It posts to `https://myprpartner.com/api/voice/handoff` (`app/api/voice/handoff/route.ts`) with an `x-voice-secret` header held as an ElevenLabs workspace secret, plus `conversation_id` and `source` filled from the call. An urgent crisis is emailed straight away; every other request is acknowledged to the caller and goes out in the call report, which reads the confirmed details back out of the tool call in the transcript. So each call produces one email (two for an urgent crisis: the alert, then the report). Emails go to `VOICE_HANDOFF_EMAILS` (Vercel env: Lyall and Barbara) through Resend, BCC `ADMIN_NOTIFICATION_BCC` (Alex), with reply-to set to the prospect on real calls. What `source` does:

| source | Email goes to |
|---|---|
| `simulation` | nobody (logged only); used by `test_scenarios.py` |
| `internal-test` | Alex only |
| `review-link` | Lyall and Barbara, subject marked `[Test call]` |
| anything else (real calls) | Lyall and Barbara |

**Calls that end early.** Alex's first browser test (11 Nov 2026) booked a call and closed the tab mid-booking, so the tool never ran. If the analysis records a request (call, email answers, group quote, urgent crisis, opt-out) but the agent never passed it on, the report says so in the subject ("call ended early") and fills the details from the analysis.

The post-call webhook `28bc307a8fd743e4921b7448d8bf23b0` is set on this agent only through `workspace_overrides`, never workspace-wide, so other clients' calls never reach this site. Retries are on, since every report depends on it. The route checks the `ElevenLabs-Signature` HMAC (`ELEVENLABS_WEBHOOK_SECRET`) and the agent id (`VOICE_AGENT_ID`). Both routes share `lib/voice-handoff.ts`; test calls never set reply-to, because the test persona's made-up address sits on a real-looking domain.

Verified live on the internal link: 11 Nov, a session dropped mid-booking produced the "call ended early" email; 12 Nov, a no-request call produced one report (neutral, "no action needed") and a completed group booking produced exactly one report (positive, two follow-ups: call Tuesday 17 Nov at 2pm, prepare group rates for six), with the in-call tool logging "recorded; goes out in the call report".

Booking is a request, not a calendar booking: the agent captures the day and time, contact details and a prep note, tells the person Lyall or Barbara will confirm, and the email asks them to.

## Files

| File | What it is |
|---|---|
| `prompt.md` | System prompt |
| `confirmed-facts.md` | Hand-checked facts (price, terms, people, no trial, no certificate). Rides in the prompt on every turn and overrides everything else |
| `build_kb.py` | Writes `kb/`: the confirmed facts, the course sessions (from `crisis_mc_content_library/content_maps`), 14 live myprpartner.com pages, and lyallmercer.com plus crcpr.com.au. Drops any line about a trial or certification and fails if one survives |
| `setup_agent.py` | Adds the voice, stores the secret, creates or patches the tool, uploads and indexes the KB, creates or patches the agent. Voice, LLM, data fields, checks and test variables live here |
| `test_scenarios.py` | Ten simulated calls (text only, no voice minutes) through ElevenLabs' agent-testing API, written to `tests/` |
| `agent.json` | Agent, tool, secret and KB document ids (none of them secret) |

`kb/` is gitignored: `01-course-sessions.md` is built from the paid course library, which is never committed. Rebuild it locally.

## Run order

```
python automation/voice-agent/build_kb.py
python automation/voice-agent/setup_agent.py --dry-run
python automation/voice-agent/setup_agent.py
python automation/voice-agent/test_scenarios.py
python automation/voice-agent/setup_agent.py --link
```

`setup_agent.py --kb-only` re-uploads the knowledge base without touching other settings. Re-run `build_kb.py` and `--kb-only` whenever the course page, prices or terms change.

## Settings

- Voice: Kate, a professional Australian female voice from the ElevenLabs library ("for receptionist and sales calls in Australia"), `eleven_v4_turbo`.
- LLM: `claude-sonnet-5-5`, temperature 0.3, timezone Australia/Brisbane.
- Turn timeout 8s, patient turn-taking, built-in `end_call` and `skip_turn` (silence while someone checks their calendar).
- Dynamic variables: `first_name`, `organisation`, `email` (the address on file, which the agent confirms rather than collects), `trigger` (private, never read out), `touchpoint`, `prior_notes`, `source`.
- 13 data collection fields (interest, missing information, hesitation, questions, next step, call time, contact details, team size, prep notes, handoff sent, opt-out) and 11 pass/fail checks, each of which passes when it doesn't apply.

## Guardrails in the prompt

- AI disclosure in the first line. It may say Barbara noticed they'd looked at the course; never which pages, emails, dates or counts.
- $340 a month or $3,740 a year, both ex GST. No free trial (withdrawn 11 Nov 2026), no certificate (Barbara, 5 Nov 2026), no discounts, no refunds, no renewal rule stated.
- Knows the sessions in depth but won't teach them on the phone: anyone can open the test link, and the session content is the paid product.
- Never gives out Lyall's or Barbara's addresses; everything goes through the handoff.
- Opt-outs are passed on as `opt_out` so the team can remove the person.

## Test runs (11 Nov 2026)

Ten simulated calls in `tests/`: questions by email, invoice for approval (asks about a trial and a certificate), booking a call with a calendar pause, an eight-person team pushing for a group price, a caller rushing into a meeting, an opt-out, "are you a robot, which pages did I look at", an active crisis, someone trying to get the course taught for free, and refunds, renewal and login sharing.

- First run, 7 of 10. Two real faults: the rushed caller asked for a Thursday callback and left while the agent was still asking for a number, and a caller who agreed to an email reply hung up before giving an address. Both ended with nothing sent. Two more were checks marking down good calls (the caller raised questions unprompted, or picked the next step themselves).
- Fixes: the contact's email on file comes in as `email` so the agent confirms instead of collecting; a rushed caller gets one question (day and time), an immediate handoff and a one-line goodbye; the handoff goes as soon as the next step is settled, and in the same turn if the caller starts wrapping up; two checks reworded. The route's reply now suits urgent and opt-out calls.
- Second run, 10 of 10. A live websocket session with the internal link's variables also started cleanly and greeted "Hi Sam".

## Open questions for My PR Partner

- Months 9, 10 and 12 have different titles on `/crisis-masterclass` (leadership mirror, accountability without liability, becoming the Crisis Ready communicator) and `/crisis-masterclass/inside` (navigating the modern noise, the five hindrances, capstone tabletop simulation). The agent uses the main page's list and says topics can change.
- Renewal: the Terms say the Crisis Masterclass doesn't renew automatically; the Kajabi offer says it renews until cancelled. The agent says the team will confirm.
- The session 8 workbook in the content library is a copy of session 6, so months 8 to 12 have no session notes yet.

## Not built yet

- Outbound calling: a phone number (Twilio or SIP) and the trigger feed (email opens and site visits from MailCheap and Clarity). Before it calls anyone but the team: wash against the Do Not Call Register and the email unsubscribes, keep to permitted calling hours, and leave a gap between repeat calls.
- A calendar link for self-booking, if Lyall and Barbara want one instead of confirming times by email.
