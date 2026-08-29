# Lunowa First-Impression Validation Protocol

Status: canonical M05 research protocol, 2026-08-29.

This protocol determines whether a first-time visitor forms the correct mental model of Lunowa from the Hero and first Product proof. It is a directional qualitative validation gate for M10 visual freeze, not market validation, PMF evidence, or a statistically powered conversion experiment.

## 1. Research question

Primary question:

> Can a first-time visitor correctly infer that Lunowa watches unresolved email-borne matters and returns them only when the visitor actually needs to act, without first learning Lunowa's internal vocabulary?

Secondary questions:

- Does the visitor recognize email/communication work immediately?
- Does the visitor understand the burden removed as ongoing checking/remembering/monitoring rather than merely reading/drafting email?
- Does the visitor distinguish Lunowa from generic AI email, inbox organization, notification muting, reminders, reply tracking, and autonomous follow-up sending?
- Does the visitor understand that `reply received` does not necessarily mean `outcome complete`?
- Does the visitor believe they can safely stop checking, and what breaks that trust?
- Can the visitor understand what happened and what to do when Lunowa returns an item?

## 2. Evidence hierarchy and limits

Use the hierarchy in `docs/VISITOR-JOURNEY.md`.

Small qualitative rounds primarily discover comprehension failures and trust/orientation problems. They do not estimate population preference, conversion lift, or prove one concept universally optimal.

Current GOV.UK guidance commonly uses small iterative usability rounds and distinguishes this from statistically powered A/B testing requiring substantially more traffic/sample.

Parallel-prototyping research supports keeping multiple alternatives alive when they are meaningfully distinct. It does **not** require near-duplicate variants. The current M05 therefore uses a minimal divergent pair rather than the former A/C/D set.

A 2024 CHI study found that AI-image-supported visual ideation can increase fixation and reduce idea variety/originality. Repeatedly prompting small mutations of one generated screen is therefore not accepted as genuine divergence.

## 3. Participants

Recruit actual or plausible users from current Product-discovery candidate groups. Exact ICP remains unvalidated, so do not describe the sample as representative of the final market.

Record only minimum metadata needed to interpret results, such as broad work context and current email workflow. Do not publish unnecessary identifiers or real mailbox content.

Prefer realistic dummy scenarios unless secure real-data handling is explicitly prepared.

## 4. Current concept set

Use `docs/HERO-CONCEPTS-M05.md`.

Current participant-facing comparison is intentionally small:

- **P — Product Proof Baseline**: recognizable real-looking Lunowa UI is the primary explanatory object.
- **E — Editorial Problem-First Dark Horse**: the page begins from the user's monitoring burden, then immediately grounds it in recognizable email/Product proof.

The former A/C/D set is no longer the preferred participant-facing experiment because its conceptual distance was too small for the expected information gain.

Do not add another concept unless it changes a material mental-model/proof hypothesis rather than cosmetic layout.

## 5. Fidelity

Low-fidelity wireframes are useful for internal structure sanity checks, but the participant-facing first-impression stimulus should be realistic enough to support judgments involving:

- category recognition;
- visual orientation;
- Product credibility/believability;
- first-impression aesthetics/prototypicality;
- perceived trust.

Therefore use **mid-to-high fidelity, inexpensive-to-revise stimuli**, not intentionally crude wireframes, for the main M05 exposure.

This is a bounded methodological inference: prior prototype-fidelity studies show low/high fidelity can uncover similar usability issues, while other work shows fidelity/aesthetics can affect subjective evaluation. M05 is specifically about first impression and credibility as well as basic comprehension, so fidelity cannot be treated as irrelevant.

Do not require pixel-perfect production design before testing.

## 6. Independent generation rule

P and E must be conceived independently enough to preserve conceptual distance.

Do not create E by taking the P image and asking an image model for a small rearrangement.

Before participant exposure, verify both against Product truth and remove:

- invented Product capabilities;
- fake security/privacy claims;
- unsupported providers/pricing/metrics;
- generic AI positioning;
- unreadable generated text;
- decorative AI-SaaS motifs that obscure Product proof.

## 7. First-impression exposure

Use a bounded short exposure appropriate to the research question. Ten seconds remains a pragmatic default, not a scientifically unique optimum.

Record exact duration and viewport/device class. Do not merge materially different protocols into one homogeneous evidence set.

The visitor sees only what a real visitor would see. Do not verbally explain Lunowa before unaided questions.

Each participant should receive one concept for the clean unaided first impression where practical. Showing the second concept later is comparative/aided evidence because the participant has already learned something about Lunowa.

Rotate P/E assignment across participants.

## 8. Required unaided questions

After the initial Hero is hidden, ask before category priming:

