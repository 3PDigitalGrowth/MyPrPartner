"""Build MPP's EDM1 campaigns in EmailOctopus's dashboard from eo_plan.json (10 Nov 2026).

EO's API cannot create campaigns, so this drives the dashboard the same way as SCCS's EO work
(C:/GitHub Local/SCCS/automation/eo-browser: nodriver + Chrome for Testing, its own profile,
never Alex's Chrome). It imports those helpers and adds what MPP needs on top: each campaign
goes to one tag on the "My PR Partner prospects" list (Sending to -> Tag), not a whole list.

Start the logged-in browser first (a separate profile from SCCS):
  $env:EO_SCCS_PROFILE = "$HOME\\.claude\\browser-profiles\\eo-mpp"
  $env:EO_SCCS_WORKDIR = "$HOME\\.claude\\tools\\eo-browser\\work-mpp"
  $py = "$HOME\\.claude\\tools\\eo-browser\\venv\\Scripts\\python.exe"
  & $py -I "C:\\GitHub Local\\SCCS\\automation\\eo-browser\\eo_daemon.py"     # then log in once by hand

Then, with the same env:
  & $py -I -X utf8 eo_build.py build comms-pro-a          # one campaign, or "all"
  & $py -I -X utf8 eo_build.py test comms-pro-a alex@3pdigital.com.au
  & $py -I -X utf8 eo_build.py send comms-pro-a --go      # Alex's go only

Campaign ids are written back to eo_plan.json. Nothing is sent or scheduled by build or test.
"""
from __future__ import annotations

import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SCCS_EO = r"C:\GitHub Local\SCCS\automation\eo-browser"
sys.path.insert(0, SCCS_EO)
import eo_daemon as d  # noqa: E402
import eo_session as s  # noqa: E402
import eo_campaigns as ec  # noqa: E402

PLAN_PATH = os.path.join(HERE, os.environ.get("EO_PLAN", "eo_plan.json"))  # EO_PLAN=eo_plan_r2.json for round two
P = json.load(open(PLAN_PATH, encoding="utf-8"))

# Point the SCCS builder at MPP's plan, sender and HTML.
ec.PLAN_PATH = PLAN_PATH
ec.FROM_NAME, ec.FROM_EMAIL = P["from_name"], P["from_email"]
ec.EO_TZ = "Australia/Brisbane"  # MPP's EO account clock (SCCS's is Sydney); send_at_melbourne holds the form time


def prepared_html(c: dict) -> str:
    html = open(os.path.join(HERE, c["html_file"]), encoding="utf-8").read()
    for tag in ("{{SenderInfoLine}}", "{{UnsubscribeURL}}"):
        if tag not in html:
            sys.exit(f"{tag} missing from {c['html_file']}")
    return html


ec.prepared_html = prepared_html


async def pick_option(tab, combo_index: int, value: str) -> bool:
    """Open the n-th visible combobox on the setup page, search for value, click the exact match."""
    xy = await ec.el_xy(tab, f"[...document.querySelectorAll('[role=combobox]')].filter(e => e.offsetParent)[{combo_index}]",
                        dx="30")
    if not xy:
        return False
    await ec.click_xy(tab, xy)
    await tab.sleep(1.2)
    if await tab.evaluate("!!document.querySelector(\"input[placeholder='Start typing to search']\")"):
        await tab.evaluate("(() => { const i = document.querySelector(\"input[placeholder='Start typing to search']\"); i.focus(); i.select(); })()")
        await tab.send(ec.cdp.input_.insert_text(value))
        await tab.sleep(1.5)
    opt = await s.js(tab, f"""JSON.stringify((() => {{
        const want = {json.dumps(value)};
        const el = [...document.querySelectorAll('li[role=option]')].filter(e => e.getBoundingClientRect().height > 0)
            .find(e => e.innerText.trim().split('\\n')[0].trim() === want);
        if (!el) return null; const r = el.getBoundingClientRect(); return [r.left + 40, r.top + r.height / 2];
    }})())""")
    if not opt:
        return False
    await tab.mouse_click(opt[0], opt[1])
    await tab.sleep(2)
    return True


async def matches(tab) -> int | None:
    m = await tab.evaluate("(document.body.innerText.match(/Matches ([\\d,]+) subscribed/) || [null, null])[1]")
    return int(m.replace(",", "")) if m else None


