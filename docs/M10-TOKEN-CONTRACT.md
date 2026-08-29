# Lunowa M10 Semantic Token Contract

Status: **PROVISIONAL R05 STRUCTURAL AUTHORITY — NOT FINAL VISUAL VALUES**.

This document defines which visual decisions must be represented as durable semantic tokens before M10 freeze. It intentionally does **not** freeze final brand colors, exact font family, final type scale, or motion timing before P/E comprehension and visual evidence exists.

Product truth remains in `miki-thecat/lunowa`. This file is visual-system structure only.

## 1. Goals

The token system must:

1. keep Lunowa's visual authority independent from Figma, Framer, Webflow, Tailwind Plus, Relume, shadcn registries, or any single vendor;
2. project cleanly into Tailwind CSS 4 / CSS custom properties;
3. support Japanese-first typography and longer English strings;
4. keep semantic Product states distinct without relying on color alone;
5. make P/E stimuli share one underlying design language;
6. remain small enough to audit and change cheaply before visual freeze.

Use the Design Tokens Community Group 2025.10 format as a compatibility model where useful, not as a reason to introduce a large token-build dependency.

## 2. Token layers

Use only three layers initially.

### Layer A — reference/base values

Raw reusable values such as neutral steps, spacing units and radius values.

These must not appear directly in Product/marketing semantics when a semantic alias exists.

Examples:

- `ref.color.neutral.*`
- `ref.color.blue.*`
- `ref.color.amber.*`
- `ref.space.*`
- `ref.radius.*`

### Layer B — semantic visual roles

The primary authority consumed by components.

Examples:

- `color.surface.page`
- `color.surface.product`
- `color.text.primary`
- `color.text.secondary`
- `color.border.subtle`
- `color.action.primary`
- `color.focus.ring`
- `color.state.monitoring.*`
- `color.state.attention.*`
- `color.state.integrity.*`

### Layer C — component aliases only when repetition proves useful

Do not create a component token for every CSS property.

Create component aliases only when the same decision appears across several instances or needs independent theming/verification.

Potential later examples:

- `hero.maxWidth`
- `productShell.radius`
- `button.primary.background`

Default: use semantic roles directly until repetition justifies another layer.

## 3. Color semantics

### 3.1 Mandatory roles

The final M10 system must define:

```text
color.surface.page
color.surface.subtle
color.surface.product
color.surface.inverse         # only if an evidence-backed dark/inverse section survives

color.text.primary
color.text.secondary
color.text.tertiary
color.text.inverse            # only if inverse surfaces exist

color.border.subtle
color.border.strong

color.action.primary
color.action.primaryHover
color.action.secondary
color.focus.ring

color.state.monitoring.background
color.state.monitoring.foreground
color.state.monitoring.border

color.state.attention.background
color.state.attention.foreground
color.state.attention.border

color.state.integrity.background
color.state.integrity.foreground
color.state.integrity.border
```

### 3.2 Semantic meaning

- `monitoring`: Lunowa is still watching; user attention is not currently required.
- `attention`: user attention/action is currently required.
- `integrity`: monitoring/evidence/runtime truth cannot safely support the normal promise or an error/integrity condition exists.

Do not use `integrity` red merely for visual emphasis.

Color may reinforce meaning but must not be the sole carrier. Text/icon/position/state language must remain redundant.

### 3.3 Current direction, not frozen values

Current design contract still favors:

- page surfaces: warm/neutral near-white;
- text: near-black/deep neutral;
- primary brand/action accent: restrained cobalt/indigo family;
- monitoring: calm blue or blue-green family;
- attention: restrained amber family;
- integrity/error: red family only for actual integrity/error meaning.

Exact values remain **UNFROZEN** until realistic P/E compositions are evaluated.

Do not inherit a third-party component palette as token authority.

## 4. Contrast and accessibility constraints

At M10 freeze and implementation verification:

- text/control combinations target WCAG 2.2 AA;
- focus indication must remain visible on every surface;
- state colors require redundant non-color cues;
- muted text may not be made so low-contrast that Product evidence becomes decorative;
- disabled styling must not be confused with `monitoring` or `attention` semantics.

If a candidate aesthetic requires failing these constraints, reject the aesthetic.

## 5. Typography roles

Do not freeze a brand font before visual evidence. Freeze **roles** first.

Required roles:

```text
type.display.hero
type.heading.section
type.heading.subsection
type.body.lead
type.body.default
type.ui.default
type.ui.emphasis
type.meta
```

Each final role must bind:

- font family/fallback stack;
- size;
- line height;
- weight;
- optional tracking only where Japanese/Latin behavior remains safe.

### Japanese-first rules

- avoid negative tracking as a default Japanese styling device;
- line-height must support dense Japanese glyph forms without collision;
- UI text must remain readable at realistic browser zoom;
- layouts must tolerate longer English translations without shrinking text to compensate.

