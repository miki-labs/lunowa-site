# Lunowa M10 Responsive Composition Spec — 2026-09-09 Rebaseline

Status: **frontier responsive design candidate; old P geometry is not frozen authority**.

Read with `docs/DESIGN.md`, `docs/HOMEPAGE.md`, `docs/MOTION.md`, and `docs/M10-VISUAL-AUTHORITY.md`.

## 1. Responsive thesis

> **Preserve the idea, not the desktop coordinates.**

Mobile, tablet and desktop may have materially different art direction, crop, Product staging and motion. They should feel like the same Lunowa world without forcing one layout to shrink across every viewport.

## 2. Hard semantic invariants

Across the complete responsive experience, preserve:

- Lunowa/email category recognition;
- monitoring-offload promise;
- canonical unresolved quotation story;
- intermediate reply remains unresolved;
- explicit no-current-action consequence;
- continued monitoring;
- later material outcome -> attention return;
- return context / Source;
- truthful CTA and Trust/Control boundaries.

Not every invariant must occupy the first 390x844 viewport simultaneously. The first mobile viewport must, however, establish category/value and show or immediately lead into credible Product evidence.

## 3. Required verification widths

At minimum evaluate:

- 1440 × 900;
- 1280 × 800;
- 1024-class desktop/tablet boundary;
- 768 × 1024;
- 390 × 844;
- 320 CSS px reflow;
- 200% text/reflow equivalent evidence where applicable.

Use additional breakpoints based on actual composition failures, not a fixed framework taxonomy.

## 4. Wide desktop

Wide desktop is the primary canvas for ambitious Hero art direction.

Allowed:

- full-bleed media;
- asymmetric grid;
- large overlapping Product window;
- oversized editorial type;
- sticky/canvas/video layers;
- chapter/progress UI;
- edge-to-edge background world;
- visual elements extending beyond ordinary content max widths.

Keep essential text within readable line lengths and key controls away from unsafe viewport edges.

## 5. Compact desktop / tablet landscape

Do not wait until text becomes cramped to change composition.

Potential adaptations:

- scale/crop brand art independently from Product UI;
- move Product evidence below/over copy;
- simplify secondary Product chrome;
- reduce simultaneous layers;
- switch from multi-column Product UI to a focused evidence state;
- shorten/pause heavy ambient visual systems when device capability warrants it.

## 6. 768/tablet portrait

Tablet is not required to preserve the wide Hero split.

Prefer a deliberate composition such as:

```text
brand/copy
-> primary action
-> signature art / Product stage
-> chapter continuation
```

or an intentionally layered alternative.

Avoid a miniature unreadable desktop Product window.

## 7. Mobile 390-class

Mobile must be separately art-directed.

Possible mobile language:

- strong vertical typography;
- cropped/zoomed signature illustration;
- one focused Product evidence card/state;
- chapter dots/progress rather than wide nav;
- simplified ambient motion;
- explicit vertical state transitions;
- touch-driven Product demo instead of hover;
- static poster in reduced-motion/data-constrained path.

The Hero does not need to show every desktop layer. It must still feel premium and intentional rather than like a stack produced by media queries.

## 8. Narrow mobile 320-class

Hard requirements:

- no horizontal page scroll;
- no essential 10–11px text to preserve desktop geometry;
- controls remain comfortably targetable;
- Product evidence remains legible;
- copy may gain lines rather than shrink excessively;
- layered art may crop/simplify/reposition;
- navigation may collapse into the smallest truthful pattern required by actual destinations.

Use 16–20px page gutters as the composition requires; do not treat a specific old gutter value as sacred.

## 9. Responsive Product UI

When Product UI cannot remain fully legible, preserve in this semantic priority:

1. awaited outcome / matter identity;
2. latest relevant evidence;
3. explicit current consequence (`あなたの対応はまだ必要ありません` or attention return);
4. continued-monitoring / why-now meaning;
5. Source path;
6. counterparty/context;
7. secondary metadata;
8. ordinary navigation chrome.

Simplify or restage 7–8 before weakening 1–5.

Desktop sidebars/navigation are marketing staging, not sacred Product truth.

## 10. Art-directed assets

Do not rely on one raster crop for every device when that damages the composition.

Use where appropriate:

- `<picture>` / responsive image sources;
- separate mobile/desktop generated art crops;
- alternate poster frames;
- different video encodes;
- SVG/vector responsive composition;
- Rive responsive layout;
- canvas scene parameters based on viewport/capability.

Document whether variants are crops of one source or materially different artwork.

## 11. Motion responsiveness

Motion may vary by viewport and input mode.

Desktop can use hover, larger parallax, pointer depth or long sticky sequences when justified.

Mobile should prefer:

- touch-safe interactions;
- shorter visual travel;
- fewer simultaneously moving layers;
- lower GPU/media cost;
- no required hover semantics;
- no scroll trap.

Reduced-motion is independent from screen size and must be respected everywhere.

## 12. Capability/performance adaptation

A high-end desktop effect must not force the same runtime burden onto every phone.

Where useful, adapt based on:

- viewport;
- reduced-motion;
- coarse pointer/touch;
- page visibility/intersection;
- reasonable runtime capability signals.

Avoid brittle device-model detection.

## 13. Typography and localization

- Japanese copy may have art-directed line breaks at a specific accepted reference viewport;
- those breaks must be re-evaluated at other widths;
- no global `<br>` should create obviously bad English/localized layouts later;
- longer strings expand/reflow instead of shrinking below readable size;
- display typography can change scale dramatically between mobile/desktop;
- body/Product UI readability remains stable.

## 14. Visual regression philosophy

Do not expect pixel identity between viewport classes.

For each accepted viewport, create its own visual oracle/reference and evaluate:

- composition;
- hierarchy;
- brand continuity;
- Product semantics;
- text fit;
- asset crop;
- motion state/poster;
- no overlap/clipping/overflow;
- interaction reachability.

Pixel/perceptual comparison is valid against the **same viewport's accepted reference**, not against a scaled desktop screenshot.

## 15. Freeze rule

Responsive geometry/tokens freeze only after the owner has accepted at least representative wide desktop and mobile browser compositions of the winning art direction.

A strong desktop Hero with a generic/broken mobile stack cannot close M10.
