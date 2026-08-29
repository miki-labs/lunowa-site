# Lunowa M05 Participant Session Packet — 2026-08-30

Status: operational research guide for Issue #10. This file does not contain participant findings.

Use only after accepted S05 #14 artifact binding. Do not redesign stimuli during a session.

## 1. Objective

Determine whether a first-time visitor can infer, without being taught Lunowa vocabulary, that Lunowa:

- watches unresolved email-related matters on the user's behalf;
- stays quiet while the user is not materially needed;
- does not treat every reply as completion;
- returns the matter when the user actually needs to act, with enough context to understand why.

This is directional qualitative research, not conversion measurement, PMF validation, or statistical A/B testing.

## 2. Participants

### Current recruitment prior, not validated ICP

Recruit actual/plausible users who regularly use email for asynchronous coordination with external people or organizations and have at least some experience of:

- waiting for documents, answers, approvals, payments, scheduling or decisions;
- checking whether someone has replied or whether a requested outcome arrived;
- keeping reminders/notes/tasks because an email matter remains unresolved.

Do not require a narrow profession unless later Product evidence supports it.

### Round size

Default first round: **4–8 participants**.

If findings remain ambiguous, run another small round after adjudicating the first round rather than turning the initial round into a large pseudo-survey.

### Diversity/access

Within practical recruitment constraints, avoid recruiting only one homogeneous friend/peer cohort. Include variation in email intensity and work context. Include accessibility needs where feasible; record relevant access needs without collecting unnecessary sensitive information.

## 3. Privacy / data minimization

Use the canonical dummy quotation scenario. Do not ask participants to expose real inbox contents or credentials for this round.

Participant record should use a study ID such as `M05-R1-P01`; keep names/contact details outside the research evidence file if recruitment logistics require them.

Record only what is needed to interpret the session.

If audio/video recording is used, obtain informed consent and define retention/access separately before recording.

## 4. Artifact binding

Current accepted S05 manifest:

- `docs/stimuli/MANIFEST.md`
- `docs/stimuli/P-v1.svg`
- `docs/stimuli/E-v1.svg`
- `docs/stimuli/shared-lower-v1.svg`
- S05 PASS evidence: Issue #14 comment `5463581123`

Never substitute the historical Concept A raster image.

If any accepted artifact changes, stop and re-run S05 audit before continuing participant exposure.

## 5. Assignment

Each participant receives exactly one clean first-impression condition first.

Suggested alternating assignment:

| participant | clean first condition |
|---|---|
| P01 | P |
| P02 | E |
| P03 | P |
| P04 | E |
| P05 | E |
| P06 | P |
| P07 | E |
| P08 | P |

The exact pattern may be randomized, but keep counts approximately balanced and record actual assignment.

Showing the second condition later is comparative/aided evidence, **not another clean first impression**.

## 6. Session setup

Before each session verify:

- correct artifact/version from the manifest;
- target viewport 1440×900 or a controlled equivalent that preserves the full initial stimulus;
- 100% browser/preview zoom unless an access need requires otherwise;
- no motion;
- no prior explanation of `Managed`, `Needs You`, `Moment`, `Responsibility`, `Attention Delegation`, competitor categories or the expected answer;
- no scrolling during the clean first-impression exposure;
- note-taking template ready.

If participant device/viewport differs materially, record it and do not silently merge the evidence with controlled-view evidence.

## 7. Moderator introduction

Keep the introduction neutral.

Required ideas:

- we are testing the page, not the participant;
- there are no correct answers expected from them;
- we want their immediate interpretation, including confusion;
- they should not try to please the researcher;
- first they will see a page briefly, then answer a few questions.

Do **not** explain what Lunowa does before the clean questions.

## 8. Clean first-impression exposure

Default exposure: **10 seconds**.

This is a pragmatic standardized exposure, not a claim that 10 seconds is a universal scientific optimum.

During exposure:

- show only assigned P-v1 or E-v1;
- no scrolling;
- no moderator explanation;
- no hover demo or animation;
- do not answer questions about the Product yet.

After exposure, hide/freeze the stimulus before asking the first questions if the session tooling permits it. Record whether it remained visible during questioning.

## 9. Required unaided questions

Ask in this order, without paraphrasing into leading language:

1. **これは何をするサービス／アプリだと思いましたか？**
2. **使うと何が楽になると思いましたか？**
3. **画面の中で、そう思った根拠はどこでしたか？**

Neutral follow-ups are allowed, for example:

- `もう少し教えてください。`
- `何を見てそう思いましたか？`
- `ほかに気になったところはありますか？`

Do not ask `返信待ちを管理するアプリだと思いましたか？` or otherwise seed a target category.

## 10. Temporal probe

Show/point to the canonical intermediate reply:

