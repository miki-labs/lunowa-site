# Lunowa Reuse-First Web Strategy — 2026-08-29

Status: dated architecture/design decision support. This document does not supersede Product truth or the visual/comprehension contracts. It constrains how we avoid unnecessary reinvention when selecting design/build primitives.

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
3. Framer/Webflow/Figma/Relume/Tailwind ecosystems expose common high-quality Hero/feature/FAQ/CTA structures;
4. AI website generators inherit and reproduce high-frequency design patterns;
5. many teams intentionally start from reusable blocks, then customize brand and Product proof.

Current examples of this tooling convergence:

- Framer AI can generate editable pages/sections/copy/visuals and has a large template marketplace;
- Webflow AI Site Builder creates multi-page sites on a reusable Flowkit design system;
- Figma Sites provides responsive pre-built blocks and custom interactions;
- Relume provides 1,000+ Figma/Webflow/React components and an AI Site Builder;
- Tailwind Plus provides 500+ professional responsive components and SaaS/app marketing templates;
- shadcn/ui provides open-source copy/paste app blocks and components;
- Motion provides reusable accessible React motion primitives.

External references:

- https://www.framer.com/ai/
- https://www.framer.com/marketplace/templates/
- https://webflow.com/ai-site-builder
- https://www.figma.com/sites/
- https://www.relume.io/
- https://tailwindcss.com/plus
- https://ui.shadcn.com/blocks
- https://motion.dev/docs/react-accessibility

## 3. Tool-role decision

### 3.1 Relume — preferred structural/component discovery source

Strengths:

- 1,000+ components across Figma, Webflow and React/Tailwind;
- Site Builder can generate sitemap/wireframe structure;
- React source can be copied and edited;
- July 2026 Library MCP allows AI editors/MCP clients to search and pull real components rather than hallucinating common UI;
- Figma kit includes desktop/mobile variants.

Use for:

- section/layout discovery;
- alternative Hero/feature/FAQ/footer structures;
- generic marketing scaffolding;
- optional code starting points after compatibility and licensing are checked.

Cautions:

- React/HTML export and style-guide export have current limitations; some Relume support/community material notes incomplete styling/copy export;
- existing React docs/components may target older Tailwind/React combinations than the final Lunowa stack;
- every imported component still requires accessibility, dependency, responsiveness, bundle and Product-truth review.

Therefore Relume is a **design/component source**, not an automatic production authority.

References:

- https://www.relume.io/howdy
- https://react-docs.relume.io/
- https://community.relume.io/x/announcements/msg_QzLmoAqEk1Lp/introducing-the-relume-library-mcp-seamless-access

### 3.2 Tailwind Plus — preferred premium code-block benchmark/source

Strengths:

- 500+ professionally designed responsive components;
- marketing blocks include Hero, features, CTA, FAQ, header/footer, etc.;
- current components are provided as React, Vue and vanilla HTML;
- current Tailwind version tracks the latest Tailwind release;
- commercial SaaS end products are allowed under the license.

Use for:

- high-quality generic marketing structure;
- header/nav/FAQ/CTA/footer/container patterns;
- responsive and typography implementation references.

Cautions:

- paid license;
- do not redistribute the component library itself;
- customization is required so Lunowa does not look like a stock Tailwind template.

References:

- https://tailwindcss.com/plus
- https://tailwindcss.com/plus/ui-blocks/marketing
- https://tailwindcss.com/plus/license

### 3.3 shadcn/ui — preferred generic Product-UI primitive source

Strengths:

- open-source, copy/paste, local ownership;
- works across React frameworks;
- provides robust sidebar/dashboard/form/dialog primitives;
- useful for making the Hero Product proof look like believable software without inventing every control.

Use for:

- app-shell primitives inside the Lunowa Product demo;
- buttons/disclosures/dialogs/sidebar/forms where semantically appropriate.

Do **not** use a stock shadcn dashboard as the Lunowa Product visual. The Product semantics and hierarchy remain custom.

Reference:

- https://ui.shadcn.com/blocks

### 3.4 Motion for React — semantic motion only

Use for accepted Product-state transitions and interaction feedback after static comprehension is already strong.

Respect Reduced Motion and avoid decorative motion. Motion is not a reason to add JavaScript to static sections.

Reference:

- https://motion.dev/docs/react-accessibility

### 3.5 Framer — excellent rapid site builder / reference ecosystem, not current production default

Framer is one of the strongest explanations for the shared polished startup-site visual vocabulary: prompt-driven generation, editable visual canvas, templates, CMS/SEO/hosting and built-in interactions.

