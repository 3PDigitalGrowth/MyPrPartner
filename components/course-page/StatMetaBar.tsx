import type { StatItem } from "./types";

export default function StatMetaBar({ stats }: { stats: StatItem[] }) {
  const cols =
    stats.length >= 5
      ? "lg:grid-cols-5"
      : stats.length === 4
      ? "lg:grid-cols-4"
      : stats.length === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-2";

  return (
    <section className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className={`grid grid-cols-2 gap-6 md:grid-cols-3 ${cols} lg:gap-0`}>
          {stats.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-start gap-3 lg:px-5 ${
                i > 0 ? "lg:border-l lg:border-[#E5E7EB]" : ""
              }`}
            >
              <s.icon className="h-6 w-6 flex-shrink-0 text-teal" aria-hidden />
              <div className="min-w-0">
                <p className="font-heading text-[14px] font-semibold text-text-dark">{s.title}</p>
                <p className="mt-0.5 text-[12px] text-text-medium">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
