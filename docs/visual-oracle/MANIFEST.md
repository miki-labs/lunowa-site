# Lunowa M10 Visual Authority Manifest — 2026-08-30

Status: **M10 IMPLEMENTATION-GRADE VISUAL AUTHORITY CANDIDATE — exact artifact binding**.

Product truth remains in `miki-thecat/lunowa`.

This manifest binds the selected **P — Product Proof** direction to exact code-owned design artifacts and the frozen semantic-token source. It is not evidence of independent-user validation.

## 1. Token authority

| Artifact | Role | Blob |
|---|---|---|
| `docs/tokens/lunowa-m10.tokens.json` | machine-readable DTCG-style token source | `205a7f0802c85934c49a4f61fcf14f7fc780b2fc` |
| `docs/M10-TOKEN-CONTRACT.md` | human-readable token/implementation contract | `1ad3add088665be6a32621cd908b9be751b533a9` |

Machine token source is the canonical exact-value source. Human contract owns rationale, delivery boundaries and implementation guidance.

## 2. Visual artifacts

| Artifact | Role | Viewport | Exact blob |
|---|---|---:|---|
| `docs/visual-oracle/hero-desktop.svg` | desktop Hero + intermediate/no-action Product proof | 1440×900 | `32ff8c77d326282ec4ee002eea2ba840f6de478e` |
| `docs/visual-oracle/state-attention-desktop.svg` | material outcome -> attention-required state | 1200×720 | `3caac71ab0b28d257812058fc6f97157667d632b` |
| `docs/visual-oracle/state-return-context-desktop.svg` | what changed / what remains / attachment / Source | 1200×720 | `c3b23c5d09da0f0e78eb640872b0f63c7a7bccf7` |
| `docs/visual-oracle/trust-control-desktop.svg` | Source / uncertainty / external-effect trust boundary | 1200×700 | `2b8644d7c126c00562e64b3e472aa73efcc6f727` |
| `docs/visual-oracle/lower-page-overview.svg` | complete lower-page narrative rhythm / FAQ / final CTA | 1440×2580 | `5ce8535ca29834c5f567cd3d89f2a83fa9ec2a19` |
| `docs/visual-oracle/hero-mobile.svg` | mobile Hero semantic projection | 390×844 | `ccfb52c3d14584f052088d19e4d804cdfacf3358` |
| `docs/visual-oracle/product-story-mobile.svg` | mobile intermediate -> attention-required sequence | 390×1120 | `5846c8b0202a02b282f811c5f5872a070b833237` |

If any listed file changes, this manifest is stale until the blob binding and full M10 audit are updated.

## 3. Selected acquisition direction

Selected: **P — Product Proof Baseline**.

Required Hero hierarchy:

```text
Lunowa / category signal
-> category-mechanism cue
-> メールを、確認し続けなくていい。
-> one concise mechanism sentence
-> 先行アクセスに登録
-> dominant believable Lunowa Product proof
```

E is not maintained as a parallel Hero architecture. Its useful self-recognition insight — repeatedly wondering whether a requested result arrived — is preserved in the first lower-page problem section.

## 4. Canonical Product-state binding

All Product visuals represent the same unresolved quotation matter.

### Intermediate evidence / quiet monitoring

```text
User: 金曜までに見積書をお願いします。
Counterparty: 社内確認中です。明日送ります。

Truth:
- quotation is still missing;
- a reply arrived but the outcome is unresolved;
- user action is not required yet;
- Lunowa continues monitoring;
- original email remains reachable.
```

Required visitor-visible consequence:

> **あなたの対応はまだ必要ありません**

### Material outcome / attention required

```text
Counterparty: 見積書を添付しました。ご確認ください。
-> requested result arrived
-> user review becomes necessary
```

Required visible consequence:

> **あなたの確認が必要です**

### Return context

Must expose enough source-grounded context to answer:

- what changed? — quotation arrived;
- what remains? — check amount and delivery date;
- what is the evidence? — latest message + attachment;
- can source be inspected? — yes, original email path remains visible.

