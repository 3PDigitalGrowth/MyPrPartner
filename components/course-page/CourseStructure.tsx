import { Check, ChevronDown, FileText } from "lucide-react";
import type { CourseStructureContent, StructureModule } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

function ModuleCard({ m }: { m: StructureModule }) {
  return (
    <li className="flex gap-3 rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-3 transition-colors hover:border-teal/40">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
        <span className="font-heading text-[14px] font-bold leading-none text-teal">
          {m.month}
        </span>
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-medium">
          Month {m.month}
        </p>
        <p className="mt-0.5 font-heading text-[15px] font-semibold leading-snug text-text-dark antialiased">
          {m.title}
        </p>
        {m.resource ? (
          <p className="mt-2 flex items-start gap-1.5 text-[13px] leading-snug text-text-medium">
            <FileText className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
            <span>
              <span className="font-medium text-teal">Resource:</span>{" "}
              {m.resource}
            </span>
          </p>
        ) : null}
        {m.note ? (
          <p className="mt-2 text-[13px] italic leading-snug text-text-medium">
            {m.note}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export default function CourseStructure({ content }: { content: CourseStructureContent }) {
  const useModules = !!content.modules && content.modules.length > 0;

  return (
    <section id="structure" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>

      {useModules ? (
        <ol className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2">
          {content.modules!.map((m) => (
            <ModuleCard key={m.month} m={m} />
          ))}
        </ol>
      ) : (
        <div className="mt-7 space-y-4">
          {content.groups?.map((g, i) => {
            const hasModules = !!g.modules && g.modules.length > 0;
            return (
              <details
                key={g.label}
                className="group rounded-card border border-[#E5E7EB] bg-white open:shadow-card"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <div className="min-w-0">
                    <p className="font-heading text-[16px] font-bold text-text-dark md:text-[17px]">
                      {g.label}
                    </p>
                    <p className="mt-0.5 text-[13px] text-text-medium">{g.count}</p>
                  </div>
                  <ChevronDown
                    className="h-5 w-5 flex-shrink-0 text-text-medium transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-[#F1F2F5] px-6 py-5">
                  {hasModules ? (
                    <ol className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2">
                      {g.modules!.map((m) => (
                        <ModuleCard key={m.month} m={m} />
                      ))}
                    </ol>
                  ) : (
                    <ul className="space-y-2.5">
                      {g.items?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[14px] text-text-medium"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      )}
    </section>
  );
}
