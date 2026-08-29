# Lunowa Marketing Site Verification Contract

Status: canonical acceptance oracle for design and implementation-facing work, 2026-08-29.

Read `docs/VISITOR-JOURNEY.md`, `docs/FIRST-IMPRESSION-VALIDATION.md`, `docs/HERO-CONCEPTS-M05.md`, and `docs/M05-WIREFRAMES.md` before evaluating visual or implementation candidates.

## 1. Principle

No candidate is accepted because it merely "looks right" in review.

Required high-level loop:

`Product truth -> visitor/comprehension contract -> low-fidelity static structures -> Stage 1 first-impression evidence -> eligible static structure -> Stage 2 motion evidence -> selected visual oracle -> implement -> run -> inspect in real browser -> compare -> test -> independently audit final cumulative candidate`.

A candidate that is visually polished but produces the wrong Product mental model is a failure.

## 2. Pre-implementation comprehension oracle

Before final M10 visual freeze, collect directional evidence under the current M05 task and `FIRST-IMPRESSION-VALIDATION.md`.

### Stage 1 — static structure

Compare current A/C/D static concepts with stable scenario/copy/stimulus bindings.

Required unaided first questions after bounded initial exposure:

1. `これは何をするサービス／アプリだと思いましたか？`
2. `使うと何が楽になると思いましたか？`
3. `画面の中で、そう思った根拠はどこでしたか？`

Target mental model is approximately:

> Lunowa watches unfinished email-related matters and returns them when the user actually needs to act, reducing repeated manual checking.

Material misinterpretations to track explicitly:

- generic AI email writer;
- inbox organizer / inbox-zero product;
- ordinary reminder/no-reply tracker;
- automatic follow-up sender;
- notification muter;
- generic task manager;
- autonomous agent that takes over email decisions;
- unclear category.

### Stage 2 — temporal motion

After at least one static structure is comprehension-eligible, compare the same structure/content in static form versus the bounded B motion treatment.

The Stage 2 question is not whether animation looks more impressive. It is whether motion materially improves understanding of:

`intermediate reply -> still no user action required -> material outcome -> attention required`

without introducing more confusion, accessibility cost, or dependence on motion for basic Product comprehension.

Autoplay, user-triggered playback, and other playback modes are distinct conditions and must not be silently merged.

### Evidence limit

M05 is directional qualitative evidence, not market representativeness, PMF, exact-ICP validation, conversion lift, or a statistically powered A/B test.

## 3. Visual-oracle acceptance

Before a generated/mock visual becomes canonical:

- Product/category is recognizable without prior Lunowa vocabulary;
- the initial still state is meaningful without animation;
- the dominant visual shows believable Product use rather than only an abstract metaphor/diagram;
- the concrete scenario matches Product truth;
- unsupported functionality/security/performance claims are absent;
- generated text has been independently checked rather than trusted as marketing authority;
- #10 Stage 1 and Stage 2 evidence has been consumed where applicable;
- unaided and aided findings remain distinct;
- major confusion/distrust findings are resolved or explicitly carried as open hypothesis;
- readable implementation-grade references exist for major states/sections rather than relying only on one compressed full-page board.

The rejected first dark/purple/orb/icon-timeline candidate is not a valid baseline.

## 4. Required implementation evidence classes

A material UI PR should provide evidence appropriate to its scope:

1. build/type/lint/test status;
2. real-browser route verification;
3. screenshots for material desktop/mobile states;
4. interaction verification;
5. accessibility-tree/semantic verification;
6. reduced-motion verification when motion is touched;
7. visual-regression evidence when a baseline exists;
8. performance evidence when initial-load or bundle behavior changes;
9. security evidence when dynamic endpoints, third-party scripts, headers, or data handling change;
10. copy/Product-truth evidence for any visible claim movement.

## 5. Browser verification

Use Playwright for browser-level verification after implementation begins.

Minimum baseline viewports for homepage acceptance:

- desktop wide: 1440 x 900;
- desktop compact: 1280 x 800;
- tablet/narrow: ~768 x 1024 where relevant;
- mobile: 390 x 844;
- narrow mobile/reflow: 320 CSS px width.

