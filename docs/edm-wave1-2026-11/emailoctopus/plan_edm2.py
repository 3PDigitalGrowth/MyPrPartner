"""Crisis Masterclass EDM2, the lesson email: audience, split and EmailOctopus plan (26 Nov 2026).

Lyall approved it in the content studio on 24 Nov 2026 (12:12pm Brisbane): version "both" (the letter
and the design, half the list each) and two subjects split half and half:
  A  "You can't beat emotion with logic"
  B  "One lesson from the Crisis Masterclass"
https://my-pr-partner-content-studio.vercel.app/email/crisis-masterclass-lesson
The wording comes from the studio through ../../edm2-2026-12/build_edm2.py (letter_html, design_html).

Who gets it: every contact in each segment, not only openers (Alex, 26 Nov 2026, overriding the
openers-only plan on the studio page). A segment is the EDM1 audience a contact was sent: the edm1-* tag
from rounds one to three in EO, or the w1-* tag for the 205 sent through MailCheap on 5 Nov. Barbara's
Telum list counts as comms professionals and her councils list as local councils, as before.
Out: anyone not subscribed now (EO lists hard bounces as unsubscribed), anyone EDM1 was never sent to
(the 12,070 held for deliverability: invalid, unverified, catch-all, personal inboxes), enrolled
(Kajabi: no purchases since 5 Nov, checked 26 Nov), and single-venue restaurants, cafes and bars (the
rule Lyall saw on the studio page, as hosp_classify.py applied it for the follow-up). The 51 on the
call list are in.

The split: within each of the seven audiences, recipients are shuffled (fixed seed) and dealt into four
cells, letter A, design A, letter B, design B, so every audience tests both subjects and both versions.
That makes 28 campaigns, one tag each, named like EDM1's. Each audience's first line ("A few weeks ago I
wrote to you about ...") is written into its own HTML, so no contact field is needed.

  python plan_edm2.py pull     every subscribed contact on the list with its tags (raw/edm2/subscribed.json)
  python plan_edm2.py plan     recipients, html-edm2/*.html, eo_plan_edm2.json (no EO writes)
  python plan_edm2.py tag      one edm2-* tag per recipient (resumable)
  python plan_edm2.py check    count each tag in EO against the plan (--fix re-indexes stragglers)

Then: $env:EO_PLAN = "eo_plan_edm2.json"; python eo_build.py build all / test <key> <to> / send
raw/ holds names and addresses and is not committed (public repo).
"""
from __future__ import annotations

import importlib.util
import json
import os
import random
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import plan_fu1 as fu  # noqa: E402
import track_ids as t  # noqa: E402

EDM2 = os.path.normpath(os.path.join(HERE, '..', '..', 'edm2-2026-12'))
spec = importlib.util.spec_from_file_location('build_edm2', os.path.join(EDM2, 'build_edm2.py'))
b2 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(b2)

RAW = os.path.join(HERE, 'raw', 'edm2')
PLAN = os.path.join(HERE, 'eo_plan_edm2.json')
HTML_DIR = 'html-edm2'
SEED = 20261126
FROM_NAME, FROM_EMAIL = 'Lyall Mercer', 'info@myprpartner.com'
SUBJECTS = {'a': "You can't beat emotion with logic", 'b': 'One lesson from the Crisis Masterclass'}
SUBJECT_LABEL = {'a': 'Emotion vs Logic', 'b': 'One Lesson'}
VERSION_LABEL = {'letter': 'Letter', 'design': 'Design'}
CELLS = [('letter', 'a'), ('design', 'a'), ('letter', 'b'), ('design', 'b')]
AUDIENCE_LABEL = {'comms-pro': 'Comms Professionals', 'general-business': 'General Business',
                  'care-health': 'Care & Health', 'hospitality-food': 'Hospitality & Food',
                  'professional-finance': 'Professional & Finance',
                  'construction': 'Construction, Mining & Energy', 'local-council': 'Local Councils'}

# Single-venue hospitality rule, as raw/fu1/hosp_classify.py applied it for the follow-up (20 Nov).
VENUE_IND = {'Food - Cafes and Restaurants', 'Hospitality - Pubs, Taverns & Bars', 'Food - Fast Food'}
MIXED_IND = {'Hospitality - Hospitality', 'Food - Food & Beverage'}
VENUE = re.compile(r"restaurant|\bcaf[eé]|coffee|\bbar\b|kitchen|bistro|dining|eatery|pizz|gradi|trattoria|osteria|grill|brasserie|tavern|\bpub\b|cantina|ristorante|sushi|ramen|thai|burger|bakery|patisserie|gelat|steakhouse|wine bar|diner|canteen|espresso|tapas|noodle|dumpling|yum cha|izakaya|bbq|smokehouse|taqueria|chophouse|oyster|seafood|\bdeli\b|rooftop|lounge|brewing|brewery|distillery", re.I)
MULTI = re.compile(r"group|hospitality|holdings|collective|venues|restaurants|hotels|franchis|enterprises|management|concepts|partners", re.I)
MULTI_JOB = re.compile(r"group|area manager|regional|operations|multi|franchis|portfolio|venues", re.I)


