import type { Metadata } from "next";

/**
 * Pages that are built but waiting on Lyall's sign-off. They still load at
 * their URL so he can review them, but every link to them is dropped, the
 * sitemap leaves them out and they carry noindex. On 1 Nov he flagged that
 * these went public before he had read them, so they were held on 3 Nov.
 *
 * Delete a path from this list once he approves the page; the links, sitemap
 * entry and indexing all come back with it.
 */
export const HELD_PATHS: ReadonlySet<string> = new Set([
  "/crisis-media-training",
  "/pr-training-for-small-business",
  "/resources/school-crisis-communication-plan",
]);

export function isHeld(href: string): boolean {
  return HELD_PATHS.has(href.split(/[?#]/)[0]);
}

/** Robots metadata for a page: noindex while held, default once approved. */
export function heldRobots(path: string): Metadata["robots"] {
  return isHeld(path) ? { index: false, follow: true } : undefined;
}
