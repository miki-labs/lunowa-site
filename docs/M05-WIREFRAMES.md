# M05 Low-Fidelity Homepage Wireframes

Status: canonical low-fidelity comparison artifact for M05. These are research stimuli specifications, not final visual authority and not production UI.

Purpose: make A/C/D first-impression concepts materially testable while holding Product truth, scenario, major copy and lower-page narrative as stable as practical.

## 1. Shared constraints

All Stage 1 concepts use:

- same Product scenario: quotation requested -> intermediate reply -> still no action -> quotation arrives -> attention required;
- same primary H1 candidate: `メールを、確認し続けなくていい。`;
- same primary CTA: `先行アクセス`;
- same neutral near-white / near-black low-fidelity palette;
- no decorative gradients, orbs, 3D, fake metrics, testimonials or unsupported security claims;
- Product/email content large enough to read at the test viewport;
- no motion during clean Stage 1 first-impression exposure;
- same lower-page visitor-question sequence after the Hero.

Low fidelity intentionally suppresses brand-polish differences so the study is mostly about information architecture and Product comprehension.

Recommended initial desktop stimulus viewport: approximately 1440x900 or a similarly common laptop/desktop viewport, recorded exactly in the study. Mobile is checked after the desktop structural round rather than mixed into the same first-impression evidence set by default.

## 2. Shared content tokens

### Category/mechanism cue

`返信待ち・資料待ちを、Lunowaが代わりに見守る。`

### H1

`メールを、確認し続けなくていい。`

### Support

`必要な結果が届くまでLunowaが見守り、あなたの対応が必要になった時だけ戻します。`

### Scenario

User request:

`金曜までに見積書をお願いします。`

Intermediate reply:

`社内確認中です。明日送ります。`

Still-no-action consequence:

`あなたの対応はまだ必要ありません。`

Material outcome:

`見積書.pdf`

Attention-required consequence:

`見積書が届きました。金額と納期を確認してください。`

Source affordance:

`元のメールを見る`

These are research-copy hypotheses, not empirically validated final marketing copy.

---

# Concept A — Product First / Static Proof

## A1 desktop first viewport

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Lunowa                                  仕組み      FAQ      [先行アクセス] │
│                                                                            │
│              返信待ち・資料待ちを、Lunowaが代わりに見守る。               │
│                                                                            │
│                    メールを、確認し続けなくていい。                        │
│                                                                            │
│          必要な結果が届くまでLunowaが見守り、あなたの対応が               │
│                    必要になった時だけ戻します。                            │
│                                                                            │
│                          [ 先行アクセス ]                                  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Lunowa                                                               │  │
│  │                                                                      │  │
│  │ 見積書を待っています                                                │  │
│  │ 山田商事 / Re: 見積書のお願い                                      │  │
│  │                                                                      │  │
│  │ 最新の返信                                                          │  │
│  │ 「社内確認中です。明日送ります。」                                  │  │
│  │                                                                      │  │
│  │ ✓ あなたの対応はまだ必要ありません                                 │  │
│  │   Lunowaが見積書の到着を引き続き見守ります。                       │  │
│  │                                                                      │  │
│  │                                            元のメールを見る →       │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│                         ↓ next section visible                             │
└────────────────────────────────────────────────────────────────────────────┘
```

### First-glance intended inference

`メールの中の未完了な用件をLunowaが見ていて、今は自分が確認しなくていい。`

### Failure signatures

- `メールを要約するアプリ` only;
- `返信が来たかだけを追うリマインダー`;
- `AIが自動返信する`;
- `普通の受信箱` with no monitoring-offload inference.

## A2 mobile simplification

```text
┌──────────────────────────────┐
│ Lunowa          [先行アクセス]│
│                              │
│ 返信待ち・資料待ちを、       │
│ Lunowaが代わりに見守る。     │
│                              │
│ メールを、                   │
│ 確認し続けなくていい。       │
│                              │
│ [先行アクセス]               │
│                              │
│ ┌──────────────────────────┐ │
│ │ 見積書を待っています    │ │
│ │ 山田商事                │ │
│ │                        │ │
│ │ 「社内確認中です。      │ │
│ │   明日送ります。」      │ │
│ │                        │ │
│ │ ✓ まだ対応は不要       │ │
│ │ Lunowaが見守ります     │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

---

# Concept C — Familiar Situation First -> Product Consequence

