import type { Metadata } from "next";
import CourseJsonLd from "@/components/CourseJsonLd";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { crisisMasterclassInsideConfig as config } from "@/content/pages/crisis-masterclass-inside";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "crisis masterclass curriculum",
    "crisis communication course syllabus",
    "Crisis Ready course modules",
    "Melissa Agnes course Australia",
    "crisis leadership training 12 months",
    "what does the crisis masterclass cover",
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

export default function CrisisMasterclassInsidePage() {
  return (
    <>
      <CourseJsonLd
        name="Crisis Masterclass"
        description="A 12-month online crisis communication course featuring the Crisis Ready® course by Melissa Agnes, with Australian case studies, workbooks, monthly Q&A and a certificate endorsed by CRC Public Relations."
        url="https://myprpartner.com/crisis-masterclass"
        image={`https://myprpartner.com${config.seo.ogImage}`}
        provider={{ name: "My PR Partner", url: "https://myprpartner.com" }}
        instructors={[
          {
            name: "Melissa Agnes",
            description: "Founder and CEO, Crisis Ready Institute",
            url: "https://myprpartner.com/melissa-agnes",
          },
          {
            name: "Lyall Mercer",
            description: "Co-founder, My PR Partner. Lead Strategist, CRC Public Relations.",
            url: "https://myprpartner.com/about/expert-trainers",
          },
        ]}
        courseMode="online"
        courseWorkload="PT12M"
        priceCurrency="AUD"
        price="340"
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
