# Lunowa Marketing Site Verification Contract

Status: canonical acceptance oracle for implementation-facing work, 2026-08-29.

## 1. Principle

No frontend candidate is accepted because the code "looks right" in review.

Required loop:

`implement -> run -> inspect in real browser -> compare against contract/visual oracle -> test -> independently audit final cumulative candidate`.

## 2. Required evidence classes

A material UI PR should provide evidence appropriate to its scope:

1. build/type/lint/test status;
2. real-browser route verification;
3. screenshots for material desktop/mobile states;
4. interaction verification;
5. accessibility-tree/semantic verification;
6. reduced-motion verification when motion is touched;
7. visual-regression evidence when a baseline exists;
8. performance evidence when initial-load or bundle behavior changes;
9. security evidence when dynamic endpoints, third-party scripts, headers, or data handling change.

## 3. Browser verification

Use Playwright for browser-level verification.

Minimum baseline viewports for homepage acceptance:

- desktop wide: 1440 x 900;
- desktop compact: 1280 x 800;
- tablet/narrow: ~768 x 1024 where relevant;
- mobile: 390 x 844;
- narrow mobile/reflow: 320 CSS px width.

A PR may need additional breakpoints when its layout changes materially.

Required checks:

- no blank/partially rendered Hero;
- no text overlap or clipping;
- no unintended horizontal overflow;
- CTA visible and operable;
- Product stage readable;
- navigation usable;
- visual order matches semantic/DOM order where required;
- localized copy does not break containers.

## 4. Visual regression

Use Playwright screenshot comparison (`toHaveScreenshot`) for stable states after the initial visual direction is accepted.

Candidate baseline states should include:

- Hero static initial state;
- Managed;
- intermediate evidence / Still Managed;
- Needs You;
- Moment;
- mobile Hero;
- reduced-motion presentation where visually distinct.

Visual snapshots are regression oracles, not authority over Product truth. Intentional design changes require reviewed baseline updates.

## 5. Accessibility semantics

Use Playwright assertions and ARIA snapshots where useful to verify the accessible structure.

At minimum verify:

- one correct page H1;
- landmark structure;
- real buttons/links for actions;
- meaningful accessible names;
- keyboard focusability/order;
- visible focus;
- form labels/errors if waitlist exists;
- status updates do not depend only on visual motion/color;
- decorative imagery is not exposed as misleading content.

Automated checks do not replace manual keyboard/reflow/reduced-motion review.

## 6. Accessibility automation

Integrate an automated accessibility scanner such as `@axe-core/playwright` when implementation begins.

Treat automated findings as one layer. Manual checks remain required for:

- logical reading/focus order;
- Japanese text behavior;
- interaction comprehension;
- motion/vestibular safety;
- zoom/reflow;
- actual clarity of labels/instructions.

Target WCAG 2.2 AA unless an explicit higher requirement is adopted.

## 7. Motion verification

When motion is touched:

- verify normal motion;
- verify `prefers-reduced-motion: reduce`;
- verify all information remains available with motion suppressed;
- verify playback cannot trap focus or require frame-perfect timing;
- verify no endless non-essential animation steals attention;
- verify Product-state transitions do not imply unsupported Product semantics.

## 8. Performance

External Core Web Vitals "Good" thresholds remain a minimum reference:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1;

Because this site is static-first, internal targets may be stricter after measurement baselines exist.

Implementation acceptance should also monitor:

- shipped JavaScript;
- image/font weight;
- Hero/LCP asset behavior;
- hydration timing;
- layout stability;
- third-party script cost.

Do not optimize synthetic scores by harming accessibility, truthfulness, or Product comprehension.

## 9. Copy/truth audit

Every release candidate must be checked against current Product authority for:

- supported providers;
- availability/beta status;
- feature claims;
- autonomy/send behavior;
- security/privacy claims;
- pricing;
- testimonials/logos;
- performance/time-saved/accuracy metrics;
- ICP language.

Unknown/unvalidated statements remain unknown. Marketing copy cannot promote a hypothesis to fact by repetition.

## 10. Security verification

If a PR changes hosting/dynamic behavior, verify as applicable:

- no secret committed or exposed client-side;
- dependency versions and lockfile changes are scoped;
- endpoint validation and abuse boundaries;
- Turnstile token server verification if present;
- rate limiting strategy;
- CSP/header compatibility;
- third-party origin inventory;
- data-minimization and retention boundary;
- failure states do not leak sensitive information.

## 11. Independent full acceptance audit

The reviewer must audit **current Issue/task contract × final cumulative candidate**.

Do not review only the latest fix.

On FAIL:

- finish the audit unless immediate security/data-loss/destructive risk requires stop;
- list all known material blockers in one durable response;
- distinguish required correction from optional polish;
- after repeated correction failure, identify the upstream gap before another patch cycle.

On PASS, evidence should bind to the exact candidate head and current contract.