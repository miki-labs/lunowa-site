# Lunowa Marketing Visitor Journey

Status: canonical user-centered marketing contract, 2026-08-30.

This document constrains how the homepage should be understandable to a first-time visitor. It does not define Product semantics; Product truth remains in `miki-thecat/lunowa`.

Current limitation: there is no independent first-time visitor evidence yet. The current P direction is internally audited/owner-selected, not user validated.

## 1. Primary design objective

The homepage exists to help a first-time visitor build the correct mental model of Lunowa with minimal cognitive effort.

The visitor should not need internal terms such as `Managed`, `Needs You`, `Moment`, `Responsibility`, or `Attention Delegation` before understanding the value.

Target sequence:

`correct Product comprehension -> relevance -> trust -> qualified early access`.

## 2. First-visit question sequence

The page should answer, in order:

1. **What is this?**
2. **What does it do for me?**
3. **Is this a problem I actually have?**
4. **How is it different from reminders, reply tracking, inbox organization, or generic AI email?**
5. **Can I really stop checking without missing something important?**
6. **When Lunowa brings something back, will I understand why and what to do?**
7. **Can I trust it with email-related work?**
8. **What can I do next right now?**

The homepage order should follow this visitor sequence rather than the internal ontology.

## 3. Target first-impression mental model

The intended first-time interpretation is approximately:

> Lunowa watches unfinished email-related matters for me and brings them back when I actually need to act, so I do not have to keep checking myself.

Material wrong models include:

- generic AI email writer;
- inbox cleaner / inbox-zero tool;
- notification muter;
- simple reminder/no-reply tracker;
- automatic follow-up sender;
- generic task manager/productivity tool;
- autonomous agent that takes over email decisions.

This is currently a **design oracle**, not measured user evidence.

## 4. Selected Hero direction

Current selected direction after internal M05 audit: **P — Product Proof Baseline**.

### 4.1 Category recognition

The first viewport must visibly establish email/communication territory.

Use believable email/Product evidence rather than abstract symbols as primary proof.

### 4.2 Promise

Current H1:

> **メールを、確認し続けなくていい。**

Because this line is too broad alone, keep a nearby category/mechanism cue such as:

> **返信待ち・資料待ちを、Lunowaが代わりに見守る。**

Exact copy remains revisable; it is not externally validated.

### 4.3 Product proof

Hero should show one concrete unresolved email scenario:

1. user asks for a quotation;
2. Lunowa shows that the quotation is being watched;
3. counterparty replies `社内確認中です。明日送ります。`;
4. quotation is still missing;
5. Lunowa explicitly shows `あなたの対応はまだ必要ありません` and continues monitoring;
6. later the quotation arrives;
7. only then does the matter return as needing user attention with context/Source.

The static frame must make sense before motion.

## 5. Concrete example before abstraction

Do not lead with an internal state diagram such as:

`request -> Managed -> reply -> still Managed -> Needs You -> Moment`.

Show actual email/request/Product response first. Internal labels may appear only after user meaning is clear.

## 6. Motion role

Motion is **not required** for baseline Product comprehension.

The internal M05 audit determined that static evidence already represents:

`intermediate reply -> still no user action required -> material outcome -> attention required`.

Later motion may reinforce object continuity or temporal change, but:

- first still frame must be meaningful;
- information must remain complete with motion suppressed;
- reduced-motion path must be equivalent;
- no permanent loop may be required for comprehension;
- motion may not imply unsupported Product semantics.

## 7. Homepage narrative by visitor question

### H01 — What is this / what does it do?

Hero promise + category cue + dominant real-looking Product proof.

### H02 — Is this my problem?

> **メールの負担は、読むことだけではありません。**

Explain the mental burden of repeatedly wondering whether a quotation, contract, approval, payment confirmation, or answer actually arrived.

This preserves the useful insight from the retired E Hero without maintaining a second acquisition architecture.

### H03 — How is this different?

> **返信が来ても、終わっていないことがある。**

Show an intermediate reply while the requested outcome remains unresolved.

### H04 — Can I leave it alone?

> **必要でない間は、Lunowaが見ています。**

Show what the user can stop checking, not just an internal `Managed` label.

### H05 — Will I miss something important?

> **必要になった時だけ、あなたに戻します。**

Show the same matter becoming attention-worthy when material evidence changes the situation.

### H06 — Will I know what changed and what to do?

> **戻ってきた時には、何が変わったかも分かる。**

Show the material change, remaining action, attachment/source and original communication path.

### H07 — Can I trust it?

> **任せる。でも、決定権は渡さない。**

Translate architecture into user consequences:

- original Source remains reachable;
- uncertainty does not become fake certainty;
- reply/attachment/send/read/silence do not automatically prove outcome closure;
- no external effect is implied when it did not occur;
- monitoring degradation is communicated truthfully.

### H08 — Can I use it now?

State only current availability/provider/language truth.

### H09 — What else do I need to know?

Use FAQ only for material objections.

### H10 — What should I do now?

> **必要になるまで、忘れていていい。**

Keep final CTA behavior consistent with Hero.

## 8. Scanning contract

Major headings should carry the story even when body copy is skipped.

One section = one visitor question/job.

Avoid repetitive slogans, card walls and decorative visuals that require more interpretation than the Product itself.

## 9. Visual comprehension rules

- one dominant idea per viewport/section;
- Product UI is primary proof where behavior is explained;
- familiar software-site grammar is useful when it reduces orientation cost;
- avoid generic AI visual vocabulary: orb, neon network, purple-blue glow, floating dashboard, icon conveyor, meaningless 3D;
- brand distinctiveness should come first from typography, spacing, Product behavior, restrained color, copy and interaction timing.

## 10. Current pre-freeze evidence boundary

Current blocking evidence before M10 is the completed internal audit:

- `docs/M05-INTERNAL-COMPREHENSION-AUDIT.md`
- `docs/M05-INTERNAL-AUDIT-RESULT-2026-08-30.md`

It selected P and recorded known wrong-model risks.

Because the active team has no independent first-time participants:

- owner self-test is not treated as first-time evidence;
- ChatGPT/persona simulation is not user evidence;
- M10 may proceed from internal audit + owner decision;
- external independent validation is deferred until real visitors/beta users/traffic exist.

Future external protocol lives in `docs/FIRST-IMPRESSION-VALIDATION.md`.

## 11. Evidence hierarchy

When evidence conflicts, distinguish:

1. Product truth / safety / current capability constraints;
2. direct independent user evidence, **when it actually exists**;
3. current internal structured audit + owner decision;
4. controlled/peer-reviewed HCI evidence;
5. established UX/accessibility standards;
6. current high-quality industry examples;
7. designer/model preference.

Do not manufacture level 2 from level 3 or 7.

## 12. Success condition

The homepage succeeds when a real visitor's eventual mental model becomes simple and accurate, not when the page has the most features, animation or novelty.

Desired eventual visitor reaction:

> `あ、自分が何度もメールを確認しなくても、Lunowaが見ていて、本当に自分が必要な時だけ戻してくれるんだ。`

Until independent evidence exists, this remains the target comprehension oracle rather than a measured result.
