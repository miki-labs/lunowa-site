# Lunowa Marketing Site Verification Contract

Status: **2026-09-09 frontier rebaseline acceptance oracle**.

Read:

- `docs/RESEARCH-FRONTIER-WEB-DESIGN-2026-09-09.md`
- `docs/DESIGN.md`
- `docs/HOMEPAGE.md`
- `docs/MOTION.md`
- `docs/M10-VISUAL-AUTHORITY.md`
- `docs/M10-RESPONSIVE-SPEC.md`
- current Product authority in `miki-labs/lunowa`.

## 1. Principle

A candidate must be both **correct enough to trust** and **good enough to deserve the brand**.

Neither of these is sufficient alone:

- `technically green but visually generic` = FAIL;
- `beautiful but Product-wrong/inaccessible/slow` = FAIL.

Current loop:

```text
live Product truth
-> frontier reference/research
-> multiple art directions
-> structured design/browser prototype
-> Product-truth audit
-> owner real-browser aesthetic judgment
-> responsive/motion/performance/accessibility evidence
-> visual convergence
-> token freeze
-> production candidate
-> exact-head cumulative review
```

## 2. Evidence classes

Keep evidence types distinct:

- **Product truth** — `miki-labs/lunowa` canonical sources/current runtime evidence;
- **external design research** — transferable methods/reference decisions, not proof for Lunowa;
- **owner design decision** — actual Lunowa visual/design authority;
- **browser evidence** — implementation/render behavior;
- **automated quality evidence** — CI/tests/metrics/diffs;
- **external visitor evidence** — Product comprehension/relevance evidence once independent users exist.

AI/model praise and owner familiarity are not user validation.

## 3. M10 hard-gate acceptance

Every direction considered for final freeze must clear:

### Product truth

- recognizable email/communication context;
- monitoring-offload promise is not misrepresented;
- canonical intermediate reply remains unresolved;
- no-current-action and continued monitoring are clear;
- material outcome changes attention rather than merely message arrival;
- Source/context remains available;
- no unsupported customer/security/pricing/provider/performance/availability claim.

### Accessibility

- WCAG 2.2 AA target for material text/control/state pairs;
- one logical H1;
- semantic landmarks/controls;
- keyboard reachability and visible focus;
- meaningful accessible names;
- 320px reflow and 200% text/reflow evidence;
- state is not encoded only by color/motion;
- reduced-motion alternative preserves complete meaning.

### Performance

Field target, separately mobile/desktop when real traffic exists:

- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1;
- 75th percentile.

Before field data exists, use repeatable lab evidence and explicit asset/script/font/runtime budgets as predictive guardrails. Do not label lab measurements as real-user field performance.

### Responsive

- no accidental horizontal overflow;
- essential Product copy remains readable;
- accepted art direction survives intentionally across representative desktop/tablet/mobile compositions;
- mobile is not a broken/shrunken desktop.

### Provenance/security

- material borrowed code/assets/fonts/libraries have source/license basis;
- no secrets or unsafe external scripts;
- third-party origins/runtime effects are inventoried when production-relevant.

Failure of any hard gate blocks acceptance regardless of aesthetics.

## 4. Visual-quality acceptance

After hard gates pass, a final candidate must also satisfy owner review across:

1. **Ownability** — would this still look like Lunowa if the logo were hidden?
2. **Memorability** — is there one visual idea likely to be remembered/saved rather than a generic SaaS shell?
3. **Craft** — typography, crop, hierarchy, details, depth, motion and spacing look authored at a high professional bar.
4. **Coherence** — one visual thesis carries the page; effects do not feel collected from unrelated references.
5. **Product credibility** — UI/evidence makes the promise more believable.
6. **Emotional fit** — calm stewardship and deliberate attention return feel consistent with Product value.
7. **Conversion clarity** — primary action remains obvious despite visual ambition.
8. **Mobile quality** — mobile is separately excellent, not merely functional.

A candidate can fail for being generic even when automated checks are green.

## 5. Multi-direction exploration gate

Before M10 final freeze, compare at least three materially different design directions unless the owner explicitly terminates exploration early after an exceptional candidate.

Default comparison set:

- Lunar Editorial Product Cinema;
- Surreal Illustration System;
- Product-Native Kinetic Interface.

For each viable direction record:

- actual 1440 browser Hero;
- actual or high-confidence 390 mobile composition;
- Product proof;
- representative lower-page beat;
- motion/static treatment;
- rough runtime/asset cost;
- owner response;
- material risks.

Do not spend implementation time making a weak concept perfect merely for symmetrical comparison.

## 6. Browser verification

Use Playwright or equivalent deterministic browser automation.

Baseline viewports:

- 1440 × 900;
- 1280 × 800;
- 1024-class boundary when relevant;
- 768 × 1024;
- 390 × 844;
- 320 CSS px reflow.

Check:

- route renders fully;
- fonts/assets loaded as intended;
- CTA/nav/interactive Product demo works;
- no accidental overlap/clipping/overflow;
- Product state copy is visible;
- Source path exists where specified;
- console/page errors absent;
- animation/media state is deterministic enough for evidence capture;
- reduced-motion path works;
- keyboard order/focus remains usable.

## 7. Visual convergence

