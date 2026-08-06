import { siteDefaults, mergeOverrides } from "@/config/site";
import {
  getRepoFile,
  putRepoFile,
  listRepoDir,
  ContentStoreError,
} from "@/lib/admin/github";

const SITE_JSON_PATH = "content/cms/site.json";
const UPLOADS_DIR = "public/images/uploads";

export class ValidationError extends Error {}

/* ------------------------------------------------------------------ */
/* Site overrides (content/cms/site.json)                               */
/* ------------------------------------------------------------------ */

export async function getOverrides(): Promise<Record<string, unknown>> {
  const file = await getRepoFile(SITE_JSON_PATH);
  if (!file) return {};
  try {
    const parsed = JSON.parse(file.content);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function getPath(source: unknown, dotPath: string): unknown {
  let current: unknown = source;
  for (const key of dotPath.split(".")) {
    if (typeof current !== "object" || current === null) return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/**
 * Saves changes from the inline page editor: a map of content paths to new
 * string values. Paths must be pageCopy ids or resolve to an existing string
 * in the static defaults, so the editor can never write outside the content
 * model.
 */
export async function saveInlineEdits(
  changes: Record<string, string>
): Promise<number> {
  const entries = Object.entries(changes);
  if (!entries.length) throw new ValidationError("Nothing to save yet.");
  if (entries.length > 200) throw new ValidationError("Too many changes in one save.");

  const overrides = await getOverrides();

  for (const [path, raw] of entries) {
    if (!/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/.test(path)) {
      throw new ValidationError(`Invalid content path: ${path}`);
    }
    const editable =
      path.startsWith("pageCopy.") ||
      typeof getPath(siteDefaults, path) === "string";
    if (!editable) {
      throw new ValidationError(`This content cannot be edited inline: ${path}`);
    }
    const value = String(raw ?? "").trim();
    if (value.length > 5000) {
      throw new ValidationError("One of the edits is too long to save.");
    }
    if (path.startsWith("pageCopy.")) {
      // pageCopy is a FLAT map keyed by the full copy id (see copyText in
      // components/editable.tsx) - do not split the id into nested objects.
      const pageCopy = (overrides.pageCopy ?? {}) as Record<string, string>;
      pageCopy[path.slice("pageCopy.".length)] = value;
      overrides.pageCopy = pageCopy;
    } else {
      setPath(overrides, path, value);
    }
  }

  await writeOverrides(
    overrides,
    `inline page edit (${entries.length} change${entries.length === 1 ? "" : "s"})`
  );
  return entries.length;
}

function setPath(
  target: Record<string, unknown>,
  dotPath: string,
  value: unknown
): void {
  const keys = dotPath.split(".");
  let current = target;
  for (const key of keys.slice(0, -1)) {
    const next = current[key];
    if (typeof next !== "object" || next === null || Array.isArray(next)) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
}

async function writeOverrides(
  overrides: Record<string, unknown>,
  sectionTitle: string
): Promise<void> {
  await putRepoFile(
    SITE_JSON_PATH,
    JSON.stringify(overrides, null, 2) + "\n",
    `Content update via admin: ${sectionTitle}`
  );
}

/** Current content as the site renders it: repo overrides over defaults. */
export async function getMergedConfig(): Promise<Record<string, unknown>> {
  const overrides = await getOverrides();
  return mergeOverrides(siteDefaults, overrides) as Record<string, unknown>;
}

/* ------------------------------------------------------------------ */
/* Images (public/images/uploads)                                       */
/* ------------------------------------------------------------------ */

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"];
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export interface UploadedImage {
  name: string;
  /** Public URL path, e.g. /images/uploads/team.jpg */
  src: string;
  size: number;
}

export async function listUploadedImages(): Promise<UploadedImage[]> {
  const entries = await listRepoDir(UPLOADS_DIR);
  return entries
    .filter((entry) =>
      IMAGE_EXTENSIONS.some((ext) => entry.name.toLowerCase().endsWith(ext))
    )
    .map((entry) => ({
      name: entry.name,
      src: `/images/uploads/${entry.name}`,
      size: entry.size,
    }));
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function uploadImage(file: File): Promise<UploadedImage> {
  const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    throw new ValidationError(
      `Only image files are allowed (${IMAGE_EXTENSIONS.join(", ")}).`
    );
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new ValidationError("Images must be under 4 MB. Resize it and try again.");
  }
  const base = slugify(file.name.slice(0, file.name.lastIndexOf("."))) || "image";
  const name = `${base}${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await putRepoFile(
    `${UPLOADS_DIR}/${name}`,
    buffer,
    `Content update via admin: upload image ${name}`
  );
  return { name, src: `/images/uploads/${name}`, size: file.size };
}

export { ContentStoreError };