### Provisional implementation rule

Until a brand font is selected, prototypes may use a high-quality system/Japanese sans stack. A temporary font must not become canonical merely because a reused block shipped with it.

## 6. Spacing system

Use a small 4px-derived spacing family as the provisional structural scale:

```text
space.1  = 4px
space.2  = 8px
space.3  = 12px
space.4  = 16px
space.6  = 24px
space.8  = 32px
space.10 = 40px
space.12 = 48px
space.16 = 64px
space.20 = 80px
space.24 = 96px
space.32 = 128px
```

This is a **structural starting scale**, not evidence that every gap must snap to one value.

Use custom values only for a documented visual reason; do not create arbitrary one-off spacing from imported templates.

## 7. Layout/container roles

Required semantic layout roles:

```text
layout.page.gutter
layout.content.max
layout.content.readable
layout.productStage.max
layout.section.blockGap
layout.section.internalGap
```

### Provisional constraints

- desktop marketing content should use a consistent constrained shell rather than independently chosen widths per section;
- editorial prose uses a narrower readable measure than Product proof;
- Product proof may use the widest accepted content region;
- mobile never preserves a desktop width by scaling it down;
- 320 CSS px remains a hard reflow acceptance boundary.

Exact max-width values are **UNFROZEN** until real P/E composition reveals the appropriate density.

## 8. Radius / border / shadow roles

Required roles:

```text
radius.control
radius.surface
radius.product
border.subtle
border.strong
shadow.surface
shadow.product
```

Rules:

- restrained radius;
- no universal pillification;
- borders preferred over shadows when hierarchy remains clear;
- shadows must communicate spatial hierarchy, not generic premium styling;
- a third-party block's radius/shadow values are not inherited automatically.

Exact values remain provisional until M10.

## 9. Focus and interaction roles

Required roles:

```text
focus.ring.width
focus.ring.offset
focus.ring.color
interaction.hover.duration
interaction.press.duration
```

Focus roles are required even if a visual prototype is mostly static.

Hover cannot be the only indication of clickability. Touch/mobile state must remain clear.

## 10. Motion tokens

Do **not** create a large motion system before motion is accepted.

If M05/M10 admits semantic motion, define only what is needed:

```text
motion.duration.fast
motion.duration.state
motion.easing.standard
motion.easing.state
```

Reduced-motion behavior is not encoded merely as a duration token; it is an interaction acceptance path.

If final Hero/Product proof remains static, motion-specific brand tokens may remain absent.

## 11. Breakpoints

Do not let third-party library breakpoint names become Product semantics.

Implementation may use Tailwind's breakpoint mechanism, but the visual contract is expressed by behavior:

- wide desktop;
- compact desktop;
- tablet/narrow;
- mobile;
- 320px reflow boundary.

M10 must define where the Product stage changes composition rather than merely shrinking.

## 12. Token source format

At M10 freeze, preserve one machine-readable source plus a human-readable contract.

Preferred machine-readable shape is DTCG-compatible JSON where practical:

```json
{
  "color": {
    "text": {
      "primary": {
        "$type": "color",
        "$value": "..."
      }
    }
  }
}
```

Final exact values are intentionally absent from this R05 document because they have not yet survived visual/comprehension evidence.

Implementation projection target:

```css
@theme {
  --color-text-primary: ...;
  --color-surface-page: ...;
  --spacing-section: ...;
}
```

The projection must be deterministic and reviewable; no Figma plugin or hosted design tool may be required to reconstruct it.

## 13. Third-party component adaptation rule

When adapting a block:

1. remove source palette/typography/radius defaults as needed;
2. map visual properties to Lunowa semantic tokens;
3. preserve or improve accessible semantics;
4. remove unnecessary animations/dependencies;
5. document source/provenance separately;
6. verify the component still works after the source design system is stripped away.

A block that only looks good while retaining its foreign design system is not a good Lunowa primitive.

## 14. P/E experiment rule

P and E must use the **same token family and generic shell system where practical**.

Do not let:

- different fonts;
- unrelated color themes;
- different border/radius systems;
- one premium template vs one crude custom layout

become hidden variables.

The P/E difference should be primarily:

- Product-first proof hierarchy vs problem-first editorial hierarchy;
- the order/weight of Product evidence and user-problem recognition.

## 15. Freeze criteria

This R05 token contract becomes a final M10 token source only after:

- P/E visual direction is evidence-backed;
- exact typography/color/layout choices are selected intentionally;
- desktop/mobile states are represented;
- contrast/focus/reflow constraints pass;
- reused components can be mapped into the system without preserving foreign visual identity;
- exact values are durably recorded and reviewed.

Until then, semantic roles are authoritative; exact aesthetic values are provisional.
