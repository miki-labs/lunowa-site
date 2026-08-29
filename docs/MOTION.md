# Lunowa Motion Contract

Status: canonical marketing-site motion direction, 2026-08-29.

Read `docs/VISITOR-JOURNEY.md`, `docs/FIRST-IMPRESSION-VALIDATION.md`, and `docs/HERO-CONCEPTS-M05.md` before motion work.

## 1. Motion thesis

Lunowa should not be an animation-heavy website.

> **The page stays still. Product meaning moves.**

Motion exists to explain state, causality, continuity, and interaction feedback. It is not a substitute for category recognition, Product proof, copy, or visual design.

The Product must remain understandable without motion.

## 2. Signature temporal proof

The primary motion story is one unresolved communication loop:

```text
user requests a quotation
-> Lunowa visibly watches the unresolved result
-> intermediate reply/evidence arrives
-> user still does not need to act
-> quiet interval
-> material outcome evidence arrives
-> user attention becomes necessary
-> concise context/source is revealed
```

Internal Product state labels may map to this sequence, but the visitor should not need to know them first.

The most important beat is **intermediate reply -> still no user action required**. A reply is observed without creating unnecessary attention.

## 3. Static-first requirement

Every animated Product story begins from a meaningful static frame.

The static frame must already answer:

- what kind of communication matter is being watched;
- what Lunowa is currently doing;
- whether the user needs to act now.

Motion may add temporal proof, but may not be necessary to decode the Product category or core benefit.

If a still screenshot of the Hero looks like an unexplained diagram, motion design has already failed.

## 4. M05 evidence boundary

Do not evaluate motion while also changing the Hero's information architecture if the variables can be isolated.

Current M05 sequence:

1. compare A/C/D as static structures;
2. eliminate structures that repeatedly create the wrong mental model;
3. apply B motion to an eligible static structure while keeping content/layout stable as practical;
4. compare static vs motion evidence for the temporal mechanism;
5. treat autoplay vs user-triggered playback as an additional playback-policy question, not as interchangeable exposure.

This is directional qualitative evidence, not a statistically powered claim that motion improves conversion.

## 5. Implementation model

The primary Product demonstration must be implemented as real UI state transitions, not a pre-rendered Hero video.

React owns demo state. Motion/CSS owns visual interpolation.

Conceptual internal states may include:

- `request`
- `managed`
- `intermediateEvidence`
- `stillManaged`
- `outcomeEvidence`
- `needsYou`
- `moment`

These are implementation/storyboard concepts, not copy the visitor must memorize.

Animation code must not become a second Product semantic authority.

## 6. Preferred tools

- CSS transitions/keyframes: small hover/focus/fade/reveal effects.
- Motion for React: Product state/layout transitions, presence, sequencing.
- Native browser transitions/scroll-driven animation: progressive enhancement where simpler and robust.
- GSAP: only if a later verified requirement cannot reasonably be achieved with the simpler stack.
- Rive/Lottie/video: optional brand/illustration media, not primary Product proof.

## 7. Hero playback

The current initial B hypothesis is **user-controlled playback** applied to a meaningful static Product frame.

Example control:

`▶ 15秒で見る`

A bounded first-play/autoplay treatment may be tested later, but it must be a separately recorded condition. Do not infer that autoplay is better merely because motion exists.

No motion treatment may be required for basic Product/category comprehension.

Do not use an endless autoplay loop as the default proof.

Possible prototype timing only:

```text
0s   meaningful Product frame already visible
2s   intermediate reply arrives
4s   Lunowa remains in quiet monitoring / no action required
7s   short quiet hold
9s   material evidence arrives
11s  user-attention state appears
13s  concise context/source reveal
15s  stop
```

The previous 20+ second explanatory sequence is not the preferred starting point because a first-time visitor should not need to watch a long state-machine lesson to understand the Product.

Timing values are prototype starting points, not scientific constants.

## 8. Motion grammar

Use motion to indicate:

- continuity of the same communication item across states;
- one new piece of evidence arriving;
- a material change in whether the user needs to act;
- hierarchy/focus;
- direct response to user action.

Prefer:

- opacity;
- transform;
- restrained layout interpolation;
- one focal movement at a time.

Avoid:

- simultaneous unrelated motion;
- bounce/spring everywhere;
- large zooms;
- permanent background motion;
- scrolling text/marquees;
- abstract icon conveyor belts;
- motion that changes reading order or steals focus;
- decorative movement whose only purpose is to make the site look `AI` or `cinematic`.

## 9. Object continuity

Where the same tracked matter changes from quiet monitoring to user-attention state, preserve visual identity where practical.

The visitor should perceive:

> `the same unresolved matter changed in a meaningful way`

not:

> `one marketing card disappeared and a different card appeared`.

## 10. Scroll motion

Most sections should work perfectly while static.

Allowed reveal is subtle and non-essential. Scroll-driven storytelling is allowed only when it clarifies a Product mechanism and ordinary document scrolling remains under user control.

No scroll-jacking.

A lower section may continue the same scenario, but it must not require the visitor to remember an animation frame that has already scrolled away.

## 11. Reduced motion

`prefers-reduced-motion: reduce` is a first-class acceptance path.

For reduced-motion users:

- suppress non-essential translation/zoom/parallax;
- use instant or minimal opacity/state changes;
- preserve every piece of information;
- provide static before/after or explicit step states where needed.

The no-motion version must not be a degraded explanation.

## 12. Interaction accessibility

Motion must never:

- move keyboard focus unexpectedly;
- conceal focus indication;
- make a required control available only during an animation frame;
- use color/motion alone to communicate semantic state;
- create a blind duplicate action or imply an unconfirmed external effect.

## 13. Performance

- animation must not block initial content or Product recognition;
- prefer compositor-friendly properties;
- lazy-hydrate lower-page interactive islands when appropriate;
- stable dimensions prevent CLS during state transitions;
- visual testing must cover desktop, mobile, reduced-motion, and static-before-hydration states.

## 14. Scientific/evidence boundary

Current HCI evidence supports the bounded statement that motion/animation design can affect experience and comprehension in particular tasks, but motion can also add cognitive burden. It does **not** prove that an animated landing-page Hero universally converts better than a static one.

Therefore the static-vs-motion choice for Lunowa is an experiment, while accessibility and basic static comprehension are hard requirements.

## 15. Acceptance question

A motion is justified only if at least one is true:

1. it makes the temporal `reply != outcome completion` distinction easier to understand;
2. it preserves object continuity;
3. it gives necessary interaction feedback;
4. it directs attention to the one material change.

If none is true, remove it.