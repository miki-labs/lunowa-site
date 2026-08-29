# S05 Stimulus Manifest — 2026-08-30

Status: participant-stimulus artifact binding for Issue #14. This is not M10 final visual authority and does not record participant evidence.

## Artifact set

| Artifact | Role | Viewport | Clean first-impression scrolling | Motion | Current blob |
|---|---|---:|---|---|---|
| `docs/stimuli/P-v1.svg` | P — Product Proof Baseline | 1440×900 | none | none | `0dd12d831cd1fc8020bde478c9fca6463af5427e` |
| `docs/stimuli/E-v1.svg` | E — Editorial Problem-First Dark Horse | 1440×900 | none | none | `58b55b02abe867b0191e93f3125a4e4d8db63ca1` |
| `docs/stimuli/shared-lower-v1.svg` | shared post-Hero continuation | 1440×2200 | shown only after clean first-impression questions | none | `0e7026b2dfc7230af6c1448e831aa85cc5284d82` |

If any artifact changes, this manifest binding is stale and Issue #14 acceptance must be reconsidered.

## Product-state binding

All three artifacts are bound to the canonical quotation scenario from current Product authority:

```text
User requests quotation
-> tracked unresolved outcome

Counterparty intermediate reply:
社内確認中です。明日送ります。

Current truth:
quotation not yet received
-> evidence changed
-> no material user action required
-> Lunowa continues quiet monitoring

Later material outcome:
見積書を添付しました。ご確認ください。
-> user review becomes necessary
```

No artifact treats reply arrival itself as completion.

## Common-shell binding

P/E share:

- 1440×900 viewport;
- identical header geometry/content;
- identical primary CTA treatment and action;
- identical page/surface/color grammar;
- identical Product-stage geometry and Product state;
- identical Product-stage typography and wording;
- identical static-only condition;
- no social proof, stats, pricing, unsupported security claim, logos or testimonials.

The intended experimental difference is acquisition hierarchy/copy above the shared Product stage.

### P-v1 acquisition hierarchy

1. category/mechanism cue;
2. `メールを、確認し続けなくていい。`;
3. concise mechanism support;
4. CTA;
5. large Product proof.

### E-v1 acquisition hierarchy

1. repeated-checking burden;
2. `その確認を、Lunowaに任せる。`;
3. concise mechanism support;
4. same CTA;
5. same large Product proof.

E is not allowed to receive extra `Reply != Done` explanation during clean exposure; that content lives only in the shared lower continuation after unaided first-impression questions.

## Provisional stimulus token snapshot

These values are **S05 stimulus values**, not M10 final brand freeze.

### Surfaces/text

- page: `#F8F8F5`
- surface: `#FFFFFF`
- primary text: `#181817`
- secondary text: `#686864`
- subtle text: `#777772`
- border: `#D8D8D2` / `#E1E1DC`

### Semantic accents

- link/category accent: `#355F91`
- monitoring surface: `#EDF6F1`
- monitoring text/icon: `#3D6D58`
- monitoring secondary text: `#66706A`
- attention surface: `#FFF5E8`
- attention text: `#8A571C` / `#735F49`

### Type family stack

`Inter, Noto Sans JP, Hiragino Sans, Yu Gothic, sans-serif`

This stack is provisional. Final typography is M10 scope.

## Contrast spot-check

Calculated WCAG contrast ratios for material normal-text pairs:

- `#181817` on `#F8F8F5`: ~16.70:1
- `#686864` on `#F8F8F5`: ~5.26:1
- `#355F91` on `#F8F8F5`: ~6.17:1
- `#3D6D58` on `#EDF6F1`: ~5.40:1
- `#66706A` on `#EDF6F1`: ~4.66:1
- `#8A571C` on `#FFF5E8`: ~5.63:1
- `#735F49` on `#FFF5E8`: ~5.63:1
- `#777772` on `#FFFFFF`: ~4.50:1

These checks do not replace rendered browser/zoom/accessibility verification at implementation time.

## Provenance

No third-party block source code was copied into these SVG stimuli.

Structural/craft references only:

- current `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md`;
- 7Ovr simple Header / SaaS landing structural families;
- Tailwind Plus simple centered Hero/content/CTA/FAQ/footer families;
- Tailark marketing-block craft/reference patterns;
- current Linear / Cursor / Granola / Attio Product-proof patterns documented in R05.

Because these are structural references rather than copied source, no third-party runtime dependency is introduced by S05.

## Participant-use boundary

Clean first impression:

1. show exactly one of P-v1 or E-v1 at 1440×900;
2. do not scroll during the bounded initial exposure;
3. collect the three canonical unaided questions before explaining Lunowa or showing the alternate condition;
4. only then may the shared lower-page continuation be shown for post-Hero probing;
5. do not introduce motion in this first round.

## Staleness rule

Any change to copy, geometry, token values, Product state, viewport, motion, or shared-shell equality after this manifest requires a new artifact version or explicit manifest update and renewed pre-research audit.
