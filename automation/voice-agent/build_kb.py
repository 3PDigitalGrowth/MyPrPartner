"""Build the Crisis Masterclass course assistant's knowledge base files in kb/.

    00-confirmed-facts.md   copy of confirmed-facts.md (hand-written, checked
                            against the live site). Rides in the prompt on
                            every turn and overrides everything else.
    01-course-sessions.md   what each released session teaches: summary,
                            frameworks, stories and exercises from the lesson
                            content maps, plus the workbook structure and
                            exercises. Searched (RAG).
    02-myprpartner-site.md  live text of the myprpartner.com pages below.
                            Searched (RAG).
    03-lyall-and-crc.md     live text of lyallmercer.com and crcpr.com.au
                            (CRC's client list left out on purpose). Searched.

Lines that mention a free trial or a certificate are dropped from the site
text: the ten-day trial was withdrawn on 11 Nov 2026 and there has never been
a certificate (Barbara, 5 Nov 2026). The build fails if either survives.

Re-run after any change to the site, the content maps or confirmed-facts.md,
then run setup_agent.py --kb-only.

    python automation/voice-agent/build_kb.py
"""
import html
import os
import re
import sys
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
KB = os.path.join(HERE, "kb")
MAPS = os.path.join(REPO, "crisis_mc_content_library", "content_maps")

MPP = "https://myprpartner.com"
MPP_PAGES = [
    "/crisis-masterclass",
    "/crisis-masterclass/inside",
    "/melissa-agnes",
    "/crisis-ready-formula",
    "/issue-or-crisis",
    "/case-study/maple-leaf-foods",
    "/crisis-media-training",
    "/about",
    "/about/expert-trainers",
    "/about/giving-back",
    "/programs",
    "/contact",
    "/",
    "/terms-and-conditions",
]
OTHER_PAGES = [
    "https://lyallmercer.com/",
    "https://lyallmercer.com/media-training/",
    "https://lyallmercer.com/speaker-workshops/",
    "https://crcpr.com.au/",
    "https://crcpr.com.au/our-executive-team/",
    "https://crcpr.com.au/crisis/",
    "https://crcpr.com.au/media-training/",
    "https://crcpr.com.au/services/",
    "https://crcpr.com.au/online/",
]

# Withdrawn or never-offered claims. Lines carrying them never reach the agent.
# "Certification" also catches the inside page's notes that two sessions come
# from Melissa's separate Crisis Ready Certification program, which a caller
# could hear as "this course certifies me". The T&Cs' 10-day renewal notice
# and trainers' own qualifications stay.
BANNED = re.compile(r"(?i)\btrial\b|certification|certificate of completion|certifies|certified")

# Lesson map sections the agent needs; quotes, content ideas and our own
# caution notes stay out.
LESSON_SECTIONS = ("Session summary", "Named frameworks", "Case study timeline",
                   "Stories and examples", "Other stories", "Exercises")
WORKBOOK_SECTIONS = ("Structure", "Frameworks", "Exercises")


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "mpp-voice-kb-build"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", errors="replace")


def page_text(url):
    s = fetch(url)
    title = re.search(r"(?is)<title>(.*?)</title>", s)
    title = html.unescape(title.group(1)).split("|")[0].strip() if title else url
    s = re.sub(r"(?is)<(script|style|noscript|svg|header|footer|nav)[^>]*>.*?</\1>", " ", s)
    m = re.search(r"(?is)<main[^>]*>(.*)</main>", s)
    s = m.group(1) if m else s
    s = re.sub(r"(?i)<br\s*/?>|</(p|h[1-6]|li|div|tr|td|th|summary|details|button)>", "\n", s)
    s = html.unescape(re.sub(r"<[^>]+>", " ", s))
    s = re.sub(r"[ \t\xa0]+", " ", s).replace("�", "")
    lines, dropped = [], 0
    for line in (l.strip() for l in s.splitlines()):
        if not line:
            continue
        if BANNED.search(line):
            dropped += 1
            continue
        lines.append(line)
    return title, "\n".join(lines), dropped


