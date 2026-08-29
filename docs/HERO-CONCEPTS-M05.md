# M05 Hero Concept Set

Status: pre-visual, low/mid-fidelity concept contract for directional first-impression testing. None is visual authority.

The purpose of this file is to prevent the next visual round from collapsing back into one generic AI-SaaS aesthetic. Each concept changes how the visitor understands Lunowa, not merely color or typography.

All concepts use the same Product truth and the same basic quotation scenario so concept differences can be interpreted without also changing the underlying job.

## Shared Product scenario

1. User has asked a counterparty for a quotation by a date.
2. Lunowa is watching for the required outcome.
3. Counterparty replies: `社内確認中です。明日送ります。`
4. User still does not need to act; Lunowa continues monitoring.
5. `見積書.pdf` arrives.
6. User attention becomes necessary.
7. Lunowa returns concise context and Source access.

No concept may imply that a reply alone completes the matter, that Lunowa autonomously sends email, or that unsupported security/performance claims are true.

---

## Concept A — Product First / Static Proof

### Hypothesis

The fastest correct mental model may come from showing a believable Lunowa surface immediately, with motion unnecessary for the first ten seconds.

### First viewport

Small category/mechanism line:

> 返信待ち・資料待ちを、Lunowaが代わりに見守る。

H1:

> **メールを、確認し続けなくていい。**

Supporting copy:

> 必要な結果が届くまでLunowaが見守り、あなたの対応が必要になった時だけ戻します。

CTA:

> 先行アクセス

Primary visual: one large real-looking Lunowa UI already in the intermediate-reply state:

- subject / counterparty visible;
- `見積書を待っています`;
- latest email text `社内確認中です。明日送ります。`;
- explicit user consequence `あなたの対応はまだ必要ありません`;
- Source affordance visible but subordinate.

### What this concept tests

Can static real Product UI communicate the category and offloaded-monitoring value without animation or explanatory diagrams?

### Main risk

The visitor may understand `waiting tracker` but not the deeper Reply != Done transition unless lower-page content does enough work.

---

## Concept B — Product First / User-Controlled Temporal Demo

### Hypothesis

The key differentiation is temporal, so a short user-controlled demo may create a stronger `aha` than a static frame while avoiding autoplay confusion.

### First viewport before interaction

Same category cue/H1/value copy family as Concept A.

Primary visual begins as a meaningful static Lunowa UI:

> 見積書を待っています

Button integrated near the Product stage:

> 15秒で見る

### Playback

One focal event at a time:

1. Intermediate reply appears.
2. Lunowa explicitly remains in quiet monitoring.
3. Pause/stillness.
4. Quotation attachment arrives.
5. Item becomes attention-worthy.
6. Concise return context appears.

End state remains visible. No infinite loop. Replay is explicit.

### What this concept tests

Does a controlled temporal demonstration materially improve understanding of `reply != outcome completion` without increasing confusion or making Lunowa feel like a generic animation-led AI site?

### Main risks

- visitor may not press Play;
- motion may capture attention without improving category understanding;
- if timing or focus is poor, the visitor may miss the decisive non-event after the intermediate reply.

---

## Concept C — Familiar Email Situation -> Lunowa Consequence

### Hypothesis

A visitor may understand Lunowa fastest when the page begins with a situation they already recognize before presenting the Product surface.

### First viewport composition

H1:

> **メールを、確認し続けなくていい。**

Immediately below or beside it, show a recognizable email exchange rather than an abstract Product dashboard:

> あなた: `金曜までに見積書をお願いします。`
>
> 相手: `社内確認中です。明日送ります。`

Then a visually direct Lunowa consequence:

> **まだ確認しなくて大丈夫です。**
>
> Lunowaが見積書の到着を引き続き見守ります。

CTA follows after this one-step explanation.

The larger Lunowa Product surface begins immediately below the fold and continues the same scenario.

### What this concept tests

Does starting from a familiar user situation create stronger self-recognition and category comprehension than starting from Product chrome?

### Main risks

- can look like a marketing illustration rather than a real application if the transition to authentic Product UI is too weak;
- first viewport may become copy-heavy;
- may under-signal that Lunowa is a full Product rather than a single email rule.

---

## Concept D — Dual-State Product Comparison

### Hypothesis

The differentiation may be understood fastest by juxtaposing the exact same thread in two semantic moments without using an abstract timeline.

### First viewport

Category cue + H1 + concise supporting copy.

Below, one Product frame has two clearly related snapshots of the same item:

**After intermediate reply**

> `社内確認中です。明日送ります。`
>
> Lunowa: `まだ対応は必要ありません。`

**After material outcome**

> `見積書.pdf`
>
> Lunowa: `対応が必要です。金額と納期を確認してください。`

The two states should read as one Product object changing meaning, not two feature cards.

### What this concept tests

Can the temporal difference be understood immediately through a static before/after comparison, avoiding the attention cost of animation?

### Main risks

- simultaneous comparison may increase first-viewport complexity;
- visitor may read it as a generic before/after marketing graphic unless Product continuity is unmistakable.

---

## Explicitly excluded concept family

Do not regenerate the rejected dark navy / purple / glow / planet-orb / icon-timeline concept as a cosmetic variant.

Also exclude from the M05 primary set:

- generic AI orb or 3D centerpiece;
- abstract flowchart as Hero proof;
- feature-card grids above the first Product proof;
- autoplay cinematic video that is required for basic comprehension;
- fake social proof;
- unsupported encryption/security badges;
- `AI email assistant` as the primary category label.

## Recommended first testing set

Start with A, B, and C. Use D if resources permit or if A/B/C fail to separate the important hypotheses.

The first round should answer:

- Is real Product UI alone enough?
- Does temporal motion improve the key distinction?
- Does beginning with a familiar email situation improve self-recognition and comprehension?

Do not select a winner before `docs/FIRST-IMPRESSION-VALIDATION.md` evidence is collected.