After a visual target has been accepted, use browser-in-the-loop refinement rather than subjective one-shot coding.

Recommended oracle stack:

```text
accepted target/reference
+ DOM geometry/bounding boxes
+ computed typography/colors/styles
+ screenshot perceptual/pixel/SSIM-like comparison where useful
+ visual/VLM critique
+ owner judgment
```

Rules:

- fix the highest-impact discrepancy or a coherent small batch;
- re-render after each material patch;
- accept a patch only when the target improves and previously accepted hard gates do not regress;
- reject/rollback visual regressions;
- when repeated small patches plateau, reassess DOM/asset/font/architecture rather than endlessly tweaking CSS numbers.

Pixel similarity is not a substitute for design quality. It is only useful once the target itself is accepted.

## 8. Screenshot/reference policy

Accepted references may include:

- Figma frames;
- real-browser screenshots;
- generated art assets;
- motion storyboards/video references;
- structured component geometry.

Generated images may be visual authority **only for approved art/composition**, never Product truth.

For Product UI/copy, code/Figma/browser states must reconcile with `miki-labs/lunowa`.

## 9. Motion verification

For any material motion:

- normal path captured/reviewed;
- `prefers-reduced-motion: reduce` captured/reviewed;
- no essential information disappears;
- native scroll remains usable;
- sticky/pinned sequences can be escaped naturally;
- keyboard focus is not moved/lost;
- loop/video/canvas pauses or becomes cheap when appropriate;
- no unexpected audio;
- Product state continuity remains semantically correct;
- no jank materially degrades reading/interactions.

Heavy motion systems require explicit runtime-cost evidence.

## 10. Media / canvas / WebGL / Rive budgets

When present, record at minimum:

- file/runtime transfer size;
- lazy/eager loading choice;
- LCP ownership/interaction;
- JS/WASM impact;
- main-thread/long-task evidence where relevant;
- mobile fallback/quality;
- static poster/fallback;
- offscreen/hidden render-loop behavior for continuous canvas/WebGL/Rive.

A signature effect that materially defines the page may spend real budget; ambient filler may not.

## 11. Font verification

For final font choices verify:

- actual rendered family for Japanese and Latin glyphs;
- no unintended fallback during evidence capture;
- font file sizes/requests;
- preload only for truly critical faces;
- no material CLS/FOIT regression;
- license/provenance;
- weights/subsets match actual use.

## 12. Product copy/truth audit

Before acceptance re-check mutable facts live:

- supported providers;
- public availability;
- language support;
- send/autonomy behavior;
- signup/confirmation behavior;
- security/privacy wording;
- pricing;
- customer/social proof;
- performance/accuracy claims;
- ICP/validation wording.

Unknown stays unknown.

## 13. Interaction/accessibility detail

At minimum:

- controls are real links/buttons rather than click-only divs;
- target sizes are usable on touch devices;
- hover-only information has touch/keyboard equivalent;
- custom cursor never hides the native ability to understand/click controls;
- canvases/illustrations are correctly decorative or have appropriate alternatives;
- captions/transcripts/alternatives exist if meaningful video/audio content requires them;
- no flashing/blinking hazard;
- skip/navigation/focus behavior is coherent with cinematic/sticky layout.

## 14. Performance philosophy

Do not use performance as a blanket reason to ban expressive design before measuring it.

Also do not use `premium` as a reason to ignore field performance.

Prefer:

- optimized AVIF/WebP/images and appropriate responsive sources;
- modern video codecs/encodes/posters where supported by actual hosting path;
- route/component code splitting;
- lazy non-critical motion runtimes;
- GPU-friendly transforms where appropriate;
- stopping invisible render loops;
- controlled DPR/resolution on canvas;
- limited font families/weights;
- preloading only critical resources.

## 15. Design-tool evidence

Figma/Framer/Magic Patterns/ImageGen/Astra/Codex are creation surfaces, not acceptance authorities.

Figma structured frames/variables/components are preferred after a direction begins converging because they preserve editable intent and can feed agent code generation.

The owner must review the actual experience, preferably in browser, before M10 freeze.

## 16. Production-entry boundary

A beautiful prototype does not silently authorize production.

Before production promotion:

- M10 visual direction/tokens are accepted;
- implementation task contract is current and unblocked;
- production candidate uses the accepted delivery path;
- exact-head CI/browser/performance/accessibility/truth evidence exists;
- independent cumulative review passes.

## 17. External validation debt

Owner acceptance establishes design authority, not market/user validation.

When independent traffic/participants exist, evaluate:

- category comprehension;
- monitoring-offload comprehension;
- distinction from reminders/reply tracking/generic AI email;
- relevance;
- trust;
- brand recall/memorability where useful;
- CTA behavior;
- later activation.

Correct the site when real evidence contradicts owner/internal assumptions.

## 18. Independent full acceptance audit

Review **current task contract × complete exact-head candidate**, not the latest patch only.

On FAIL:

- complete the audit unless a destructive/security risk requires immediate stop;
- report all known material blockers together;
- distinguish hard-gate failures from optional polish;
- after repeated correction failures, revisit target/oracle/architecture/decomposition before another patch loop.

On PASS, bind the accepted evidence to the exact candidate head and visual reference set.
