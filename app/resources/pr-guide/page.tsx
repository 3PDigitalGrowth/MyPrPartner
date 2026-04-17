import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/lead-magnet/LeadMagnetPage";
import { prGuideConfig } from "@/content/resources/pr-guide";

export const metadata: Metadata = {
  title: prGuideConfig.meta.title,
  description: prGuideConfig.meta.description,
  alternates: { canonical: prGuideConfig.meta.canonical },
  openGraph: {
    title: prGuideConfig.meta.title,
    description: prGuideConfig.meta.description,
    url: prGuideConfig.meta.canonical,
    type: "website",
    images: [prGuideConfig.meta.ogImage],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: prGuideConfig.meta.title,
    description: prGuideConfig.meta.description,
    images: [prGuideConfig.meta.ogImage],
  },
};

export default function PrGuidePage() {
  return <LeadMagnetPage config={prGuideConfig} />;
}