## C1 desktop first viewport

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Lunowa                                  仕組み      FAQ      [先行アクセス] │
│                                                                            │
│                    メールを、確認し続けなくていい。                        │
│                                                                            │
│  ┌──────────────────────────────────┐   ┌───────────────────────────────┐  │
│  │ あなた                           │   │ Lunowa                        │  │
│  │ 金曜までに見積書を              │   │                               │  │
│  │ お願いします。                   │   │ まだ確認しなくて大丈夫です。  │  │
│  │                                  │   │                               │  │
│  │ 相手                             │   │ 見積書の到着を                │  │
│  │ 社内確認中です。                 │ → │ 引き続き見守ります。          │  │
│  │ 明日送ります。                   │   │                               │  │
│  └──────────────────────────────────┘   │ 元のメールを見る →            │  │
│                                         └───────────────────────────────┘  │
│                                                                            │
│       必要な結果が届くまでLunowaが見守り、必要な時だけ戻します。           │
│                                                                            │
│                          [ 先行アクセス ]                                  │
│                                                                            │
│         ↓ below: larger real Lunowa Product surface continues scenario     │
└────────────────────────────────────────────────────────────────────────────┘
```

The low-fidelity rendering should keep the relationship obvious but avoid decorative chat-bubble styling that makes Lunowa look like a messaging app.

### First-glance intended inference

`こういう返信待ちを、自分で何度も確認する代わりにLunowaが見てくれる。`

### Failure signatures

- looks like an email tutorial/illustration rather than software;
- `自動返信ルール` interpretation;
- insufficient Product signal;
- too much text before the visitor finds the product consequence.

## C2 mobile simplification

Use vertical causality:

```text
user request
↓
intermediate reply
↓
Lunowa consequence: まだ確認不要 / 引き続き見守る
↓
CTA
↓
real Product surface begins
```

No side-by-side layout is preserved on mobile.

---

# Concept D — Static Dual-State Product Comparison

## D1 desktop first viewport

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Lunowa                                  仕組み      FAQ      [先行アクセス] │
│                                                                            │
│              返信待ち・資料待ちを、Lunowaが代わりに見守る。               │
│                    メールを、確認し続けなくていい。                        │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ 見積書 / 山田商事                                                   │  │
│  │                                                                      │  │
│  │ 返信が来た時                                                        │  │
│  │ 「社内確認中です。明日送ります。」                                  │  │
│  │ ✓ まだ対応は必要ありません                                         │  │
│  │                                                                      │  │
│  │ ───────────────────── same matter / later ───────────────────────   │  │
│  │                                                                      │  │
│  │ 見積書が届いた時                                                    │  │
│  │ 📎 見積書.pdf                                                       │  │
│  │ ! 対応が必要です                                                    │  │
│  │   金額と納期を確認してください。                                    │  │
│  │                                                                      │  │
│  │ 元のメールを見る →                                                  │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│                          [ 先行アクセス ]                                  │
└────────────────────────────────────────────────────────────────────────────┘
```

This must read as one item at two moments, not two cards advertising two features.

### First-glance intended inference

`返信が来ただけでは呼ばれず、本当に必要な結果が来た時だけ対応になる。`

### Failure signatures

- too much simultaneous information;
- visitor reads only second state and misses offload mechanism;
- comparison feels like abstract marketing infographic;
- email Product category is less obvious than A/C.

## D2 mobile simplification

Stack sequential states with a clear `同じ用件 / 後で` continuity cue. Do not shrink two columns side by side.

---

# Stage 2 — Concept B motion treatment

B is applied only to a Stage-1-eligible structure.

## B1 meaningful initial static frame

Before Play, the frame remains equivalent to its static baseline and already communicates Product/category/value.

Control:

`▶ 15秒で見る`

## B2 canonical playback storyboard

```text
0.0s   existing monitored matter visible
2.0s   intermediate reply arrives
3.0s   `あなたの対応はまだ必要ありません`
3-7s   deliberate stillness; no alert spectacle
8.0s   見積書.pdf arrives
9.0s   state changes to attention required
10.5s  `見積書が届きました。金額と納期を確認してください。`
12s+   Source / next action visible
end    final state stays still; `もう一度見る`
```

Timing is prototype guidance, not a scientific constant. Actual testing may revise it.

Motion should preserve object continuity. Avoid flying cards, particles, typewriter effects, background movement, faux AI thinking, glowing orbs or unrelated dashboard animation.

Reduced-motion presents the same semantic states as static frames/disclosures without spatial movement.

---

# Shared lower-page low-fidelity narrative

After clean first-impression measurement, all concepts continue through the same visitor-question order.

## H02 — Is this my problem?

### Heading

`メールの負担は、読むことだけではありません。`

### Content

Plain editorial text, not a feature grid:

- `見積書、届いたかな。`
- `契約書、返ってきたっけ。`
- `次は自分が返す番だったかな。`

Supporting line:

`覚えておく。確認する。思い出す。その小さな監視をLunowaに渡します。`

## H03 — How is this different?

### Heading

`返信が来ても、終わっていないことがある。`

Show the same intermediate reply and explicitly contrast `返信あり` with `必要な結果はまだ届いていない`. Use Product UI/evidence, not a generic icon diagram.

## H04 — Can I really leave it alone?

### Heading

`必要でない間は、Lunowaが見ています。`

Show a restrained real Product list with a few monitored matters. Do not turn this into a dense dashboard or feature grid.

## H05 — Will I miss something important?

### Heading

`必要になった時だけ、あなたに戻します。`

Show the quotation matter becoming attention-worthy.

## H06 — Will I know what to do?

### Heading

`戻ってきた時には、何が変わったかも分かる。`

Show concise context:

- what changed;
- what remains;
- safe next action;
- Source.

## H07 — Can I trust it?

### Heading

`任せる。でも、決定権は渡さない。`

Translate Product truth into user consequences. No vague badges.

Candidate bullets/rows:

- `元のメールにいつでも戻れる`
- `判断できないことを勝手に確定しない`
- `起きていない送信や完了を、起きたことにしない`
- `見守れない状態をごまかさない`

Any stronger security claim requires current durable evidence.

## H08 — Can I use it now?

Truthful beta/provider/language status only. Do not invent parity.

## H09 — FAQ

Only material objections. Prefer plain disclosure rows over a card wall.

## H10 — Final action

### Heading

`必要になるまで、忘れていていい。`

Same CTA semantics as Hero.

---

# Evaluation reminder

The purpose of these wireframes is not to select the prettiest screen. The first pass asks whether the visitor builds the correct Product mental model. Visual polish comes after the information architecture survives M05 evidence.