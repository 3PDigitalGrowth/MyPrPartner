"""Create or update the Crisis Masterclass course assistant in ElevenAgents.

Port of Luminar's setup_agent.py (automation/voice-agent/ in the Luminar repo),
plus a webhook tool, send_to_course_team, that posts each call's questions and
call requests to myprpartner.com/api/voice/handoff, which emails Lyall and
Barbara. Uploads every kb/*.md file (build them first with build_kb.py), then
creates the agent (first run) or patches it (later runs).

Non-secret ids live in agent.json beside this script. Secrets never touch the
repo: the ElevenLabs key comes from ~/.claude/elevenlabs.env (3P's account),
and the handoff secret from ~/.claude/mpp-voice.env (VOICE_HANDOFF_SECRET,
the same value as the Vercel env var of that name).

    python automation/voice-agent/setup_agent.py --dry-run  # print the payload, no network
    python automation/voice-agent/setup_agent.py            # full sync
    python automation/voice-agent/setup_agent.py --kb-only  # re-upload KB, re-link
    python automation/voice-agent/setup_agent.py --link     # print the browser test link only
"""
import glob
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
STATE = os.path.join(HERE, "agent.json")
ENV_FILE = os.path.expanduser("~/.claude/elevenlabs.env")
SECRET_FILE = os.path.expanduser("~/.claude/mpp-voice.env")
API = "https://api.elevenlabs.io"

AGENT_NAME = "My PR Partner - Crisis Masterclass course assistant"
TAGS = ["myprpartner", "3p-digital"]
# "Kate", a professional Australian female voice from the shared library,
# described as built for receptionist and sales calls in Australia. Added to
# 3P's account on first run (one voice slot).
VOICE = {"voice_id": "w9rPM8AIZle60Nbpw7nl",
         "public_owner_id": "ca441551477dd270248832ee36622eab1d63477d99b801be48ce78e09b3501cf",
         "name": "Kate (MPP course assistant)"}
TTS_MODEL = "eleven_v4_turbo"
LLM = "claude-sonnet-5-5"
# Alex, 11 Nov 2026: about 15 minutes, so Lyall and Barbara can test it properly.
MAX_CALL_SECONDS = 900
FIRST_MESSAGE = (
    "Hi {{first_name}}, I'm the AI course assistant at My PR Partner. Barbara, one of our "
    "directors, saw you'd had a look at the Crisis Masterclass and was keen to get in touch, "
    "just to make sure you've got everything you need. Have you got a couple of minutes?"
)
HANDOFF_URL = "https://myprpartner.com/api/voice/handoff"
# Safety net: ElevenLabs posts each finished call here, and the route emails the
# team if the caller asked for something but hung up before the handoff ran.
# Set on this agent only (workspace_overrides), never workspace-wide, so other
# clients' calls never reach this site.
POST_CALL_URL = "https://myprpartner.com/api/voice/post-call"

# The talk-to page and widget ignore these placeholders, so test_link() puts
# every one in the URL (Luminar lesson, 11 Nov 2026: without them the call
# drops with "Missing required dynamic variables in first message"). A real
# outbound call overrides all of them from the contact record.
DYNAMIC_VARIABLES = {
    "first_name": "Sam",
    "organisation": "Riverside Community Health",
    # The address on the contact record, so the agent confirms rather than collects
    # (simulated callers hung up before giving one, 11 Nov 2026).
    "email": "sam.taylor@riversidehealth.org.au",
    "trigger": "opened the last two Crisis Masterclass emails and visited the course page twice",
    "touchpoint": "1",
    "prior_notes": "none",
    # "review-link" marks the handoff email as a test so the team knows it isn't a real prospect.
    "source": "review-link",
}

