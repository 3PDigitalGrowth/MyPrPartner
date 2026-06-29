/** @type {import('next').NextConfig} */
const nextConfig = {
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
