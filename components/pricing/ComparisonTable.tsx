"use client";
import { Check } from "lucide-react";
import type { Sector } from "./SectorTabs";

type FeatureRow = {
  feature: string;
  resource: boolean | string;
  train: boolean | string;
  support: boolean | string;
  partner: boolean | string;
};

const COMPARISON_DATA: FeatureRow[] = [
  { feature: "Weekly Spotlight email", resource: true, train: true, support: true, partner: true },
  { feature: "Monthly video & audio training", resource: "1 resource", train: "2 resources", support: "2 resources", partner: "2 resources" },
  { feature: "Growth Focus content", resource: true, train: true, support: true, partner: true },
  { feature: "Reputation Focus content", resource: false, train: true, support: true, partner: true },
  { feature: "Quarterly mentoring sessions", resource: true, train: true, support: true, partner: true },
  { feature: "Two major webinar events per year", resource: true, train: true, support: true, partner: true },
  { feature: "Monthly group Q&A", resource: true, train: true, support: true, partner: true },
  { feature: "Sector-specific Q&A", resource: false, train: true, support: true, partner: true },
  { feature: "Sector-specific bonus content", resource: false, train: true, support: true, partner: true },
  { feature: "Crisis Communications Australia summit", resource: "50% off", train: "50% off", support: "50% off", partner: "FREE" },
  { feature: "Reputation vulnerability checklist (valued $700)", resource: false, train: false, support: true, partner: true },
  { feature: "Crisis communications plan template (valued $5,000)", resource: false, train: false, support: true, partner: true },
  { feature: "Crisis plan consultation (valued $350)", resource: false, train: false, support: true, partner: true },
  { feature: "On-call crisis PR assistance", resource: false, train: false, support: "6 hrs/year", partner: "Included" },
  { feature: "Personal email PR support", resource: false, train: false, support: "1 hr/month", partner: "Included" },
  { feature: "Phone & Zoom PR support", resource: false, train: false, support: false, partner: "2 hrs/month" },
  { feature: "Personalised half-day media training (valued $3,000)", resource: false, train: false, support: false, partner: true },
  { feature: "Discounted PR consultancy rates (10% off)", resource: false, train: false, support: true, partner: true },
  { feature: "Priority CRC Public Relations consultant access", resource: false, train: false, support: false, partner: true },
];

const TIER_NAMES = [
  { key: "resource" as const, label: "Resource" },
  { key: "train" as const, label: "Train" },
  { key: "support" as const, label: "Support" },
  { key: "partner" as const, label: "Partner" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-teal" />;
  }
  if (value === false) {
    return <span className="text-[18px] text-[#D1D5DB]">-</span>;
  }
  return <span className="text-[13px] font-medium text-text-dark">{value}</span>;
}

type ComparisonTableProps = {
  selectedSector: Sector;
};

export function ComparisonTable({ selectedSector }: ComparisonTableProps) {
  void selectedSector;
  return (
    <>
      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky top-0 z-10 w-[280px] bg-white py-4 pr-4 text-left text-[14px] font-medium text-text-medium"
              >
                Feature
              </th>
              {TIER_NAMES.map((tier) => (
                <th
                  key={tier.key}
                  scope="col"
                  className={`sticky top-0 z-10 bg-white px-4 py-4 text-center text-[14px] font-bold text-text-dark ${tier.key === "support" ? "border-t-[3px] border-t-teal" : ""}`}
                >
                  {tier.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, i) => (
              <tr
                key={row.feature}
                className={`transition-colors hover:bg-bg-grey ${i % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"}`}
              >
                <td className="py-3.5 pr-4 pl-4 text-[14px] text-text-dark">{row.feature}</td>
                {TIER_NAMES.map((tier) => (
                  <td key={tier.key} className="px-4 py-3.5 text-center">
                    <CellValue value={row[tier.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards per tier */}
      <div className="space-y-6 lg:hidden">
        {TIER_NAMES.map((tier) => (
          <div key={tier.key} className="rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden">
            <div className="bg-bg-grey px-6 py-4">
              <h4 className="font-heading text-[18px] font-bold text-text-dark">{tier.label}</h4>
            </div>
            <ul className="divide-y divide-[#E5E7EB]">
              {COMPARISON_DATA.map((row) => {
                const val = row[tier.key];
                if (val === false) return null;
                return (
                  <li key={row.feature} className="flex items-center justify-between gap-4 px-6 py-3">
                    <span className="text-[14px] text-text-medium">{row.feature}</span>
                    <span className="shrink-0">
                      <CellValue value={val} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
