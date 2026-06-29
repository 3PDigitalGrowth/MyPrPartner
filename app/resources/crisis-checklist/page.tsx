import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/lead-magnet/LeadMagnetPage";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { crisisChecklistConfig } from "@/content/resources/crisis-checklist";

export const metadata: Metadata = {
  title: crisisChecklistConfig.meta.title,
  description: crisisChecklistConfig.meta.description,
  alternates: { canonical: crisisChecklistConfig.meta.canonical },
  openGraph: {
    title: crisisChecklistConfig.meta.title,
    description: crisisChecklistConfig.meta.description,
    url: crisisChecklistConfig.meta.canonical,
    type: "website",
    images: [crisisChecklistConfig.meta.ogImage],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: crisisChecklistConfig.meta.title,
    description: crisisChecklistConfig.meta.description,
    images: [crisisChecklistConfig.meta.ogImage],
  },
};

export default function CrisisChecklistPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "Crisis Vulnerability Checklist", url: crisisChecklistConfig.meta.canonical },
        ]}
      />
      <LeadMagnetPage config={crisisChecklistConfig} />
    </>
  );
}
