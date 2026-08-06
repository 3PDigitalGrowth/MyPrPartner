import cmsOverrides from "@/content/cms/site.json";

/**
 * CMS content model for My PR Partner.
 *
 * Page copy defaults live inline in the components (the fallback children of
 * every <T id="...">). The /admin editor commits overrides to
 * content/cms/site.json under `pageCopy` (a FLAT map keyed by copy id), and
 * siteConfig deep-merges that file over these defaults at build time, so every
 * tagged component picks up client edits with no code changes.
 *
 * An empty site.json ({}) means the site renders exactly what is in the code.
 */
export const siteDefaults = {
  /** Flat map of copy id -> override. Populated only via the /admin editor. */
  pageCopy: {} as Record<string, string>,
};

type PlainObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) !== null
  );
}

/**
 * Deep-merges CMS overrides over the defaults. Objects merge key by key;
 * anything else (strings, arrays, numbers) is replaced wholesale, so a saved
 * override always wins but untouched keys keep their defaults.
 */
export function mergeOverrides(defaults: unknown, overrides: unknown): unknown {
  if (overrides === null || overrides === undefined) return defaults;
  if (isPlainObject(defaults) && isPlainObject(overrides)) {
    const result: PlainObject = { ...defaults };
    for (const key of Object.keys(overrides)) {
      result[key] = mergeOverrides(defaults[key], overrides[key]);
    }
    return result;
  }
  return overrides;
}

export const siteConfig = mergeOverrides(
  siteDefaults,
  cmsOverrides
) as typeof siteDefaults;