async def step_setup(tab, c: dict) -> None:
    await tab.get(f"{s.BASE}/campaigns/setup")
    await tab.sleep(6)
    vals = {"campaign_setup_fromName": ec.FROM_NAME, "campaign_setup_fromEmailAddress": ec.FROM_EMAIL,
            "campaign_setup_previewText": c["preheader"]}
    await tab.evaluate(f"""(() => {{
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        for (const [id, v] of Object.entries({json.dumps(vals)})) {{
            const el = document.getElementById(id); setter.call(el, v);
            el.dispatchEvent(new Event('input', {{bubbles: true}})); el.dispatchEvent(new Event('change', {{bubbles: true}}));
        }}
    }})()""")
    await tab.evaluate("window.getSelection && window.getSelection().removeAllRanges()")
    for _ in range(3):  # campaign name: inline title editor bound to campaign_setup_name
        xy = await ec.el_xy(tab, "document.querySelector('h1')", dx="Math.min(60, r.width / 2)")
        await ec.click_xy(tab, xy)
        await tab.sleep(1)
        if await tab.evaluate("document.activeElement && document.activeElement.id === 'campaign_setup_name'"):
            await tab.evaluate("document.activeElement.select()")
            await tab.send(ec.cdp.input_.insert_text(c["name"]))
            await ec.key(tab, "Enter", "Enter", 13)
            await tab.sleep(1)
            break
    for _ in range(3):  # subject: ProseMirror box
        xy = await ec.el_xy(tab, "document.querySelector('#subject-inline-editor [contenteditable=true]')", dx="40")
        await ec.click_xy(tab, xy)
        await tab.sleep(0.6)
        if await tab.evaluate("!!(document.activeElement && document.activeElement.closest && document.activeElement.closest('#subject-inline-editor'))"):
            await ec.key(tab, "a", "KeyA", 65, modifiers=2)
            await tab.sleep(0.2)
            await tab.send(ec.cdp.input_.insert_text(c["subject"]))
            await tab.sleep(1)
            if await tab.evaluate(f"document.getElementById('campaign_setup_subject').value === {json.dumps(c['subject'])}"):
                break
    if not await pick_option(tab, 0, P["list"]):
        await ec.shot(tab, f"{c['key']}-list-missing")
        raise RuntimeError(f"list {P['list']!r} could not be selected")
    await ec.click_button(tab, "Tag", wait=1.5)
    if not await pick_option(tab, 1, c["tag"]):
        await ec.shot(tab, f"{c['key']}-tag-missing")
        raise RuntimeError(f"tag {c['tag']!r} could not be selected")
    got = await s.js(tab, """JSON.stringify({
        name: document.getElementById('campaign_setup_name').value,
        fromName: document.getElementById('campaign_setup_fromName').value,
        fromEmail: document.getElementById('campaign_setup_fromEmailAddress').value,
        subject: document.getElementById('campaign_setup_subject').value,
        preview: document.getElementById('campaign_setup_previewText').value})""")
    want = {"name": c["name"], "fromName": ec.FROM_NAME, "fromEmail": ec.FROM_EMAIL, "subject": c["subject"],
            "preview": c["preheader"]}
    bad = {k: got.get(k) for k, v in want.items() if got.get(k) != v}
    n = await matches(tab)
    await ec.shot(tab, f"{c['key']}-1-setup")
    if bad or n != c["count"]:
        raise RuntimeError(f"setup mismatch: {bad} matches={n} want={c['count']}")
    print(f"[{c['key']}] setup ok, tag {c['tag']} matches {n}", flush=True)
    await ec.click_button(tab, "Save & next", wait=7)
    if "verify your domain" in (await ec.page_text(tab)).lower():
        await ec.click_button(tab, "Continue", wait=8)


async def build(key_: str) -> None:
    p, c = ec.campaign(key_)
    if c.get("eo_campaign_id"):
        print(f"{key_} already built as {c['eo_campaign_id']}", flush=True)
        return
    browser = await d.attach()
    tab = browser.main_tab or browser.tabs[0]
    await step_setup(tab, c)
    cid = await ec.step_design(tab, c)
    p, c = ec.campaign(key_)
    c["eo_campaign_id"], c["status"] = cid, "draft"
    ec.save_plan(p)
    await ec.step_content(tab, c)
    p, c = ec.campaign(key_)
    c["status"] = "ready"
    ec.save_plan(p)
    print(json.dumps({"key": key_, "eo_campaign_id": cid, "status": "ready"}), flush=True)


