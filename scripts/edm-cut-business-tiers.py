"""Cut the business master list into the Crisis Masterclass send files.

Filters (same as the 2 Sep 2026 audience plan): 10-500 employee band, vendor
email validation OK (catch-all kept, flagged in a column), named contact,
decision-maker title. Then route by vendor Industry label into four crisis
tiers plus a general-business tier. Marketing & Advertising rows are peers or
competitors and never send. The general tier gets a cleaning pass the others
do not: agency/comms/recruitment names, known enterprise names, and any firm
with ten or more in-band contacts (a branch-office headcount, not a 10-500
business) are dropped.

Tier 5 is dual purpose. Its title filter widens to take communications,
marketing, PR, media and public affairs titles at any level, and the file is
split by persona: 5a owners and leaders, 5b comms professionals. Every file
carries a persona column so the same split can be applied to Tiers 1 to 4
later without re-cutting.

Output: crisis_mc_content_library/edm_send_files/<tier>.csv (gitignored, PII).
"""
import csv
import re
import collections
import os

csv.field_size_limit(10**9)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "crisis_mc_content_library", "edm_database")
OUT = os.path.join(ROOT, "crisis_mc_content_library", "edm_send_files")
FILES = ["Business Master List Jan 2026 Part 1.csv", "Business Master List Jan 2026 Part 2.csv"]

DM = re.compile(r"\b(ceo|chief executive|owner|managing director|general manager|principal|director|founder|head of|practice manager|communications)\b", re.I)
COMMS = re.compile(r"\b(communications?|comms|public relations|pr|media|marketing|public affairs|corporate affairs|brand|publicity|external relations|stakeholder relations)\b", re.I)
PEER = re.compile(r"\b(marketing|advertising|media|communications|comms|agency|creative|design|digital|recruitment|recruiting|talent|pr|public relations|branding|brand|studio|publicis|omnicom|mccann|ogilvy|dentsu|wpp|clemenger|saatchi|initiative|mindshare|carat|havas)\b", re.I)
ENTERPRISE = re.compile(r"\b(cisco|coca|gartner|aurecon|ghd|worley|urbis|jbwere|american express|american eagle|jetstar|qantas|experian|thales|kordamentha|microsoft|google|amazon|oracle|ibm|accenture|deloitte|kpmg|pwc|ernst|telstra|optus|westpac|nab|anz|commonwealth|woolworths|coles|bhp|rio tinto|salesforce|adobe|sap|dell|siemens|shell|caltex|lendlease|mirvac|stockland|jll|cbre|colliers|savills|knight frank)\b", re.I)

EXCLUDE = {"Marketing & Advertising"}
TIER4_PREFIX = ("Trades - ", "Energy & Utilities")
TIER4_EXACT = {"Mining"}
HOSP_PREFIX = ("Hospitality - ", "Food - ")
PROF_PREFIX = ("Finance", "Accounting", "Real Estate")
PROF_EXACT = {"Human Resources"}
CARE_PREFIX = ("Medical - ",)
CARE_EXACT = {"Individual & Family Services"}

GENERAL = "tier5-general-business"
LANDING = {
    "tier1-care-health": "/crisis-media-training",
    "tier2-hospitality-food": "/crisis-media-training",
    "tier3-professional-finance": "/pr-training-for-small-business",
    "tier4-construction-mining-energy": "/crisis-media-training",
    "tier5a-general-leaders": "/crisis-media-training",
    "tier5b-general-comms": "/crisis-media-training",
}


def tier_of(ind):
    if ind in EXCLUDE:
        return None
    if ind.startswith(CARE_PREFIX) or ind in CARE_EXACT:
        return "tier1-care-health"
    if ind.startswith(HOSP_PREFIX):
        return "tier2-hospitality-food"
    if ind.startswith(PROF_PREFIX) or ind in PROF_EXACT:
        return "tier3-professional-finance"
    if ind.startswith(TIER4_PREFIX) or ind in TIER4_EXACT:
        return "tier4-construction-mining-energy"
    return GENERAL


def lo_band(e):
    m = re.findall(r"\d+", (e or "").replace(",", ""))
    return int(m[0]) if m else None


def main():
    rows = []
    seen = set()
    for f in FILES:
        with open(os.path.join(SRC, f), encoding="utf-8", errors="replace", newline="") as fh:
            for row in csv.reader(fh):
                if len(row) < 16 or row[0] == "Business" or row[0].startswith("Australian Marketing"):
                    continue
                lo = lo_band(row[14])
                if lo is None or lo < 10 or lo >= 500:
                    continue
                if not row[6].strip().startswith("OK"):
                    continue
                if not row[2].strip() or not row[5].strip():
                    continue
                title = row[4] or ""
                is_dm = bool(DM.search(title))
                is_comms = bool(COMMS.search(title))
                in_general = tier_of(row[1].strip()) == GENERAL
                if not (is_dm or (in_general and is_comms)):
                    continue
                email = row[5].strip().lower()
                if email in seen:
                    continue
                seen.add(email)
                rows.append(list(row[:16]) + ["comms" if is_comms else "leader"])

    firm_counts = collections.Counter(r[0].strip().lower() for r in rows)
    tiers = collections.defaultdict(list)
    dropped = collections.Counter()
    for r in rows:
        t = tier_of(r[1].strip())
        if t is None:
            dropped["excluded industry"] += 1
            continue
        if t == GENERAL:
            if PEER.search(r[0]):
                dropped["general: peer/agency name"] += 1
                continue
            if ENTERPRISE.search(r[0]):
                dropped["general: enterprise name"] += 1
                continue
            if firm_counts[r[0].strip().lower()] >= 10:
                dropped["general: firm with 10+ contacts"] += 1
                continue
            t = "tier5a-general-leaders" if r[16] == "leader" else "tier5b-general-comms"
        tiers[t].append(r)

    os.makedirs(OUT, exist_ok=True)
    hdr = ["business", "industry", "first_name", "surname", "title", "email", "email_validation", "catch_all",
           "state", "postcode", "website", "employees", "persona", "tier", "landing_page"]
    summary = []
    for t in sorted(tiers):
        rs = sorted(tiers[t], key=lambda r: -(lo_band(r[14]) or 0))
        with open(os.path.join(OUT, t + ".csv"), "w", encoding="utf-8", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(hdr)
            for r in rs:
                w.writerow([r[0].strip(), r[1].strip(), r[2].strip(), r[3].strip(), r[4].strip(), r[5].strip(),
                            r[6].strip(), "yes" if "catch" in r[6].lower() else "no", r[11].strip(), r[12].strip(),
                            r[13].strip(), r[14].strip(), r[16], t, LANDING[t]])
        ind = collections.Counter(r[1].strip() for r in rs)
        summary.append((t, len(rs), sum(1 for r in rs if "catch" in r[6].lower()),
                        sum(1 for r in rs if r[16] == "comms"), ind.most_common(8)))

    print("in-band contacts kept (deduped by email):", len(rows))
    for k, v in dropped.items():
        print(f"  dropped {k}: {v}")
    total = 0
    for t, n, ca, cm, ind in summary:
        total += n
        print(f"\n{t}: {n} rows ({ca} catch-all, {cm} comms-persona titles)")
        for k, v in ind:
            print(f"   {v:6d}  {k}")
    print("\ntotal across files:", total)


if __name__ == "__main__":
    main()
