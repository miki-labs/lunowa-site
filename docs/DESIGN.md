# Lunowa Marketing Visual Contract

Status: **2026-09-09 frontier visual rebaseline candidate**. This supersedes the 2026-08-30 `Quiet Product Proof` style constraints for current M10 exploration. Product truth remains in `miki-labs/lunowa`.

Read first:

- `docs/RESEARCH-FRONTIER-WEB-DESIGN-2026-09-09.md`
- `docs/HOMEPAGE.md`
- `docs/MOTION.md`
- `docs/VERIFICATION.md`
- current Product authority in `miki-labs/lunowa`.

## 1. Design thesis

> **Build a calm cinematic brand world around truthful Product behavior.**

Working shorthand: **Lunar Product Cinema**.

Lunowa should be recognizable both as a real email-centered Product and as an ownable visual world. The page may be artistic, cinematic, editorial, interactive, or technically ambitious when those choices strengthen the concept.

The design target is no longer `a safe familiar SaaS page with one good Product screenshot`. A technically correct but generic page is a design failure.

## 2. What must be felt

The visitor should feel:

> **Lunowa is quietly carrying an unresolved thing so I do not have to keep it in my head.**

The visual experience should communicate calm, stewardship, time passing safely, and deliberate return of attention.

Do not make `AI` the visual idea. AI is backstage Product machinery, not the brand story.

## 3. Hard gates

Every candidate must pass all of these before aesthetics can compensate for anything:

1. **Product truth** — no invented capability, provider parity, customer, metric, pricing, security, timing, or validation claim.
2. **Core comprehension** — first viewport or first short interaction establishes email/communication territory and the monitoring-offload value.
3. **Canonical Product proof** — the unresolved quotation story remains source-grounded and semantically correct.
4. **Accessibility** — target WCAG 2.2 AA; semantic DOM, keyboard/focus, contrast, reflow, readable text, reduced-motion equivalent.
5. **Performance** — target field Core Web Vitals Good: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1; media/font/script costs are measured.
6. **Responsive integrity** — no broken composition or unreadable essential proof from 320 px through wide desktop.
7. **Provenance** — copied/adapted assets, code, fonts, libraries and references have usable license/source evidence.

Passing these gates does **not** make a candidate good; it only makes it eligible for visual judgment.

## 4. Quality objectives after the gates

Judge surviving candidates as a multi-objective design problem across:

- Product comprehension;
- Product-proof credibility;
- brand memorability and ownability;
- art direction and craft;
- emotional resonance;
- conversion/action clarity;
- trust;
- responsive/mobile quality;
- motion/interaction quality where relevant;
- implementation/performance cost.

Do not rank `delight`, `brand distinctiveness`, or `visual craft` below generic SaaS familiarity by default.

A safe, polished, generic page should lose to a distinctive page that passes the same hard gates.

## 5. Brand-world seed

Current owner-approved exploration seed, not final frozen identity:

- crescent moon + rabbit + `lunowa`;
- deep midnight/navy foundation;
- warm lunar gold;
- dawn ivory/near-white;
- mist cyan/teal as optional atmospheric and monitoring accent.

The moon/rabbit may become a signature system rather than a one-off logo decoration.

Avoid literal repetition. `Lunar` is an atmosphere and narrative grammar, not an instruction to place a large moon in every section.

## 6. Hero freedom

No single Hero template is authoritative before comparison.

Allowed:

- asymmetric composition;
- full-bleed visual world;
- large editorial typography;
- illustration and Product UI co-starring;
- Product-native interactive demo;
- deliberate overlap/layering;
- video/canvas/WebGL/Rive atmosphere;
- dark, light, or mixed tonal composition;
- sticky or chaptered introduction;
- different desktop/mobile compositions.

Do not force `centered copy -> screenshot below` or `left copy -> right dashboard` because it is familiar.

The selected Hero must still expose enough category/mechanism evidence that a new visitor does not mistake Lunowa for a generic productivity, inbox-cleanup, reminder, or autonomous sending tool.

## 7. Product proof

Product UI is essential evidence, but it is **not required to be the largest visual object at every moment**.

Use real-looking, code-owned Product UI where exact Product state matters. Generated art/illustration/video may frame or carry the brand narrative around it.

The canonical proof remains:

```text
request quotation
-> Lunowa monitors
-> intermediate reply: "社内確認中です。明日送ります。"
-> quotation still missing
-> user action still unnecessary
-> Lunowa stays quiet and watches
-> usable quotation arrives
-> user attention becomes necessary
-> concise context + Source return
```

The visitor should perceive the same unresolved matter continuing through time, not a gallery of unrelated feature cards.

## 8. Editorial composition

Prefer a page with a point of view over a collection of standard SaaS sections.

Potential grammar:

- chapter numbers / editorial labels;
- oversized statement typography;
- visual continuity across sections;
- recurring horizon/light/rabbit/matter motif;
- Product states staged as evidence windows;
- intentional whitespace punctuated by dense Product moments;
- contrast between quiet waiting and focused return.

One cohesive concept across the page is preferable to many unrelated effects.

## 9. Typography

Japanese readability is a hard constraint; the previous fixed Inter/Noto-only expression is not.

Allowed after license/performance review:

- distinctive display sans;
- editorial serif accent;
- variable fonts;
- large mixed-language type;
- expressive scale contrast;
- custom wordmark treatment.

