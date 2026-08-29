# Lunowa M10 Structured Visual Authority — 2026-08-30

Status: **M10 FREEZE CANDIDATE — INTERNAL FULL AUDIT IN PROGRESS / OWNER VISUAL CONFIRMATION PENDING**.

Read with:

- `docs/visual-oracle/MANIFEST.md`
- `docs/tokens/lunowa-m10.tokens.json`
- `docs/M10-TOKEN-CONTRACT.md`
- `docs/M10-RESPONSIVE-SPEC.md`
- `docs/HOMEPAGE.md`
- `docs/DESIGN.md`
- `docs/MOTION.md`
- current Product authority in `miki-thecat/lunowa`.

This authority is based on the internally audited **P — Product Proof Baseline** recommendation. It is neither independent-user validation nor final Product-owner visual acceptance until the owner reviews the M10 candidate.

## 1. Selected thesis

- visual: **Quiet Product Proof**;
- acquisition: **P — Product Proof Baseline**;
- motion: **static-first; optional reinforcement only**;
- reuse: **reuse ordinary mechanics; custom-design Product meaning**.

The page should feel familiar as high-quality software marketing while making Lunowa distinctive through the behavior it demonstrates.

## 2. Complete page order

```text
minimal Header
-> category/mechanism cue
-> H1 + concise support + primary CTA
-> large believable Lunowa Product stage
-> repeated-checking problem
-> 返信 ≠ 完了
-> quiet monitoring / no user action
-> material outcome / attention required
-> return context / Source
-> Trust / Control
-> early-access boundary
-> material FAQ
-> final CTA + minimal Footer
```

One section owns one visitor question. Do not replace this with a generic feature-card inventory.

## 3. Header

Desktop:

- Lunowa wordmark/name at left;
- only a few plain anchors such as `仕組み`, `FAQ` when destinations exist;
- one primary early-access CTA;
- no announcement bar without an actual announcement;
- no mega menu, command palette, blur island or scroll choreography.

Mobile:

- brand + primary CTA may remain visible directly;
- add a menu only if final navigation needs it;
- do not hydrate merely because a reference component used React.

## 4. Hero copy and hierarchy

Required hierarchy:

1. category/mechanism cue;
2. H1;
3. one support sentence;
4. primary CTA;
5. Product proof.

Current copy:

- cue: `返信待ち・資料待ちを、Lunowaが代わりに見守る。`
- H1: `メールを、確認し続けなくていい。`
- support: `必要な結果が届くまで見守り、あなたの対応が必要になった時だけ戻します。`
- CTA: `先行アクセスに登録`

The H1 is not self-sufficient. Keep explicit email/category/mechanism evidence nearby unless a reviewed later copy provides equal or stronger category clarity.

## 5. Hero Product proof

Desktop authority: `docs/visual-oracle/hero-desktop.svg`.

The initial still Product stage visibly contains:

- recognizable email/conversation context;
- counterparty;
- awaited outcome = quotation;
- latest intermediate reply = `社内確認中です。明日送ります。`;
- `あなたの対応はまだ必要ありません`;
- continued-monitoring consequence;
- original-email/Source path.

Avoid unrelated inbox controls. Product UI should feel believable but task-focused.

## 6. `返信 ≠ 完了` proof

The same matter remains continuous across states.

### Intermediate evidence

- reply arrived;
- quotation did not;
- no material user action;
- Lunowa keeps monitoring.

### Material outcome

Authority: `docs/visual-oracle/state-attention-desktop.svg`.

- quotation arrives;
- attention becomes necessary;
- amount/delivery-date review is requested;
- attachment is visible;
- Source remains available.

Do not imply that attachment arrival itself proves the entire Responsibility is safely closed.

## 7. Return context

Authority: `docs/visual-oracle/state-return-context-desktop.svg`.

The return state answers:

- what changed? — quotation arrived;
- what remains? — check amount and delivery date;
- evidence? — latest source text + attachment;
- original? — direct Source path.

`今の要点` is acceptable user-facing language; internal ontology names are unnecessary.

## 8. Lower-page rhythm

Authority: `docs/visual-oracle/lower-page-overview.svg`.

- Problem: retain E's useful insight — `「あの件、どうなった？」を頭の片隅に置き続けること。`
- Distinction: concrete intermediate-vs-material-outcome comparison.
- Monitoring: explain what the user can stop checking.
- Return: continue the same quotation scenario.
- Trust: use the dedicated Trust/Control authority.
- Early access/FAQ: keep runtime-dependent claims narrow.

