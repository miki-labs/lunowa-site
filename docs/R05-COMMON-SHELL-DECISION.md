# R05 Common Shell Decision — 2026-08-30

Status: design-system/reuse decision. This is not production-code authorization and does not supersede Product truth in `miki-thecat/lunowa`.

## 1. Decision

Use a **single familiar, code-owned generic shell** for M05 P/E stimuli and later M10 convergence. Do not compare P/E using unrelated template aesthetics.

Current shell thesis:

- native/Astro-first document structure;
- centered or near-centered Hero copy;
- one dominant large Product-proof stage immediately after/within the Hero;
- editorial full-width narrative bands below the Hero rather than card walls;
- simple CTA, FAQ and footer patterns;
- interactive primitives only where semantics require them;
- no decorative animation dependency.

The shell should look conventional enough to be immediately legible as a modern software product site. Lunowa-specific distinctiveness belongs in Product proof, state semantics, copy, typography/spacing/color tuning and any accepted temporal behavior.

## 2. Why this shell

Current evidence from mature component ecosystems converges on the same useful primitives:

- Tailwind Plus exposes dedicated Hero, Content, CTA, FAQ, Header and Footer families and treats examples as customizable blueprints rather than a rigid runtime kit;
- 7Ovr provides source-owned shadcn/Base UI marketing blocks and a free SaaS landing template whose useful structural subset is Header + Hero + FAQ + CTA + Footer;
- Tailark provides multiple OSS marketing kits and explicitly recommends choosing one kit/theme rather than mixing unrelated themes;
- Astro renders framework components to static HTML by default unless a `client:*` hydration directive is used, so React-source references can be adapted without shipping client JavaScript for static sections.

The decision is therefore **not** to install a full SaaS template. It is to reuse its proven structural grammar while keeping the implementation and visual authority local.

## 3. Selected generic pattern families

### Header

Preferred structure:

- Lunowa wordmark left;
- 1–3 plain anchor links maximum;
- one primary early-access CTA;
- mobile navigation kept minimal;
- no mega menu, announcement bar, floating-island morph, blur spectacle, search palette or scroll choreography.

Reference family:

- 7Ovr Header 1 / Header 3 as structural references only;
- Tailwind Plus simple header families as benchmark.

Implementation bias:

- native Astro/HTML first;
- only hydrate a mobile menu if a native/simple disclosure solution is insufficient.

### Hero shell

Preferred structure:

1. short category/mechanism cue;
2. one H1;
3. one short supporting sentence;
4. primary CTA, optional restrained secondary anchor;
5. **large Product-proof surface as the dominant visual**.

Reference family:

- 7Ovr free SaaS landing template's Hero 2 only as a structural reference;
- Tailwind Plus `Simple centered` / screenshot-oriented Hero families as benchmark;
- Relume Hero/Header library only for alternate spacing/composition reference.

Reject:

- logo-cloud-first Hero;
- decorative illustration as dominant proof;
- narrow generic right-side dashboard card that compresses the Lunowa story;
- hero bento grid;
- full-bleed photo/video background;
- orb/glow/beam/3D treatment.

### Editorial/problem narrative

Preferred structure:

- generous whitespace;
- large heading + concise paragraph;
- occasional full-width or sticky Product screenshot/state only when it advances the story;
- asymmetry permitted, but not card mosaics.

Reference family:

- Tailwind Plus Content Sections such as centered, split-with-image and sticky-product-screenshot patterns;
- Relume content sections for rhythm only.

### CTA

Preferred structure:

- simple centered/stacked CTA;
- no unsupported social proof, app-store badges, stats or decorative dark panel.

Reference family:

- 7Ovr CTA 1 family;
- Tailwind Plus simple stacked CTA as benchmark.

### FAQ

Preferred structure:

- only material visitor objections;
- plain visible Q&A if the list stays short;
- otherwise one accessible accordion.

Reference family:

- 7Ovr FAQ 3 family;
- Tailark FAQ patterns;
- Tailwind Plus centered accordion benchmark.

Implementation bias:

- native visible answers if practical;
- Base UI/shadcn Accordion only if disclosure interaction materially improves the page.

### Footer

Preferred structure:

- small semantic footer;
- only real destinations/legal links;
- no enterprise sitemap density or fake social channels.

Reference family:

- 7Ovr Footer 4 family;
- Tailwind Plus simple centered footer benchmark.

## 4. What is intentionally NOT selected

Do not adopt the complete 7Ovr SaaS landing template as a page because it includes generic SaaS sections Lunowa cannot truthfully justify today, including logo-cloud, stats, testimonials, pricing and broad feature/bento content.

Do not mix Tailark Mist/Dusk/Veil, 7Ovr defaults and Tailwind Plus styling section-by-section. A common shell must use one Lunowa token system.

Do not make Tailwind Plus purchase, Relume runtime, Figma write access, Webflow DevLink or Framer export a prerequisite.

## 5. Rendering/runtime rule

Generic static sections should be Astro/native markup whenever practical.

A React/shadcn source block may be used as:

1. structural/reference material;
2. build/server-rendered React with no `client:*` directive when no client interaction is required;
3. a hydrated island only when actual interaction requires it.

No block earns hydration because its source happened to be React.

## 6. Third-party source audit rule

Before installing any registry block:

- inspect the exact resolved item using `shadcn view` / dry-run/diff-equivalent workflow;
- record registry/source and exact retrieval reference or pinned revision where reproducibility matters;
- inspect `files`, targets, npm dependencies, devDependencies, registryDependencies and environment variables;
- reject unexpected network calls, analytics, auth, storage or large runtime dependencies;
- verify license at the exact source level;
- review accessibility and mobile behavior locally.

Official registry listing is discovery evidence, not code trust.

## 7. P/E experiment constraint

P and E must use this same generic shell/token grammar where practical.

### P — Product Proof Baseline

The Hero reaches the recognizable Lunowa Product surface immediately. The dominant proof is the concrete intermediate-reply state:

- `見積書を待っています`
- `社内確認中です。明日送ります。`
- `あなたの対応はまだ必要ありません`
- Lunowa continues monitoring.

### E — Editorial Problem-First Dark Horse

The first content foregrounds the user's recurring checking burden, but must connect to the same Product-proof shell quickly enough that it cannot be mistaken for a generic productivity/wellbeing product.

The comparison changes **acquisition/proof ordering**, not visual quality, component library or arbitrary color theme.

## 8. Acceptance before participant exposure

A P/E stimulus is not ready until:

- category/email recognition is plausible from the initial viewport;
- Product proof is believable and source-grounded;
- no unsupported product/security/pricing/social-proof claim is present;
- static meaning survives without animation;
- 320px/mobile layout remains conceptually viable;
- reused-source provenance is recorded;
- P/E share the common shell/token grammar sufficiently to make the comparison interpretable.

## 9. Current decision

For the next design pass, use **native/Astro-first shell + 7Ovr structural reference + Tailwind Plus/Relume/Tailark benchmarking**, rather than selecting a hosted builder or full template.

This is the current least-reinvention / least-lock-in / highest-control path.
