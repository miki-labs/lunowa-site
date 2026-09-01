# Lunowa marketing site

Canonical repository for the public Lunowa marketing website. Product truth remains external to this repository; read `AGENTS.md` and the canonical docs before changing Product semantics.

## Current implementation stage

Issue #15 introduces a reversible **M15 browser preview** of the M10 Product Proof candidate. It is intentionally non-production.

## Development

Requirements:

- Node 24 LTS in the accepted range
- pnpm 11.24.0

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm run dev
```

Verification:

```bash
pnpm run check
pnpm exec playwright install chromium
pnpm run evidence
```

GitHub Actions is the authoritative host-bound browser-evidence path for PR acceptance. See `docs/M15-VERIFICATION.md` and `docs/VERIFICATION.md`.