Adjacent cards are justified only where two real Product states are being compared; do not turn the page into a generic card grid.

## 9. Trust / Control

Authority: `docs/visual-oracle/trust-control-desktop.svg`.

Trust is shown through consequences rather than badges:

1. original Source can be inspected;
2. uncertainty is not promoted into fake certainty;
3. external actions/results are not represented as happened unless supported by evidence/state.

No generic security shields, certification logos, encryption badges or vague `enterprise-grade` wording without exact authority.

## 10. Responsive/mobile authority

Authorities:

- `docs/M10-RESPONSIVE-SPEC.md`;
- `docs/visual-oracle/hero-mobile.svg`;
- `docs/visual-oracle/product-story-mobile.svg`.

Mobile is a recomposition, not a scaled desktop screenshot.

Required semantics include awaited outcome, latest reply, no-action consequence, continued monitoring, Source, material-outcome arrival and attention-required state.

At 320px, use the frozen narrow type/reflow behavior rather than shrinking Product evidence into illegibility.

## 11. Typography and color

Exact semantic values live in:

- `docs/tokens/lunowa-m10.tokens.json`;
- `docs/M10-TOKEN-CONTRACT.md`.

Implementation may use component-specific type sizes explicitly visible in these SVG authorities, but must not inherit arbitrary third-party values.

Color meaning:

- green = quiet monitoring / no current attention;
- amber = attention now required;
- red = genuine integrity/error only;
- cobalt = restrained link/category/focus accent;
- warm near-white/deep-neutral = foundation.

Never use color alone as state meaning.

## 12. Shape / depth

- restrained tokenized radii;
- borders before shadows;
- Product stage may receive only subtle shadow if real-browser comparison improves hierarchy;
- no glassmorphism, universal pills or floating-card wall.

## 13. Motion

No motion is required for the accepted design thesis.

Any later M30 motion must:

- use the same Product-state authority;
- preserve object continuity;
- not alter Product semantics;
- remain non-essential;
- flatten cleanly under Reduced Motion;
- avoid perpetual ambient animation.

## 14. Reuse / implementation mapping

- static marketing bands default to Astro/native semantic markup;
- React islands only for real interaction;
- shadcn/Base UI only where an interactive primitive helps;
- open/premium blocks may provide structure but must map into Lunowa tokens;
- no whole generic SaaS template;
- borrowed code requires provenance/license/dependency evidence.

The visual authority owns the result, not a component vendor.

## 15. Copy/truth freeze boundary

Frozen candidate:

- Product positioning/order;
- canonical quotation scenario;
- Hero copy/current text;
- `返信 ≠ 完了` narrative;
- monitoring/attention/Source meanings;
- early-access CTA intent;
- Product-semantic FAQ answers in the manifest.

Still runtime/release-bound:

- public supported-provider wording;
- language availability;
- beta/access timing;
- confirmation behavior after waitlist registration;
- pricing;
- deployed security/privacy claims.

Later runtime-bound copy may change without reopening the whole visual thesis unless truthful wording materially affects layout/comprehension.

## 16. External-validation debt

No independent first-time visitor evidence exists yet.

Current candidate is:

- Product-truth checked;
- internally audited/recommended;
- code-owned and implementation-deterministic.

It is not evidence that real visitors definitely understand or convert better. Future preview/beta/traffic evidence may require correction.

## 17. Owner confirmation boundary

Before M10 #3 can be called finally accepted/closed, the Product owner should review the current visual-oracle candidate itself.

Owner review is a Product/design authority check, **not a first-time visitor test**.

The owner may:

- accept P visual authority;
- reject material aesthetics/composition/copy;
- request a bounded correction.

Aesthetic preference must not reintroduce known Product-truth or wrong-model blockers without explicit adjudication.

## 18. Freeze rule after owner acceptance

After M10 acceptance, M20/Codex must not silently:

- restart Hero concept generation;
- revive E as a separate Hero without new evidence;
- switch palette because a library default looks nicer;
- add decorative AI effects;
- add motion because a demo contains it;
- invent availability/security/performance claims;
- reinterpret mobile as a scaled desktop screenshot.

Material deviations require an explicit reviewed authority change.
