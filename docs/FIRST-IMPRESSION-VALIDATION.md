# Lunowa External First-Impression Validation Protocol

Status: **DEFERRED EXTERNAL VALIDATION PROTOCOL — NOT A CURRENT BLOCKING GATE**.

The active project team currently consists only of the Product owner and ChatGPT. Neither is a clean independent first-time participant: the owner already knows Lunowa deeply, and ChatGPT has extensive project context and is not a real user. Therefore this document remains the protocol for **future independent human validation**, while the current blocking M05 step is `docs/M05-INTERNAL-COMPREHENSION-AUDIT.md`.

This protocol does not authorize synthetic/model responses to be reported as user evidence.

## 1. Future research question

> Can an independent first-time visitor correctly infer that Lunowa watches unresolved email-borne matters and returns them only when the visitor actually needs to act, without first learning Lunowa's internal vocabulary?

Secondary questions:

- Is email/communication work recognized immediately?
- Is the burden removed understood as ongoing checking/remembering/monitoring rather than merely reading/drafting?
- Is Lunowa distinguished from generic AI email, inbox organization, notification muting, reminders, reply tracking, and autonomous follow-up sending?
- Is `reply received != outcome complete` understood?
- Does the visitor believe they can safely stop checking, and what breaks that trust?
- When Lunowa returns an item, can the visitor understand what changed and what to do?

## 2. Evidence boundary

Independent human evidence may discover comprehension, trust and orientation failures. Small qualitative rounds do not estimate population preference, conversion lift, PMF or exact ICP.

Do not label owner judgment, ChatGPT critique, persona simulation or model-generated responses as participant evidence.

The current internal audit may make a direction implementation-eligible, but it must retain explicit external-validation debt until real independent evidence exists.

## 3. Participants when available

Recruit actual or plausible users from current Product-discovery candidate groups. Exact ICP remains unvalidated, so do not describe the sample as representative of the final market.

Prefer small iterative rounds. Record only minimum metadata needed to interpret results and do not publish unnecessary identifiers or real mailbox content.

Use realistic dummy scenarios unless secure real-data handling is explicitly prepared.

## 4. Accepted stimulus basis

Use the exact accepted/current artifact set or its later explicitly superseding version:

- `docs/stimuli/P-v1.svg`
- `docs/stimuli/E-v1.svg`
- `docs/stimuli/shared-lower-v1.svg`
- `docs/stimuli/MANIFEST.md`

If M10 has already frozen and implemented a later direction before independent participants become available, test the actual preview/implementation instead and record that this is post-freeze validation rather than pre-freeze selection evidence.

Do not revive the retired A/C/D matrix merely because it existed historically.

## 5. First-impression exposure

Use a bounded short exposure appropriate to the question. Ten seconds is a pragmatic default, not a scientifically unique optimum.

Record exact duration and viewport/device class. Do not verbally explain Lunowa before unaided questions.

Each participant should receive one condition for the clean unaided first impression where practical. Showing another condition later becomes aided/comparative evidence.

## 6. Required unaided questions

After the initial stimulus is hidden, ask before category priming:

1. `これは何をするサービス／アプリだと思いましたか？`
2. `使うと何が楽になると思いましたか？`
3. `画面の中で、そう思った根拠はどこでしたか？`

Only after capture may the moderator ask aided differentiation questions.

Do not embed the intended answer in the question.

## 7. Temporal probe

Show the intermediate reply:

> `社内確認中です。明日送ります。`

Before revealing Lunowa's next state, ask:

> `このあとLunowaはどうすると思いますか？`

Record whether the participant expects:

- continued quiet monitoring;
- immediate user notification/action;
- automatic completion;
- automatic follow-up/send;
- something else / cannot tell.

Motion is tested only as a separate question after a static direction is already otherwise acceptable.

## 8. Trust/control probe

After comprehension is measured, ask neutral questions such as:

- `これを使う前に気になること・不安なことはありますか？`
- `この画面だけでは分からないことは何ですか？`
- `必要なメールを見逃さないと思える／思えないのはなぜですか？`
- `Lunowaが間違えた時に、どう確認できてほしいですか？`

Do not seed a security checklist before learning the participant's actual risk model.

## 9. Lower-page probe

After clean first-impression evidence, allow scan/scroll of the complete narrative and observe whether the participant can answer:

1. Why is repeated checking the problem?
2. How is Lunowa different from reply/reminder tracking?
3. Can the matter be safely left alone?
4. What happens when the user is needed?
5. Will the user know what changed and what to do?
6. Can the original Source be inspected?
7. What can the visitor do next?

Scroll depth alone is not comprehension.

## 10. Evidence capture and coding

For every session record:

- exact artifact/preview reference;
- exposure mode/duration;
- viewport/device;
- broad participant category;
- exact question wording;
- relevant verbatim response where practical;
- moderator observation separated from participant statement;
- prior Lunowa exposure;
- date and protocol deviations.

Use the fixed high-level frame:

- `CORRECT_OR_NEAR_CORRECT_MONITORING_OFFLOAD`
- `GENERIC_AI_EMAIL`
- `INBOX_ORGANIZATION`
- `NOTIFICATION_MUTING`
- `REMINDER_OR_REPLY_TRACKER`
- `AUTONOMOUS_FOLLOWUP_OR_SEND`
- `GENERIC_TASK_MANAGER`
- `GENERIC_PRODUCTIVITY_OR_ATTENTION_TOOL`
- `UNCLEAR_CATEGORY`
- `OTHER`

Separately code Reply != Done understanding, continued-monitoring expectation, trust/control concerns, orientation problems and CTA expectation.

Do not redefine categories after seeing results to make a preferred design pass.

## 11. How future evidence affects the Product

Independent evidence can revise the visual direction even after implementation. Treat this as normal Product learning.

A direction that repeatedly creates a materially wrong Product mental model should be corrected even if owner preference or visual craft is strong.

Once real traffic exists, sufficiently powered experiments may evaluate conversion/copy/motion choices. Prefer the chain:

`correct comprehension -> qualified CTA -> early-access completion -> later real delegated-loop activation`.

Raw click-through alone is not the optimization target.
