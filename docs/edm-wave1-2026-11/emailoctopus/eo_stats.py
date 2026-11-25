"""Pull EDM1 performance from EmailOctopus's reports API for every campaign in eo_plan.json.

  python eo_stats.py                 # print the table, write raw/stats-<time>.json
  python eo_stats.py --wait-until "2026-11-10 15:55"   # sleep until then (Brisbane, PC clock), then pull

Reads EMAILOCTOPUS_API_KEY_MYPRPARTNER from ~/.claude/emailoctopus-myprpartner.env. Read-only.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
PLAN_FILE = os.environ.get("EO_PLAN", "eo_plan.json")  # EO_PLAN=eo_plan_edm2.json for EDM2
PLAN = json.load(open(os.path.join(HERE, PLAN_FILE), encoding="utf-8"))
TAG = "" if PLAN_FILE == "eo_plan.json" else PLAN_FILE.replace("eo_plan_", "").replace(".json", "") + "-"
KEY = next(l.split("=", 1)[1].strip() for l in open(os.path.expanduser(r"~/.claude/emailoctopus-myprpartner.env"))
           if l.startswith("EMAILOCTOPUS_API_KEY_MYPRPARTNER="))


def api(path: str) -> dict:
    r = urllib.request.Request("https://api.emailoctopus.com" + path, headers={"Authorization": f"Bearer {KEY}"})
    with urllib.request.urlopen(r, timeout=30) as x:
        return json.load(x)


def flat(summary: dict) -> dict:
    """EO returns some counters as {unique, total}; keep unique and total separately."""
    out = {}
    for k, v in summary.items():
        if isinstance(v, dict):
            for kk, vv in v.items():
                out[f"{k}_{kk}"] = vv
        else:
            out[k] = v
    return out


SCANNER_WINDOW = dt.timedelta(minutes=3)  # clicks this soon after the send are mostly link scanners


def clickers(cid: str) -> list[dict]:
    out, path = [], f"/campaigns/{cid}/reports?status=clicked&limit=100"
    while path:
        page = api(path)
        out += page.get("data", [])
        nxt = ((page.get("paging") or {}).get("next") or {}).get("url")
        path = nxt.replace("https://api.emailoctopus.com", "") if nxt else None
    return out


def ts(s: str) -> dt.datetime:
    return dt.datetime.fromisoformat(s.replace("Z", "+00:00"))


def pull() -> dict:
    rows = []
    for c in PLAN["campaigns"]:
        cid = c["eo_campaign_id"]
        meta = api(f"/campaigns/{cid}")
        try:
            summ = flat(api(f"/campaigns/{cid}/reports/summary"))
        except Exception as e:  # noqa: BLE001
            summ = {"error": str(e)}
        row = {"key": c["key"], "name": c["name"], "planned": c["count"], "status": meta.get("status"),
               "sent_at": meta.get("sent_at"), **summ}
        if meta.get("sent_at"):
            links = api(f"/campaigns/{cid}/reports/links").get("data", [])
            row["cta_clicked_unique"] = sum(l["clicked_unique"] for l in links if "crisismasterclass" in l["url"])
            row["other_links_clicked_unique"] = sum(l["clicked_unique"] for l in links if "crisismasterclass" not in l["url"])
            sent = ts(meta["sent_at"])
            who = clickers(cid)
            row["clickers_after_3min"] = sum(ts(w["occurred_at"]) - sent > SCANNER_WINDOW for w in who)
            row["clickers_within_3min"] = len(who) - row["clickers_after_3min"]
        rows.append(row)
    return {"pulled_at": dt.datetime.now().strftime("%Y-%m-%d %H:%M"), "rows": rows}


def main() -> None:
    if "--wait-until" in sys.argv:
        target = dt.datetime.strptime(sys.argv[sys.argv.index("--wait-until") + 1], "%Y-%m-%d %H:%M")
        while dt.datetime.now() < target:
            time.sleep(min(60, max(1, (target - dt.datetime.now()).total_seconds())))
    data = pull()
    os.makedirs(os.path.join(HERE, "raw"), exist_ok=True)
    out = os.path.join(HERE, "raw", f"stats-{TAG}{dt.datetime.now():%Y%m%d-%H%M}.json")
    json.dump(data, open(out, "w", encoding="utf-8"), indent=1)
    if "--quiet" not in sys.argv:
        print(json.dumps(data, indent=1))
    print("saved", out)


if __name__ == "__main__":
    main()
