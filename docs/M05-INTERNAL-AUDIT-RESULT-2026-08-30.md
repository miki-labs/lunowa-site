# Lunowa M05 Internal Comprehension-Risk Audit Result — 2026-08-30

Status: **INTERNAL AUDIT PASS — P SELECTED FOR M10 CONVERGENCE; EXTERNAL USER VALIDATION DEFERRED**.

This result is bound to the exact S05 artifact set in `docs/stimuli/MANIFEST.md`:

- P-v1 blob: `0dd12d831cd1fc8020bde478c9fca6463af5427e`
- E-v1 blob: `58b55b02abe867b0191e93f3125a4e4d8db63ca1`
- shared-lower-v1 blob: `0e7026b2dfc7230af6c1448e831aa85cc5284d82`

This is **not user validation**. The active team contains only the Product owner and ChatGPT; both know Lunowa too well to be clean first-impression participants, and ChatGPT is not a real user.

## 1. Decision

**Select P — Product Proof Baseline as the M10 convergence direction.**

Do not continue P/E exploration by default.

Reason:

- P exposes email category and monitoring mechanism immediately;
- P makes the Product itself the dominant proof rather than explanatory editorial copy;
- P has lower generic-productivity / memory-assistant confusion risk;
- P requires less copy before the visitor reaches the Product proof;
- P has simpler responsive composition and lower implementation complexity;
- E's useful self-recognition insight is already represented in the shared lower-page problem narrative, so E does not justify keeping a second Hero architecture alive.

This is a risk/complexity decision under internal evidence, not a claim that independent users prefer P.

## 2. Full audit — P

### L1 — Category recognition

**PASS / strongest of the two.**

P explicitly says:

- `返信待ち・資料待ちを、Lunowaが代わりに見守る。`
- `メールを、確認し続けなくていい。`

and immediately presents a realistic email-centered Product surface.

Known residual risk: a visitor may still simplify the Product into a sophisticated reply/reminder tracker. The Product stage and lower narrative must therefore preserve outcome-oriented language rather than only `waiting`/`reply` vocabulary.

### L2 — Monitoring-offload comprehension

**PASS.**

The first viewport structurally contains:

- unresolved matter: quotation still awaited;
- evidence changed: intermediate reply arrived;
- `あなたの対応はまだ必要ありません`;
- Lunowa continues monitoring.

This is substantially closer to the canonical monitoring-offload thesis than a reminder-only presentation.

### L3 — Reply != Done

**PASS.**

The exact intermediate reply is shown while the quotation remains unresolved. The shared lower continuation explicitly contrasts intermediate reply with material outcome arrival.

### L4 — Autonomy boundary

**PASS.**

No Hero/lower-page copy implies autonomous sending, follow-up, closure or decision-making. The user is returned to the matter when review becomes necessary.

### L5 — Trust/control

**PASS with implementation debt.**

The current stimulus preserves `元のメールを見る` / source return and contains no fake security claims, testimonials, customer logos, performance metrics or pricing claims.

Implementation must preserve truthful availability/runtime wording and must not imply monitoring reliability beyond actual provider/runtime capability.

### L6 — Copy dependence

**PASS / lower risk than E.**

P needs one category cue, one H1 and one short support sentence before Product proof. The concrete UI carries a large share of the explanation.

The H1 alone remains too broad; the nearby category/mechanism cue is therefore still required.

### L7 — Visual/Product believability

**PASS for current design-stage purpose.**

The Product stage reads as an email-centered application rather than an analytics dashboard or abstract diagram. Generic AI decoration is absent.

Final M10 must improve real Product craft without making the UI busier than the semantic proof requires.

### L8 — Lower-page narrative

**PASS.**

The shared continuation answers the intended sequence:

1. repeated checking is the burden;
2. reply does not equal completion;
3. Lunowa keeps watching;
4. attention returns when the material result arrives;
5. context explains what changed and what to do;
6. original source remains inspectable;
7. CTA closes the narrative.

### L9 — Static-first / motion necessity

**PASS; motion is not required for baseline comprehension.**

The static artifact already shows the intermediate-reply/no-action state, while the lower continuation statically contrasts it with material-outcome/attention-required state.

Decision: **do not make motion a prerequisite for M10 or implementation comprehension.** Any later motion is optional semantic reinforcement/craft and must preserve an equivalent static/reduced-motion path.

### L10 — Responsive viability

**PASS with required M10 mobile projection.**

Centered copy + one dominant Product stage is simpler to transform into mobile than E's editorial-heavy acquisition block.

