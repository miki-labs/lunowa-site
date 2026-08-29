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
- Technical direction: Astro static-first + Tailwind CSS 4 + targeted React islands + shadcn/ui/Base UI local primitives + Motion only where accepted; Cloudflare Workers Static Assets, all re-checked at implementation time.
- **Reuse-first rule:** ordinary marketing/app-shell mechanics should come from mature reusable blocks/components where this reduces work without weakening Product semantics, accessibility, performance or ownership.

## Reuse-first authority

Read, in order:

1. `docs/REUSE-STACK-AUDIT-2026-08-29.md` — latest full tool/component/portability audit.
2. `docs/APPROVED-PRIMITIVES-2026-08-29.md` — approved production/design primitive hierarchy.
3. `docs/REUSE-COMPONENT-SHORTLIST-2026-08-29.md` — deliberately small component-pattern shortlist.
4. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — overall rationale and ecosystem role split.
5. `docs/M10-TOKEN-CONTRACT.md` — provisional semantic token structure; semantic roles are current authority, exact visual values remain unfrozen.

Current preferred production/reuse split:

```text
Astro + Tailwind CSS 4
        |
        +-- native semantic HTML/CSS first
        |
        +-- shadcn/ui + @base-ui/react for generic interactive/app primitives
        |
        +-- audited open shadcn blocks
        |     1. 7Ovr current first candidate
        |     2. Tailark current second candidate
        |
        +-- Tailwind Plus only if licensed + materially superior
        |
        +-- Relume for broad structural/reference search
        |
        +-- optional Webflow DevLink proof for a specific visual-to-React need
        |
        +-- custom Lunowa UI only where semantics/visual oracle require it
```

### Current evidence-backed tool decisions

- **Astro:** remains preferred static shell; current docs support Tailwind 4 through the official Vite-plugin path.
- **Tailwind CSS 4:** local design-token/style layer; use CSS-first `@theme` variables.
- **shadcn/ui:** official Astro setup; new projects default to Base UI as of 2026-07.
- **Base UI:** bind to the intended MIT `@base-ui/react` / `mui/base-ui` provenance; `Base UI` is an overloaded ecosystem name.
- **7Ovr:** current first open marketing-block candidate; listed by official shadcn registry directory, Base UI based, local-source install, free blocks MIT-0 per current docs.
- **Tailark:** secondary open marketing-block candidate; MIT, Base UI default registry path.
- **Tailwind Plus:** premium benchmark/source, not a requirement; use only under a valid license and when it materially beats free/local options.
- **Relume:** preferred large-scale discovery/reference source; runtime/code adoption conditional on exact compatibility/license/dependency review.
- **Webflow DevLink:** 2026 export can produce local self-contained React/TSX components; therefore valid as a scoped experiment, but not default because Webflow primitives/scoped CSS would create a second style system.
- **Framer:** visual/reference only for architecture purposes because current first-party Help contains contradictory claims about full-site self-host/export portability.
- **Figma:** preferred editable convergence surface when write access is available; current connected account was observed as Starter/View, so not a hard dependency.
- **Motion:** semantic temporal proof only, with Reduced Motion as an acceptance path.
- **Image generation:** mood/illustration/novel exploration only, not precise homepage composition authority.

### Token direction

`docs/M10-TOKEN-CONTRACT.md` now defines the provisional R05 token roles.

Current rule:

- semantic roles are authoritative;
- exact colors/font family/type scale/container widths/radius/shadow/motion values remain unfrozen until P/E visual evidence;
- final M10 source should be vendor-neutral and DTCG-compatible where practical;
- accepted values project deterministically into Tailwind 4/CSS variables;
- third-party blocks must map into Lunowa tokens rather than importing a foreign palette/type/radius system.

The token surface is intentionally small:

- semantic colors;
- typography roles;
- spacing;
- container/breakpoint rules;
- radius/border/shadow;
- focus ring;
- motion values only if motion survives evidence.

Do not build an enterprise token pipeline before the design surface justifies it.

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

The already-created Concept A raster visual is retained only as an **unvalidated P structural reference**, not as design medium or visual authority. Old C/D Hero generation is stopped.

P and E should share the accepted generic shell/token system where practical so the comparison tests the acquisition/proof thesis rather than random template aesthetics.

Participant-facing first-impression stimuli should be realistic mid/high fidelity enough to evaluate category recognition, credibility, visual orientation and trust.

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
R05       Reuse-source + token/design-system setup
          |
          v
M05  #10 P baseline vs E dark horse comprehension evidence
          |
          +--> optional isolated static-vs-motion evidence
          |
          v
M10  #3  Freeze user-validated structured visual authority
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
- Do not serially patch a generated raster image and call the patches new concepts.
- Reuse generic primitives before authoring custom ones, but require Product-truth/accessibility/responsive/performance/license review.
- Community shadcn registries are discovery/distribution surfaces, not trust authorities; audit exact source before adoption.
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

1. Keep the current R05 semantic token roles; do not freeze exact aesthetic values yet.
2. Inspect a **small** set of native/7Ovr/Tailark/Tailwind Plus-if-licensed/Relume Hero/header/CTA/FAQ/footer candidates; record exact source/license/role and reject generic AI-SaaS effects.
3. Choose one generic shell system rather than mixing unrelated library aesthetics section by section.
4. Compose P Product Proof and E Editorial Problem-First using that common shell plus custom Lunowa Product proof.
5. Run Product-truth/claim/accessibility/visual anti-pattern audit on P/E before user exposure.
6. Run small directional M05 unaided comprehension research with P/E assignment rotated across participants.
7. If P is clearly comprehension-eligible and E reveals no stronger acquisition model, stop exploration and converge rather than generating more variants.
8. Test motion only when the temporal distinction still needs proof.
9. Feed M05 evidence into #3 and freeze readable desktop/mobile structured visual references + exact token values.
10. Continue `miki-labs/agent-control-plane` toward G7 independently.
11. After both M10 visual freeze and ACP G7 PASS, start #4 through the accepted control-plane path, reusing approved components before custom implementation.

Codex prompts remain short: point to the current Issue and repository contracts rather than restating them.
