# Lunowa First-Impression Validation Protocol

Status: canonical M05 research protocol, 2026-08-29.

This protocol exists to determine whether a first-time visitor forms the correct mental model of Lunowa from the Hero and first Product proof. It is a directional qualitative validation gate for M10 visual freeze, not market validation, PMF evidence, or a statistically powered conversion experiment.

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

For M05, a small usability/first-impression round is primarily for discovering common comprehension failures and language/visual problems. It must not be reported as a population estimate, conversion lift, or proof that one concept is universally optimal.

Plan iterative rounds rather than one oversized qualitative session. Current GOV.UK research guidance uses roughly 4-8 participants per qualitative/usability round and recommends additional rounds when more evidence is needed; surveys/A-B tests require much larger samples for quantitative inference.

## 3. Participants

Recruit actual or plausible users from current Product-discovery candidate groups. Exact ICP remains unvalidated, so do not describe the sample as representative of the final market.

Record only the minimum participant metadata required to interpret the session, for example broad work context and current email workflow. Do not publish unnecessary identifiers or real mailbox content.

Prefer realistic dummy scenarios unless secure handling of real participant data is explicitly prepared.

## 4. Concept requirements

Test 3-5 materially different concepts. Cosmetic color/type variants do not count as distinct concepts.

At minimum include:

1. **Static-first real Product UI** — the first frame alone explains the monitored matter and current user responsibility.
2. **User-controlled temporal Product demo** — the same recognizable UI demonstrates intermediate reply -> still no action -> material outcome -> attention required.
3. **A materially different explanatory composition** that still uses recognizable email/Product content, so the study can test information architecture rather than only motion.

Each concept must have a stable concept id and immutable artifact/copy snapshot for the round.

No concept may introduce unsupported Product, security, provider, performance, user-count, or pricing claims.

## 5. First-impression exposure

Use a bounded short exposure appropriate to the research question. Ten seconds is a pragmatic current default, not a scientifically unique optimum.

First-impression research has used multiple exposure durations, including 2, 5, and 10 seconds; visual complexity and participant differences can affect responses. Therefore record the exact duration used and do not compare results collected under materially different protocols as if they were one homogeneous sample.

The initial exposure must include only what a real visitor would see. Do not verbally explain Lunowa before the participant answers the unaided comprehension questions.

## 6. Question order — unaided before aided

The first questions must be neutral and open-ended. Do not prime the participant with competitor categories or the expected answer before unaided recall is captured.

Required first questions after the Hero is hidden:

1. `これは何をするサービス／アプリだと思いましたか？`
2. `使うと何が楽になると思いましたか？`
3. `画面の中で、そう思った根拠はどこでしたか？`

Only after those answers are recorded may the moderator ask aided differentiation questions such as:

- `普通のメール通知やリマインダーと比べると、何が違うと思いましたか？`
- `AIがメールを書くサービスだと思いましたか？ そう思った／思わなかった理由は何ですか？`

Avoid questions such as `Lunowaは返信待ちを代わりに監視するサービスだと分かりましたか？`; that gives away the intended model.

## 7. Temporal-mechanism probe

Show the concrete intermediate reply, for example:

> `社内確認中です。明日送ります。`

Before revealing the next state, ask:

> `このあとLunowaはどうすると思いますか？`

Record whether the participant expects:

- immediate user notification/action;
- automatic completion;
- automatic follow-up send;
- continued quiet monitoring;
- something else / cannot tell.

Then reveal the actual Still Managed state and later the material outcome evidence. Ask what changed in their understanding.

## 8. Trust and control probe

After comprehension is measured, re-show the concept and ask neutral questions:

- `これを使う前に気になること・不安なことはありますか？`
- `この画面だけでは分からないことは何ですか？`
- `必要なメールを見逃さないと思える／思えないのはなぜですか？`
- `Lunowaが間違えた時に、どう確認できてほしいですか？`

Do not start by enumerating security features; first learn which risks are salient to the participant.

## 9. Lower-page journey probe

M05 is not Hero-only. After first-impression questions, allow the participant to scroll the complete low/mid-fidelity homepage narrative.

Observe whether they can find answers to these questions without moderator guidance:

1. Why is this a problem worth solving?
2. How is Lunowa different from reply/reminder tracking?
3. Can I really leave the matter alone?
4. What happens when I am needed?
5. Will I know what changed and what to do?
6. Can I inspect the original source / recover from uncertainty?
7. Can I use it now?
8. What happens if I take the CTA?

Record search path, hesitation, rereading, wrong turns, and sections skipped. Do not treat scrolling depth by itself as comprehension.

## 10. Concept assignment

Avoid showing every participant all concepts in the same order; earlier concepts can teach the Product and contaminate later first-impression responses.

Preferred approach for a small round:

- each participant gets one concept for the true unaided first-impression test;
- rotate concept assignment across participants;
- after unaided data is captured, additional concepts may be shown for comparative preference/diagnostic discussion, clearly labeled as aided evidence.

If a within-subject comparison is necessary, counterbalance order and never treat the later concepts as uncontaminated first impressions.

## 11. Evidence capture

For every session record:

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
- CTA expectation correct / incorrect / unclear.

Do not redefine categories after seeing results merely to make a preferred concept pass.

## 13. M10 decision rule

M05 does not mechanically crown a visual winner from a tiny sample. It supplies bounded evidence to M10.

A candidate is materially blocked from visual freeze when repeated unaided responses form the wrong Product mental model, even if participants call the design attractive.

A candidate is eligible for M10 comparison only when:

- the first viewport is recognizably email/communication Product territory;
- unaided answers frequently reach the monitoring-offload mechanism without moderator teaching;
- the temporal probe does not systematically imply reply == completion or autonomous sending;
- the lower-page journey resolves the major relevance/trust/action questions;
- no material unsupported claim is required for the concept to make sense;
- static and reduced-motion paths preserve the same core comprehension.

M10 then compares eligible candidates on Product proof, relevance, differentiation, trust, action clarity, brand distinctiveness, responsive viability, and visual craft.

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
- current OpenAI Codex/design-context guidance.

External evidence constrains the method; direct Lunowa user evidence decides whether the current Hero actually communicates Lunowa.