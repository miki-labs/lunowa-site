# Lunowa Marketing Visitor Journey

Status: canonical user-centered marketing contract, 2026-08-29.

This document constrains how the homepage is understood by a first-time visitor. It does not define Product semantics; Product truth remains in `miki-thecat/lunowa`.

## 1. Primary design objective

The homepage exists to help a first-time visitor build the correct mental model of Lunowa with minimal cognitive effort.

The visitor should not need to know internal Product terms such as `Managed`, `Needs You`, `Moment`, `Responsibility`, or `Attention Delegation` before understanding the value.

The first-order target is **correct Product comprehension**, followed by relevance, trust, and qualified early access.

## 2. First-visit decision sequence

The page should answer the visitor's likely questions in this order:

1. **What is this?**
2. **What does it do for me?**
3. **Is this a problem I actually have?**
4. **How is it different from ordinary reminders, reply tracking, inbox organization, or generic AI email assistants?**
5. **Can I really stop checking without missing something important?**
6. **When Lunowa brings something back, will I understand why and what to do?**
7. **Can I trust it with email-related work?**
8. **Can I use it now, and what happens if I sign up?**

The homepage section order should follow this visitor sequence rather than mirror the internal Product ontology.

## 3. Ten-second comprehension oracle

After roughly ten seconds of first exposure, a visitor should be able to give an answer close to:

> Lunowa watches unfinished email-related matters for me and brings them back when I actually need to act, so I do not have to keep checking myself.

Acceptable paraphrases may vary. The following interpretations indicate material comprehension failure if they dominate:

- generic AI email writer;
- inbox cleaner / inbox-zero tool;
- ordinary notification muting;
- simple no-reply reminder tracker;
- automatic follow-up sender;
- generic task manager;
- autonomous agent that takes over email decisions.

The Hero must not depend on a visitor first learning Lunowa's internal labels to reach the correct model.

## 4. Hero requirements

### 4.1 Category recognition

The first viewport must make email/communication work visually recognizable without requiring explanatory decoding.

Use familiar email/product cues and believable Product UI rather than abstract symbols as the primary proof.

### 4.2 Promise

Current primary promise candidate:

> **メールを、確認し続けなくていい。**

Because this promise alone can be interpreted broadly, the Hero must include a short category/mechanism cue nearby. Current copy is a hypothesis and should be tested, not treated as empirically validated wording.

Example direction:

> 返信待ち・資料待ちを、Lunowaが代わりに見守る。

### 4.3 Product proof

The Hero should show one concrete, recognizable unresolved communication scenario using real-looking Lunowa UI.

Preferred initial scenario:

1. the user asks for a quotation by a date;
2. Lunowa visibly indicates that the quotation is being watched;
3. the counterparty replies that they are still checking / will send it tomorrow;
4. Lunowa remains quiet and explicitly says no user action is required yet;
5. the quotation attachment actually arrives;
6. only then does the item return as needing the user's attention, with concise context and source access.

The visitor should understand the initial static frame before any animation plays.

## 5. Concrete example before abstraction

Do not lead with a diagram such as:

`request -> Managed -> reply -> still Managed -> Needs You -> Moment`

That sequence is useful as an internal storyboard but requires prior knowledge.

Externally, show the actual email/request and the Product response first. Internal Product state names may appear as secondary UI labels only after the underlying meaning is obvious.

## 6. Motion role

Motion is not required for basic category or value comprehension.

Motion may be used to demonstrate the temporal distinction that is difficult to communicate in one static frame:

`intermediate reply arrives -> user still does not need to act -> material outcome evidence arrives -> user attention becomes necessary`.

Rules:

- static first frame must already be meaningful;
- one focal change at a time;
- no abstract icon conveyor or unexplained state timeline as primary Hero content;
- no permanent loop required for comprehension;
- reduced-motion path must preserve the complete explanation;
- autoplay vs user-triggered playback remains an empirical design question and should be tested rather than assumed.

## 7. Homepage narrative by visitor question

