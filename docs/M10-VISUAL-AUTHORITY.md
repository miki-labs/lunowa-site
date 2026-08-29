# Lunowa M10 Structured Visual Authority — 2026-08-30

Status: **M10 FREEZE CANDIDATE — P DIRECTION / STATIC-FIRST / CODE-OWNED**.

Read with:

- `docs/visual-oracle/MANIFEST.md`
- `docs/tokens/lunowa-m10.tokens.json`
- `docs/M10-TOKEN-CONTRACT.md`
- `docs/HOMEPAGE.md`
- `docs/DESIGN.md`
- `docs/MOTION.md`
- current Product authority in `miki-thecat/lunowa`.

This authority is internally audited and owner-selected. It is **not external user validation**.

## 1. Selected thesis

### Visual thesis

> **Quiet Product Proof**

### Acquisition thesis

> **P — Product Proof Baseline**

### Motion thesis

> **Static-first. Motion is optional reinforcement, not an explanatory dependency.**

### Reuse thesis

> **Reuse ordinary mechanics; custom-design Product meaning.**

The homepage should feel familiar as high-quality software marketing while making Lunowa distinctive through the actual behavior it demonstrates.

## 2. Complete page order

```text
minimal Header
↓
category/mechanism cue
↓
H1 + concise support + primary CTA
↓
large believable Lunowa Product stage
↓
repeated-checking problem
↓
返信 ≠ 完了
↓
quiet monitoring / no user action
↓
material outcome / attention required
↓
return context / Source
↓
Trust / Control
↓
early-access boundary
↓
material FAQ
↓
final CTA + minimal Footer
```

One section owns one visitor question. Do not replace this with a generic feature-card inventory.

## 3. Header

Desktop:

- Lunowa wordmark/name at left;
- maximum a few plain anchors such as `仕組み`, `FAQ` when the destination exists;
- one primary early-access CTA;
- no announcement bar unless there is an actual announcement;
- no mega menu, command palette, blur island or scroll choreography.

Mobile:

- brand + primary CTA may remain directly visible;
- add a menu only if final navigation requires it;
- do not hydrate a mobile menu merely because a reference component used React.

## 4. Hero copy and hierarchy

Required current hierarchy:

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

The H1 is not self-sufficient. Keep explicit email/category/mechanism evidence nearby unless a later reviewed copy change provides equal or stronger category clarity.

## 5. Hero Product proof

Desktop authority: `docs/visual-oracle/hero-desktop.svg`.

The initial still Product stage must visibly contain:

- recognizable email/conversation context;
- counterparty;
- tracked/awaited outcome = quotation;
- latest intermediate reply = `社内確認中です。明日送ります。`;
- explicit user consequence = `あなたの対応はまだ必要ありません`;
- explicit continued-monitoring consequence;
- original-email/Source path.

Avoid unrelated inbox controls. The UI should feel believable but task-focused.

## 6. `返信 ≠ 完了` proof

The same object must remain continuous across states.

### State A — intermediate evidence

- reply arrived;
- requested quotation did not;
- no material user action;
- Lunowa keeps monitoring.

### State B — material outcome

Authority: `state-attention-desktop.svg`.

- quotation arrives;
- attention state becomes visible;
- user is asked to review amount and delivery date;
- attachment is visible;
- Source remains available.

Do not imply that attachment arrival alone proves the entire Responsibility is safely closed after the user's review/action; the marketing state only proves that user attention is now warranted.

## 7. Return context

Authority: `state-return-context-desktop.svg`.

Return context must answer with minimal reconstruction:

- **what changed?** quotation arrived;
- **what remains?** check amount and delivery date;
- **what is the evidence?** latest source text + attachment;
- **where is the original?** original email path.

This section may use user-friendly `今の要点` wording. Internal ontology names are not required.

## 8. Lower-page rhythm

Authority: `lower-page-overview.svg`.

### Problem band

Use E's strongest retained insight:

> `「あの件、どうなった？」を頭の片隅に置き続けること。`

This self-recognition belongs below the Product-first Hero.

### Distinction band

Use one concrete before/after comparison:

- intermediate reply / no action;
- material result / attention required.

This is one of the few places where adjacent cards/containers are semantically justified because two states are being compared.

### Monitoring band

Explain what the user can stop doing, not merely a `Managed` label.

### Return band

Continue the same quotation matter. Do not swap scenarios merely to showcase more features.

### Trust band

Use `trust-control-desktop.svg` for detailed authority.

### Availability / FAQ / CTA

Keep early access narrow and truthful. Exact post-registration behavior/provider availability remains owned by later runtime/waitlist work.

