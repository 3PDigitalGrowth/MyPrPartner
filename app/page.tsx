"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  PlayCircle,
  BookOpen,
  FileText,
  Headphones,
  FileDown,
  Mail,
  MessageSquare,
  Phone,
  Award,
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

      <main className="pt-[112px] lg:pt-[112px]">
        {/* ── HERO BANNER ── */}
        <section className="bg-white pt-20 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[720px] text-center animate-fade-in-up">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/powered-by-crc-badge.svg"
                  alt="Powered by CRC Public Relations"
                  width={280}
                  height={36}
                  priority
                />
              </div>
              <h1 className="font-heading text-[36px] md:text-[52px] font-bold text-text-dark leading-[1.1] tracking-tight">
                Public Relations Training, Resources &amp; Support
              </h1>
              <p className="mt-4 mx-auto max-w-[600px] text-[20px] text-text-medium">
                Tailored programs backed by 15 years of crisis and corporate PR consulting experience
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#programs"
                  className="rounded-full bg-teal px-7 py-3 text-sm font-medium text-white hover:bg-teal-dark transition-colors"
                >
                  Explore Programs
                </Link>
                <Link
                  href="#pricing"
                  className="rounded-full border border-teal px-7 py-3 text-sm font-medium text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  View Plans &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TWO-PATH SPLIT ── */}
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              {/* Left card - Programs */}
              <Link href="#programs" className="group relative block overflow-hidden rounded-card min-h-[240px] md:min-h-[320px]">
                <Image
                  src="/images/hero-programs.jpg"
                  alt="Programs for Organisations - teachers in professional development session"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h2 className="font-heading text-[28px] font-bold text-white">
                    Programs for Organisations
                  </h2>
                  <p className="mt-2 text-[15px] text-white/85 max-w-[380px]">
                    Tailored training, resources and support for schools, industry and professional associations.
                  </p>
                  <span className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors">
                    Find Out More
                  </span>
                </div>
              </Link>

              {/* Right card - Masterclass */}
              <Link href="#programs" className="group relative block overflow-hidden rounded-card min-h-[240px] md:min-h-[320px]">
                <Image
                  src="/images/hero-masterclass.jpg"
                  alt="Crisis Masterclass - communications professional leading crisis planning session"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h2 className="font-heading text-[28px] font-bold text-white">
                    Crisis Masterclass
                  </h2>
                  <p className="mt-2 text-[15px] text-white/85 max-w-[380px]">
                    For PR and communications professionals and business leaders. 12-month expert-led program.
                  </p>
                  <span className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors">
                    Find Out More
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR / STATS ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {[
                { number: "15+", line1: "Years Experience", line2: "In crisis & corporate PR" },
                { number: "500+", line1: "Professionals Trained", line2: "Across 15+ industries" },
                { number: "100%", line1: "Client Retention", line2: "Exposed to crisis consulting" },
                { number: "24/7", line1: "Crisis Support", line2: "For premium subscribers" },
              ].map((stat, i) => (
                <div
                  key={stat.number}
                  className={`flex flex-col items-center text-center px-4 ${
                    i > 0 ? "md:border-l md:border-gray-200" : ""
                  }`}
                >
                  <span className="font-heading text-[40px] font-bold text-teal leading-none">{stat.number}</span>
                  <span className="mt-2 text-[14px] font-medium text-text-dark">{stat.line1}</span>
                  <span className="text-[13px] text-gray-400">{stat.line2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* As Seen In */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 animate-fade-in-up">
            <p className="text-center text-[11px] font-medium text-gray-400 tracking-[0.15em] uppercase mb-5">
              AS SEEN IN
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["ABC NEWS", "THE AUSTRALIAN", "SKY NEWS", "AFR", "ABC RADIO"].map((outlet) => (
                <span key={outlet} className="font-heading text-base font-bold text-[#C0C5CE] select-none">
                  {outlet}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY MY PR PARTNER (was Problem Statement) ── */}
        <section className="bg-bg-grey py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[700px] text-center mb-12 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
                WHY MY PR PARTNER
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Build the skills your organisation needs to manage reputation, media and crisis
              </h2>
              <p className="mt-4 mx-auto max-w-[600px] text-[17px] text-text-medium">
                Most organisations don&apos;t have a dedicated PR resource. When issues arise or media comes calling, teams are left without the skills, plans or support they need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
              {[
                {
                  icon: BookOpen,
                  title: "Practical Training",
                  body: "Monthly video training and downloadable workbooks from Australia\u2019s leading PR and crisis specialists.",
                },
                {
                  icon: FileText,
                  title: "Ready-to-Use Resources",
                  body: "Crisis plan templates, media response guides, and communications checklists your team can implement immediately.",
                },
                {
                  icon: Headphones,
                  title: "Ongoing Expert Support",
                  body: "Access to CRC Public Relations consultants via phone, email and the member portal when you need guidance.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-card p-8 shadow-card">
                  <card.icon className="h-8 w-8 text-teal mb-4" />
                  <h3 className="font-heading text-lg font-bold text-text-dark mb-2">{card.title}</h3>
                  <p className="text-[15px] text-text-medium leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAM CARDS (AIM style) ── */}
        <section id="programs" className="bg-bg-grey py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
                OUR PROGRAMS
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Tailored programs for every organisation
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-base text-text-medium">
                Each program includes monthly expert-led training, downloadable resources and templates, and access to the member portal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {[
                {
                  image: "/images/card-schools.jpg",
                  title: "Schools Program",
                  description: "Professional development in PR, media and crisis communications for school leaders and staff.",
                  alt: "School principal speaking to media",
                },
                {
                  image: "/images/card-associations.jpg",
                  title: "Industry & Professional Associations Program",
                  description: "Practical PR skills and resources for association leaders and member organisations.",
                  alt: "Boardroom meeting with association members",
                },
                {
                  image: "/images/card-crisis-masterclass.jpg",
                  title: "Crisis Masterclass",
                  description: "Australia\u2019s premier crisis communications training program with Melissa Agnes and expert panel.",
                  alt: "PR consultant presenting in training room",
                },
              ].map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-card shadow-card overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-video">
                    <Image src={program.image} alt={program.alt} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-2">{program.title}</h3>
                    <p className="text-[14px] text-text-medium mb-3 flex-1 line-clamp-2">{program.description}</p>
                    <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-4">
                      <Clock className="h-3.5 w-3.5" />
                      <span>12-month program</span>
                    </div>
                    <Link
                      href="#"
                      className="block w-full rounded-full bg-teal py-2.5 text-center text-sm font-medium text-white hover:bg-teal-dark transition-colors"
                    >
                      View Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center animate-fade-in-up">
              <Link href="#pricing" className="text-base font-medium text-teal hover:text-teal-dark transition-colors">
                Explore Plans &amp; Pricing &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED (new section) ── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
                WHAT&apos;S INCLUDED
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Every program includes
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-[17px] text-text-medium">
                Choose a growth focus, a reputation focus, or both. Your content is tailored to your organisation type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up">
              {[
                {
                  icon: PlayCircle,
                  title: "Monthly Video Training",
                  text: "Expert-led training sessions covering PR strategy, media management, crisis communications and reputation protection. New content unlocks every month.",
                },
                {
                  icon: FileDown,
                  title: "Downloadable Workbooks",
                  text: "Fillable PDF workbooks and templates for each module. Build your crisis plan, media response guide, and communications toolkit.",
                },
                {
                  icon: Mail,
                  title: "Fortnightly Spotlights",
                  text: "Regular email updates with curated PR insights, industry analysis, and practical tips from our expert panel.",
                },
                {
                  icon: MessageSquare,
                  title: "Member Portal & Q&A",
                  text: "Submit questions and access all your training content through the secure member dashboard.",
                },
                {
                  icon: Phone,
                  title: "CRC PR Support",
                  text: "Higher-tier subscribers get direct phone and email access to CRC Public Relations consultants.",
                },
                {
                  icon: Award,
                  title: "Exclusive Partnerships",
                  text: "Access the Crisis Ready\u00AE program from Melissa Agnes \u2014 available exclusively through My PR Partner in Australasia.",
                },
              ].map((block) => (
                <div key={block.title} className="text-center md:text-left">
                  <block.icon className="h-10 w-10 text-teal mb-4 mx-auto md:mx-0" />
                  <h3 className="font-heading text-[17px] font-bold text-text-dark mb-2">{block.title}</h3>
                  <p className="text-[14px] text-text-medium leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDERS WELCOME ── */}
        <section className="bg-white pt-20 pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center animate-fade-in-up">
              {/* Image - 2/5 */}
              <div className="md:col-span-2">
                <div className="relative aspect-[3/4] max-w-[320px] mx-auto md:mx-0 rounded-card overflow-hidden">
                  <Image src="/images/expert-lyall.jpg" alt="Lyall Mercer" fill className="object-cover" />
                </div>
              </div>
              {/* Text - 3/5 */}
              <div className="md:col-span-3">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-3">
                  FROM THE FOUNDERS
                </p>
                <h2 className="font-heading text-[28px] md:text-[32px] font-bold text-text-dark leading-tight mb-6">
                  A message from Lyall &amp; Barbara
                </h2>
                <blockquote className="border-l-[3px] border-teal pl-6 space-y-4 text-[17px] text-text-medium leading-relaxed">
                  <p>
                    Since 2010, our parent company CRC Public Relations has been assisting Australian and global businesses, charities, industry and professional associations, governments, schools and individuals to communicate more effectively and manage their reputations.
                  </p>
                  <p>
                    We created My PR Partner so that every organisation can access world-class PR training, resources and support — without the cost of a full PR agency retainer.
                  </p>
                  <p>We invite you to join the My PR Partner community.</p>
                </blockquote>
                <p className="mt-6 text-[14px] font-medium text-text-dark">
                  — Lyall Mercer &amp; Barbara Gorogh, Co-founders
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/powered-by-crc-badge.svg"
                    alt="Powered by CRC Public Relations"
                    width={280}
                    height={36}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERT PANEL ── */}
        <section id="experts" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
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
                <div key={expert.name} className="rounded-card border border-gray-200 p-8 text-center">
                  <div className="mx-auto mb-4 h-[160px] w-[160px] overflow-hidden rounded-xl relative">
                    <Image src={expert.image} alt={expert.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-dark">{expert.name}</h3>
                  <p className="mt-1 text-sm text-teal font-medium">{expert.title}</p>
                  <p className="mt-3 text-sm text-text-medium leading-relaxed">{expert.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS (card-based, no lines) ── */}
        <section className="bg-bg-grey py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
                HOW IT WORKS
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-text-dark leading-tight">
                Your 12-month learning journey
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
              {[
                {
                  step: 1,
                  title: "Choose Your Program",
                  text: "Select the program tailored to your organisation or role. Start with a 10-day free trial.",
                },
                {
                  step: 2,
                  title: "Access Monthly Training",
                  text: "New video training, resources, and workbooks unlock each month \u2014 delivered by our expert panel.",
                },
                {
                  step: 3,
                  title: "Get Ongoing Support",
                  text: "Submit questions through the member portal. Higher tiers include direct CRC PR phone and email support.",
                },
                {
                  step: 4,
                  title: "Build Lasting Capability",
                  text: "After 12 months, your team has the skills and resources to manage PR, media, and crisis communications independently.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-card p-7 shadow-card">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white font-heading text-base font-bold">
                    {s.step}
                  </div>
                  <h3 className="mt-4 font-heading text-[17px] font-bold text-text-dark">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-text-medium leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal mb-4">
                WHAT OUR CLIENTS SAY
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
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
                {
                  quote:
                    "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
                  attribution: "\u2014 National Restaurant Chain",
                },
              ].map((t) => (
                <div key={t.attribution} className="bg-white border border-bg-grey rounded-card p-8">
                  <span className="block text-[48px] leading-none text-teal/30 font-heading font-bold mb-2">
                    &ldquo;
                  </span>
                  <p className="text-base text-text-medium italic leading-relaxed mb-6">{t.quote}</p>
                  <p className="text-sm font-medium text-text-dark">{t.attribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER (clean teal, no image) ── */}
        <section id="cta" className="bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-teal rounded-3xl px-8 py-20 text-center animate-fade-in-up">
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-white leading-tight mb-4">
                Ready to build your team&apos;s PR capability?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Start your 10-day free trial today. No obligation. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
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