async def fill(key_: str) -> None:
    """Fill a draft someone already started in EO (eo_campaign_id in the plan) instead of creating one:
    name, sender, subject, preview, list + audience_tag, then the HTML, ending on Review. Sends nothing.
    Used for the 20 Nov follow-up letter (eo_plan_fu1.json), where Alex had opened the draft by hand."""
    p, c = ec.campaign(key_)
    browser = await d.attach()
    tab = browser.main_tab or browser.tabs[0]
    await ec.open_campaign_page(tab, c["eo_campaign_id"], "setup")
    vals = {"campaign_setup_fromName": ec.FROM_NAME, "campaign_setup_fromEmailAddress": ec.FROM_EMAIL,
            "campaign_setup_previewText": c["preheader"]}
    await tab.evaluate(f"""(() => {{
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        for (const [id, v] of Object.entries({json.dumps(vals)})) {{
            const el = document.getElementById(id); setter.call(el, v);
            el.dispatchEvent(new Event('input', {{bubbles: true}})); el.dispatchEvent(new Event('change', {{bubbles: true}}));
        }}
    }})()""")
    for _ in range(3):  # campaign name: inline title editor bound to campaign_setup_name
        xy = await ec.el_xy(tab, "document.querySelector('h1')", dx="Math.min(60, r.width / 2)")
        await ec.click_xy(tab, xy)
        await tab.sleep(1)
        if await tab.evaluate("document.activeElement && document.activeElement.id === 'campaign_setup_name'"):
            await tab.evaluate("document.activeElement.select()")
            await tab.send(ec.cdp.input_.insert_text(c["name"]))
            await ec.key(tab, "Enter", "Enter", 13)
            await tab.sleep(1)
            break
    for _ in range(3):  # subject: ProseMirror box
        xy = await ec.el_xy(tab, "document.querySelector('#subject-inline-editor [contenteditable=true]')", dx="40")
        await ec.click_xy(tab, xy)
        await tab.sleep(0.6)
        if await tab.evaluate("!!(document.activeElement && document.activeElement.closest && document.activeElement.closest('#subject-inline-editor'))"):
            await ec.key(tab, "a", "KeyA", 65, modifiers=2)
            await tab.sleep(0.2)
            await tab.send(ec.cdp.input_.insert_text(c["subject"]))
            await tab.sleep(1)
            if await tab.evaluate(f"document.getElementById('campaign_setup_subject').value === {json.dumps(c['subject'])}"):
                break
    if not await tab.evaluate("/Matches [\\d,]+ subscribed/.test(document.body.innerText)"):
        if not await pick_option(tab, 0, P["list"]):
            await ec.shot(tab, f"{key_}-list-missing")
            raise RuntimeError(f"list {P['list']!r} could not be selected")
    n = int((await ec.pick_tag(tab, c["audience_tag"])).replace(",", ""))
    got = await s.js(tab, """JSON.stringify({
        name: document.getElementById('campaign_setup_name').value,
        fromName: document.getElementById('campaign_setup_fromName').value,
        fromEmail: document.getElementById('campaign_setup_fromEmailAddress').value,
        subject: document.getElementById('campaign_setup_subject').value,
        preview: document.getElementById('campaign_setup_previewText').value})""")
    want = {"name": c["name"], "fromName": ec.FROM_NAME, "fromEmail": ec.FROM_EMAIL, "subject": c["subject"],
            "preview": c["preheader"]}
    bad = {k: got.get(k) for k, v in want.items() if got.get(k) != v}
    await ec.shot(tab, f"{key_}-1-setup")
    if bad or n != c["count"]:
        raise RuntimeError(f"setup mismatch: {bad} matches={n} want={c['count']}")
    print(f"[{key_}] setup ok, tag {c['audience_tag']} matches {n}", flush=True)
    await ec.click_button(tab, "Save & next", wait=7)
    if "verify your domain" in (await ec.page_text(tab)).lower():
        await ec.click_button(tab, "Continue", wait=8)
    url = await s.where(tab)
    if "/template" in url:
        await ec.step_design(tab, c)
    elif "/design" not in url:
        await ec.open_campaign_page(tab, c["eo_campaign_id"], "design")
    for _ in range(10):
        if await tab.evaluate("!!document.querySelector('.cm-content')"):
            break
        await tab.sleep(2)
    await ec.step_content(tab, c)
    summary = await ec.review_summary(tab)
    if c["audience_tag"] not in (summary["to"] or "") or summary["recipients"] != c["count"]:
        await ec.shot(tab, f"{key_}-review-mismatch")
        raise RuntimeError(f"review does not match the plan: {summary}")
    p, c = ec.campaign(key_)
    c["status"] = "ready"
    ec.save_plan(p)
    print(json.dumps({"key": key_, "eo_campaign_id": c["eo_campaign_id"], "status": "ready", **summary}), flush=True)


def main() -> None:
    s.load_env()
    cmd, key_ = sys.argv[1], sys.argv[2]
    keys = [c["key"] for c in P["campaigns"]] if key_ == "all" else [key_]
    for k in keys:
        if cmd == "build":
            s.uc.loop().run_until_complete(build(k))
        elif cmd == "fill":
            s.uc.loop().run_until_complete(fill(k))
        elif cmd == "content":
            s.uc.loop().run_until_complete(ec.resume_content(k))
        elif cmd == "test":
            s.uc.loop().run_until_complete(ec.send_test(k, sys.argv[3]))
        elif cmd == "send":
            if "--go" not in sys.argv:
                sys.exit("send needs --go (Alex's go for this campaign)")
            s.uc.loop().run_until_complete(ec.send_now(k, confirm="--confirm" in sys.argv))
        elif cmd == "schedule":
            # at the plan's send_at_melbourne (Sydney clock); without --confirm it fills the form and reloads
            c = next(x for x in P["campaigns"] if x["key"] == k)
            if c.get("status") == "scheduled":
                print(f"[{k}] already scheduled, skipped", flush=True)
                continue
            if "--confirm" in sys.argv and "--go" not in sys.argv:
                sys.exit("schedule --confirm needs --go (Alex's go)")
            s.uc.loop().run_until_complete(ec.schedule(k, confirm="--confirm" in sys.argv, expect=c.get("count") or c.get("recipients")))
        else:
            sys.exit("usage: eo_build.py build|content|test|send|schedule <key|all> [to] [--go] [--confirm]")


if __name__ == "__main__":
    main()
