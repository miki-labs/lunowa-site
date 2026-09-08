# Lunowa Frontier Web Design Research — 2026-09-09

Status: dated external research and design-rationale input for the M10 visual rebaseline. This file is evidence/rationale, not Product truth.

## 1. Why this rebaseline exists

The previous M10 direction optimized heavily for downside prevention: familiar SaaS structure, static-first presentation, Product UI as the primary visual proof, restrained depth, and generated imagery/motion as secondary or optional. The Product owner rejected the resulting browser candidate as materially below the desired visual quality bar and explicitly authorized a complete redesign of the site constraints.

This research asks a different question:

> How should Lunowa combine truthful Product comprehension with a memorable, ownable, world-class web experience in September 2026?

Product truth remains owned by `miki-labs/lunowa`. This research may change the site art direction, composition, motion, tools, tokens, and design workflow; it may not invent Product semantics, claims, availability, customers, metrics, pricing, or security facts.

## 2. Current frontier pattern: art direction and Product proof are complements

### Clay — one ownable visual system across the whole journey

Clay documented its July 2026 homepage redesign publicly. The team first locked positioning, then explored multiple visual concepts and selected a Rube Goldberg machine because it was playful, structurally true to the Product, and capable of carrying the full page journey. An illustrator/animator carried that world through the site while the page also shows Product screens, customer stories, multiple conversion paths, and an interactive in-Product aha moment.

Implication for Lunowa: do not force a choice between `brand world` and `Product proof`. A coherent brand metaphor/illustration can carry the journey while real Product evidence appears at the moments where credibility matters.

Source: https://www.clay.com/blog/new-homepage-2026

### And Idea — the Hero may be an experience, not a SaaS template

Live browser inspection on 2026-09-09 shows And Idea using a dominant illustrated/video world with layered navigation, editorial typography, floating information panels, progress UI, canvases, SVGs, an autoplay muted loop video, blend/filter/clip-path treatment, and an OGL-based bundle. The first viewport is strongly art-directed rather than a conventional `copy + dashboard screenshot` SaaS shell.

Implication for Lunowa: full-bleed art, media, canvas/WebGL, overlap, and ambient motion are valid tools when they create an ownable world and are bounded by performance/accessibility. They should not be prohibited merely because they are decorative.

Source: https://www.andidea.jp/

### Linear — the Product interface can itself be the brand narrative

Linear's current homepage leads with a direct category claim and immediately embeds a dense, believable Product environment. The long page is organized as a product-development story (`Intake`, `Planning and monitoring`, `AI and automations`, `Build, review, and ship`) and repeatedly uses real interface grammar rather than abstract feature icons.

Implication for Lunowa: the unresolved communication object can travel through the full page as one continuous Product story. Product UI should be staged editorially, not reduced to a generic dashboard card.

Source: https://linear.app/

### Attio — interface scenarios can carry an agentic story

Attio's current homepage embeds detailed Product scenarios, transcript content, agent commands, records, workflows, and actions directly in the marketing page rather than separating `marketing` from `demo`.

Implication for Lunowa: a believable communication thread, monitoring state, and attention return can function as narrative media, not merely a screenshot.

Source: https://attio.com/

### Cursor — interactive Product demo in the Hero

Cursor's current homepage explicitly contains an interactive demo showing multiple Cursor interfaces near its top-level positioning.

Implication for Lunowa: when the Product interaction itself produces the aha moment, interactive Product demonstration is appropriate in the Hero. It does not need to be postponed to lower sections by rule.

Source: https://cursor.com/

### Clueso — transformation storytelling

Clueso structures the page around visible before/after transformation from rough recording to polished Product output, with repeated product-led media.

Implication for Lunowa: the strongest story is also a transformation: `I must keep checking` -> `Lunowa carries the monitoring burden` -> `attention returns only when needed, with context`.

Source: https://www.clueso.io/

## 3. 2026 AI-native design workflow evidence

### AI in Design 2026

Designer Fund + Foundation Capital surveyed more than 900 designers across 60+ countries and conducted 25+ interviews with design practitioners/leaders at companies including Anthropic, Stripe, Linear, Notion, Cursor, Framer, Shopify, Sierra, Ramp, DoorDash, Miro, and others.

The important workflow conclusions for Lunowa are:

- design teams are rebuilding workflows around AI rather than adding one generator to an old handoff;
- coding and working prototypes are now part of mainstream design practice;
- there is no single universal tool stack;
- fast generation does not remove the need for taste and pixel-level judgment;
- one-shot output quality remains unreliable and requires iteration;
- design systems embedded in code/tools create leverage for maintaining quality.

A useful quality test from the report is effectively: if the result would not be acceptable after a week of human effort, do not accept it merely because AI produced it in minutes.

Sources:
- https://designerfund.com/blog/ai-in-design-2026
- https://stateofaidesign.com/
- https://stateofaidesign.com/chapters/tools
- https://stateofaidesign.com/chapters/craft

### Figma MCP — structured design context and bidirectional canvas/code

Figma's current MCP server lets agents read components, variables, layout data and other structured design details, write native editable Figma content, and move between code and canvas. Code Connect maps design components to real production components.

