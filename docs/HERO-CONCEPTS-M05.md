# M05 Hero Concept Set

Status: canonical low/mid-fidelity concept contract for directional first-impression testing. None is final visual authority.

The purpose of this file is to prevent visual work from collapsing into one generic AI-SaaS aesthetic and to keep the comparison method interpretable. Each concept changes how a first-time visitor is introduced to Lunowa, not merely color or typography.

All concepts use the same Product truth and the same quotation scenario so layout/composition differences are not confounded with different jobs-to-be-done.

## 1. Shared Product scenario

1. User has asked a counterparty for a quotation by a date.
2. Lunowa is watching for the requested outcome.
3. Counterparty replies: `社内確認中です。明日送ります。`
4. User still does not need to act; Lunowa continues monitoring.
5. `見積書.pdf` arrives.
6. User attention becomes necessary.
7. Lunowa returns concise context and Source access.

No concept may imply that a reply alone completes the matter, that Lunowa autonomously sends email, or that unsupported security/performance claims are true.

## 2. Current evidence constraints

Current evidence does not prove one unique best SaaS Hero. It does support the following bounded constraints:

- use recognizable Product/category cues rather than requiring interpretation of abstract symbols;
- reduce simultaneous first-viewport visual competition;
- use concrete Product content before internal ontology;
- treat real Product UI as proof where the UI itself communicates the job;
- keep each section focused on one visitor question;
- treat motion as a separate hypothesis unless the experiment is designed to isolate it.

Current live Product-marketing examples such as Linear, Cursor, Granola, Attio and Fyxer all pair explicit category/value language with recognizable Product/workflow surfaces. This is industry observation, not causal proof for Lunowa.

## 3. Experimental decomposition

Do **not** directly crown `static A` versus `interactive B` from one small first-impression sample. That would confound information architecture with playback/interaction.

Use two stages:

### Stage 1 — static first-impression structure

Compare materially different static compositions under the same exposure protocol:

- A — Product First / Static Proof
- C — Familiar Situation First
- D — Static Dual-State Comparison

The same H1/value family, Product scenario, viewport class and approximate exposure duration should be held as constant as practical. Differences that are intentionally part of the concept must be recorded.

### Stage 2 — temporal mechanism

After an eligible static structure exists, compare that **same structure/content** with and without restrained temporal motion:

- static base
- motion-enabled variant B

This stage asks whether motion improves understanding of `intermediate reply -> still no action -> material outcome -> attention required` enough to justify the added complexity.

This decomposition is preferred because the key motion question should not be mixed with a completely different information architecture.

---

## Concept A — Product First / Static Proof

### Hypothesis

The fastest correct mental model may come from showing a believable Lunowa surface immediately, with motion unnecessary for basic comprehension.

### First viewport

Category/mechanism line:

> 返信待ち・資料待ちを、Lunowaが代わりに見守る。

H1:

> **メールを、確認し続けなくていい。**

Supporting copy:

> 必要な結果が届くまでLunowaが見守り、あなたの対応が必要になった時だけ戻します。

Primary CTA:

> 先行アクセス

Primary visual: one large real-looking Lunowa surface in the intermediate-reply state.

Required visible content:

- recognizable sender/thread/subject context;
- `見積書を待っています` or equivalent user-facing monitoring statement;
- latest email: `社内確認中です。明日送ります。`;
- explicit consequence: `あなたの対応はまだ必要ありません`;
- original Source affordance visible but subordinate;
- no abstract state timeline required to understand the screen.

The Product surface should be the dominant visual anchor and should not be squeezed into a decorative side card.

### What this concept tests

Can recognizable Product UI plus explicit user consequence communicate monitoring offload without animation or explanatory diagrams?

### Main risk

The visitor may understand only `waiting tracker` and not the deeper outcome-level distinction.

---

## Concept C — Familiar Situation First -> Product Consequence

### Hypothesis

A visitor may understand Lunowa faster when the first screen begins from an email situation they already recognize, then immediately shows Lunowa's consequence.

### First viewport

H1:

> **メールを、確認し続けなくていい。**

Recognizable exchange:

> あなた: `金曜までに見積書をお願いします。`
>
> 相手: `社内確認中です。明日送ります。`

Immediate Lunowa consequence:

> **まだ確認しなくて大丈夫です。**
>
> Lunowaが見積書の到着を引き続き見守ります。

Primary CTA remains visible in the first viewport. A believable Lunowa Product surface begins in the same viewport where practical or immediately below; the visitor must not leave the first screen thinking this is merely an email-rule illustration.

### What this concept tests

Does self-recognition in a familiar situation improve correct Product/category comprehension versus Product-first chrome?

