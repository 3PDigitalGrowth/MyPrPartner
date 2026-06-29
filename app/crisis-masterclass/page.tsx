import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseJsonLd from "@/components/CourseJsonLd";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import CrisisMasterclassClient from "./CrisisMasterclassClient";
import { crisisMasterclassContent as content } from "@/content/courses/crisis-masterclass";

export const metadata: Metadata = {
  title: content.seo.metaTitle,
  description: content.seo.metaDescription,
  alternates: { canonical: content.seo.canonicalUrl },
  openGraph: {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    url: content.seo.canonicalUrl,
    type: "website",
    images: [content.seo.ogImage],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.twitterTitle || content.seo.metaTitle,
    description: content.seo.twitterDescription || content.seo.metaDescription,
    images: [content.seo.ogImage],
  },
};

export default function CrisisMasterclassPage() {
  return (
    <>
      <CourseJsonLd
        name={content.schema.schemaName}
        description={content.schema.schemaDescription}
        url={content.seo.canonicalUrl}
        image={`https://myprpartner.com${content.seo.ogImage}`}
        provider={
          content.schema.providerName
            ? { name: content.schema.providerName, url: content.schema.providerUrl }
            : undefined
        }
        instructors={content.schema.instructors}
        courseMode="online"
        courseWorkload={content.seo.courseWorkload}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "Crisis Masterclass", url: content.seo.canonicalUrl },
        ]}
      />
      <FaqJsonLd
        items={content.faq.items
          .filter((i) => typeof i.a === "string")
          .map((i) => ({ question: i.q, answer: i.a as string }))}
      />
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        <CrisisMasterclassClient />
      </main>
      <Footer />
    </>
  );
}
