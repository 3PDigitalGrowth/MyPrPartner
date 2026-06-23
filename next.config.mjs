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
      // Charity & NFP program hidden - fold any traffic into the Business program.
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
