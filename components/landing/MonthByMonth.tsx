import Link from "next/link";
import { ArrowRight, ChevronDown, Lock } from "lucide-react";

/**
 * Month-by-month view of the Crisis Masterclass, built from the "A message
 * from Melissa Agnes" openers that head each session workbook. Months with a
 * released session expand to her own description; the rest show the title
 * only. Native <details>, so every word is in the crawled HTML.
 */

export type MonthEntry = {
  month: number;
  title: string;
  /** Melissa's opener paragraphs, verbatim, trimmed only of the
   *  "complete your workbook before next month" housekeeping lines. */
  paragraphs?: string[];
  discover?: string[];
  ps?: string;
  signoff?: string;
};

export function MonthByMonth({ months }: { months: MonthEntry[] }) {
  return (
    <ol className="space-y-3">
      {months.map((m) => {
        const released = Boolean(m.paragraphs && m.paragraphs.length);
        return (
          <li key={m.month}>
            {released ? (
              <details
                className="group rounded-card border border-[#E5E7EB] bg-white open:shadow-card [&_summary::-webkit-details-marker]:hidden"
                open={m.month === 1}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 md:px-6">
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-heading text-[13px] font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)" }}
                    aria-hidden
                  >
                    {String(m.month).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal">
                      Month {m.month}
                    </span>
                    <span className="block font-heading text-[16.5px] font-bold leading-snug text-text-dark md:text-[18px]">
                      {m.title}
                    </span>
                  </span>
                  <ChevronDown
                    className="h-4 w-4 flex-shrink-0 text-text-medium transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-[#F1F2F5] px-5 pb-6 pt-5 md:px-6">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text-medium">
                    A message from Melissa Agnes
                  </p>
                  <div className="mt-3 space-y-3 text-[15.5px] leading-relaxed text-text-medium">
                    {m.paragraphs!.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {m.discover && m.discover.length > 0 && (
                    <>
                      <p className="mt-5 font-heading text-[14.5px] font-bold text-text-dark">
                        What you&apos;ll discover in session {m.month}
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {m.discover.map((d, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[15px] leading-relaxed text-text-medium"
                          >
                            <span
                              aria-hidden
                              className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {m.ps && (
                    <p className="mt-5 rounded-card border-l-4 border-brand-blue bg-[#F4F8FC] px-4 py-3 font-heading text-[15px] font-semibold leading-relaxed text-text-dark">
                      {m.ps}
                    </p>
                  )}
                  <p className="mt-4 text-[13px] text-text-medium">
                    {m.signoff ?? "Melissa Agnes, Founder, Crisis Ready Institute, in partnership with My PR Partner"}
                  </p>
                  <Link
                    href="/crisis-masterclass"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark"
                  >
                    Enrol and start with month one
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </details>
            ) : (
              <div className="flex items-center gap-4 rounded-card border border-dashed border-[#D9DDE3] bg-white/60 px-5 py-4 md:px-6">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF1F5] font-heading text-[13px] font-bold text-text-medium"
                  aria-hidden
                >
                  {String(m.month).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text-medium">
                    Month {m.month}
                  </span>
                  <span className="block font-heading text-[16.5px] font-bold leading-snug text-text-dark md:text-[18px]">
                    {m.title}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-text-medium">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  Opens to members
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
