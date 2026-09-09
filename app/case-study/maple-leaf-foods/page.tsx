import type { Metadata } from "next";
import { JsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { mapleLeafFoodsConfig as config } from "@/content/pages/maple-leaf-foods";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "Maple Leaf Foods crisis management case study",
    "Michael McCain apology 2008",
    "listeria outbreak crisis communication",
    "Maple Leaf Foods listeria crisis",
    "crisis communication case study",
    "crisis leadership case study",
  ],
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.canonical,
    siteName: "My PR Partner",
    type: "article",
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

export default function MapleLeafFoodsCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Maple Leaf Foods, 2008: from tragedy to trust",
          description: config.seo.description,
          image: `https://myprpartner.com${config.seo.ogImage}`,
          url: config.seo.canonical,
          mainEntityOfPage: config.seo.canonical,
          inLanguage: "en-AU",
          author: {
            "@type": "Organization",
            name: "My PR Partner",
            url: "https://myprpartner.com",
          },
          publisher: {
            "@type": "Organization",
            name: "My PR Partner",
            url: "https://myprpartner.com",
          },
          contributor: {
            "@type": "Person",
            name: "Melissa Agnes",
            url: "https://myprpartner.com/melissa-agnes",
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
