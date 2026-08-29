# AGENTS.md

## Repository purpose

`miki-labs/lunowa-site` owns the public Lunowa marketing website.

It is a **projection of Product truth**, not the Product authority. The canonical Product authority remains in `miki-thecat/lunowa`, especially `docs/product/PRODUCT.md`, `docs/product/PRODUCT-CONTENT.md`, Responsibility semantics, and canonical design contracts.

This repository must not invent Product semantics, supported capabilities, pricing, customer counts, testimonials, security certifications, performance claims, or validated ICP conclusions.

## Read first

Before implementation or review, read:

1. `docs/CURRENT.md` — current execution router and status.
2. `docs/HOMEPAGE.md` — homepage information architecture, copy hierarchy, truth boundaries.
3. `docs/DESIGN.md` — visual direction and anti-patterns.
4. `docs/MOTION.md` — semantic motion contract.
5. `docs/ARCHITECTURE.md` — technical/deployment architecture.
6. `docs/VERIFICATION.md` — acceptance oracle and required evidence.
7. `docs/RESEARCH-2026-08-29.md` — dated evidence/rationale; not authority over the contracts above.

## AI-native delivery workflow

Use this loop:

`research/Product truth -> IA/copy -> visual exploration -> selected visual oracle -> scoped implementation -> real-browser verification -> correction -> independent full acceptance audit`.

- ChatGPT: research, Product/marketing synthesis, design contracts, visual direction, independent review.
- Codex: implementation, tests, browser verification, build/deploy evidence, PR candidate construction.
- GitHub: canonical durable task contracts and evidence.

Do not duplicate the full repository contract in long Codex prompts. Point Codex at the owning Issue + these docs.

## Review discipline

Independent review is against **current task contract × entire final cumulative candidate**, not only the latest patch.

On FAIL, complete the audit and record all known material blockers/corrections in one durable batch. Avoid one-defect-at-a-time micro-correction loops. If corrections repeatedly fail, analyze specification, oracle, architecture, decomposition, or verification gaps before another patch loop.

Immediate stop is reserved for security, destructive, or data-loss risk.