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

Issue #1 owns acceptance of the durable marketing-site control plane. M05 #10 owns directional first-impression comprehension evidence before M10 #3 can freeze final visual authority.

## Current accepted direction

- Overall visual thesis: **Quiet Product Proof**.
- Motion/storytelling sub-thesis: **The page stays still. Product meaning moves.**
- Core message candidate: **メールを、確認し続けなくていい。**
- Category/mechanism cue is required near the Hero because the H1 alone is too broadly interpretable.
- Core differentiator to demonstrate: **Reply != Done**.
- Product story must begin as a recognizable concrete email situation, not an abstract state diagram.
- Signature temporal proof: intermediate reply arrives -> still no user action required -> material outcome arrives -> user attention becomes necessary.
- Marketing objective: correct comprehension -> relevance -> trust -> qualified early access -> empirical learning.
- Visual philosophy: familiar high-trust structure; restrained complexity; believable Product UI as primary proof; motion subordinate to comprehension.
- Technical direction: Astro static-first + targeted React/Motion islands + Tailwind CSS 4; Cloudflare Workers Static Assets, re-checked at implementation time.

## Current M05 validation authority

- `docs/VISITOR-JOURNEY.md` — first-visit mental-model and page-order contract.
- `docs/FIRST-IMPRESSION-VALIDATION.md` — exact directional qualitative protocol, evidence binding, unaided-before-aided question order, temporal/trust/lower-page probes, and M10 eligibility boundary.
- `docs/HERO-CONCEPTS-M05.md` — materially different A/B/C/D Hero concept hypotheses. None is visual authority.

M05 is intentionally **not** a small-sample statistical A/B test. The current plan is iterative qualitative rounds with actual/plausible users, stable artifact binding, neutral first questions, and separation of clean first-impression evidence from later aided/comparative discussion.

## Rejected visual candidate

The first generated dark/cinematic candidate is explicitly **rejected as M10 visual authority**.

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
M05  #10 Directional first-impression comprehension evidence
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

- #11 — visitor-journey/comprehension contract (canonicalized in `docs/VISITOR-JOURNEY.md`);
- #12 — 2026 user-centered evidence refresh (canonicalized as dated evidence in `docs/RESEARCH-2026-08-29.md`);
- #13 — rejected initial generated visual + preserved semantic storyboard.

## Execution notes

- #3 must consume #10 directional comprehension evidence; visually attractive wrong-mental-model candidates cannot win.
- #10 must distinguish unaided first impressions from aided comparative feedback and must evaluate the lower-page journey as well as the Hero.
- #4 must not start before ACP G7 PASS. G8 concurrency is not required.
- The first production-code task should be run through the accepted Agent Control Plane rather than a parallel manual Codex workflow.
- #5 and #6 may proceed in parallel only after #4 and the frozen visual direction, provided serialized dependency/config assets are coordinated.
- #7 must reconcile the cumulative #5/#6 UI rather than optimize an obsolete intermediate candidate.
- #8 should not start until the CTA/availability/data-purpose boundary is stable enough to define truthful consent/privacy behavior.
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

1. Full-audit Issue #1 contracts for internal consistency and Product-authority boundaries.
2. Turn M05 Concepts A/B/C into materially different low/mid-fidelity desktop Hero artifacts; do not make another high-fidelity AI-SaaS poster first.
3. Prepare the complete lower-page low/mid-fidelity narrative so M05 can test the whole visitor journey after unaided Hero evidence is captured.
4. Run the first directional M05 round using `docs/FIRST-IMPRESSION-VALIDATION.md`.
5. Feed #10 findings into #3 and only then freeze desktop/mobile visual oracles.
6. Continue `miki-labs/agent-control-plane` toward G7 independently.
7. After both M10 visual freeze and ACP G7 PASS, start #4 through the accepted control-plane path.

Codex prompts should remain short: point to the current Issue and repository contracts rather than restating them.