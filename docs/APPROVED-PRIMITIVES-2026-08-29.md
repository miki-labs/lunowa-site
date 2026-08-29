# Lunowa Approved Web Primitives — 2026-08-29

Status: implementation/design decision record. Re-check versions immediately before M20 execution. Product truth remains in `miki-thecat/lunowa`; this document does not grant Product semantics to any third-party library.

Read `docs/REUSE-STACK-AUDIT-2026-08-29.md` for the current evidence behind this decision.

## 1. Decision

Use a **code-owned, reuse-first stack**. Ordinary website and application mechanics should come from mature primitives when they fit. Custom engineering effort is reserved for Lunowa-specific Product proof and semantics.

Current preferred production stack:

- Astro — static-first shell and routing;
- Tailwind CSS 4 — design-token/style layer;
- React islands only where interactivity is necessary;
- shadcn/ui on the MIT-licensed `@base-ui/react` / `mui/base-ui` primitive layer — first-choice local interactive/app primitives for new work;
- Motion for React — only for accepted semantic state transitions;
- Playwright + axe/manual checks — browser/accessibility verification;
- Cloudflare Workers Static Assets — planned hosting, re-checked before implementation.

Current design/reference/reuse stack:

- native semantic HTML/CSS — first generic implementation choice;
- official shadcn registry ecosystem — preferred source of auditable local open blocks after core primitives;
- 7Ovr — first current open marketing-block candidate; free blocks are local source and MIT-0 per current docs;
- Tailark open registry — secondary MIT Base UI marketing-block source;
- Tailwind Plus — premium marketing-block benchmark/source only when a valid license exists;
- Relume — large-scale section/layout/reference discovery source;
- Figma — editable visual-oracle/design-system medium when write access is available;
- Webflow DevLink — optional visual-to-React experiment, not default runtime/design system;
- Framer — visual/reference ecosystem only until conflicting first-party portability documentation is reconciled;
- Image generation — mood/exploration only, not the primary web-layout authority.

## 2. Primitive selection order

For every ordinary UI need, choose the earliest adequate option:

1. existing accepted local Lunowa primitive;
2. native semantic HTML/CSS;
3. shadcn/ui + Base UI local source for generic interactive/app UI;
4. an individually audited open shadcn registry block, preferring current Base UI/Tailwind 4-compatible sources such as 7Ovr or Tailark;
5. licensed Tailwind Plus block when it is materially better and the project holds a valid license;
6. Relume/Figma structural reference adapted into the local system;
7. optional Webflow DevLink proof only for a specific visual-to-code need where it can beat the local path on quality/time without creating unacceptable style/runtime cost;
8. custom implementation only when Lunowa semantics, visual oracle, accessibility or performance require it;
9. decorative/effect libraries only by explicit exception.

Do not add a runtime dependency merely because a visual reference came from that ecosystem.

## 3. Why shadcn/Base UI is the default app primitive

As of 2026-07, shadcn/ui defaults new projects to Base UI while continuing to support Radix. shadcn officially supports Astro setup. The relevant Base UI project is `mui/base-ui` / `@base-ui/react`, which is MIT licensed and explicitly targets accessible unstyled React UI.

Use shadcn for things such as:

- disclosure/accordion;
- dialog/sheet/popover where actually needed;
- buttons and form-control composition;
- Product-demo sidebar/shell primitives;
- accessible interaction scaffolding.

Do not import a dashboard aesthetic wholesale. Lunowa's Product semantics and visual system remain local.

### Naming/provenance guard

`Base UI` is an overloaded name in the ecosystem. Any dependency/evidence must bind to the intended `@base-ui/react` / `mui/base-ui` source. Do not infer license or behavior from unrelated products with the same name.

## 4. Open shadcn registry boundary

The official shadcn directory currently exposes many community registries and explicitly warns that third-party code must be reviewed before installation.

Current preferred candidates:

### 4.1 7Ovr

- listed in the official shadcn registry directory;
- built on Base UI;
- installs blocks as local editable source;
- current docs state support for React frameworks including Astro;
- free blocks are MIT-0 per current docs.

Use for generic:
- Hero shell;
- header/mobile navigation;
- CTA;
- FAQ;
- footer;
- simple content/marketing section patterns.

Do not install full templates by default. Pull the smallest adequate block and audit it locally.

### 4.2 Tailark open registry

- MIT licensed;
- Base UI registry is the current default with Radix available separately;
- useful secondary source of shadcn marketing blocks.

Use selectively when native/7Ovr patterns do not fit.

### 4.3 Other registries

The registry directory is a discovery mechanism, not a trust list. A block is only admitted after:

- exact source/revision captured;
- license reviewed;
- dependencies reviewed;
- keyboard/focus/ARIA behavior checked;
- responsive/reflow behavior checked;
- decorative defaults removed if they conflict with `DESIGN.md`;
- Product semantics remain local.

## 5. Why Relume is reference-first, not runtime-first

Relume remains highly valuable for its large Figma/Webflow/React section library and rapid layout exploration. Its July 2026 Library MCP is directly aligned with avoiding AI hallucination of ordinary UI.

However current integration/dependency compatibility still needs per-component proof against Astro/Tailwind 4.

