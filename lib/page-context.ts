// Small client-side helper so every form can tell the team exactly which page
// a submission came from. Returns the current path (and any query string, which
// is where UTM campaign tags live) so admin notifications are genuinely
// page-aware. Safe to call during SSR - it just returns undefined.
export function currentPagePath(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const { pathname, search } = window.location;
  return `${pathname}${search}`.slice(0, 300);
}
