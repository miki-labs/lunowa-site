# Current execution router

Status date: 2026-08-29

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site truth: this repository's current contracts.
- Live task/candidate/review state: GitHub Issues / PRs / CI.

## Current phase

**BOOTSTRAP / DESIGN CONTRACT**

Repository implementation has not started. Issue #1 owns bootstrap of the durable marketing-site control plane.

## Current accepted direction

- Homepage concept: **Calm Product Cinema**.
- Core message: **メールを、確認し続けなくていい。**
- Core differentiator to demonstrate: **Reply != Done**.
- Product story: request -> Managed -> intermediate reply -> still Managed -> material outcome evidence -> Needs You -> Moment.
- Marketing objective at this stage: correct comprehension -> qualified early access -> empirical learning. Do not present Lunowa as a fully validated or generally available product.
- Visual philosophy: familiar high-trust SaaS structure; restrained complexity; real Product UI as primary proof; semantic motion only.
- Technical direction: Astro static-first + React islands + Motion + Tailwind CSS 4; Cloudflare Workers Static Assets for deployment.

## Execution DAG

```text
M00 Bootstrap contracts (#1)
    |
    +--> M10 Visual-oracle exploration
    |       |
    |       +--> M20 Static homepage foundation
    |                |
    |                +--> M30 Hero Product Story + motion
    |                +--> M40 Remaining homepage narrative
    |
    +--> M50 Responsive + i18n
    +--> M60 Waitlist boundary
    |
    +--> M70 Verification hardening
            |
            +--> M80 Preview deploy / acceptance audit
                    |
                    +--> M90 Production domain cutover
```

Parallel work is allowed only when tasks do not edit the same serialized dependency/config assets or rely on unsettled visual/Product contracts.

## Next action

1. Freeze repository-local homepage/design/motion/architecture/verification contracts.
2. Create implementation Issues that cite those contracts.
3. Produce/select visual references before Codex builds the first UI candidate.
4. Begin Codex implementation only after M00 acceptance.