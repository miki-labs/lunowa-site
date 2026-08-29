# M05 Structural Sketches

Status: internal structural reference, 2026-08-29. **Not the current participant-facing comparison contract.**

The former A/C/D wireframes were useful for making the initial information-architecture dimensions explicit. Subsequent research/method audit concluded that A/C/D were too conceptually close to justify treating all three as independent participant-facing directions.

Current authority is:

- `docs/HERO-CONCEPTS-M05.md` — P baseline + E dark-horse exploration;
- `docs/FIRST-IMPRESSION-VALIDATION.md` — current research protocol;
- `docs/RESEARCH-M05-EXPLORATION-2026-08-29.md` — evidence behind the correction.

Do not generate old C/D merely because they existed in an earlier wireframe set.

## 1. Product Proof baseline structure

The former Concept A maps to current **P — Product Proof Baseline**.

Shared Product truth:

- user has requested a quotation;
- counterparty replies `社内確認中です。明日送ります。`;
- Lunowa is still waiting for the requested quotation;
- visitor sees `あなたの対応はまだ必要ありません`;
- original Source remains reachable;
- no autonomous send/completion is implied.

Indicative first viewport:

```text
┌───────────────────────────────────────────────────────────────┐
│ Lunowa                         仕組み  FAQ  [先行アクセス]      │
│                                                               │
│        返信待ち・資料待ちを、Lunowaが代わりに見守る。        │
│                                                               │
│             メールを、確認し続けなくていい。                 │
│                                                               │
│   必要な結果が届くまで見守り、必要な時だけ戻します。          │
│                         [先行アクセス]                        │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Re: 見積書のお願い / 山田商事                          │  │
│  │                                                         │  │
│  │ 見積書を待っています                                  │  │
│  │                                                         │  │
│  │ 最新の返信                                             │  │
│  │ 「社内確認中です。明日送ります。」                     │  │
│  │                                                         │  │
│  │ ✓ あなたの対応はまだ必要ありません                    │  │
│  │   Lunowaが見積書の到着を引き続き見守ります。          │  │
│  │                                      元のメールを見る →│  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

This is a structural sketch only. Participant-facing P should be realistic mid/high fidelity enough to judge category, credibility, orientation and trust.

## 2. E dark-horse structural constraint

Do not derive E by rearranging the P frame.

E begins from the visitor's remembered monitoring burden, for example:

```text
見積書、届いたかな。
契約書、返ってきたっけ。
次は自分が返す番だったかな。

その確認を、Lunowaに任せる。
```

Then ground the idea immediately in recognizable email/Product proof showing the same intermediate-reply / still-no-action state.

E must remain recognizably software/email related in or immediately adjacent to the first viewport; otherwise it risks becoming generic productivity/attention marketing.

## 3. Shared lower-page narrative

After the acquisition/mental-model section, the same visitor-question narrative remains:

1. `メールの負担は、読むことだけではありません。`
2. `返信が来ても、終わっていないことがある。`
3. `必要でない間は、Lunowaが見ています。`
4. `必要になった時だけ、あなたに戻します。`
5. `戻ってきた時には、何が変わったかも分かる。`
6. `任せる。でも、決定権は渡さない。`
7. truthful availability;
8. material FAQ;
9. final CTA.

Do not build two entirely separate lower pages merely to manufacture variation.

## 4. Old C/D disposition

Old C (`Familiar Situation First`) and D (`Dual-State Comparison`) are **not current test directions**.

Useful ideas from them may still be used later as section-level techniques:

- familiar situation content can strengthen the problem section;
- dual-state comparison can explain `Reply != Done` below the Hero or as a reduced-motion representation.

They are not required standalone Hero candidates.

## 5. Motion

Motion is tested only after a static direction is comprehension-eligible.

Apply motion to the same accepted structure/content and ask whether temporal playback materially improves understanding of:

`intermediate reply -> still no action -> material outcome -> attention required`.

No endless loop and no motion required for baseline comprehension.