> `社内確認中です。明日送ります。`

Ask:

> **このあとLunowaはどうすると思いますか？**

Do not provide response options aloud first.

Code afterward as one of:

- continued quiet monitoring;
- immediate user action/notification expected;
- automatic completion/close expected;
- autonomous follow-up/send expected;
- cannot tell;
- other.

Capture the participant's own wording before coding.

## 11. Shared lower-page probe

Only after the unaided Hero questions and temporal probe, show `shared-lower-v1.svg`.

Probe whether the participant now understands:

1. the burden is ongoing monitoring/remembering, not merely reading email;
2. a reply may arrive while the requested outcome remains unresolved;
3. Lunowa continues watching during that interval;
4. the user is brought back when action/judgment becomes necessary;
5. the return state explains what changed and what to do;
6. original email/evidence remains available;
7. the CTA/availability expectation is not misleading.

Use open questions before direct confirmation questions.

## 12. Optional comparative exposure

After all clean evidence for the assigned condition is complete, the alternate P/E concept may be shown.

Ask only comparative questions such as:

- `こちらを見ると、最初の理解から何か変わりますか？`
- `どちらの方が何をするProductか理解しやすかったですか？ なぜですか？`
- `違いを感じた箇所はどこですか？`

Record this as **aided/comparative**, never as clean first-impression evidence.

## 13. Coding frame

Code the primary unaided mental model using the narrowest applicable category:

- `CORRECT_MONITORING_OFFLOAD`
- `GENERIC_AI_EMAIL`
- `INBOX_ORGANIZER`
- `NOTIFICATION_MUTER`
- `REMINDER_REPLY_TRACKER`
- `AUTO_FOLLOWUP_SENDER`
- `GENERIC_TASK_PRODUCTIVITY`
- `AUTONOMOUS_AGENT`
- `UNCLEAR_CATEGORY`
- `OTHER`

### Correctness boundary

A response is not automatically `CORRECT_MONITORING_OFFLOAD` because it mentions reminders, waiting or replies.

A correct/near-correct answer should contain enough of the causal job:

- unfinished email matter/outcome;
- Lunowa watches/keeps track for the user;
- user does not need to keep checking now;
- matter returns when action/attention is actually required.

Allow a separate `PARTIAL` flag when the participant understands only part of the job.

## 14. Evidence record template

For each participant create a durable record with:

```text
participant_id:
round_id:
condition_first: P | E
artifact_blob:
viewport:
zoom:
exposure_seconds:
stimulus_visible_during_questions: yes | no
access_needs_relevant_to_session:

Q1_verbatim:
Q2_verbatim:
Q3_verbatim:
primary_code:
partial_flags:
confidence_of_coder: low | medium | high
coding_rationale:

temporal_probe_verbatim:
temporal_code:

lower_page_notes:
trust_or_control_confusion:
wrong_claim_inference:
orientation_problem:

alternate_condition_shown: yes | no
comparative_notes:

moderator_intervention_before_clean_questions: none | describe
protocol_deviation: none | describe
```

`confidence_of_coder` is research-coding confidence, not Product/model confidence and must never be shown as Product proof.

## 15. Round synthesis

After the round, synthesize separately for P and E:

- number of clean exposures;
- dominant unaided mental-model codes;
- repeated wrong models;
- repeated evidence cues participants relied on;
- temporal misunderstanding patterns;
- trust/control misunderstandings;
- orientation/readability issues;
- important verbatim examples;
- protocol deviations;
- limitations.

Do not turn 4–8 qualitative participants into a percentage claim about the market.

## 16. Decision rule

A direction is **comprehension-eligible** only if the small round provides directional evidence that participants can reach the intended monitoring-offload model without material repeated wrong-category interpretation.

Possible outcomes:

- `P_ELIGIBLE_E_NOT_BETTER` -> converge on P; stop creating variants;
- `E_MATERIALLY_STRONGER` -> carry E into M10 with rationale;
- `BOTH_ELIGIBLE` -> choose using secondary relevance/trust/clarity evidence, not cosmetic preference alone;
- `NEITHER_ELIGIBLE` -> do not freeze; return a bounded correction task;
- `TEMPORAL_GAP_REMAINS` -> after static direction eligibility, consider an isolated static-vs-motion test.

## 17. Research integrity

Do not:

- modify copy after seeing one participant and continue calling later evidence the same artifact;
- teach the target answer before unaided questions;
- combine first and second exposure as if both were clean;
- compare P/E on different fidelity, motion or viewport without recording the difference;
- report conversion lift, market preference or PMF from this round;
- replace real participant evidence with ChatGPT simulation.

The purpose of M05 is to reduce a specific Product-comprehension uncertainty before M10 visual freeze.
