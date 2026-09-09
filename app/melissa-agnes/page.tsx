import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd, JsonLd } from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { buildMelissaAgnesConfig, MELISSA_VIDEOS } from "@/content/pages/melissa-agnes";
import { getAllArticles } from "@/lib/articles";

const SITE = "https://myprpartner.com";

export const metadata: Metadata = {
  title: "Melissa Agnes: Crisis Ready Course Australia | My PR Partner",
  description:
    "Melissa Agnes, creator of the Crisis Ready Model, presents the Crisis Masterclass exclusively through My PR Partner in Australasia. Articles, talks and course.",
  alternates: { canonical: `${SITE}/melissa-agnes` },
  keywords: [
    "Melissa Agnes",
    "Melissa Agnes Australia",
    "Crisis Ready Institute",
    "Crisis Ready Model",
    "Melissa Agnes course",
    "crisis communication expert",
    "crisis leadership training Australia",
  ],
  openGraph: {
    title: "Melissa Agnes: Crisis Ready Course Australia | My PR Partner",
    description:
      "Founder of the Crisis Ready Institute and creator of the Crisis Ready Model. Her course is available in Australasia only through the My PR Partner Crisis Masterclass.",
    url: `${SITE}/melissa-agnes`,
    siteName: "My PR Partner",
    type: "profile",
    images: ["/images/melissa-agnes-stage.webp"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Agnes | My PR Partner",
    description:
      "Creator of the Crisis Ready Model, presenting the Crisis Masterclass exclusively through My PR Partner in Australasia.",
    images: ["/images/melissa-agnes-stage.webp"],
  },
};

export default async function MelissaAgnesPage() {
  const articles = await getAllArticles();
  const config = buildMelissaAgnesConfig(articles);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE}/melissa-agnes#person`,
            name: "Melissa Agnes",
            jobTitle: "Founder and CEO, Crisis Ready Institute",
            description:
              "Recognised leading authority on crisis communication, crisis leadership and brand protection. Creator of the Crisis Ready Model and author of Crisis Ready: Building an Invincible Brand in an Uncertain World.",
            image: `${SITE}/images/instructors/melissa-agnes.png`,
            url: `${SITE}/melissa-agnes`,
            sameAs: [
              "https://crisisreadyinstitute.com/",
              "https://www.youtube.com/@MelissaAgnes",
            ],
            worksFor: { "@type": "Organization", name: "Crisis Ready Institute" },
            affiliation: { "@type": "Organization", name: "My PR Partner", url: SITE },
            knowsAbout: [
              "crisis communication",
              "crisis leadership",
              "reputation management",
              "brand protection",
            ],
          },
          hasPart: MELISSA_VIDEOS.map((v) => ({
            "@type": "VideoObject",
            name: v.title,
            description: v.note,
            embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
            thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
            uploadDate: "2026-03-09",
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={config.breadcrumbs.map((c) => ({
          name: c.name,
          url: `${SITE}${c.href === "/" ? "/" : c.href}`,
        }))}
      />
      <FaqJsonLd items={config.faq.items} />
      <LandingPage config={config} />
    </>
  );
}
