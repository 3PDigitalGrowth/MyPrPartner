import type { MetadataRoute } from "next";

const BASE = "https://myprpartner.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // API routes carry no indexable content; preview-output and the
        // content editor are internal only.
        disallow: ["/api/", "/preview-output/", "/admin"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
