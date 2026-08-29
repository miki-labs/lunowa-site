# Lunowa Homepage Contract

Status: canonical marketing-site direction, 2026-08-29. This document does not supersede Product truth in `miki-thecat/lunowa`.

Read `docs/VISITOR-JOURNEY.md`, `docs/FIRST-IMPRESSION-VALIDATION.md`, `docs/HERO-CONCEPTS-M05.md`, and `docs/M05-WIREFRAMES.md` with this document. The visitor contract defines the mental-model sequence; this document defines the homepage projection.

## 1. Homepage job

The homepage must enable a first-time visitor to answer, quickly and correctly:

1. What is Lunowa?
2. What does it do for me?
3. Is this a problem I actually have?
4. Why is it different from ordinary reminders, reply tracking, inbox organization, and generic AI email assistants?
5. Can I really stop checking without missing something important?
6. When Lunowa brings something back, will I understand why and what to do?
7. Why should I trust it with email-related work?
8. What can I do next right now?

Current funnel objective:

`correct comprehension -> relevance -> trust -> qualified early access -> real Product use -> learning`

Do not optimize for empty traffic, generic AI curiosity, inflated signup count, or visual novelty.

## 2. Core positioning

Primary promise candidate:

> **メールを、確認し続けなくていい。**

Because this line can be interpreted too broadly by itself, the Hero must provide a nearby category/mechanism cue. Current candidate:

> 返信待ち・資料待ちを、Lunowaが代わりに見守る。

Supporting idea:

> Lunowaは、メールで始まった未完了の用件を見守ります。必要でない間は静かに管理し、本当にあなたの判断や対応が必要になった時だけ、何が変わったかと一緒に戻します。

Core distinction:

> **返信が来ても、終わっていないことがある。**

Marketing shorthand:

> **Reply != Done**

This distinction must be demonstrated through a concrete email scenario, not merely stated or represented as an abstract state diagram.

## 3. Hero

### 3.1 First-glance requirements

The first viewport must support category recognition before requiring Product-specific vocabulary.

A visitor should be able to infer that Lunowa is an email/communication Product and that it watches unfinished matters on the user's behalf.

Do not lead with `Managed`, `Needs You`, `Moment`, `Responsibility`, `Attention Delegation`, `AI`, `AI assistant`, `AI inbox`, or `automation` as the explanation the visitor must decode.

### 3.2 Information hierarchy

Recommended structure:

1. brand/product name as a clear first-screen signal;
2. short category/mechanism cue;
3. H1 promise;
4. one short supporting sentence;
5. primary CTA;
6. secondary `仕組みを見る` action if it remains useful after visual testing;
7. one dominant real-looking Lunowa Product stage.

Current H1:

> **メールを、確認し続けなくていい。**

Primary CTA:

> **先行アクセスに登録**

Secondary CTA:

> **仕組みを見る**

Exact copy remains a hypothesis until first-impression evidence supports it.

### 3.3 Hero composition

Prefer one coherent composition with the Product itself as the dominant visual anchor.

The Product stage must be understandable in its initial static state. Motion can reinforce temporal differentiation but cannot be required for basic comprehension.

Avoid squeezing a complex Product story into a generic narrow right-hand card merely to conform to a split-hero template.

Avoid abstract icon timelines as the primary Hero proof.

## 4. Canonical concrete Product story

Use one recognizable unresolved communication scenario throughout the Hero and key lower-page sections rather than unrelated feature mockups.

Canonical initial scenario:

```text
User: 金曜までに見積書をお願いします。
-> Lunowa visibly indicates that the quotation is being watched.

Counterparty: 社内確認中です。明日回答します。
-> evidence changed
-> Lunowa continues watching
-> visitor sees: まだあなたの対応は必要ありません

Counterparty: 見積書を添付しました。ご確認ください。
-> material outcome evidence arrived
-> the same item becomes attention-worthy

Moment:
見積書が届きました
金額と納期を確認してください
-> Source / attachment / safe next action
```

The decisive proof is the **non-event after the intermediate reply**: a reply arrives, but Lunowa does not unnecessarily interrupt the user because the outcome is still unresolved.

Internal state labels may be visible as authentic Product UI, but the underlying user meaning must be obvious without knowing those terms.

## 5. Page narrative by visitor question

Use a small number of full-width narrative bands. Do not turn every section into a floating card.

### H01 — What is this / what does it do for me?

Hero + concrete Product stage.

### H02 — Is this my problem?

Heading:

> **メールの負担は、読むことだけではありません。**

Explain familiar monitoring burden: remembering whether a quotation, document, approval, payment confirmation, or answer actually arrived; checking again; reconstructing whether the next move belongs to the user or the other party.

Do not imply a validated exact ICP.

### H03 — How is this different?

Heading:

> **返信が来ても、終わっていないことがある。**

Show one actual intermediate-reply example. Explain why reply/no-reply tracking alone is insufficient without turning the section into a competitor attack.

### H04 — Can I really leave it alone?

Heading direction:

> **必要でない間は、Lunowaが見ています。**

Show real-looking monitoring UI and user-facing status language. The section should answer what the visitor can stop doing, not just name `Managed`.

### H05 — Will I miss something important?

Heading direction:

