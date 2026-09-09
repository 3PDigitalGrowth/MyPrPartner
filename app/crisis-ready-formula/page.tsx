import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd, JsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { crisisReadyFormulaConfig as config } from "@/content/pages/crisis-ready-formula";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "crisis communication formula",
    "validate relate prove",
    "Crisis Ready formula",
    "Crisis Ready Institute",
    "Melissa Agnes crisis formula",
    "crisis statement formula",
  ],
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.canonical,
    siteName: "My PR Partner",
    type: "website",
    images: [config.seo.ogImage],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
  },
};

export default function CrisisReadyFormulaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Crisis Communication Formula: Validate, Relate, Prove",
          description: config.seo.description,
          url: config.seo.canonical,
          image: `https://myprpartner.com${config.seo.ogImage}`,
          author: {
            "@type": "Person",
            name: "Melissa Agnes",
            url: "https://myprpartner.com/melissa-agnes",
          },
          publisher: {
            "@type": "Organization",
            name: "My PR Partner",
            url: "https://myprpartner.com",
          },
          about: {
            "@type": "Course",
            name: "Crisis Masterclass",
            url: "https://myprpartner.com/crisis-masterclass",
          },
        }}
      />
      <BreadcrumbJsonLd
        items={config.breadcrumbs.map((c) => ({
          name: c.name,
          url: `https://myprpartner.com${c.href === "/" ? "/" : c.href}`,
        }))}
      />
      <FaqJsonLd items={config.faq.items} />
      <LandingPage config={config} />
    </>
  );
}
