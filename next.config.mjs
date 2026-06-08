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
};

export default nextConfig;
