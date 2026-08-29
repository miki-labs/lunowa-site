# Current execution router

Status date: 2026-08-29

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site truth: this repository's current contracts.
- Live task/candidate/review state: GitHub Issues / PRs / CI.
- Implementation execution gate: `miki-labs/agent-control-plane` G7 single-task same-production-path acceptance.

## Current phase

**BOOTSTRAP / VISITOR-COMPREHENSION + DESIGN CONTRACT**

Production-code implementation has not started and is intentionally held until ACP G7 PASS.

Issue #1 owns acceptance of the durable marketing-site control plane. M05 #10 owns directional comprehension evidence before M10 #3 can freeze final visual authority.

## Current accepted direction

- Overall visual thesis: **Quiet Product Proof**.
- Motion/storytelling sub-thesis: **The page stays still. Product meaning moves.**
- Core message candidate: **メールを、確認し続けなくていい。**
- Category/mechanism cue is required near the Hero because the H1 alone is too broadly interpretable.
- Core differentiator: **Reply != Done**.
- Product story begins from recognizable email reality rather than an abstract state diagram.
- Signature temporal proof: intermediate reply arrives -> still no user action required -> material outcome arrives -> user attention becomes necessary.
- Marketing objective: correct comprehension -> relevance -> trust -> qualified early access -> empirical learning.
- Visual philosophy: familiar high-trust structure; restrained complexity; believable Product UI as primary proof; motion subordinate to comprehension.
- Technical direction: Astro static-first + targeted React/Motion islands + Tailwind CSS 4; Cloudflare Workers Static Assets, re-checked at implementation time.

## Current M05 validation authority

- `docs/VISITOR-JOURNEY.md` — first-visit mental-model and page-order contract.
- `docs/FIRST-IMPRESSION-VALIDATION.md` — current qualitative protocol.
- `docs/HERO-CONCEPTS-M05.md` — current divergent-pair exploration contract.
- `docs/M05-WIREFRAMES.md` — internal structural reference only; former A/C/D participant-facing plan is retired.
- `docs/RESEARCH-M05-EXPLORATION-2026-08-29.md` — evidence behind the exploration/fidelity correction.

M05 is intentionally **not** a small-sample statistical A/B test.

## M05 method correction — 2026-08-29

The former A/C/D static comparison was retired as the primary participant-facing plan because the three directions shared too much of the same structure/content and were unlikely to produce enough decision-relevant learning for the research cost.

Current design exploration uses a minimal genuinely divergent pair:

```text
P — Product Proof Baseline
real-looking Lunowa UI explains the job immediately

vs

E — Editorial Problem-First Dark Horse
visitor recognizes the ongoing checking burden first,
then immediately sees concrete email/Product proof
```

This preserves the anti-fixation value of multiple alternatives without manufacturing near-duplicate variants.

The already-created Concept A visual is retained only as an **unvalidated P baseline reference**. Old C/D Hero generation is stopped. C/D ideas may be reused later as section-level techniques if useful.

Participant-facing first-impression stimuli should be realistic mid/high fidelity enough to evaluate category recognition, credibility, visual orientation and trust. Crude wireframes remain useful only for cheap structural reasoning.

Motion is tested only after a static direction is comprehension-eligible, using the same structure/content so the temporal effect is not mixed with a different layout.

## Rejected visual candidate

The first generated dark/cinematic candidate remains explicitly **rejected as M10 visual authority**.

Material failure classes:

- generic dark navy / purple / glow / planet-orb AI-SaaS vocabulary;
- abstract icon/timeline explanation instead of recognizable Product use;
- weak first-glance category comprehension;
- contradiction with visual anti-patterns;
- generated unsupported marketing/security claims;
- excessive dependence on Lunowa internal state vocabulary.

Preserve only the semantic storyboard, not the art direction.

## Current task graph

```text
M00  #1  Bootstrap canonical contracts
          |
          v
M05  #10 P baseline vs E dark horse comprehension evidence
          |
          +--> optional isolated static-vs-motion evidence
          |
          v
M10  #3  Freeze user-validated visual oracles
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
M50  #7  Responsive + i18n reconciliation
        |
        +------> M60 #8 Waitlist boundary
        |
        v
M70  #9  Full verification + preview deployment
        |
        v
M90  future explicit production-domain cutover
```

Supporting research/control-plane tasks:

- #11 — visitor-journey/comprehension contract;
- #12 — 2026 user-centered evidence refresh;
- #13 — rejected initial generated visual + preserved semantic storyboard.

## Execution notes

- #3 must consume #10 directional comprehension evidence; visually attractive wrong-mental-model candidates cannot win.
- #10 distinguishes unaided first impressions from aided comparative feedback and evaluates the lower-page journey as well as Hero.
- Do not spend M05 research/sample budget on near-duplicate Hero layouts that ordinary design judgment can resolve.
- A second/third direction is only justified by a genuinely different mental-model/proof hypothesis.
- Do not serially patch the P image and call the patches new concepts.
- #4 must not start before ACP G7 PASS. G8 concurrency is not required.
- The first production-code task should run through the accepted Agent Control Plane rather than a parallel manual Codex workflow.
- #5 and #6 may proceed in parallel only after #4 and frozen visual direction, provided serialized dependency/config assets are coordinated.
- #7 reconciles the cumulative #5/#6 UI rather than optimizing an obsolete intermediate candidate.
- #8 waits until CTA/availability/data-purpose boundaries are stable enough for truthful consent/privacy behavior.
- #9 is a full cumulative acceptance audit, not a latest-patch check.
- Production domain cutover is intentionally not authorized by #9.

## Current Issues

- #1 — Bootstrap Lunowa marketing site control plane
- #10 — M05 first-impression comprehension validation
- #3 — M10 user-validated visual-oracle freeze
- #4 — M20 Astro/static foundation, blocked on ACP G7
- #5 — M30 Hero Product Story + semantic motion
- #6 — M40 remaining homepage narrative
- #7 — M50 responsive + i18n
- #8 — M60 secure waitlist
- #9 — M70 verification hardening + preview deploy
- #11/#12/#13 — supporting research/correction records

Issue #2 was an accidental placeholder and is closed `not_planned`; it has no authority.

## Next actions

1. Keep current Product-first Concept A artifact as unvalidated P reference; do not refine it serially yet.
2. Create one independently conceived realistic **E editorial/problem-first dark-horse** visual; do not derive it from P.
3. Run Product-truth/claim/visual anti-pattern audit on both before user exposure.
4. Run small directional M05 unaided comprehension research with P/E assignment rotated across participants.
5. If P is clearly comprehension-eligible and E reveals no stronger acquisition model, stop exploration and converge on P rather than generating more variants.
6. If a static direction survives, test motion only when the temporal distinction still needs proof.
7. Feed M05 evidence into #3 and freeze readable desktop/mobile visual references.
8. Continue `miki-labs/agent-control-plane` toward G7 independently.
9. After both M10 visual freeze and ACP G7 PASS, start #4 through the accepted control-plane path.

Codex prompts remain short: point to the current Issue and repository contracts rather than restating them.