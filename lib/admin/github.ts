import fs from "node:fs";
import path from "node:path";

/**
 * Content storage for the /admin editor.
 *
 * Production: every save is a commit to the GitHub repo via the contents API,
 * which triggers the normal Vercel deploy, so edits go live in ~2 minutes and
 * every client change is version-controlled and revertable.
 *
 * Local development (next dev) without a GITHUB_TOKEN falls back to writing
 * the working tree directly so the editor is testable offline.
 *
 * IMPORTANT: every filesystem branch below is guarded INLINE by
 * `process.env.NODE_ENV !== "production"`. Webpack replaces NODE_ENV at build
 * time and eliminates the dead branches, so Vercel's file tracer never sees
 * fs reads rooted at process.cwd(). Guarding via a helper function instead
 * bloats each admin serverless function past the 250 MB limit (the tracer
 * pulls in the entire project). Do not refactor the guards into a function.
 */

const REPO = process.env.GITHUB_REPO ?? "3PDigitalGrowth/MyPrPartner";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const API = "https://api.github.com";

function token(): string | null {
  return process.env.GITHUB_TOKEN ?? null;
}

function headers(): HeadersInit {
  return {
    Authorization: `Bearer ${token()}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export interface RepoFile {
  content: string;
  sha: string | null;
}

export interface RepoDirEntry {
  name: string;
  path: string;
  sha: string;
  size: number;
}

export class ContentStoreError extends Error {}

function assertConfigured(): void {
  if (!token()) {
    throw new ContentStoreError(
      "GITHUB_TOKEN is not configured, so content cannot be saved. Add it to the environment and redeploy."
    );
  }
}

/** Reads a file. Returns null when the file does not exist. */
export async function getRepoFile(filePath: string): Promise<RepoFile | null> {
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), filePath);
    if (!fs.existsSync(abs)) return null;
    return { content: fs.readFileSync(abs, "utf-8"), sha: null };
  }
  assertConfigured();
  const res = await fetch(
    `${API}/repos/${REPO}/contents/${encodePath(filePath)}?ref=${BRANCH}`,
    { headers: headers(), cache: "no-store" }
  );
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new ContentStoreError(`GitHub read failed (${res.status}) for ${filePath}`);
  }
  const data = await res.json();
  return {
    content: Buffer.from(data.content, "base64").toString("utf-8"),
    sha: data.sha,
  };
}

/** Creates or updates a file with a commit. */
export async function putRepoFile(
  filePath: string,
  content: string | Buffer,
  message: string
): Promise<void> {
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), filePath);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content);
    return;
  }
  assertConfigured();
  const existing = await getRepoFile(filePath);
  const res = await fetch(`${API}/repos/${REPO}/contents/${encodePath(filePath)}`, {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      branch: BRANCH,
      ...(existing?.sha ? { sha: existing.sha } : {}),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new ContentStoreError(
      `GitHub write failed (${res.status}) for ${filePath}: ${body.slice(0, 300)}`
    );
  }
}

export async function deleteRepoFile(
  filePath: string,
  message: string
): Promise<void> {
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), filePath);
    if (fs.existsSync(abs)) fs.rmSync(abs);
    return;
  }
  assertConfigured();
  const existing = await getRepoFile(filePath);
  if (!existing?.sha) return;
  const res = await fetch(`${API}/repos/${REPO}/contents/${encodePath(filePath)}`, {
    method: "DELETE",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, sha: existing.sha, branch: BRANCH }),
  });
  if (!res.ok) {
    throw new ContentStoreError(`GitHub delete failed (${res.status}) for ${filePath}`);
  }
}

/** Lists a directory. Returns [] when the directory does not exist. */
export async function listRepoDir(dirPath: string): Promise<RepoDirEntry[]> {
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), dirPath);
    if (!fs.existsSync(abs)) return [];
    return fs
      .readdirSync(abs, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => ({
        name: entry.name,
        path: `${dirPath}/${entry.name}`,
        sha: "",
        size: fs.statSync(path.join(abs, entry.name)).size,
      }));
  }
  assertConfigured();
  const res = await fetch(
    `${API}/repos/${REPO}/contents/${encodePath(dirPath)}?ref=${BRANCH}`,
    { headers: headers(), cache: "no-store" }
  );
  if (res.status === 404) return [];
  if (!res.ok) {
    throw new ContentStoreError(`GitHub list failed (${res.status}) for ${dirPath}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data
    .filter((entry) => entry.type === "file")
    .map((entry) => ({
      name: entry.name,
      path: entry.path,
      sha: entry.sha,
      size: entry.size,
    }));
}

function encodePath(filePath: string): string {
  return filePath.split("/").map(encodeURIComponent).join("/");
}
