# Current execution router

Status date: 2026-08-29

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site truth: this repository's current contracts.
- Live task/candidate/review state: GitHub Issues / PRs / CI.

## Current phase

**BOOTSTRAP / DESIGN CONTRACT**

Implementation has not started. Issue #1 owns acceptance of the durable marketing-site control plane.

## Current accepted direction

- Homepage concept: **Calm Product Cinema**.
- Core message: **メールを、確認し続けなくていい。**
- Core differentiator to demonstrate: **Reply != Done**.
- Product story: request -> Managed -> intermediate reply -> still Managed -> material outcome evidence -> Needs You -> Moment.
- Marketing objective: correct comprehension -> qualified early access -> empirical learning.
- Visual philosophy: familiar high-trust SaaS structure; restrained complexity; real Product UI as primary proof; semantic motion only.
- Technical direction: Astro static-first + targeted React/Motion islands + Tailwind CSS 4; Cloudflare Workers Static Assets.

## Current task graph

```text
M00  #1  Bootstrap canonical contracts
          |
          v
M10  #3  Freeze visual oracles
          |
          v
M20  #4  Astro/static foundation
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

Notes:

- #5 and #6 may proceed in parallel only after #4 and the frozen visual direction, provided serialized dependency/config assets are coordinated.
- #7 must reconcile the cumulative #5/#6 UI rather than optimize an obsolete intermediate candidate.
- #8 should not start until the CTA/availability/data-purpose boundary is stable enough to define truthful consent/privacy behavior.
- #9 is a full cumulative acceptance audit, not a latest-patch check.
- Production domain cutover is intentionally not authorized by #9.

## Current Issues

- #1 — Bootstrap Lunowa marketing site control plane
- #3 — M10 visual-oracle freeze
- #4 — M20 Astro/static foundation
- #5 — M30 Hero Product Story + semantic motion
- #6 — M40 remaining homepage narrative
- #7 — M50 responsive + i18n
- #8 — M60 secure waitlist
- #9 — M70 verification hardening + preview deploy

Issue #2 was an accidental placeholder and is closed `not_planned`; it has no authority.

## Next action

1. Full-audit Issue #1 contracts for internal consistency and Product-authority boundaries.
2. If #1 passes, freeze/select M10 visual references in #3.
3. Only then start Codex implementation at #4.

Codex prompts should be short: point to the current Issue and repository contracts rather than restating them.