1. `これは何をするサービス／アプリだと思いましたか？`
2. `使うと何が楽になると思いましたか？`
3. `画面の中で、そう思った根拠はどこでしたか？`

Only after these are captured may the moderator ask aided differentiation questions such as:

- `普通のメール通知やリマインダーと比べると、何が違うと思いましたか？`
- `AIがメールを書くサービスだと思いましたか？ そう思った／思わなかった理由は何ですか？`

Do not ask leading questions that contain the intended answer.

## 9. Temporal-mechanism probe

The temporal question is separate from whether P or E is prettier.

Show the intermediate reply:

> `社内確認中です。明日送ります。`

Before revealing Lunowa's next state, ask:

> `このあとLunowaはどうすると思いますか？`

Record whether the participant expects:

- immediate user notification/action;
- automatic completion;
- automatic follow-up/send;
- continued quiet monitoring;
- something else / cannot tell.

Only after a static direction is comprehension-eligible should a dedicated motion treatment be tested. Motion should be applied to the same accepted structure/content so the motion question is not confounded with a new page design.

## 10. Trust and control probe

After comprehension is measured, re-show the concept and ask neutral questions:

- `これを使う前に気になること・不安なことはありますか？`
- `この画面だけでは分からないことは何ですか？`
- `必要なメールを見逃さないと思える／思えないのはなぜですか？`
- `Lunowaが間違えた時に、どう確認できてほしいですか？`

Do not start by enumerating security features; learn the user's salient risk model first.

## 11. Lower-page journey probe

After clean first-impression evidence, allow the participant to scan/scroll the complete homepage narrative.

Observe whether they can find answers to:

1. Why is this a problem worth solving?
2. How is Lunowa different from reply/reminder tracking?
3. Can I really leave the matter alone?
4. What happens when I am needed?
5. Will I know what changed and what to do?
6. Can I inspect the original Source / recover from uncertainty?
7. Can I use it now?
8. What happens if I take the CTA?

Record hesitation, rereading, wrong turns and skipped sections. Scroll depth alone is not comprehension.

Do not build two completely independent long homepages merely for M05 unless the Hero thesis necessarily changes the downstream narrative. The key divergent comparison is the acquisition/mental-model section.

## 12. Evidence capture

For every session record:

- concept id P or E;
- exact artifact hash/reference and copy snapshot;
- fidelity description;
- exposure mode/duration;
- viewport/device class;
- participant recruitment category;
- exact question wording;
- relevant verbatim answer where practical;
- moderator observation separated from participant statements;
- concept order and prior Lunowa exposure;
- date;
- protocol deviations.

If copy/layout/scenario changes materially, old evidence does not automatically validate the changed candidate.

## 13. Classification

Classify unaided responses using the fixed frame:

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

Separately code:

- problem relevance recognized / not recognized;
- Reply != Done understood / not understood;
- continued-monitoring expectation correct / incorrect / unclear;
- trust/control concerns;
- visual clutter/orientation problems;
- Product credibility/believability concerns;
- CTA expectation correct / incorrect / unclear.

Do not redefine categories after seeing results merely to make a preferred concept pass.

## 14. M10 decision rule

M05 does not mechanically crown a winner from a tiny sample.

A direction is blocked from M10 freeze when repeated unaided responses form a materially wrong Product mental model, regardless of aesthetic preference.

A direction is eligible when:

- email/communication Product territory is recognizable;
- monitoring-offload is often reached without moderator teaching;
- `reply == completion` and autonomous-send misunderstandings are not systematic;
- the lower-page journey resolves major relevance/trust/action questions;
- no unsupported claim is required for the concept to make sense;
- static/reduced-motion paths preserve core comprehension.

If P is clearly eligible and E does not reveal a materially better acquisition model, stop exploring additional near variants and converge on P.

If E reveals a materially stronger self-recognition/mental-model path, M10 may select E or synthesize the specific evidence-backed element into P. Do not hybridize merely because both exist.

## 15. Quantitative follow-up

Once real traffic exists, sufficiently powered experiments may evaluate conversion/copy/motion choices.

Prefer the metric chain:

`correct comprehension -> qualified CTA -> early-access completion -> later real delegated-loop activation`

Raw click-through is not the sole optimization target.

## 16. Current evidence checkpoint

`docs/RESEARCH-2026-08-29.md` contains the dated evidence classes. Relevant current additions for this correction include:

- parallel prototyping / multiple-alternative critique research;
- prototype-fidelity evidence;
- design-fixation research;
- CHI 2024 evidence on generative-AI ideation fixation;
- webpage prototypicality/aesthetics/trust research;
- current GOV.UK qualitative/A-B research boundaries.

External research constrains the method. Direct Lunowa user evidence determines whether the actual Hero communicates Lunowa.