// Admin authentication helpers for the static (GitHub Pages) deployment.
//
// IMPORTANT — understand the threat model before relying on this:
// this site has no backend. Every byte shipped to the browser is public, so any
// in-browser check can be bypassed by someone who knows what they are doing.
// What this module buys you is *not* impenetrable security. It buys you:
//   1. The plaintext password is never bundled into the JS bundle
//   2. A casual "view source" no longer reveals the password
//   3. Sessions expire and do not survive a browser restart
//   4. Brute-force attempts are rate limited inside an active tab
// If you need real security, the admin area must move to a host with a server
// (Vercel/Netlify/Cloudflare Pages Functions) where the check happens server side.

const AUTH_SALT = "jsa-static-auth-2026::";

// SHA-256("jsa-static-auth-2026::jsa2026") — used only when the environment
// variable NEXT_PUBLIC_ADMIN_PASSWORD_HASH is not set. Regenerate with:
//   node scripts/set-admin-password.mjs jsa2026
const DEFAULT_PASSWORD_HASH =
  "6c2210d583a70dd669f16dc39a5ad74e35c22f365cbaf7aad271c4e2b860b913";

export const ADMIN_PASSWORD_HASH =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HASH || DEFAULT_PASSWORD_HASH;

/** Session lifetime once logged in (8 hours). */
export const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

/** Max failed attempts before the login form lock kicks in. */
export const MAX_LOGIN_ATTEMPTS = 5;

/** How long the lock lasts after MAX_LOGIN_ATTEMPTS failures (60 s). */
export const LOGIN_LOCK_MS = 60 * 1000;

export const AUTH_STORAGE_KEY = "jsa_admin_session";

interface StoredSession {
  token: string;
  expiresAt: number;
}

/**
 * Salted SHA-256 of the supplied password, hex encoded.
 * Requires the Web Crypto API, which is only available in secure contexts
 * (https or localhost). Returns null when unavailable.
 */
export async function hashPassword(password: string): Promise<string | null> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) return null;

  const data = new TextEncoder().encode(AUTH_SALT + password);
  const digest = await subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Length-independent comparison so the check does not leak via timing. */
export function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function readSession(): StoredSession | null {
  if (typeof sessionStorage === "undefined") return null;
  const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredSession;
    if (!parsed.token || Date.now() > parsed.expiresAt) {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function writeSession(token: string): void {
  if (typeof sessionStorage === "undefined") return;
  const session: StoredSession = {
    token,
    expiresAt: Date.now() + SESSION_TTL_MS,
  };
  sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
}
