# Lunowa Motion Contract

Status: canonical marketing-site motion direction, 2026-08-29.

## 1. Motion thesis

Lunowa should not be an animation-heavy website.

> **The page stays still. Product meaning moves.**

Motion exists to explain state, causality, continuity, and interaction feedback. It is not a substitute for visual design.

## 2. Signature motion

The primary motion story is one unresolved communication loop:

```text
request
-> Managed
-> intermediate reply/evidence
-> still Managed
-> quiet interval
-> material outcome evidence
-> Needs You
-> Moment
```

The most important beat is **intermediate reply -> still Managed**. A reply is observed without creating unnecessary attention.

## 3. Implementation model

The animation must be implemented as real UI state transitions, not a pre-rendered Hero video.

React owns demo state. Motion/CSS owns visual interpolation.

Conceptual states:

- `request`
- `managed`
- `intermediateEvidence`
- `stillManaged`
- `outcomeEvidence`
- `needsYou`
- `moment`

Animation code must not become a second Product semantic authority.

## 4. Preferred tools

- CSS transitions/keyframes: small hover/focus/fade/reveal effects.
- Motion for React: Product state/layout transitions, presence, sequencing.
- Native browser transitions/scroll-driven animation: progressive enhancement where simpler and robust.
- GSAP: only if a later verified requirement cannot reasonably be achieved with the simpler stack.
- Rive/Lottie/video: optional brand/illustration media, not primary Product proof.

## 5. Hero playback

Preferred initial behavior:

- Hero and Product stage render meaningful static content immediately.
- Do not delay LCP for animation code.
- Prefer user-triggered `15秒で見る` / replay control over an endless autoplay loop.
- If a short automatic first-play is later tested, it must stop, remain comprehensible without motion, and provide pause/replay controls where required.

Illustrative timing, subject to visual testing:

```text
0s   meaningful static Hero already visible
2s   request becomes the active evidence
4s   Managed state settles
7s   intermediate reply arrives
9s   Still Managed / no attention required
12s  quiet hold
15s  material evidence arrives
17s  Needs You transition
19s  Moment opens
23s  stop
```

Timing values are prototype starting points, not scientific constants.

## 6. Motion grammar

Use motion to indicate:

- continuity of the same item across states;
- evidence arrival;
- state transition;
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
- motion that changes reading order or steals focus.

## 7. Object continuity

Where the same tracked item changes from Managed to Needs You, preserve visual identity where practical. The visitor should perceive `the same unresolved item changed state`, not `one card disappeared and another unrelated card appeared`.

## 8. Scroll motion

Most sections should work perfectly while static.

Allowed default reveal is subtle and non-essential. Scroll-driven storytelling is allowed only when it clarifies a Product mechanism and ordinary document scrolling remains under user control.

No scroll-jacking.

## 9. Reduced motion

`prefers-reduced-motion: reduce` is a first-class acceptance path.

For reduced-motion users:

- suppress non-essential translation/zoom/parallax;
- use instant or minimal opacity/state changes;
- preserve every piece of information;
- provide a static stepper/sequence for the Product story where needed.

The no-motion version must not be a degraded explanation.

## 10. Interaction accessibility

Motion must never:

- move keyboard focus unexpectedly;
- conceal focus indication;
- make a required control available only during an animation frame;
- use color/motion alone to communicate semantic state;
- create a blind duplicate action or imply an unconfirmed external effect.

## 11. Performance

- animation must not block initial content;
- prefer compositor-friendly properties;
- lazy-hydrate lower-page interactive islands when appropriate;
- stable dimensions prevent CLS during state transitions;
- visual testing must cover at least desktop, mobile, and reduced-motion states.

## 12. Acceptance question

A motion is justified only if at least one is true:

1. it makes a state relationship easier to understand;
2. it preserves object continuity;
3. it gives necessary interaction feedback;
4. it directs attention to the one material change.

If none is true, remove it.