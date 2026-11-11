import type { Metadata } from "next";
import GoogleAdsReview from "@/components/review/GoogleAdsReview";

// Google Ads copy for Lyall and Barbara to approve before the Crisis
// Masterclass campaign is switched on. Not linked from the site, not in the
// sitemap, and noindex. The copy comes from the live account via
// docs/google-ads-2026-11/export_review_data.py.
export const metadata: Metadata = {
  title: "Google Ads review | My PR Partner",
  description: "The Crisis Masterclass Google search ads, for review.",
  robots: { index: false, follow: false },
};

export default function GoogleAdsReviewPage() {
  return <GoogleAdsReview />;
}