Rules:

- essential Japanese body/Product copy remains comfortably readable;
- no tiny text used to preserve desktop geometry;
- no arbitrary negative Japanese tracking;
- font loading must avoid material CLS and unnecessary payload;
- use as few families/weights as needed for the concept;
- typography should remain purposeful if motion and imagery are removed.

## 10. Color, light and depth

Exact aesthetic values are not frozen before owner acceptance.

Semantic meaning remains protected:

- monitoring/no current action must remain distinguishable;
- attention-required must remain distinguishable;
- integrity/error red is reserved for genuine degraded/error meaning;
- color never carries semantic state alone.

Outside those boundaries, gradients, glow, bloom, blend modes, shadows, texture, dark sections, cyan/gold atmosphere, and strong contrast are allowed when conceptually coherent.

Reject only **generic** AI visual language, not the underlying techniques.

## 11. Illustration, imagery and generated media

Generated imagery is now a first-class exploration and production asset category when:

- it is owner-approved;
- it does not impersonate unsupported Product UI/evidence;
- provenance/rights are acceptable;
- quality survives real-browser use;
- responsive crops/art direction are intentional.

Illustration may be the dominant Hero visual if category/Product comprehension remains intact.

Still reject generic stock people, generic purple AI orbs, meaningless neural/circuit motifs, and visual filler that could belong to any AI startup.

## 12. Motion and interaction

Motion is no longer Tier-3-only. It may be a signature part of the brand experience.

Motion may:

- establish atmosphere;
- carry one visual object through the journey;
- express safe waiting/time passing;
- demonstrate `reply != completion`;
- reveal the moment attention becomes necessary;
- create tactile depth and hierarchy;
- make the Product demo interactive.

It must not:

- make essential meaning unavailable without animation;
- hijack native scrolling;
- move focus unexpectedly;
- block reading/interaction;
- imply Product effects that did not happen;
- ignore `prefers-reduced-motion`;
- consume performance budget without clear visual return.

Detailed motion authority lives in `docs/MOTION.md`.

## 13. Technology freedom

Use the simplest tool that can faithfully execute the accepted visual concept, not the simplest tool before the concept exists.

Allowed by scoped justification:

- native HTML/CSS/SVG;
- Astro components;
- React islands;
- Motion;
- GSAP/ScrollTrigger;
- View Transitions;
- Rive/Lottie;
- video;
- OGL/Three/WebGL/shaders;
- canvas;
- Framer prototype/custom code;
- Figma MCP;
- Magic Patterns;
- strongest available computer-use agent.

No library is mandatory. A dependency must earn its complexity/bytes through a material design requirement.

## 14. Design-system timing

Do **not** freeze exact aesthetic tokens before selecting the art direction.

Order:

```text
Product truth
-> visual exploration
-> owner selects direction
-> structured Figma/browser authority
-> derive small token system
-> DTCG-compatible freeze
-> production implementation
```

During exploration, preserve semantic state meaning, accessibility and basic implementation feasibility; do not force every candidate through the old palette/type/radius values.

## 15. Responsive design

Mobile is independently art-directed, not merely a semantic collapse of desktop and not a tiny desktop screenshot.

A desktop cinematic composition may become:

- a different crop;
- a vertical chapter sequence;
- a simplified Product interaction;
- a different animation timeline;
- a reduced-motion-first composition;
- a different placement/scale of brand art.

The meaning and brand identity should remain continuous even when geometry changes substantially.

See `docs/M10-RESPONSIVE-SPEC.md`.

## 16. What still fails immediately

Reject a candidate when any of these is true:

- wrong Product mental model;
- unsupported claim or fake social proof;
- generic AI/template appearance with no Lunowa-owned idea;
- copied competitor identity/pixels rather than adapted principles;
- fake Product semantics;
- art overwhelms category comprehension;
- illegible text or inaccessible interaction;
- horizontal overflow/broken mobile;
- essential story only exists in motion;
- scroll-jacking;
- obvious jank/CLS;
- media/3D/shader cost is disproportionate to its value;
- one-shot AI result is accepted without real-browser owner review.

## 17. Candidate directions for M10

Explore at least three materially different directions against the same Product truth before freezing:

### A. Lunar Editorial Product Cinema

Moon/rabbit/dawn world, sophisticated editorial typography, layered Product proof, cinematic but calm motion.

### B. Surreal Illustration System

A bold ownable illustration world with Product evidence entering as windows/objects; optimized for memorability without sacrificing comprehension.

### C. Product-Native Kinetic Interface

Minimal decorative illustration; real Product UI becomes the cinematic object through state continuity and editorial staging.

The owner may select one, hybridize strong ideas, or reject all three. No direction becomes authority because an agent generated it.

## 18. Quality bar

Ask:

1. Would this still feel unmistakably Lunowa if the logo were hidden?
2. Would a design-conscious person plausibly save/share the Hero screenshot?
3. Does it look authored rather than generated from a SaaS template prior?
4. Does the Product proof make the value more believable, not less?
5. Does the page have one coherent visual thesis from top to bottom?
6. Is the motion/art worth its runtime cost?
7. Is the mobile version separately excellent?
8. Would we accept this quality if it had taken a skilled team a week rather than an AI a few minutes?

If the answer to the last question is no, continue iterating.
