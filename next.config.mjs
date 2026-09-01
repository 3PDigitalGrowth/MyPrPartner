/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The /admin routes are the site's only serverless functions. Without
    // these excludes Vercel's file tracer drags the whole workspace (265 MB
    // crisis_mc_content_library, 185 MB public/) into each function bundle
    // and blows the 250 MB uncompressed limit. public/ is served from the
    // CDN, never read by function code.
    outputFileTracingExcludes: {
      "*": [
        "./crisis_mc_content_library/**",
        "./public/**",
        "./docs/**",
        "./email-previews/**",
        "./scripts/**",
      ],
    },
  },
  images: {
    remotePatterns: [
      // Contentful media CDN - for article hero images and author avatars
      // once the /articles page is wired to Contentful. See
      // content/articles/CONTENTFUL_SETUP.md for the full setup.
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
      },
    ],
  },
  async redirects() {
    return [
      // NOTE: host canonicalisation (www vs apex) is handled at the Vercel domain
      // level, not here. Adding a www->apex redirect in code while Vercel also
      // redirects apex->www causes an infinite ERR_TOO_MANY_REDIRECTS loop.
      // To make the apex canonical, set myprpartner.com as the primary domain in
      // Vercel (Project > Settings > Domains) so the platform does www->apex.
      // Charity & NFP program hidden - fold any traffic into the Business program.
      // Temporary (may return), so kept as a 302 and removed from the sitemap.
      {
        source: "/programs/charity",
        destination: "/programs/business",
        permanent: false,
      },

      // ---------------------------------------------------------------------
      // Legacy WordPress URL map (added 2 Sep 2026).
      //
      // Google still ranks the pre-rebuild WordPress URLs and people still land
      // on them. Over 2 Jun - 30 Aug 2026 these paths took 281 Australian
      // impressions in Search Console and 292 page views in GA4, and every one
      // of them 404'd. Several still rank at positions 1-3 for their old
      // queries, so the link equity they carry is worth recovering.
      //
      // All permanent (308) - these moves are final, and a 308 tells Google to
      // transfer ranking signals to the new URL. Next normalises the trailing
      // slash first, so "/schools/" resolves via "/schools" and needs no
      // separate entry.
      // ---------------------------------------------------------------------

      // Program pages moved under /programs/
      { source: "/schools", destination: "/programs/schools", permanent: true },
      { source: "/business", destination: "/programs/business", permanent: true },
      {
        source: "/industry-associations",
        destination: "/programs/industry-associations",
        permanent: true,
      },
      {
        source: "/train-level-associations",
        destination: "/programs/industry-associations",
        permanent: true,
      },

      // About section moved under /about/
      { source: "/expert-trainers", destination: "/about/expert-trainers", permanent: true },
      { source: "/giving-back", destination: "/about/giving-back", permanent: true },

      // Old WooCommerce product URL for the masterclass.
      {
        source: "/product/crisis-masterclass",
        destination: "/crisis-masterclass",
        permanent: true,
      },

      // Pricing, plan-comparison and resource pages the rebuild folded into
      // the single /programs overview.
      { source: "/plan-pricing", destination: "/programs", permanent: true },
      { source: "/pr-support-options", destination: "/programs", permanent: true },
      { source: "/training-resources", destination: "/programs", permanent: true },
      { source: "/train-level", destination: "/programs", permanent: true },

      // Standalone video page had no equivalent in the rebuild.
      { source: "/video", destination: "/", permanent: true },

      // Member area lives on Kajabi, not here. /members/* was the old
      // logged-in course area (53 GA4 views on the crisis masterclass path
      // alone), so send those people to the course login rather than the
      // marketing page - they already bought it.
      {
        source: "/login",
        destination: "https://courses.myprpartner.com/login",
        permanent: true,
      },
      {
        source: "/members/:path*",
        destination: "https://courses.myprpartner.com/login",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Email preview pages are deployed for internal review only. Keep them out
      // of every search index (covers crawlers that ignore the meta robots tag).
      {
        source: "/preview-output/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
