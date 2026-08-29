# AGENTS.md

## Repository purpose

`miki-labs/lunowa-site` owns the public Lunowa marketing website.

It is a **projection of Product truth**, not the Product authority. The canonical Product authority remains in `miki-thecat/lunowa`, especially `docs/product/PRODUCT.md`, `docs/product/PRODUCT-CONTENT.md`, Responsibility semantics, and canonical design contracts.

This repository must not invent Product semantics, supported capabilities, pricing, customer counts, testimonials, security certifications, performance claims, or validated ICP conclusions.

## Read first

Before implementation or review, read:

1. `docs/CURRENT.md` — current execution router and status.
2. `docs/VISITOR-JOURNEY.md` — first-time visitor mental-model sequence and comprehension oracle.
3. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — current component/template/Figma reuse strategy.
4. `docs/FIRST-IMPRESSION-VALIDATION.md` — current M05 research protocol.
5. `docs/HERO-CONCEPTS-M05.md` — current P/E exploration contract; retired A/C/D variants are not the active participant plan.
6. `docs/M05-WIREFRAMES.md` — internal structural reference only.
7. `docs/HOMEPAGE.md` — homepage projection, copy hierarchy, truth boundaries.
8. `docs/DESIGN.md` — visual direction and anti-patterns.
9. `docs/MOTION.md` — semantic motion contract.
10. `docs/ARCHITECTURE.md` — technical/deployment architecture.
11. `docs/VERIFICATION.md` — acceptance oracle and required evidence.
12. `docs/RESEARCH-2026-08-29.md` and dated research supplements — evidence/rationale; not authority over the contracts above.

## Visitor-first rule

Do not design from Lunowa's internal ontology outward.

For public marketing surfaces, first establish what a first-time visitor must recognize and understand. Internal labels such as `Managed`, `Needs You`, `Moment`, `Responsibility`, and `Attention Delegation` may appear only where their user-facing meaning is already clear.

A visually impressive candidate that repeatedly produces the wrong Product mental model is a failure.

## Reuse-first rule

Do not reinvent ordinary web mechanics when a mature, adaptable primitive exists.

Prefer existing/local/native/reusable components for generic layout and controls. Spend custom design/engineering effort on Lunowa-specific Product proof and semantics.

Current preferred roles:

- Relume / Tailwind Plus / Framer / Figma ecosystem: reference and reusable structural primitives;
- Figma: editable design-system composition and implementation-grade visual oracle;
- shadcn/ui-style local components: generic Product/app primitives;
- Astro + Tailwind: owned static production shell;
- React + Motion: accepted interactive Product demo only.

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

`research/Product truth -> visitor contract -> mature reference/component harvesting -> Figma design-system composition -> P/E first-impression evidence -> optional isolated motion evidence -> implementation-grade visual oracle -> scoped ACP/Codex implementation using approved reusable primitives -> real-browser verification -> correction -> independent full acceptance audit`.

- ChatGPT: research, Product/marketing synthesis, visitor/comprehension contracts, reuse strategy, design-system direction, Figma collaboration, independent review.
- Codex: implementation, tests, browser verification, build/deploy evidence, PR candidate construction.
- Figma: editable design convergence and visual oracle surface.
- GitHub: canonical durable task contracts and evidence.

Do not duplicate the full repository contract in long Codex prompts. Point Codex at the owning Issue + these docs.

## Generated-visual boundary

Raster image generation is exploratory, not the default precise homepage-design workflow and not authoritative.

Use image generation for mood exploration, illustration, campaign assets or genuinely novel visual concepts. Prefer editable Figma composition for typography/layout/responsive/Product UI work.

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