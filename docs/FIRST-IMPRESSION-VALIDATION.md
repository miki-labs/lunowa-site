# Lunowa First-Impression Validation Protocol

Status: canonical M05 research protocol, 2026-08-29.

This protocol determines whether a first-time visitor forms the correct mental model of Lunowa from the Hero and first Product proof. It is a directional qualitative validation gate for M10 visual freeze, not market validation, PMF evidence, or a statistically powered conversion experiment.

## 1. Research question

Primary question:

> Can a first-time visitor correctly infer that Lunowa watches unresolved email-borne matters and returns them only when the visitor actually needs to act, without first learning Lunowa's internal vocabulary?

Secondary questions:

- Does the visitor recognize the surface as email/communication work immediately?
- Does the visitor understand the burden removed as ongoing checking/remembering/monitoring rather than merely reading or drafting email?
- Does the visitor distinguish Lunowa from a generic AI email writer, inbox organizer, notification muter, ordinary reminder, simple reply tracker, or autonomous follow-up sender?
- Does the intermediate-reply state communicate that `reply received` does not necessarily mean `outcome complete`?
- Does the visitor believe they can safely stop checking, and what breaks that trust?
- Can the visitor understand what happened and what to do when Lunowa returns an item?

## 2. Evidence hierarchy and limits

Use the hierarchy in `docs/VISITOR-JOURNEY.md`.

A small usability/first-impression round is primarily for discovering common comprehension failures and language/visual problems. It must not be reported as a population estimate, conversion lift, or proof that one concept is universally optimal.

Plan iterative rounds rather than one oversized qualitative session. Current GOV.UK research guidance uses roughly 4-8 participants per qualitative/usability round and recommends additional rounds when more evidence is needed; surveys/A-B tests require much larger samples for quantitative inference.

Current high-quality Product websites commonly pair clear category/value language with recognizable Product surfaces, and OpenAI's current frontend-generation guidance strongly favors one dominant first-viewport anchor, real content, real Product context, reduced generic card/gradient decoration, and browser verification. These are useful design constraints/industry observations, not causal proof that one Hero will convert better for Lunowa.

## 3. Participants

Recruit actual or plausible users from current Product-discovery candidate groups. Exact ICP remains unvalidated, so do not describe the sample as representative of the final market.

Record only the minimum participant metadata required to interpret the session, for example broad work context and current email workflow. Do not publish unnecessary identifiers or real mailbox content.

Prefer realistic dummy scenarios unless secure handling of real participant data is explicitly prepared.

## 4. Concept requirements

Use the current concept family in `docs/HERO-CONCEPTS-M05.md`.

Do not treat a static composition and a motion composition as directly comparable first-impression conditions unless the protocol explicitly isolates the motion variable. A small study that changes layout, copy, interaction and motion simultaneously cannot tell which change caused a comprehension difference.

### Stage 1 — static information-architecture comparison

Compare materially different static first-viewport structures:

- A — Product First / Static Proof
- C — Familiar Situation First
- D — Static Dual-State Comparison

Hold Product truth, scenario, core H1/value family, approximate viewport and exposure protocol constant as practical. Record all intentional differences.

### Stage 2 — temporal-mechanism comparison

After Stage 1 yields at least one eligible static structure, compare that same structure/content with and without restrained motion:

- static base;
- B — motion-enabled variant.

This isolates the practical question: does temporal motion improve understanding of the decisive state change enough to justify the added complexity?

Cosmetic color/type variants do not count as separate hypotheses.

No concept may introduce unsupported Product, security, provider, performance, user-count, or pricing claims.

## 5. First-impression exposure

Use a bounded short exposure appropriate to the research question. Ten seconds is a pragmatic current default, not a scientifically unique optimum.

First-impression research has used multiple exposure durations, and visual complexity/participant differences can affect responses. Record the exact duration and do not merge materially different protocols into one homogeneous result set.

The initial exposure must include only what a real visitor would see. Do not verbally explain Lunowa before the participant answers the unaided comprehension questions.

For Stage 1, the concept remains static during the clean first-impression exposure.

For Stage 2, record whether motion is user-triggered, autoplay, or another bounded mode. Do not compare these modes as if they were equivalent exposure.

## 6. Question order — unaided before aided

The first questions must be neutral and open-ended. Do not prime the participant with competitor categories or the expected answer before unaided evidence is captured.

Required first questions after the Hero is hidden:

1. `これは何をするサービス／アプリだと思いましたか？`
2. `使うと何が楽になると思いましたか？`
3. `画面の中で、そう思った根拠はどこでしたか？`

Only after those answers are recorded may the moderator ask aided differentiation questions such as:

- `普通のメール通知やリマインダーと比べると、何が違うと思いましたか？`
- `AIがメールを書くサービスだと思いましたか？ そう思った／思わなかった理由は何ですか？`

Avoid questions such as `Lunowaは返信待ちを代わりに監視するサービスだと分かりましたか？`; that gives away the intended model.

## 7. Temporal-mechanism probe

The core temporal test is not `did the animation look good?`.

Show the concrete intermediate reply, for example:

> `社内確認中です。明日送ります。`

Before revealing Lunowa's next state, ask:

> `このあとLunowaはどうすると思いますか？`

Record whether the participant expects:

- immediate user notification/action;
- automatic completion;
- automatic follow-up/send;
- continued quiet monitoring;
- something else / cannot tell.

