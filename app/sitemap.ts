import type { MetadataRoute } from "next";

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

    // Standalone search landing pages (added 2 Sep 2026). These are deliberately
    // NOT in the header, footer or any existing page's links: they were briefed
    // as orphan pages so the approved site navigation stays untouched. That
    // makes the sitemap their only discovery path, which is why they carry a
    // real priority here rather than being left out.
    //
    // Trade-off worth knowing: an orphan page receives no internal PageRank, so
    // it competes on its own content alone and will rank slower than it would
    // with links from /programs, /crisis-masterclass and /resources. Adding
    // those inbound links later is a small change and is the single biggest
    // thing that would lift these three. Each page links out heavily and the
    // three cross-link to each other, so they pass equity on, they just do not
    // receive any.
    { url: "/crisis-media-training",        priority: 0.8,  changeFrequency: "monthly" },
    { url: "/pr-training-for-small-business", priority: 0.8, changeFrequency: "monthly" },
    { url: "/resources/school-crisis-communication-plan", priority: 0.8, changeFrequency: "monthly" },
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