Implication for Lunowa: Figma should be a structured convergence surface after/while exploring, not a mandatory first step before ideas exist. The selected visual direction should be expressed as editable frames/components/variables and linked back to code where useful.

Sources:
- https://www.figma.com/dev-mode/
- https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server
- https://help.figma.com/hc/en-us/articles/40287261761559-Code-to-canvas-with-your-design-system

### Framer 3 / Agents — live canvas iteration has become first-class

Framer 3 (June 2026) added design agents native to the canvas and branching for exploration. By September 2026 Framer also exposes agent-driven design/refinement, responsive changes, custom code/effects, and integrations with external agents. Recent product updates include interactive shaders, video shaders, and 3D transforms.

Implication for Lunowa: Framer is a valid rapid art-direction/prototype surface, especially for motion/visual exploration. Final production architecture does not have to move to Framer; the prototype can be translated to the canonical site code after a direction wins.

Sources:
- https://www.framer.com/blog/framer-3/
- https://www.framer.com/
- https://www.framer.com/agents/

### Magic Patterns — real design-system context beats long generic prompts

Magic Patterns' 2026 Design System Agent can ingest real tokens, components and code context; Agent 2.0 can hand production-ready code to coding agents through MCP. Its own guidance explicitly identifies missing design context as a reason coding agents produce generic UI.

Implication for Lunowa: use Magic Patterns as an optional exploration/A-B surface, particularly once a Lunowa design system exists. It is not automatically the visual authority.

Sources:
- https://www.magicpatterns.com/blog/introducing-design-system-agent
- https://www.magicpatterns.com/blog/magic-patterns-agent-2-0

### GPT-6 Astra — computer-use-native design/build loops

OpenAI introduced GPT-6 Astra on 2026-09-03 as its most capable model for hard end-to-end work, with improved computer use and coding. OpenAI states Astra can create a website and perform frontend QA. Availability is still rolling out rather than assumed.

Implication for Lunowa: when Astra is actually available to the owner/account/tool path, prefer it for long visual browser loops. Do not silently substitute a weaker coding model and assume equivalent design judgment.

Source: https://openai.com/products/release-notes/

## 4. Browser capabilities and motion in 2026

### View Transitions

The View Transition API reached Baseline 2025 across current browsers, and transition `types` reached Baseline 2026. It is a useful progressive layer for page/state continuity.

Source: https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition

### Scroll-driven animations

Scroll-linked/view-timeline features remain uneven across browsers; some interfaces remain `Limited availability`. Use native scroll-driven CSS as progressive enhancement, not the only implementation of essential storytelling.

Sources:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll
- https://developer.mozilla.org/en-US/docs/Web/API/ViewTimeline

### Motion / GSAP / Rive / WebGL

No single library should be mandated globally.

- CSS / View Transitions: simple state and page transitions.
- Motion: Product/DOM animation and scroll-linked transforms when React is justified.
- GSAP/ScrollTrigger: complex authored timelines or pinning where it reduces complexity versus bespoke code.
- Rive: one high-value interactive vector/character/brand object when stateful animation is valuable; account for its runtime/WASM cost.
- OGL/Three/WebGL/shaders: one signature visual where the visual idea genuinely needs GPU/canvas rendering; never as default decoration.
- video: high-fidelity cinematic/illustrative atmosphere can be efficient when encoded well, poster-backed, muted, and bounded.

Rive's documented compressed runtime footprint ranges roughly from 222 KB for canvas-lite to about 648 KB for WebGL2 before the actual asset, so it must earn its cost.

Sources:
- https://motion.dev/docs/react-use-scroll
- https://rive.app/docs/runtimes/runtime-sizes
- https://rive.app/docs/runtimes/web/web-js

## 5. Performance and accessibility remain hard gates

Expressive design is not permission to ship a slow or inaccessible site.

Current Core Web Vitals `Good` targets remain:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1;
- evaluate at the 75th percentile, separately for mobile and desktop field data.

Source: https://web.dev/articles/vitals

WCAG 2.2 remains the accessibility target. Reduced motion must suppress non-essential motion while preserving the complete Product explanation. Focus, keyboard order, reflow, contrast, and touch targets remain first-class acceptance evidence.

Source: https://www.w3.org/WAI/WCAG22/Techniques/changelog.html

## 6. Token system: standardize after visual selection, not before it

DTCG 2025.10 is the first stable Design Tokens specification and is suitable as the interchange format for a small final token source. It should preserve interoperability between Figma/code/tools.

However, the previous M10 process froze exact aesthetic values before the owner had accepted the art direction. That turns a design-system tool into a creativity constraint.

New rule:

1. preserve only Product-semantic colors/meaning boundaries during exploration;
2. explore art direction freely;
3. select the visual system in real browser/Figma evidence;
4. derive a small DTCG-compatible token set from the winner;
5. lock tokens only after owner acceptance.

Source: https://www.designtokens.org/

## 7. New synthesis for Lunowa

### Design thesis

> **Calm cinematic brand world around truthful Product behavior.**

Working shorthand: **Lunar Product Cinema**.

