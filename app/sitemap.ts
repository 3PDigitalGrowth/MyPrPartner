import type { MetadataRoute } from "next";

const BASE = "https://www.myprpartner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { url: "/",                             priority: 1.0,  changeFrequency: "weekly" },
    { url: "/programs",                     priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/schools",             priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/business",            priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/industry-associations", priority: 0.9, changeFrequency: "weekly" },
    { url: "/programs/charity",             priority: 0.9,  changeFrequency: "weekly" },
    { url: "/crisis-masterclass",           priority: 0.8,  changeFrequency: "weekly" },
    { url: "/courses",                      priority: 0.7,  changeFrequency: "weekly" },
    { url: "/resources/pr-guide",           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/resources/crisis-checklist",   priority: 0.8,  changeFrequency: "monthly" },
    { url: "/articles",                     priority: 0.7,  changeFrequency: "weekly" },
    { url: "/about",                        priority: 0.6,  changeFrequency: "monthly" },
    { url: "/about/expert-trainers",        priority: 0.6,  changeFrequency: "monthly" },
    { url: "/about/giving-back",            priority: 0.6,  changeFrequency: "monthly" },
    { url: "/contact",                      priority: 0.7,  changeFrequency: "monthly" },
    { url: "/privacy-policy",               priority: 0.3,  changeFrequency: "yearly" },
    { url: "/terms-and-conditions",         priority: 0.3,  changeFrequency: "yearly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
