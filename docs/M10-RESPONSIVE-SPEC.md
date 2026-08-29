# Lunowa M10 Responsive Composition Spec — 2026-08-30

Status: **M10 FREEZE CANDIDATE — behavior-level responsive authority**.

Read with `docs/visual-oracle/MANIFEST.md`, `docs/tokens/lunowa-m10.tokens.json`, and `docs/M10-VISUAL-AUTHORITY.md`.

Mobile is a semantic recomposition, not a scaled desktop screenshot.

## 1. Hard invariants at every width

Never remove merely to make the layout fit:

- Lunowa/email category recognition;
- category/mechanism cue near the broad H1;
- primary CTA;
- awaited outcome (`見積書`);
- intermediate reply (`社内確認中です。明日送ります。`);
- explicit no-action consequence;
- continued-monitoring meaning;
- material-outcome -> attention-required meaning in the story;
- original Source path;
- Trust/Control truth boundary;
- final early-access CTA.

No horizontal scrolling at 320 CSS px.

## 2. Wide desktop — >= 1280px

Reference: `hero-desktop.svg` at 1440×900.

- page gutter 48px minimum;
- Product stage max 1248px;
- Hero H1 60/68;
- centered Hero copy;
- full Product sidebar + conversation + consequence + source/context rail may appear together;
- lower comparison states may be side by side when each remains readable;
- section vertical rhythm around 128px between major narrative jobs.

Do not stretch content beyond the frozen max widths merely because more screen is available.

## 3. Compact desktop — 1024–1279px

- page gutter 32–48px;
- Hero H1 52/60;
- Product stage fills available content width up to max;
- sidebar may narrow but must not squeeze primary conversation/status copy;
- secondary metadata may move below the conversation rather than shrink text;
- lower two-state comparison may remain two columns if each semantic card stays comfortably readable; otherwise stack before text becomes cramped.

## 4. Tablet / narrow — 768–1023px

- page gutter 32px;
- Hero remains one vertical column: copy -> CTA -> Product proof;
- do not introduce a left-copy/right-Product split merely because desktop references exist;
- Product-stage desktop chrome is simplified:
  - sidebar becomes secondary or disappears from the marketing projection;
  - keep conversation title, awaited outcome, status consequence, latest reply and Source;
- lower before/after state comparison stacks vertically by default;
- Trust/Control rows become stacked label -> heading -> explanation -> action;
- FAQ becomes one column;
- no tiny multi-column Product dashboard.

## 5. Mobile — 390–767px

References:

- `hero-mobile.svg` at 390×844;
- `product-story-mobile.svg` at 390×1120.

- page gutter 20px;
- Hero 40/48;
- brand + primary CTA remain visible without requiring a menu;
- category cue -> H1 -> support -> CTA -> Product proof;
- Product proof uses one focused card, not desktop app chrome;
- intermediate and attention-required states are shown as explicit vertical steps in lower story;
- minimum control target should approach ordinary touch-target guidance; implementation acceptance handles exact browser hit areas;
- Source action remains textually explicit;
- section gap around 88px.

## 6. Narrow mobile — 320–389px

- page gutter remains 20px unless a reviewed 16px exception is required for a specific control; do not go lower by default;
- Hero may use 36/44;
- CTA may become full-width when this prevents awkward wrapping;
- avoid two visible header navigation links; use only brand + primary action, with a simple disclosure menu only if destinations require it;
- Product card width = viewport minus gutters;
- status text may wrap to multiple lines but stays >= the accepted UI/body sizes;
- attachment/action controls stack instead of compressing horizontally;
- state comparison is always vertical;
- trust actions and FAQ rows remain one column;
- no 10–11px essential semantic text solely to preserve desktop geometry.

## 7. Typography/reflow rules

- do not truncate H1/category/mechanism copy;
- avoid manual line breaks that only work in Japanese desktop unless equivalent responsive rules exist;
- Japanese should wrap naturally at phrase boundaries where practical;
- future English strings may occupy more lines; solve through height/reflow, not text shrinking;
- 200% zoom/reflow behavior is implementation acceptance, not optional polish.

## 8. Product UI prioritization order

When space is constrained, preserve in this priority order:

1. awaited outcome;
2. no-action / attention-required consequence;
3. latest material source evidence;
4. continued monitoring / next meaning;
5. Source action;
6. counterparty/context;
7. ordinary app chrome;
8. secondary navigation/metadata.

Remove/simplify 7–8 before weakening 1–5.

## 9. Interaction/hydration rule

Responsive layout alone does not justify a React island.

Use CSS/Astro layout for static reflow. Hydrate only controls with real interaction needs such as an accepted disclosure menu or Product demonstration.

## 10. Visual-regression acceptance targets

Implementation should capture at least:

- 1440×900;
- 1280×800;
- ~768×1024;
- 390×844;
- 320px width reflow.

Compare semantic presence/readability, not just pixel similarity across inherently different compositions.
