# AGENTS.md

## Repository purpose

`miki-labs/lunowa-site` owns the public Lunowa marketing website.

It is a **projection of Product truth**, not the Product authority. The canonical Product authority remains in `miki-thecat/lunowa`, especially `docs/product/PRODUCT.md`, `docs/product/PRODUCT-CONTENT.md`, Responsibility semantics, and canonical design contracts.

This repository must not invent Product semantics, supported capabilities, pricing, customer counts, testimonials, security certifications, performance claims, or validated ICP conclusions.

## Read first

Before implementation or review, read:

1. `docs/CURRENT.md` — current execution router and status.
2. `docs/VISITOR-JOURNEY.md` — first-time visitor mental-model sequence and comprehension oracle.
3. `docs/REUSE-STACK-AUDIT-2026-08-29.md` — latest reuse/tool/portability audit.
4. `docs/APPROVED-PRIMITIVES-2026-08-29.md` — approved primitive hierarchy and provenance boundaries.
5. `docs/REUSE-COMPONENT-SHORTLIST-2026-08-29.md` — curated generic component-pattern shortlist.
6. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — reuse-first rationale and ecosystem roles.
7. `docs/M10-TOKEN-CONTRACT.md` — provisional semantic token structure; roles are authoritative before exact M10 values freeze.
8. `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md` — selected generic homepage shell; do not restart broad template exploration without new evidence.
9. `docs/M05-P-E-STIMULUS-CONTRACT.md` — exact P/E participant-stimulus construction and hidden-variable controls.
10. `docs/stimuli/MANIFEST.md` — accepted exact S05 artifact/blob/token/provenance binding.
11. `docs/M05-SESSION-PACKET.md` — current participant assignment, moderator, evidence and coding protocol for M05 #10.
12. `docs/FIRST-IMPRESSION-VALIDATION.md` — current M05 research-method authority.
13. `docs/HERO-CONCEPTS-M05.md` — current P/E exploration rationale; retired A/C/D variants are not the active participant plan.
14. `docs/M05-WIREFRAMES.md` — internal structural reference only.
15. `docs/HOMEPAGE.md` — homepage projection, copy hierarchy, truth boundaries.
16. `docs/DESIGN.md` — visual direction and anti-patterns.
17. `docs/MOTION.md` — semantic motion contract.
18. `docs/ARCHITECTURE.md` — technical/deployment architecture.
19. `docs/VERIFICATION.md` — acceptance oracle and required evidence.
20. `docs/RESEARCH-2026-08-29.md` and dated research supplements — evidence/rationale; not authority over the contracts above.

## Current execution boundary

S05 Issue #14 is completed. M05 Issue #10 is the current participant-research task.

Use only the exact accepted stimulus set bound in `docs/stimuli/MANIFEST.md`. If any accepted artifact changes, the prior S05 acceptance becomes stale and a new pre-research audit is required before participant exposure.

M05 #10 owns **real participant evidence**, not visual redesign. Do not silently patch stimuli inside participant sessions. ChatGPT simulation cannot substitute for human evidence.

## Visitor-first rule

Do not design from Lunowa's internal ontology outward.

For public marketing surfaces, first establish what a first-time visitor must recognize and understand. Internal labels such as `Managed`, `Needs You`, `Moment`, `Responsibility`, and `Attention Delegation` may appear only where their user-facing meaning is already clear.

A visually impressive candidate that repeatedly produces the wrong Product mental model is a failure.

## Reuse-first rule

Do not reinvent ordinary web mechanics when a mature, adaptable primitive exists.

Current selection order:

1. accepted local Lunowa primitive;
2. native semantic HTML/CSS;
3. shadcn/ui + intended MIT `@base-ui/react` / `mui/base-ui` primitive;
4. audited open shadcn registry block — current first candidates 7Ovr then Tailark;
5. Tailwind Plus if licensed and materially superior;
6. Relume/reference adaptation;
7. optional Webflow DevLink proof for a specific visual-to-React need;
8. custom Lunowa implementation;
9. decorative/effect libraries only by exception.

