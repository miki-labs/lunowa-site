# Lunowa Motion Contract

Status: **2026-09-09 frontier rebaseline candidate**. This replaces the previous rule that Lunowa should generally stay still and that motion is optional polish only.

Read `docs/DESIGN.md`, `docs/HOMEPAGE.md`, `docs/VERIFICATION.md`, and current Product authority in `miki-labs/lunowa`.

## 1. Motion thesis

> **Motion may carry the brand story, but Product truth must survive without it.**

Lunowa may use cinematic, ambient, scroll-linked, stateful, or interactive motion when it makes the Product idea more memorable or understandable.

The reduced-motion/static path is a complete alternative presentation, not a downgraded afterthought.

## 2. Signature temporal idea

The strongest Product-native motion remains one unresolved matter moving through time:

```text
request sent
-> Lunowa carries monitoring
-> intermediate reply arrives
-> evidence changed, user still not needed
-> quiet time passes
-> material outcome arrives
-> attention returns
-> context + Source becomes available
```

The critical motion beat is the **non-escalation** after the intermediate reply. Something visibly changes, but the page deliberately does not behave like an alarm.

## 3. Brand motion

Brand motion may express:

- calm passage of time;
- quiet stewardship;
- lunar/night-to-dawn atmosphere;
- a rabbit/guide moving through the visual world;
- subtle water/mist/light movement;
- a continuous object crossing sections;
- controlled focus returning when attention is needed.

Ambient motion is allowed even when non-essential if it materially improves the brand experience and stays within performance/accessibility budgets.

## 4. Autoplay media

Muted autoplay video or animation is allowed for non-essential atmosphere when all apply:

- a useful poster/static frame exists;
- no audio autoplays;
- essential copy/UI is not baked only into the video;
- playback pauses or becomes cheap when offscreen/hidden where practical;
- mobile/network behavior is measured and may use a lighter asset;
- `prefers-reduced-motion` receives a static or materially reduced path;
- the media earns its bytes/decoding cost.

Do not autoplay long narrative video that a visitor must watch to understand Lunowa.

## 5. Scroll behavior

**No scroll-jacking** remains a hard rule: do not replace native scroll physics, trap users in forced steps, or make ordinary content inaccessible outside a precise scroll position.

Allowed:

- sticky/pinned visual stages;
- scroll-synchronized Product states;
- chapter/progress indicators;
- parallax/depth;
- video scrubbing;
- color/light/environment transitions;
- section reveals;
- continuous visual object movement.

Every pinned/sticky sequence needs a normal-flow mobile/reduced-motion alternative.

## 6. Technology selection

Choose per requirement.

### CSS / Web Animations / View Transitions

Use for local hover/state feedback, simple reveals, page/state continuity and lightweight effects.

View Transitions may be progressive enhancement where browser support is adequate.

### Motion

Use when a React island is already justified and DOM/Product state/layout animation benefits from its model. Prefer GPU-friendly transform/opacity/clip/filter paths when appropriate.

### GSAP / ScrollTrigger

Allowed for complex authored timelines, pinning, cross-section choreography or sequencing when it makes the implementation materially simpler and more controllable than bespoke observers/animation code.

Do not add GSAP merely because the site is visually ambitious.

### Native scroll-driven animations

Use as progressive enhancement only until target browser support is sufficient. Essential experience cannot depend on limited-availability APIs.

### Rive

Use for one or a small number of high-value interactive vector/brand objects when stateful animation/design ownership justifies the runtime/WASM cost. Prefer lighter runtime variants when feature needs allow.

### Canvas / OGL / Three / WebGL / shaders

Allowed for a signature visual that genuinely requires GPU-rendered particles, 3D, shader distortion, liquid/light effects, or interactive depth.

Rules:

- one strong centerpiece beats multiple canvases by default;
- lazy-load where possible;
- provide static fallback;
- cap DPR/resource use on mobile/low-power devices;
- stop/pause render loops when hidden/offscreen;
- do not put semantic Product UI only inside an inaccessible canvas.

### Lottie / SVG / video

Use when they are the most efficient representation of the accepted asset. Do not convert everything into JavaScript animation.

## 7. Product UI motion

Prefer real DOM for Product content that needs to remain selectable, accessible, responsive, and semantically inspectable.

Product transitions should preserve object identity where practical so visitors perceive:

> **the same unresolved matter changed**

not:

> a sequence of unrelated marketing cards.

Allowed Product animation:

- incoming evidence;
- status transition;
- focus/attention return;
- Moment/context expansion;
- Source reveal;
- attachment arrival;
- UI rearrangement that clarifies hierarchy.

Do not animate a send/completion/provider effect that Product truth has not established.

## 8. Timing and easing

Do not freeze branded durations before motion direction is selected.

Guidelines:

- UI feedback: fast and direct;
- editorial reveals: slower but never blocking;
- ambient world: slow enough not to demand attention;
- attention-return beat: clear, deliberate, not alarming unless actual Product urgency warrants it;
- avoid universal spring/bounce language.

After owner selects the motion language, derive a small duration/easing token set.

## 9. Reduced motion

`prefers-reduced-motion: reduce` is mandatory acceptance evidence.

Reduced-motion behavior should:

- disable or greatly reduce parallax, large translation, camera moves and looping non-essential movement;
- replace scrubbed/sticky temporal narratives with explicit stable states where needed;
- preserve all Product meaning and actions;
- keep focus/order unchanged;
- still look intentionally designed.

A static poster/illustration may replace video/WebGL/Rive atmosphere while Product UI remains live.

## 10. Accessibility and controls

- never move keyboard focus due to animation;
- visible focus cannot disappear behind moving layers;
- controls must not exist only during one animation frame;
- meaningful status must use text/icon/state, not motion/color alone;
- content that flashes/blinks or creates vestibular risk must be avoided;
- where media is long/user-attention-consuming, provide appropriate pause/control behavior.

## 11. Performance budgets

Motion does not get a separate exemption from Core Web Vitals.

For each heavy visual, measure:

- transferred bytes;
- JS/WASM cost;
- main-thread/long tasks;
- LCP interaction;
- CLS;
- mobile CPU/GPU behavior;
- memory where canvas/WebGL is involved.

Prefer media/code-splitting and load the signature experience after the critical text/brand shell when this improves field performance without visible degradation.

## 12. Acceptance question

For every material animation ask:

> **If this motion disappeared, would the site lose an important part of its brand or Product story?**

If no, it must be extremely cheap/subtle or removed.

If yes, keep it only if reduced-motion, accessibility and performance paths are equally deliberate.
