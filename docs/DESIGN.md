# Lunowa Marketing Visual Contract

Status: canonical visual direction for the initial marketing site, 2026-08-30.

Read `docs/VISITOR-JOURNEY.md` before visual work.

## 1. Design thesis

The site should feel like **Quiet Product Proof**:

- familiar enough to orient instantly;
- quiet enough to preserve attention;
- concrete enough that a first-time visitor can recognize what the Product does without decoding internal terminology;
- distinctive through Product behavior, typography, spacing, copy, and timing rather than decorative novelty;
- premium through precision, restraint, hierarchy, and believable Product proof.

The page is not a generic AI landing page, not an infographic about Lunowa's internal state machine, and not an art experiment.

`Calm Product Cinema` may describe the restrained temporal storytelling used inside specific Product demonstrations; it is no longer the overall visual style thesis.

## 2. Visual priorities

In descending order:

1. first-glance category and Product comprehension;
2. Product proof;
3. relevance / self-recognition;
4. trust;
5. action clarity;
6. brand distinctiveness;
7. delight.

Decoration must never outrank comprehension or proof.

### 2.1 Subtractive quality principle

For the initial homepage, optimize **downside prevention before delight maximization**.

The page is normally scanned quickly rather than studied as an art object. A single material failure — unclear category, suspicious claim, slow/unstable loading, cramped mobile layout, unreadable text, misleading CTA, visual noise, or generic template/AI decoration obscuring Product proof — can outweigh several decorative positives.

Use this quality stack:

#### Tier 0 — veto failures

Must not ship:

- wrong or unclear Product mental model;
- unsupported capability/security/performance/social-proof claim;
- broken or misleading CTA;
- unreadable/low-contrast essential text;
- horizontal overflow or materially broken mobile/reflow behavior;
- Product proof that looks fake, contradictory, or detached from Product truth;
- essential meaning dependent on animation;
- obvious loading/layout instability introduced for decoration;
- generic AI visual treatment that dominates the Product.

#### Tier 1 — hygiene quality

Must feel ordinary in the best sense:

- recognizable software-site structure;
- clear hierarchy and descriptive headings;
- fast scanning;
- restrained spacing/color/depth;
- accessible controls and visible focus;
- stable, fast, responsive rendering;
- familiar interaction patterns;
- truthful availability and trust language.

#### Tier 2 — necessary differentiation

Spend custom design effort here:

- believable Lunowa Product UI;
- `reply != outcome complete`;
- quiet monitoring while the user is not needed;
- material outcome -> attention return;
- concise return context and Source access;
- wording/timing that makes attention delegation concrete.

#### Tier 3 — optional delight

Only after Tiers 0–2 are strong:

- subtle motion;
- small microinteractions;
- refined depth/typographic craft;
- non-essential visual flourish.

Tier 3 must be removable without damaging comprehension, trust, performance, accessibility, or brand coherence.

The target is **not the most impressive homepage**. The target is a homepage with no obvious reason to distrust, misunderstand, struggle with, or leave — plus one memorable Product proof that explains why Lunowa is different.

## 3. Composition

Use a familiar high-trust marketing structure guided by visitor questions:

`Header -> Hero + real Product proof -> familiar problem -> distinction -> safe delegation -> return/context -> Trust -> availability/FAQ -> CTA/Footer`.

Prefer full-width narrative bands with constrained inner content.

Cards are for genuine repeated items, interactive Product surfaces, modals, or compact comparisons — not as default section containers.

Avoid card-inside-card composition and dashboard-card mosaics.

Each section gets one primary question, one dominant visual idea, and one takeaway/action.

## 4. Hero

The Hero must make Lunowa recognizable before it becomes impressive.

Required:

- strong product/brand signal;
- one clear H1;
- a short category/mechanism cue that reduces broad interpretations of the promise;
- one dominant CTA group;
- one large, believable Lunowa Product stage;
- the Product stage is understandable while static;
- hint of the next narrative beat where practical without overcrowding the first viewport.

Do not use an unexplained abstract state timeline as the primary Hero visual.

Do not use a generic split hero with marketing copy on one side and decorative media on the other unless direct comparison shows clearer comprehension.

Do not use a detached rounded `hero card` merely to frame media. Let the Product visual participate in one coherent first-screen composition.

## 5. Product visuals

The primary visual asset is believable Lunowa UI, not stock photography, abstract AI art, or marketing infographics.

Start from a recognizable concrete email situation:

- a real-looking request or thread;
- Lunowa visibly watching the unresolved outcome;
- an intermediate reply that changes evidence but not the user's need to act;
- continued quiet monitoring;
- material evidence arriving;
- the same item becoming attention-worthy;
- concise Moment / Source access.

Internal state labels such as Managed, Needs You, Moment may appear as authentic Product UI but must not be the only explanation.

The visitor should perceive one coherent object and one coherent story rather than a feature gallery.

## 6. Static-first comprehension

Every major Product visual must have a useful still state.