DATA_COLLECTION = {
    "interest": {"type": "string", "description": "One of: high (wants to enrol or book a call soon), medium (interested, has questions or needs approval), low (not now), none (not interested), unknown."},
    "role": {"type": "string", "description": "Their role and organisation type, in their words. Empty if not given."},
    "missing_information": {"type": "string", "description": "What they said was missing or unclear on the website, in their words. Empty if nothing."},
    "hesitation": {"type": "string", "description": "What is holding them back from enrolling (price, approval, time, timing, relevance, team), in their words. Empty if nothing said."},
    "questions": {"type": "string", "description": "Every question they asked that the assistant passed to the team, word for word, separated by semicolons. Empty if none."},
    "next_step": {"type": "string", "description": "One of: coordinator_call (agreed to a call with Lyall or Barbara), email_answers (questions passed on for an email reply), group_enquiry, urgent_crisis, callback_later (asked to be called at another time), opt_out, none."},
    "call_time": {"type": "string", "description": "The day and time they asked for a call, as an actual date and time with time zone if given, e.g. 'Thursday 13 Nov, 2pm AEST'. Empty if none."},
    "contact_email": {"type": "string", "description": "The email address they confirmed on the call, exactly as read back. Empty if none."},
    "contact_phone": {"type": "string", "description": "The phone number they gave. Empty if none or if they said the number called is fine."},
    "team_size": {"type": "string", "description": "How many people they'd want to enrol, if they mentioned a team or board. Empty if not."},
    "prep_notes": {"type": "string", "description": "What they said when asked what would help Lyall or Barbara prepare for the call. Empty if not asked or nothing given."},
    "handoff_sent": {"type": "boolean", "description": "True if send_to_course_team was called successfully during the call."},
    "opt_out": {"type": "boolean", "description": "True only if they explicitly asked not to be called or emailed again, or to be taken off the list. Not interested today is false."},
}

NA = " Mark success if it did not apply because the person was busy or in a rush, not interested, or asked not to be contacted."
EVALUATION = [
    ("ai_disclosed", "The assistant said it was an AI in its first turn, and never claimed to be a person."),
    ("gap_explored", "The assistant found out what was missing or unclear on the website, or what was holding the person back: either it asked, or the person raised their questions or concerns unprompted and the assistant dealt with each one." + NA),
    ("facts_accurate", "Every fact the assistant stated matches the knowledge base. Fail if it offered or implied a free trial, a certificate, a discount or a refund, quoted a price other than $340 a month or $3,740 a year (both ex GST), or invented a date, client or outcome."),
    ("next_step_offered", "A next step was settled: the assistant offered a call with Lyall or Barbara or an email reply, or the person asked for one of these themselves and the assistant arranged it." + NA),
    ("handoff_complete", "If the person agreed to a call or to have questions answered by email, the assistant called send_to_course_team before the call ended, with their questions and confirmed contact details (and the call time, for a call). Mark success if nothing was agreed."),
    ("email_read_back", "If the person gave an email address, the assistant read it back to confirm it. Mark success if no email was given."),
    ("room_to_check_calendar", "When arranging a call time, the assistant asked for the day and time on its own (not bundled with contact details), offered a moment to check a calendar or waited quietly while they checked, and did not talk over them." + NA),
    ("prep_question_asked", "If a call was agreed, the assistant asked one open question about anything that would help Lyall or Barbara prepare." + NA),
    ("no_false_promises", "The assistant never said it would send an email, link or invite itself or call back itself; it said Lyall or Barbara would."),
    ("no_tracking_detail", "Saying Barbara noticed the person had looked at the Crisis Masterclass is expected and fine. Fail only if the assistant named specific pages, emails, dates or counts of what the person viewed or opened, or read out the private trigger text."),
    ("opt_out_respected", "If the person asked not to be contacted, the assistant apologised, confirmed it, passed it on and ended the call without pushing. Mark success if no opt-out was asked for."),
]


def s(desc, enum=None):
    out = {"type": "string", "description": desc}
    if enum:
        out["enum"] = enum
    return out


