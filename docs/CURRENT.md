# Current execution router

Status date: 2026-08-30

## Canonical authority

- Product truth: `miki-thecat/lunowa`.
- Marketing-site truth: this repository's current contracts.
- Live task/candidate/review state: GitHub Issues / PRs / CI.
- Implementation execution gate: `miki-labs/agent-control-plane` G7 single-task same-production-path acceptance.

## Current phase

**S05 STIMULUS CONSTRUCTION READY — Issue #14**

Production-code implementation has not started and is intentionally held until ACP G7 PASS.

Issue ownership:

- #1 — canonical marketing-site control plane acceptance;
- #14 — construct and internally audit P-v1 / E-v1 + shared lower-page research stimuli;
- #10 — participant-facing first-impression research after #14 acceptance;
- #3 — freeze final structured visual authority after durable #10 evidence.

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
- **Reuse-first rule:** ordinary marketing/app-shell mechanics should come from mature reusable patterns/components where this reduces work without weakening Product semantics, accessibility, performance or ownership.

## Reuse/design authority

Read, in order:

1. `docs/REUSE-STACK-AUDIT-2026-08-29.md` — latest full tool/component/portability audit.
2. `docs/APPROVED-PRIMITIVES-2026-08-29.md` — approved production/design primitive hierarchy.
3. `docs/REUSE-COMPONENT-SHORTLIST-2026-08-29.md` — deliberately small component-pattern shortlist.
4. `docs/REUSE-FIRST-WEB-STRATEGY-2026-08-29.md` — overall rationale and ecosystem role split.
5. `docs/M10-TOKEN-CONTRACT.md` — provisional semantic token structure; semantic roles are authority, exact visual values remain unfrozen.
6. `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md` — selected generic homepage shell.
7. `docs/M05-P-E-STIMULUS-CONTRACT.md` — exact P/E participant-stimulus construction and comparability constraints.

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
        +-- custom Lunowa UI only where semantics/visual authority require it
