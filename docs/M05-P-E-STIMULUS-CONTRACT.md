# Lunowa M05 P/E Stimulus Contract

Status: **PARTICIPANT-STIMULUS CONSTRUCTION CONTRACT — NO USER EVIDENCE YET**.

This document turns the current P/E research hypotheses into concrete, comparable participant-facing stimuli. It does not record validation results.

Read with:

- `docs/VISITOR-JOURNEY.md`
- `docs/FIRST-IMPRESSION-VALIDATION.md`
- `docs/HERO-CONCEPTS-M05.md`
- `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md`
- `docs/M10-TOKEN-CONTRACT.md`
- `docs/HOMEPAGE.md`
- `docs/DESIGN.md`

## 1. Research question

Primary question:

> Which acquisition hierarchy more reliably produces the correct first-time Lunowa mental model without requiring explanation?

Compared hypotheses:

- **P — Product Proof Baseline:** Product UI does most of the explanatory work immediately.
- **E — Editorial Problem-First Dark Horse:** visitor recognizes the repeated checking/remembering burden first, then receives concrete Product proof immediately afterward.

This is not a visual-style preference test.

## 2. Variables that must remain shared

P and E should use the same, or functionally equivalent:

- viewport and capture size;
- Lunowa wordmark/header;
- token family;
- typography family/role mapping;
- page background and core surface grammar;
- CTA visual treatment;
- Product shell visual grammar;
- canonical quotation scenario;
- exact Product truth boundaries;
- no unsupported logos/testimonials/metrics/security claims;
- lower-page IA after the acquisition thesis converges;
- degree of overall visual finish.

Do not compare a premium polished template against a crude internal wireframe.

## 3. Canonical scenario

Both stimuli use the same unresolved email matter.

```text
User:
金曜までに見積書をお願いします。

Counterparty intermediate reply:
社内確認中です。明日送ります。

Current meaning:
見積書はまだ届いていない。
Lunowaは引き続き見守る。
ユーザーの対応はまだ必要ない。

Later material outcome:
見積書を添付しました。ご確認ください。

Later meaning:
必要な結果が届いた。
ユーザーの確認が必要になった。
```

Initial first-impression stimulus should normally show the **intermediate-reply / still-no-action** state because that state best exposes Lunowa's differentiation from simple reply detection.

## 4. P — Product Proof Baseline

### First viewport hierarchy

```text
Lunowa header

返信待ち・資料待ちを、Lunowaが代わりに見守る。

メールを、確認し続けなくていい。

Lunowaは、必要な結果が届くまで見守り、
あなたの対応が必要になった時だけ戻します。

[先行アクセスに登録]
[仕組みを見る]  # only if retained

large Product stage
```

### Product-stage required visible evidence

Must communicate without internal vocabulary knowledge:

- email/communication context;
- matter: quotation is being awaited;
- latest reply: `社内確認中です。明日送ります。`;
- explicit consequence: `あなたの対応はまだ必要ありません`;
- explicit monitoring consequence: Lunowa continues watching for the quotation;
- path to original Source/email visible but secondary.

Avoid showing too many unrelated inbox controls. Product proof should feel real but remain task-focused.

### P success signal

Unaided visitor approximately understands:

> This email product keeps watching unfinished email matters for me, so I do not need to keep checking; it will return the matter when I actually need to do something.

## 5. E — Editorial Problem-First Dark Horse

E must be independently conceived. It is not P with the headline swapped.

### First viewport hierarchy

Use a recognizable checking burden first, in concise editorial language.

Current construction candidate:

```text
Lunowa header

見積書、届いたかな。
契約書、返ってきたっけ。
次は自分が返す番だったかな。

その確認を、Lunowaに任せる。

メールで始まった未完了の用件を見守り、
必要になった時だけあなたに戻します。

[先行アクセスに登録]

concrete Product/email proof visible within the same first viewport
or immediately beginning at its lower edge
```

### E guardrail

Concrete email/Product proof must appear early. If the first screen can be mistaken for:

- generic productivity;
- memory assistant;
- mindfulness/focus app;
- notification manager;
- generic task manager;

then E has failed before user research.

### E Product proof

Use the same quotation matter and the same still-no-action state as P, but the visual may have lower first-screen weight if the editorial premise remains the hypothesized difference.

Do not change the Product UI styling to make E more artistic or premium.

## 6. No-hidden-variable checklist

Before participant exposure verify:

- [ ] same viewport class;
- [ ] same overall fidelity;
- [ ] same Product scenario;
- [ ] same Product-state truth;
- [ ] same CTA action;
- [ ] same brand/token grammar;
- [ ] same unsupported-claim exclusions;
- [ ] no social proof in only one condition;
- [ ] no motion in only one condition;
- [ ] no premium component treatment in only one condition;
- [ ] no materially different visual quality caused by separate generators/tools.

## 7. Static first

Initial P/E first-impression evidence is static.

Do not introduce motion until one static hierarchy is comprehension-eligible and the remaining research question is specifically temporal:

`intermediate reply -> still no action -> material outcome -> attention required`.

If motion is later tested, bind it to the same accepted static structure/content.

## 8. Lower-page handling

Do not build two unrelated long homepages for the first round.

The acquisition/Hero thesis is the primary variable. After the clean first-impression probe, a common lower-page narrative can test whether the selected shell resolves the remaining visitor questions:

1. email burden is ongoing monitoring, not just reading;
2. reply does not necessarily mean outcome completion;
3. Lunowa quietly keeps watching;
4. user attention returns only when justified;
5. Moment explains what changed and what remains;
6. Source/control/truth remain available;
7. current availability and CTA are truthful.

## 9. Participant-facing fidelity

Stimuli should be realistic mid/high fidelity.

Required before exposure:

- legible Japanese text;
- believable Product UI;
- coherent spacing/hierarchy;
- no placeholder lorem ipsum;
- no generated gibberish;
- no fake customer/social proof;
- no unsupported security claims;
- no design artifact that obviously looks like a rough wireframe.

Exact final M10 polish is unnecessary; enough visual credibility is required that participants judge the Product rather than the roughness of the mock.

## 10. Evidence binding

Every tested artifact must record:

- condition P or E;
- artifact identifier/version;
- exact copy version;
- exact viewport;
- initial exposure duration;
- whether any scrolling was permitted during clean first impression;
- whether motion existed (initial round: no);
- participant order/assignment;
- unaided answers before any explanation;
- later aided/comparative answers separately.

## 11. Pre-research rejection rule

Do not waste participant sessions on a stimulus that fails an internal acceptance check.

Reject before research if:

- Product category is not plausibly inferable;
- Product proof is unreadable;
- `Reply != Done` state is internally inconsistent;
- unsupported claims appear;
- visual treatment violates `DESIGN.md` anti-patterns;
- P/E fidelity is materially unequal;
- E withholds Product evidence so long that the condition is effectively a generic manifesto.

## 12. Current construction decision

The next artifact work should create exactly:

1. **P-v1** — centered Product Proof first viewport using the selected common shell;
2. **E-v1** — independently composed problem-first first viewport using the same shell/tokens/Product scene;
3. one shared lower-page continuation reference sufficient for post-Hero probing.

Do not create additional variants until P-v1/E-v1 have been internally audited. Do not create old A/C/D variants.