## 9. Trust / Control

Authority: `trust-control-desktop.svg`.

Trust is shown through user consequences rather than badges:

1. original email/source can be inspected;
2. uncertainty is not promoted into fake certainty;
3. external actions/results are not represented as happened unless supported by actual evidence/state.

Do not add generic security shields, certification logos, encryption badges or vague `enterprise-grade` language without exact current authority.

## 10. Mobile semantic projection

Authorities:

- `hero-mobile.svg`
- `product-story-mobile.svg`

Mobile is a recomposition, not a desktop screenshot scale transform.

Required first-screen order:

1. brand/CTA;
2. category cue;
3. H1;
4. concise support;
5. CTA;
6. simplified Product proof.

Required Product semantics on mobile:

- awaited outcome;
- latest reply;
- no-action consequence;
- continued monitoring;
- Source;
- later material-outcome/attention-required state.

At 320px:

- use the frozen 36/44 narrow Hero size if required;
- reduce horizontal padding only to the accepted reflow boundary;
- never shrink Product text until unreadable;
- stack states vertically;
- no horizontal scroll.

## 11. Typography

Exact family/role values live in the token source/contract.

Design intent:

- large headings are limited to actual Hero/section statements;
- Japanese readability outranks aggressive letter-spacing aesthetics;
- Product UI is compact but not decorative-small;
- hierarchy comes from size/weight/spacing before excess color.

Implementation may refine individual component typography only when the SVG/spec itself clearly uses a component-specific size. Such values must be copied from the authority rather than invented from a third-party template.

## 12. Color / semantic state

Exact semantic colors are frozen in `lunowa-m10.tokens.json`.

Meaning:

- green family = quiet monitoring / no current user attention;
- amber family = attention now required;
- red family = genuine integrity/error only;
- cobalt = restrained link/category/focus accent;
- near-white/deep-neutral = page/product foundation.

Never use color alone as state meaning.

## 13. Shape / depth

- restrained control/surface/Product radii from tokens;
- borders before shadows;
- Product stage can receive a very subtle shadow only if browser comparison improves hierarchy;
- no glassmorphism;
- no universal pills;
- no floating-card wall.

## 14. Motion

No motion is required to implement the accepted homepage.

If M30 later adds motion, it must:

- use the same Product state authority;
- preserve object continuity;
- not alter Product semantics;
- remain non-essential;
- stop/flatten cleanly under Reduced Motion;
- avoid perpetual ambient animation.

## 15. Reuse / implementation mapping

For M20/M30/M40:

- static marketing bands should default to Astro/native semantic markup;
- React islands only for actual interaction;
- shadcn/Base UI only where a real interactive primitive helps;
- open/premium blocks may provide structure but must be mapped into Lunowa tokens;
- no whole generic SaaS template;
- every material borrowed code source requires provenance/license/dependency evidence.

The visual oracle owns result, not a specific component vendor.

## 16. Copy/truth freeze boundary

Frozen now:

- Product positioning/order;
- canonical quotation scenario;
- Hero copy family/current text;
- `返信 ≠ 完了` narrative;
- monitoring/attention/Source meanings;
- early-access CTA intent;
- material Product-semantic FAQ answers in the manifest.

Still runtime/release-bound:

- supported providers shown publicly;
- language availability claims;
- exact beta/access timing;
- what confirmation is sent after waitlist registration;
- pricing;
- security/privacy claims tied to deployed behavior.

Later tasks may adjust only these runtime-bound copies without reopening the whole M10 visual thesis, unless their truthful wording materially changes layout/comprehension.

## 17. External-validation debt

The selected direction has not been independently tested with first-time visitors.

Current authority is valid for implementation because:

- Product truth is canonical and live-checked;
- P/E were controlled enough for structured internal comparison;
- P passed the full internal comprehension-risk audit;
- the owner accepted P as the lower-risk/lower-complexity direction;
- code-owned tokens/references now remove implementation ambiguity.

But this does **not** prove real first-time comprehension or conversion.

When independent preview users/traffic exist, external evidence may require correction.

## 18. Freeze rule

After M10 acceptance, M20/Codex must treat this authority as the visual/design input.

Do not:

- restart Hero concept generation;
- reintroduce E as a separate Hero without new evidence;
- switch palettes because a library default looks nicer;
- add decorative AI effects;
- add motion because a component demo contains it;
- make unsupported availability/security/performance claims;
- reinterpret mobile as a scaled desktop screenshot.

Material deviations require an explicit reviewed change to the owning contract/authority.
