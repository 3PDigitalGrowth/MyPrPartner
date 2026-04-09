"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Users,
  Award,
  Globe,
  AlertTriangle,
  MicOff,
  ShieldOff,
  Clock,
  UserPlus,
  PlayCircle,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const targets = el.querySelectorAll(".animate-fade-in-up");
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Navbar />

      <main className="pt-16">
        {/* ── SECTION 2: Hero ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* CRC badge */}
            <div className="flex justify-center mb-6 animate-fade-in-up">
              <Image
                src="/images/powered-by-crc-badge.svg"
                alt="Powered by CRC Public Relations"
                width={280}
                height={36}
                priority
              />
            </div>

            {/* Headline */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="font-heading text-[32px] md:text-[48px] font-bold text-text-dark tracking-tight leading-tight">
                Public Relations Training, Resources &amp; Support
              </h1>
              <p className="mt-4 mx-auto max-w-[640px] text-lg text-text-medium font-body">
                Tailored programs backed by 15 years of crisis and corporate PR consulting experience
              </p>
            </div>

            {/* Two-column hero cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
              {/* Left card - Programs */}
              <Link href="#programs" className="group relative block overflow-hidden rounded-card min-h-[320px] md:min-h-[380px]">
                <Image
                  src="/images/hero-programs.jpg"
                  alt="Programs for Organisations - teachers in professional development session"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">
                    Programs for Organisations
                  </h2>
                  <p className="text-white/90 text-sm mb-4 max-w-md">
                    Tailored training, resources and support for schools, industry and professional associations.
                  </p>
                  <span className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-teal hover:bg-gray-50 transition-colors">
                    Explore Programs
                  </span>
                </div>
              </Link>

              {/* Right card - Masterclass */}
              <Link href="#programs" className="group relative block overflow-hidden rounded-card min-h-[320px] md:min-h-[380px]">
                <Image
                  src="/images/hero-masterclass.jpg"
                  alt="Crisis Masterclass - communications professional leading crisis planning session"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">
                    Crisis Masterclass
                  </h2>
                  <p className="text-white/90 text-sm mb-4 max-w-md">
                    For PR and communications professionals and business leaders. 12-month expert-led program.
                  </p>
                  <span className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-teal hover:bg-gray-50 transition-colors">
                    Learn More
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Social Proof / Trust Bar ── */}
        <section className="bg-bg-grey py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {[
                { icon: Shield, number: "15+", label: "Years", sublabel: "Consulting Experience" },
                { icon: Users, number: "500+", label: "Professionals", sublabel: "Trained" },
                { icon: Award, number: "100%", label: "Client", sublabel: "Retention" },
                { icon: Globe, number: "15+", label: "Industries", sublabel: "Served" },
              ].map((stat, i) => (
                <div
                  key={stat.number + stat.sublabel}
                  className={`flex flex-col items-center text-center ${
                    i > 0 ? "md:border-l md:border-gray-200" : ""
                  }`}
                >
                  <stat.icon className="h-6 w-6 text-teal mb-3" />
                  <span className="font-heading text-[28px] font-bold text-teal">{stat.number}</span>
                  <span className="text-sm text-text-medium">{stat.sublabel}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-[13px] text-gray-400 tracking-[0.05em]">
              As featured in: ABC News | The Australian | Sky News | AFR | ABC Radio
            </p>
          </div>
        </section>

        {/* ── SECTION 4: The Problem Statement ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center mb-12 animate-fade-in-up">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-teal mb-4">
                THE CHALLENGE
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Most Australian organisations are one satisfying crisis away from reputational damage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
              {[
                { icon: AlertTriangle, text: "No crisis plan that has actually been tested" },
                { icon: MicOff, text: "No training on how to handle media when it matters" },
                { icon: ShieldOff, text: "No ongoing support without expensive retainer costs" },
              ].map((card) => (
                <div
                  key={card.text}
                  className="bg-white rounded-xl p-6 shadow-card text-center"
                >
                  <card.icon className="h-6 w-6 text-teal mx-auto mb-4" />
                  <p className="text-sm text-text-dark font-medium">{card.text}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto max-w-[640px] text-center text-base text-text-medium animate-fade-in-up">
              My PR Partner changes that. Expert-led programs that build your team&apos;s capability to manage reputation, media, and crisis communications — without the cost of a PR agency.
            </p>
          </div>
        </section>

        {/* ── SECTION 5: Program Cards ── */}
        <section id="programs" className="bg-bg-grey py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-teal mb-4">
                OUR PROGRAMS
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Tailored programs for every organisation
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-base text-text-medium">
                Choose the program that fits your organisation. Each includes monthly video training, downloadable resources, expert Q&amp;A, and optional CRC PR support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {[
                {
                  image: "/images/card-schools.jpg",
                  tag: "For Schools",
                  title: "Schools Program",
                  description:
                    "Professional development for school leaders and staff. Build internal capability to manage media, protect your school\u2019s reputation, and communicate with confidence during critical moments.",
                  alt: "School principal speaking to media",
                },
                {
                  image: "/images/card-associations.jpg",
                  tag: "For Associations",
                  title: "Industry & Professional Associations Program",
                  description:
                    "Equip your members and leadership team with practical PR skills. Manage industry issues, communicate during regulatory change, and protect your association\u2019s public standing.",
                  alt: "Boardroom meeting with association members",
                },
                {
                  image: "/images/card-crisis-masterclass.jpg",
                  tag: "Crisis Masterclass",
                  title: "Crisis Masterclass",
                  description:
                    "Australia\u2019s premier crisis communications training program. Featuring the exclusive Crisis Ready\u00AE course with Melissa Agnes, monthly expert sessions, and practical crisis planning resources.",
                  alt: "PR consultant presenting in training room",
                },
              ].map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-card shadow-card overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-teal px-3 py-1 text-xs font-medium text-white">
                      {program.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-text-medium mb-4 flex-1">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Clock className="h-4 w-4" />
                      <span>12-month program</span>
                    </div>
                    <Link href="#" className="text-sm font-medium text-teal hover:text-teal-dark transition-colors">
                      Find Out More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Authority & Expert Panel ── */}
        <section id="experts" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-teal mb-4">
                YOUR EXPERT TEAM
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Learn from Australia&apos;s leading crisis and PR specialists
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-base text-text-medium">
                Every program is developed and delivered by practitioners with decades of real-world consulting experience — not academics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
              {[
                {
                  image: "/images/expert-lyall.jpg",
                  name: "Lyall Mercer",
                  title: "Head of Content, My PR Partner | Lead Strategist, CRC Public Relations",
                  bio: "Former journalist and 25-year PR career spanning six continents. Lyall has consulted national and international companies, governments, executives, and industry leaders in crisis communications and reputation management.",
                },
                {
                  image: "/images/expert-melissa.jpg",
                  name: "Melissa Agnes",
                  title: "Founder, Crisis Ready Institute (USA)",
                  bio: "Globally recognised authority on crisis communication and crisis leadership. Creator of the Crisis Ready\u00AE Model and best-selling author. Presenting exclusively through My PR Partner in Australasia.",
                },
                {
                  image: "/images/expert-deborah.jpg",
                  name: "Deborah Hileman",
                  title: "President, Institute for Crisis Management (USA)",
                  bio: "35+ years experience training executives across the globe to prevent, respond to, and mitigate crises across public and private sectors.",
                },
              ].map((expert) => (
                <div
                  key={expert.name}
                  className="rounded-card border border-gray-200 p-8 text-center"
                >
                  <div className="mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full relative">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-dark">
                    {expert.name}
                  </h3>
                  <p className="mt-1 text-sm text-teal font-medium">{expert.title}</p>
                  <p className="mt-3 text-sm text-text-medium leading-relaxed">
                    {expert.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: How It Works ── */}
        <section className="bg-bg-grey py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-teal mb-4">
                HOW IT WORKS
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Your 12-month learning journey
              </h2>
            </div>

            <div className="relative animate-fade-in-up">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-[20px] left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                {[
                  {
                    icon: UserPlus,
                    step: 1,
                    title: "Choose Your Program",
                    text: "Select the program tailored to your organisation or role. Start with a 10-day free trial.",
                  },
                  {
                    icon: PlayCircle,
                    step: 2,
                    title: "Access Monthly Training",
                    text: "New video training, resources, and workbooks unlock each month \u2014 delivered by our expert panel.",
                  },
                  {
                    icon: MessageCircle,
                    step: 3,
                    title: "Get Ongoing Support",
                    text: "Submit questions through the member portal. Higher tiers include direct CRC PR phone and email support.",
                  },
                  {
                    icon: TrendingUp,
                    step: 4,
                    title: "Build Lasting Capability",
                    text: "After 12 months, your team has the skills and resources to manage PR, media, and crisis communications independently.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white font-heading text-sm font-bold mb-4">
                      {s.step}
                    </div>
                    <s.icon className="h-6 w-6 text-teal mb-3" />
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-text-medium leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: Testimonials ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-teal mb-4">
                WHAT OUR CLIENTS SAY
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
              {[
                {
                  quote:
                    "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
                  attribution: "\u2014 Christian Schools Australia",
                },
                {
                  quote:
                    "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
                  attribution: "\u2014 National Client",
                },
              ].map((t) => (
                <div
                  key={t.attribution}
                  className="bg-bg-grey rounded-card p-8"
                >
                  <span className="block text-[48px] leading-none text-teal/30 font-heading font-bold mb-2">
                    &ldquo;
                  </span>
                  <p className="text-base text-text-medium italic leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <p className="text-sm font-medium text-text-dark">{t.attribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: CTA Banner ── */}
        <section id="cta" className="relative py-24 md:py-32">
          <Image
            src="/images/cta-background.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-teal/85" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-white leading-tight mb-4">
              Ready to build your team&apos;s PR capability?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start your 10-day free trial today. No obligation. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-white px-8 py-3 text-sm font-medium text-teal hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                View Plans &amp; Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "My PR Partner",
            url: "https://myprpartner.com",
            logo: "https://myprpartner.com/logo.svg",
            description:
              "Australia\u2019s specialist PR training platform. Expert-led programs for schools, associations, and communications professionals.",
            parentOrganization: {
              "@type": "Organization",
              name: "CRC Public Relations",
              url: "https://crcpublicrelations.com.au",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@myprpartner.com",
              contactType: "customer service",
            },
          }),
        }}
      />
    </div>
  );
}
