# AGENTS.md

## Repository purpose

`miki-labs/lunowa-site` owns the public Lunowa marketing website.

It is a **projection of Product truth**, not the Product authority. The canonical Product authority remains in `miki-thecat/lunowa`, especially `docs/product/PRODUCT.md`, `docs/product/PRODUCT-CONTENT.md`, Responsibility semantics, and canonical design contracts.

This repository must not invent Product semantics, supported capabilities, pricing, customer counts, testimonials, security certifications, performance claims, or validated ICP conclusions.

## Read first

Before implementation or review, read:

1. `docs/CURRENT.md` — current execution router and status.
2. `docs/VISITOR-JOURNEY.md` — first-time visitor mental-model sequence and comprehension oracle.
3. `docs/HOMEPAGE.md` — homepage projection, copy hierarchy, truth boundaries.
4. `docs/DESIGN.md` — visual direction and anti-patterns.
5. `docs/MOTION.md` — semantic motion contract.
6. `docs/ARCHITECTURE.md` — technical/deployment architecture.
7. `docs/VERIFICATION.md` — acceptance oracle and required evidence.
8. `docs/RESEARCH-2026-08-29.md` — dated evidence/rationale; not authority over the contracts above.

## Visitor-first rule

Do not design from Lunowa's internal ontology outward.

For public marketing surfaces, first establish what a first-time visitor must recognize and understand. Internal labels such as `Managed`, `Needs You`, `Moment`, `Responsibility`, and `Attention Delegation` may appear only where their user-facing meaning is already clear.

A visually impressive candidate that repeatedly produces the wrong Product mental model is a failure.

## AI-native delivery workflow

Use this loop:

`research/Product truth -> visitor contract -> IA/copy -> materially different visual exploration -> first-impression comprehension evidence -> selected visual oracle -> scoped implementation -> real-browser verification -> correction -> independent full acceptance audit`.

- ChatGPT: research, Product/marketing synthesis, visitor/comprehension contracts, design contracts, visual direction, independent review.
- Codex: implementation, tests, browser verification, build/deploy evidence, PR candidate construction.
- GitHub: canonical durable task contracts and evidence.

Do not duplicate the full repository contract in long Codex prompts. Point Codex at the owning Issue + these docs.

## Generated-visual boundary

Generated visuals are exploratory, not authoritative.

Before any generated image becomes a visual oracle, verify:

- first-glance Product/category comprehension;
- consistency with Product truth;
- absence of invented functionality/security/performance claims;
- consistency with `DESIGN.md` and `VISITOR-JOURNEY.md`;
- a meaningful static state before relying on animation;
- directionally acceptable first-impression evidence when required by M05/M10.

Do not cosmetically patch a failed visual prior if the failure came from the underlying design thesis or comprehension model.

## Review discipline

Independent review is against **current task contract × entire final cumulative candidate**, not only the latest patch.

On FAIL, complete the audit and record all known material blockers/corrections in one durable batch. Avoid one-defect-at-a-time micro-correction loops. If corrections repeatedly fail, analyze specification, oracle, architecture, decomposition, or verification gaps before another patch loop.

Immediate stop is reserved for security, destructive, or data-loss risk.