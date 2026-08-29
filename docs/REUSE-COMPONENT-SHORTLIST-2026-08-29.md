# Lunowa Reuse Component Shortlist — 2026-08-29

Status: curated implementation/design shortlist. References are candidates, not automatically approved code. Re-check source/version/license immediately before copying code.

## 1. Purpose

Avoid browsing thousands of components during M10/M20. Keep a small set of proven structural patterns that fit Lunowa's `Quiet Product Proof` direction and reject patterns that would pull the site toward generic AI-SaaS aesthetics.

## 2. Homepage generic structure

### Hero

Preferred pattern family:

- centered/near-centered copy with a large Product screenshot/surface directly below;
- alternatively, a restrained split-with-screenshot only if comprehension evidence shows it helps.

Reference sources:

- Tailwind Plus `Hero Sections` — especially `Simple centered`, `Split with screenshot`, `Split with bordered screenshot` pattern families;
- Relume header/hero sections as layout discovery only.

Lunowa constraint:

- Product UI must be the dominant proof;
- no decorative 3D/orb/artwork slot;
- no generic logo cloud/stat strip in the first viewport;
- Hero Product surface must remain meaningful while static.

### Problem / editorial sections

Use simple content/editorial section primitives rather than card grids.

Reference sources:

- Tailwind Plus Content Sections;
- Relume long-form/content sections for spacing and asymmetric editorial rhythm.

Lunowa constraint:

- H02/H03 are primarily about user recognition and `Reply != Done`; text/space may dominate;
- avoid feature mosaics.

### CTA

Preferred pattern family:

- Tailwind Plus `Simple stacked` CTA;
- plain centered CTA with no decorative panel is also acceptable.

Reject by default:

- dark/glowing CTA panel purely for visual drama;
- CTA with invented app-store/social-proof badges.

### FAQ

Preferred pattern family:

- Tailwind Plus `Centered accordion` or simple two-column text if disclosure interaction is unnecessary;
- shadcn/Base UI Accordion only if interactive disclosure is accepted.

Lunowa constraint:

- FAQ contains only material objections;
- accessibility and keyboard semantics must be preserved;
- avoid card-per-question styling.

### Footer

Preferred pattern family:

- Tailwind Plus `Simple centered` or `Simple with social links` as structural reference;
- native semantic footer is the default fallback.

Avoid 4-column enterprise sitemap density unless the shipped site actually has enough destinations to justify it.

## 3. Lunowa Product-demo shell

Do not reuse a full dashboard template as the Product design.

Candidate primitive sources:

- shadcn/ui `Sidebar` primitive;
- shadcn sidebar blocks only as interaction/layout references;
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

## 4. Design-token starting point

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

Use Tailwind CSS 4 theme variables/local CSS variables to encode the final M10 values.

## 5. Runtime dependency policy

Generic homepage sections should normally remain Astro/HTML/CSS with zero React hydration.

Hydrate only interactive Product-demo regions or controls that materially require client state.

shadcn/Base UI is a **source-owned primitive strategy**, not a reason to hydrate the whole page.

Motion is not used for section entrance decoration by default.

## 6. Source/compatibility notes

### Tailwind Plus

- current official library: 500+ responsive components across HTML/React/Vue;
- current official docs target the latest Tailwind 4 line;
- commercial SaaS use is allowed under a valid license;
- component source/design assets may not be redistributed as a component library;
- use only if the project/user actually holds a valid license.

### shadcn/ui

- open-source/local copy model;
- official Astro setup is available;
- Base UI is the default primitive for new projects as of 2026-07, with Radix still supported;
- use the smallest required local primitive rather than importing a dashboard aesthetic.

### Relume

- strong structural/Figma discovery source with 1k+ components;
- many public React component examples still list React 18 / Tailwind 3.4 and the current installation docs use Tailwind 3-style config/presets;
- therefore runtime adoption is conditional, not foundational.

## 7. Explicitly rejected reuse patterns

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
- app-store badges or provider logos not supported by current truth.

## 8. Next design action

For P/E stimuli and later M10 authority:

1. choose one generic Hero shell family, one editorial content rhythm, one FAQ pattern and one footer pattern from this shortlist;
2. keep those generic mechanics stable where possible;
3. custom-design only the Lunowa Product proof and semantic state story;
4. bind every borrowed material source to provenance/license notes;
5. user-test Product comprehension, not template preference.

The target is not a visually unique web framework. The target is a familiar trustworthy shell carrying a distinctive Lunowa Product behavior.