A PR may need additional breakpoints when its layout changes materially.

Required checks:

- no blank/partially rendered Hero;
- brand/category/value remain legible in the first viewport;
- meaningful Product state is visible before animation hydration completes;
- no text overlap or clipping;
- no unintended horizontal overflow;
- CTA visible and operable;
- Product stage readable;
- navigation usable;
- visual order matches semantic/DOM order where required;
- localized copy does not break containers;
- no decorative layer competes with the one material Product change.

## 6. Visual regression

Use Playwright screenshot comparison (`toHaveScreenshot`) for stable states after the visual direction is accepted.

Candidate baseline states should include user-meaningful forms of:

- Hero static initial monitoring state;
- intermediate reply / still no user action required;
- material evidence arrival;
- user-attention-required state;
- concise context/Source state;
- representative lower-page section states where layout is material;
- mobile Hero;
- reduced-motion presentation where visually distinct;
- static-before-hydration state where implementation differs.

Visual snapshots are regression oracles, not authority over Product truth. Intentional design changes require reviewed baseline updates.

## 7. Accessibility semantics

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
- decorative imagery is not exposed as misleading content;
- the static/reduced-motion explanation preserves the same informational result.

Automated checks do not replace manual keyboard/reflow/reduced-motion review.

## 8. Accessibility automation

Integrate an automated accessibility scanner such as `@axe-core/playwright` when implementation begins.

Treat automated findings as one layer. Manual checks remain required for:

- logical reading/focus order;
- Japanese text behavior;
- interaction comprehension;
- motion/vestibular safety;
- zoom/reflow;
- actual clarity of labels/instructions.

Target WCAG 2.2 AA unless an explicit higher requirement is adopted.

## 9. Motion verification

When motion is touched:

- verify the accepted static baseline first;
- verify normal motion;
- verify `prefers-reduced-motion: reduce`;
- verify all information remains available with motion suppressed;
- verify the first still frame already explains what is being watched and whether the user must act;
- verify playback cannot trap focus or require frame-perfect timing;
- verify no endless non-essential animation steals attention;
- verify only one material change dominates at a time;
- verify Product-state transitions do not imply unsupported Product semantics;
- verify motion preserves object continuity of the same unresolved matter;
- do not treat animation as a conversion or comprehension improvement without direct Lunowa evidence.

## 10. Performance

External Core Web Vitals "Good" thresholds remain a minimum reference:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1.

Because this site is static-first, internal targets may be stricter after measurement baselines exist.

Implementation acceptance should also monitor:

- shipped JavaScript;
- image/font weight;
- Hero/LCP asset behavior;
- hydration timing;
- static-before-hydration usefulness;
- layout stability;
- third-party script cost.

Do not optimize synthetic scores by harming accessibility, truthfulness, Product comprehension, or brand clarity.

## 11. Copy/truth audit

Every visual oracle and release candidate must be checked against current Product authority for:

- supported providers;
- availability/beta status;
- feature claims;
- autonomy/send behavior;
- security/privacy claims;
- encryption claims;
- pricing;
- testimonials/logos;
- performance/time-saved/accuracy metrics;
- ICP language.

Unknown/unvalidated statements remain unknown. Marketing copy cannot promote a hypothesis to fact by repetition or image generation.

## 12. Security verification

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

## 13. Implementation-entry gate

Production-code implementation must not start until the external `miki-labs/agent-control-plane` G7 single-task same-production-path acceptance gate has passed, in addition to local visual/design prerequisites.

G8 concurrency is not required.

The first implementation candidate should use the accepted Agent Control Plane path rather than creating a separate manual Codex authority path.

## 14. Independent full acceptance audit

The reviewer must audit **current Issue/task contract × final cumulative candidate**.

Do not review only the latest fix.

On FAIL:

- finish the audit unless immediate security/data-loss/destructive risk requires stop;
- list all known material blockers in one durable response;
- distinguish required correction from optional polish;
- after repeated correction failure, identify the upstream gap before another patch cycle.

On PASS, evidence should bind to the exact candidate head and current contract.