# Lunowa M05 Internal Comprehension-Risk Audit

Status: **CURRENT EXECUTION CONTRACT — OWNER + AI ONLY**.

This document replaces external-participant research as the current blocking M05 step because the active project team consists only of the Product owner and ChatGPT. It does **not** claim user validation and does not convert model simulation into participant evidence.

Product truth remains in `miki-thecat/lunowa`.

## 1. Current constraint

There are currently no independent first-time participants available.

Consequences:

- the Product owner is not a clean first-impression participant because they already know Lunowa deeply;
- ChatGPT is not a real user and also has extensive project context;
- neither may be counted as independent user evidence;
- synthetic/persona/model responses may be used only as adversarial design critique, never as validation data;
- development must not be blocked indefinitely waiting for unavailable participants.

Therefore current M05 becomes an **internal comprehension-risk audit + owner decision**.

External human validation is deferred evidence debt, not silently declared complete.

## 2. Goal

Choose an implementation direction that minimizes known comprehension and trust risk before M10 visual freeze, using the exact accepted S05 artifacts:

- `docs/stimuli/P-v1.svg`
- `docs/stimuli/E-v1.svg`
- `docs/stimuli/shared-lower-v1.svg`
- `docs/stimuli/MANIFEST.md`

The audit answers:

1. Is email/communication category recognition structurally explicit?
2. Is Lunowa's core job — monitoring unresolved email-borne matters on the user's behalf — explicit without internal ontology?
3. Is `reply received != outcome complete` demonstrated rather than merely asserted?
4. Could the page plausibly be mistaken for a reminder/reply tracker, inbox organizer, generic AI email tool, generic productivity app, or autonomous agent?
5. Does the page clearly communicate `no action now` and `return only when materially needed`?
6. Does lower-page context explain what changed, what remains, and how to inspect the original source?
7. Are trust/control claims truthful and bounded?
8. Is the page understandable statically, before any motion?
9. Is the direction implementable responsively without turning the Product proof into unreadable decoration?
10. Which direction achieves the intended mental model with the least explanatory and implementation complexity?

## 3. Evidence classes

Keep evidence classes explicit.

### A. Canonical Product evidence

Highest authority for what Lunowa is allowed to claim and show.

Sources include current `miki-thecat/lunowa` Product/Responsibility/design contracts.

### B. External research / current-market evidence

Constrains general design method, prototypicality, usability, component reuse and current software-site grammar.

This is not Lunowa-specific comprehension evidence.

### C. Internal structural audit

Rubric-based inspection of the exact P/E artifacts against Product truth and known failure classes.

This can identify contradictions and high-risk ambiguity. It cannot measure what an independent visitor would actually infer.

### D. Owner judgment

The owner may choose among internally acceptable directions based on strategy, brand, taste and implementation trade-offs.

Owner preference is authority for the Product decision, but not evidence of first-time visitor comprehension.

### E. Deferred external validation

Future independent visitor/customer/traffic evidence. Until collected, mark this as unvalidated rather than blocking the current build.

## 4. Audit lenses

Run the complete artifact set through every lens below. Do not stop at the first failure unless there is a destructive/security issue.

### L1 — Category recognition

Pass only when the first viewport contains enough explicit email/communication evidence that the page is not structurally dependent on prior Lunowa knowledge.

Risk classes:

- generic productivity;
- generic task manager;
- generic AI assistant;
- generic notification manager.

### L2 — Monitoring-offload comprehension

Required visible meaning:

`unfinished email matter -> Lunowa watches -> user does not keep checking -> Lunowa returns it when attention is materially required`.

If the page only communicates `remember this`, `track replies`, `notify me`, or `organize email`, record a material risk.

### L3 — Reply != Done

The intermediate reply must remain visibly unresolved:

`社内確認中です。明日送ります。`

must coexist with:

- quotation not yet received;
- user action not required yet;
- Lunowa continues monitoring.

