import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanPricingContent from "./PlanPricingContent";

export const metadata: Metadata = {
  title:
    "Plans & Pricing | Public Relations Training Programs | My PR Partner",
  description:
    "Choose your level of PR training and support. Tailored programs for businesses, charities, industry associations and schools — backed by 15 years of CRC Public Relations experience.",
  openGraph: {
    title: "Plans & Pricing | My PR Partner",
    description:
      "Compare our four subscription levels and find the right PR training for your organisation.",
    images: ["/images/plans-pricing/hero-bg-pricing.jpg"],
  },
};

export default function PlanPricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[112px] lg:pt-[112px]">
        <Suspense>
          <PlanPricingContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
