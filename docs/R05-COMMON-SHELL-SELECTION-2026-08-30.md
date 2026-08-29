# Lunowa R05 Common Homepage Shell Selection — 2026-08-30

Status: **R05 DESIGN DECISION — GENERIC SHELL SELECTED, PRODUCT VISUAL VALUES NOT YET FROZEN**.

This document selects the generic homepage shell that P/E M05 stimuli should share. It does not freeze Product semantics, final brand values, or M10 visual authority.

Product truth remains in `miki-thecat/lunowa`.

## 1. Decision

Use a **quiet centered-product shell**:

```text
minimal header
↓
category/mechanism cue
↓
clear H1 + one support sentence
↓
primary CTA + optional low-emphasis secondary path
↓
large believable Lunowa Product proof
↓
editorial problem/distinction bands
↓
additional Product proof / return-context / trust-control
↓
truthful availability
↓
minimal FAQ
↓
plain final CTA
↓
minimal footer
```

The shell should feel familiar, calm and professionally conventional. Lunowa differentiation must come from the Product proof and `Reply != Done`, not from novel navbar/FAQ/footer mechanics.

## 2. Why this shell

Current strong software-product sites repeatedly use real Product UI as primary proof rather than abstract decorative art.

Observed current patterns:

- Linear homepage: category/value statement followed immediately by a large realistic Product scene, then vertically separated Product jobs with concrete UI proof.
- Cursor: clear product statement plus a large interactive Product interface; subsequent sections continue with real Product surfaces.
- Granola: concrete workflow/product screenshots paired with one user job per section.
- Attio: clear category/value copy followed by substantial Product UI and vertically staged product jobs.

This does not prove a universal conversion optimum. It is a strong current market pattern consistent with Lunowa's `Quiet Product Proof` and with first-impression/prototypicality evidence already recorded elsewhere in the repository.

Current references:

- https://linear.app/homepage
- https://cursor.com/
- https://www.granola.ai/
- https://attio.com/

## 3. Reuse decision by section

### Header

**Selected:** minimal local semantic header, structurally benchmarked against simple 7Ovr/Tailwind header patterns.

Required content at current stage:

- Lunowa wordmark/name;
- `仕組み` if retained;
- `FAQ` only if the section survives final IA;
- primary early-access CTA;
- compact mobile navigation.

Reference candidate:

- 7Ovr `Header 1`: logo + inline links + CTA + mobile sheet.

Do not adopt:

- mega menus;
- floating/morphing headers;
- blur-heavy sticky islands;
- announcement bars without a real announcement;
- command palette chrome.

Implementation note: static desktop structure should remain zero-hydration where practical. Mobile disclosure should use the simplest accessible mechanism; a React/Base UI Sheet is allowed only if native/local semantics are not adequate.

### Hero generic shell

**Selected:** centered/near-centered copy with a large Product surface directly below.

Reference families:

- Tailwind Plus `Simple centered` Hero;
- 7Ovr free SaaS template's `Hero 2` as an open structural candidate;
- Tailark centered Product-proof heroes as craft reference only.

Why:

- preserves enough horizontal width for believable email/Product UI;
- keeps category/value/CTA scan order simple;
- avoids forcing a complex Product story into a narrow right-side card;
- works for both P and E while allowing different information hierarchy above the Product surface.

Reject:

- decorative illustration/orb replacing Product proof;
- perspective/tilted cinematic dashboard treatment as default;
- announcement pill unless there is an actual announcement;
- logo cloud/stats/testimonial in the first viewport;
- autoplay-dependent explanation.

### Product stage

**Selected:** custom Lunowa shell, using only generic local primitives for ordinary controls.

May reuse/adapt:

- shadcn/Base UI button/disclosure/sheet/popover primitives where interactions genuinely exist;
- simple sidebar layout mechanics;
- border/stack/container behavior from audited open blocks.

Must remain custom:

- monitored matter semantics;
- intermediate reply evidence;
- `あなたの対応はまだ必要ありません` consequence;
- material outcome -> attention-required transition;
- Moment / Source evidence stack;
- integrity/review states.

