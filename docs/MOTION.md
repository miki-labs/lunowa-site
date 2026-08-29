# Lunowa Motion Contract

Status: canonical marketing-site motion direction, 2026-08-30.

Read `docs/CURRENT.md`, `docs/VISITOR-JOURNEY.md`, `docs/M05-INTERNAL-AUDIT-RESULT-2026-08-30.md`, and `docs/HOMEPAGE.md` before motion work.

## 1. Motion thesis

Lunowa should not be an animation-heavy site.

> **The page stays still. Product meaning moves.**

Motion may explain state, causality, continuity or interaction feedback. It is not a substitute for category recognition, Product proof, copy or visual design.

The Product must remain understandable without motion.

## 2. Current M05/M10 decision

Internal M05 audit selected **P — Product Proof Baseline** and determined:

> **Baseline Product comprehension does not require motion.**

Therefore:

- static-first is current authority;
- M10 does not need a motion candidate/comparison to pass;
- do not delay visual freeze merely to prove an animation idea;
- any later motion is optional semantic reinforcement/craft;
- reduced-motion/static meaning must remain complete;
- no motion improvement claim may be made without real evidence.

## 3. Signature temporal story

If motion is later justified, the only primary Product story remains one unresolved communication loop:

```text
user requests a quotation
-> Lunowa watches the unresolved result
-> intermediate reply arrives
-> user still does not need to act
-> quiet interval
-> material outcome arrives
-> user attention becomes necessary
-> concise context/source is revealed
```

The most important beat is:

> **intermediate reply -> still no user action required**

A reply is evidence, not automatic completion or attention need.

## 4. Static-first requirement

Every Product demonstration begins from a meaningful still state that answers:

- what communication matter is being watched;
- what Lunowa is doing;
- whether the user needs to act now.

If the still frame is an unexplained diagram, motion design has already failed.

## 5. Conditions that can justify motion later

Motion is justified only if a concrete implementation/design review shows that it materially helps at least one of:

1. object continuity of the same unresolved matter;
2. understanding that evidence changed while attention need did not;
3. understanding when attention does become necessary;
4. required interaction feedback.

If none applies, keep the surface static.

No future motion work may revive P/E comparison as a prerequisite. P is selected; the question is whether P benefits from a bounded enhancement.

## 6. Implementation model

If a Product demonstration uses motion:

- implement real UI state transitions rather than a pre-rendered Hero video where practical;
- React owns demo state only when an interactive island is genuinely required;
- Motion/CSS owns visual interpolation;
- animation code cannot become a second Product semantic authority.

Conceptual internal storyboard states may include `request`, `managed`, `intermediateEvidence`, `stillManaged`, `outcomeEvidence`, `needsYou`, `moment`, but visitor copy must not require those terms.

## 7. Preferred tools

- CSS transitions/keyframes for small local feedback;
- Motion for React for accepted Product layout/presence sequencing;
- native browser transitions/scroll-driven features only as progressive enhancement when simpler;
- GSAP only if a later verified requirement cannot reasonably be achieved with simpler tools;
- Rive/Lottie/video for optional illustration/media, not primary Product proof.

## 8. Playback

There is no requirement for a Hero playback control or autoplay.

If a bounded demo is later implemented:

- start from a useful static Product frame;
- prefer user control when playback is non-essential;
- do not use endless autoplay as primary proof;
- autoplay and user-triggered playback are different behaviors and must not be silently treated as equivalent.

Any prototype timing is a design parameter, not a scientific constant.

## 9. Motion grammar

Use motion to indicate:

- continuity of the same communication item;
- one new piece of evidence arriving;
- a material change in whether the user needs to act;
- hierarchy/focus;
- direct response to user action.

Prefer opacity, restrained transform and limited layout interpolation.

Avoid:

- simultaneous unrelated motion;
- spring/bounce everywhere;
- large zooms;
- permanent background motion;
- marquees/typewriter effects for ordinary content;
- abstract icon conveyor belts;
- motion that changes reading order or steals focus;
- decorative movement whose purpose is merely to look `AI` or `cinematic`.

## 10. Object continuity

Where the same matter changes from quiet monitoring to attention-required, preserve visual identity where practical.

The visitor should perceive:

> `the same unresolved matter changed`

not:

> `one marketing card disappeared and another appeared`.

## 11. Scroll motion

Most sections should work perfectly while static.

No scroll-jacking.

Subtle reveal may be progressive enhancement but cannot be required for content order or comprehension.

## 12. Reduced motion

`prefers-reduced-motion: reduce` is a first-class acceptance path.

- suppress non-essential translation/zoom/parallax;
- use instant/minimal state change where needed;
- preserve every piece of information;
- use explicit static before/after states when helpful.

The no-motion version must not be a degraded explanation.

## 13. Interaction accessibility

Motion must never:

- move keyboard focus unexpectedly;
- hide focus indication;
- make required controls available only during an animation frame;
- use color/motion alone for semantic state;
- imply an unconfirmed external effect.

## 14. Performance

- motion must not block initial Product/category recognition;
- prefer compositor-friendly properties;
- hydrate only where actual interaction exists;
- preserve stable dimensions to avoid CLS;
- test desktop/mobile/reduced-motion/static-before-hydration states when motion exists.

## 15. Evidence boundary

General HCI evidence supports only that motion can help or harm depending on task/context. It does not prove animated landing-page Heroes convert better.

Current Lunowa evidence is internal structured audit, not independent user evidence.

Therefore:

- accessibility and static comprehension are hard requirements;
- motion is conditional, not a feature requirement;
- `no motion` is a fully valid final outcome;
- never claim motion improves comprehension/conversion until direct evidence exists.
