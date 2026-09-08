# Lunowa Marketing Site Architecture

Status: **2026-09-09 architecture rebaseline candidate**. Hosting/data/security sections retain useful prior decisions, while frontend/rendering choices now follow the current M10 art direction rather than the withdrawn static-first visual thesis.

## 1. Goals

Optimize for:

1. Product correctness and trust;
2. owner-accepted visual fidelity / brand quality;
3. excellent accessibility and responsive behavior;
4. Core Web Vitals and bounded runtime/media cost;
5. small security/privacy attack surface;
6. low fixed operating cost where it does not damage the accepted experience;
7. AI-assisted implementation, browser verification and visual convergence;
8. future localization/SEO expansion without unnecessary backend complexity.

## 2. Repository boundary

`miki-labs/lunowa-site` is separate from the main Lunowa application repository.

Reasons:

- independent deployment lifecycle;
- avoid unrelated dependency/lockfile contention with Product engineering;
- keep marketing analytics/waitlist dependencies out of Product runtime;
- allow marketing research/design iteration while Product implementation gates remain active.

Product semantics remain owned by `miki-labs/lunowa`.

## 3. Execution / control-plane boundary

Marketing research, art-direction exploration, Figma/prototype work and isolated browser evidence may progress independently of Product implementation lanes.

Before production implementation, retry, review or merge, live-read the current site Issue/PR/CI and the current ACP authority/state when execution, concurrency, recovery or model routing is relevant. Do not preserve a historical `G7` gate in architecture prose as permanent authority when the live execution contract has moved.

ACP remains execution/recovery infrastructure only. It does not own Lunowa Product truth or site design decisions.

Design prototypes must remain isolated from production until the current M10 visual authority, task contract and exact-head review path permit promotion.

## 4. Frontend / rendering architecture

The production site should remain server/static-rendered for meaningful content and SEO, but **static-first is no longer a visual constraint**. Re-check stable versions and the accepted visual requirement immediately before implementation.

Current baseline candidates:

- Astro — page routing, metadata, server/static content composition and islands;
- TypeScript — strict implementation language;
- CSS / Tailwind CSS 4 where they improve implementation ergonomics;
- React islands only where real stateful interaction or a selected animation system benefits from them;
- Playwright — browser/e2e/visual/accessibility evidence;
- selected media/motion/runtime tools only when the accepted design requires them.

### 4.1 Progressive runtime rule

Ordinary text, navigation, metadata and SEO content should render without requiring a full client SPA.

The accepted art direction may justify client runtime for a signature experience, including Motion, GSAP, Rive/Lottie, video, canvas/OGL/Three/WebGL/shaders, or other scoped techniques. `docs/DESIGN.md` and `docs/MOTION.md` own that permission boundary.

For every runtime-heavy surface:

- preserve semantic HTML for essential Product/copy content;
- code-split/lazy-load non-critical runtime where useful;
- provide reduced-motion/static fallback;
- stop offscreen/hidden render loops where applicable;
- measure JS/WASM/media/font cost and mobile behavior;
- do not convert the whole site into a client SPA merely to support one visual effect.

The implementation architecture follows the owner-accepted visual target subject to hard gates; it does not force the target back into the old P/static template.

## 5. Hosting

Use **Cloudflare Workers Static Assets** for new production deployment unless a later evidence-backed task changes the provider.

Rationale:

- Cloudflare currently recommends Workers Static Assets rather than Pages for new projects;
- static assets are the default delivery path;
- CDN/TLS/DDoS/WAF ecosystem can be consolidated;
- minimal initial fixed cost.

The site must remain deployable as a predominantly static artifact.

## 6. Initial dynamic boundary

The only planned initial dynamic marketing endpoint is:

```text
POST /api/waitlist
```

Do not add a general application backend to the marketing site.

Expected future path when explicitly authorized:

```text
browser
-> Turnstile token
-> Cloudflare Worker
-> server-side token verification
-> strict input validation
-> rate limiting / abuse controls
-> D1 waitlist record
-> optional Resend verification/confirmation mail
```