Then reveal Still Managed / no-action-required and later the material outcome evidence. Ask what changed in their understanding.

For the Stage 2 motion comparison, use the same information architecture and content as the static baseline. Change motion/playback only as far as practical.

## 8. Trust and control probe

After comprehension is measured, re-show the concept and ask neutral questions:

- `これを使う前に気になること・不安なことはありますか？`
- `この画面だけでは分からないことは何ですか？`
- `必要なメールを見逃さないと思える／思えないのはなぜですか？`
- `Lunowaが間違えた時に、どう確認できてほしいですか？`

Do not start by enumerating security features; first learn which risks are salient to the participant.

## 9. Lower-page journey probe

M05 is not Hero-only. After first-impression questions, allow the participant to scan/scroll the complete low/mid-fidelity homepage narrative.

Observe whether they can find answers to:

1. Why is this a problem worth solving?
2. How is Lunowa different from reply/reminder tracking?
3. Can I really leave the matter alone?
4. What happens when I am needed?
5. Will I know what changed and what to do?
6. Can I inspect the original Source / recover from uncertainty?
7. Can I use it now?
8. What happens if I take the CTA?

Record search path, hesitation, rereading, wrong turns and sections skipped. Scroll depth alone is not comprehension.

The lower-page visual treatment may vary in rhythm, but section purpose/order should stay stable enough that Hero-condition differences are not hidden by a completely different page below it.

## 10. Concept assignment and contamination

Avoid showing every participant all concepts in the same order; earlier concepts teach the Product and contaminate later first-impression responses.

Preferred approach for a small Stage 1 round:

- each participant gets one static concept for the true unaided first-impression test;
- rotate A/C/D assignment across participants;
- after unaided data is captured, additional concepts may be shown for comparative preference/diagnostic discussion, clearly labeled as aided evidence.

Stage 2 should be a separate evidence set where practical. If the same participant has already learned Lunowa from Stage 1, their motion feedback is diagnostic but is not a clean first impression.

If within-subject comparison is necessary, counterbalance order and never treat later conditions as uncontaminated first impressions.

## 11. Evidence capture

For every session record:

- study stage: `STATIC_STRUCTURE` or `TEMPORAL_MOTION`;
- concept id;
- exact artifact hash/reference and copy snapshot;
- exposure mode: static / autoplay / user-triggered;
- duration;
- viewport/device class;
- participant recruitment category;
- exact question wording;
- participant's relevant verbatim answer where practical;
- moderator observations separated from participant statements;
- date;
- concept order and prior exposure to Lunowa;
- protocol deviations.

If copy, layout, scenario, motion, or Product state changes materially, old evidence does not automatically validate the changed candidate.

## 12. Classification

Classify unaided first-impression responses using a fixed coding frame before final selection:

- `CORRECT_OR_NEAR_CORRECT_MONITORING_OFFLOAD`
- `GENERIC_AI_EMAIL`
- `INBOX_ORGANIZATION`
- `NOTIFICATION_MUTING`
- `REMINDER_OR_REPLY_TRACKER`
- `AUTONOMOUS_FOLLOWUP_OR_SEND`
- `GENERIC_TASK_MANAGER`
- `UNCLEAR_CATEGORY`
- `OTHER`

Separately code:

- problem relevance recognized / not recognized;
- Reply != Done distinction understood / not understood;
- Still Managed expectation correct / incorrect / unclear;
- trust/control concern categories;
- visual clutter/orientation issue;
- motion-specific confusion;
- motion-specific comprehension gain/loss;
- CTA expectation correct / incorrect / unclear.

Do not redefine categories after seeing results merely to make a preferred concept pass.

## 13. M10 decision rule

M05 does not mechanically crown a visual winner from a tiny sample. It supplies bounded evidence to M10.

A candidate is materially blocked from visual freeze when repeated unaided responses form the wrong Product mental model, even if participants call the design attractive.

A static structure is eligible for M10 comparison only when:

- first viewport is recognizably email/communication Product territory;
- unaided answers often reach monitoring offload without moderator teaching;
- temporal probe does not systematically imply reply == completion or autonomous sending;
- lower-page journey resolves major relevance/trust/action questions;
- no material unsupported claim is required for the concept to make sense;
- reduced-motion/static path preserves core comprehension.

Motion is admitted only when it adds meaningful temporal comprehension, continuity or confidence without becoming necessary to understand the basic Product, creating accessibility failure, or materially increasing confusion.

M10 then compares eligible candidates on Product proof, relevance, differentiation, trust, action clarity, brand distinctiveness, responsive viability and visual craft.

## 14. Quantitative follow-up boundary

Once real traffic exists, homepage conversion and comprehension hypotheses may be tested with sufficiently powered experiments. Small M05 rounds must not be described as statistically significant A/B tests.

Prefer metrics that preserve Product meaning:

`correct comprehension -> qualified CTA -> early-access completion -> later real delegated-loop activation`

Raw click-through alone is not the optimization target.

## 15. Current external evidence checkpoint

Current evidence motivating this protocol is recorded in `docs/RESEARCH-2026-08-29.md` and includes:

- visual-complexity/prototypicality first-impression research;
- large-sample webpage prototypicality/trust research;
- current accessibility motion guidance;
- current GOV.UK moderated-testing/research-planning guidance;
- current high-quality Product-marketing observations;
- current OpenAI frontend/design-generation guidance.

External evidence constrains the method; direct Lunowa user evidence decides whether the current Hero actually communicates Lunowa.