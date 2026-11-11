"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, PauseCircle, RefreshCw, Search, ShieldCheck, Type } from "lucide-react";
import data from "@/content/reviews/google-ads-crisis-masterclass.json";

type Group = (typeof data.groups)[number];

const SERP_FONT = { fontFamily: "Arial, Helvetica, sans-serif" };

function Count({ text, max }: { text: string; max: number }) {
  return (
    <span className="ml-3 flex-shrink-0 font-mono text-[11px] tabular-nums text-text-medium/70">
      {text.length}/{max}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-teal">{children}</p>;
}

/** The first mix is fixed so server and browser render the same ad; the button picks a fresh one. */
function firstMix(g: Group) {
  return {
    heads: [g.ownHeadlines[0], g.ownHeadlines[1], data.sharedHeadlines[0]],
    descs: [g.ownDescription, data.sharedDescriptions[0]],
  };
}

function randomMix(g: Group) {
  const pick = <T,>(pool: T[], n: number) => [...pool].sort(() => Math.random() - 0.5).slice(0, n);
  const heads = pick([...g.ownHeadlines.slice(1), ...data.sharedHeadlines], 2);
  const descs = pick([g.ownDescription, ...data.sharedDescriptions], 2);
  return { heads: [g.ownHeadlines[0], ...heads], descs };
}

function SearchPreview({ group }: { group: Group }) {
  const [mix, setMix] = useState(() => firstMix(group));

  return (
    <div>
      <div className="rounded-card border border-[#DADCE0] bg-white shadow-card" style={SERP_FONT}>
        <div className="flex items-center gap-3 border-b border-[#ECEDEF] px-4 py-3 sm:px-5">
          <Search className="h-4 w-4 flex-shrink-0 text-[#9AA0A6]" aria-hidden />
          <span className="truncate text-[15px] text-[#202124]">{group.sampleSearch}</span>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <p className="text-[13px] font-bold text-[#202124]">Sponsored</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-[#ECEDEF] bg-white">
              <Image src="/icon.png" alt="" width={28} height={28} className="h-6 w-6 object-contain" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-[14px] text-[#202124]">My PR Partner</span>
              <span className="block truncate text-[12px] text-[#4D5156]">{data.displayPath}</span>
            </span>
          </div>
          <p className="mt-2 text-[20px] leading-[1.3] text-[#1A0DAB]" aria-live="polite">
            {mix.heads.join(" | ")}
          </p>
          <p className="mt-1.5 text-[14px] leading-[1.58] text-[#4D5156]">{mix.descs.join(" ")}</p>
          <p className="mt-1 text-[14px] leading-[1.58] text-[#4D5156]">{data.callouts.slice(0, 4).join(" · ")}</p>
          <div className="mt-3 grid gap-x-8 gap-y-3 border-t border-[#ECEDEF] pt-3 sm:grid-cols-2">
            {data.sitelinks.map((s) => (
              <div key={s.text}>
                <p className="text-[15px] text-[#1A0DAB]">{s.text}</p>
                <p className="text-[13px] leading-snug text-[#4D5156]">{s.desc1}</p>
                <p className="text-[13px] leading-snug text-[#4D5156]">{s.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setMix(randomMix(group))}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Show another version
        </button>
        <a
          href={group.landingUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-dark underline-offset-2 hover:underline"
        >
          See the page this ad opens
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}

export default function GoogleAdsReview() {
  const [active, setActive] = useState(data.groups[0].key);
  const group = data.groups.find((g) => g.key === active) ?? data.groups[0];

  return (
    <div className="min-h-screen bg-white font-body text-text-dark">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Image src="/my-pr-partner-logo-horz.png" alt="My PR Partner" width={2362} height={893} priority className="h-9 w-auto" />
          <span className="text-[13px] font-medium text-text-medium">Google Ads review</span>
        </div>
      </header>
      <div className="border-b border-[#F1D58A] bg-[#FFF7E0] text-[13px] leading-snug">
        <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="font-semibold">For review.</span> This page isn&apos;t linked from the site and is hidden from
          search.
        </div>
      </div>

      <main>
        {/* Intro and the asks */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 md:pt-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>Crisis Masterclass · Google search ads</Eyebrow>
            <h1 className="font-heading text-[34px] font-bold leading-[1.08] tracking-[-0.01em] text-balance md:text-[48px]">
              Your Google ads, ready for a read
            </h1>
            <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-text-medium">
              These are the ads that will show when someone in Australia searches for a crisis communication or crisis
              management course. Nothing is running yet: the campaign stays paused until you&apos;re happy with every
              word.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: PauseCircle, title: "Paused", sub: "Starts only on your OK" },
                {
                  icon: ShieldCheck,
                  title: `${data.policy.approved} of ${data.policy.total} lines approved`,
                  sub: `Google's policy check, ${data.checked}`,
                },
                { icon: Type, title: "Text ads only", sub: "Search ads carry no images or video" },
              ].map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" aria-hidden />
                  <span>
                    <span className="block font-heading text-[14px] font-bold">{title}</span>
                    <span className="block text-[13px] leading-snug text-text-medium">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-card bg-crc-navy p-7 text-white md:p-8 lg:col-span-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal-light">What we need from you</p>
            <ol className="mt-5 space-y-5">
              {[
                <>Read the four ads below and reply with &ldquo;approved&rdquo;, or with the lines you&apos;d like changed.</>,
                <>
                  Tell us whether the ads can show when people search for Melissa Agnes or Crisis Ready by name. We&apos;ve held
                  those searches back until you say yes.
                </>,
                <>Accept the Google Ads invitation sent to office@crcpr.com.au and add the card under Billing.</>,
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal font-heading text-[13px] font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/90">{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        {/* Preview */}
        <section className="bg-bg-grey py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <Eyebrow>How the ads look on Google</Eyebrow>
              <h2 className="font-heading text-[28px] font-bold leading-tight md:text-[34px]">One ad for each way people search</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-medium">
                Google builds each ad from the lines further down, choosing three headlines and two descriptions to suit
                the search. The course name always comes first. Use the button to see a different mix.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-1" role="group" aria-label="Choose an ad">
                {data.groups.map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => setActive(g.key)}
                    aria-pressed={g.key === active}
                    className={`rounded-xl border px-4 py-3 text-left text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      g.key === active
                        ? "border-teal bg-white text-text-dark shadow-card"
                        : "border-transparent text-text-medium hover:bg-white/70"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              {/* keyed so switching ads starts from that ad's first mix */}
              <SearchPreview key={group.key} group={group} />
            </div>
          </div>
        </section>

        {/* Every line */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Every line in the ads</Eyebrow>
            <h2 className="max-w-2xl font-heading text-[28px] font-bold leading-tight md:text-[34px]">
              The full copy, word for word
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-medium">
              Google caps headlines at 30 characters and descriptions at 90, so each line shows its count. If you&apos;d like
              a change, keep the new wording inside the same limit.
            </p>

            <h3 className="mt-10 font-heading text-[18px] font-bold">Headlines in all four ads</h3>
            <ul className="mt-4 grid overflow-hidden rounded-card border border-[#E5E7EB] sm:grid-cols-2">
              {data.sharedHeadlines.map((h) => (
                <li
                  key={h}
                  className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-3 text-[15px] sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  {h}
                  <Count text={h} max={30} />
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-heading text-[18px] font-bold">Descriptions in all four ads</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {data.sharedDescriptions.map((d) => (
                <li key={d} className="flex flex-col justify-between rounded-card border border-[#E5E7EB] p-5 text-[15px] leading-relaxed">
                  {d}
                  <span className="mt-3 self-end">
                    <Count text={d} max={90} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] leading-relaxed text-text-medium">
              Each ad also has three headlines and one description of its own, shown below with the searches it answers.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {data.groups.map((g) => (
                <article key={g.key} className="flex flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card md:p-7">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">Ad</p>
                  <h3 className="mt-1 font-heading text-[22px] font-bold">{g.label}</h3>

                  <p className="mt-5 text-[13px] font-semibold text-text-medium">Its own headlines</p>
                  <ul className="mt-2 space-y-2">
                    {g.ownHeadlines.map((h, i) => (
                      <li key={h} className="flex items-center justify-between text-[15px]">
                        <span>
                          {h}
                          {i === 0 ? (
                            <span className="ml-2 rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal-dark">
                              always first
                            </span>
                          ) : null}
                        </span>
                        <Count text={h} max={30} />
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-[13px] font-semibold text-text-medium">Its own description</p>
                  <p className="mt-2 flex items-start justify-between text-[15px] leading-relaxed">
                    {g.ownDescription}
                    <Count text={g.ownDescription} max={90} />
                  </p>

                  <p className="mt-5 text-[13px] font-semibold text-text-medium">Shows for searches like</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {g.keywords.map((k) => (
                      <li
                        key={k.text}
                        className={`rounded-full border px-3 py-1 text-[13px] ${
                          k.broad ? "border-teal/50 bg-teal/5 text-teal-dark" : "border-[#E5E7EB] text-text-dark"
                        }`}
                      >
                        {k.text}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={g.landingUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-[14px] font-semibold text-teal-dark underline-offset-2 hover:underline"
                  >
                    Landing page for this ad
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-text-medium">
              <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full border border-teal/50 bg-teal/10 align-middle" />
              The four most-searched phrases also pick up close variations, such as the same words in a different order.
            </p>
          </div>
        </section>

        {/* Extras */}
        <section className="bg-bg-grey py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <Eyebrow>Under the ad</Eyebrow>
              <h2 className="font-heading text-[28px] font-bold leading-tight md:text-[34px]">Links and short facts</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-medium">
                Google adds these under the ad when there&apos;s room. Each link opens a page that&apos;s already live on the
                site.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {data.sitelinks.map((s) => (
                  <a
                    key={s.text}
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="group rounded-card border border-[#E5E7EB] bg-white p-5 transition-shadow hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <span className="flex items-center justify-between font-heading text-[16px] font-bold">
                      {s.text}
                      <Count text={s.text} max={25} />
                    </span>
                    <span className="mt-1.5 block text-[14px] text-text-medium">{s.desc1}</span>
                    <span className="block text-[14px] text-text-medium">{s.desc2}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-teal-dark">
                      {s.url.replace("https://", "")}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </a>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {data.callouts.map((c) => (
                  <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[14px] shadow-card">
                    <Check className="h-3.5 w-3.5 text-teal" strokeWidth={3} aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <Eyebrow>Searches we keep the ads away from</Eyebrow>
              <h2 className="font-heading text-[28px] font-bold leading-tight md:text-[34px]">Only the right people</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-medium">
                Anyone whose search includes one of these words won&apos;t see the ads, so the budget goes on people looking
                for a course like yours. Certificate and certification are on the list because the masterclass
                doesn&apos;t come with one.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2 lg:col-span-8">
              {data.negatives.map((n) => (
                <li key={n} className="rounded-full border border-[#E5E7EB] px-3 py-1 text-[13px] text-text-medium line-through decoration-[#C0C4CC]">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E7EB]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-[13px] text-text-medium sm:px-6 md:flex-row md:justify-between lg:px-8">
          <p>Prepared for My PR Partner. Ad copy checked against the live Google Ads account on {data.checked}.</p>
          <a href="https://www.3pdigital.com.au" target="_blank" rel="noopener" className="hover:text-teal">
            Proudly supported by 3P Digital
          </a>
        </div>
      </footer>
    </div>
  );
}