def sections(text, wanted, level):
    """Keep only the headed sections whose titles start with one of `wanted`."""
    marker = "#" * level + " "
    out, keep = [], False
    for line in text.splitlines():
        if line.startswith(marker):
            title = re.sub(r"^#+\s*(\d+\.\s*)?", "", line).strip()
            keep = title.startswith(wanted)
        elif re.match(r"^#{1,%d} " % (level - 1), line):
            keep = False
        if keep:
            out.append(line)
    return "\n".join(out).strip()


def course_sessions():
    parts = [
        "# Crisis Masterclass: what each session teaches\n",
        "Notes on the Crisis Ready(R) sessions Melissa Agnes presents in the Crisis Masterclass, "
        "taken from the session recordings and workbooks. Each session closes with a Q&A between "
        "Melissa and Lyall Mercer. The frameworks are Melissa Agnes's and the Crisis Ready Institute's. "
        "Sessions 1 to 7 are below; the topics for months 8 to 12 are in Confirmed facts.\n",
    ]
    for n in range(1, 8):
        with open(os.path.join(MAPS, f"lesson_{n}_map.md"), encoding="utf-8") as f:
            text = f.read()
        heading = text.splitlines()[0].lstrip("# ").strip() if text.startswith("# ") else f"Lesson {n}"
        body = sections(text, LESSON_SECTIONS, 2)
        parts.append(f"\n## Session {n}: {heading}\n\n{body}\n")
    with open(os.path.join(MAPS, "workbooks_map.md"), encoding="utf-8") as f:
        wb = f.read()
    parts.append("\n# Session workbooks\n\nEvery session comes with a workbook. Their structure, frameworks and exercises:\n")
    for block in re.split(r"(?m)^## ", wb)[1:]:
        title, _, rest = block.partition("\n")
        body = sections("### x\n" + rest, WORKBOOK_SECTIONS, 3)
        if body:
            parts.append(f"\n## Workbook: {title.strip()}\n\n{body}\n")
    text = "".join(parts)
    # Content maps carry no claims we've withdrawn, but check anyway.
    return "\n".join(l for l in text.splitlines() if not BANNED.search(l)) + "\n"


def write(name, text):
    with open(os.path.join(KB, name), "w", encoding="utf-8") as f:
        f.write(text)


def main():
    os.makedirs(KB, exist_ok=True)

    with open(os.path.join(HERE, "confirmed-facts.md"), encoding="utf-8") as f:
        facts = f.read()
    write("00-confirmed-facts.md", facts)

    write("01-course-sessions.md", course_sessions())

    parts = ["# myprpartner.com pages (live text)\n"]
    for path in MPP_PAGES:
        title, body, dropped = page_text(MPP + path)
        parts.append(f"\n## {title} ({MPP}{path})\n\n{body}\n")
        print(f"page: {path} ({len(body):,} chars, {dropped} lines dropped)")
    write("02-myprpartner-site.md", "".join(parts))

    parts = ["# Lyall Mercer and CRC Public Relations (live text of lyallmercer.com and crcpr.com.au)\n"]
    for url in OTHER_PAGES:
        title, body, dropped = page_text(url)
        parts.append(f"\n## {title} ({url})\n\n{body}\n")
        print(f"page: {url} ({len(body):,} chars, {dropped} lines dropped)")
    write("03-lyall-and-crc.md", "".join(parts))

    bad = []
    for name in sorted(os.listdir(KB)):
        with open(os.path.join(KB, name), encoding="utf-8") as f:
            text = f.read()
        # Confirmed facts may say there is no trial or certificate; nothing else may mention them.
        if name != "00-confirmed-facts.md" and BANNED.search(text):
            bad.append(name)
        print(f"kb/{name}: {len(text):,} chars")
    if bad:
        sys.exit(f"Withdrawn claims survived in: {', '.join(bad)}")


if __name__ == "__main__":
    main()
