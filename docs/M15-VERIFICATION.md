# M15 browser-preview verification

Status: candidate verification contract for Issue #15. Exact PASS facts belong to the GitHub Actions run and generated `evidence/manifest.json` for the final PR head.

## Local commands

```bash
npx --yes pnpm@11.24.0 install --frozen-lockfile
npx --yes pnpm@11.24.0 run check
npx --yes pnpm@11.24.0 exec playwright install chromium
npx --yes pnpm@11.24.0 run evidence
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

## Visual convergence candidate

The current owner-review candidate remains inside **P — Product Proof Baseline** and preserves the canonical cue, H1, support copy, CTA intent, quotation scenario, intermediate reply, no-action consequence, continued monitoring, attention return, and Source path.

Bounded M15 visual findings under review:

- wide desktop tests a split copy/Product-proof composition after direct real-browser comparison against the prior centered baseline; this is **not M10 authority until owner acceptance + M10 #3 reconciliation**;
- wide narrative rhythm tests `96px` instead of the currently frozen `128px` macro gap because the full-page baseline read materially too sparse; mobile keeps the frozen `88px` rhythm;
- H1/lead/category type roles continue to use the exact M10 size tokens and Japanese H1 tracking is `0`;
- rendered Hero/section/Product proof headings use the frozen bold role (`700`) and the browser oracle rejects negative Japanese heading tracking;
- owner-review screenshots use pinned self-hosted Inter Variable + Noto Sans JP Variable assets and wait for deterministic font readiness instead of accepting OS fallback rendering;
- the Hero Product proof keeps a visible Source path at every required viewport, and the viewport oracle asserts visibility rather than mere DOM presence;
- monitoring and attention emphasis derive only from the frozen Lunowa semantic colors; no new palette or Product state was introduced.

If the owner accepts these findings, M10 #3 must reconcile the visual authority/token contract before any production-path promotion. If rejected, the convergence layer is intentionally isolated for cheap rollback.

## Additional local audit before exact-head handoff

The pre-push local candidate has additionally been checked for:

- one H1 plus header/nav/main/footer landmarks;
- visible `2px` focus outline with `3px` offset and logical first-tab skip-link behavior;
- rendered normal/large-text contrast across 1440, 1280, 768, 390, and 320 CSS px with no detected WCAG AA text-pair failures after correction;
- zero client `<script>` elements and zero Astro islands in the built page;
- meaningful H1/Product proof/CTA/FAQ behavior with JavaScript disabled;
- deterministic owner-review typography: `document.fonts.ready` plus explicit Noto Sans JP/Inter load assertions before visual evidence;
- local Chromium platform-font inspection confirmed Japanese glyphs are custom Noto Sans JP and Latin glyphs are custom Inter rather than Ubuntu fallback;
- cold local browser transfer measured roughly 650 KB of font data; a bounded throttled run measured about 0.79 s LCP / 0.006 CLS under a bounded 150 ms / 200 KB/s local throttle, retained as diagnostic evidence rather than a production guarantee;
- Chromium and Firefox desktop/mobile critical smoke with no horizontal overflow, console/page errors, missing Product proof, missing Source path, broken primary anchor, or broken native FAQ behavior.

Local WebKit launch is **not claimed as PASS**: the authorized Ubuntu host lacks the WebKit system libraries required by Playwright 1.62.1. No sudo/OS-package mutation was performed solely to make this M15 preview green. Cross-browser release coverage remains M70 work.

## Truth / runtime boundary

This is an M15 static owner-review preview. It does not connect a mailbox, submit early-access data, deploy production infrastructure, prove provider parity, establish pricing, or establish Product/user validation.
