import type { Metadata } from "next";
import CourseJsonLd from "@/components/CourseJsonLd";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { crisisMediaTrainingConfig as config } from "@/content/pages/crisis-media-training";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "crisis media training",
    "crisis media training Australia",
    "crisis media management training",
    "crisis management media training",
    "spokesperson training",
    "media training for executives",
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

export default function CrisisMediaTrainingPage() {
  return (
    <>
      <CourseJsonLd
        name="Crisis Media Training"
        description="Crisis media training for Australian leaders and spokespeople, covering holding statements, key messages under pressure, bridging difficult questions and recorded practice interviews across television, radio and podcast formats."
        url={config.seo.canonical}
        image={`https://myprpartner.com${config.seo.ogImage}`}
        provider={{ name: "My PR Partner", url: "https://myprpartner.com" }}
        instructors={config.trainers?.people.map((p) => ({
          name: p.name,
          description: p.credential,
          url: "https://myprpartner.com/about/expert-trainers",
        }))}
        courseMode="online"
        courseWorkload="PT7H"
        audience="Chief executives, school principals, association executives, not-for-profit leaders, board members and communications staff"
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