### H01 — What is this / what does it do for me?

Hero promise + category cue + real Product UI.

### H02 — Is this my problem?

Heading direction:

> **メールの負担は、読むことだけではありません。**

Use familiar situations such as remembering whether a quotation, contract, approval, payment confirmation, or answer has actually arrived. Do not pretend an exact ICP has been validated.

### H03 — How is this different?

Heading direction:

> **返信が来ても、終わっていないことがある。**

Use one concrete intermediate-reply example. Demonstrate that `reply received` is not automatically `outcome completed`.

### H04 — Can I really leave it alone?

Show Lunowa monitoring several unresolved matters quietly. User-facing wording should explain what the user can stop doing, not merely present the internal `Managed` label.

### H05 — Will I miss something important?

Show the same item becoming attention-worthy only when material evidence changes the outcome.

### H06 — Will I know what to do when it comes back?

Show a concise Moment: what changed, what remains, the likely next action, and direct Source access.

### H07 — Can I trust it?

Heading direction:

> **任せる。でも、決定権は渡さない。**

Translate architecture into user consequences:

- original Source remains reachable;
- uncertainty does not become fake certainty;
- unsupported closure is not silently invented;
- external effects are not implied when they have not occurred;
- monitoring degradation is communicated truthfully.

Do not expose internal architecture terminology unless it helps an advanced visitor.

### H08 — Can I use it now?

State current provider/language/beta availability truthfully. No unsupported parity or launch claims.

### H09 — What else do I need to know?

FAQ for material objections only.

### H10 — What should I do now?

Final CTA with the same action model as the Hero.

## 8. Scanning contract

Headings must carry the story because many visitors will scan rather than read linearly.

A visitor reading only major headings should still understand the page's progression from burden -> different mechanism -> safe delegation -> action.

Do not repeat the same emotional slogan in multiple sections. Each section has one distinct job.

## 9. Visual comprehension rules

- One dominant idea per viewport/section.
- Product UI is the primary visual anchor where Product behavior is being explained.
- Avoid decorative visuals that require more interpretation than the Product itself.
- Avoid generic AI visual vocabulary as a default: abstract orbs, neon networks, purple-blue glow, floating dashboards, icon conveyor belts, and meaningless 3D scenes.
- Brand distinctiveness should come from typography, spacing, Product behavior, color discipline, copy, and interaction timing before decorative novelty.
- Familiar webpage/category structure is a feature when it reduces orientation cost.

## 10. Pre-freeze comprehension test

Before M10 freezes final visual authority, conduct a small directional first-impression study using current Product-discovery recruitment candidates. This is not representative market validation.

Suggested protocol:

1. show one Hero candidate for about ten seconds;
2. hide it;
3. ask `Lunowaは何をするものだと思いましたか？`;
4. ask `何が楽になると思いましたか？`;
5. ask `普通のメール通知・リマインダー・AIメールアプリと何が違うと思いましたか？`;
6. show the intermediate-reply state and ask what they expect Lunowa to do next;
7. re-show the page and ask what makes them uncertain or distrustful;
8. record exact wording and visible confusion where practical.

Compare materially different concepts, not only color/typography variants. At minimum compare a strong static-first real-Product-UI concept with a restrained temporal Product-motion concept.

## 11. Evaluation hierarchy

When evidence conflicts, distinguish:

1. Product truth / safety / current capability constraints;
2. direct user evidence from the current experiment;
3. controlled or peer-reviewed HCI evidence;
4. established UX research and accessibility standards;
5. current high-quality industry examples;
6. designer/model preference.

Industry examples are observational references, not causal proof that a layout will convert better for Lunowa.

## 12. Success condition

The homepage succeeds when the visitor's mental model becomes simpler and more accurate, not when the page contains the most features, animation, or visual effects.

The desired reaction is approximately:

> `あ、自分が何度もメールを確認しなくても、Lunowaが見ていて、本当に自分が必要な時だけ戻してくれるんだ。`

That comprehension is the prerequisite for trust and conversion.