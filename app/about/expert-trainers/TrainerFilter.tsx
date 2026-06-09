"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  Shield,
  Newspaper,
  TrendingUp,
  GraduationCap,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type FilterArea = { id: string; label: string };
export type TrainerItem = { id: string; expertise: string[]; node: ReactNode };

// Icons live here (client side) rather than being passed as props - icon
// components can't cross the server/client boundary.
const areaIcons: Record<string, LucideIcon> = {
  crisis: Shield,
  media: Newspaper,
  growth: TrendingUp,
  schools: GraduationCap,
  legal: Scale,
};

function chipClass(active: boolean) {
  return `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
    active
      ? "border-teal bg-teal text-white"
      : "border-[#E5E7EB] bg-white text-text-dark hover:border-teal hover:text-teal"
  }`;
}

function countClass(active: boolean) {
  return `text-[11px] ${active ? "text-white/80" : "text-text-medium"}`;
}

export function TrainerFilter({
  areas,
  items,
}: {
  areas: FilterArea[];
  items: TrainerItem[];
}) {
  const [active, setActive] = useState<string>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? items
        : items.filter((it) => it.expertise.includes(active)),
    [active, items]
  );

  const countFor = (id: string) =>
    id === "all"
      ? items.length
      : items.filter((it) => it.expertise.includes(id)).length;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={chipClass(active === "all")}
        >
          All trainers
          <span className={countClass(active === "all")}>{countFor("all")}</span>
        </button>
        {areas.map((a) => {
          const Icon = areaIcons[a.id];
          const isActive = active === a.id;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => setActive(a.id)}
              aria-pressed={isActive}
              className={chipClass(isActive)}
            >
              {Icon ? (
                <Icon
                  className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-teal"}`}
                  aria-hidden
                />
              ) : null}
              {a.label}
              <span className={countClass(isActive)}>{countFor(a.id)}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-[13px] text-text-medium" aria-live="polite">
        Showing {visible.length} of {items.length} trainers
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((it) => (
          <div key={it.id}>{it.node}</div>
        ))}
      </div>
    </div>
  );
}
