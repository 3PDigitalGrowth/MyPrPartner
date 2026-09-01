import type { Metadata } from "next";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
  JsonLd,
} from "@/components/seo/StructuredData";
import { LandingPage } from "@/components/landing/LandingPage";
import { schoolCrisisPlanConfig as config } from "@/content/pages/school-crisis-communication-plan";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: { canonical: config.seo.canonical },
  keywords: [
    "school crisis communication plan",
    "crisis communication plan for schools",
    "school crisis communication plan template",
    "crisis communication plan Australia",
    "school reputation management",
    "school crisis management",
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

export default function SchoolCrisisPlanPage() {
  return (
    <>
      {/* Article, because this is a guide rather than a product page. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to write a crisis communication plan for an Australian school",
          description: config.seo.description,
          image: `https://myprpartner.com${config.seo.ogImage}`,
          inLanguage: "en-AU",
          mainEntityOfPage: { "@type": "WebPage", "@id": config.seo.canonical },
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
          about: [
            { "@type": "Thing", name: "Crisis communication" },
            { "@type": "Thing", name: "School reputation management" },
          ],
        }}
      />
      <HowToJsonLd
        name="How to write a crisis communication plan for an Australian school"
        description="The six sections of a workable school crisis communication plan: the team, the approval chain, audience order, pre-written holding statements, monitoring and the debrief."
        url={config.seo.canonical}
        image={`https://myprpartner.com${config.seo.ogImage}`}
        steps={[
          {
            name: "Name the crisis communication team",
            text: "List people and roles rather than job titles alone, with a mobile number and a named deputy for each. Record who convenes the team out of hours, who can approve a statement without a full meeting, who owns the relationship with the department or governing body, and who is explicitly not a spokesperson.",
          },
          {
            name: "Set an approval chain that works on a Sunday",
            text: "Test the chain against an out of hours incident. Give every approver a named delegate and set a rule for what happens when someone cannot be reached within thirty minutes, so the school is never silent while a parent group is not.",
          },
          {
            name: "Put your audiences in order",
            text: "Staff first, then directly affected families, then the wider parent community, then the department, diocese or governing body according to your obligations, then media, then the website and social channels. Sequence matters more than speed.",
          },
          {
            name: "Write holding statements in advance",
            text: "Draft one for each realistic scenario while nothing is happening. A holding statement confirms awareness, says what the school is doing, expresses appropriate concern and commits to a next update by a stated time, without speculating or confirming unverified detail.",
          },
          {
            name: "Assign monitoring",
            text: "Name who watches the school's channels, local community groups and review platforms during an active incident, how often, and what they escalate to whom.",
          },
          {
            name: "Book the debrief before you need it",
            text: "Within two weeks of any incident the team reviews what was said, what was missed, how long each step took and what changes in the plan.",
          },
        ]}
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
