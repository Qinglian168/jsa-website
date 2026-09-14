#!/usr/bin/env node
/**
 * Generate a salted SHA-256 hash for the JSA Solution admin password.
 *
 * Usage:
 *   node scripts/set-admin-password.mjs <your-password>
 *
 * Then set the printed value as NEXT_PUBLIC_ADMIN_PASSWORD_HASH:
 *   - locally in .env.local
 *   - in production under GitHub repo > Settings > Secrets and variables >
 *     Actions > New repository secret
 *
 * Note: the salt below must stay identical to AUTH_SALT in
 * src/lib/admin/auth.ts, otherwise hashes will not match.
 */

import { createHash } from "node:crypto";

const AUTH_SALT = "jsa-static-auth-2026::";

const password = process.argv[2];

if (!password) {
  console.error("Error: no password supplied.");
  console.error("Usage: node scripts/set-admin-password.mjs <your-password>");
  process.exit(1);
}

if (password.length < 8) {
  console.warn("Warning: fewer than 8 characters is easy to brute force.");
}

const hash = createHash("sha256").update(AUTH_SALT + password).digest("hex");

console.log("");
console.log("Password hash generated. Add this value to your environment:");
console.log("");
console.log(`NEXT_PUBLIC_ADMIN_PASSWORD_HASH=${hash}`);
console.log("");
console.log("Next steps:");
console.log("  1. Paste it into .env.local for local development");
console.log("  2. Add it as a GitHub Actions repository secret for production");
console.log("  3. Rebuild and redeploy, then log in with your new password");
console.log("");
