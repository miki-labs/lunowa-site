# Current execution router

Status date: 2026-08-30

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site contracts/design/research protocol: this repository.
- Live task/candidate/review state: GitHub Issues / PRs / CI.
- Production implementation gate: `miki-labs/agent-control-plane` G7 single-task same-production-path acceptance.

## Current phase

**M05 PARTICIPANT RESEARCH READY — Issue #10**

Production-code implementation has not started and remains intentionally blocked until both:

1. M10 #3 freezes accepted structured visual authority; and
2. ACP G7 passes.

G8 concurrency is not required for the first production implementation.

## Completed design-preparation gates

### R05 — reuse/tokens/common shell

Substantially complete.

Current direction:

- `Quiet Product Proof`;
- familiar modern software-site grammar;
- real Product UI as primary proof;
- no generic AI-orb/glow/beam/3D/bento/card-wall default aesthetic;
- ordinary shell mechanics reused rather than reinvented;
- Product-specific design effort concentrated on `Reply != Done`, monitoring, attention return, Moment/source/trust semantics.

Read:

1. `docs/REUSE-STACK-AUDIT-2026-08-29.md`
2. `docs/APPROVED-PRIMITIVES-2026-08-29.md`
3. `docs/REUSE-COMPONENT-SHORTLIST-2026-08-29.md`
4. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md`
5. `docs/M10-TOKEN-CONTRACT.md`
6. `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md`

Current implementation/reuse preference after G7:

```text
Astro + Tailwind CSS 4
  -> native semantic HTML/CSS first
  -> shadcn/ui + Base UI for real interactive/app primitives
  -> individually audited open shadcn blocks (7Ovr, then Tailark candidates)
  -> Tailwind Plus only if licensed + materially superior
  -> Relume for broad structural/reference discovery
  -> optional scoped Webflow DevLink proof for a specific difficult need
  -> custom Lunowa code where Product semantics require it
```

Framer portability is not an architecture assumption. Figma is preferred when writable but is not a hard dependency. Image generation is exploratory, not precise webpage authority.

### S05 #14 — participant stimulus construction

**COMPLETED / CLOSED.**

Accepted exact artifacts:

- `docs/stimuli/P-v1.svg` — Product Proof Baseline — blob `0dd12d831cd1fc8020bde478c9fca6463af5427e`
- `docs/stimuli/E-v1.svg` — Editorial Problem-First Dark Horse — blob `58b55b02abe867b0191e93f3125a4e4d8db63ca1`
- `docs/stimuli/shared-lower-v1.svg` — shared post-Hero continuation — blob `0e7026b2dfc7230af6c1448e831aa85cc5284d82`
- `docs/stimuli/MANIFEST.md` — artifact/token/provenance binding

S05 full pre-research audit PASS evidence:

- Issue #14 comment `5463581123`

Material audit corrections already completed:

- removed E-only extra explanatory band;
- removed P-only secondary CTA;
- made Product-stage geometry equal across P/E;
- removed unnecessary visitor-facing internal English jargon;
- deleted duplicate common-shell authority.

P/E now share the same header, primary CTA, token grammar, Product-stage geometry, canonical quotation state, static-only condition and approximate fidelity. The intended variable is acquisition hierarchy/copy above the common Product stage.

## Current M05 #10 authority

Read:

- `docs/VISITOR-JOURNEY.md`
- `docs/FIRST-IMPRESSION-VALIDATION.md`
- `docs/HERO-CONCEPTS-M05.md`
- `docs/M05-P-E-STIMULUS-CONTRACT.md`
- `docs/M05-SESSION-PACKET.md`
- `docs/stimuli/MANIFEST.md`
- accepted S05 #14 evidence.

Issue #10 execution handoff comment: `5463588574`.

### Research question

Which acquisition hierarchy more reliably produces the correct unaided first-time mental model?

- **P:** Product UI explains the job immediately.
- **E:** repeated-checking burden is recognized first, then the same concrete Product proof appears.

This is not a style-preference or small-sample conversion A/B test.

### Target mental model

Approximately:

> Lunowa watches unfinished email-related matters for me, so I do not have to keep checking; it stays quiet while I am not needed and returns the matter when I actually need to act.

### Canonical Product state

```text
社内確認中です。明日送ります。
-> 見積書はまだ未到着
-> あなたの対応はまだ必要ありません
-> Lunowaが引き続き見守る
```

The decisive proof is that **reply arrival does not equal outcome completion or attention need**.

### First-round protocol

- default 4–8 actual/plausible users;
- alternate P/E clean-first assignment approximately balanced;
- default 10-second static exposure;
- no scrolling during clean first impression;
- no Lunowa vocabulary/competitor explanation before required questions;
- required unaided questions first;
- temporal probe captured verbatim before coding;
- shared lower page only after clean Hero evidence;
- alternate condition later is aided/comparative evidence, not a second clean first impression;
- no artifact editing mid-round under the same artifact ID.

ChatGPT simulation cannot substitute for real participant evidence.

## Current task graph

```text
M00  #1  canonical control-plane acceptance
          |
          v
