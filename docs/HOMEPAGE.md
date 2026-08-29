# Lunowa Homepage Contract

Status: canonical marketing-site direction, 2026-08-29. This document does not supersede Product truth in `miki-thecat/lunowa`.

## 1. Homepage job

The homepage must enable a new visitor to answer, quickly and correctly:

1. What is Lunowa?
2. What burden does it remove?
3. Why is it different from ordinary email AI / follow-up / reminder products?
4. Why should the visitor trust it with email-related work?
5. What can the visitor do next right now?

Current funnel objective:

`correct comprehension -> qualified early access -> real Product use -> learning`

Do not optimize for empty traffic, generic AI curiosity, or inflated signup count.

## 2. Core positioning

Primary promise:

> **メールを、確認し続けなくていい。**

Supporting idea:

> Lunowaは、メールで始まった未完了の用件を見守ります。必要でない間は静かに管理し、本当にあなたの判断や対応が必要になった時だけ、何が変わったかと一緒に戻します。

Core distinction:

> **返信が来ても、終わっていないことがある。**

Marketing shorthand:

> **Reply != Done**

This distinction must be demonstrated, not merely stated.

## 3. Hero

### 3.1 Information hierarchy

Eyebrow:

> メールの未完了を、静かに見守る。

H1:

> **メールを、確認し続けなくていい。**

Primary CTA:

> **先行アクセスに登録**

Secondary CTA:

> **仕組みを見る**

Do not lead with `AI`, `AI assistant`, `AI inbox`, or `automation`. AI is implementation support, not the category definition.

### 3.2 Hero composition

Prefer a centered copy hierarchy followed by one large Product stage. Avoid squeezing the Product story into a narrow right-hand card merely to conform to a generic split-hero template.

The first viewport should expose enough of the Product stage / next section to communicate that real Product proof follows immediately.

## 4. Live Product Story

Use one coherent scenario throughout the page rather than unrelated feature mockups.

Canonical initial scenario:

```text
User: 金曜までに見積書をお願いします。
-> Lunowa: Managed / 見積書を待っています

Counterparty: 社内確認中です。明日回答します。
-> evidence changed
-> still Managed
-> まだ対応は必要ありません

Counterparty: 見積書を添付しました。ご確認ください。
-> material outcome evidence arrived
-> Needs You

Moment:
見積書が届きました
金額と納期を確認してください
-> Source / attachment / safe next action
```

The decisive visual proof is the **non-event after the intermediate reply**: a reply arrives, but Lunowa does not interrupt the user because the outcome is still unresolved.

## 5. Page narrative

Use a small number of full-width narrative bands. Do not turn every section into a floating card.

### H01 Hero

`メールを、確認し続けなくていい。`

### H02 Live Product Story

Show the canonical scenario with real-looking Product UI.

### H03 Monitoring burden

Heading:

> **メールの負担は、読むことだけではありません。**

Explain remembering, checking, reconstructing context, and deciding whether an unresolved communication is actually finished.

### H04 Category distinction

Heading:

> **返信が来ても、終わっていないことがある。**

Show why reply/no-reply tracking alone is insufficient.

### H05 Delegation Loop

Headings may progress as:

- **必要でない間は、静かに。**
- **必要になった瞬間だけ、戻す。**
- **何が変わったかまで分かる。**

Demonstrate `Managed -> Needs You -> Moment` as one system, not three disconnected feature cards.

### H06 Trust / Control

Heading:

> **任せる。でも、決定権は渡さない。**

Required ideas:

- original Source remains reachable;
- evidence, interpretation, accepted state, and safe action are not collapsed;
- uncertainty can route to Review rather than fake certainty;
- reply, attachment, send, read, or silence do not automatically mean successful closure;
- monitoring degradation is communicated truthfully.

### H07 Current availability

State only current facts. If the beta is Gmail-first, say so. Do not imply broad provider parity, general availability, or functionality not yet accepted/implemented.

### H08 FAQ

Answer material objections such as:

- What does Lunowa actually monitor?
- Does a reply automatically mark something complete?
- Does Lunowa send email without permission?
- Can I open the original email?
- What happens when Lunowa is uncertain or cannot monitor reliably?
- Which providers/languages are currently available?

Only include answers supported by current Product/runtime truth.

### H09 Final CTA

Emotional close:

> **必要になるまで、忘れていていい。**

Primary CTA remains consistent with Hero.

## 6. Scannability acceptance

A visitor reading only section headings must still understand the story:

```text
メールを、確認し続けなくていい。
メールの負担は、読むことだけではありません。
返信が来ても、終わっていないことがある。
必要でない間は、静かに。
必要になった瞬間だけ、戻す。
何が変わったかまで分かる。
任せる。でも、決定権は渡さない。
必要になるまで、忘れていていい。
```

## 7. Truth / anti-claim boundary

Until supported by durable evidence, the site must not claim:

- a validated exact ICP;
- PMF;
- customer/user counts;
- time-saved percentages/hours;
- accuracy percentages;
- security certifications;
- `enterprise-grade` security as a vague badge;
- supported providers/features not accepted in Product/runtime contracts;
- pricing that has not been approved;
- fabricated testimonials, logos, reviews, or awards.

## 8. Early-success measures

Prefer qualified measures over vanity measures:

1. Product comprehension: after ~10 seconds, can a person describe Lunowa as delegated monitoring of unfinished communication rather than a generic AI email client?
2. CTA click-through.
3. Qualified early-access completion.
4. Source/campaign attribution for registrations.
5. Later: activation into a real delegated monitoring loop and retention.

A/B tests may compare static vs Product-motion Hero, copy variants, or CTA framing, but no test may silently change Product truth.