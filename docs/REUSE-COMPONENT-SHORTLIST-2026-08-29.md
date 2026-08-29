# Lunowa Reuse Component Shortlist — 2026-08-29

Status: curated implementation/design shortlist. References are candidates, not automatically approved code. Re-check source/version/license immediately before copying code.

Read `docs/REUSE-STACK-AUDIT-2026-08-29.md` and `docs/APPROVED-PRIMITIVES-2026-08-29.md` first.

## 1. Purpose

Avoid browsing thousands of components during M10/M20. Keep a small set of structural patterns that fit Lunowa's `Quiet Product Proof` direction and reject patterns that would pull the site toward generic AI-SaaS aesthetics.

The shortlist is **source-diverse but visually narrow**: we want multiple implementation sources for a small number of accepted layout families, not hundreds of visual directions.

## 2. Source priority for this shortlist

For generic marketing structure, search in this order:

1. native semantic HTML/CSS;
2. official shadcn registry candidates — 7Ovr first, Tailark second;
3. Tailwind Plus if licensed and materially better;
4. Relume for structural comparison/reference;
5. Launch UI or other MIT sources for specific patterns only;
6. custom.

Community block code is untrusted until reviewed locally.

## 3. Homepage generic structure

### Hero

Preferred pattern family:

- centered/near-centered copy with a large Product screenshot/surface directly below;
- alternatively, a restrained split-with-screenshot only if comprehension evidence shows it helps.

Preferred sources:

- 7Ovr Hero family — install only a simple low-decoration Hero candidate such as the basic Product/screenshot-oriented family after code review;
- Tailark open-source Hero families as a secondary Base UI/Tailwind/shadcn source;
- Tailwind Plus `Hero Sections` — especially simple centered / screenshot-oriented patterns if licensed;
- Relume header/hero sections as layout discovery only.

Lunowa constraint:

- Product UI must be the dominant proof;
- no decorative 3D/orb/artwork slot;
- no generic logo cloud/stat strip in the first viewport;
- Hero Product surface must remain meaningful while static;
- generic shell should not encode the P vs E research hypothesis itself; P/E difference comes from acquisition/content emphasis.

### Header/navigation

Preferred pattern:

- simple logo left;
- only real current destinations in the center/right;
- one primary early-access CTA;
- compact mobile sheet only when needed.

Preferred sources:

- 7Ovr `header-1`-style simple header family after audit;
- native Astro markup if navigation remains too small to justify an interactive primitive;
- Tailwind Plus simple header family if licensed.

Reject:

- mega menu;
- command palette;
- blur/morph/hide-on-scroll behavior without a real navigation requirement;
- fake sign-in/product links before they exist.

### Problem / editorial sections

Use simple content/editorial section primitives rather than card grids.

Preferred sources:

- native semantic section + constrained content width first;
- Tailwind Plus Content Sections if licensed;
- Relume long-form/content sections for spacing/asymmetric editorial rhythm;
- open shadcn marketing registries only when their structure is simpler than custom markup.

Lunowa constraint:

- H02/H03 are primarily about user recognition and `Reply != Done`; text/space may dominate;
- avoid feature mosaics.

### CTA

Preferred pattern:

- plain centered/stacked CTA;
- one clear action;
- no decorative illustration required.

Preferred sources:

- native semantic section;
- simple 7Ovr CTA family after audit;
- Tailwind Plus `Simple stacked` CTA if licensed.

Reject by default:

- dark/glowing CTA panel purely for visual drama;
- CTA with invented app-store/social-proof badges;
- dual competing primary buttons.

### FAQ

Preferred pattern:

- native `<details>/<summary>` when behavior/styling needs remain simple and accessibility verification passes;
- shadcn/Base UI Accordion when richer controlled disclosure behavior is justified;
- simple open-registry FAQ block only when it saves meaningful layout work;
- Tailwind Plus centered accordion if licensed.

Lunowa constraint:

- FAQ contains only material objections;
- accessibility and keyboard semantics must be preserved;
- avoid card-per-question styling.

### Footer

Preferred pattern:

- native simple footer;
- simple open-registry footer if responsive mechanics save time;
- Tailwind Plus `Simple centered` / equivalent if licensed.

Avoid 4-column enterprise sitemap density unless the shipped site actually has enough destinations to justify it.

## 4. Lunowa Product-demo shell

Do not reuse a full dashboard template as the Product design.

Candidate primitive sources:

- shadcn/ui `Sidebar` primitive;
- Base UI primitives beneath shadcn where needed;
- shadcn registry app blocks only as source-level interaction/layout references;
- native semantic thread/list/content regions;
- shadcn Button, Dialog/Sheet/Popover/Accordion only when a real Product interaction needs them.

