# AGENTS.md

## Repository purpose

`miki-labs/lunowa-site` owns the public Lunowa marketing website.

It is a **projection of Product truth**, not the Product authority. The canonical Product authority remains in `miki-thecat/lunowa`, especially `docs/product/PRODUCT.md`, `docs/product/PRODUCT-CONTENT.md`, Responsibility semantics, and canonical design contracts.

This repository must not invent Product semantics, supported capabilities, pricing, customer counts, testimonials, security certifications, performance claims, or validated ICP conclusions.

## Read first

Before implementation or review, read:

1. `docs/CURRENT.md` — current execution router and status.
2. `docs/VISITOR-JOURNEY.md` — first-time visitor mental-model sequence and comprehension oracle.
3. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — current component/template reuse strategy.
4. `docs/APPROVED-PRIMITIVES-2026-08-29.md` — approved primitive order, compatibility/licensing and Figma-access boundaries.
5. `docs/FIRST-IMPRESSION-VALIDATION.md` — current M05 research protocol.
6. `docs/HERO-CONCEPTS-M05.md` — current P/E exploration contract; retired A/C/D variants are not the active participant plan.
7. `docs/M05-WIREFRAMES.md` — internal structural reference only.
8. `docs/HOMEPAGE.md` — homepage projection, copy hierarchy, truth boundaries.
9. `docs/DESIGN.md` — visual direction and anti-patterns.
10. `docs/MOTION.md` — semantic motion contract.
11. `docs/ARCHITECTURE.md` — technical/deployment architecture.
12. `docs/VERIFICATION.md` — acceptance oracle and required evidence.
13. `docs/RESEARCH-2026-08-29.md` and dated research supplements — evidence/rationale; not authority over the contracts above.

## Visitor-first rule

Do not design from Lunowa's internal ontology outward.

For public marketing surfaces, first establish what a first-time visitor must recognize and understand. Internal labels such as `Managed`, `Needs You`, `Moment`, `Responsibility`, and `Attention Delegation` may appear only where their user-facing meaning is already clear.

A visually impressive candidate that repeatedly produces the wrong Product mental model is a failure.

## Reuse-first rule

Do not reinvent ordinary web mechanics when a mature, adaptable primitive exists.

Prefer existing/local/native/reusable components for generic layout and controls. Spend custom design/engineering effort on Lunowa-specific Product proof and semantics.

Current preferred production roles:

- Astro + Tailwind CSS 4: owned static production shell;
- shadcn/ui + Base UI: owned generic Product/app interaction primitives for new work;
- React islands: only where actual interaction requires them;
- Motion: accepted semantic Product-demo motion only;
- Relume / Tailwind Plus / Framer / Figma/Webflow ecosystems: reference and reusable structural sources, subject to current compatibility/licensing review.

Figma is a preferred editable visual-convergence medium only when write access exists. The workflow must remain executable through code/docs design tokens, component/reference inventories, responsive rules and state references when Figma write capability is unavailable.

Every reused component still requires Product-truth, accessibility, responsive, performance, dependency and license/provenance review.

Do not use decorative effect libraries as a shortcut to visual quality. Aceternity/Magic UI-style effects are exception-only because common glow/beam/3D/bento treatments can recreate generic AI-SaaS aesthetics.

## M05 experiment rule

Do not spend participant/sample budget on near-duplicate Hero layouts.

Current primary divergence is:

`P Product Proof baseline vs E Editorial Problem-First dark horse`.

The old A/C/D participant-facing comparison is retired. Existing Concept A raster output is only an unvalidated structural reference.

If a static direction is comprehension-eligible, test motion only when the temporal mechanism still needs additional proof. Keep unaided first impressions separate from aided/comparative discussion and bind findings to exact stimuli.

Small M05 rounds are directional qualitative evidence, not statistically powered conversion tests.

## AI-native delivery workflow

Use this loop:

`research/Product truth -> visitor contract -> mature reference/component harvesting -> editable design-system composition when available OR code/docs design-system authority -> P/E first-impression evidence -> optional isolated motion evidence -> implementation-grade visual authority -> scoped ACP/Codex implementation using approved reusable primitives -> real-browser verification -> correction -> independent full acceptance audit`.

- ChatGPT: research, Product/marketing synthesis, visitor/comprehension contracts, reuse strategy, design-system direction, independent review.
- Codex: implementation, tests, browser verification, build/deploy evidence, PR candidate construction.
- Figma when writable: editable design convergence and visual-oracle surface.
- GitHub: canonical durable task contracts and evidence.

Do not duplicate the full repository contract in long Codex prompts. Point Codex at the owning Issue + these docs.

## Generated-visual boundary

Raster image generation is exploratory, not the default precise homepage-design workflow and not authoritative.

Use image generation for mood exploration, illustration, campaign assets or genuinely novel visual concepts. Prefer editable composition or code-owned structured design specs for typography/layout/responsive/Product UI work.

Before any generated visual becomes evidence, verify:

- first-glance Product/category comprehension;
- consistency with Product truth;
- absence of invented functionality/security/performance claims;
- consistency with `DESIGN.md` and `VISITOR-JOURNEY.md`;
- a meaningful static state before relying on animation.

For long pages, do not rely on one compressed board if implementation-critical Product text/states are unreadable. Prefer coordinated readable section/state references plus an overview for page rhythm.

Do not cosmetically patch a failed visual prior if the failure came from the underlying design thesis or comprehension model.

## Review discipline

Independent review is against **current task contract × entire final cumulative candidate**, not only the latest patch.

On FAIL, complete the audit and record all known material blockers/corrections in one durable batch. Avoid one-defect-at-a-time micro-correction loops. If corrections repeatedly fail, analyze specification, oracle, architecture, decomposition, or verification gaps before another patch loop.

Immediate stop is reserved for security, destructive, or data-loss risk.