HANDOFF_TOOL = {
    "name": "send_to_course_team",
    "description": (
        "Email Lyall and Barbara at My PR Partner with this person's questions, what was missing "
        "from the website, any call they want booked and their confirmed contact details. Call it "
        "once, near the end, after the details are confirmed and before saying goodbye. Also use it "
        "for an urgent active crisis and for opt-outs."
    ),
    "properties": {
        "request_type": s("What the team needs to do.", ["call_request", "questions", "group_enrolment", "urgent_crisis", "opt_out"]),
        "contact_name": s("The person's name as they gave it."),
        "organisation": s("Their organisation."),
        "role": s("Their role, if given."),
        "email": s("Their email address, exactly as read back and confirmed. Empty if none."),
        "phone": s("Best phone number, if given. Empty if none."),
        "preferred_call_time": s("For a call: the day and time they asked for as an actual date, with their time zone if not Queensland. Empty otherwise."),
        "questions": s("Every question for the team, in the person's words. Empty if none."),
        "missing_information": s("What they said was missing or unclear on the website. Empty if nothing."),
        "hesitation": s("What is holding them back from enrolling, in their words. Empty if nothing."),
        "group_size": s("How many people they'd enrol, if a team or board came up. Empty if not."),
        "summary": s("Two or three sentences on the call: who they are, why they're interested, what they want next, and their answer to the prep question if a call was booked."),
        "promised": s("Exactly what you told them would happen next, e.g. 'Lyall or Barbara will call Thursday 13 Nov at 2pm to confirm'."),
    },
    "required": ["request_type", "contact_name", "summary", "promised"],
    # Filled from the conversation, not by the model.
    "auto": {"conversation_id": "system__conversation_id", "source": "source"},
}


def read_env(path):
    out = {}
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    out[k.strip()] = v.strip().strip('"')
    return out


def key():
    k = read_env(ENV_FILE).get("ELEVENLABS_API_KEY")
    if not k:
        sys.exit(f"ELEVENLABS_API_KEY missing from {ENV_FILE}")
    return k