### Main risks

- can become copy-heavy;
- can look like a marketing illustration instead of real software;
- may under-signal that Lunowa is a broader Product rather than one hard-coded rule.

---

## Concept D — Static Dual-State Product Comparison

### Hypothesis

The distinctive temporal rule may be understood quickly through two snapshots of the **same Product object** without requiring motion.

### First viewport

Category cue + H1 + concise supporting copy.

One continuous Product frame shows two clearly related semantic moments:

**After intermediate reply**

> `社内確認中です。明日送ります。`
>
> Lunowa: `まだ対応は必要ありません。`

**After material outcome**

> `見積書.pdf`
>
> Lunowa: `対応が必要です。金額と納期を確認してください。`

The relationship between the two states must be unmistakably one thread/item changing meaning. Do not render them as two unrelated feature cards.

### What this concept tests

Can a static before/after comparison teach `Reply != Done` more clearly than one single state without exceeding the first-viewport complexity budget?

### Main risks

- simultaneous comparison can increase visual complexity;
- can read like a marketing infographic instead of a Product surface;
- may reveal too much before the visitor knows the baseline category.

---

## Concept B — Motion Variant of an Eligible Static Structure

### Status

B is no longer a separate first-impression information architecture. It is a **motion treatment applied to the strongest eligible static structure from Stage 1**.

### Hypothesis

Because Lunowa's key distinction is temporal, restrained user-controlled motion may produce a stronger `aha` than the same static structure.

### Static initial state

Before interaction, the Hero must already communicate what Lunowa does. Motion may not be required for baseline comprehension.

Control near the Product stage:

> 15秒で見る

### Playback

One focal change at a time:

1. Intermediate reply appears.
2. Lunowa explicitly remains in quiet monitoring.
3. Deliberate stillness.
4. Quotation attachment arrives.
5. Item becomes attention-worthy.
6. Concise return context appears.
7. End state remains visible; replay is explicit.

No infinite loop. Reduced-motion uses static key states with equivalent explanation.

### What this concept tests

Does temporal motion improve understanding of `reply != outcome completion` and confidence in delegated monitoring enough to justify the added motion/interaction cost?

### Main risks

- visitor may not trigger playback;
- motion may capture attention without improving understanding;
- poor timing can make the decisive non-event after intermediate reply invisible;
- autoplay/user-trigger differences can contaminate comparison if not recorded separately.

## 4. Lower-page composition shared across concepts

M05 must not evaluate a Hero disconnected from the rest of the page. After the first-impression measurement, each concept continues through the same visitor-question sequence:

1. `メールの負担は、読むことだけではありません。`
2. `返信が来ても、終わっていないことがある。`
3. `必要でない間は、Lunowaが見ています。`
4. `必要になった時だけ、あなたに戻します。`
5. `戻ってきた時には、何が変わったかも分かる。`
6. `任せる。でも、決定権は渡さない。`
7. truthful current availability;
8. material FAQ;
9. final CTA.

The page should vary visual rhythm rather than repeat one card formula. Product UI is used where Product behavior is the evidence; text/space can dominate where the user's own problem is the subject.

## 5. Visual-oracle production rule

For the eventual high-fidelity M10 oracle, do not compress the entire long homepage into one giant concept board if important Product text/states become unreadable.

Prefer coordinated references for major surfaces/states, for example:

- desktop Hero initial state;
- intermediate reply / still-no-action state;
- material-outcome / attention-required state;
- Moment / Source state;
- representative lower-page narrative sections;
- Trust/Control section;
- mobile Hero and simplified Product story.

An overview may show section rhythm, but it cannot substitute for readable implementation-grade references.

## 6. Explicitly excluded concept family

Do not regenerate the rejected dark navy / purple / glow / planet-orb / icon-timeline concept as a cosmetic variant.

Also exclude:

- generic AI orb or 3D centerpiece;
- abstract flowchart as Hero proof;
- feature-card grids before Product proof;
- autoplay cinematic video required for basic comprehension;
- fake social proof;
- unsupported encryption/security badges;
- `AI email assistant` as the primary category label;
- invented Product screens unrelated to canonical Product semantics.

## 7. Current testing order

1. Produce A/C/D low/mid-fidelity static concepts.
2. Capture clean unaided first-impression evidence under the M05 protocol.
3. Eliminate structures that repeatedly produce the wrong mental model.
4. Apply B motion to an eligible static structure.
5. Test the temporal mechanism separately.
6. Feed both evidence sets into M10 #3.

Do not select a final visual direction before `docs/FIRST-IMPRESSION-VALIDATION.md` evidence is collected.