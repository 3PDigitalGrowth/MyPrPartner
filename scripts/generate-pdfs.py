#!/usr/bin/env python3
"""
Generate PDF downloads from HTML print templates.

Usage:
    python scripts/generate-pdfs.py [template_name]

    template_name  Optional. Name of template to regenerate (without .html).
                   Defaults to all templates.

Examples:
    python scripts/generate-pdfs.py            # regenerate all
    python scripts/generate-pdfs.py pr-guide   # regenerate one

Templates live in:  scripts/print-templates/*.html
Output goes to:     public/downloads/<name>.pdf

Requirements:
    pip install playwright
    playwright install chromium
"""
import sys
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

REPO_ROOT = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = REPO_ROOT / "scripts" / "print-templates"
OUTPUT_DIR = REPO_ROOT / "public" / "downloads"

TEMPLATES = {
    "pr-guide": {
        "template": "pr-guide.html",
        "output": "pr-guide.pdf",
    },
}


def generate(name: str) -> None:
    cfg = TEMPLATES[name]
    template_path = TEMPLATES_DIR / cfg["template"]
    output_path = OUTPUT_DIR / cfg["output"]

    if not template_path.exists():
        print(f"  ERROR: template not found: {template_path}")
        return

    url = template_path.as_uri()
    print(f"  template: {template_path.relative_to(REPO_ROOT)}")
    print(f"  output:   {output_path.relative_to(REPO_ROOT)}")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(url, wait_until="networkidle")
        page.pdf(
            path=str(output_path),
            format="A4",
            print_background=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        browser.close()

    size_kb = output_path.stat().st_size // 1024
    print(f"  done: {size_kb} KB")


def main() -> None:
    target = sys.argv[1] if len(sys.argv) > 1 else None

    if target:
        if target not in TEMPLATES:
            print(f"Unknown template '{target}'. Available: {', '.join(TEMPLATES)}")
            sys.exit(1)
        names = [target]
    else:
        names = list(TEMPLATES.keys())

    for name in names:
        print(f"\n[{name}]")
        generate(name)

    print("\nAll done.")


if __name__ == "__main__":
    main()
