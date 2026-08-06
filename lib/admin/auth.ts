import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Shared-login session auth for the /admin content editor.
 *
 * - The client logs in with a single shared password (ADMIN_PASSWORD env var).
 * - Sessions are a stateless signed token: "<expiryMs>.<hmac>" in an
 *   httpOnly cookie. The HMAC secret is ADMIN_SESSION_SECRET, falling back to
 *   a hash derived from ADMIN_PASSWORD so only one env var is required.
 * - Rotating ADMIN_PASSWORD (without an explicit ADMIN_SESSION_SECRET)
 *   invalidates all existing sessions, which is the desired behaviour for a
 *   shared login.
 */

const SESSION_COOKIE = "mpp_admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function sessionSecret(): string | null {
  const explicit = process.env.ADMIN_SESSION_SECRET;
  if (explicit && explicit.length >= 16) return explicit;
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return crypto
    .createHash("sha256")
    .update(`mpp-admin-session-v1:${password}`)
    .digest("hex");
}

function sign(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = crypto.createHash("sha256").update(a).digest();
  const bufB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(bufA, bufB);
}

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !input) return false;
  return timingSafeEqualStr(input, expected);
}

export function createSession(): void {
  const secret = sessionSecret();
  if (!secret) throw new Error("Admin auth is not configured");
  const expires = Date.now() + SESSION_TTL_MS;
  const token = `${expires}.${sign(String(expires), secret)}`;
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expires),
  });
}

export function destroySession(): void {
  cookies().delete(SESSION_COOKIE);
}

export function isAuthenticated(): boolean {
  const secret = sessionSecret();
  if (!secret) return false;
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot <= 0) return false;
  const expiresRaw = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  return timingSafeEqualStr(signature, sign(expiresRaw, secret));
}

/** Call at the top of every admin page and server action. */
export function requireAdmin(): void {
  if (!isAuthenticated()) redirect("/admin/login");
}
