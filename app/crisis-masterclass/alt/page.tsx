import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrisisMasterclassAltPage from "@/components/course-page/alt/CrisisMasterclassAltPage";

// Review draft of /crisis-masterclass for Lyall and Barbara (11 Nov 2026).
// Not linked from the site, not in the sitemap, and noindex so it never
// competes with the live page; the canonical points at the live page.
export const metadata: Metadata = {
  title: "Crisis Masterclass (review draft) | My PR Partner",
  description: "Review draft of the Crisis Masterclass page layout.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://myprpartner.com/crisis-masterclass" },
};

export default function CrisisMasterclassAltRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        <CrisisMasterclassAltPage />
      </main>
      <Footer />
    </>
  );
}