The desktop Product surface must not merely be shrunk on mobile. M10 must specify a mobile semantic projection that keeps:

- awaited outcome;
- intermediate reply;
- no-action consequence;
- continued monitoring;
- Source path.

### L11 — Complexity/value

**PASS / preferred.**

P has fewer competing messages, fewer layout-specific rules and a cleaner path from category -> value -> Product proof.

## 3. Full audit — E

### L1 — Category recognition

**INTERNALLY ELIGIBLE, but higher risk than P.**

E includes email-specific language and the same Product stage, so category is not absent. However the dominant first copy is a series of memory/checking questions. That structure can more easily read as generic productivity, memory support or task management before the Product proof is decoded.

### L2 — Monitoring-offload comprehension

**PASS, but more copy-dependent.**

`その確認を、Lunowaに任せる。` and the support sentence communicate delegation, and the Product stage supplies the same monitoring evidence as P.

The route to the intended mental model is less direct because the visitor must first interpret three editorial problem statements.

### L3 — Reply != Done

**PASS.**

Product-state evidence is the same as P.

### L4 — Autonomy boundary

**PASS.**

No material extra autonomy claim is introduced.

### L5 — Trust/control

**PASS.**

Same Product truth/trust boundaries as P.

### L6 — Copy dependence

**MATERIAL WEAKNESS relative to P.**

E requires three large questions, a relief line and support text before the Product story is fully framed. This increases cognitive load and makes the design more dependent on exact editorial copy quality.

### L7 — Visual/Product believability

**PASS.**

The Product surface itself is shared. The risk is not visual quality but competition between editorial rhetoric and Product proof.

### L8 — Lower-page narrative

**NO MATERIAL ADVANTAGE.**

E's strongest contribution — recognizing the mental burden of repeatedly wondering whether something arrived — already exists in `shared-lower-v1` as:

`「あの件、どうなった？」を頭の片隅に置き続けること。`

Therefore E does not justify retaining a separate Hero architecture merely to preserve this insight.

### L9 — Static-first / motion necessity

**PASS.**

No unique motion requirement.

### L10 — Responsive viability

**HIGHER RISK than P.**

Multiple large editorial lines consume substantial vertical space on narrow screens. Keeping the Product proof early enough to preserve category/product recognition would require more aggressive mobile rewriting/reordering.

### L11 — Complexity/value

**WEAKER than P.**

E introduces more copy, more composition constraints and greater mobile tension without a unique Product-proof benefit.

## 4. Wrong-model risk comparison

| Wrong model | P | E | Decision impact |
|---|---|---|---|
| ordinary reminder / reply tracker | medium residual risk | medium residual risk | shared Product/lower-page outcome semantics must stay explicit |
| generic productivity / memory tool | low | **medium** | favors P |
| generic AI email writer | low | low | neither leads with AI/writing |
| inbox organizer / inbox zero | low | low | Product state is outcome-focused |
| autonomous agent / auto-send | low | low | current copy preserves user action boundary |
| unclear category | low | low-to-medium | favors P because email/category cue is immediate |

These are structural risk judgments, not measured participant rates.

## 5. E elements retained

Do not synthesize E back into the Hero by default.

Retain the useful E insight only through the existing lower-page problem framing: ongoing mental checking/remembering is itself part of the burden.

This preserves self-recognition without adding a second acquisition architecture.

## 6. Motion decision

**Baseline motion necessity: NO.**

M10 should freeze a static-first visual authority. Later implementation may add restrained semantic motion only if it improves temporal continuity without becoming necessary to understand the Product.

Reduced-motion/static equivalence remains mandatory.

## 7. External-validation debt

Still UNKNOWN:

- what a truly first-time independent visitor actually infers;
- whether P is measurably more comprehensible than E;
- whether the category cue/H1 wording is optimal;
- whether the Product surface creates reminder-tracker confusion in real visitors;
- real trust objections;
- conversion impact.

Do not describe the selected direction as `user validated`.

Future external validation may run against the implemented preview rather than recreating pre-build research stimuli.

## 8. Handoff to M10

M10 should now:

1. converge on **P Product Proof**;
2. stop maintaining E as a parallel Hero architecture;
3. freeze exact desktop + mobile visual authority;
4. freeze final token values and typography;
5. preserve category cue + H1 + concise support + dominant Product proof;
6. preserve the quotation intermediate-reply/no-action state;
7. preserve outcome-arrival/attention-required and Source/context states in readable references;
8. preserve the lower-page repeated-checking insight;
9. treat motion as optional enhancement, not baseline explanatory dependency;
10. record external user validation as deferred Product-learning debt.
