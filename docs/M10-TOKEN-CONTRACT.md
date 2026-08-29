# Lunowa M10 Semantic Token Contract

Status: **M10 EXACT TOKEN VALUES FROZEN — implementation projection pending M20**.

Machine-readable source:

- `docs/tokens/lunowa-m10.tokens.json`

Product truth remains in `miki-thecat/lunowa`. These tokens are visual authority only.

The source follows the DTCG 2025.10 model for color/dimension/font/duration tokens where practical and must be deterministically projectable into Tailwind CSS 4/CSS custom properties without requiring Figma, Framer, Webflow, Relume or another hosted tool.

## 1. Design character

Current visual character is **Quiet Product Proof**:

- warm near-white page;
- deep-neutral typography;
- restrained cobalt link/category accent;
- calm green monitoring semantics;
- restrained amber attention-required semantics;
- red reserved for genuine integrity/error states;
- borders before shadows;
- restrained radius;
- Japanese-first readable typography;
- Product UI as the primary visual proof.

No generic dark/purple/glow/orb/3D AI-SaaS palette is part of the token authority.

## 2. Color authority

### Surfaces

- `color.surface.page` = `#F8F8F5`
- `color.surface.subtle` = `#F1F2EE`
- `color.surface.product` = `#FFFFFF`

### Text

- `color.text.primary` = `#181817`
- `color.text.secondary` = `#686864`
- `color.text.tertiary` = `#777772`

### Borders

- `color.border.subtle` = `#D8D8D2`
- `color.border.strong` = `#B8B8B0`

### Actions

- primary action = `#181817`
- primary hover = `#2A2A28`
- link/category accent = `#355F91`
- link hover = `#2B4F7C`
- focus ring = `#355F91`

### Monitoring state

Meaning: Lunowa is still watching; user attention is not currently required.

- background `#EDF6F1`
- foreground `#3D6D58`
- border `#C8DED3`

### Attention-required state

Meaning: material evidence now requires user attention/action.

- background `#FFF5E8`
- foreground `#8A571C`
- border `#E8D1B1`

### Integrity/error state

Meaning: monitoring/runtime/evidence integrity cannot safely support the normal promise or a genuine error exists.

- background `#FFF0F0`
- foreground `#9B3F3F`
- border `#E7C4C4`

Color never carries state alone. Text/icon/placement redundancy is required.

## 3. Typography authority

Primary stack:

`Inter Variable, Noto Sans JP, Hiragino Sans, Yu Gothic UI, Yu Gothic, system-ui, sans-serif`

Implementation intent:

- self-host/subset the selected webfont assets when practical rather than require third-party font requests;
- `Noto Sans JP` owns Japanese glyph quality;
- `Inter Variable` supplies Latin/UI rhythm where available;
- exact font delivery/performance evidence belongs to implementation.

### Display sizes

Wide desktop:
- Hero `60px / 68px`, weight 700
- section heading `44px / 54px`, weight 700
- subsection `28px / 36px`, weight 700/600

Compact desktop:
- Hero `52px / 60px`

Mobile:
- Hero `40px / 48px`
- section heading `32px / 40px`

Narrow 320px:
- Hero `36px / 44px`

### Body/UI

- lead `20px / 32px`
- body `16px / 28px`
- UI `14px / 21px`
- meta `12px / 18px`

Weights:
- 400 regular
- 500 medium
- 600 semibold
- 700 bold

Japanese rules:

- no default negative tracking;
- do not shrink Japanese copy merely to preserve a desktop layout;
- English translation expansion must be solved through layout/reflow rather than tiny type.

## 4. Spacing authority

4px-derived scale:

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px`.

Section rhythm:

- wide section gap: `128px`
- mobile section gap: `88px`

Use one-off spacing only for a documented visual/semantic reason.

## 5. Layout authority

- wide page gutter: `48px`
- tablet gutter: `32px`
- mobile gutter: `20px`
- normal content max: `1120px`
- readable/editorial max: `720px`
- Product-stage max: `1248px`
- hard reflow boundary: `320px`

Behavioral breakpoints:

- mobile composition below `768px`;
- desktop composition from `1024px`;
- wide composition from `1280px`.

These values are layout triggers, not Product semantics.

Mobile must use a semantic Product projection rather than scaling the desktop stage until unreadable.

## 6. Radius / border / depth

- control radius `10px`
- ordinary surface radius `16px`
- Product stage radius `20px`
- subtle border `1px`
- stronger visual boundary `1.5px`

Borders are preferred over shadows.

When spatial lift is needed:

- ordinary surface shadow should remain around `0 8px 28px rgba(24,24,23,.06)` or weaker;
- Product stage may use up to approximately `0 24px 80px rgba(24,24,23,.08)` when the browser comparison shows it improves separation without creating a floating-card aesthetic.

Shadow strings are human contract values; implementation may encode them as CSS custom properties rather than expanding the DTCG source unnecessarily.

## 7. Focus / interaction

- focus ring width `2px`
- focus ring offset `3px`
- focus ring color `#355F91`
- fast hover/press transition `120ms`
- ordinary state feedback `180ms`

Hover may not be the only clickability cue.

## 8. Motion tokens

No branded Hero-motion token system is currently required.

M05 selected a static-first direction and found no baseline need for motion.

The only current timing tokens are ordinary interaction-feedback durations. If later Product-state motion survives implementation review, add only the minimum semantic state duration/easing tokens under a new reviewed revision.

## 9. Tailwind CSS 4 projection contract

M20 should project semantic values into local CSS/Tailwind variables, for example:

```css
@theme {
  --color-lunowa-page: #F8F8F5;
  --color-lunowa-product: #FFFFFF;
  --color-lunowa-ink: #181817;
  --color-lunowa-muted: #686864;
  --color-lunowa-accent: #355F91;
  --color-lunowa-monitor-bg: #EDF6F1;
  --color-lunowa-monitor-fg: #3D6D58;
  --color-lunowa-attention-bg: #FFF5E8;
  --color-lunowa-attention-fg: #8A571C;
}
```

The machine-readable JSON remains the canonical value source; CSS names are implementation projection and may be adjusted for clean Tailwind ergonomics without changing resolved values.

## 10. Third-party adaptation rule

When reusing a block:

1. strip source palette/typography/radius/motion assumptions;
2. map it into these Lunowa tokens;
3. preserve/improve accessible semantics;
4. remove unnecessary dependencies/animation;
5. document provenance/license;
6. reject the block if it only looks correct while retaining its foreign design system.

## 11. Contrast / accessibility

Current S05 spot checks already place material normal-text pairs around or above WCAG AA thresholds. M10 token freeze does not waive rendered implementation verification.

M20/M70 must verify actual font rendering, focus, zoom/reflow, states and contrast in browser.

## 12. Freeze status

Frozen in M10:

- exact semantic colors;
- font stack and role sizes;
- spacing family;
- major content/Product widths;
- behavioral breakpoints;
- radius/border rules;
- focus/interaction values;
- static-first motion posture.

Still implementation-dependent:

- exact webfont subset/package/delivery strategy;
- whether the Product-stage shadow is needed after real browser comparison;
- any optional semantic motion;
- implementation CSS variable naming details.

A change to a frozen value after M10 should be explicit and reviewed rather than silently inherited from a component/template.
