# Current execution router

Status date: 2026-08-29

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site truth: this repository's current contracts.
- Live task/candidate/review state: GitHub Issues / PRs / CI.
- Implementation execution gate: `miki-labs/agent-control-plane` G7 single-task same-production-path acceptance.

## Current phase

**BOOTSTRAP / VISITOR-COMPREHENSION + REUSE-FIRST DESIGN CONTRACT**

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
- **Reuse-first rule:** ordinary marketing/app-shell mechanics should come from mature reusable blocks/components where this reduces work without weakening Product semantics, accessibility, performance or ownership.

## Reuse-first design/build authority

Read `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` before new visual or implementation work.

Current preferred role split:

```text
Relume / Tailwind Plus / Framer / Figma ecosystem
-> reference + reusable structural primitives

Figma Design / code-aware canvas
-> editable Lunowa composition + design tokens + implementation-grade oracle

shadcn/ui-style local primitives
-> believable generic Product UI mechanics

Astro + Tailwind
-> owned static production shell

React + Motion
-> only accepted semantic Product-demo interaction
```

Do not reinvent headers, containers, FAQ mechanics, footers, basic form controls, common responsive layout or generic app-shell primitives when a mature component can be adapted safely.

Do not let an imported template/component define Lunowa's Product semantics or visual identity.

### Tool decisions

- **Relume:** preferred discovery/reference source for large section/component space; React/MCP export may be used selectively after current compatibility/licensing review.
- **Tailwind Plus:** preferred premium generic marketing-block source if licensed; current library tracks modern Tailwind and provides HTML/React/Vue.
- **shadcn/ui:** preferred open local primitive source for generic app/product controls and shell mechanics.
- **Motion:** semantic motion only.
- **Figma:** preferred editable design-convergence surface; stronger default than raster image generation for precise page UI.
- **Framer/Webflow/Figma Sites:** strong production builders/reference ecosystems, but not current production default because adopting them would replace or complicate the self-hosted Astro/Cloudflare/ACP path.
- **Aceternity/Magic UI:** exception-only effect sources; do not use as foundation because their common glow/beam/3D/bento vocabulary can recreate generic AI-SaaS aesthetics.

Image generation remains valid for mood/illustration/novel visual exploration, but is **not the primary method for precise homepage UI composition**.

## Current M05 validation authority

- `docs/VISITOR-JOURNEY.md` — first-visit mental-model and page-order contract.
- `docs/FIRST-IMPRESSION-VALIDATION.md` — current qualitative protocol.
- `docs/HERO-CONCEPTS-M05.md` — current divergent-pair exploration contract.
- `docs/M05-WIREFRAMES.md` — internal structural reference only; former A/C/D participant-facing plan is retired.
- `docs/RESEARCH-M05-EXPLORATION-2026-08-29.md` — evidence behind the exploration/fidelity correction.
- `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — current component/template/Figma reuse strategy.

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

The already-created Concept A raster visual is retained only as an **unvalidated P structural reference**, not as the design medium or visual authority. Old C/D Hero generation is stopped. C/D ideas may be reused later as section-level techniques if useful.

Participant-facing first-impression stimuli should be realistic mid/high fidelity enough to evaluate category recognition, credibility, visual orientation and trust. The preferred next medium is editable Figma composition assembled from mature structural primitives plus custom Lunowa Product proof.

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
R05       Reuse-source + Figma design-system setup
          |
          v
M05  #10 P baseline vs E dark horse comprehension evidence
          |
          +--> optional isolated static-vs-motion evidence
          |
          v
M10  #3  Freeze user-validated editable visual oracles
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

`R05` is a planning/design step, not production-code authorization. It may proceed before ACP G7.

## Execution notes

- #3 must consume #10 directional comprehension evidence; visually attractive wrong-mental-model candidates cannot win.
- #10 distinguishes unaided first impressions from aided comparative feedback and evaluates the lower-page journey as well as Hero.
- Do not spend M05 research/sample budget on near-duplicate Hero layouts that ordinary design judgment can resolve.
- A second/third direction is only justified by a genuinely different mental-model/proof hypothesis.
- Do not serially patch a generated raster image and call the patches new concepts.
- Reuse generic primitives before authoring custom ones, but require Product-truth/accessibility/responsive/performance/license review.
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

1. Stop bespoke raster homepage iteration as the default design process.
2. Harvest a small curated set of proven structural references/components from Relume, Tailwind Plus, Framer/Figma/Webflow ecosystems; record source/license/role and reject generic AI-SaaS effects.
3. Establish a minimal Lunowa web design system in Figma: typography, widths/grid, spacing scale, color/state tokens, radii/borders, button/link rules and Product-demo shell primitives.
4. Assemble **P Product Proof** and **E Editorial Problem-First** as independently conceived editable mid/high-fidelity Figma stimuli using reused generic structure plus custom Lunowa Product proof.
5. Run Product-truth/claim/accessibility/visual anti-pattern audit on P/E before user exposure.
6. Run small directional M05 unaided comprehension research with P/E assignment rotated across participants.
7. If P is clearly comprehension-eligible and E reveals no stronger acquisition model, stop exploration and converge rather than generating more variants.
8. Test motion only when the temporal distinction still needs proof.
9. Feed M05 evidence into #3 and freeze readable desktop/mobile Figma visual references.
10. Continue `miki-labs/agent-control-plane` toward G7 independently.
11. After both M10 visual freeze and ACP G7 PASS, start #4 through the accepted control-plane path, reusing approved components before custom implementation.

Codex prompts remain short: point to the current Issue and repository contracts rather than restating them.