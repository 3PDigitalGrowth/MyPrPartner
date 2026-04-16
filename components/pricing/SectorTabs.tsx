"use client";
import { Briefcase, Heart, Building2, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Sector = "business" | "charity" | "association" | "school";

type SectorMeta = {
  key: Sector;
  label: string;
  icon: LucideIcon;
};

const SECTORS: SectorMeta[] = [
  { key: "business", label: "Business", icon: Briefcase },
  { key: "charity", label: "Charity & NFP", icon: Heart },
  { key: "association", label: "Industry Association", icon: Building2 },
  { key: "school", label: "School", icon: GraduationCap },
];

type SectorTabsProps = {
  sectors?: SectorMeta[];
  selectedSector: Sector;
  onSelect: (sector: Sector) => void;
};

export function SectorTabs({ sectors = SECTORS, selectedSector, onSelect }: SectorTabsProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex gap-1 overflow-x-auto rounded-full bg-[#F7F8FA] p-1.5 scrollbar-hide">
        {sectors.map(({ key, label, icon: Icon }) => {
          const active = key === selectedSector;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-medium transition-all sm:px-6 sm:py-3 sm:text-[15px] ${
                active
                  ? "bg-white text-teal shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                  : "text-text-medium hover:text-text-dark"
              }`}
            >
              <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
