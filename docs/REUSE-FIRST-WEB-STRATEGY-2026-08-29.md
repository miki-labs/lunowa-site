# Lunowa Reuse-First Web Strategy — 2026-08-29

Status: dated architecture/design decision support. This document does not supersede Product truth or the visual/comprehension contracts. It constrains how we avoid unnecessary reinvention when selecting design/build primitives.

Read `docs/REUSE-STACK-AUDIT-2026-08-29.md` for the latest evidence and corrections.

## 1. Decision thesis

Do not design or implement ordinary marketing-site structure from first principles when a mature, accessible, customizable existing primitive is available.

For Lunowa, originality should concentrate on the things that are actually Product-specific:

- the `Reply != Done` interaction story;
- believable Lunowa Product UI;
- the transition from quiet monitoring to user attention;
- Moment / Source / trust semantics;
- Lunowa copy, typography, spacing, color discipline and motion timing.

Generic site mechanics should be reused where possible:

- header/nav;
- responsive containers/grids;
- section wrappers;
- CTA/button primitives;
- FAQ/disclosure patterns;
- footer;
- form primitives;
- basic app-shell/sidebar/dialog primitives;
- accessibility/focus behavior;
- common responsive patterns.

This is **reuse-first, not template-first**. A template/component is a starting primitive, not Product or visual authority.

## 2. Why polished SaaS sites often converge visually

No evidence supports one secret tool used by all high-end sites. Convergence is better explained by several overlapping forces:

1. mature web conventions and prototypicality reduce orientation cost;
2. design systems/component libraries standardize spacing, typography, layout and responsive behavior;
3. Framer/Webflow/Figma/Relume/Tailwind/shadcn ecosystems expose common high-quality Hero/feature/FAQ/CTA structures;
4. AI website generators inherit and reproduce high-frequency design patterns;
5. many teams intentionally start from reusable blocks, then customize brand and Product proof.

Current examples of this tooling convergence:

- Relume exposes 1,000+ components and a 2026 Library MCP for real component retrieval;
- Tailwind Plus provides 500+ professional responsive components and templates;
- shadcn/ui provides local copy/paste primitives and a large registry ecosystem;
- the official shadcn registry directory currently lists hundreds of third-party registries;
- Webflow DevLink can now move components between a visual canvas and local React code;
- Figma's 2026 code layers/Make/Codex workflows increasingly combine design and code;
- Framer remains a major polished visual/template ecosystem;
- Motion provides reusable accessible React motion primitives.

## 3. Core production role split

### 3.1 Native HTML/CSS — first generic implementation choice

If a section needs no meaningful client state, prefer semantic Astro/HTML/CSS before adding a component runtime.

Use for:

- section/container wrappers;
- editorial content;
- simple CTA/footer;
- simple disclosure where native semantics are sufficient;
- layout and typography structure.

### 3.2 shadcn/ui + Base UI — preferred generic Product/app primitive source

shadcn officially supports Astro and defaults new projects to Base UI as of 2026-07 while retaining Radix support.

The intended Base UI provenance is the MIT `@base-ui/react` / `mui/base-ui` project.

Use for:

- app-shell primitives inside the Lunowa Product demo;
- buttons/forms/dialog/sheet/popover/sidebar/disclosure where semantically appropriate.

Do **not** use a stock shadcn dashboard as the Lunowa Product visual.

### 3.3 Open shadcn registries — preferred generic marketing-block layer

The official shadcn registry directory provides a broad discovery layer, but explicitly requires local review of third-party code.

Current first candidates:

- **7Ovr** — Base UI, local source, current docs state Astro/React-framework compatibility; free blocks MIT-0;
- **Tailark open registry** — MIT, Base UI default path, marketing-focused blocks.

Use for:

- Hero shell;
- simple header/mobile nav;
- CTA;
- FAQ;
- footer;
- generic content/marketing structures.

Install only the smallest useful block. Do not adopt whole templates by default.

### 3.4 Tailwind Plus — premium benchmark/source, not requirement

Strengths:

- 500+ professionally designed responsive components;
- current Tailwind 4 line;
- React/Vue/HTML examples;
- commercial SaaS end products permitted under license.

Use only if:

- a valid license exists;
- the selected block materially improves quality or saves enough work versus native/open-registry options.

License absence must never block Lunowa.

### 3.5 Relume — preferred broad structural/reference discovery source

Relume's 2026 Library MCP is directly aligned with the goal of retrieving real ordinary UI instead of asking an AI model to hallucinate it.

Use for:

- section/layout discovery;
- alternative Hero/FAQ/footer composition;
- desktop/mobile structural reference;
- optional exact code starting point after compatibility/license/dependency review.

Do not install a broad Relume runtime/preset by default.

### 3.6 Webflow DevLink — optional visual-to-React experiment

Webflow materially changed in 2026. DevLink Export can produce local self-contained React/TSX components from Webflow visual components without a build-time Webflow connection.

This is technically relevant, but not the default because:

- exported components use Webflow primitives/scoped CSS rather than Lunowa's Tailwind token system;
- it creates a second design/style system;
- paid plan/access requirements add cost;
- whole-site export still omits important hosted functionality.

Use only if a scoped proof shows meaningful quality/time benefit over local blocks.

### 3.7 Figma Design / Figma Make — preferred editable convergence surface when writable

Figma's 2026 direction strongly combines design and code through Codex integration, Make/local-code work and code layers.

Use for:

- assembling/refining visual authority;
- testing typography, spacing, layout and responsive composition;
- design-system exploration;
- implementation handoff.

However Figma is not a hard dependency. The currently connected account was observed as Starter/View, so GitHub/code/docs must be able to carry equivalent structured authority.

### 3.8 Framer — strong visual/reference ecosystem; production portability currently ambiguous

Framer remains excellent for:

- template/section inspiration;
- polished responsive composition benchmarking;
- rapid visual exploration.

But current first-party Help contains contradictory statements about full-site HTML/CSS/JS self-host/export portability.

Therefore:

- do not use Framer portability as an architecture assumption;
- keep Framer reference-only until actual product behavior or clarified official documentation resolves the contradiction.

### 3.9 Motion for React — semantic motion only

Use for accepted Product-state transitions and interaction feedback after static comprehension is already strong.

Respect Reduced Motion. Motion is not a reason to add JavaScript to static sections.

### 3.10 Aceternity / Magic UI — optional effect source, not foundation

These catalogs contain many high-frequency glow/beam/3D/bento effects that can push Lunowa back toward generic AI-SaaS aesthetics.

Default: **do not use** unless a specific component performs semantic work better than simpler primitives.

## 4. Recommended Lunowa stack after G7

```text
Astro static shell
+ Tailwind CSS 4 token/style layer
+ native semantic HTML/CSS
+ shadcn/ui / @base-ui/react where interactivity is needed
+ audited open shadcn marketing blocks where useful
+ optional Tailwind Plus if licensed
+ React island only for accepted Product demo
+ Motion only for accepted semantic transitions
+ Cloudflare Workers Static Assets
```

Source hierarchy for ordinary UI:

```text
1. existing local Lunowa component
2. proven accessible native HTML/CSS pattern
3. shadcn/ui + Base UI primitive
4. audited open shadcn registry block
   - 7Ovr first current candidate
   - Tailark second current candidate
5. Tailwind Plus if licensed + materially superior
6. Relume structural/reference candidate
7. optional Webflow DevLink proof for a specific hard visual-to-code case
8. custom Lunowa component
9. decorative/effect libraries only by explicit exception
```

The hierarchy is not absolute: choose the simplest primitive that satisfies the accepted requirement with the least runtime/dependency cost.

## 5. Design-token strategy

Do not make a design tool the sole authority for tokens.

Use a small vendor-neutral semantic token source aligned where practical with the stable Design Tokens Community Group 2025.10 format, then project accepted values into Tailwind 4 `@theme` / CSS variables.

Start only with what Lunowa needs:

- semantic colors;
- typography roles;
- spacing;
- containers/breakpoints;
- radius/border/shadow;
- focus ring;
- motion values only if motion survives M05/M10.

Avoid enterprise-scale token infrastructure until actual design complexity requires it.

## 6. Revised design workflow

Replace the old image-generation-heavy workflow with:

```text
Product truth / visitor journey
        ↓
reuse-stack audit
        ↓
semantic token source
        ↓
small generic shell shortlist from native/shadcn/open registries/premium refs
        ↓
P Product Proof + E Editorial Problem-First composition
        ↓
mid/high-fidelity visitor-comprehension check
        ↓
freeze structured implementation-grade visual authority
        ↓
ACP/Codex implementation using audited reusable primitives
        ↓
Playwright/browser/accessibility/performance verification
```

Figma can be the editable canvas when write access exists; code/docs can carry equivalent authority when it does not.

Image generation remains useful for mood exploration, campaign art, illustration and genuinely novel visual concepts. It is no longer the preferred tool for precise marketing-page UI composition with Japanese text.

## 7. What remains custom

Do not outsource these to generic template logic:

- Hero Product Proof content hierarchy;
- unresolved-matter/monitoring semantics;
- intermediate reply with no attention event;
- outcome arrival -> attention-required transition;
- Moment/Source trust presentation;
- current truth/availability language;
- distinctive Lunowa semantic tokens;
- final responsive simplification of the Product demo.

This is the correct place to spend design/engineering effort.

## 8. Acceptance rule for reused components

A reused component is accepted only if it passes all of:

1. fits the current visitor-question/job;
2. does not alter Product truth;
3. does not introduce generic AI-SaaS visual priors that weaken Lunowa;
4. accessible semantics and keyboard behavior are acceptable or corrected;
5. reduced-motion path exists where relevant;
6. responsive behavior survives 320px and localization;
7. no unnecessary runtime dependency or hydration is introduced;
8. license permits the intended end product/repository use;
9. exact source/version/provenance is recorded when required;
10. final visual result is independently audited as part of the cumulative candidate.

Reuse reduces implementation effort; it does not waive verification.