A page that implies reply arrival equals completion fails this lens.

### L4 — Autonomy boundary

The page must not imply that Lunowa autonomously sends, follows up, decides, closes, or performs external effects without the user's accepted authority.

### L5 — Trust/control

Check that:

- original Source/email remains inspectable;
- no fake encryption/security/certification claims exist;
- no fake testimonials/logos/metrics exist;
- current availability/CTA language is truthful;
- monitoring language does not overstate reliability beyond actual Product/runtime capability.

### L6 — Copy dependence

A direction is weaker when the intended model is reachable only after reading several explanatory sentences.

Prefer concrete Product proof over explanatory prose where possible.

### L7 — Visual/product believability

Product UI should resemble a real email-centered product, not a generic analytics dashboard or abstract state diagram.

Reject generated-looking ornament, orb/glow/beam/3D/bento spectacle, or decorative cards that displace Product proof.

### L8 — Lower-page narrative

The continuation should answer, in order:

- why repeated checking is the burden;
- why a reply may not finish the matter;
- what Lunowa does while the user is not needed;
- what changes when the user is needed;
- what context is restored;
- how the source/control boundary remains visible;
- what the visitor can do next.

### L9 — Static-first / motion necessity

Core comprehension must survive with no motion.

Motion is allowed later only if a specific temporal distinction remains materially unclear after the static direction is selected.

### L10 — Responsive viability

The Product proof must remain semantically legible on mobile. A desktop design that collapses into an unreadable screenshot is not eligible for freeze without a mobile-specific projection.

### L11 — Complexity/value

When P and E have similar semantic risk, prefer the direction with:

- less explanatory copy;
- fewer special layout rules;
- fewer dependencies;
- easier responsive behavior;
- clearer Product proof;
- lower maintenance cost.

## 5. P/E comparison rule

Do not pretend P/E is an A/B experiment.

Use the same shell/token/Product state and compare only the acquisition hierarchy.

For each direction record:

- material strengths;
- material risks;
- wrong-model risks;
- complexity cost;
- trust implications;
- responsive implications;
- whether a narrow synthesis is justified.

Do not create additional variants unless the audit finds a concrete unresolved design hypothesis that P/E cannot answer.

## 6. Decision rule

A direction is **internally eligible** when:

- no Product-truth violation exists;
- category/email evidence is explicit;
- monitoring-offload and `Reply != Done` are structurally represented;
- autonomy/trust boundaries are truthful;
- static explanation works;
- responsive projection is plausible;
- no known major wrong-model risk can be reduced cheaply before freeze.

If both are eligible, select the lower-risk/lower-complexity direction unless the owner has a clear strategic/brand reason to choose otherwise.

If neither is eligible, issue one batched correction task covering all material blockers. Do not enter a one-defect-at-a-time loop.

## 7. Owner decision

The owner chooses the final direction after reading the completed internal audit.

The durable decision must say explicitly:

- selected direction: P, E, or narrowly specified synthesis;
- why;
- what evidence supports it;
- what remains unvalidated externally;
- whether motion remains necessary;
- what must be frozen in M10.

## 8. External-validation debt

The absence of external participants remains a known limitation.

Do not use phrases such as:

- `user validated`;
- `users understood`;
- `tested with users`;
- `proven conversion/comprehension`.

until real independent evidence exists.

When independent visitors become available — user interviews, beta users, preview traffic, or structured sessions — run the external protocol in `docs/FIRST-IMPRESSION-VALIDATION.md` as a follow-up validation step.

External evidence may revise the visual direction after implementation; this is accepted Product-learning debt, not a reason to freeze development now.

## 9. Current handoff

Current sequence:

`S05 exact stimuli -> internal full comprehension-risk audit -> owner direction decision -> M10 structured visual freeze -> implementation when ACP G7 also passes -> later external validation when real independent users/traffic exist`.
