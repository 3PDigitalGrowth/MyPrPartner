import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/StructuredData";
import { EditModeBridge } from "@/components/admin/EditModeBridge";
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
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myprpartner.com"),
  title: "Public Relations Training & Crisis Communications Courses | My PR Partner",
  description:
    "Australia's specialist PR training platform. Expert-led programs for schools, associations, and communications professionals. Crisis communications courses powered by CRC Public Relations.",
  // Child pages override this with their own canonical; only the homepage inherits "/".
  alternates: { canonical: "/" },
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
    <html lang="en-AU" className={`${dmSans.variable} ${plusJakartaSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L65KCFNGNR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L65KCFNGNR');
          `}
        </Script>
        {/*
          Kajabi click tracking. courses.myprpartner.com shares the root
          domain, so GA4's enhanced-measurement outbound click never fires for
          it and checkout clicks were invisible. One delegated listener covers
          every enrol, waitlist and login button on the site:
          - kajabi_click on any Kajabi link, with link_type (checkout /
            waitlist / login / other), program (utm_medium) and cta_location
            (utm_content, e.g. hero, final-cta)
          - begin_checkout (GA4 recommended event, marked as a key event) on
            /offers/<id>/checkout links, item_id = the Kajabi offer id
        */}
        <Script id="kajabi-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
              if (!a || typeof window.gtag !== 'function') return;
              var url;
              try { url = new URL(a.href, window.location.href); } catch (err) { return; }
              if (!/(^|\\.)(courses|learn)\\.myprpartner\\.com$/.test(url.hostname) &&
                  !/(^|\\.)(mykajabi|kajabi)\\.com$/.test(url.hostname)) return;
              var q = url.searchParams;
              var offer = url.pathname.match(/\\/offers\\/([^\\/]+)\\/checkout/);
              var linkType = q.get('utm_campaign') === 'waitlist' ? 'waitlist'
                : offer ? 'checkout'
                : /\\/login/.test(url.pathname) ? 'login' : 'other';
              var program = q.get('utm_medium') || '(not set)';
              var ctaLocation = q.get('utm_content') || '(not set)';
              window.gtag('event', 'kajabi_click', {
                link_url: url.origin + url.pathname,
                link_type: linkType,
                program: program,
                cta_location: ctaLocation
              });
              if (linkType === 'checkout') {
                window.gtag('event', 'begin_checkout', {
                  items: [{ item_id: offer[1], item_name: program }],
                  program: program,
                  cta_location: ctaLocation
                });
              }
            }, true);
          `}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xcxdmphxdy");
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "My PR Partner",
            url: "https://myprpartner.com",
            publisher: { "@type": "Organization", name: "My PR Partner" },
          }}
        />
        <EditModeBridge />
        {children}
      </body>
    </html>
  );
}
