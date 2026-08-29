# Lunowa Marketing Site Architecture

Status: canonical initial architecture direction, 2026-08-29.

## 1. Goals

Optimize for:

1. correctness/trust;
2. low fixed operating cost;
3. fast static delivery;
4. small attack surface;
5. excellent accessibility/responsiveness;
6. easy AI-assisted implementation and verification;
7. future localization/SEO expansion without unnecessary backend complexity.

## 2. Repository boundary

`miki-labs/lunowa-site` is separate from the main Lunowa application repository.

Reasons:

- independent deployment lifecycle;
- avoid unrelated dependency/lockfile contention with Product engineering;
- keep marketing analytics/waitlist dependencies out of Product runtime;
- allow marketing iteration while Product implementation gates remain active.

Product semantics remain owned by `miki-thecat/lunowa`.

## 3. Frontend stack

Initial preferred stack:

- Astro — static-first page shell, routing, metadata, content composition;
- React — interactive islands only;
- Motion — semantic Product-demo transitions;
- Tailwind CSS 4 + CSS — visual implementation;
- TypeScript — strict implementation language;
- Playwright — browser/e2e/visual/accessibility-tree verification.

### 3.1 Static-first rule

Default to static HTML/CSS.

Use client-side JavaScript only where interactivity materially requires it.

Examples:

- Hero Product Story: React island, early hydration as needed;
- lower Product demo: `client:visible`/equivalent deferred hydration where appropriate;
- ordinary copy/SEO/FAQ content: static unless interaction truly needs JS.

Do not convert the marketing site into a full client SPA by default.

## 4. Hosting

Use **Cloudflare Workers Static Assets** for new production deployment unless a later evidence-backed task changes the provider.

Rationale:

- Cloudflare currently recommends Workers Static Assets rather than Pages for new projects;
- static assets are the default delivery path;
- CDN/TLS/DDoS/WAF ecosystem can be consolidated;
- minimal initial fixed cost.

The site must remain deployable as a predominantly static artifact.

## 5. Initial dynamic boundary

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

## 6. Waitlist data minimization

Store only what is needed for the current validation/early-access purpose.

Candidate fields, subject to an explicit waitlist contract:

- normalized email;
- locale;
- verification/status;
- created timestamp;
- first-party campaign attribution such as UTM source/campaign where justified;
- explicit research/contact consent flags where separately required.

Do not collect mailbox content, credentials, sensitive Product data, or broad profiling data in the marketing database.

## 7. Analytics

Start with low-complexity, low-privacy-cost measurement.

- Cloudflare Web Analytics may provide baseline traffic/Core Web Vitals-style visibility.
- Because basic analytics may not provide custom conversion/UTM behavior, waitlist submission may store first-party attribution fields.
- Add a product-analytics SDK only when a concrete experiment requires events that cannot be answered with existing evidence.

No tracking script should be added solely because it is conventional.

## 8. Security baseline

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

## 9. Domain architecture

Intended future public routing:

```text
lunowa.com        -> marketing site
app.lunowa.com    -> Lunowa application
```

Repository separation does not imply brand/navigation separation.

## 10. Localization

Initial site architecture must not hard-code Japanese assumptions into layout or motion.

Plan for at least Japanese and English structure; additional locales require evidence/priority but should not require a rewrite.

Requirements:

- locale-aware metadata/canonical/hreflang when enabled;
- layouts tolerate longer translated copy;
- Product screenshots/demos should use localized string data rather than baked video text where practical;
- locale is not a separate Product semantic implementation.

## 11. SEO

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

## 12. Dependency policy

Choose the simplest proven tool that meets the accepted requirement.

Do not add GSAP, Rive, Lottie, CMS, database platform, analytics platform, auth provider, or form SaaS preemptively.

Every recurring-cost or third-party dependency should answer:

1. what accepted requirement needs it?
2. why existing stack cannot satisfy that requirement adequately?
3. what privacy/security/availability/cost surface does it add?
4. what is the exit/migration path?

## 13. Cost policy

During validation/early beta, fixed marketing-site infrastructure cost should approach domain-renewal-only where practical without sacrificing trust or reliability.

Do not trade material security or data integrity for negligible savings. Once real traction/revenue makes paid reliability/features rational, upgrade deliberately rather than clinging to free tiers.

## 14. Repository governance

The repository currently starts with an unprotected `main`. That is acceptable only during control-plane bootstrap before implementation CI exists.

Before implementation candidates begin integrating routinely:

- create deterministic CI for required lint/type/build/test checks;
- use branch/PR-based implementation rather than direct feature edits on `main`;
- enable appropriate `main` protection / required status checks once those checks exist;
- require candidate evidence to bind to the exact PR head;
- do not let deployment credentials or production writes be available to untrusted pull-request code;
- coordinate serialized dependency/config assets when parallel agents are active.

Canonical control-plane corrections may be made deliberately by the owning planner, but production implementation must follow the review/verification path rather than bypassing it.