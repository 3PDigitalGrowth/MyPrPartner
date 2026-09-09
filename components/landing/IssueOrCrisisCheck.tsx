"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

/**
 * Five-question self-check built on Melissa Agnes's issue-versus-crisis
 * framework (Crisis Ready course, session 2). A crisis does three things:
 * stops business as usual, requires immediate escalation to leadership, and
 * threatens material impact on people, environment, operations, reputation or
 * the bottom line. The questions map to those tests plus her emergency test.
 */

type Answer = "yes" | "no" | "unsure";

const QUESTIONS: { id: string; text: string; help: string }[] = [
  {
    id: "bau",
    text: "Has business as usual stopped, or slowed, to some extent?",
    help: "Not \"is this unpleasant\". Are people unable to do their normal work, serve customers or run the school day because of it?",
  },
  {
    id: "escalate",
    text: "Does it need immediate escalation straight to the top of leadership?",
    help: "Melissa's test: would the chief executive, principal or board chair be pulled out of a meeting, a holiday or their sleep for this?",
  },
  {
    id: "impact",
    text: "Does it threaten material impact on people, the environment, operations, reputation or the bottom line?",
    help: "One category is enough. \"Material\" means it crosses a threshold your organisation has set, or would set if it had to.",
  },
  {
    id: "capacity",
    text: "Does the scale of it exceed your capacity to respond effectively with the people and process you already have?",
    help: "The same event can be an issue for one organisation and a crisis for another. Capacity is the difference.",
  },
  {
    id: "emergency",
    text: "Does it need immediate action to protect health, safety, life, property or the environment?",
    help: "This is the emergency test. An emergency can be an issue or a crisis, but it is never a non-issue: someone goes to the scene now.",
  },
];

const OPTIONS: { value: Answer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

export function IssueOrCrisisCheck() {
  const [answers, setAnswers] = useState<Record<string, Answer | undefined>>({});
  const answered = QUESTIONS.every((q) => answers[q.id]);

  const verdict = useMemo(() => {
    if (!answered) return null;
    const yes = (id: string) => answers[id] === "yes";
    const unsure = (id: string) => answers[id] === "unsure";
    const coreYes = ["bau", "escalate", "impact"].filter(yes).length;
    const coreUnsure = ["bau", "escalate", "impact"].filter(unsure).length;
    const emergency = yes("emergency");

    if (coreYes === 3 || (coreYes >= 2 && yes("capacity"))) {
      return {
        label: "This reads as a crisis",
        tone: "crisis" as const,
        body:
          "It stops business as usual, it needs leadership now, and it threatens material impact. Escalate straight to the top, get actions and communication moving in the same timeline, and use the Crisis Ready® formula before you issue a word: validate the emotion, relate to what people care about, then prove.",
        emergency,
      };
    }
    if (coreYes >= 1 || coreUnsure >= 2) {
      return {
        label: "Borderline: treat it as an issue and watch the thresholds",
        tone: "watch" as const,
        body:
          "Melissa's continuum runs non-issue, issue, crisis, and this sits on the line. Manage it as an issue inside the team that owns it, name the threshold that would tip it into a crisis (a number, a headcount, a headline), and check against that threshold every few hours rather than every few days.",
        emergency,
      };
    }
    return {
      label: "This reads as an issue",
      tone: "issue" as const,
      body:
        "Business as usual continues, it stays with the people whose job it is, and it does not threaten material impact. Handle it well, note it, and remember that responding to an issue as though it were a crisis carries its own crisis response penalty: stress, noise and lost credibility.",
      emergency,
    };
  }, [answers, answered]);

  const toneClass =
    verdict?.tone === "crisis"
      ? "border-[#C98484] bg-[#FBF4F4]"
      : verdict?.tone === "watch"
        ? "border-[#E0B94A] bg-[#FFF8E6]"
        : "border-teal bg-[#F0FAFB]";

  return (
    <div className="not-prose rounded-card border border-[#E5E7EB] bg-white p-5 shadow-card md:p-7">
      <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal">
        Five-question self-check
      </p>
      <h3 className="mt-1 font-heading text-[20px] font-bold leading-snug text-text-dark md:text-[22px]">
        Issue or crisis? Answer for the situation in front of you.
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-text-medium">
        Built on Melissa Agnes&apos;s definitions. It is a sorting aid for a leadership conversation, not legal or safety advice.
      </p>

      <ol className="mt-6 space-y-5">
        {QUESTIONS.map((q, idx) => (
          <li key={q.id} className="border-t border-[#F1F2F5] pt-5">
            <p className="font-heading text-[15.5px] font-bold leading-snug text-text-dark">
              <span className="mr-2 text-teal">{idx + 1}.</span>
              {q.text}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-medium">{q.help}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={q.text}>
              {OPTIONS.map((opt) => {
                const active = answers[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.value }))}
                    className={`rounded-full border px-4 py-1.5 text-[13.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      active
                        ? "border-teal bg-teal text-white"
                        : "border-[#D9DDE3] bg-white text-text-dark hover:border-teal/60"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div aria-live="polite" className="mt-6">
        {verdict ? (
          <div className={`rounded-card border-l-4 p-5 md:p-6 ${toneClass}`}>
            <p className="font-heading text-[18px] font-bold leading-snug text-text-dark">
              {verdict.label}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-medium">{verdict.body}</p>
            {verdict.emergency && (
              <p className="mt-3 text-[14px] font-semibold leading-relaxed text-text-dark">
                It is also an emergency: someone goes to the scene now, and the issue-or-crisis call is made once they report back.
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/crisis-masterclass"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Build the full framework in the Crisis Masterclass
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-text-medium hover:text-text-dark"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Start again
              </button>
            </div>
          </div>
        ) : (
          <p className="text-[13.5px] text-text-medium">
            Answer all five to see where the situation sits on the continuum.
          </p>
        )}
      </div>
    </div>
  );
}