def single_venue(email: str, f: dict) -> bool:
    co, job, ind = f.get('Company') or '', f.get('JobTitle') or '', f.get('Industry') or ''
    venue = ind in VENUE_IND or (ind in MIXED_IND and VENUE.search(f"{co} {email.split('@')[1]}"))
    return bool(venue and not (MULTI.search(co) or MULTI_JOB.search(job)))


def pull() -> None:
    rows = []
    for c in fu.paged(f'/lists/{t.LIST_ID}/contacts?status=subscribed&limit=100'):
        fields = {k: v for k, v in (c.get('fields') or {}).items()
                  if k in ('FirstName', 'Company', 'JobTitle', 'Industry', 'TrackId')}
        rows.append({'id': c['id'], 'email': c['email_address'].lower(), 'tags': c.get('tags') or [],
                     'fields': fields})
        if len(rows) % 10000 == 0:
            print(len(rows), flush=True)
    fu.jsave(os.path.join(RAW, 'subscribed.json'), rows)
    print(f'{len(rows)} subscribed contacts', flush=True)


def audience(tags: list[str]) -> tuple[str | None, str]:
    """(segment, why) from the tag that says which EDM1 audience the contact was sent."""
    sent = [tg for tg in tags if tg.startswith('edm1-') and tg != 'edm1-sent-mailcheap']
    if len(sent) > 1:
        sys.exit(f'more than one EDM1 tag: {sent}')
    if sent:
        tg = sent[0]
        if 'client-telum' in tg:
            return 'comms-pro', tg
        if 'client-councils' in tg:
            return 'local-council', tg
        return fu.audience_of(tg), tg
    if 'edm1-sent-mailcheap' in tags:
        w1 = [tg for tg in tags if tg.startswith('w1-')]
        if len(w1) == 1:
            return fu.audience_of(w1[0]), 'edm1-sent-mailcheap'
    return None, 'never sent EDM1'


def recipients() -> tuple[list, dict]:
    contacts = fu.jload(os.path.join(RAW, 'subscribed.json'))
    if contacts is None:
        sys.exit('run pull first')
    extra = fu.jload(os.path.join(HERE, 'raw', 'fu1', 'exclude-extra.json'), {})
    rows, dropped = [], {}
    for c in sorted(contacts, key=lambda c: c['email']):
        e = c['email']
        aud, _ = audience(c['tags'])
        reason = ('never sent EDM1 (held for deliverability)' if aud is None else extra.get(e)
                  or ('single-venue hospitality' if aud == 'hospitality-food' and single_venue(e, c['fields'])
                      else None))
        if reason:
            dropped[reason] = dropped.get(reason, 0) + 1
            continue
        rows.append({'email': e, 'id': c['id'], 'audience': aud})
    return rows, dropped


def link(version: str, subj: str, aud: str) -> str:
    return (f'https://{b2.LINK_TEXT}{b2.LINK_PATH}?utm_source=edm&utm_medium=email&utm_campaign={b2.CAMPAIGN}'
            f'&utm_content=edm2-{version}-{subj}&utm_term={aud}&eid={{{{TrackId}}}}')


def page(copy: dict, version: str, subj: str, aud: str, first_line: str) -> str:
    c = {**copy, 'subject': SUBJECTS[subj]}
    href = link(version, subj, aud)
    out = b2.letter_html(c, href) if version == 'letter' else b2.design_html(c, href, b2.images())
    tag = '{{' + b2.FIELD + '}}'
    if out.count(tag) != 1:
        sys.exit(f'{version}: expected one {tag}, found {out.count(tag)}')
    return out.replace(tag, b2.esc(first_line))