Therefore:

- APPROVED: use Relume to search/discover page structures, Figma components, desktop/mobile patterns and section composition;
- CONDITIONAL: copy/adapt an individual HTML/React structure only after compatibility, dependencies, accessibility and license/provenance are reviewed;
- NOT DEFAULT: install a broad Relume React/Tailwind runtime/preset before an exact compatibility proof.

## 6. Tailwind Plus boundary

Tailwind Plus is a strong production-oriented premium source of generic marketing blocks. Current official material targets the latest Tailwind 4 line and permits commercial SaaS/end-product use under a valid license.

A license is **not** required for Lunowa's architecture to progress.

Use only when:

- a valid project/user license exists;
- the selected block is materially better or saves meaningful work compared with native/open-registry options;
- redistribution constraints are respected.

For ordinary interactive behavior, do not add Tailwind Plus Elements solely because an HTML example uses it if native HTML or a local Base UI primitive is sufficient.

## 7. Webflow DevLink boundary

Webflow materially changed in 2026: DevLink Export can emit local self-contained React/TSX components from visual Webflow components and can work with external React codebases.

This makes Webflow a legitimate **optional visual-to-React experiment** rather than merely a hosted no-code reference.

It is not current default because:

- exported components bring Webflow primitives/scoped CSS rather than the Tailwind token system;
- a second styling/build model raises complexity;
- paid plan/access requirements add cost;
- whole-site export still omits important hosted features such as CMS/forms/localized content/code-component functionality.

Use only when a scoped experiment can prove a significant advantage over local shadcn/Tailwind composition.

## 8. Framer boundary

Current first-party Framer Help is materially inconsistent about full-site self-host/export portability: one current page says HTML self-host export is unsupported, while another states that full HTML/CSS/JS/assets can be downloaded and moved.

Until Framer clarifies this or we verify the actual product behavior directly:

- use Framer for visual/template benchmarking and inspiration;
- do not base production architecture, migration safety or code-ownership claims on Framer portability.

## 9. Motion boundary

Motion is not a default decoration dependency for ordinary sections.

Use it only when accepted M05/M10 evidence requires temporal Product proof such as:

`intermediate reply -> still no user action -> material outcome -> attention required`.

Configure Reduced Motion as an acceptance path. Prefer no motion over decorative motion.

## 10. Figma access boundary

Figma is the preferred editable visual-oracle medium **when edit/write capability is available**. The currently connected account was observed on 2026-08-29 as a Starter plan with a View seat, so the workflow must not depend on Figma writes unless that capability is confirmed.

If Figma edit access is unavailable, preserve equivalent authority durably in code/docs:

- design tokens;
- section/component inventory;
- reference screenshots/links;
- responsive rules;
- Product state references;
- exact copy;
- provenance/license inventory.

Lack of Figma write access is not a reason to fall back to raster-only ImageGen authority.

## 11. Design-token authority

Use a small vendor-neutral semantic token source for M10, aligned where practical with the stable Design Tokens Community Group 2025.10 format.

Project the accepted tokens into Tailwind 4/CSS variables using `@theme`/CSS custom properties.

Token categories should remain intentionally small until the design requires more:

- semantic colors;
- typography roles;
- spacing scale;
- container widths/breakpoints;
- radius/border/shadow;
- focus ring;
- motion duration/easing only if motion is accepted.

Do not build an enterprise token transformation pipeline merely because the standard exists.

## 12. Reuse provenance requirement

For every materially reused source, record:

- source/product and component/reference name;
- retrieval URL/reference/date;
- exact registry/revision when practical;
- license basis;
- whether code is copied, structure is adapted, or only visual inspiration is used;
- modifications;
- added runtime dependencies;
- accessibility/responsive/reduced-motion verification performed.

A copied primitive inherits no trust merely from its source.

## 13. Explicit non-defaults

Do not default to:

- Aceternity/Magic UI-style decorative effect libraries;
- generic bento/card walls;
- parallax/background particles/glowing orbs;
- GSAP/Rive/Lottie for ordinary marketing movement;
- full Framer/Webflow production hosting merely for design convenience;
- large third-party design systems that force Product semantics into their ontology;
- whole-page third-party templates when a few audited blocks suffice.

These may be introduced only by a concrete accepted requirement and local verification.

## 14. M20 verification checklist

Immediately before implementation starts:

1. re-check current Astro/Tailwind/shadcn/Base UI/Motion stable compatibility;
2. bind Base UI dependency to the intended `mui/base-ui` provenance;
3. audit any open-registry block before installation and record license/revision;
4. confirm Tailwind Plus license if any Tailwind Plus source will be used;
5. confirm any Relume component's current version/dependencies before copying code;
6. if Webflow DevLink is proposed, run a scoped code-quality/bundle/accessibility integration proof before adoption;
7. freeze local design tokens from M10 authority;
8. verify semantic HTML first and hydration only where needed;
9. verify keyboard/focus, mobile/reflow, reduced motion and Japanese/English representative strings;
10. keep exact Product-truth review separate from component-level technical review.

## 15. Decision summary

The project should look professionally conventional in generic web mechanics and distinctive in the actual Lunowa Product behavior.

> Reuse the shell. Own the meaning.
