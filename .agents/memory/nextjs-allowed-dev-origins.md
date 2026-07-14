---
name: Next.js allowedDevOrigins wildcard
description: Next.js dev server silently blocks cross-origin dev asset/HMR requests from the Replit preview domain when allowedDevOrigins uses a bare "*"; content and client-side animations can appear broken as a result.
---

Next.js 16's `allowedDevOrigins` config does not treat a bare `"*"` as a full wildcard match in dev mode. When the app is only accessible from a Replit preview domain (e.g. `*.replit.dev`, `*.sisko.replit.dev`), a bare `"*"` still results in the dev server logging "Blocked cross-origin request to Next.js dev resource" and refusing HMR/webpack requests from that origin.

**Why:** This is easy to misdiagnose as a content/styling bug — e.g. framer-motion `whileInView` animations that start at `opacity: 0` can appear to "never load" because hydration/JS never properly completes for the blocked origin, leaving whole sections looking blank/invisible below the fold.

**How to apply:** In `next.config.ts`, set `allowedDevOrigins` to explicit wildcard patterns instead of `"*"`, e.g. `["*.replit.dev", "*.repl.co", "localhost", "127.0.0.1"]`. Restart the dev workflow and confirm the browser console shows `[HMR] connected` (not a cross-origin block warning) before concluding a rendering bug is caused by something else.
