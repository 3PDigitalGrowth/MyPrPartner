import type { Metadata } from "next";
import { Suspense } from "react";
import CrisisMasterclassAdPage from "@/components/landing/ads/CrisisMasterclassAdPage";

// Paid search landing page for the Crisis Masterclass. No site menu, so every
// exit is an enrol, outline or invoice action. It repeats /crisis-masterclass,
// so it never goes into the index or the sitemap, and nothing on the site
// links to it: traffic arrives from Google Ads only.
export const metadata: Metadata = {
  title: "Crisis Communication Course, 100% Online | Crisis Masterclass",
  description:
    "Twelve months of crisis communication training with Melissa Agnes (Crisis Ready Institute) and Lyall Mercer (CRC Public Relations). $340 a month ex GST, 100% online.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://myprpartner.com/crisis-masterclass" },
};

export default function CrisisMasterclassAdLanding() {
  return (
    // useSearchParams (headline match and click ids) needs a Suspense boundary.
    <Suspense>
      <CrisisMasterclassAdPage />
    </Suspense>
  );
}