> **必要になった時だけ、あなたに戻します。**

Show the same object becoming attention-worthy when material evidence changes the situation.

### H06 — Will I know what changed and what to do?

Heading direction:

> **戻ってきた時には、何が変わったかも分かる。**

Show a concise Moment: material change, remaining decision/action, attachment/source, and direct return to original communication.

### H07 — Can I trust it?

Heading:

> **任せる。でも、決定権は渡さない。**

Translate architecture into user consequences:

- original Source remains reachable;
- evidence, interpretation, accepted state, and safe action are not silently collapsed;
- uncertainty can route to Review rather than fake certainty;
- reply, attachment, send, read, or silence do not automatically mean successful closure;
- monitoring degradation is communicated truthfully;
- no external effect is implied when it has not occurred.

Do not expose internal architecture terminology merely to sound rigorous.

### H08 — Can I use it now?

State only current facts. If the beta is Gmail-first, say so. Do not imply broad provider parity, general availability, or functionality not accepted/implemented.

### H09 — What else do I need to know?

FAQ for material objections such as:

- What does Lunowa actually monitor?
- Does a reply automatically mark something complete?
- Does Lunowa send email without permission?
- Can I open the original email?
- What happens when Lunowa is uncertain or cannot monitor reliably?
- Which providers/languages are currently available?

Only include answers supported by current Product/runtime truth.

### H10 — What should I do now?

Emotional close:

> **必要になるまで、忘れていていい。**

Primary CTA remains behaviorally consistent with the Hero.

## 6. Scannability acceptance

A visitor reading only major headings must still understand the story.

Current direction:

```text
メールを、確認し続けなくていい。
メールの負担は、読むことだけではありません。
返信が来ても、終わっていないことがある。
必要でない間は、Lunowaが見ています。
必要になった時だけ、あなたに戻します。
戻ってきた時には、何が変わったかも分かる。
任せる。でも、決定権は渡さない。
必要になるまで、忘れていていい。
```

Do not repeat the same emotional claim across sections. Each section has one distinct responsibility: orient, make relevant, differentiate, prove delegation, prove return, explain trust, state availability, resolve objections, or convert.

## 7. Motion boundary

Motion may demonstrate the temporal distinction:

`intermediate reply -> still no user action required -> material outcome evidence -> user attention required`.

The initial static Product frame must already explain what Lunowa is doing. Motion is additive proof, not the entry fee for comprehension.

M05 treats motion as a separate second-stage hypothesis after static information architecture is tested. Do not compare a completely different motion-led layout against a static layout and attribute the result to animation.

The current initial B hypothesis is user-controlled bounded playback applied to an eligible static structure. Autoplay/first-play is a separate condition if later tested.

Do not freeze a long or endless autoplay loop by preference alone.

## 8. Truth / anti-claim boundary

Until supported by durable evidence, the site must not claim:

- a validated exact ICP;
- PMF;
- customer/user counts;
- time-saved percentages/hours;
- accuracy percentages;
- security certifications;
- end-to-end encryption unless the exact implementation and scope support that wording;
- `enterprise-grade` security as a vague badge;
- supported providers/features not accepted in Product/runtime contracts;
- pricing that has not been approved;
- fabricated testimonials, logos, reviews, or awards.

Generated visual candidates are untrusted for claims: every visible claim must be checked against Product/runtime authority before a visual can become canonical.

## 9. Pre-freeze user evidence

Before M10 final visual freeze, consume the dedicated #10 M05 evidence in two layers.

### Stage 1 — static structure

Compare materially different static A/C/D first-viewport structures under the shared stimulus constraints in `docs/M05-WIREFRAMES.md`.

A visually attractive structure that repeatedly creates the wrong Product mental model is blocked.

### Stage 2 — temporal motion

After a static structure is comprehension-eligible, compare the same structure/content in static form and with the bounded B motion treatment.

Motion is retained only if it adds meaningful temporal comprehension/continuity/confidence without becoming necessary for baseline understanding or creating material accessibility/confusion cost.

Unaided first-impression evidence must remain distinct from later aided/comparative feedback.

## 10. Visual-reference output

M10 must eventually freeze readable implementation-grade references for major Product states/sections.

Do not rely only on a giant full-page board if copy/state detail becomes unreadable.

At minimum preserve readable references for:

- desktop Hero initial monitoring state;
- intermediate-reply / still-no-action state;
- material-outcome / attention-required state;
- Moment / Source state;
- representative lower-page rhythm;
- Trust/Control section;
- mobile Hero / simplified Product story.

A full-page overview may supplement these references for rhythm and composition.

## 11. Early-success measures

Prefer qualified measures over vanity measures:

1. **Correct Product comprehension** after short first exposure.
2. Ability to distinguish Lunowa from ordinary reminder/reply-tracking/generic AI-email categories.
3. Relevance: visitor recognizes a real monitoring burden.
4. Trust questions are answerable from the page without misleading claims.
5. CTA click-through.
6. Qualified early-access completion.
7. Source/campaign attribution for registrations.
8. Later: activation into a real delegated monitoring loop and retention.

Later quantitative experiments may compare copy, static vs Product-motion treatment, CTA framing, or section emphasis with appropriate power, but no test may silently change Product truth.