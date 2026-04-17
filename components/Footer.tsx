import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FooterNewsletter } from "./FooterNewsletter";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

const programLinks = [
  { name: "All programs", href: "/programs" },
  { name: "Crisis Masterclass", href: "/crisis-masterclass" },
  { name: "Schools program", href: "/programs/schools" },
  { name: "Industry & associations program", href: "/programs/industry-associations" },
  { name: "Business program", href: "/programs/business" },
  { name: "Charity & NFP program", href: "/programs/charity" },
];

const companyLinks = [
  { name: "Our story", href: "/about" },
  { name: "Expert trainers", href: "/about/expert-trainers" },
  { name: "Giving back", href: "/about/giving-back" },
  { name: "Upcoming courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "Articles & insights", href: "/articles" },
  { name: "5-Step PR Guide", href: "/resources/pr-guide" },
  { name: "Crisis Readiness Checklist", href: "/resources/crisis-checklist" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#EEF0F3] bg-bg-grey text-text-dark">
      {/* Thin brand accent bar - visual continuity with hero gradients */}
      <div
        aria-hidden
        className="h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #1A2B4A 0%, #07AFBB 50%, #1E73BE 100%)",
        }}
      />

      {/* ── NEWSLETTER STRIP ── */}
      <section className="border-b border-[#EEF0F3]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">
          <div className="rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.08] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-teal-dark">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Stay in the loop
                </p>
                <h2 className="mt-4 font-heading text-[22px] font-bold leading-tight text-text-dark md:text-[28px]">
                  Senior-adviser thinking - straight to your inbox.
                </h2>
                <p className="mt-3 max-w-[520px] text-[14.5px] leading-relaxed text-text-medium">
                  New articles, program launches and practical templates.
                  Fortnightly at most, unsubscribe in one click.
                </p>
              </div>
              <div className="lg:col-span-6">
                <FooterNewsletter />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 md:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4">
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 focus-visible:ring-offset-bg-grey"
              aria-label="My PR Partner home"
            >
              <Image
                src="/logo.png"
                alt="My PR Partner"
                width={220}
                height={56}
                className="h-12 w-auto"
                priority={false}
              />
            </Link>
            <p className="mt-5 max-w-[380px] text-[14.5px] leading-relaxed text-text-medium">
              Public relations training, resources and support for Australian
              organisations - powered by the senior advisory team at CRC
              Public Relations.
            </p>

            <Image
              src="/images/powered-by-crc-badge.svg"
              alt="Powered by CRC Public Relations"
              width={280}
              height={36}
              className="mt-6 h-9 w-auto"
            />

            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-medium">
                Follow along
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/my-pr-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My PR Partner on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-text-medium shadow-sm transition-colors hover:border-teal hover:bg-teal hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/people/My-PR-Partner/100093729961913/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My PR Partner on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-text-medium shadow-sm transition-colors hover:border-teal hover:bg-teal hover:text-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/myprpartner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My PR Partner on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-text-medium shadow-sm transition-colors hover:border-teal hover:bg-teal hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-dark">
              Programs
            </h3>
            <ul className="mt-4 space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] leading-relaxed text-text-medium transition-colors hover:text-teal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-dark">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] leading-relaxed text-text-medium transition-colors hover:text-teal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-text-dark">
              Free resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] leading-relaxed text-text-medium transition-colors hover:text-teal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Send us a message
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* ── CRISIS SUPPORT STRIP ── */}
      <div className="border-t border-[#EEF0F3] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-[13.5px] text-text-medium">
            Need immediate crisis support?{" "}
            <a
              href="https://crcpr.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              Contact CRC Public Relations
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[#EEF0F3] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-[12.5px] text-text-medium sm:flex-row">
            <p className="text-center sm:text-left">
              &copy; 2026 Cheese Wheel Communications Group Pty Ltd t/a My PR
              Partner and CRC Public Relations. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="transition-colors hover:text-teal">
                Privacy policy
              </Link>
              <span aria-hidden className="text-[#D1D5DB]">|</span>
              <Link href="#" className="transition-colors hover:text-teal">
                Terms &amp; conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
