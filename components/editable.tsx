import { siteConfig } from "@/config/site";

/**
 * Inline-edit binding helpers (same pattern as the CRC PR site).
 *
 * <T id="home.hero.title">Default copy</T> renders the CMS override for that
 * id (from siteConfig.pageCopy) or the default children, wrapped in a span
 * carrying data-ep="pageCopy.<id>". The /admin/editor page loads the site in
 * an iframe and turns every [data-ep] element into an in-place editor; on the
 * public site the attribute is inert.
 *
 * copySrc(id, fallback) is the image equivalent: returns the overridden image
 * path and pairs with imgBind(id), which tags the element for the editor's
 * image picker.
 */

function pageCopyMap(): Record<string, string> {
  return (siteConfig as { pageCopy?: Record<string, string> }).pageCopy ?? {};
}

export function copyText(id: string, fallback: string): string {
  return pageCopyMap()[id] ?? fallback;
}

export function copySrc(id: string, fallback: string): string {
  return pageCopyMap()[id] ?? fallback;
}

export function T({
  id,
  children,
  className,
}: {
  id: string;
  children: string;
  className?: string;
}) {
  return (
    <span data-ep={`pageCopy.${id}`} className={className}>
      {copyText(id, children)}
    </span>
  );
}

/**
 * Maybe-tagged copy: like T, but renders untagged plain text when no id is
 * given. Lets shared components stay editable only when the caller passes a
 * copy id, without branching at every call site.
 */
export function MT({
  id,
  children,
  className,
}: {
  id?: string | false;
  children: string;
  className?: string;
}) {
  if (!id) return <>{children}</>;
  return (
    <T id={id} className={className}>
      {children}
    </T>
  );
}

/** Attribute spread for elements rendering an existing siteConfig path. */
export function bind(path: string): { "data-ep": string } {
  return { "data-ep": path };
}

/** Attribute spread for images edited via the editor's image picker. */
export function imgBind(id: string): { "data-epi": string } {
  return { "data-epi": `pageCopy.${id}` };
}

/** Image bound to an existing siteConfig path. */
export function imgBindPath(path: string): { "data-epi": string } {
  return { "data-epi": path };
}
