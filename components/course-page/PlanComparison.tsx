"use client";

import { Check, Minus } from "lucide-react";
import type { PlanComparisonFeature, PricingTier } from "./types";

/**
 * Responsive plan comparison. Desktop renders a tick matrix (feature rows x
 * plan columns); mobile collapses to stacked plan cards. Both share a
 * "Select this plan" action that drives the shared selected-tier state.
 */
export default function PlanComparison({
  tiers,
  features,
  selectedTierId,
  onSelect,
}: {
  tiers: PricingTier[];
  features: PlanComparisonFeature[];
  selectedTierId?: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      {/* Desktop: comparison matrix */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            {/* Split into rows so plan names, descriptions and prices each
                line up across columns even when descriptions wrap differently. */}
            <tr>
              <th className="w-[40%] p-3 align-bottom" />
              {tiers.map((t) => {
                const active = t.id === selectedTierId;
                return (
                  <th
                    key={t.id}
                    className={`px-3 pt-3 text-center align-bottom ${
                      active ? "rounded-t-xl bg-teal/5" : ""
                    }`}
                  >
                    <div className="font-heading text-[15px] font-bold text-text-dark">{t.label}</div>
                  </th>
                );
              })}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((t) => {
                const active = t.id === selectedTierId;
                return (
                  <th key={t.id} className={`px-3 text-center align-top ${active ? "bg-teal/5" : ""}`}>
                    {t.description ? (
                      <div className="text-[12px] font-normal leading-snug text-text-medium">
                        {t.description}
                      </div>
                    ) : null}
                  </th>
                );
              })}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((t) => {
                const active = t.id === selectedTierId;
                return (
                  <th key={t.id} className={`px-3 pb-3 pt-2 text-center align-bottom ${active ? "bg-teal/5" : ""}`}>
                    <div className="font-heading text-[20px] font-bold text-text-dark">{t.price}</div>
                    <div className="text-[11px] font-normal text-text-medium">{t.priceCurrencyNote}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.label} className="border-t border-[#F1F2F5]">
                <th
                  scope="row"
                  className={`p-3 align-top text-[13.5px] font-medium ${
                    f.highlighted ? "text-teal" : "text-text-dark"
                  }`}
                >
                  {f.label}
                </th>
                {tiers.map((t) => {
                  const included = f.tiers.includes(t.id);
                  const active = t.id === selectedTierId;
                  return (
                    <td key={t.id} className={`p-3 text-center align-top ${active ? "bg-teal/5" : ""}`}>
                      {included ? (
                        <Check className="mx-auto h-4 w-4 text-teal" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-[#D0D5DD]" aria-label="Not included" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[#F1F2F5]">
              <td className="p-3" />
              {tiers.map((t) => {
                const active = t.id === selectedTierId;
                return (
                  <td
                    key={t.id}
                    className={`p-3 text-center align-top ${active ? "rounded-b-xl bg-teal/5" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect(t.id)}
                      aria-pressed={active}
                      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${
                        active
                          ? "bg-teal text-white"
                          : "border border-teal text-teal hover:bg-teal hover:text-white"
                      }`}
                    >
                      {active ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden /> Selected
                        </>
                      ) : (
                        "Select this plan"
                      )}
                    </button>
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mobile: stacked plan cards */}
      <div className="space-y-4 md:hidden">
        {tiers.map((t) => {
          const active = t.id === selectedTierId;
          const included = features.filter((f) => f.tiers.includes(t.id));
          return (
            <div
              key={t.id}
              className={`rounded-card border p-5 ${
                active ? "border-teal bg-teal/5 ring-1 ring-teal" : "border-[#E5E7EB] bg-white"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-heading text-[16px] font-bold text-text-dark">{t.label}</p>
                  {t.description ? (
                    <p className="text-[12px] leading-snug text-text-medium">{t.description}</p>
                  ) : null}
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="font-heading text-[18px] font-bold text-text-dark">{t.price}</p>
                  <p className="text-[10px] text-text-medium">{t.priceCurrencyNote}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {included.map((f) => (
                  <li
                    key={f.label}
                    className={`flex items-start gap-2 text-[13px] ${
                      f.highlighted ? "font-medium text-teal" : "text-text-medium"
                    }`}
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onSelect(t.id)}
                aria-pressed={active}
                className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${
                  active ? "bg-teal text-white" : "border border-teal text-teal hover:bg-teal hover:text-white"
                }`}
              >
                {active ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden /> Selected
                  </>
                ) : (
                  "Select this plan"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
