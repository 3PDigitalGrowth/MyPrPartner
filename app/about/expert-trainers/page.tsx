import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Newspaper,
  TrendingUp,
  Megaphone,
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  Heart,
  Check,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Expert PR Trainers & Presenters | My PR Partner",
  description:
    "Meet the 12+ public relations, crisis communications and reputation specialists who deliver My PR Partner programs - leaders in their field from Australia, New Zealand, the USA and beyond.",
  alternates: { canonical: "https://myprpartner.com/about/expert-trainers" },
  openGraph: {
    title: "Expert PR Trainers & Presenters | My PR Partner",
    description:
      "Learn from leading crisis, reputation, media, content and business growth specialists across Australia and the globe.",
    url: "https://myprpartner.com/about/expert-trainers",
    type: "website",
    images: ["/images/hero-programs.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert PR Trainers & Presenters | My PR Partner",
    description:
      "Meet the leading crisis, reputation, media and business growth specialists who deliver My PR Partner programs.",
    images: ["/images/hero-programs.jpg"],
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// Trainer data - every bio is verbatim from the live myprpartner.com/expert-trainers
// page (sourced April 2026). Do not rewrite these without the client's approval.
// ──────────────────────────────────────────────────────────────────────────────

type Trainer = {
  slug: string;
  name: string;
  title: string;
  org: string;
  location: string;
  bio: string;
  image?: string;
  initials: string;
  /** Hue pair for the gradient when no photo is supplied. */
  palette: "teal" | "navy" | "ocean" | "sunset" | "emerald" | "plum";
  programs: Array<"crisis" | "schools" | "associations" | "business" | "charity">;
};

const trainers: Trainer[] = [
  {
    slug: "lyall-mercer",
    name: "Lyall Mercer",
    title: "Co-founder, My PR Partner · Lead Strategist, CRC Public Relations",
    org: "My PR Partner",
    location: "Australia",
    bio: "Co-founder of My PR Partner and lead strategist for CRC Public Relations, Lyall is widely regarded across Australasia as a leader in corporate public relations, reputation and issues management, and crisis communications. A former journalist with more than 20 years of front-line public relations experience with clients and media on every continent, he has advised national and international companies and organisations, governments, executives, politicians, heads of state, celebrities, sporting figures, industry associations and schools; as well as coordinating international media conferences and speaking at events across the world.",
    image: "/images/instructors/lyall-mercer.png",
    initials: "LM",
    palette: "navy",
    programs: ["crisis", "schools", "associations", "business", "charity"],
  },
  {
    slug: "melissa-agnes",
    name: "Melissa Agnes",
    title: "Founder & CEO",
    org: "Crisis Ready Institute",
    location: "USA",
    bio: "Based in the USA, Melissa is a recognised leading authority on crisis communication, crisis leadership and brand protection. Best-selling author of 'Crisis Ready: Building an Invincible Brand in an Uncertain World', and creator of the Crisis Ready® Model which has been globally recognised as having elevated industry best practice, she has worked with ministries of foreign affairs and defence, NATO and many other leading organisations helping them to build invincible brands that can withstand even the most devastating of events. She is a regular contributor to media outlets across North America.",
    image: "/images/instructors/melissa-agnes.png",
    initials: "MA",
    palette: "teal",
    programs: ["crisis"],
  },
  {
    slug: "deborah-hileman",
    name: "Deborah Hileman",
    title: "President",
    org: "Institute for Crisis Management",
    location: "USA",
    bio: "As president of the Institute for Crisis Management in the USA - a recognised leader in crisis communication, research and training - Deborah has trained executives across the globe to prevent, effectively respond to, and mitigate crises. With more than 35 years' experience in public and private companies and non-profit organisations across various industries, she has authored several works including \u201CBuilding a Crisis Early Warning System by Empowering Employees to Speak Up,\u201D and \u201C15 Tips for More Effective Employee Communications in a Crisis.\u201D",
    image: "/images/instructors/deborah-hileman.png",
    initials: "DH",
    palette: "plum",
    programs: ["crisis", "associations", "business", "charity"],
  },
  {
    slug: "tim-sterne",
    name: "Tim Sterne",
    title: "Internal Investigations Specialist",
    org: "Basalt Solutions",
    location: "New Zealand",
    bio: "Tim is an internal investigations specialist with a specific focus on the education sector. Prior to becoming a consultant, Tim spent almost 12 years with the New Zealand Police, moving up the ranks to become Detective Sergeant. Before the badge, Tim was a school teacher with a Bachelor of Arts, Post-Graduate Diploma in Secondary Teaching and Post-Graduate Certificate in International Security. Tim works with a growing number of schools in Australia and abroad, educating on best practise and consulting as an external independent investigator.",
    image: "/images/instructors/tim-sterne.png",
    initials: "TS",
    palette: "navy",
    programs: ["schools"],
  },
  {
    slug: "trevor-young",
    name: "Trevor Young",
    title: "PR, Content & Digital Strategist",
    org: "PR Warrior",
    location: "Australia",
    bio: "Trevor is a leading PR, content and digital communications strategist, coach, author and speaker who has worked with some of the biggest consultancies in Australia as well as running his own agencies. Publisher of the \u201CPR Warrior\u201D blog and presenter of the \u201CBecome Your Own PR Machine\u201D podcast, Trevor was named as one of the \u2018heroes of Australian content marketing\u2019 by the Sydney Morning Herald and one of Australia's \u2018Top Business Thinkers\u2019 by Smart Company.",
    image: "/images/instructors/trevor-young.png",
    initials: "TY",
    palette: "ocean",
    programs: ["associations", "business", "charity"],
  },
  {
    slug: "julie-mason",
    name: "Julie Mason",
    title: "LinkedIn Sales Strategist",
    org: "Julie Mason International",
    location: "Australia",
    bio: "Julie is a renowned LinkedIn Sales Strategist with over 30 years of experience in traditional and digital sales. Featured on the cover of Social Media Success Magazine Australia and the LinkedIn tutor for the University of Sydney, University of Queensland, Griffith University and Recruiter.com, Julie is celebrated for her innovative, results-driven approach. She specialises in empowering small business owners to leverage LinkedIn effectively, transforming their profiles into powerful sales tools that position them as authorities in their industries.",
    image: "/images/instructors/julie-mason.png",
    initials: "JM",
    palette: "sunset",
    programs: ["business", "associations"],
  },
  {
    slug: "karl-schwantes",
    name: "Karl Schwantes",
    title: "Customer Experience Expert · Owner, Xennox Diamonds",
    org: "Reputable Academy",
    location: "Australia",
    bio: "Karl is an international award-winning author, a Telstra business award finalist and winner of the My Business Award for best customer experience. As owner of the renowned Xennox Diamonds, a 44-year-old second generation family business, he has achieved a 5-Star Google review ranking after more than 1300 reviews. Since 2020 Karl has been sharing his secrets and helping business owners to craft remarkable client experiences that turn great testimonials into online reviews that drive sales.",
    image: "/images/instructors/karl-schwantes.png",
    initials: "KS",
    palette: "emerald",
    programs: ["business"],
  },
  {
    slug: "petra-zink",
    name: "Petra Zink",
    title: "Founder · Personal Branding Strategist",
    org: "impaCCCt",
    location: "Australia",
    bio: "Petra is the founder of personal branding agency impaCCCt which helps transform high-potential and high-growth startups into thriving, market-leading businesses through bespoke personal branding strategies. She has been featured in publications including Forbes, news.com.au, Marie Claire, hashtagHR and the Business Women Media. Petra has also spoken at leading conferences including Disrupt HR, HackingHR, LearnX, Australian HR Summit and genYou events.",
    image: "/images/instructors/petra-zink.png",
    initials: "PZ",
    palette: "plum",
    programs: ["business", "associations"],
  },
  {
    slug: "libby-marshall",
    name: "Libby Marshall",
    title: "Head of Client Services",
    org: "OnTalent",
    location: "Australia",
    bio: "Libby is the head of client services at OnTalent, a boutique talent advisory firm. She is an MBA graduate of the University of Queensland, a qualified Gallup Global Strengths Coach and certified MBTI Practitioner. Her expertise is in developing people success strategies aligned to commercial performance. Libby has worked with higher education institutions in the areas of MBA and executive education including many of Australia's leading universities, Harvard, Foster School of Business (Seattle), and the University of Illinois.",
    image: "/images/instructors/libby-marshall.png",
    initials: "LM",
    palette: "ocean",
    programs: ["business", "associations", "charity"],
  },
  {
    slug: "jonathan-hawkes",
    name: "Jonathan Hawkes",
    title: "Campaigner & Communication Adviser",
    org: "Uncommon Asymmetry",
    location: "Australia",
    bio: "Jonathan is a highly experienced campaigner, communication professional and adviser, having worked on many industry positioning campaigns and over 30 state and federal campaigns for more than 20 years. He is a former federal director for the National Party of Australia, director of the 2010 state campaign for the Tasmanian Liberal Party, and a senior media adviser to cabinet ministers and political leaders. Jonathan knows how to compete for attention and message space, and achieve influence and successful advocacy.",
    image: "/images/instructors/jonathan-hawkes.png",
    initials: "JH",
    palette: "navy",
    programs: ["associations", "charity"],
  },
  {
    slug: "vincent-potage",
    name: "Vincent Potage",
    title: "Strategic Communicator · MBA, CIPR (UK)",
    org: "Wyatt Potage Consulting",
    location: "Global (Europe & Africa)",
    bio: "Vincent is a strategic communicator who holds an MBA and is licensed with the Chartered Institute of Public Relations in the UK. With over 15 years of experience spanning global markets, he specialises in transforming complex ideas into authentic stories that connect with audiences. Fluent in both English and French, Vincent has worked remotely with brands and agencies across Europe and Africa.",
    image: "/images/instructors/vincent-potage.png",
    initials: "VP",
    palette: "teal",
    programs: ["business", "associations", "charity"],
  },
  {
    slug: "cavill-stone",
    name: "Cavill Stone",
    title: "Director of Clients, People & Culture",
    org: "MediaCast",
    location: "Australia",
    bio: "Cavill is director of clients, people and culture at PR agency MediaCast, which specialises in radio and broadcast communications. With more than ten years' experience in PR, communications and marketing, Cavill has assisted companies and non-profit organisations to elevate their profile, build their brand and ensure their messages are heard by their potential audiences - all using the power of radio.",
    image: "/images/instructors/cavill-stone.png",
    initials: "CS",
    palette: "sunset",
    programs: ["business", "associations", "charity"],
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// Specialty groupings - used to break the trainer grid into scannable clusters
// and to let users "jump to the expertise they care about".
// ──────────────────────────────────────────────────────────────────────────────

type SpecialtyGroup = {
  id: string;
  label: string;
  blurb: string;
  icon: typeof Shield;
  trainers: string[]; // slugs, in display order
};

const specialtyGroups: SpecialtyGroup[] = [
  {
    id: "crisis",
    label: "Crisis communications & reputation",
    blurb:
      "Practitioners who've stood beside governments, boards and CEOs through their hardest days.",
    icon: Shield,
    trainers: ["lyall-mercer", "melissa-agnes", "deborah-hileman", "jonathan-hawkes"],
  },
  {
    id: "media",
    label: "Media, content & digital",
    blurb:
      "Journalists, strategists and podcasters who know how to earn attention and keep it.",
    icon: Newspaper,
    trainers: ["trevor-young", "cavill-stone", "vincent-potage", "julie-mason"],
  },
  {
    id: "growth",
    label: "Business growth & customer experience",
    blurb:
      "Operators and brand builders who turn reputation into repeat revenue.",
    icon: TrendingUp,
    trainers: ["karl-schwantes", "petra-zink", "libby-marshall"],
  },
  {
    id: "schools",
    label: "Schools & safeguarding",
    blurb:
      "Specialist support for principals, boards and school communications leads.",
    icon: GraduationCap,
    trainers: ["tim-sterne"],
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// Branded "coin" avatar - used for every trainer who hasn't supplied a licensed
// headshot. Keeps the page visually consistent without stand-in stock portraits.
// ──────────────────────────────────────────────────────────────────────────────

const paletteGradients: Record<Trainer["palette"], string> = {
  teal: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  navy: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  ocean: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
  sunset: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
  emerald: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  plum: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
};

function TrainerAvatar({ trainer, size = 96 }: { trainer: Trainer; size?: number }) {
  if (trainer.image) {
    return (
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-2xl"
        style={{ width: size, height: size }}
      >
        <Image
          src={trainer.image}
          alt={`${trainer.name}, ${trainer.title}`}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${trainer.name}, ${trainer.title}`}
      className="flex flex-shrink-0 items-center justify-center rounded-2xl font-heading font-bold text-white shadow-inner"
      style={{
        width: size,
        height: size,
        background: paletteGradients[trainer.palette],
        fontSize: Math.round(size * 0.36),
        letterSpacing: "0.02em",
      }}
    >
      {trainer.initials}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Program catalogue - used in the "Matched to your program" CRO band so visitors
// land from the trainers page into the right enrolment path.
// ──────────────────────────────────────────────────────────────────────────────

const programCatalogue: Array<{
  id: Trainer["programs"][number];
  href: string;
  label: string;
  icon: typeof Shield;
  intro: string;
  cta: string;
  accent: "teal" | "navy";
}> = [
  {
    id: "crisis",
    href: "/crisis-masterclass",
    label: "Crisis Masterclass",
    icon: Shield,
    intro:
      "Australia's premier 12-month crisis communications program, presented with Melissa Agnes.",
    cta: "Explore the masterclass",
    accent: "navy",
  },
  {
    id: "schools",
    href: "/programs/schools",
    label: "Schools Program",
    icon: GraduationCap,
    intro:
      "Reputation, safeguarding communications and media training built for Australian schools.",
    cta: "Explore schools program",
    accent: "teal",
  },
  {
    id: "associations",
    href: "/programs/industry-associations",
    label: "Industry Associations",
    icon: Building2,
    intro:
      "Advocacy, member growth and crisis-ready communications for peak and member bodies.",
    cta: "Join the waitlist",
    accent: "teal",
  },
  {
    id: "business",
    href: "/programs/business",
    label: "Business Program",
    icon: Briefcase,
    intro:
      "Brand, growth and reputation training for business owners, founders and marketing leads.",
    cta: "Join the waitlist",
    accent: "teal",
  },
  {
    id: "charity",
    href: "/programs/charity",
    label: "Charity & Not-for-Profit",
    icon: Heart,
    intro:
      "Donor trust, fundraising and governance-ready PR for Australian NFPs and charities.",
    cta: "Join the waitlist",
    accent: "teal",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// Shared bits of the page
// ──────────────────────────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
      {children}
    </h2>
  );
}

function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7">
      <header className="flex items-start gap-5">
        <TrainerAvatar trainer={trainer} size={88} />
        <div className="min-w-0">
          <h3 className="font-heading text-[18px] font-bold leading-tight text-text-dark md:text-[19px]">
            {trainer.name}
          </h3>
          <p className="mt-1 text-[13px] font-semibold text-teal">{trainer.title}</p>
          <p className="mt-0.5 text-[13px] text-text-medium">
            {trainer.org}
            <span aria-hidden className="mx-1.5 text-text-medium/40">·</span>
            <span className="inline-flex items-center gap-1 text-text-medium">
              <Globe2 className="h-3 w-3" aria-hidden />
              {trainer.location}
            </span>
          </p>
        </div>
      </header>
      <p className="mt-5 flex-1 text-[14.5px] leading-relaxed text-text-medium">
        {trainer.bio}
      </p>
      {trainer.programs.length > 0 ? (
        <footer className="mt-5 flex flex-wrap gap-2 border-t border-[#F1F2F5] pt-4">
          {trainer.programs.map((p) => {
            const prog = programCatalogue.find((x) => x.id === p);
            if (!prog) return null;
            return (
              <Link
                key={p}
                href={prog.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F2FAFB] px-3 py-1 text-[11.5px] font-medium text-teal-dark transition-colors hover:bg-teal/10"
              >
                {prog.label}
              </Link>
            );
          })}
        </footer>
      ) : null}
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────────

export default function ExpertTrainersPage() {
  const trainerBySlug = new Map(trainers.map((t) => [t.slug, t]));

  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-programs.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <div className="max-w-[820px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <Users className="h-3.5 w-3.5" aria-hidden />
                Expert trainers
              </div>
              <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[54px]">
                You&apos;ll be trained and supported by the best in their business
                from across Australia and the globe
              </h1>
              <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                Here are just a few of the experts you&apos;ll meet as part of the
                My PR Partner community - with many more specialists across
                every area of public relations and reputation management.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-text-dark"
                >
                  Explore programs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/crisis-masterclass"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Shield className="h-4 w-4" aria-hidden />
                  Crisis Masterclass
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[12px] text-white/70">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/powered-by-crc-badge-light.svg"
                    alt="Powered by CRC Public Relations"
                    width={200}
                    height={26}
                    className="h-6 w-auto opacity-90"
                  />
                </div>
                <span aria-hidden className="text-white/30">|</span>
                <span>25+ years of specialist PR consulting</span>
                <span aria-hidden className="text-white/30">|</span>
                <span>Presenters across 4 continents</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="border-b border-[#EEF0F3] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {[
                { stat: "12+", label: "Expert presenters" },
                { stat: "200+", label: "Combined years of PR experience" },
                { stat: "4", label: "Continents represented" },
                { stat: "Every", label: "Area of public relations" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <p className="font-heading text-[30px] font-bold text-text-dark md:text-[38px]">
                    {s.stat}
                  </p>
                  <p className="mt-1 text-[13px] text-text-medium md:text-[14px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECIALTY JUMP NAV ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <SectionEyebrow>Meet the team</SectionEyebrow>
                <h2 className="mt-2 font-heading text-[22px] font-bold text-text-dark md:text-[26px]">
                  Jump to the expertise you need
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {specialtyGroups.map((g) => {
                  const Icon = g.icon;
                  return (
                    <a
                      key={g.id}
                      href={`#${g.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[13px] font-medium text-text-dark transition-colors hover:border-teal hover:text-teal"
                    >
                      <Icon className="h-3.5 w-3.5 text-teal" aria-hidden />
                      {g.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRAINER GROUPS ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            {specialtyGroups.map((group, idx) => {
              const Icon = group.icon;
              const groupTrainers = group.trainers
                .map((slug) => trainerBySlug.get(slug))
                .filter((t): t is Trainer => Boolean(t));
              return (
                <div
                  key={group.id}
                  id={group.id}
                  className={`scroll-mt-28 ${idx > 0 ? "mt-16 md:mt-20" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: paletteGradients.teal }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <SectionEyebrow>Specialty</SectionEyebrow>
                      <h2 className="mt-1 font-heading text-[24px] font-bold text-text-dark md:text-[30px]">
                        {group.label}
                      </h2>
                      <p className="mt-2 max-w-[640px] text-[15px] text-text-medium md:text-[16px]">
                        {group.blurb}
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {groupTrainers.map((t) => (
                      <TrainerCard key={t.slug} trainer={t} />
                    ))}
                  </div>
                </div>
              );
            })}
            <p className="mt-14 rounded-card border border-dashed border-[#E5E7EB] bg-[#F7F8FA] p-6 text-center text-[14.5px] italic text-text-medium md:p-7">
              These are just a few of the experts you&apos;ll meet inside the My PR
              Partner community - there are many more specialists across every
              area of public relations, reputation, media and crisis.
            </p>
          </div>
        </section>

        {/* ── MATCHED TO YOUR PROGRAM (CRO BAND) ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <SectionEyebrow>Matched to your program</SectionEyebrow>
              <SectionHeading>
                Learn from the right trainers for your organisation
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-text-medium md:text-[17px]">
                Every My PR Partner program is curated so you hear from the
                specialists who matter most to your sector. Pick your path
                below and see who&apos;s teaching.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {programCatalogue.map((prog) => {
                const Icon = prog.icon;
                const matched = trainers.filter((t) => t.programs.includes(prog.id));
                const accentBg =
                  prog.accent === "navy" ? paletteGradients.navy : paletteGradients.teal;
                return (
                  <article
                    key={prog.id}
                    className="flex h-full flex-col overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div
                      className="flex items-center gap-3 px-6 py-5 text-white"
                      style={{ background: accentBg }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                      <h3 className="font-heading text-[18px] font-bold">{prog.label}</h3>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[14.5px] leading-relaxed text-text-medium">
                        {prog.intro}
                      </p>
                      <div className="mt-5">
                        <p className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-text-medium">
                          Presented by
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          {matched.slice(0, 5).map((t) => (
                            <div
                              key={t.slug}
                              className="flex items-center gap-2 rounded-full border border-[#EEF0F3] bg-[#F7F8FA] px-2.5 py-1.5"
                              title={`${t.name} - ${t.org}`}
                            >
                              <TrainerAvatar trainer={t} size={24} />
                              <span className="pr-1 text-[12.5px] font-medium text-text-dark">
                                {t.name}
                              </span>
                            </div>
                          ))}
                          {matched.length > 5 ? (
                            <span className="inline-flex items-center rounded-full border border-[#EEF0F3] bg-white px-3 py-1.5 text-[12px] text-text-medium">
                              +{matched.length - 5} more
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-auto pt-6">
                        <Link
                          href={prog.href}
                          className="inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition-colors hover:text-teal-dark"
                        >
                          {prog.cta}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS BAND ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[720px] text-center">
              <SectionEyebrow>Trusted by leaders</SectionEyebrow>
              <SectionHeading>
                Why Australian organisations choose our trainers
              </SectionHeading>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  quote:
                    "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
                  name: "Peter White AM",
                  title: "Managing Director",
                  org: "Finance Brokers Association of Australia",
                },
                {
                  quote:
                    "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
                  name: "Hamish Watson",
                  title: "Director",
                  org: "Cafe 63",
                },
                {
                  quote:
                    "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
                  name: "Vanessa Cheng",
                  title: "Executive Officer",
                  org: "Australian Association of Christian Schools",
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-6 md:p-7"
                >
                  <blockquote className="flex-1 text-[15px] italic leading-relaxed text-text-dark">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-[#E5E7EB] pt-4 text-[13px]">
                    <p className="font-heading font-bold text-text-dark">{t.name}</p>
                    <p className="text-text-medium">
                      {t.title}, {t.org}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUTCOMES / WHY IT MATTERS ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <SectionEyebrow>Why trainer quality matters</SectionEyebrow>
                <SectionHeading>
                  Practitioners, not academics - live-tested guidance you can use on Monday
                </SectionHeading>
                <p className="mt-5 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                  Every trainer inside My PR Partner is actively consulting to real
                  organisations. That means your learning isn&apos;t theory from a textbook
                  - it&apos;s frameworks, scripts and decisions that have been stress-tested
                  inside boardrooms, newsrooms and live crisis responses.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Working consultants still briefing CEOs, boards and ministers today",
                    "Global perspective - Australia, New Zealand, the USA, UK, Europe and Africa",
                    "Cross-sector depth - corporate, schools, associations, charities and NFPs",
                    "Exclusive Australasian access to the Crisis Ready® Institute through Melissa Agnes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-text-dark"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: paletteGradients.teal }}
                        aria-hidden
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark"
                  >
                    Explore programs
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                  >
                    About My PR Partner
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card">
                  <Image
                    src="/images/crisis-masterclass/hero-portrait-crisis.jpg"
                    alt="Senior PR practitioner delivering crisis communications training"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,43,74,0) 40%, rgba(26,43,74,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-5 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      Real-world bench
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      The same team that advises CEOs, boards and governments in live
                      crisis situations is the team teaching inside your program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BAND ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/crisis-masterclass/final-cta-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(7,175,187,0.82) 70%, rgba(30,115,190,0.88) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <Megaphone className="h-3.5 w-3.5" aria-hidden />
                Ready when you are
              </p>
              <h2 className="mt-5 font-heading text-[30px] font-bold leading-tight text-white md:text-[40px]">
                Ready to learn from the best in the business?
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                Pick the program built for your organisation and start learning
                from trainers who&apos;ve stood beside the CEOs, boards and
                governments you read about.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                >
                  Explore programs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/crisis-masterclass"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Shield className="h-4 w-4" aria-hidden />
                  Crisis Masterclass
                </Link>
              </div>
              <p className="mt-6 text-[13px] text-white/70">
                Prefer to talk first?{" "}
                <Link href="/contact" className="underline hover:text-white">
                  Request a callback from our team
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