A stock analytics/dashboard template is not accepted Product proof.

### Editorial problem/distinction bands

**Selected:** native full-width content bands with one question/job each.

Prefer:

- readable narrow copy measure;
- substantial whitespace;
- one supporting evidence surface when needed;
- asymmetric composition only when it helps hierarchy.

Reference families:

- Tailwind Plus Content Sections;
- Relume content/feature structures as spacing/composition discovery.

Reject card grids as the default narrative language.

### FAQ

**Selected:** native/plain disclosure-first.

If interaction needs exceed native semantics, use an audited Base UI/shadcn Accordion.

Reference families:

- Tailwind Plus centered/simple FAQ;
- 7Ovr free FAQ blocks for code/spacing reference.

No card-per-question treatment by default.

### Final CTA

**Selected:** plain centered or simple stacked CTA.

Reference family:

- Tailwind Plus `Simple stacked` / `Simple centered`.

No dark/glowing panel unless an evidence-backed inverse section exists for a real hierarchy reason.

### Footer

**Selected:** minimal semantic footer.

Only ship links that actually exist. Do not create an enterprise four-column sitemap for visual fullness.

## 4. Third-party adoption boundary

This decision does **not** authorize importing a complete SaaS template.

Examples of why whole-template adoption is rejected:

- 7Ovr free SaaS landing templates include generic logo clouds, stats, testimonials, pricing, bento/features, and other sections that Lunowa cannot truthfully or usefully populate yet.
- Tailwind Plus and Tailark contain many excellent patterns, but a stock page composition would introduce template-owned information architecture.

Use the **smallest adequate block**, strip foreign palette/type/radius/motion assumptions, and map accepted structure into Lunowa tokens.

## 5. Common-shell constraint for P/E

P and E should share, where practical:

- header dimensions/navigation;
- semantic token family;
- page/container widths;
- CTA style;
- Product-stage visual language;
- border/radius/shadow grammar;
- lower-page section rhythm;
- FAQ/footer grammar.

The controlled difference should be acquisition hierarchy:

### P — Product Proof

```text
category cue
H1/value
support
CTA
large Product proof
```

### E — Editorial Problem-First

```text
recognizable repeated-checking burden
short consequence/relief statement
CTA or low-emphasis path
concrete email/Product proof early
```

E must not delay concrete Product/category evidence so far that it becomes a generic productivity manifesto.

## 6. Current code-source preference

At later implementation time, inspect in this order:

1. native/local Astro HTML/CSS;
2. shadcn/Base UI local primitives for real interaction;
3. individually audited open registry blocks, currently 7Ovr then Tailark;
4. Tailwind Plus if licensed and materially better;
5. Relume structure/reference;
6. custom Lunowa code.

Current 7Ovr evidence:

- 550+ total free/pro blocks;
- 16 Hero sections;
- 230+ free blocks;
- free blocks currently MIT-0;
- blocks install as local readable source through shadcn CLI;
- current docs state React-stack compatibility including Astro.

Current Tailark evidence:

- marketing-focused shadcn registry;
- free OSS kits plus paid content;
- Base UI/Radix paths;
- current Hero guidance explicitly treats Product visual as proof rather than decoration.

Community/third-party claims are still subject to exact-source audit before use.

## 7. M05 participant-facing requirement

Do not expose crude wireframes.

P/E stimuli should be realistic enough to judge:

- immediate email/Product category recognition;
- Product believability;
- visual orientation;
- trust/prototypicality;
- distinction from reminder/reply-tracking/generic AI email products.

The generic shell must not be the experimental variable. If one stimulus uses a polished third-party shell and the other a crude custom shell, the comparison is invalid for the intended question.

## 8. Decision status

**Selected:** common generic shell family.

**Still unfrozen:**

- exact font family/type scale;
- exact color values;
- exact max widths;
- exact radius/shadow values;
- final P vs E hierarchy;
- whether semantic motion is needed;
- final mobile Product-stage composition.

Those belong to P/E composition evidence and M10 freeze.
