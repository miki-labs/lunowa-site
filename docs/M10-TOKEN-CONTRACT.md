# Lunowa M10 Token Contract — 2026-09-09 Rebaseline

Status: **exact aesthetic values UNFROZEN pending owner-selected art direction**.

The previous 2026-08-30 exact aesthetic token freeze is historical evidence, not current visual authority.

Product truth remains in `miki-labs/lunowa`.

## 1. Purpose

Tokens should encode an accepted design system after the visual direction is good enough. They must not make a weak direction difficult to escape.

New sequence:

```text
Product-semantic boundaries
-> visual exploration
-> owner browser/Figma selection
-> derive tokens from winner
-> DTCG-compatible token freeze
-> code projection
```

The existing `docs/tokens/lunowa-m10.tokens.json` remains the old P candidate token source until replaced. New design work must not treat its aesthetic values as mandatory.

## 2. What remains invariant during exploration

### Semantic state separation

The page must keep these meanings visually and textually distinguishable:

- **monitoring / no current user action**;
- **attention required**;
- **integrity/error/degraded monitoring**.

Color never carries state alone.

Exact hues are not frozen. Brand atmosphere and Product state colors may be harmonized after the winning direction is selected, provided contrast/meaning remain clear and Product semantics are not changed.

### Accessibility

Final text/control/state combinations target WCAG 2.2 AA in rendered browser evidence.

### Focus

Visible keyboard focus is mandatory. Exact focus color/shape may follow the final visual system as long as it remains clearly perceivable.

## 3. DTCG format

Use DTCG stable 2025.10 as the preferred final interchange model where practical.

The final token source should remain deliberately small for a single marketing site. Do not build an enterprise design-token platform.

Likely final groups:

```text
color.brand.*
color.surface.*
color.text.*
color.state.monitoring.*
color.state.attention.*
color.state.integrity.*
type.display.*
type.body.*
space.*
size.content.*
radius.*
shadow.*
motion.duration.*
motion.ease.*
focus.*
```

Only create tokens for real repeated decisions.

## 4. Brand palette exploration

Current direction seed, not frozen values:

- `midnight/navy` — quiet depth, trust, night;
- `lunar gold` — warmth, signature accent, attention/light;
- `dawn ivory` — calm light foundation;
- `mist cyan/teal` — optional environmental/monitoring accent;
- neutral ink/surface scale.

A dark Hero, light Hero, or mixed page is allowed. Do not force the old near-white page foundation.

Reject generic purple-blue AI color treatment only when it is generic/unowned, not because purple/blue/gradient techniques are categorically forbidden.

## 5. Typography exploration

The old fixed Inter/Noto Sans JP expression is unfrozen.

Final system may combine:

- Japanese-readable sans for body/Product UI;
- distinctive display sans;
- editorial serif accent;
- variable font where it improves expression/weight efficiency.

Final font selection must document:

- license;
- Japanese glyph strategy/fallback;
- actual weights used;
- subset/self-host/CDN decision;
- preload strategy where justified;
- measured payload and CLS/LCP implications.

Do not freeze exact sizes before the composition is selected.

## 6. Spacing/layout

The previous 4px-derived scale may be reused, modified, or replaced after visual selection.

During exploration:

- use coherent local spacing rules;
- allow large editorial whitespace and deliberate overlap;
- allow viewport-relative/full-bleed geometry;
- do not preserve a fixed `1120/1248px` max simply because the old design used it;
- maintain readable line lengths for text-heavy content.

Final tokens should capture the chosen recurring rhythm, not every one-off art-directed coordinate.

## 7. Radius, border, shadow and depth

No universal style is frozen.

Allowed candidates may use:

- sharp editorial frames;
- soft Product windows;
- pills for true controls/tags;
- strong or subtle depth;
- layered shadows;
- blend/filter treatments;
- borders/glows where conceptually useful.

The final system should still be coherent. Avoid every component inventing its own radius/depth language.

## 8. Motion tokens

Motion tokens should be derived only after an accepted motion grammar exists.

Possible roles:

- direct UI feedback;
- Product evidence arrival;
- editorial reveal;
- attention-return focus;
- ambient world movement;
- section transition.

Do not use one timing/easing for every role.

Reduced-motion behavior is not represented merely by a slower duration; non-essential large motion may be removed entirely.

## 9. Tailwind/CSS projection

The final token source should be deterministically projectable to CSS custom properties/Tailwind CSS 4 where useful.

Third-party or generated code must map into final Lunowa values rather than silently importing a foreign system **after** the design has been accepted.

During early prototypes, local exploratory variables are allowed and should not be prematurely promoted into canonical tokens.

## 10. Old token file migration

`docs/tokens/lunowa-m10.tokens.json` is currently a historical P candidate artifact.

Before M10 closes:

1. select the new visual direction;
2. decide which old semantic values survive;
3. replace/update the JSON with the accepted final values;
4. update token verification/projection code;
5. prove browser output against the new accepted design;
6. record migration from old P values.

Do not modify the old JSON merely to make an exploratory prototype compile.

## 11. Freeze boundary

M10 may call tokens frozen only after:

- owner accepts the actual browser visual direction;
- desktop/mobile composition is sufficiently known;
- typography/brand palette are selected;
- motion language is selected or explicitly omitted;
- Product state colors are accessible and semantically clear;
- final asset/font/runtime costs are plausible;
- the DTCG source is deterministic and small.

Until then, **semantic meaning is constrained; aesthetics are intentionally open.**
