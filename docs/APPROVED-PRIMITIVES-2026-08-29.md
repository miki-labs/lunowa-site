# Lunowa Approved Web Primitives — 2026-08-29

Status: implementation/design decision record. Re-check versions immediately before M20 execution. Product truth remains in `miki-thecat/lunowa`; this document does not grant Product semantics to any third-party library.

## 1. Decision

Use a **code-owned, reuse-first stack**. Ordinary website and application mechanics should come from mature primitives when they fit. Custom engineering effort is reserved for Lunowa-specific Product proof and semantics.

Current preferred production stack:

- Astro — static-first shell and routing;
- Tailwind CSS 4 — design-token/style layer;
- React islands only where interactivity is necessary;
- shadcn/ui on Base UI — first-choice local interactive/app primitives for new work;
- Motion for React — only for accepted semantic state transitions;
- Playwright + axe/manual checks — browser/accessibility verification;
- Cloudflare Workers Static Assets — planned hosting, re-checked before implementation.

Current design/reference stack:

- Figma — editable visual-oracle/design-system medium when edit access is available;
- Relume — preferred large-scale section/layout/Figma reference discovery source;
- Tailwind Plus — preferred premium marketing-block source if a valid license is available;
- Framer/Webflow/Figma Sites — reference/template discovery, not production authority by default;
- Image generation — mood/exploration only, not the primary web-layout authority.

## 2. Primitive selection order

For every ordinary UI need, choose the earliest adequate option:

1. existing accepted local Lunowa primitive;
2. native semantic HTML/CSS;
3. shadcn/ui + Base UI local source for generic interactive/app UI;
4. licensed Tailwind Plus block for generic marketing structure when it saves meaningful work;
5. Relume/Figma structural reference adapted into the local system;
6. custom implementation only when Lunowa semantics, visual oracle, accessibility or performance require it.

Do not add a runtime dependency merely because a visual reference came from that ecosystem.

## 3. Why shadcn/Base UI is the default app primitive

As of 2026-07, shadcn/ui defaults new projects to Base UI while continuing to support Radix. shadcn officially supports an Astro project template/setup path. This aligns with Lunowa's preference to own source locally rather than depend on an opaque hosted component runtime.

Use shadcn for things such as:

- disclosure/accordion;
- dialog/sheet/popover where actually needed;
- buttons and form-control composition;
- Product-demo sidebar/shell primitives;
- accessible interaction scaffolding.

Do not import a dashboard aesthetic wholesale. Lunowa's Product semantics and visual system remain local.

## 4. Why Relume is reference-first, not runtime-first

Relume remains highly valuable for its large Figma/Webflow/React section library and rapid layout exploration. However, current public React examples/docs still show React 18 and Tailwind 3.x-era integration/config patterns on many components. Lunowa's planned implementation uses current Astro + Tailwind 4.

Therefore:

- APPROVED: use Relume to search/discover page structures, Figma components, desktop/mobile patterns and section composition;
- CONDITIONAL: copy/adapt an individual HTML/React structure only after compatibility, dependencies, accessibility and license/provenance are reviewed;
- NOT DEFAULT: install Relume's full React/Tailwind runtime/preset as a foundational dependency before a Tailwind 4 compatibility proof.

## 5. Tailwind Plus boundary

Tailwind Plus is a strong production-oriented source of generic marketing blocks because current components target the latest Tailwind 4 line and its license permits use in commercial SaaS/end products. A valid license is required and source/components may not be redistributed as a component library.

Use only if the user/project actually holds a valid license at implementation time. Absence of a license must never block the project; equivalent semantic HTML/local primitives remain the fallback.

## 6. Motion boundary

Motion is not a default decoration dependency for ordinary sections.

Use it only when accepted M05/M10 evidence requires temporal Product proof such as:

`intermediate reply -> still no user action -> material outcome -> attention required`.

Configure reduced-motion behavior as an acceptance path. Prefer no motion over decorative motion.

## 7. Figma access boundary

Figma is the preferred editable visual-oracle medium **when edit/write capability is available**. The currently connected account was observed on 2026-08-29 as a Starter plan with a View seat, so the workflow must not depend on Figma writes unless that capability is confirmed.

If Figma edit access is unavailable, preserve the same design system durably in code/docs:

- design tokens;
- section/component inventory;
- reference screenshots/links;
- responsive rules;
- Product state references;
- exact copy;
- provenance/license inventory.

Lack of Figma write access is not a reason to fall back to raster-only ImageGen authority.

## 8. Reuse provenance requirement

For every materially reused source, record:

- source/product and component/reference name;
- retrieval URL/reference/date;
- license basis;
- whether code is copied, structure is adapted, or only visual inspiration is used;
- modifications;
- added runtime dependencies;
- accessibility/responsive/reduced-motion verification performed.

A copied primitive inherits no trust merely from its source.

## 9. Explicit non-defaults

Do not default to:

- Aceternity/Magic UI-style decorative effect libraries;
- generic bento/card walls;
- parallax/background particles/glowing orbs;
- GSAP/Rive/Lottie for ordinary marketing movement;
- full Framer/Webflow production hosting merely for design convenience;
- large third-party design systems that force Product semantics into their ontology.

These may be introduced only by a concrete accepted requirement and local verification.

## 10. M20 verification checklist

Immediately before implementation starts:

1. re-check current Astro/Tailwind/shadcn/Base UI/Motion stable compatibility;
2. confirm Tailwind Plus license if any Tailwind Plus source will be used;
3. confirm any Relume component's current version/dependencies before copying code;
4. freeze local design tokens from M10 authority;
5. document borrowed primitives and licenses;
6. verify semantic HTML first and hydration only where needed;
7. verify keyboard/focus, mobile/reflow, reduced motion and Japanese/English representative strings;
8. keep exact Product-truth review separate from component-level technical review.

## 11. Decision summary

The project should look professionally conventional in generic web mechanics and distinctive in the actual Lunowa Product behavior.

> Reuse the shell. Own the meaning.
