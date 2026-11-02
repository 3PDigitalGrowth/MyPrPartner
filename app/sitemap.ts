import type { MetadataRoute } from "next";
import { registeredSlugs as melissaArticleSlugs } from "@/content/articles/registry";
import { isHeld } from "@/lib/held-pages";

const BASE = "https://myprpartner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { url: "/",                             priority: 1.0,  changeFrequency: "weekly" },
    { url: "/programs",                     priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/schools",             priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/business",            priority: 0.9,  changeFrequency: "weekly" },
    { url: "/programs/industry-associations", priority: 0.9, changeFrequency: "weekly" },
    // Charity program temporarily hidden (redirects to /programs/business); excluded from sitemap.
    { url: "/crisis-masterclass",           priority: 0.8,  changeFrequency: "weekly" },
    { url: "/courses",                      priority: 0.7,  changeFrequency: "weekly" },
    { url: "/resources/pr-guide",           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/resources/crisis-checklist",   priority: 0.8,  changeFrequency: "monthly" },

    // Standalone search landing pages (added 2 Sep 2026). Held for Lyall's
    // sign-off since 3 Nov (lib/held-pages.ts), which keeps them out of the
    // output below until he approves them.
    { url: "/crisis-media-training",        priority: 0.8,  changeFrequency: "monthly" },
    { url: "/pr-training-for-small-business", priority: 0.8, changeFrequency: "monthly" },
    { url: "/resources/school-crisis-communication-plan", priority: 0.8, changeFrequency: "monthly" },
    // Melissa Agnes hub pages (added 10 Sep 2026). Linked from the articles,
    // the presenter page and each other, so they receive internal equity.
    { url: "/crisis-ready-formula",         priority: 0.8,  changeFrequency: "monthly" },
    { url: "/issue-or-crisis",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/melissa-agnes",                priority: 0.8,  changeFrequency: "weekly" },
    { url: "/crisis-masterclass/inside",    priority: 0.8,  changeFrequency: "monthly" },
    { url: "/case-study/maple-leaf-foods",  priority: 0.7,  changeFrequency: "monthly" },
    { url: "/articles",                     priority: 0.7,  changeFrequency: "weekly" },
    { url: "/articles/crafting-effective-press-releases", priority: 0.7, changeFrequency: "monthly" },
    ...melissaArticleSlugs.map((slug) => ({
      url: `/articles/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { url: "/about",                        priority: 0.6,  changeFrequency: "monthly" },
    { url: "/about/expert-trainers",        priority: 0.6,  changeFrequency: "monthly" },
    { url: "/about/giving-back",            priority: 0.6,  changeFrequency: "monthly" },
    { url: "/contact",                      priority: 0.7,  changeFrequency: "monthly" },
    { url: "/privacy-policy",               priority: 0.3,  changeFrequency: "yearly" },
    { url: "/terms-and-conditions",         priority: 0.3,  changeFrequency: "yearly" },
  ];

  return routes.filter(({ url }) => !isHeld(url)).map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