## 7. Waitlist data minimization

Store only what is needed for the current validation/early-access purpose.

Candidate fields, subject to an explicit waitlist contract:

- normalized email;
- locale;
- verification/status;
- created timestamp;
- first-party campaign attribution such as UTM source/campaign where justified;
- explicit research/contact consent flags where separately required.

Do not collect mailbox content, credentials, sensitive Product data, or broad profiling data in the marketing database.

## 8. Analytics

Start with low-complexity, low-privacy-cost measurement.

- Cloudflare Web Analytics may provide baseline traffic/Core Web Vitals-style visibility.
- Because basic analytics may not provide custom conversion/UTM behavior, waitlist submission may store first-party attribution fields.
- Add a product-analytics SDK only when a concrete experiment requires events that cannot be answered with existing evidence.

No tracking script should be added solely because it is conventional.

## 9. Security baseline

At minimum:

- HTTPS only;
- DNSSEC when domain is connected;
- no secrets in repository/client bundles;
- Cloudflare secret bindings for runtime credentials;
- strict validation on any dynamic endpoint;
- server-side Turnstile verification if Turnstile is used;
- rate limiting/abuse controls for write endpoints;
- Content Security Policy designed around actual asset/script needs;
- HSTS after deployment/cutover is validated;
- `X-Content-Type-Options: nosniff`;
- appropriate `Referrer-Policy`;
- restrictive `Permissions-Policy`;
- anti-framing via CSP `frame-ancestors` where appropriate;
- dependency minimization and lockfile review.

The safest default is no dynamic endpoint and no third-party script unless required.

## 10. Domain architecture

Intended future public routing:

```text
lunowa.com        -> marketing site
app.lunowa.com    -> Lunowa application
```

Repository separation does not imply brand/navigation separation.

## 11. Localization

Initial site architecture must not hard-code Japanese assumptions into layout or motion.

Plan for at least Japanese and English structure; additional locales require evidence/priority but should not require a rewrite.

Requirements:

- locale-aware metadata/canonical/hreflang when enabled;
- layouts tolerate longer translated copy;
- Product screenshots/demos should use localized string data rather than baked video text where practical;
- locale is not a separate Product semantic implementation.

## 12. SEO

Server/static-render meaningful content.

Required eventual baseline:

- semantic headings;
- unique title/description;
- canonical URLs;
- sitemap/robots;
- Open Graph/social metadata;
- Organization/WebSite structured data only where accurate;
- meaningful internal navigation;
- no important marketing copy hidden behind client-only rendering.

## 13. Dependency policy

Choose the simplest proven tool that meets the accepted requirement.

Do not add GSAP, Rive, Lottie, CMS, database platform, analytics platform, auth provider, or form SaaS preemptively.

Every recurring-cost or third-party dependency should answer:

1. what accepted requirement needs it?
2. why existing stack cannot satisfy that requirement adequately?
3. what privacy/security/availability/cost surface does it add?
4. what is the exit/migration path?

## 14. Cost policy

During validation/early beta, fixed marketing-site infrastructure cost should approach domain-renewal-only where practical without sacrificing trust or reliability.

Do not trade material security or data integrity for negligible savings. Once real traction/revenue makes paid reliability/features rational, upgrade deliberately rather than clinging to free tiers.

## 15. Repository governance

The repository currently starts with an unprotected `main`. Direct canonical-document edits are permitted only during this pre-implementation bootstrap/research phase by the owning planner.

Before implementation candidates begin integrating routinely after ACP G7:

- create deterministic CI for required lint/type/build/test checks;
- use the accepted control-plane / branch / PR implementation path rather than direct feature edits on `main`;
- enable appropriate `main` protection / required status checks once those checks exist;
- require candidate evidence to bind to the exact PR head;
- do not let deployment credentials or production writes be available to untrusted pull-request code;
- coordinate serialized dependency/config assets when parallel agents are active.

Canonical control-plane corrections may be made deliberately by the owning planner during bootstrap, but production implementation must follow the review/verification path rather than bypassing it.