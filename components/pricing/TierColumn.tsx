import { Check } from "lucide-react";
import Link from "next/link";

type TierColumnProps = {
  name: string;
  descriptor: string;
  price: string;
  annualTotal: string;
  features: string[];
  ctaHref: string;
  isHighlighted?: boolean;
  ctaVariant?: "filled" | "outline";
};

export function TierColumn({
  name,
  descriptor,
  price,
  annualTotal,
  features,
  ctaHref,
  isHighlighted = false,
  ctaVariant = "outline",
}: TierColumnProps) {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] ${
        isHighlighted
          ? "border-t-4 border-t-teal border-x-[#E5E7EB] border-b-[#E5E7EB] shadow-[0_4px_16px_rgba(7,175,187,0.12)]"
          : "border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
      }`}
      style={{ padding: "32px 28px" }}
    >
      {isHighlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
          Most Popular
        </span>
      )}

      <div className="mb-5">
        <h3 className="font-heading text-[22px] font-bold text-text-dark">{name}</h3>
        <p className="mt-1 text-[14px] text-[#9CA3AF]">{descriptor}</p>
      </div>

      <div className="mb-5">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-[36px] font-bold text-teal">{price}</span>
          <span className="text-[14px] text-[#9CA3AF]">/month</span>
        </div>
        <p className="mt-1 text-[12px] text-[#9CA3AF]" title={`${annualTotal}/year billed annually`}>Billed annually</p>
      </div>

      <div className="mb-5 border-t border-[#E5E7EB]" />

      <ul className="mb-6 flex-1 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-text-medium">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`mt-auto block w-full rounded-full py-3.5 text-center text-[14px] font-medium transition-colors ${
          ctaVariant === "filled"
            ? "bg-teal text-white hover:brightness-90"
            : "border border-teal text-teal hover:bg-teal hover:text-white"
        }`}
      >
        Enrol Now
      </Link>
    </div>
  );
}
