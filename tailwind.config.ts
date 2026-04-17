import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#07AFBB",
          dark: "#069AA4",
          light: "#5EDDE4",
        },
        "brand-blue": "#1E73BE",
        "accent-green": "#57B76A",
        "text-dark": "#1A1A2E",
        "text-medium": "#4A4A68",
        "bg-grey": "#F7F8FA",
        "crc-navy": "#1A2B4A",
        "crc-gold": "#C9A84C",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