A visitor who does not see animation — because of fast scrolling, reduced motion, device constraints, disabled JavaScript, or preference — must still understand the section's point.

Animation may clarify causality and continuity; it may not rescue an otherwise ambiguous visual.

## 7. Color direction

Target character:

- warm or neutral near-white background as the primary candidate;
- near-black/deep-neutral primary text;
- restrained indigo/cobalt accent;
- calm blue for monitoring semantics;
- restrained amber for attention-required semantics;
- red reserved for genuine integrity/error states.

Avoid one-note purple-blue AI palettes, dominant neon glow, generic `AI dark mode`, decorative color blobs, or using the Lunowa name as an excuse for a literal giant moon/planet motif.

Dark sections are not forbidden in principle; they require a concrete narrative/contrast reason and must not recreate generic AI-SaaS visual priors.

All semantic states require text/icon redundancy; color alone is not meaning.

## 8. Shape / depth

- restrained radius;
- avoid universal pillification;
- subtle borders;
- light shadows only where spatial hierarchy needs them;
- avoid glassmorphism as a system-level style;
- avoid floating sections that look like disconnected dashboard cards;
- if removing a border/shadow/radius does not hurt interaction or understanding, prefer plain layout.

## 9. Typography

- prioritize Japanese readability and scanning;
- brand/product name must remain a meaningful first-screen signal;
- large type only for true Hero/section statements;
- compact Product UI uses correspondingly tighter utility typography;
- no negative letter-spacing tricks that harm Japanese or localization;
- layout must survive longer English/Spanish strings and browser zoom/text scaling;
- headings should communicate section meaning even when body copy is skipped.

## 10. Imagery / illustration

- Product UI is primary proof;
- generated imagery may support mood boards, OGP, campaigns, or secondary atmosphere;
- generated visual candidates are not trusted Product screenshots or claim authority;
- do not use generic stock-person photography merely to make the site look populated;
- no AI orb, bokeh blob, abstract brain, circuit-network cliché, decorative 3D planet, or meaningless futuristic object as the main visual anchor;
- illustration must do narrative work that the real Product UI cannot do more clearly.

## 11. Information density

The page should not feel sparse for its own sake. It should feel selective.

Each viewport should have a clear focal object. Supporting content recedes.

Do not give every text block, icon, border, and motion equal visual weight.

The first viewport must not become a feature inventory, stat strip, icon row, or miniature dashboard.

## 12. Responsive visual behavior

Mobile is not a scaled-down desktop.

- preserve visitor-question order;
- simplify the Product stage rather than shrinking it illegibly;
- reduce simultaneous content;
- keep category cue, CTA, and Product proof visible early;
- preserve semantic state distinctions;
- no horizontal overflow at 320 CSS px;
- target controls should be comfortably touchable;
- Product-motion narrative may become a small number of explicit steps rather than a cramped desktop simulation.

## 13. Anti-patterns

Reject by default:

- scroll-jacking;
- giant decorative 3D hero;
- autoplay cinematic video as the primary proof;
- endlessly moving logo marquees;
- typewriter effects for ordinary copy;
- decorative cursor followers;
- excessive parallax;
- permanent background particles;
- sections presented as dozens of rounded feature cards;
- abstract icon conveyor belts used to explain the core Product;
- visuals that imply functionality the Product does not have;
- invented screenshots detached from canonical Product semantics;
- visual-generated claims that have not been checked against Product/runtime authority;
- generic `premium AI SaaS` treatment based mainly on dark navy, purple glow, glass, planets/orbs, pills, and floating cards.

## 14. Rejected first visual direction

The first generated dark/cinematic candidate is **not** a canonical visual oracle.

Material reasons:

- generic AI-SaaS visual priors dominated the Product;
- the main story became an abstract icon/timeline infographic rather than recognizable Product use;
- first-glance category comprehension was weak;
- several visual choices directly contradicted this contract;
- generated marketing/security claims were not Product-authority-backed.

Preserve only its useful semantic storyboard:

`request -> monitoring -> intermediate reply -> still no user action -> material outcome -> attention required -> context/source`.

Do not cosmetically patch that image into the final direction; generate new candidates from the visitor-comprehension contract.

## 15. Quality bar

The desired impression is not `AI-generated website` and not `AI email app aesthetic`.

It should read as intentionally designed software marketing: immediately understandable, calm, exact, credible, and visually coherent with the Product's promise that attention is requested only when necessary.

Litmus checks:

1. Can a first-time visitor tell what category of work Lunowa handles without reading a long explanation?
2. Does the dominant visual show Product use rather than a metaphor for Product use?
3. Does the page still work if decorative glow/shadows are removed?
4. Can headings alone explain the story?
5. Does each section have one job?
6. Does motion clarify one material change instead of adding ambient activity?
7. Would the visual still feel distinct if the Lunowa logo were temporarily hidden because the Product behavior itself is distinctive?
8. Is there any obvious reason to distrust, misunderstand, wait for, struggle with, or abandon the page that can simply be removed?