Current preferred sidebar reference starts from the simplest composable sidebar pattern, not `dashboard-01` or a feature-heavy analytics shell.

Product-specific elements remain custom:

- monitored-matter row/card semantics;
- `あなたの対応はまだ必要ありません` consequence;
- intermediate-reply evidence presentation;
- attention-required transition;
- Moment / Source evidence stack;
- integrity/review states.

## 5. Design-token starting point

Do not copy a third-party palette wholesale.

Current Lunowa token direction remains:

- primary page surface: warm/neutral near-white;
- primary text: near-black/deep neutral;
- accent: restrained cobalt/indigo;
- monitoring: calm blue/green-blue family with redundant text/icon meaning;
- attention-required: restrained amber;
- integrity/error: red only where semantically true;
- restrained radius, borders and shadows;
- no universal pillification or glassmorphism.

Use a small vendor-neutral token source aligned where practical with DTCG 2025.10, then project it into Tailwind CSS 4 `@theme`/CSS variables.

Do not freeze exact color values merely from a third-party block; M10 owns final token values.

## 6. Runtime dependency policy

Generic homepage sections should normally remain Astro/HTML/CSS with zero React hydration.

Hydrate only interactive Product-demo regions or controls that materially require client state.

shadcn/Base UI is a **source-owned primitive strategy**, not a reason to hydrate the whole page.

Open registry blocks are copied source, not trusted runtime authority.

Motion is not used for section entrance decoration by default.

## 7. Source/compatibility notes

### 7Ovr

- listed by the official shadcn registry directory;
- current docs: Base UI-based, local source install, React-framework support including Astro;
- free blocks: MIT-0 per current docs;
- use the smallest adequate free block and record exact installed registry item/revision.

### Tailark

- open-source shadcn marketing registry;
- Base UI is current default path, Radix available separately;
- MIT license;
- secondary source after 7Ovr/native patterns.

### Tailwind Plus

- current official library: 500+ responsive components across HTML/React/Vue;
- current official docs target the latest Tailwind 4 line;
- commercial SaaS use is allowed under a valid license;
- component source/design assets may not be redistributed as a component library;
- use only if the project/user actually holds a valid license and the block materially improves the result.

### shadcn/ui / Base UI

- shadcn officially supports Astro setup;
- Base UI is the default primitive for new shadcn projects as of 2026-07, with Radix still supported;
- intended Base UI provenance is `@base-ui/react` / `mui/base-ui`, MIT licensed;
- use the smallest required local primitive rather than importing a dashboard aesthetic.

### Relume

- strong structural/Figma discovery source with 1k+ components and 2026 Library MCP;
- runtime adoption remains conditional pending exact component compatibility/dependency review.

### Webflow DevLink

- current 2026 DevLink Export can produce local self-contained React/TSX components from visual Webflow components;
- optional experiment only, because exported Webflow primitives/scoped CSS would create a second style system beside Tailwind;
- do not use merely to avoid writing simple Astro markup.

### Framer

- visual/template reference only for now;
- current first-party portability documentation is internally inconsistent, so no production architecture claim may depend on Framer export/self-host behavior until reconciled.

### Launch UI

- MIT source/reference;
- current v2 supports Tailwind 4 / React 19;
- Next-oriented and often more decorative than Lunowa requires;
- use only for isolated pattern/reference value.

## 8. Explicitly rejected reuse patterns

Do not select these merely because they are fashionable or available:

- bento grids as the dominant homepage language;
- testimonial/logo sections without real evidence;
- stats sections without real metrics;
- 3D/globe/orb/beams/spotlight effects;
- autoplay background video;
- marquee logo walls;
- feature-card walls;
- generic dashboard analytics shells;
- dark panels inserted solely to look premium;
- app-store badges or provider logos not supported by current truth;
- whole-page templates when a few audited blocks are sufficient.

## 9. Next design action

For P/E stimuli and later M10 authority:

1. define the minimal Lunowa token source first;
2. choose one generic Hero shell family, one editorial content rhythm, one FAQ pattern and one footer pattern from this shortlist;
3. keep those generic mechanics stable where possible;
4. independently compose P Product Proof and E Editorial Problem-First by changing the actual acquisition/proof thesis, not cosmetic styling;
5. custom-design only the Lunowa Product proof and semantic state story;
6. bind every borrowed material source to provenance/license notes;
7. user-test Product comprehension, not template preference.

The target is not a visually unique web framework. The target is a familiar trustworthy shell carrying a distinctive Lunowa Product behavior.
