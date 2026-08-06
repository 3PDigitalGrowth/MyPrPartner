"use client";

import { createContext, useContext } from "react";

/**
 * Copy-id base for the shared course-page components. CoursePage provides
 * `course.<slug>` so the same component tree yields distinct, stable CMS copy
 * ids per program (e.g. course.business.hero.title vs course.schools.hero.title).
 * Empty string = untagged (components render plain text via MT).
 */
const CopyBaseContext = createContext<string>("");

export function CopyBaseProvider({
  base,
  children,
}: {
  base: string;
  children: React.ReactNode;
}) {
  return <CopyBaseContext.Provider value={base}>{children}</CopyBaseContext.Provider>;
}

/** Returns the page's copy-id base, or "" outside a provider. */
export function useCopyBase(): string {
  return useContext(CopyBaseContext);
}

/** Joins the base with a key, or returns false when untagged. */
export function useCopyId(): (key: string) => string | false {
  const base = useCopyBase();
  return (key: string) => (base ? `${base}.${key}` : false);
}