`Lunar` means an ownable Lunowa atmosphere, not a requirement to plaster moons everywhere. `Product Cinema` means one continuous unresolved matter can be staged with editorial composition, motion, illustration and real UI so the visitor feels the transition from self-monitoring to delegated attention.

### Brand-world seed

Owner-provided candidate:

- moon + rabbit + `lunowa` mark;
- deep midnight/navy;
- warm lunar gold;
- dawn ivory;
- mist/cool cyan or teal as optional environmental/monitoring accent.

This is a direction seed, not yet frozen final brand identity.

### What should become memorable

The memorable idea should be:

> `Lunowa is quietly watching the unresolved thing while I do not have to.`

Not `Lunowa uses AI` and not a generic moon/orb.

Possible recurring visual device:

- one rabbit/lunar guide moving through a calm evolving environment;
- one unresolved communication object moving through states;
- quiet environmental time passing while the Product itself remains trustworthy and legible;
- dawn/light transition when attention genuinely returns.

The visual metaphor must reinforce the Product contract rather than replace it.

## 8. New design constraints

### Hard gates — never trade away

1. Product truth and no unsupported claims.
2. First-screen or first-short-interaction comprehension of email/communication territory and monitoring-offload value.
3. Source-grounded Product proof for the canonical unresolved communication story.
4. WCAG 2.2 AA target, keyboard/focus/reflow, semantic DOM, reduced-motion equivalent.
5. Core Web Vitals `Good` field target and explicit media/script/font budgets.
6. Responsive compositions at 1440 / 1280 / 1024 / 768 / 390 / 320 without broken layout or unreadable Product proof.
7. asset/code/license/provenance evidence.
8. no invented customer/social proof/pricing/security/performance facts.

### No longer prohibited by default

The following are now allowed when they materially improve the chosen concept and pass the hard gates:

- full-bleed illustration or video;
- asymmetric/layered Hero composition;
- editorial serif/display typography;
- deliberate overlap;
- sticky/scrollytelling sequences;
- ambient motion;
- muted autoplay media;
- canvas/WebGL/shaders;
- 3D transforms;
- Rive/Lottie;
- strong gradients/depth;
- Product UI and illustration co-starring;
- custom code for a signature visual;
- different desktop/mobile art direction.

### Still reject

- generic purple AI orb/glow as the idea;
- effect accumulation without a coherent concept;
- cloned competitor pixels/brand identity;
- fake Product screens or unsupported states;
- motion that blocks reading or hijacks scrolling;
- essential meaning available only through animation;
- heavy media whose visual value does not justify its field cost;
- AI one-shot output accepted without human/owner browser review.

## 9. New quality model

Do not rank `delight` last and do not optimize only for downside removal.

A candidate must pass all hard gates, then be evaluated as a multi-objective/Pareto problem across:

- Product comprehension;
- Product-proof credibility;
- brand memorability/ownability;
- art direction and craft;
- emotional resonance;
- conversion/action clarity;
- trust;
- responsive/mobile quality;
- motion quality where relevant;
- implementation/performance cost.

A safe but generic candidate fails the quality bar even if it has no technical defects.

## 10. Exploration directions to compare

Do not converge from one image immediately. Generate at least three materially different high-fidelity browser-able directions against the same Product truth:

### A — Lunar Editorial Product Cinema (recommended first)

Moon/rabbit/dawn atmosphere, sophisticated editorial typography, layered Product UI, restrained cinematic motion, one continuous quotation story.

### B — Surreal Illustration System

A bold, ownable illustrated world closer to Clay/And Idea in memorability, with Product proof entering as evidence windows/objects rather than dominating every frame.

### C — Product-Native Kinetic Interface

Little/no decorative illustration; the Product interface itself becomes the cinematic object, closer to Linear/Attio/Cursor, using real UI state transitions and editorial staging.

The winner should be chosen from real browser evidence, not from conceptual preference alone.

## 11. Recommended 2026 workflow

```text
live Product truth
-> current reference/research board
-> 3 art-direction explorations (ImageGen / Framer / Magic Patterns / Figma / strongest available agent)
-> owner selects promising direction(s)
-> structured Figma design + asset/motion notes
-> isolated real-browser prototype
-> Astra/strongest available computer-use agent + coding agent
-> Playwright 1440/768/390 evidence
-> geometry/perceptual/visual review
-> scoped iterative correction
-> owner browser acceptance
-> derive/freeze DTCG tokens
-> production-path implementation
-> exact-head independent audit
```

Important: pixel similarity is an implementation oracle, not the design objective. First decide whether the target itself is exceptional.

## 12. Consequence for the old M10 candidate

The 2026-08-30 P/Quiet Product Proof material remains useful for:

- Product truth boundaries;
- canonical quotation story;
- accessibility/performance evidence patterns;
- Source/trust semantics;
- responsive evidence tooling.

It is no longer binding as a visual style, composition, motion, typography, media, depth, or exact aesthetic-token authority after owner-directed rebaseline.

PR #21 remains a technically verified historical browser baseline unless separately promoted; it is not the current owner-accepted visual direction.
