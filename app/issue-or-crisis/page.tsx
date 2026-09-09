import type { Metadata } from "next";
import { JsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { issueOrCrisisConfig as config } from "@/content/pages/issue-or-crisis";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "issue vs crisis",
    "what is a crisis definition",
    "issues management",
    "issue or crisis",
    "crisis definition",
    "difference between issue and crisis",
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

export default function IssueOrCrisisPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Issue or Crisis? A Five-Question Self-Check",
          description: config.seo.description,
          url: config.seo.canonical,
          image: `https://myprpartner.com${config.seo.ogImage}`,
          datePublished: "2026-09-10",
          dateModified: "2026-09-10",
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
          mainEntityOfPage: { "@type": "WebPage", "@id": config.seo.canonical },
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
