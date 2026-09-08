# Lunowa marketing site

Canonical repository for the public Lunowa marketing website. Product truth remains external to this repository; read `AGENTS.md` and the canonical docs before changing Product semantics.

## Current implementation stage

Issue #15 introduces a reversible **M15 browser preview** of the M10 Product Proof candidate. It is intentionally non-production.

## Development

Requirements:

- Node 24 LTS in the accepted range
- pnpm 11.24.0

```bash
npx --yes pnpm@11.24.0 install --frozen-lockfile
npx --yes pnpm@11.24.0 run dev
```

Verification:

```bash
npx --yes pnpm@11.24.0 run check
npx --yes pnpm@11.24.0 exec playwright install chromium
npx --yes pnpm@11.24.0 run evidence
```

GitHub Actions is the authoritative host-bound browser-evidence path for PR acceptance. See `docs/M15-VERIFICATION.md` and `docs/VERIFICATION.md`.