R05       reuse + tokens + common shell        DONE enough for M05
          |
          v
S05  #14 P-v1 / E-v1 / shared continuation    DONE
          |
          v
M05  #10 real participant evidence             READY / CURRENT
          |
          +--> optional isolated static-vs-motion evidence only if needed
          |
          v
M10  #3  freeze structured visual authority + exact token values
          |
          +-----------------------------+
                                        |
ACP external gate: agent-control-plane G7 PASS
                                        |
                                        v
M20  #4  Astro/static foundation via accepted ACP path
        /   \
       v     v
M30 #5      #6 M40
Hero/motion  remaining narrative
       \     /
        v   v
M50  #7  responsive + i18n reconciliation
        |
        +------> M60 #8 waitlist boundary
        |
        v
M70  #9  full verification + preview deployment
        |
        v
M90  future explicit production-domain cutover
```

## Current Issues

- #1 — Bootstrap Lunowa marketing-site control plane
- #14 — S05 stimulus construction — **closed completed**
- #10 — M05 first-impression comprehension research — **current**
- #3 — M10 user-validated structured visual-oracle freeze
- #4 — M20 Astro/static foundation — blocked on M10 + ACP G7
- #5 — M30 Hero Product Story + semantic motion
- #6 — M40 remaining homepage narrative
- #7 — M50 responsive + i18n
- #8 — M60 secure waitlist
- #9 — M70 verification hardening + preview deploy
- #11/#12/#13 — supporting research/correction records

Issue #2 is an accidental placeholder, closed `not_planned`, with no authority.

## Next actions

1. Recruit the first M05 round using current recruitment prior, without pretending exact ICP is validated.
2. Run #10 using exact accepted P/E artifact blobs and `docs/M05-SESSION-PACKET.md`.
3. Capture verbatim unaided answers before coding.
4. Synthesize P and E separately; record wrong mental models, temporal misunderstandings, trust/orientation problems and protocol deviations.
5. State whether `P`, `E`, both, or neither is comprehension-eligible. Do not manufacture population percentages from the small round.
6. If a material design failure appears, create/route a bounded correction task; do not silently modify stimuli during #10.
7. If P is eligible and E adds no materially stronger acquisition model, converge instead of generating more variants.
8. Test motion only if the selected static direction still leaves a material temporal-comprehension gap.
9. Feed durable #10 findings into M10 #3 and freeze exact desktop/mobile visual authority + token values.
10. Continue `miki-labs/agent-control-plane` toward G7 independently.
11. Only after M10 freeze + G7 PASS, start #4 through the accepted control-plane path.

Codex prompts remain short: point to the owning Issue and repository contracts rather than restating them.