No artifact treats reply arrival, attachment arrival, send action, read state or silence as automatic successful closure by itself.

## 5. Static / motion authority

Static-first is authoritative.

M10 does **not** require a motion variant. Later implementation may add restrained state motion only as optional semantic reinforcement/craft when:

- it preserves object continuity;
- it clarifies evidence changed while attention did not;
- it clarifies transition to attention-required;
- or it supplies necessary interaction feedback.

Every informational result must remain equivalent with motion suppressed / Reduced Motion enabled.

## 6. Mobile projection rule

Mobile is not a scaled desktop screenshot.

The 390px references intentionally retain only the semantic essentials:

- email/counterparty/category;
- awaited outcome;
- intermediate reply;
- no-action consequence;
- continued monitoring;
- material-result arrival;
- attention-required consequence;
- attachment / Source path.

At 320 CSS px, M20/M50 may tighten spacing/type according to the frozen narrow tokens, but may not remove these semantic cues merely to fit the viewport.

## 7. Lower-page narrative

Current order:

1. repeated checking/remembering burden;
2. `返信 ≠ 完了` concrete distinction;
3. quiet monitoring / what the user can stop doing;
4. material outcome -> attention return;
5. what changed / what remains / Source;
6. Trust/Control;
7. early-access boundary;
8. material FAQ;
9. final CTA/footer.

Use full-width narrative bands with one visitor question per section. Do not translate this into a generic feature-card wall.

## 8. FAQ copy authority

Freeze only questions/answers supported by Product semantics. Provider/language availability answers remain release/runtime-bound and must be checked later rather than invented now.

### What does Lunowa monitor?

> Lunowaは、メールで始まった未完了の用件を見守ります。すべてのメールを一律にタスク化するのではなく、結果や確認がまだ残っている用件を扱います。

### Does a reply automatically complete the matter?

> いいえ。返信が来たことだけで、その用件が終わったとは扱いません。必要な結果が届いたか、まだ確認や判断が残っているかを見ます。

### Does Lunowa send email without the user deciding?

> 外部へ送る操作は、実際に許可・実行されたことが確認できる範囲でのみ扱います。Lunowaが起きていない送信や完了を、起きたことにはしません。

Final public wording must be narrowed further if current v1/runtime authority requires it.

### Can I inspect the original email?

> はい。Lunowaの要約や状態だけでなく、根拠になった元のメールや会話へ戻れる設計です。

### What happens when Lunowa is uncertain?

> 根拠が足りないことを確定したように扱わず、必要に応じて確認が必要な状態として扱います。

## 9. Early-access boundary

Frozen CTA intent:

> **先行アクセスに登録**

Do not freeze claims about confirmation email, launch date, provider parity, pricing, access timing or account availability here. M60 #8 owns the secure waitlist behavior and release/runtime truth must own final availability wording.

## 10. Reuse / provenance

These M10 SVGs and token files are locally authored; no third-party block source code is copied into them.

Structural/craft references remain those documented in R05/reuse research, including current Product-proof patterns and mature Header/Hero/CTA/FAQ/footer families.

At implementation time any actual borrowed code/block must independently record exact source/revision/license/dependencies and map into the frozen Lunowa tokens.

## 11. External-validation debt

No independent first-time visitor evidence currently exists.

This visual authority is:

- Product-truth checked;
- internally audited;
- owner-selected;
- implementation-grade candidate.

It is **not** `user validated`, `tested with users`, or evidence that real visitors definitely understand/convert better.

Future independent visitors/beta users/preview traffic may require correction after implementation.

## 12. Implementation invariants

Codex/M20 must not silently change:

- selected P acquisition hierarchy;
- category cue requirement around the broad H1;
- canonical quotation story;
- intermediate reply -> no-action meaning;
- material outcome -> attention-required meaning;
- Source visibility;
- semantic monitoring/attention/integrity colors;
- mobile semantic projection;
- static-first / Reduced Motion equivalence;
- current truth/anti-claim boundaries.

Any intentional deviation requires explicit review against Product truth and the owning Issue contract.
