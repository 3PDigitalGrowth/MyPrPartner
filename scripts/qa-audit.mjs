// QA audit: verifies internal links resolve to routes/public files, referenced
// assets exist, and flags blank/placeholder download PDFs. Read-only.
// Run: node scripts/qa-audit.mjs
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const SCAN_DIRS = ["app", "components", "content", "lib"];

// ---- collect source files --------------------------------------------------
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(name)) continue;
      walk(p, out);
    } else if (/\.(tsx?|jsx?|mjs|md)$/.test(name)) out.push(p);
  }
  return out;
}
const files = SCAN_DIRS.filter((d) => existsSync(join(ROOT, d))).flatMap((d) =>
  walk(join(ROOT, d))
);

// ---- build the route set from app/ ----------------------------------------
const routes = new Set(["/"]);
function collectRoutes(dir, segs = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("(") && name.endsWith(")")) {
      collectRoutes(p, segs); // route group — no URL segment
      continue;
    }
    if (name.startsWith("[")) {
      collectRoutes(p, [...segs, ":param"]);
      continue;
    }
    if (["api"].includes(name)) continue;
    const next = [...segs, name];
    if (existsSync(join(p, "page.tsx")) || existsSync(join(p, "page.jsx")))
      routes.add("/" + next.join("/"));
    collectRoutes(p, next);
  }
}
collectRoutes(join(ROOT, "app"));

// ---- extract references -----------------------------------------------------
const linkRe = /(?:href|src)\s*[:=]\s*["'`](\/[^"'`]*)["'`]/g;
const assetRe = /["'`](\/[^"'`]+\.(?:png|jpe?g|webp|svg|gif|pdf|ico|mp4|webm))["'`]/gi;

const internalLinks = new Map(); // link -> Set(files)
const assets = new Map(); // asset -> Set(files)
const externals = new Map(); // url -> Set(files)

for (const f of files) {
  const txt = readFileSync(f, "utf8");
  const rel = relative(ROOT, f);
  let m;
  while ((m = linkRe.exec(txt))) {
    const raw = m[1].split("#")[0].split("?")[0];
    if (!raw || raw === "/") {
      addTo(internalLinks, "/", rel);
      continue;
    }
    addTo(internalLinks, raw, rel);
  }
  while ((m = assetRe.exec(txt))) addTo(assets, m[1].split("?")[0], rel);
  const extRe = /["'`](https?:\/\/[^"'`\s]+)["'`]/g;
  while ((m = extRe.exec(txt))) addTo(externals, m[1], rel);
}
function addTo(map, key, val) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(val);
}

// ---- check internal links ---------------------------------------------------
function routeMatches(link) {
  if (routes.has(link)) return true;
  // allow dynamic segments
  for (const r of routes) {
    if (!r.includes(":param")) continue;
    const re = new RegExp("^" + r.replace(/:param/g, "[^/]+") + "$");
    if (re.test(link)) return true;
  }
  return false;
}
function isFileLink(link) {
  return !!extname(link);
}
function publicHas(p) {
  return existsSync(join(PUBLIC, p.replace(/^\//, "")));
}

const brokenLinks = [];
for (const [link, where] of internalLinks) {
  if (isFileLink(link)) {
    if (!publicHas(link)) brokenLinks.push([link, [...where]]);
  } else if (!routeMatches(link)) {
    if (!publicHas(link)) brokenLinks.push([link, [...where]]);
  }
}

// ---- check assets -----------------------------------------------------------
const missingAssets = [];
for (const [a, where] of assets) {
  if (!publicHas(a)) missingAssets.push([a, [...where]]);
}

// ---- inspect download PDFs (flag blank/placeholder) -------------------------
const dlDir = join(PUBLIC, "downloads");
const pdfReport = [];
if (existsSync(dlDir)) {
  for (const name of readdirSync(dlDir).filter((n) => n.endsWith(".pdf"))) {
    const p = join(dlDir, name);
    const size = statSync(p).size;
    const buf = readFileSync(p);
    const pages = (buf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
    pdfReport.push({ name, kb: Math.round(size / 1024), pages });
  }
}

// ---- output -----------------------------------------------------------------
const line = "─".repeat(70);
console.log(line);
console.log("QA AUDIT —", new Date().toISOString());
console.log(line);
console.log(`Routes found: ${routes.size}`);
console.log(`Internal links referenced: ${internalLinks.size}`);
console.log(`Asset references: ${assets.size}`);
console.log(`External URLs referenced: ${externals.size}`);

console.log("\n## BROKEN INTERNAL LINKS (" + brokenLinks.length + ")");
if (!brokenLinks.length) console.log("  none ✓");
for (const [l, w] of brokenLinks.sort()) console.log(`  ✗ ${l}\n      ${w.join(", ")}`);

console.log("\n## MISSING ASSETS (" + missingAssets.length + ")");
if (!missingAssets.length) console.log("  none ✓");
for (const [a, w] of missingAssets.sort()) console.log(`  ✗ ${a}\n      ${w.join(", ")}`);

console.log("\n## DOWNLOAD PDFs (" + pdfReport.length + ")");
for (const r of pdfReport.sort((a, b) => a.name.localeCompare(b.name))) {
  const flag = r.kb < 30 ? "  ⚠ very small — possible blank/placeholder" : "";
  console.log(`  ${r.name.padEnd(34)} ${String(r.kb).padStart(5)} KB  ${r.pages} pages${flag}`);
}

console.log("\n## EXTERNAL URLs (" + externals.size + ")");
for (const [u] of [...externals].sort()) console.log(`  • ${u}`);
console.log(line);
