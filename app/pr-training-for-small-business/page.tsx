import type { Metadata } from "next";
import CourseJsonLd from "@/components/CourseJsonLd";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { prTrainingSmallBusinessConfig as config } from "@/content/pages/pr-training-small-business";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "PR training for small business",
    "public relations training Australia",
    "affordable PR training for startups",
    "PR training subscription for businesses",
    "PR coaching for small business owners",
    "DIY PR",
    "PR agency alternative",
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

export default function PrTrainingSmallBusinessPage() {
  return (
    <>
      <CourseJsonLd
        name="PR Training for Small Business"
        description="Practical public relations training for Australian small business owners and founders, covering media releases, media lists, pitching, public profile, speaking to media and crisis basics, with on-call support from senior advisers."
        url={config.seo.canonical}
        image={`https://myprpartner.com${config.seo.ogImage}`}
        provider={{ name: "My PR Partner", url: "https://myprpartner.com" }}
        courseMode="online"
        courseWorkload="P12M"
        audience="Small business owners, founders, managing directors and not-for-profit leaders in Australia"
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
