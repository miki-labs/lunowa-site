# M15 browser-preview verification

Status: candidate verification contract for Issue #15. Exact PASS facts belong to the GitHub Actions run and generated `evidence/manifest.json` for the final PR head.

## Local commands

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm run check
pnpm exec playwright install chromium
pnpm run evidence
```

The accepted CI workflow installs Chromium with hosted-runner dependencies using the current supported Playwright command.

## Required browser evidence

The exact-head M15 workflow requires:

- `desktop-1440x900.png`
- `desktop-1280x800.png`
- `desktop-full-page.png`
- `tablet-768x1024.png`
- `mobile-390x844.png`
- `reflow-320.png`
- `reflow-200-percent.png`
- `viewport-checks.json`
- `reflow-200-percent.json`
- generated `manifest.json`

Native viewport evidence records `scrollWidth` and fails on horizontal overflow. The 200% layout/reflow oracle uses the Issue #18-approved deterministic `1280px / 2 = 640 CSS px` equivalent because Playwright does not expose native browser page zoom. It is explicitly not reported as native browser-zoom execution.

## Responsive acceptance

- >=1280: full Product stage may show sidebar, conversation, consequence, and Source rail together.
- 1024–1279: compact desktop may narrow secondary chrome without compressing core evidence.
- 768–1023: Product chrome is simplified; Product proof, comparison, Trust rows, and FAQ recompose into one-column reading order.
- 390–767: focused Product card and vertical story.
- 320–389: brand + primary action only in the header, vertical comparison/controls, no essential tiny text, no horizontal scroll.

## Truth / runtime boundary

This is an M15 static owner-review preview. It does not connect a mailbox, submit early-access data, deploy production infrastructure, prove provider parity, establish pricing, or establish Product/user validation.
