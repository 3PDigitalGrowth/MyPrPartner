type Instructor = {
  name: string;
  description?: string;
  url?: string;
};

type CourseJsonLdProps = {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: {
    name: string;
    url?: string;
  };
  instructors?: Instructor[];
  courseMode?: "online" | "blended" | "onsite";
  courseWorkload?: string;
  inLanguage?: string;
  audience?: string;
  priceCurrency?: string;
  price?: string;
};

export default function CourseJsonLd({
  name,
  description,
  url,
  image,
  provider = { name: "My PR Partner", url: "https://myprpartner.com" },
  instructors = [],
  courseMode = "online",
  courseWorkload = "PT12M",
  inLanguage = "en-AU",
  audience = "PR and communications professionals, business leaders, charity executives, school leaders",
  priceCurrency,
  price,
}: CourseJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    provider: {
      "@type": "Organization",
      name: provider.name,
      ...(provider.url ? { sameAs: provider.url } : {}),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode,
      courseWorkload,
      inLanguage,
      location: {
        "@type": "VirtualLocation",
        url,
      },
      ...(price && priceCurrency
        ? {
            offers: {
              "@type": "Offer",
              price,
              priceCurrency,
              availability: "https://schema.org/InStock",
              url,
            },
          }
        : {}),
    },
    audience: {
      "@type": "Audience",
      audienceType: audience,
    },
    ...(instructors.length
      ? {
          instructor: instructors.map((i) => ({
            "@type": "Person",
            name: i.name,
            ...(i.description ? { description: i.description } : {}),
            ...(i.url ? { url: i.url } : {}),
          })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