```

### Current evidence-backed tool decisions

- **Astro:** preferred static shell; current docs support Tailwind 4 through the official Vite-plugin path.
- **Tailwind CSS 4:** local design-token/style layer using CSS-first theme variables.
- **shadcn/ui:** official Astro setup; current new-project path uses Base UI while Radix remains supported.
- **Base UI:** bind to intended MIT `@base-ui/react` / `mui/base-ui` provenance.
- **7Ovr:** strong current open marketing-block candidate; current site exposes 16 Hero blocks, 230+ free blocks, local-source shadcn installation, Base UI, React-stack/Astro compatibility claims, and MIT-0 for free blocks. Exact source still requires adoption-time audit.
- **Tailark:** secondary marketing-block candidate; current site/docs focus on shadcn marketing blocks/pages and support Base UI/Radix paths. Exact OSS item/license/dependency remains adoption-time evidence.
- **Tailwind Plus:** premium benchmark/source, not a requirement. Current official library exposes 12 Hero, 15 Feature, 11 CTA, 8 Header, 7 FAQ and 7 Footer section families; use only with valid license and when materially superior.
- **Relume:** large-scale discovery/reference source; runtime/code adoption conditional on exact compatibility/license/dependency review.
- **Webflow DevLink:** viable scoped visual-to-React experiment, not default because it introduces a second styling model.
- **Framer:** visual/reference only for architecture purposes while current first-party portability documentation remains contradictory.
- **Figma:** preferred editable convergence surface when write access exists; current connected account was observed as Starter/View, so not a hard dependency.
- **Motion:** semantic temporal proof only, with Reduced Motion as an acceptance path.
- **Image generation:** mood/illustration/novel exploration only, not precise homepage-composition authority.

## Selected common homepage shell — 2026-08-30

Broad generic-shell exploration is now stopped by default.

Current shell:

```text
minimal header
↓
category/mechanism cue
↓
centered/near-centered H1 + support + CTA
↓
large believable Lunowa Product proof
↓
editorial problem/distinction bands
↓
additional Product proof / return-context / trust-control
↓
truthful availability
↓
minimal FAQ
↓
plain final CTA
↓
minimal footer
```

Current strong Product-site references — Linear, Cursor, Granola and Attio — reinforce Product UI as proof and a vertically staged one-job-per-section narrative. This is market/design evidence, not proof of a universal conversion optimum.

Do **not** import a complete generic SaaS template. Whole templates commonly carry logo clouds, stats, testimonials, pricing, bento grids and other unsupported/unnecessary sections.

## Token direction

`docs/M10-TOKEN-CONTRACT.md` defines the provisional token roles.

Current rule:

- semantic roles are authoritative;
- exact colors/font family/type scale/container widths/radius/shadow/motion values remain unfrozen until realistic P/E visual evidence;
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

## Current M05 validation authority

- `docs/VISITOR-JOURNEY.md`
- `docs/FIRST-IMPRESSION-VALIDATION.md`
- `docs/HERO-CONCEPTS-M05.md`
- `docs/M05-P-E-STIMULUS-CONTRACT.md`
- `docs/R05-COMMON-SHELL-SELECTION-2026-08-30.md`
- `docs/M05-WIREFRAMES.md` — internal structural reference only; former A/C/D participant plan retired.
- `docs/RESEARCH-M05-EXPLORATION-2026-08-29.md`

M05 is intentionally **not** a small-sample statistical A/B test.

## P/E construction state

S05 Issue #14 owns exactly:

1. `P-v1` — Product Proof Baseline;
2. `E-v1` — independently conceived Editorial Problem-First Dark Horse;
3. one shared lower-page continuation reference.

The already-created Concept A raster visual remains only an **unvalidated historical P structural reference**. It is not the design medium or authority and should not be serially patched.

P/E must share the common shell/token/Product-scene grammar where practical.

Canonical first state for both is the quotation intermediate-reply state:

`社内確認中です。明日送ります。 -> 見積書は未到着 -> あなたの対応はまだ必要ありません -> Lunowaが引き続き見守る`.

Initial comparison is static. Motion is tested only after a static direction is comprehension-eligible and a temporal question remains.

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
R05       reuse + tokens + common shell  [substantially complete]
          |
          v
S05  #14 construct + internally audit P-v1 / E-v1 / shared continuation
          |
          v
M05  #10 participant first-impression evidence
          |
          +--> optional isolated static-vs-motion evidence
          |
          v
M10  #3  freeze user-validated structured visual authority + exact token values
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

R05/S05 are design/research preparation, not production-code authorization. They may proceed before ACP G7.

## Execution notes

- #14 must complete and internally audit participant stimuli before #10 exposes them to users.
- #10 should collect evidence, not redesign stimuli during participant sessions.
- #3 must consume #10 evidence; visually attractive wrong-mental-model candidates cannot win.
- Do not spend M05 sample budget on near-duplicate Hero layouts.
- Do not serially patch a generated raster image and call patches new concepts.
- Do not restart broad template/tool discovery unless a concrete shell requirement cannot be satisfied.
- Reuse generic primitives before custom implementation, but local Product-truth/accessibility/responsive/performance/license review remains mandatory.
- Community registries are discovery/distribution surfaces, not trust authorities.
- #4 must not start before ACP G7 PASS. G8 is not required.
- First production-code task should run through the accepted Agent Control Plane path.
- #5 and #6 may proceed in parallel only after #4 and frozen visual direction, with serialized dependency/config coordination.
- #7 reconciles the cumulative #5/#6 UI.
- #8 waits until CTA/availability/data-purpose boundaries are stable enough for truthful consent/privacy behavior.
- #9 is a full cumulative acceptance audit, not a latest-patch check.
- Production domain cutover is intentionally not authorized by #9.

## Current Issues

- #1 — Bootstrap Lunowa marketing site control plane
- #14 — S05 construct comparable P-v1/E-v1 research stimuli
- #10 — M05 participant first-impression comprehension validation
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

1. Execute Issue #14: construct **P-v1** using the selected shell, semantic token roles, and canonical intermediate-reply Product state.
2. Independently construct **E-v1** using the same shell/tokens/Product scene but a real problem-first acquisition hierarchy; do not derive E by cosmetically editing P.
3. Create one shared realistic lower-page continuation reference for the post-Hero probe instead of two duplicate long homepages.
4. Run full internal pre-research audit on #14's cumulative artifact set: Product truth, wrong-category risk, copy, unsupported claims, visual anti-patterns, accessibility plausibility, comparable fidelity and hidden variables.
5. Only after #14 PASS, run #10 small directional unaided comprehension research with P/E assignment rotated across participants.
6. If P is clearly comprehension-eligible and E reveals no materially stronger acquisition model, converge instead of creating more variants.
7. Test motion only if temporal understanding remains materially weak.
8. Feed evidence into #3 and freeze desktop/mobile structured visual authority + exact token values.
9. Continue `miki-labs/agent-control-plane` toward G7 independently.
10. After both M10 visual freeze and ACP G7 PASS, start #4 through the accepted control-plane path.

Codex prompts remain short: point to the current Issue and repository contracts rather than restating them.
