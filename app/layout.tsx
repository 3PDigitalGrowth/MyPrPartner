import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Public Relations Training & Crisis Communications Courses | My PR Partner",
  description:
    "Australia's specialist PR training platform. Expert-led programs for schools, associations, and communications professionals. Crisis communications courses powered by CRC Public Relations.",
  openGraph: {
    title: "Public Relations Training & Crisis Communications Courses | My PR Partner",
    description:
      "Australia's specialist PR training platform. Expert-led programs for schools, associations, and communications professionals.",
    url: "https://myprpartner.com",
    siteName: "My PR Partner",
    images: [
      {
        url: "https://myprpartner.com/images/hero-programs.jpg",
        width: 800,
        height: 600,
        alt: "My PR Partner - PR Training Programs",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakartaSans.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
