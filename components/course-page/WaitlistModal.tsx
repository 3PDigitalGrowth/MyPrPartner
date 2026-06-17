"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

type WaitlistModalContextValue = {
  /** True when the current course is in waitlist mode. */
  enabled: boolean;
  /** Open the shared waitlist modal. */
  open: () => void;
};

const WaitlistModalContext = createContext<WaitlistModalContextValue>({
  enabled: false,
  open: () => {},
});

export function useWaitlistModal() {
  return useContext(WaitlistModalContext);
}

/**
 * Wraps a course page so any waitlist CTA (hero, sticky card, final band,
 * mobile bar) can open one shared modal contact form instead of linking out
 * to a hosted signup. The submission POSTs to /api/forms tagged with the
 * specific course so the team knows which waitlist it relates to.
 */
export function WaitlistModalProvider({
  enabled,
  courseName,
  slug,
  children,
}: {
  enabled: boolean;
  courseName: string;
  slug: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistModalContext.Provider value={{ enabled, open }}>
      {children}
      {enabled && isOpen ? (
        <WaitlistModal courseName={courseName} slug={slug} onClose={close} />
      ) : null}
    </WaitlistModalContext.Provider>
  );
}

function WaitlistModal({
  courseName,
  slug,
  onClose,
}: {
  courseName: string;
  slug: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      cardRef.current?.querySelector<HTMLInputElement>("#waitlist-name")?.focus();
    }, 60);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "waitlist",
          name,
          email,
          organisation,
          message,
          topic: `${courseName} waitlist`,
          source: `${slug}-waitlist`,
          website,
        }),
      });
      const data = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean };
      setStatus(res.ok && data.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-text-dark/60 backdrop-blur-sm"
      />

      <div
        ref={cardRef}
        className="relative z-10 max-h-[92vh] w-full animate-fade-in-up overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-md sm:rounded-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-text-medium transition-colors hover:bg-[#F1F2F5] hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {status === "done" ? (
          <div className="p-6 sm:p-8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)" }}
            >
              <CheckCircle2 className="h-6 w-6" aria-hidden />
            </div>
            <h2
              id="waitlist-modal-title"
              className="mt-4 font-heading text-[24px] font-bold text-text-dark"
            >
              You&apos;re on the list.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
              Thanks {name.split(" ")[0] || "there"}. We&apos;ve added you to the {courseName}{" "}
              waitlist and emailed you a confirmation. We&apos;ll be in touch the moment enrolments
              open, with your founding-member discount locked in.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <p className="pr-10 text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
              {courseName}
            </p>
            <h2
              id="waitlist-modal-title"
              className="mt-1 font-heading text-[24px] font-bold leading-tight text-text-dark"
            >
              Join the waitlist
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
              Enter your details and we&apos;ll be in touch as soon as enrolments open, with your
              founding-member discount locked in.
            </p>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-[13px] font-medium text-text-dark">
                  Name <span className="text-teal">*</span>
                </span>
                <input
                  id="waitlist-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-text-dark">
                  Work email <span className="text-teal">*</span>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-text-dark">
                  Organisation <span className="text-text-medium">(optional)</span>
                </span>
                <input
                  type="text"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  autoComplete="organization"
                  placeholder="Your business or organisation"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-text-dark">
                  Anything you&apos;d like us to know?{" "}
                  <span className="text-text-medium">(optional)</span>
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Team size, questions, anything helpful"
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            {/* Honeypot: hidden from real users, catches bots. */}
            <div aria-hidden className="absolute left-[-9999px] top-[-9999px]" tabIndex={-1}>
              <label>
                Website
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>
            </div>

            {status === "error" ? (
              <p className="mt-4 rounded-lg bg-[#FDECEC] px-4 py-3 text-[13px] text-[#B8434A]">
                Sorry, something went wrong. Please email{" "}
                <a href="mailto:info@myprpartner.com" className="font-semibold underline">
                  info@myprpartner.com
                </a>{" "}
                and we&apos;ll add you to the waitlist.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Joining..." : "Join the waitlist"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <p className="mt-4 text-[12px] leading-relaxed text-text-medium">
              We&apos;ll email you with waitlist and program updates. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
