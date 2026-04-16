export type UtmOverrides = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}>;

export type CourseCheckoutConfig = {
  /**
   * The base Kajabi hosted checkout URL.
   * Resolve this from process.env.NEXT_PUBLIC_<NAME> at the top of the course's
   * content file so Next.js can inline the value into the client bundle.
   */
  baseUrl: string;
  /** Used in utm_medium (typically the course slug) */
  utmMedium: string;
  /** Used in utm_campaign (defaults to "enrol") */
  utmCampaign?: string;
};

export const PLACEHOLDER_CHECKOUT_URL =
  "https://learn.myprpartner.com/offers/PLACEHOLDER/checkout";

export function getCourseCheckoutUrl(
  config: CourseCheckoutConfig,
  overrides: UtmOverrides = {}
): string {
  const base = config.baseUrl || PLACEHOLDER_CHECKOUT_URL;

  const params = new URLSearchParams({
    utm_source: "myprpartner",
    utm_medium: config.utmMedium,
    utm_campaign: config.utmCampaign || "enrol",
    ...overrides,
  });

  return `${base}${base.includes("?") ? "&" : "?"}${params.toString()}`;
}

/**
 * Backward-compatible wrapper for the original Crisis Masterclass call sites.
 * New code should call getCourseCheckoutUrl with a CourseCheckoutConfig instead.
 */
export function getCrisisMasterclassCheckoutUrl(overrides: UtmOverrides = {}): string {
  return getCourseCheckoutUrl(
    {
      baseUrl:
        process.env.NEXT_PUBLIC_KAJABI_CRISIS_CHECKOUT_URL || PLACEHOLDER_CHECKOUT_URL,
      utmMedium: "crisis-masterclass",
      utmCampaign: "enrol",
    },
    overrides
  );
}