def call(method, path, body=None):
    req = urllib.request.Request(
        API + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"xi-api-key": key(), "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            raw = r.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        sys.exit(f"{method} {path} -> {e.code}: {e.read().decode()[:2000]}")


def load_state():
    if os.path.exists(STATE):
        with open(STATE, encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_state(state):
    with open(STATE, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)
        f.write("\n")


def kb_files():
    files = sorted(glob.glob(os.path.join(HERE, "kb", "*.md")))
    if not files:
        sys.exit("No kb/*.md files. Run build_kb.py first.")
    return files


EMBEDDING_MODEL = "e5_mistral_7b_instruct"
ALWAYS_IN_PROMPT = {"00-confirmed-facts"}


def sync_kb(state):
    """Upload each kb/*.md as a fresh text document and index it; return the old copies."""
    old = state.get("knowledge_base", [])
    docs = []
    for path in kb_files():
        name = os.path.splitext(os.path.basename(path))[0]
        with open(path, encoding="utf-8") as f:
            text = f.read()
        res = call("POST", "/v1/convai/knowledge-base/text", {"text": text, "name": f"mpp-{name}"})
        mode = "prompt" if name in ALWAYS_IN_PROMPT else "auto"
        docs.append({"type": "text", "id": res["id"], "name": f"mpp-{name}", "usage_mode": mode})
        idx = call("POST", f"/v1/convai/knowledge-base/{res['id']}/rag-index", {"model": EMBEDDING_MODEL})
        print(f"kb: uploaded {name} -> {res['id']} ({mode}, index {idx.get('status')})")
    state["knowledge_base"] = docs
    return old


def ensure_voice(state):
    """Add the library voice to 3P's account once (agents need it in My Voices)."""
    if state.get("voice_added"):
        return
    mine = call("GET", "/v1/voices?show_legacy=false")["voices"]
    if not any(v["voice_id"] == VOICE["voice_id"] for v in mine):
        res = call("POST", f"/v1/voices/add/{VOICE['public_owner_id']}/{VOICE['voice_id']}", {"new_name": VOICE["name"]})
        print(f"voice: added {VOICE['name']} -> {res.get('voice_id')}")
    state["voice_added"] = True


def ensure_secret(state):
    """Store the handoff secret as an ElevenLabs workspace secret; keep only its id."""
    if state.get("handoff_secret_id"):
        return state["handoff_secret_id"]
    value = read_env(SECRET_FILE).get("VOICE_HANDOFF_SECRET")
    if not value:
        sys.exit(f"VOICE_HANDOFF_SECRET missing from {SECRET_FILE}")
    res = call("POST", "/v1/convai/secrets", {"type": "new", "name": "mpp_voice_handoff", "value": value})
    state["handoff_secret_id"] = res["secret_id"]
    print(f"secret: stored -> {res['secret_id']}")
    return res["secret_id"]


def ensure_post_call_webhook(state):
    """Create the post-call webhook once; its HMAC secret goes to SECRET_FILE, never the repo."""
    if state.get("post_call_webhook_id"):
        return
    res = call("POST", "/v1/workspace/webhooks", {"settings": {
        "auth_type": "hmac", "name": "mpp-course-assistant-post-call", "webhook_url": POST_CALL_URL}})
    state["post_call_webhook_id"] = res["webhook_id"]
    secret = res.get("webhook_secret")
    if secret and "ELEVENLABS_WEBHOOK_SECRET" not in read_env(SECRET_FILE):
        with open(SECRET_FILE, "a", encoding="utf-8") as f:
            f.write(f"ELEVENLABS_WEBHOOK_SECRET={secret}\n")
    print(f"webhook: created {res['webhook_id']}"
          + (f"; secret saved to {SECRET_FILE}. Add it to Vercel as ELEVENLABS_WEBHOOK_SECRET"
             if secret else "; NO SECRET RETURNED, copy it from the ElevenLabs dashboard"))


def tool_config(secret_id):
    props = {k: dict(v) for k, v in HANDOFF_TOOL["properties"].items()}
    for prop, var in HANDOFF_TOOL["auto"].items():
        props[prop] = {"type": "string", "description": "", "dynamic_variable": var}
    return {"tool_config": {
        "type": "webhook",
        "name": HANDOFF_TOOL["name"],
        "description": HANDOFF_TOOL["description"],
        "response_timeout_secs": 20,
        "api_schema": {
            "url": HANDOFF_URL,
            "method": "POST",
            "request_headers": {"x-voice-secret": {"secret_id": secret_id}},
            "request_body_schema": {
                "type": "object",
                "description": HANDOFF_TOOL["description"],
                "properties": props,
                "required": HANDOFF_TOOL["required"],
            },
        },
    }}


def sync_tool(state):
    secret_id = ensure_secret(state)
    body = tool_config(secret_id)
    if state.get("tool_id"):
        call("PATCH", f"/v1/convai/tools/{state['tool_id']}", body)
        print(f"tool: updated {state['tool_id']}")
    else:
        state["tool_id"] = call("POST", "/v1/convai/tools", body)["id"]
        print(f"tool: created {state['tool_id']}")


def conversation_config(state):
    with open(os.path.join(HERE, "prompt.md"), encoding="utf-8") as f:
        prompt = f.read()
    return {
        "agent": {
            "first_message": FIRST_MESSAGE,
            "language": "en",
            "dynamic_variables": {"dynamic_variable_placeholders": DYNAMIC_VARIABLES},
            "prompt": {
                "prompt": prompt,
                "llm": LLM,
                "temperature": 0.3,
                # Without a timezone the {{system__time}} variables stay empty.
                "timezone": "Australia/Brisbane",
                "knowledge_base": state.get("knowledge_base", []),
                "rag": {"enabled": True, "embedding_model": EMBEDDING_MODEL},
                "tool_ids": [state["tool_id"]] if state.get("tool_id") else [],
                "built_in_tools": {
                    "end_call": {
                        "type": "system",
                        "name": "end_call",
                        "description": "End the call after both sides have said goodbye, or straight after the person asks not to be contacted again.",
                        "params": {"system_tool_type": "end_call"},
                    },
                    "skip_turn": {
                        "type": "system",
                        "name": "skip_turn",
                        "description": "Stay silent while the person checks their calendar or asks for a moment ('give me a sec', 'let me check'). Say a short 'no rush, take your time' first, then use this and wait for them to speak.",
                        "params": {"system_tool_type": "skip_turn"},
                    },
                },
            },
        },
        "tts": {"voice_id": VOICE["voice_id"], "model_id": TTS_MODEL},
        "turn": {"turn_timeout": 8, "turn_eagerness": "patient"},
        "conversation": {"max_duration_seconds": MAX_CALL_SECONDS},
    }


def platform_settings(state):
    settings = {
        "data_collection": DATA_COLLECTION,
        "evaluation": {"criteria": [
            {"id": cid, "name": cid, "type": "prompt", "conversation_goal_prompt": goal}
            for cid, goal in EVALUATION
        ]},
        "privacy": {"record_voice": True},
    }
    if state.get("post_call_webhook_id"):
        settings["workspace_overrides"] = {"webhooks": {
            "post_call_webhook_id": state["post_call_webhook_id"],
            "events": ["transcript"],
            "transcript_format": "json",
            "send_audio": False,
        }}
    return settings


def test_link(agent_id, source="review-link"):
    """Browser test link with the test persona passed as var_<name> params.

    review-link   for Lyall and Barbara: handoffs email them, marked [Test call]
    internal-test for 3P: handoffs email the BCC list (Alex) only
    """
    variables = {**DYNAMIC_VARIABLES, "source": source}
    params = {"agent_id": agent_id, **{f"var_{k}": v for k, v in variables.items()}}
    return "https://elevenlabs.io/app/talk-to?" + urllib.parse.urlencode(params, quote_via=urllib.parse.quote)


def main():
    if "--link" in sys.argv:
        state = load_state()
        if not state.get("agent_id"):
            sys.exit("No agent_id in agent.json yet. Run a full sync first.")
        print("client review link (handoffs email Lyall and Barbara, marked [Test call]):")
        print(test_link(state["agent_id"]))
        print("internal test link (handoffs email Alex only):")
        print(test_link(state["agent_id"], "internal-test"))
        return

    if "--dry-run" in sys.argv:
        state = load_state()
        state.setdefault("knowledge_base", [
            {"type": "text", "id": f"<doc id: {os.path.basename(p)}>", "name": f"mpp-{os.path.basename(p)[:-3]}",
             "usage_mode": "prompt" if os.path.basename(p)[:-3] in ALWAYS_IN_PROMPT else "auto"}
            for p in kb_files()
        ])
        state.setdefault("tool_id", "<tool id: send_to_course_team>")
        print("DRY RUN: no network calls made.")
        print(f"agent: {'update ' + state['agent_id'] if state.get('agent_id') else 'create new'}")
        print(json.dumps(tool_config("<secret id>"), indent=2))
        print(json.dumps({
            "name": AGENT_NAME,
            "tags": TAGS,
            "conversation_config": conversation_config(state),
            "platform_settings": platform_settings(state),
        }, indent=2)[:5000])
        return

    kb_only = "--kb-only" in sys.argv
    state = load_state()
    if not kb_only:
        ensure_voice(state)
        sync_tool(state)
        ensure_post_call_webhook(state)
        save_state(state)
    old_docs = sync_kb(state)
    save_state(state)  # keep the new doc ids even if the agent call fails

    if state.get("agent_id"):
        body = {"conversation_config": conversation_config(state)}
        if not kb_only:
            body.update({"name": AGENT_NAME, "platform_settings": platform_settings(state)})
        call("PATCH", f"/v1/convai/agents/{state['agent_id']}", body)
        print(f"agent: updated {state['agent_id']}")
    else:
        res = call("POST", "/v1/convai/agents/create", {
            "name": AGENT_NAME,
            "tags": TAGS,
            "conversation_config": conversation_config(state),
            "platform_settings": platform_settings(state),
        })
        state["agent_id"] = res["agent_id"]
        print(f"agent: created {state['agent_id']}")
    save_state(state)

    for d in old_docs:
        try:
            call("DELETE", f"/v1/convai/knowledge-base/{d['id']}")
        except SystemExit as e:
            print(f"kb: could not delete old doc {d['id']}: {e}")
    print(f"test link: {test_link(state['agent_id'])}")


if __name__ == "__main__":
    main()