Community registries are not trust authorities. Review exact code, dependencies, license, accessibility and responsive behavior before adoption.

Do not use a full third-party template merely because it exists. Prefer the smallest adequate block.

### Selected generic shell

`docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md` is the current generic shell decision.

Do not restart broad Hero/navbar/FAQ/footer exploration by default. Current shell family is:

`minimal header -> category/value -> centered/near-centered Hero -> large Product proof -> editorial one-job sections -> Product/trust proof -> availability -> minimal FAQ -> plain CTA -> minimal footer`.

Generic shell decisions should stay shared between P and E where practical. Product semantics and acquisition hierarchy are the experiment; random template aesthetics are not.

### Current tool boundaries

- Figma is preferred for editable convergence when write access exists, but it is not a hard dependency.
- Framer remains visual/reference-only for architecture decisions until its conflicting current first-party export/self-host documentation is reconciled.
- Webflow DevLink is technically viable as a scoped visual-to-React experiment, but it is not the default because it introduces Webflow primitives/scoped CSS beside the Tailwind system.
- Image generation is exploratory, not precise webpage authority.
- Motion exists only for semantic Product change/feedback and must respect Reduced Motion.

## Design-token rule

`docs/M10-TOKEN-CONTRACT.md` defines the current semantic token roles. Before M10 freeze, **semantic roles are authoritative while exact aesthetic values remain provisional**.

Preserve a small vendor-neutral semantic token source for M10 where practical, aligned with the stable Design Tokens Community Group 2025.10 format, and project it into Tailwind CSS 4/CSS variables.

Do not create an oversized enterprise token pipeline. Token complexity must be justified by actual design surface.

Third-party blocks must map into Lunowa tokens; do not let an imported block's palette, font, radius or shadow system silently become authority.

## M05 experiment rule

Do not spend participant/sample budget on near-duplicate Hero layouts.

Current primary divergence is:

`P Product Proof baseline vs E Editorial Problem-First dark horse`.

The old A/C/D participant-facing comparison is retired. Existing Concept A raster output is only an unvalidated historical structural reference.

P and E use the accepted common shell, token snapshot, CTA treatment, canonical quotation scenario, Product-stage geometry and static-only condition bound in `docs/stimuli/MANIFEST.md`. The intended variable is the acquisition hierarchy above the common Product stage.

Execute participant research according to `docs/M05-SESSION-PACKET.md`. Keep unaided first impressions separate from aided/comparative discussion and bind findings to exact stimuli.

If a static direction is comprehension-eligible, test motion only when the temporal mechanism still needs additional proof.

Small M05 rounds are directional qualitative evidence, not statistically powered conversion tests or market validation.

## AI-native delivery workflow

Use this loop:

`research/Product truth -> visitor contract -> reuse-stack audit -> semantic tokens + selected generic shell -> accepted P/E stimuli -> real participant comprehension evidence -> optional isolated motion evidence -> structured visual authority -> scoped ACP/Codex implementation -> real-browser verification -> correction -> independent full acceptance audit`.

- ChatGPT: research, Product/marketing synthesis, visitor/comprehension contracts, reuse strategy, token/design direction, research synthesis, independent review.
- Human participants: first-impression evidence that cannot be simulated by the model.
- Codex: implementation, tests, browser verification, build/deploy evidence, PR candidate construction.
- Figma when writable: editable design convergence and visual reference surface.
- GitHub: canonical durable task contracts, tokens/specs, provenance and evidence.

Do not duplicate the full repository contract in long Codex prompts. Point Codex at the owning Issue + these docs.

## Generated-visual boundary

Raster image generation is exploratory, not the default precise homepage-design workflow and not authoritative.

Use image generation for mood exploration, illustration, campaign assets or genuinely novel visual concepts. Prefer editable/code-owned structure for typography/layout/responsive/Product UI work.

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