def plan() -> None:
    copy = b2.studio_copy()
    if not copy['status'].startswith('approved') or 'both' not in copy['status']:
        sys.exit(f"studio status is {copy['status']!r}")
    if copy['subject'] != SUBJECTS['a']:
        sys.exit(f"approved subject is {copy['subject']!r}, script has {SUBJECTS['a']!r}")
    lines = {a['id']: a['firstLine'] for a in copy['audiences']}
    rows, dropped = recipients()
    rng = random.Random(SEED)
    by_aud: dict[str, list] = {}
    for r in rows:
        by_aud.setdefault(r['audience'], []).append(r)
    campaigns, tagged = [], []
    os.makedirs(os.path.join(HERE, HTML_DIR), exist_ok=True)
    for n, aud in enumerate(AUDIENCE_LABEL, 1):
        group = sorted(by_aud.get(aud, []), key=lambda r: r['email'])
        rng.shuffle(group)
        for i, (version, subj) in enumerate(CELLS):
            cell = group[i::4]
            key = f'{aud}-{version}-{subj}'
            tag = f'edm2-{key}'
            html_file = f'{HTML_DIR}/{n:02d}-{key}.html'
            with open(os.path.join(HERE, html_file), 'w', encoding='utf-8', newline='\n') as f:
                f.write(page(copy, version, subj, aud, lines[aud]))
            campaigns.append({'key': key, 'name': f'EDM2-{AUDIENCE_LABEL[aud]}-{SUBJECT_LABEL[subj]}-{VERSION_LABEL[version]}',
                              'tag': tag, 'count': len(cell), 'audience': aud, 'version': version,
                              'subject_variant': subj, 'subject': SUBJECTS[subj], 'preheader': copy['previewLine'],
                              'html_file': html_file})
            tagged += [{**r, 'tag': tag} for r in cell]
    old = {c['key']: c for c in (fu.jload(PLAN, {}) or {}).get('campaigns', [])}
    for c in campaigns:
        for k in ('eo_campaign_id', 'status', 'tested', 'scheduled_for', 'sent_at'):
            if old.get(c['key'], {}).get(k):
                c[k] = old[c['key']][k]
    p1 = fu.jload(os.path.join(HERE, 'eo_plan.json'))
    out = {k: p1[k] for k in ('account', 'list_id', 'list')}
    out.update({'from_name': FROM_NAME, 'from_email': FROM_EMAIL, 'edm': 'EDM2 (Crisis Masterclass lesson)',
                'approved': f"Lyall, content studio, {copy['status']}", 'built': time.strftime('%Y-%m-%d %H:%M'),
                'recipients': len(tagged), 'dropped': dropped,
                'by_audience': {a: len(by_aud.get(a, [])) for a in AUDIENCE_LABEL}, 'campaigns': campaigns})
    fu.jsave(PLAN, out)
    fu.jsave(os.path.join(RAW, 'recipients.json'), tagged)
    print('dropped:', json.dumps(dropped))
    print(f'{len(tagged)} recipients in {len(campaigns)} campaigns')
    for c in campaigns:
        print(f"  {c['tag']:42} {c['count']:5}  {c['name']}")


def tag() -> None:
    rows = fu.jload(os.path.join(RAW, 'recipients.json'))
    done_path = os.path.join(RAW, 'tagged.json')
    done = set(fu.jload(done_path, []))
    todo = [r for r in rows if r['email'] not in done]
    print(f'{len(todo)} to tag ({len(done)} done)', flush=True)
    failed_all, lock = [], threading.Lock()
    chunks = [todo[i:i + 100] for i in range(0, len(todo), 100)]

    def one(n_chunk):
        n, chunk = n_chunk
        out = t.call('PUT', f'/lists/{t.LIST_ID}/contacts/batch',
                     {'contacts': [{'id': r['id'], 'tags': {r['tag']: True}} for r in chunk]})
        failed = {f.get('id') for f in (out.get('failures') or out.get('errors') or []) if isinstance(f, dict)}
        with lock:   # "failed" can be a false alarm (FU1 saw the same); check confirms every tag in EO
            for r in chunk:
                (failed_all.append(r['email']) if r['id'] in failed else done.add(r['email']))
            if failed:
                print(f'  {len(failed)} reported failed in batch {n}', flush=True)
            if n % 50 == 0:
                fu.jsave(done_path, sorted(done))
                print(f'batch {n}/{len(chunks)}, {len(done)} done', flush=True)

    with ThreadPoolExecutor(4) as pool:   # one call at a time ran about 10 batches a minute
        list(pool.map(one, enumerate(chunks)))
    fu.jsave(done_path, sorted(done))
    print(f'tagging done; failed {len(failed_all)}', failed_all[:10], flush=True)


def check() -> None:
    p = fu.jload(PLAN)
    want = {r['email']: r['tag'] for r in fu.jload(os.path.join(RAW, 'recipients.json'))}
    bad = 0
    for c in p['campaigns']:
        seen = {x['email_address'].lower()
                for x in fu.paged(f"/lists/{t.LIST_ID}/contacts?tag={c['tag']}&status=subscribed&limit=100")}
        plan_set = {e for e, tg in want.items() if tg == c['tag']}
        if '--fix' in sys.argv:
            # EO sometimes reports a batch row as failed: the contact holds the tag but the tag search
            # (and the dashboard's "Matches") misses it, and putting the same tag again is a no-op.
            # Turning the tag off and on again re-indexes it (tested 26 Nov 2026).
            for e in plan_set - seen:
                cid = next(r['id'] for r in fu.jload(os.path.join(RAW, 'recipients.json')) if r['email'] == e)
                t.call('PUT', f'/lists/{t.LIST_ID}/contacts/{cid}', {'tags': {c['tag']: False}})
                t.call('PUT', f'/lists/{t.LIST_ID}/contacts/{cid}', {'tags': {c['tag']: True}})
                seen.add(e)
                print(f'  re-indexed {e}', flush=True)
        ok = seen == plan_set
        bad += not ok
        print(f"{c['tag']:42} EO {len(seen):5}  plan {c['count']:5}  "
              f"{'ok' if ok else f'extra {len(seen - plan_set)}, missing {len(plan_set - seen)}'}", flush=True)
    print('all tags match the plan' if not bad else f'{bad} tags differ from the plan')


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else ''
    {'pull': pull, 'plan': plan, 'tag': tag, 'check': check}.get(cmd, lambda: sys.exit(__doc__))()
