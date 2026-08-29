# M05 Hero Exploration Contract

Status: canonical design-exploration contract for directional first-impression work, 2026-08-29. None of the concepts in this file is final visual authority.

## 1. Research correction

The earlier A/C/D set was useful for identifying information-architecture dimensions, but it is **not** the preferred participant-facing comparison set anymore.

Reason: A, C, and D all preserve the same H1, same quotation scenario, same monitoring consequence, same near-white SaaS frame, and mostly vary ordering or simultaneous presentation. Their conceptual distance is too small to justify spending a limited qualitative sample treating them as three independent design directions.

This is an information-gain correction, not a claim that parallel prototyping is useless.

Research on parallel prototyping supports exploring multiple alternatives when they are meaningfully divergent. Tohidi et al. also found that users were more critical when shown multiple alternatives. Those findings do not imply that a team should manufacture several near-isomorphic variants merely to satisfy a variant count.

A 2024 CHI study additionally found that AI-image-supported visual ideation can increase design fixation and reduce idea variety/originality. Therefore repeated prompt-level mutation of the same generated layout is not accepted as evidence of genuine exploration.

## 2. Current exploration rule

Use a **minimal divergent pair**, not A/C/D variant proliferation:

1. **P — Product Proof Baseline**
2. **E — Editorial Problem-First Dark Horse**

Add a third direction only when it tests a genuinely different visitor mental model or proof modality. Color, typography, card position, one-vs-two snapshots, or copy rearrangement alone do not qualify.

The goal is not to crown a winner statistically. The goal is to expose whether the current design thesis is wrong before refinement creates sunk-cost/fixation.

## 3. Shared Product truth

Both directions use the same canonical job:

1. User has asked for a quotation by a date.
2. Lunowa watches for the requested outcome.
3. Counterparty replies: `社内確認中です。明日送ります。`
4. User still does not need to act; Lunowa continues monitoring.
5. `見積書.pdf` arrives.
6. User attention becomes necessary.
7. Lunowa returns concise context and Source access.

Neither direction may imply:

- reply == completion;
- autonomous send/follow-up;
- unsupported provider/security/performance/pricing claims;
- a validated exact ICP;
- generic AI assistant positioning as the primary category.

## 4. Direction P — Product Proof Baseline

### Hypothesis

The fastest correct mental model comes from recognizable Product UI itself. A visitor should see real-looking email/work context and immediately understand what Lunowa is doing on their behalf.

### First viewport

Use the current Product-first information hierarchy:

- Lunowa brand;
- short category/mechanism cue;
- `メールを、確認し続けなくていい。`;
- one short support line;
- primary CTA;
- one dominant believable Lunowa Product surface.

The Product surface shows the intermediate-reply state:

- sender/thread/subject context;
- `見積書を待っています`;
- latest reply `社内確認中です。明日送ります。`;
- explicit consequence `あなたの対応はまだ必要ありません`;
- Lunowa continues watching;
- original Source affordance visible but subordinate.

### What P tests

Can the Product itself explain the new behavior without an abstract diagram, a long story, or prior Lunowa vocabulary?

### Main failure signatures

- ordinary inbox;
- simple waiting/reminder tracker;
- email summarizer;
- automatic reply/follow-up tool;
- attractive but unclear software screenshot.

## 5. Direction E — Editorial Problem-First Dark Horse

### Why this direction exists

E is intentionally not a rearranged Product-first Hero. It tests a different acquisition path: **self-recognition of the monitoring burden before Product explanation**.

If P is already the correct thesis, E may lose on immediate category clarity. That is acceptable; a dark-horse alternative exists to challenge fixation, not to be made artificially competitive.

### First viewport

The opening is editorial and human, not dashboard-led.

Primary visual/text rhythm centers on familiar internal questions such as:

- `見積書、届いたかな。`
- `契約書、返ってきたっけ。`
- `次は自分が返す番だったかな。`

Then make the consequence explicit:

> **その確認を、Lunowaに任せる。**

A recognizable email/Product proof must still appear within or immediately adjacent to the first viewport so the visitor does not leave with an abstract productivity/wellness interpretation.

The same quotation scenario shows:

- intermediate reply exists;
- Lunowa says no action is required yet;
- Lunowa continues monitoring.

### What E tests

Does starting from the visitor's lived monitoring burden produce stronger self-recognition and a more accurate explanation of why Lunowa matters than starting from Product chrome?

### Main failure signatures

- unclear category;
- generic productivity or attention-management interpretation;
- too much copy before software proof;
- visitor understands the pain but not what Lunowa actually does.

## 6. Fidelity rule

Do not use intentionally crude wireframes as the final first-impression/trust stimulus.

Low fidelity remains useful for cheap structural reasoning and internal review. However, M05 asks about first impression, category recognition, perceived credibility, visual orientation, and whether the Product feels believable. Those outcomes are partly affected by aesthetics/prototypicality, so participant-facing stimuli should be **mid-to-high fidelity enough to resemble a plausible real homepage and Product** while remaining cheap to revise.

This does not mean pixel-perfect production design is required before research.

Recommended sequence:

1. low-fidelity structure sanity check internally;
2. create P and E independently as realistic mid/high-fidelity stimuli;
3. do not generate E by editing P or telling an image model to make `a variant of P`;
4. inspect for Product-truth/claim violations before participants see them;
5. collect unaided comprehension evidence;
6. refine the stronger thesis or synthesize only when evidence shows a specific useful element from the other direction.

## 7. Motion boundary

Motion is no longer part of concept-count pressure.

Only after a static direction is comprehension-eligible should a motion treatment be considered.

Motion asks one isolated question:

> Does showing `intermediate reply -> still no action -> material outcome -> attention required` improve understanding or confidence enough to justify the added motion/interaction/accessibility cost?

The static state must remain independently understandable.

## 8. Lower-page contract

Both directions converge after the first acquisition/mental-model section into the same visitor-question narrative:

1. `メールの負担は、読むことだけではありません。`
2. `返信が来ても、終わっていないことがある。`
3. `必要でない間は、Lunowaが見ています。`
4. `必要になった時だけ、あなたに戻します。`
5. `戻ってきた時には、何が変わったかも分かる。`
6. `任せる。でも、決定権は渡さない。`
7. truthful current availability;
8. material FAQ;
9. final CTA.

The lower page is not required to have two independent full designs during M05 unless first-viewport differences materially imply different downstream narrative needs.

## 9. Explicitly rejected exploration behavior

Do not:

- generate three or five close variants merely to create a comparison table;
- use ImageGen outputs as the source of Product semantics;
- serially patch one generated image and call each patch a new concept;
- return to dark-purple/orb/glow/icon-timeline AI-SaaS defaults;
- spend participant research on differences that can be resolved by ordinary design judgment;
- infer population-level preference from a small qualitative sample.

## 10. Current next action

Stop generating C/D from the old variant set.

Use the existing Concept A work only as an **unvalidated Product-first baseline reference**, not as final design authority.

Next, create one independently conceived **E editorial/problem-first dark horse** at realistic visual fidelity. Compare P vs E primarily for mental-model failure modes and self-recognition, not for cosmetic preference.

If P clearly satisfies comprehension and E does not reveal a better acquisition model, converge on P and move to refinement/motion rather than continuing variant production.