However, using Framer as the production platform would replace the current self-hosted Astro/Cloudflare/ACP architecture rather than simply accelerate it. Current Framer help explicitly states that standalone HTML self-host export is not supported by the normal site workflow.

Use for:

- template/section inspiration;
- rapid visual exploration when useful;
- benchmarking polished responsive composition.

Do not adopt as Lunowa production hosting without an explicit architecture decision that accepts the platform boundary.

References:

- https://www.framer.com/ai/
- https://www.framer.com/marketplace/templates/
- https://www.framer.com/help/articles/can-i-export-my-website-to-html-and-self-host-it/

### 3.6 Figma Design / Figma Make — preferred editable design convergence surface

Figma is now a stronger bridge between visual design and code than static image generation:

- Figma Sites has pre-built responsive blocks;
- Figma Make/code layers support code-backed visual exploration;
- OpenAI and Figma support direct Codex↔Figma workflows;
- designs stay editable at layer/component/token level instead of becoming opaque raster images.

Use for:

- assembling/refining Lunowa's actual visual oracle;
- testing typography, spacing, layout and responsive composition;
- bringing reusable blocks into a coherent Lunowa design system;
- Codex implementation handoff.

Figma Sites itself is not current production default because external publishing code export is currently unavailable; use the design/code canvas rather than adopting Sites hosting by default.

References:

- https://www.figma.com/sites/
- https://www.figma.com/make/
- https://openai.com/index/figma-partnership/

### 3.7 Webflow — viable alternate production builder, not preferred for current architecture

Webflow is mature for visual marketing-site production and can export HTML/CSS/JS from paid Workspace plans. However exported code omits important hosted functionality such as CMS, forms and localized content/functionality.

Adopting Webflow would add a second build model before translating back into the Astro/Cloudflare path.

Use as reference/alternative only unless an explicit architecture decision replaces the current stack.

Reference:

- https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code

### 3.8 Aceternity / Magic UI — optional effect source, not foundation

These libraries contain many visually polished React/Tailwind/Motion landing-page sections and effects.

They are useful only for narrowly justified visual behaviors. Their catalogs also contain exactly the high-frequency glow, beam, 3D, bento and animated-background vocabulary that can push Lunowa back toward generic AI-SaaS aesthetics.

Default: **do not use** unless a specific component performs semantic work better than simpler primitives.

References:

- https://ui.aceternity.com/components
- https://pro.magicui.design/docs/sections

## 4. Recommended Lunowa stack after G7

Keep the current production architecture:

```text
Astro static shell
+ Tailwind CSS
+ generic reusable marketing blocks where useful
+ shadcn-style local Product UI primitives
+ React island only for accepted Product demo
+ Motion only for accepted semantic transitions
+ Cloudflare Workers Static Assets
```

Source hierarchy for ordinary UI:

```text
1. existing local Lunowa component
2. proven accessible native/HTML/CSS pattern
3. shadcn/ui for generic app primitives
4. Tailwind Plus for generic marketing blocks if licensed
5. Relume component/reference if it materially saves work
6. custom component only when Lunowa semantics require it
7. decorative/effect libraries only by explicit exception
```

The hierarchy is not absolute: choose the simplest primitive that satisfies the accepted requirement with the least runtime/dependency cost.

## 5. Revised design workflow

Replace the old image-generation-heavy workflow with:

```text
Product truth / visitor journey
        ↓
reference harvesting from mature component/template ecosystems
        ↓
Lunowa design tokens + section shortlist
        ↓
Figma editable composition / design-system assembly
        ↓
mid/high-fidelity visitor-comprehension check
        ↓
freeze implementation-grade Figma visual oracle
        ↓
ACP/Codex implementation using reusable code primitives
        ↓
Playwright/browser/accessibility/performance verification
```

Image generation remains useful for mood exploration, campaign art, illustration and genuinely novel visual concepts. It is no longer the preferred tool for precise marketing-page UI composition with Japanese text.

## 6. What remains custom

Do not outsource these to generic template logic:

- Hero Product Proof content hierarchy;
- unresolved-matter/monitoring semantics;
- intermediate reply with no attention event;
- outcome arrival -> attention-required transition;
- Moment/Source trust presentation;
- current truth/availability language;
- distinctive Lunowa visual tokens;
- final responsive simplification of the Product demo.

This is the correct place to spend design/engineering effort.

## 7. Acceptance rule for reused components

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