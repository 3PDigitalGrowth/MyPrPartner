// Generates branded program-outline PDFs from structured content, matching the
// My PR Partner site brand (colours, fonts, logo). Renders an HTML template via
// headless Chrome/Edge --print-to-pdf. Run: node scripts/generate-outline.mjs schools
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const TMP = join(ROOT, "scripts", ".tmp");

// ---- Brand tokens (from tailwind.config.ts) --------------------------------
const C = {
  teal: "#07AFBB",
  tealDark: "#069AA4",
  tealLight: "#5EDDE4",
  blue: "#1E73BE",
  green: "#57B76A",
  lime: "#A8CF45",
  textDark: "#1A1A2E",
  textMedium: "#4A4A68",
  bgGrey: "#F7F8FA",
  navy: "#1A2B4A",
  gold: "#C9A84C",
  line: "#E5E7EB",
};

function dataUri(relPathFromPublic) {
  const p = join(PUBLIC, relPathFromPublic.replace(/^\//, ""));
  if (!existsSync(p)) return "";
  const ext = p.split(".").pop().toLowerCase();
  const mime = ext === "svg" ? "image/svg+xml" : ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return `data:${mime};base64,${readFileSync(p).toString("base64")}`;
}

function findBrowser() {
  const candidates = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  ];
  return candidates.find((c) => existsSync(c));
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---- HTML template ---------------------------------------------------------
function buildHtml(d) {
  const logo = dataUri("/my-pr-partner-logo-horz.png");
  const hero = d.heroImage ? dataUri(d.heroImage) : "";
  const presenterImgs = d.presenters.map((p) => (p.image ? dataUri(p.image) : ""));

  const phaseColors = [C.teal, C.blue, C.navy, C.green];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { font-family: "DM Sans", Arial, sans-serif; color: ${C.textDark}; font-size: 10.5pt; line-height: 1.5; }
  h1,h2,h3,h4 { font-family: "Plus Jakarta Sans", Arial, sans-serif; color: ${C.textDark}; line-height: 1.18; }
  a { color: inherit; text-decoration: none; }
  .page { width: 210mm; position: relative; break-after: page; page-break-after: always; }
  .page:last-child { break-after: auto; page-break-after: auto; }
  .cover { width: 210mm; height: 296mm; position: relative; overflow: hidden; break-after: page; page-break-after: always; }
  .pad { padding: 12mm 15mm; }
  .block { margin-bottom: 6.5mm; }
  .block:last-child { margin-bottom: 0; }
  .tile, .phase, .pcard, .plan { break-inside: avoid; page-break-inside: avoid; }
  .eyebrow { font-family:"Plus Jakarta Sans"; font-weight:700; letter-spacing:.16em; text-transform:uppercase; font-size:8pt; color:${C.teal}; }
  .muted { color:${C.textMedium}; }
  .rule { height:3px; width:54px; background:${C.teal}; border-radius:2px; }

  /* Cover */
  .cover-top { display:flex; align-items:center; justify-content:space-between; padding:13mm 16mm 0; }
  .cover-top img { height:15mm; width:auto; }
  .cover-top .tag { font-family:"Plus Jakarta Sans"; font-weight:700; font-size:8pt; letter-spacing:.16em; text-transform:uppercase; color:${C.textMedium}; }
  .hero { margin:9mm 16mm 0; border-radius:14px; overflow:hidden; position:relative; height:96mm; background:${C.navy}; }
  .hero .img { position:absolute; inset:0; background-size:cover; background-position:center; }
  .hero .ov { position:absolute; inset:0; background:linear-gradient(125deg, rgba(7,175,187,.93) 0%, rgba(30,115,190,.86) 55%, rgba(26,43,74,.92) 100%); }
  .hero .inner { position:absolute; inset:0; padding:12mm; display:flex; flex-direction:column; justify-content:flex-end; color:#fff; }
  .hero .inner .ey { color:#fff; opacity:.92; font-family:"Plus Jakarta Sans"; font-weight:700; font-size:8pt; letter-spacing:.16em; text-transform:uppercase; }
  .hero h1 { color:#fff; font-size:30pt; font-weight:800; margin-top:5mm; max-width:150mm; }
  .hero .tagline { color:#fff; opacity:.95; font-size:12pt; margin-top:4mm; max-width:150mm; }
  .cover-body { padding:10mm 16mm 0; }
  .cover-body p.intro { font-size:11.5pt; color:${C.textMedium}; max-width:175mm; }
  .outcomes { margin-top:8mm; display:grid; grid-template-columns:1fr 1fr; gap:4mm 10mm; }
  .outcome { display:flex; gap:3mm; align-items:flex-start; }
  .outcome .tick { flex:none; width:5.5mm; height:5.5mm; border-radius:50%; background:${C.teal}; color:#fff; font-size:8pt; font-weight:700; display:flex; align-items:center; justify-content:center; margin-top:.5mm; }
  .outcome span.t { font-size:10pt; color:${C.textDark}; font-weight:500; }
  .cover-foot { position:absolute; left:0; right:0; bottom:0; padding:7mm 16mm; display:flex; align-items:center; justify-content:space-between; background:${C.bgGrey}; border-top:1px solid ${C.line}; }
  .crc-badge { background:${C.navy}; color:#fff; font-size:8.5pt; font-weight:500; padding:2.5mm 5mm; border-radius:20px; }
  .cover-foot .site { font-family:"Plus Jakarta Sans"; font-weight:700; color:${C.blue}; font-size:10pt; }

  /* Section headers */
  .sec-head { margin-bottom:5mm; }
  .sec-head h2 { font-size:17pt; font-weight:800; margin-top:3mm; }
  .sec-head p { color:${C.textMedium}; margin-top:2mm; font-size:10.5pt; max-width:175mm; }

  /* Included tiles */
  .tiles { display:grid; grid-template-columns:1fr 1fr; gap:4mm; }
  .tile { border:1px solid ${C.line}; border-radius:12px; padding:4.5mm; background:#fff; }
  .tile .ic { width:8mm; height:8mm; border-radius:8px; background:rgba(7,175,187,.12); color:${C.teal}; display:flex; align-items:center; justify-content:center; font-size:11pt; font-weight:800; font-family:"Plus Jakarta Sans"; }
  .tile h4 { font-size:11pt; font-weight:700; margin:2.8mm 0 1.5mm; }
  .tile p { font-size:9pt; color:${C.textMedium}; }

  /* Phase / modules */
  .phase { border:1px solid ${C.line}; border-radius:12px; overflow:hidden; margin-bottom:5mm; }
  .phase-h { padding:4.5mm 6mm; color:#fff; display:flex; align-items:baseline; justify-content:space-between; }
  .phase-h .lbl { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:11.5pt; }
  .phase-h .sub { font-size:9pt; opacity:.92; }
  .mod { display:flex; gap:5mm; padding:3mm 6mm; border-top:1px solid ${C.line}; align-items:flex-start; }
  .mod:first-of-type { border-top:none; }
  .mchip { flex:none; width:11mm; height:11mm; border-radius:9px; background:${C.bgGrey}; border:1px solid ${C.line}; display:flex; flex-direction:column; align-items:center; justify-content:center; }
  .mchip .n { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:12pt; color:${C.blue}; line-height:1; }
  .mchip .m { font-size:6pt; letter-spacing:.08em; text-transform:uppercase; color:${C.textMedium}; }
  .mod .body { flex:1; }
  .mod .body .t { font-weight:600; font-size:10pt; color:${C.textDark}; }
  .mod .body .r { margin-top:1.5mm; font-size:8.5pt; color:${C.teal}; font-weight:600; }
  .mod .body .r b { color:${C.textMedium}; font-weight:500; }

  /* Presenters */
  .pres { display:grid; grid-template-columns:1fr 1fr; gap:5mm; }
  .pres.one { grid-template-columns:1fr; }
  .pcard { border:1px solid ${C.line}; border-radius:12px; padding:5mm; display:flex; gap:4mm; }
  .pcard img { width:16mm; height:16mm; border-radius:50%; object-fit:cover; object-position:top; flex:none; background:${C.bgGrey}; }
  .pcard .pn { font-family:"Plus Jakarta Sans"; font-weight:700; font-size:11pt; }
  .pcard .pr { font-size:8pt; color:${C.teal}; font-weight:600; margin:.5mm 0 2mm; }
  .pcard .pb { font-size:8.5pt; color:${C.textMedium}; }

  /* Plans */
  .plans { display:grid; grid-template-columns:1fr 1fr 1fr; gap:4mm; }
  .plan { border:1px solid ${C.line}; border-radius:12px; overflow:hidden; display:flex; flex-direction:column; }
  .plan.feat { border:2px solid ${C.teal}; }
  .plan-h { padding:4.2mm 4.5mm; background:${C.bgGrey}; position:relative; }
  .plan.feat .plan-h { background:rgba(7,175,187,.08); }
  .badge-pop { position:absolute; top:0; right:0; background:${C.teal}; color:#fff; font-size:7pt; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:1.5mm 3mm; border-bottom-left-radius:8px; }
  .plan-h .nm { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:11.5pt; }
  .plan-h .ds { font-size:8pt; color:${C.textMedium}; margin-top:1mm; min-height:8mm; }
  .plan-h .pp { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:16pt; color:${C.blue}; margin-top:1.5mm; }
  .plan-h .pp small { font-family:"DM Sans"; font-weight:500; font-size:7pt; color:${C.textMedium}; display:block; line-height:1.35; }
  .plan-b { padding:4.2mm 4.5mm; flex:1; }
  .plan-b .ph { font-size:8pt; font-weight:700; color:${C.textDark}; margin-bottom:2mm; }
  .plan-b ul { list-style:none; }
  .plan-b li { font-size:8.3pt; line-height:1.4; color:${C.textMedium}; padding-left:5mm; position:relative; margin-bottom:1.4mm; }
  .plan-b li:before { content:"✓"; position:absolute; left:0; color:${C.teal}; font-weight:700; }
  .plan-b li.hl { color:${C.textDark}; font-weight:600; }

  /* Waitlist panel (pre-launch programs) */
  .waitbox { border:2px solid ${C.teal}; border-radius:14px; padding:6.5mm; background:rgba(7,175,187,.06); }
  .wpill { display:inline-block; background:${C.teal}; color:#fff; font-family:"Plus Jakarta Sans"; font-weight:700; font-size:8.5pt; letter-spacing:.06em; text-transform:uppercase; padding:2mm 4.5mm; border-radius:20px; }
  .wlist { list-style:none; margin-top:5mm; display:grid; grid-template-columns:1fr 1fr; gap:3mm 8mm; }
  .wlist li { font-size:10pt; color:${C.textDark}; font-weight:500; padding-left:6mm; position:relative; break-inside:avoid; }
  .wlist li:before { content:"✓"; position:absolute; left:0; top:-.3mm; width:4.2mm; height:4.2mm; border-radius:50%; background:${C.teal}; color:#fff; font-size:7pt; font-weight:700; display:flex; align-items:center; justify-content:center; }

  /* Single price band (fixed-price programs) */
  .priceband { display:grid; grid-template-columns:62mm 1fr; gap:7mm; border:1px solid ${C.line}; border-radius:14px; overflow:hidden; }
  .pb-price { background:linear-gradient(160deg, ${C.teal} 0%, ${C.blue} 75%, ${C.navy} 100%); color:#fff; padding:7mm 6mm; display:flex; flex-direction:column; justify-content:center; }
  .pb-price .pp { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:30pt; color:#fff; line-height:1; }
  .pb-price .pp small { display:block; font-family:"DM Sans"; font-weight:500; font-size:8.5pt; color:#fff; opacity:.95; margin-top:2.5mm; line-height:1.4; }
  .pb-incl { padding:6mm 6mm 6mm 0; }
  .pb-incl .ph { font-family:"Plus Jakarta Sans"; font-weight:800; font-size:11.5pt; margin-bottom:3mm; }
  .pb-incl ul { list-style:none; columns:2; column-gap:8mm; }
  .pb-incl li { font-size:9.5pt; color:${C.textMedium}; padding-left:5mm; position:relative; margin-bottom:2.2mm; break-inside:avoid; }
  .pb-incl li:before { content:"✓"; position:absolute; left:0; color:${C.teal}; font-weight:700; }

  /* Inclusions + CTA */
  .incl { background:${C.bgGrey}; border-radius:12px; padding:6mm; }
  .incl h4 { font-size:11.5pt; font-weight:800; margin-bottom:3mm; }
  .incl ul { list-style:none; columns:2; column-gap:8mm; }
  .incl li { font-size:9pt; color:${C.textMedium}; padding-left:5mm; position:relative; margin-bottom:2mm; break-inside:avoid; }
  .incl li:before { content:"✓"; position:absolute; left:0; color:${C.teal}; font-weight:700; }
  .endcap { break-inside:avoid; page-break-inside:avoid; }
  .cta { margin-top:6mm; border-radius:14px; padding:6.5mm; color:#fff; background:linear-gradient(125deg, ${C.teal} 0%, ${C.blue} 70%, ${C.navy} 100%); display:flex; align-items:center; justify-content:space-between; gap:8mm; }
  .cta h3 { color:#fff; font-size:14pt; font-weight:800; }
  .cta p { color:#fff; opacity:.95; font-size:9.5pt; margin-top:2mm; }
  .cta .btn { flex:none; background:#fff; color:${C.blue}; font-family:"Plus Jakarta Sans"; font-weight:700; font-size:10pt; padding:4mm 7mm; border-radius:24px; text-align:center; }
  .cta .btn small { display:block; font-family:"DM Sans"; font-weight:500; font-size:7.5pt; color:${C.textMedium}; margin-top:1mm; }
  .foot { margin-top:5mm; display:flex; align-items:center; justify-content:space-between; padding-top:4mm; border-top:1px solid ${C.line}; }
  .foot img { height:9mm; }
  .foot .meta { text-align:right; font-size:8.5pt; color:${C.textMedium}; }
  .foot .meta b { color:${C.blue}; font-family:"Plus Jakarta Sans"; }
</style>
<script>
  // Preview helper only: ?p=N isolates a single page for screenshotting.
  // Has no effect on PDF rendering (no query string is passed there).
  window.addEventListener("DOMContentLoaded", function () {
    var p = new URLSearchParams(location.search).get("p");
    if (!p) return;
    var pages = document.querySelectorAll(".cover, .page");
    pages.forEach(function (el, i) { if (i != p - 1) el.style.display = "none"; });
  });
</script>
</head>
<body>

  <!-- COVER -->
  <section class="cover">
    <div class="cover-top">
      <img src="${logo}" alt="My PR Partner" />
      <div class="tag">${esc(d.coverTag || "12-Month Program Outline")}</div>
    </div>
    <div class="hero">
      ${hero ? `<div class="img" style="background-image:url('${hero}')"></div>` : ""}
      <div class="ov"></div>
      <div class="inner">
        <div class="ey">${esc(d.heroEyebrow)}</div>
        <h1>${esc(d.title)}</h1>
        <div class="tagline">${esc(d.tagline)}</div>
      </div>
    </div>
    <div class="cover-body">
      <p class="intro">${esc(d.intro)}</p>
      <div class="outcomes">
        ${d.outcomes.map((o) => `<div class="outcome"><span class="tick">✓</span><span class="t">${esc(o)}</span></div>`).join("")}
      </div>
    </div>
    <div class="cover-foot">
      <span class="crc-badge">Powered by CRC Public Relations</span>
      <span class="site">myprpartner.com</span>
    </div>
  </section>

  <!-- PAGE 2: What's included + Phase 1 -->
  <section class="page">
    <div class="pad">
      <div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(d.included.heading)}</h2>
          <p>${esc(d.included.intro)}</p>
        </div>
        <div class="tiles">
          ${d.included.tiles.map((t, i) => `
            <div class="tile">
              <div class="ic">${i + 1}</div>
              <h4>${esc(t.title)}</h4>
              <p>${esc(t.body)}</p>
            </div>`).join("")}
        </div>
      </div>

      <div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(d.plan.heading)}</h2>
          <p>${esc(d.plan.intro)}</p>
        </div>
        ${d.plan.phases.slice(0, 1).map((ph) => phaseHtml(ph, phaseColors[0])).join("")}
      </div>
    </div>
  </section>

  <!-- PAGE 3: Phases 2-4 -->
  <section class="page">
    <div class="pad">
      <div class="block">
        ${d.plan.phases.slice(1).map((ph, i) => phaseHtml(ph, phaseColors[i + 1])).join("")}
      </div>
    </div>
  </section>

  <!-- PAGE 4: Presenters + Every enrolment includes -->
  <section class="page">
    <div class="pad">
      <div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(d.presentersHeading)}</h2>
          <p>${esc(d.presentersIntro)}</p>
        </div>
        <div class="pres ${d.presenters.length === 1 ? "one" : ""}">
          ${d.presenters.map((p, i) => `
            <div class="pcard">
              ${presenterImgs[i] ? `<img src="${presenterImgs[i]}" alt="${esc(p.name)}" />` : ""}
              <div>
                <div class="pn">${esc(p.name)}</div>
                <div class="pr">${esc(p.role)}</div>
                <div class="pb">${esc(p.bio)}</div>
              </div>
            </div>`).join("")}
        </div>
        <p class="muted" style="font-size:8.5pt; margin-top:4mm;">${esc(d.presentersFootnote)}</p>
      </div>

      <div class="block">
        <div class="incl">
          <h4>${esc(d.inclusions.heading)}</h4>
          <ul>${d.inclusions.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PAGE 5: Plans / price / waitlist + CTA -->
  <section class="page">
    <div class="pad">
      ${pageFiveBody(d)}

      <div class="endcap">
        <div class="cta">
          <div>
            <h3>${esc(d.cta.heading)}</h3>
            <p>${esc(d.cta.body)}</p>
          </div>
          <a class="btn" href="https://${esc(String(d.cta.btnSub).replace(/^https?:\/\//, ""))}">${esc(d.cta.btn)}<small>${esc(d.cta.btnSub)}</small></a>
        </div>

        <div class="foot">
          <img src="${logo}" alt="My PR Partner" />
          <div class="meta">
            <b><a href="https://myprpartner.com">myprpartner.com</a></b> &nbsp;·&nbsp; <a href="mailto:info@myprpartner.com">info@myprpartner.com</a><br/>
            Powered by CRC Public Relations
          </div>
        </div>
      </div>
    </div>
  </section>

</body>
</html>`;
}

function pageFiveBody(d) {
  if (d.plans) return plansHtml(d.plans);
  if (d.priceBand) return priceBandHtml(d.priceBand);
  if (d.waitlist) return waitlistHtml(d.waitlist);
  return "";
}

function plansHtml(plans) {
  return `<div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(plans.heading)}</h2>
          <p>${esc(plans.intro)}</p>
        </div>
        <div class="plans">
          ${plans.tiers.map((t) => `
            <div class="plan ${t.featured ? "feat" : ""}">
              <div class="plan-h">
                ${t.featured ? `<span class="badge-pop">Most popular</span>` : ""}
                <div class="nm">${esc(t.name)}</div>
                <div class="ds">${esc(t.desc)}</div>
                <div class="pp">${esc(t.price)}<small>${esc(t.priceNote)}</small>${t.priceSub ? `<small>${esc(t.priceSub)}</small>` : ""}</div>
              </div>
              <div class="plan-b">
                ${t.baseHeading ? `<div class="ph">${esc(t.baseHeading)}</div>` : ""}
                <ul>${t.base.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
                ${t.plusHeading ? `<div class="ph" style="margin-top:3mm;">${esc(t.plusHeading)}</div>` : ""}
                ${t.plus ? `<ul>${t.plus.map((x) => `<li class="${x.hl ? "hl" : ""}">${esc(x.text || x)}</li>`).join("")}</ul>` : ""}
              </div>
            </div>`).join("")}
        </div>
        ${plans.footnote ? `<p class="muted" style="font-size:8pt; margin-top:3mm;">${esc(plans.footnote)}</p>` : ""}
      </div>`;
}

function priceBandHtml(pb) {
  return `<div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(pb.heading)}</h2>
          ${pb.intro ? `<p>${esc(pb.intro)}</p>` : ""}
        </div>
        <div class="priceband">
          <div class="pb-price">
            <div class="pp">${esc(pb.price)}<small>${esc(pb.priceNote)}</small>${pb.priceSub ? `<small>${esc(pb.priceSub)}</small>` : ""}</div>
          </div>
          <div class="pb-incl">
            <div class="ph">${esc(pb.inclusionsTitle)}</div>
            <ul>${pb.inclusions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>`;
}

function waitlistHtml(w) {
  return `<div class="block">
        <div class="sec-head">
          <div class="rule"></div>
          <h2>${esc(w.heading)}</h2>
          ${w.intro ? `<p>${esc(w.intro)}</p>` : ""}
        </div>
        <div class="waitbox">
          <span class="wpill">${esc(w.pill)}</span>
          <ul class="wlist">${w.benefits.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </div>`;
}

function phaseHtml(ph, color) {
  return `
  <div class="phase">
    <div class="phase-h" style="background:${color}">
      <span class="lbl">${esc(ph.label)}</span>
      <span class="sub">${esc(ph.sub)}</span>
    </div>
    ${ph.modules.map((m) => `
      <div class="mod">
        <div class="mchip"><span class="n">${m.month}</span><span class="m">Month</span></div>
        <div class="body">
          <div class="t">${esc(m.title)}</div>
          ${m.resource ? `<div class="r">Resource: <b>${esc(m.resource)}</b></div>` : ""}
          ${m.note ? `<div class="r"><b>${esc(m.note)}</b></div>` : ""}
        </div>
      </div>`).join("")}
  </div>`;
}

// ---- Content: SCHOOLS ------------------------------------------------------
// All copy below is taken verbatim from content/courses/schools.tsx (the
// owner-approved site content). Do not paraphrase or invent new copy here.
const schools = {
  out: "schools-program-outline.pdf",
  heroImage: "/images/schools/schools-hero-bg.jpg",
  heroEyebrow: "For Australian school leadership teams",
  title: "My PR Partner Schools Program",
  tagline: "Take your school's communication, reputation and crisis readiness to the next level",
  intro:
    "A 12-month online PR training program built exclusively for Australian school leadership teams. Principals, executive leaders, communications staff and crisis response teams learn together, so your whole school speaks with one confident voice.",
  outcomes: [
    "Elevate your school's brand, image and positive media profile",
    "Build deeper trust with parents, staff and the wider school community",
    "Manage negative issues effectively and turn challenges into opportunities",
    "Be prepared for, and confidently navigate, any major issue or crisis",
    "Protect and strengthen your school's reputation across every channel",
  ],
  included: {
    heading: "Training, resources and support, every single month for a year",
    intro:
      "This is not a passive video library. Each month, your entire team gets everything they need to build trust, handle issues and communicate confidently to parents, staff, media and the community.",
    tiles: [
      { title: "Training video + workbook", body: "A new training module each month, with a workbook designed for team discussion. Built to go deeper over time." },
      { title: "Practical resource", body: "A downloadable tool every month: checklists, templates, policies and playbooks you can adapt to your school the same day." },
      { title: "Fortnightly Spotlight email", body: "Short, sharp, timely insights to keep the ideas alive between modules, including examples from Australian schools." },
      { title: "Interactive Q&A", body: "Bring your specific school circumstances to a monthly Q&A with Lyall and the expert panel. Real advice for your real situations." },
    ],
  },
  plan: {
    heading: "Your month-by-month school program",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, a fortnightly Spotlight email and an interactive Q&A. The 12-month path is grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    phases: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        sub: "Build the mindset and spot the risks",
        modules: [
          { month: 1, title: "Having a PR mindset: Intentional communication that builds ongoing trust", resource: "Communications tips for all staff" },
          { month: 2, title: "Understanding vulnerabilities: spotting your school's \u201Csliding doors\u201D moments before they escalate", resource: "The essential reputation checklist for schools" },
          { month: 3, title: "How to deal with allegations, with Tim Sterne (Basalt Solutions)" },
        ],
      },
      {
        label: "Phase 2: Brand, media and social (Months 4 to 6)",
        sub: "Get on the front foot",
        modules: [
          { month: 4, title: "Elevate your school brand: Become the school of choice through free positive publicity", resource: "Template media releases" },
          { month: 5, title: "Handling media enquiries and interest: protect your school when the media comes knocking", resource: "Template media policy" },
          { month: 6, title: "Doing social media well, with a social media specialist expert", resource: "Social media tips" },
        ],
      },
      {
        label: "Phase 3: Crisis ready (Months 7 to 9)",
        sub: "Ready for the hardest days",
        modules: [
          { month: 7, title: "Being crisis ready: Lyall Mercer with input from Melissa Agnes (Crisis Ready Institute)", resource: "Crisis communications guide for schools" },
          { month: 8, title: "School board and governance risks, with Tim Whincop (Vocare Law)" },
          { month: 9, title: "Dealing with tragedy: Lyall speaks to Dan Brown, Principal of Emmanuel College", resource: "Checklist to navigate tragic events" },
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        sub: "Sharpen and apply",
        modules: [
          { month: 10, title: "Hot button issues: Red flag issues that schools get wrong, and how to get it right", resource: "Hot button briefs for independent and faith-based schools" },
          { month: 11, title: "Q&A month: the biggest questions and scenarios from program participants" },
          { month: 12, title: "Media training for your spokespeople: the art of a great school interview", note: "On call all year, so your spokespeople are media-ready whenever you need them." },
        ],
      },
    ],
  },
  presentersHeading: "Learn from Australia's leading school PR and education specialists",
  presentersIntro: "Lead presenter is Lyall Mercer, supported by a panel of guest experts covering their specialty area of expertise.",
  presenters: [
    { image: "/images/instructors/lyall-mercer.png", name: "Lyall Mercer", role: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations", bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has guided Australian schools, charities, associations, businesses and governments through crisis moments and reputation-building campaigns for 25+ years." },
    { image: "/images/instructors/tim-sterne.png", name: "Tim Sterne", role: "Month 3 · Director, Basalt Solutions", bio: "Former teacher and police detective. Tim is an independent ethics and integrity specialist for Australian and New Zealand schools, and a leading voice on handling allegations with due process and minimised reputational risk." },
    { image: "/images/instructors/tim-whincop.png", name: "Tim Whincop", role: "Month 8 · Director, Vocare Law", bio: "School governance and law specialist. Tim leads the Month 8 session on school board and governance risks, drawing on years of advising Australian charities, ministries, and independent and faith-based schools." },
    { image: "/images/instructors/melissa-agnes.png", name: "Melissa Agnes", role: "Month 7 · Founder, Crisis Ready Institute (USA)", bio: "Globally recognised authority on crisis communication and crisis leadership. Author and creator of the Crisis Ready\u00AE Model, presenting exclusively through My PR Partner in Australasia." },
  ],
  presentersFootnote:
    "Plus conversations with serving school principals and specialist social media, PR, reputation, legal and safeguarding experts.",
  plans: {
    heading: "Choose the level of support that fits your school",
    intro:
      "Every level includes the full 12-month training program. Support and Partner add hands-on PR assistance and crisis-readiness from the CRC Public Relations team.",
    tiers: [
      {
        name: "Train Level", desc: "Team training and resources", price: "$440",
        priceNote: "monthly instalment · ex GST", priceSub: "Annual subscription — pay monthly or upfront",
        baseHeading: "Inclusions tailored specifically for schools:",
        base: ["Monthly training video + workbook", "Monthly practical team resource", "Spotlight emails", "Interactive Q&A", "Bonus training and resources"],
      },
      {
        name: "Support Level", desc: "Training plus on-call PR support", price: "$840", featured: true,
        priceNote: "monthly instalment · ex GST", priceSub: "Annual subscription — pay monthly or upfront",
        base: [],
        plusHeading: "Train Level PLUS:",
        plus: [
          "The essential reputational & vulnerability checklist for schools",
          "Issues & crisis communications planning 'templates and tips' for schools",
          "One hour crisis planning consultation",
          "On-call PR or issues & crisis management assistance (6 hours)",
          "Access to special PR consultancy rates (for extra work if required over and above these inclusions)",
        ],
      },
      {
        name: "Partner Level", desc: "Full PR partnership with media training", price: "$1,340",
        priceNote: "monthly instalment · ex GST", priceSub: "Annual subscription — pay monthly or upfront",
        base: [],
        plusHeading: "Train Level PLUS:",
        plus: [
          "The essential reputational & vulnerability checklist for schools",
          "Issues & crisis communications planning 'templates and tips' for schools",
          "One hour crisis planning consultation",
          "On-call PR or issues & crisis management assistance (6 hours)",
          { text: "Personal, ongoing phone, email & Zoom PR support (20 hours)", hl: true },
          { text: "Comprehensive, personalised online half-day media training", hl: true },
          "Access to special PR consultancy rates (for extra work if required over and above these inclusions)",
        ],
      },
    ],
    footnote: "",
  },
  inclusions: {
    heading: "Every enrolment includes",
    items: [
      "12 months full access for your leadership team",
      "12 monthly training videos and team workbooks",
      "12 monthly practical resources and templates",
      "Fortnightly Spotlight email for your school",
      "Monthly interactive Q&A with Lyall and the expert panel",
      "Crisis Ready\u00AE input from Melissa Agnes (Month 7)",
      "Guest-led modules with Tim Sterne and Tim Whincop",
      "On-call spokesperson media training (Month 12)",
      "Certificate of completion for participating staff",
    ],
  },
  cta: {
    heading: "Give your whole school team one confident voice this year",
    body: "Enrol your school today and start the 12-month program that has helped Australian independent and faith-based schools build trust, protect reputation and lead through the hardest moments.",
    btn: "Enrol your school",
    btnSub: "myprpartner.com/programs/schools",
  },
};

// ---- Content: BUSINESS & NFP -----------------------------------------------
// Copy taken verbatim from content/courses/business.tsx (owner-approved).
const business = {
  out: "business-program-outline.pdf",
  heroImage: "/images/business/business-hero-bg.jpg",
  heroEyebrow: "For Australian business and NFP leadership teams",
  title: "My PR Partner Business & NFP Program",
  tagline:
    "The only Australian 12-month online public relations program built for busy business and NFP managers, owners and teams",
  intro:
    "Attract new customers or supporters, become the recognised voice of authority in your industry, and lead confidently through any issue or crisis. Join the My PR Partner business and NFP community.",
  outcomes: [
    "Build a strong business or organisation profile that attracts new customers or supporters",
    "Become the voice of authority for your industry or sector",
    "Build trust in your brand, team and communications",
    "Develop effective media, communications and social media skills",
    "Manage negative issues and protect your reputation",
    "Master crisis communications to be prepared for any issue",
  ],
  included: {
    heading: "Grow, protect, support and expertise - every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to build your business profile, win new customers, communicate confidently with media, and stand firm when your reputation is tested.",
    tiles: [
      { title: "Brand, growth and social media", body: "Learn the keys to PR-driven business growth without huge advertising costs. Build the profile, trust and story that win new customers on repeat." },
      { title: "Protect", body: "Protect your valuable reputation and avoid a crisis that can damage your business. Spot issues early and respond with confidence and control." },
      { title: "Support", body: "Receive ongoing PR support and training without consultancy costs - a real partner in your corner every month, for 12 months, and a team ready when you need them." },
      { title: "Expertise", body: "Access the expertise of PR, business, and NFP experts who understand the realities of Australian businesses and charities and what actually moves the needle for owners and leadership teams." },
    ],
  },
  plan: {
    heading: "Your month-by-month path, designed to go deeper over time",
    intro:
      "Every month delivers a training video, workbook, practical resource, Spotlight emails and an interactive Q&A. Below is the 12-month path your team follows, grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    phases: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        sub: "Build the mindset and find your voice",
        modules: [
          { month: 1, title: "A PR mindset: How public relations underpins every growth and reputation win", resource: "Communications tips for the whole team" },
          { month: 2, title: "Becoming the voice of authority in your industry or market", resource: "5 step guide to becoming an expert media commentator" },
          { month: 3, title: "Identifying your vulnerabilities before they escalate into a reputational issue", resource: "The essential reputation checklist for business (special option for NFP)" },
        ],
      },
      {
        label: "Phase 2: Brand, growth and social media (Months 4 to 6)",
        sub: "Get on the front foot",
        modules: [
          { month: 4, title: "PR that attracts new customers, supporters or donors: the growth PR strategy", resource: "PR and content campaign template pack" },
          { month: 5, title: "The LinkedIn playbook: Drive business in a time-effective way", resource: "LinkedIn tips and workbook" },
          { month: 6, title: "Using social media for business or organisation growth, with a social media specialist", resource: "Business and NFP social media tips and response library" },
        ],
      },
      {
        label: "Phase 3: Reputation, issues and crisis (Months 7 to 9)",
        sub: "Grow trust, manage issues",
        modules: [
          { month: 7, title: "Trust, reputation and turning negative issues into opportunities", resource: "Issues-management framework for business and NFP" },
          { month: 8, title: "Avoiding and preparing for a crisis: Planning for any size business or organisation", resource: "Crisis communication plan guide and templates" },
          { month: 9, title: "Three questions you must ask to effectively communicate through a crisis", resource: "Guide from the Crisis Ready Institute" },
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        sub: "Sharpen and apply",
        modules: [
          { month: 10, title: "Building a national or local media profile with a small team", resource: "Media list and pitch templates" },
          { month: 11, title: "Featured business owner: What worked, what didn't, and the lessons learned", resource: "Best-practice PR playbook from a successful Australian business" },
          { month: 11, title: "Option · Featured charity CEO: What worked, what didn't, and the lessons learned", resource: "Best-practice PR playbook from a successful Australian charity" },
          { month: 12, title: "Media training for your spokespeople: the art of a great interview", note: "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them." },
        ],
      },
    ],
  },
  presentersHeading: "Learn from Australia's leading business and NFP PR specialists",
  presentersIntro:
    "Lead presenter is Lyall Mercer, supported by a host of specialist experts and successful Australian business owners and charity CEOs who each bring real-world experience to the program.",
  presenters: [
    { image: "/images/instructors/lyall-mercer.png", name: "Lyall Mercer", role: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations", bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has assisted Australian businesses, from hospitality and professional services to national brands, as well as national charities and not for profits, spoken at numerous conferences, and trained executive teams and staff in the art of effective communication, and reputation and crisis strategy." },
    { image: "/images/instructors/melissa-agnes.png", name: "Melissa Agnes", role: "Featured presenter · Founder, Crisis Ready Institute (USA)", bio: "Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready\u00AE Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting business reputation when your brand is under pressure." },
  ],
  presentersFootnote:
    "Plus training by leading Australian and international PR, digital, growth, reputation, social media, and crisis specialists, and discussions with successful Australian business owners and charity CEOs across the year.",
  inclusions: {
    heading: "Why business and organisation leaders choose this program",
    items: [
      "A shared PR mindset across owners, exec, marketing and client-facing teams",
      "A ready-to-use library of resources, templates and checklists for business and NFPs",
      "Expert support from real Australian corporate PR consultants, not academics",
      "Practical frameworks to grow profile, trust and new customer and supporter attraction",
      "Guest presenters across media, social, reputation and crisis communications",
      "Monthly interactive Q&A on your specific business or NFP circumstances",
    ],
  },
  waitlist: {
    heading: "Be one of the first 50 businesses and organisations on the waitlist",
    intro:
      "Enrolments open soon. Founding-member businesses and NFPs save 10% on year one and get first access before public release. Lock in your place today.",
    pill: "First 50 save 10%",
    benefits: [
      "10% founding-member discount on year one",
      "First access to enrolment before public release",
      "Full program outline",
    ],
  },
  cta: {
    heading: "Join the waitlist",
    body: "Be first in line when enrolments open, and lock in the founding-member discount.",
    btn: "Join the waitlist",
    btnSub: "myprpartner.com/programs/business",
  },
};

// ---- Content: CHARITY & NOT-FOR-PROFIT -------------------------------------
// Copy taken verbatim from content/courses/charity.tsx (owner-approved).
const charity = {
  out: "charity-program-outline.pdf",
  heroImage: "/images/charity/charity-hero-bg.jpg",
  heroEyebrow: "For Australian charities, not-for-profits & community organisations",
  title: "My PR Partner Charity & Not-for-Profit Program",
  tagline:
    "A 12-month online PR program built for busy Australian charity and not-for-profit leadership teams",
  intro:
    "Raise more, retain donors for longer and lead confidently through any sensitive issue or crisis. Join the My PR Partner charity and not-for-profit community.",
  outcomes: [
    "Build a strong public profile that attracts new supporters and donors",
    "Grow donor trust, retention and lifetime value",
    "Strengthen your case for support across media, appeals and grants",
    "Develop effective media, communications and social media skills",
    "Manage sensitive issues and protect your charity's reputation",
    "Master crisis communications to be prepared for any incident or scrutiny",
  ],
  included: {
    heading: "Grow, protect, support and expertise - every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to grow supporter trust, run stronger appeals and campaigns, communicate confidently with media, and stand firm when your charity's reputation is tested.",
    tiles: [
      { title: "Grow", body: "Learn the keys to PR-driven fundraising and profile growth without huge advertising budgets. Build the trust and story that attract donors, grants and partnerships on repeat." },
      { title: "Protect", body: "Protect the reputation your mission depends on. Spot sensitive issues early - from safeguarding to governance and financial probity - and respond with confidence and compassion." },
      { title: "Support", body: "Receive ongoing PR support and training without consultancy costs - a real partner in your corner every month for 12 months, and a team ready when a difficult situation lands." },
      { title: "Expertise", body: "Access the expertise of PR specialists who understand the Australian charity and not-for-profit sector, and what actually moves the needle for EDs, boards and fundraising teams." },
    ],
  },
  plan: {
    heading: "Your month-by-month path, designed to go deeper over time",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, the weekly Spotlight email and an interactive Q&A. Below is the 12-month path your team follows, grouped into four quarterly phases.",
    phases: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        sub: "Build the mindset and find your voice",
        modules: [
          { month: 1, title: "The PR mindset for charities: why public relations underpins every fundraising and reputation win", resource: "Communications tips for the whole charity team" },
          { month: 2, title: "Becoming a recognised public voice on the issue your charity serves", resource: "The essential public profile and reputation checklist for charities" },
          { month: 3, title: "Strategic communication that resonates emotionally with donors, beneficiaries and the community", resource: "Donor-message-mapping framework" },
        ],
      },
      {
        label: "Phase 2: Profile, appeals and fundraising (Months 4 to 6)",
        sub: "Get on the front foot",
        modules: [
          { month: 4, title: "Using PR to amplify appeals and campaigns: the fundraising playbook", resource: "Appeal and campaign PR template pack" },
          { month: 5, title: "Handling media enquiries and interest: protecting and amplifying your charity", resource: "Template charity media policy and media-release library" },
          { month: 6, title: "Building a national or local media profile for your mission with a small team", resource: "Media list and pitch templates for charities" },
        ],
      },
      {
        label: "Phase 3: Donor trust, issues and crisis (Months 7 to 9)",
        sub: "Grow trust, manage issues",
        modules: [
          { month: 7, title: "Growing donor trust, retention and lifetime value through consistent public relations", resource: "Donor trust and retention checklist" },
          { month: 8, title: "Managing sensitive issues - safeguarding, governance, financial probity - with confidence and compassion", resource: "Issues-management framework for charities and not-for-profits" },
          { month: 9, title: "Doing social media well for a charity voice, with a specialist social media presenter", resource: "Charity social media tips and response library" },
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        sub: "Sharpen and apply",
        modules: [
          { month: 10, title: "Featured charity leader: an in-depth conversation on what worked, what didn't, and the lessons learned", resource: "Best-practice playbook from a successful Australian charity" },
          { month: 11, title: "Q&A month: the biggest questions and scenarios from program participants", resource: "Best-practice recap document from the year" },
          { month: 12, title: "Media training for your spokespeople: the art of a great charity interview", note: "Month 12 is on call all year, so your spokespeople are media-ready whenever you need them." },
        ],
      },
    ],
  },
  presentersHeading: "Learn from Australia's leading not-for-profit PR specialists",
  presentersIntro:
    "Lead presenter is Lyall Mercer, supported by a panel of guest experts and successful Australian charity leaders who each bring real not-for-profit experience to the program.",
  presenters: [
    { image: "/images/instructors/lyall-mercer.png", name: "Lyall Mercer", role: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations", bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has worked alongside Australian charities, not-for-profits and community organisations for 25+ years - from community services and health charities to national foundations - training executive directors, boards and staff in the art of effective communication, reputation and fundraising strategy." },
    { image: "/images/instructors/melissa-agnes.png", name: "Melissa Agnes", role: "Featured presenter · Founder, Crisis Ready Institute (USA)", bio: "Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready\u00AE Model, presenting exclusively through My PR Partner in Australasia, with a dedicated session on protecting charity reputation when your mission is under pressure." },
  ],
  presentersFootnote:
    "Plus in-depth conversations with successful Australian charity leaders, a specialist social media presenter, and a rotating panel of 10+ Australian PR, fundraising and communications experts across the year.",
  inclusions: {
    heading: "Why charity leaders choose this program",
    items: [
      "A shared PR mindset across the ED, board, fundraising and comms teams",
      "A ready-to-use library of resources, templates and checklists for NFPs",
      "Expert support from real Australian NFP PR consultants, not academics",
      "Practical frameworks to grow donor trust, retention and public profile",
      "Guest presenters across media, social, fundraising and crisis communications",
      "Monthly interactive Q&A on your specific charity circumstances",
    ],
  },
  waitlist: {
    heading: "Be one of the first 50 charities on the waitlist",
    intro:
      "Enrolments open soon. Founding-member charities save 10% on year one and get first access before public release. Lock in your charity's place today.",
    pill: "First 50 save 10%",
    benefits: [
      "10% founding-member discount on year one",
      "First access to enrolment before public release",
      "Full program outline",
      "Early invitation to a live walkthrough Q&A",
    ],
  },
  cta: {
    heading: "Join the waitlist",
    body: "Be first in line when enrolments open, and lock in the founding-member discount.",
    btn: "Join the waitlist",
    btnSub: "myprpartner.com/programs/charity",
  },
};

// ---- Content: INDUSTRY & PROFESSIONAL ASSOCIATIONS -------------------------
// Copy taken verbatim from content/courses/associations.tsx (owner-approved).
const associations = {
  out: "associations-program-outline.pdf",
  heroImage: "/images/associations/associations-hero-bg.jpg",
  heroEyebrow: "For Australian industry, trade & professional associations",
  title: "My PR Partner Industry & Professional Associations Program",
  tagline:
    "Position your association as the trusted voice and advocate for your industry",
  intro:
    "A 12-month online PR training program built exclusively for Australian industry and professional associations. CEOs, executive leaders, spokespeople, and communications, membership and marketing staff learn together, to maximise your impact.",
  outcomes: [
    "Establish your association as the trusted public voice of your industry",
    "Advocate more effectively and use PR to influence policy and legislation",
    "Build strong trust and credibility with members, media and government",
    "Increase member value, engagement and retention",
    "Manage negative issues with confidence and protect your industry's reputation",
  ],
  included: {
    heading: "Training, resources and support, every single month for a year",
    intro:
      "This is not a passive video library. Each month, your whole team gets everything they need to position your association, grow membership, advocate effectively and stand confidently in front of media, government and members.",
    tiles: [
      { title: "Training video + workbook", body: "A new training module each month, with a workbook designed for individual learning and team discussion. Built to go deeper over time." },
      { title: "Practical resource", body: "A downloadable tool every month: checklists, templates, policies, and media releases designed to help your team communicate, advocate and engage members more effectively." },
      { title: "Fortnightly Spotlight email", body: "Short, sharp, timely insights between modules, with valuable PR and reputation strategies and guidance exclusively for associations. Forward to anyone on your team." },
      { title: "Interactive Q&A", body: "Bring your specific circumstances to a monthly Q&A with Lyall and the expert panel. Real advice for your real situations." },
    ],
  },
  plan: {
    heading: "Your month-by-month association program",
    intro:
      "Every month delivers a training video, a workbook, a practical resource, the fortnightly Spotlight emails and an interactive Q&A. The 12-month path is grouped into four quarterly phases. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    phases: [
      {
        label: "Phase 1: Foundations (Months 1 to 3)",
        sub: "Build the mindset and find your voice",
        modules: [
          { month: 1, title: "Why you need a public voice: become the voice of authority and trust for your industry", resource: "Communication evaluation for your association" },
          { month: 2, title: "Developing a whole-of-association PR mindset: prioritising effective communication", resource: "Communication tips for the entire team" },
          { month: 3, title: "Doing social media well, with a social media specialist expert (association focused)", resource: "Social media tips" },
        ],
      },
      {
        label: "Phase 2: Advocacy and media (Months 4 to 6)",
        sub: "Get on the front foot",
        modules: [
          { month: 4, title: "PR that attracts new customers, supporters or donors: the growth PR strategy", resource: "Government relations and advocacy template pack" },
          { month: 5, title: "Lobbying and advocacy case study with a CEO: How a national industry body turned disaster into success" },
          { month: 6, title: "Building media campaigns that support your objectives", resource: "Media release and pitch templates plus key steps for media success" },
          { month: 6, title: "Bonus · Handling media enquiries: protecting and amplifying your association", resource: "Template media policy" },
        ],
      },
      {
        label: "Phase 3: Membership, trust and crisis (Months 7 to 9)",
        sub: "Grow members, manage issues",
        modules: [
          { month: 7, title: "Growing and retaining members by increasing the value of membership", resource: "Member engagement and retention checklist" },
          { month: 8, title: "Association board and governance risks, with Tim Whincop (Vocare Law)" },
          { month: 9, title: "Managing negative issues and turning them into opportunities for trust", resource: "Issues-management framework for associations" },
        ],
      },
      {
        label: "Phase 4: Mastery and application (Months 10 to 12)",
        sub: "Sharpen and apply",
        modules: [
          { month: 10, title: "Featured association leader: an in-depth conversation on what worked, what didn't, and the lessons learned", resource: "Best-practice playbook from a successful Australian association" },
          { month: 11, title: "Q&A month: the biggest questions and scenarios from program participants", resource: "Best-practice recap document from the year" },
          { month: 12, title: "Media training for your spokespeople: the art of a great interview", note: "On call all year, so your spokespeople are media-ready whenever you need them." },
        ],
      },
    ],
  },
  presentersHeading: "Led by one of Australia's most experienced association PR strategists",
  presentersIntro:
    "Lyall Mercer leads the program, with Australian guest presenters, specialty experts and association leaders joining throughout the year across various modules.",
  presenters: [
    { image: "/images/instructors/lyall-mercer.png", name: "Lyall Mercer", role: "Lead presenter | Co-founder, My PR Partner | Lead Strategist, CRC Public Relations", bio: "Former journalist with a 25+ year international PR career. Lyall has assisted state and federal industry and professional associations across Australia, New Zealand and the USA for 15+ years, spoken at numerous association forums and conferences, and trained executive teams, boards and staff in the art of effective communication and strategy." },
  ],
  presentersFootnote: "",
  inclusions: {
    heading: "Why association leaders choose this program",
    items: [
      "A shared PR mindset across exec, comms, marketing and membership teams",
      "A ready-to-use library of resources, templates and checklists for associations",
      "Expert support from real Australian association PR consultants, not academics",
      "Practical advocacy frameworks to influence policy and legislation",
      "Guest presenters across advocacy, social media, association leadership and membership",
      "Monthly interactive Q&A on your specific association circumstances",
    ],
  },
  plans: {
    heading: "Choose the level of support that fits your association",
    intro:
      "Every level includes the full 12-month training program. Support and Partner add hands-on PR assistance and support from the CRC Public Relations team.",
    tiers: [
      {
        name: "Train Level", desc: "Team training and resources", price: "$440",
        priceNote: "per month · ex GST",
        baseHeading: "You will receive:",
        base: [
          "Monthly video & audio resources",
          "Weekly Spotlight email",
          "Interactive Q&A",
          "Bonus training and resources",
          "Featured industry associations video training",
        ],
      },
      {
        name: "Support Level", desc: "Training plus on-call PR assistance", price: "$840", featured: true,
        priceNote: "per month · ex GST",
        base: [],
        plusHeading: "Train Level PLUS:",
        plus: [
          "The essential PR and communication strategy checklist for associations",
          "Communications 'templates and tips' pack for associations",
          "Strategy planning consultation",
          "Access to special PR consultancy rates",
          "On-call PR assistance (6 hours)",
        ],
      },
      {
        name: "Partner Level", desc: "Full PR partnership with media training", price: "$1,340",
        priceNote: "per month · ex GST",
        base: [],
        plusHeading: "Train Level PLUS:",
        plus: [
          "The essential PR and communication strategy checklist for associations",
          "Communications 'templates and tips' pack for associations",
          "Strategy planning consultation",
          "Access to special PR consultancy rates",
          { text: "Personal, ongoing phone, email & Zoom PR support (20 hours)", hl: true },
          { text: "Comprehensive, personalised online half-day media training", hl: true },
        ],
      },
    ],
    footnote: "Pricing released to the waitlist first · First 20 save 10%",
  },
  cta: {
    heading: "Be one of the first 20 association members on the waitlist",
    body: "Enrolments open soon. Founding-member associations save 10% on year one and get first access before public release. Lock in your association's place today.",
    btn: "Join the waitlist",
    btnSub: "myprpartner.com/programs/industry-associations",
  },
};

// ---- Content: CRISIS MASTERCLASS -------------------------------------------
// Copy taken verbatim from content/courses/crisis-masterclass.tsx (owner-approved).
const crisis = {
  out: "crisis-masterclass-outline.pdf",
  coverTag: "12-Month Course Outline",
  heroImage: "/images/crisis-masterclass/hero-bg-crisis.jpg",
  heroEyebrow: "Flagship online program, powered by CRC Public Relations",
  title: "Crisis Masterclass",
  tagline: "Australia's premier crisis communications online course and 12-month program",
  intro:
    "Built for PR and communications professionals, business and not-for-profit leaders and managers, media spokespeople, marketing and HR professionals, and all who need to lead with clarity when a crisis hits.",
  outcomes: [
    "Become the crisis leader who resonates and connects with those you are leading",
    "Overcome common (often seemingly impossible) crisis communication challenges",
    "Learn the major hindrances, and how to gain more buy-in and support from your team",
    "Access 12 months of personal interaction with world-leading crisis communications experts",
  ],
  included: {
    heading: "A high-impact online program, not a passive video library",
    intro:
      "You don\u2019t just learn, you experience! Every session is rich with exercises and offers workbooks and additional resources to support you.",
    tiles: [
      { title: "Exclusive Crisis Ready\u00AE 12-month course presented by Melissa Agnes", body: "Each month you\u2019ll receive a comprehensive video session exclusively tailored to the Australasian region. This course is rich with exercises, workbooks, additional resources and \u201Chomework\u201D. You don\u2019t just learn, you experience!" },
      { title: "Video resources from My PR Partner crisis experts", body: "Powerful and practical \u2018reputation and crisis specific\u2019 training resources, presented by crisis expert and My PR Partner co-founder Lyall Mercer, other experts in reputation management, crisis communications, and specialists in areas of vulnerability." },
      { title: "In-depth discussions & Q&A", body: "Discussions with Melissa Agnes and Lyall Mercer and opportunities to submit questions every month." },
      { title: "\u201CSpotlight\u201D email resource", body: "Regular email resources, providing practical training, tips and advice covering reputation management and crisis communications; designed to support you on your journey." },
    ],
  },
  plan: {
    heading: "Your 12-month online program breakdown",
    intro:
      "Go at your own pace. Content unlocks progressively with regular updates. (Topics are current at this time but are subject to change and some modules may be substituted during the 12 months.)",
    phases: [
      {
        label: "Months 1 to 3",
        sub: "",
        modules: [
          { month: 1, title: "Redefining crisis readiness", note: "Mindset before methodology \u2014 shift from reactive to proactive and lead from presence, not panic." },
          { month: 2, title: "Issue vs. crisis: getting the distinction right", note: "Distinguish issues from crises, learn the six thresholds of impact and calibrate your response." },
          { month: 3, title: "Emotion and escalation", note: "You can\u2019t beat emotion with logic \u2014 meet stakeholders in the emotional landscape of a crisis and guide them toward trust and resolution." },
        ],
      },
      {
        label: "Months 4 to 6",
        sub: "",
        modules: [
          { month: 4, title: "Owning accountability without fuelling liability", note: "The art of the public apology \u2014 high-integrity communication that honours stakeholders and strengthens trust." },
          { month: 5, title: "Layering and long-term trust", note: "Strategic communication in cascading events \u2014 anticipate next steps, maintain transparency and foster lasting trust." },
          { month: 6, title: "Governing the message internally and externally", note: "Align leadership, legal, HR and comms to speak with one coherent, values-based voice." },
        ],
      },
      {
        label: "Months 7 to 9",
        sub: "",
        modules: [
          { month: 7, title: "Timelines of response & owning your narrative", note: "Tactical frameworks for proactive, strategically reactive, and layered crisis responses." },
          { month: 8, title: "Navigating the modern noise: AI, disinformation, misinformation & deepfakes", note: "Own truth in an age of manufactured doubt \u2014 monitor, verify and respond to AI-generated content and coordinated disinformation." },
          { month: 9, title: "Building your crisis response program", note: "From insight to infrastructure \u2014 scenario playbooks, activation criteria, roles, workflows and a template library." },
        ],
      },
      {
        label: "Months 10 to 12",
        sub: "",
        modules: [
          { month: 10, title: "Moving through resistance: the five Crisis Ready\u00AE hindrances", note: "Recognise and neutralise the five forces that derail capable teams in a crisis." },
          { month: 11, title: "Post-crisis: from surviving to strengthening", note: "Rebuild brand equity and leadership credibility \u2014 turn crisis into your next credibility milestone." },
          { month: 12, title: "Capstone tabletop simulation", note: "Practice. Pressure-test. Embody. A facilitated, real-time drill applying every framework from the year." },
        ],
      },
    ],
  },
  presentersHeading: "Learn from Australia's and the world's leading crisis specialists",
  presentersIntro:
    "Every module is developed and delivered by practising consultants who live this work every day, not academics.",
  presenters: [
    { image: "/images/instructors/lyall-mercer.png", name: "Lyall Mercer", role: "Co-founder, My PR Partner | Lead Strategist, CRC Public Relations", bio: "Former journalist with a 25+ year PR career spanning six continents. Lyall has consulted to national and international companies, governments, executives and industry leaders in crisis communications and reputation management." },
    { image: "/images/instructors/melissa-agnes.png", name: "Melissa Agnes", role: "Founder, Crisis Ready Institute (USA)", bio: "Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready\u00AE Model and best-selling author. Presenting exclusively through My PR Partner in Australasia." },
  ],
  presentersFootnote: "Plus other expert trainers from Australia covering specialist areas.",
  inclusions: {
    heading: "Key learnings in this online course",
    items: [
      "How to take the right action, with the right communication, in the right timeline",
      "A messaging framework for public-facing communication that centres truth, empathy, and strategic clarity",
      "How to meet stakeholders in the emotional landscape of a crisis and guide them toward clarity and trust",
      "Identify high-risk scenarios and take decisive action before escalation becomes unavoidable",
      "Overcome the five Crisis Ready\u00AE hindrances that stop you and others from being effective",
      "Align leadership, legal, HR, and comms functions to speak with one coherent, values-based voice",
    ],
  },
  priceBand: {
    heading: "Enrol today",
    price: "$340",
    priceNote: "monthly instalment · ex GST",
    priceSub: "Annual subscription — pay monthly or upfront (one month free)",
    inclusionsTitle: "What's included",
    inclusions: [
      "12 months full access to all modules",
      "The exclusive Crisis Ready\u00AE course with Melissa Agnes",
      "Training resources from My PR Partner experts",
      "Monthly Q&A",
      "Practical resources",
      "Bonus content",
      "Certificate of completion",
    ],
  },
  cta: {
    heading: "Don't wait until you're already in a crisis",
    body: "Enrol today and start building the skills, plans and confidence to lead your organisation through whatever comes next.",
    btn: "Enrol now",
    btnSub: "myprpartner.com/crisis-masterclass",
  },
};

const CONTENT = { schools, business, charity, associations, crisis };

// ---- Run -------------------------------------------------------------------
const which = process.argv[2] || "schools";
const d = CONTENT[which];
if (!d) {
  console.error(`Unknown outline "${which}". Available: ${Object.keys(CONTENT).join(", ")}`);
  process.exit(1);
}

const browser = findBrowser();
if (!browser) {
  console.error("No Chrome/Edge found for PDF rendering.");
  process.exit(1);
}

if (!existsSync(TMP)) mkdirSync(TMP, { recursive: true });
const htmlPath = join(TMP, `${which}.html`);
const outPath = join(PUBLIC, "downloads", d.out);
writeFileSync(htmlPath, buildHtml(d), "utf8");

const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
console.log("Rendering", which, "->", outPath);
execFileSync(browser, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--no-pdf-header-footer",
  "--run-all-compositor-stages-before-draw",
  "--virtual-time-budget=12000",
  `--print-to-pdf=${outPath}`,
  fileUrl,
], { stdio: "inherit" });

console.log("Done:", outPath);
