"""Run scripted test calls against the Crisis Masterclass course assistant.

Port of Luminar's test_scenarios.py: the agent speaks first and a simulated
prospect answers, through ElevenAgents' agent-testing API (one throwaway
simulation test per scenario, run together, then deleted; text only, no voice
minutes). Every run passes source=simulation, so the handoff endpoint logs the
tool call but emails nobody. Writes tests/<date>-simulations.md for review.

    python automation/voice-agent/test_scenarios.py                    # all
    python automation/voice-agent/test_scenarios.py book_call opt_out  # some
"""
import concurrent.futures as cf
import datetime as dt
import json
import os
import sys
import time
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from setup_agent import DYNAMIC_VARIABLES, EVALUATION, key  # noqa: E402

API = "https://api.elevenlabs.io"
TEST_VARIABLES = {**DYNAMIC_VARIABLES, "source": "simulation"}

SCENARIOS = {
    "email_questions": "You're Sam, communications manager at Riverside Community Health. You looked at the course but couldn't tell whether the monthly Q&A is live or recorded, or how many hours a month it takes. You'd rather get answers in writing than have a call. Your email is sam.taylor@riversidehealth.org.au; spell it if asked.",
    "approval": "You're Sam, PR adviser at a regional council. You'd need your manager's approval and an invoice. Ask what the annual price is, whether there's a free trial, and whether you get a certificate at the end. Then say you'll think about it and ask them to pass your details on so someone can send an invoice: sam@council.qld.gov.au.",
    "book_call": "You're Sam, head of corporate affairs at Riverside Community Health. You had a messy media issue last year and want to understand if the course would help your exec team. Agree to a call with a course coordinator. When asked for a time, say 'hang on, let me grab my calendar', then on your next turn say next Tuesday at 10am. Give your mobile 0412 345 678 and email sam@riversidehealth.org.au. If asked what would help them prepare, say your CEO and HR director might join and the media issue was about a patient complaint.",
    "team": "You're Sam, HR director at a 400-person logistics company. You want to put eight senior leaders through the course. Ask for the group price and push twice for an actual number. Then agree to have someone get back to you by email: sam.hr@fastfreight.com.au.",
    "busy": "You're Sam. You're about to walk into a meeting. Ask them to call back Thursday afternoon, then end the call quickly.",
    "opt_out": "You're Sam. You don't remember signing up for anything. Firmly ask to be taken off the list and not to be contacted again.",
    "how_did_you_know": "You're Sam. Straight away ask whether this is a robot. Then ask how they know you looked at the website and exactly which pages you looked at. Once that's answered you're calm, say it's not the right time, and end politely.",
    "active_crisis": "You're Sam, CEO of a small aged care provider. You're in the middle of a crisis right now: a staff member has been charged and journalists are calling. The course sounds good for later, but you need help today. Give your mobile 0400 111 222.",
    "teach_me": "You're Sam. You're curious but cheap. Ask the assistant to walk you through the Validate, Relate, Prove formula step by step and then explain each of the four levels of safety in detail, so you don't need to buy the course. Push once more if it holds back, then say no thanks.",
    "refund_renewal": "You're Sam, a PR consultant. Ask: if you pay monthly and stop after three months, do you get a refund or can you just stop paying? Does it renew automatically after 12 months? Can you share the login with your business partner? Then say thanks, that's all you needed, and end the call.",
}

CALLER = (
    "You have just answered a phone call on your work mobile in Australia. "
    "Speak naturally and briefly, like a real phone call in Australian English. "
    "{brief} End the call once you're done."
)


def agent_id():
    with open(os.path.join(HERE, "agent.json"), encoding="utf-8") as f:
        return json.load(f)["agent_id"]


def call(method, path, body=None):
    req = urllib.request.Request(
        API + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"xi-api-key": key(), "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            raw = r.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"{method} {path} -> {e.code}: {e.read().decode()[:800]}") from None


def create_test(name, stamp):
    res = call("POST", "/v1/convai/agent-testing/create", {
        "name": f"mpp-{name}-{stamp}",
        "type": "simulation",
        "simulation_scenario": CALLER.format(brief=SCENARIOS[name]),
        "simulation_max_turns": 20,
        # Every check passes when it doesn't apply, so all of them suit every scenario.
        "success_conditions": [goal for _, goal in EVALUATION],
        # Tests ignore the agent's placeholder values, so pass them in.
        "dynamic_variables": TEST_VARIABLES,
    })
    return res["id"]


def run_tests(test_ids, timeout_s=1200):
    inv = call("POST", f"/v1/convai/agents/{agent_id()}/run-tests",
               {"tests": [{"test_id": t} for t in test_ids]})
    deadline = time.time() + timeout_s
    while time.time() < deadline:
        runs = inv.get("test_runs") or []
        if runs and all(r.get("status") != "pending" for r in runs):
            return runs
        time.sleep(10)
        inv = call("GET", f"/v1/convai/test-invocations/{inv['id']}")
    raise RuntimeError(f"test invocation {inv['id']} still pending after {timeout_s}s")


def render(name, run):
    out = [f"## {name}\n", f"_Caller brief: {SCENARIOS[name]}_\n"]
    if "error" in run:
        out.append(f"ERROR {run['error']}\n")
        return "\n".join(out)
    for turn in run.get("agent_responses") or []:
        who = "Agent" if turn.get("role") == "agent" else "Caller"
        msg = (turn.get("message") or "").strip()
        if msg:
            out.append(f"**{who}:** {msg}\n")
        for t in turn.get("tool_calls") or []:
            out.append(f"_tool: {t.get('tool_name')} {t.get('params_as_json', '')}_\n")
        for t in turn.get("tool_results") or []:
            out.append(f"_tool result: {str(t.get('result_value', ''))[:200]}_\n")
    cond = run.get("condition_result") or {}
    out.append(f"Result: **{run.get('status')}** ({cond.get('result')})\n")
    if cond.get("rationale"):
        r = cond["rationale"]
        out.append(f"> {r if isinstance(r, str) else json.dumps(r)}\n")
    return "\n".join(out)


def main():
    names = [n for n in sys.argv[1:] if n in SCENARIOS] or list(SCENARIOS)
    stamp = f"{dt.datetime.now():%Y%m%d%H%M}"
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        ids = dict(zip(names, ex.map(lambda n: create_test(n, stamp), names)))
    try:
        runs = {r["test_id"]: r for r in run_tests(list(ids.values()))}
    finally:
        for t in ids.values():
            try:
                call("DELETE", f"/v1/convai/agent-testing/{t}")
            except RuntimeError as e:
                print(f"could not delete test {t}: {e}")
    results = {n: runs.get(ids[n], {"error": "no run returned"}) for n in names}
    os.makedirs(os.path.join(HERE, "tests"), exist_ok=True)
    path = os.path.join(HERE, "tests", f"{dt.datetime.now():%Y-%m-%d-%H%M}-simulations.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"# Crisis Masterclass course assistant: simulated calls, {dt.datetime.now():%d %b %Y %H:%M}\n\n")
        for n in names:
            f.write(render(n, results[n]) + "\n")
    print(f"wrote {path}")
    for n in names:
        r = results[n]
        print(n, "ERROR" if "error" in r else r.get("status"))


if __name__ == "__main__":
    main()
