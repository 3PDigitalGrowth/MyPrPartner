// Reusable JSON-LD emitters. Each renders a single <script type="application/ld+json">.
// Safe in both server and client components (plain script output, no hooks).

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  if (!items.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      }}
    />
  );
}

/**
 * HowTo structured data for step-by-step guides. Google no longer shows the
 * HowTo rich result on desktop or mobile search, but the markup still helps
 * search engines and AI assistants parse the sequence, so it stays worth
 * emitting on genuinely procedural pages.
 */
export function HowToJsonLd({
  name,
  description,
  url,
  image,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  if (!steps.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        ...(image ? { image } : {}),
        ...(totalTime ? { totalTime } : {}),
        step: steps.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.name,
          text: s.text,
          url: `${url}#${s.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")}`,
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  if (!items.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}
