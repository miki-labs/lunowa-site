# Lunowa Reuse Stack Audit — 2026-08-29

Status: dated evidence/audit supplement for reuse-first design and implementation. This file is not Product authority. Re-check vendor versions/licensing immediately before M20 implementation.

## Executive conclusion

The strongest current path is **code-owned reuse**, not hosted-template lock-in and not bespoke raster-first design.

For Lunowa, generic web mechanics should preferentially come from locally copied/open primitives and blocks that can live inside the repository and be audited. Hosted visual builders remain useful for exploration, but should not become a production dependency unless they materially outperform the code-owned path and the architecture contract is explicitly changed.

Current preferred hierarchy:

```text
native semantic HTML/CSS
→ shadcn/ui + Base UI primitives
→ audited open shadcn registries/blocks (notably 7Ovr/Tailark families)
→ Tailwind Plus when licensed and materially better
→ Relume structural/reference discovery
→ optional Webflow DevLink experiment for a specific visual-to-React need
→ custom Lunowa component
```

Figma remains a preferred editable design surface when write access exists, but is not a hard dependency. Image generation is not a precise webpage-layout authority.

## 1. Production foundation

### Astro + Tailwind CSS 4 remains a strong fit

Astro's current styling documentation supports Tailwind 4 through the official Vite plugin path (`astro add tailwind`) and explicitly distinguishes it from legacy Tailwind 3 integration. This supports the existing static-first architecture without adding a hosted design runtime.

Sources:
- https://docs.astro.build/en/guides/styling/
- https://tailwindcss.com/docs/theme

Implication:
- ordinary marketing sections remain Astro/static HTML by default;
- React hydration is reserved for real interaction;
- Tailwind 4 theme variables/CSS variables are the implementation token layer.

## 2. shadcn/ui + Base UI is the default app-primitive layer

shadcn/ui officially supports Astro project setup. Since July 2026, new shadcn projects default to Base UI while Radix remains supported.

The Base UI referenced by shadcn is the MIT-licensed `mui/base-ui` project. Its current v1.6 line includes accessibility/keyboard/focus fixes and is explicitly intended for accessible unstyled React components.

Sources:
- https://ui.shadcn.com/docs/installation
- https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default
- https://github.com/mui/base-ui
- https://github.com/mui/base-ui/blob/master/CHANGELOG.md

Important naming caution:
- unrelated products also use the name "Base UI"; provenance must bind to `@base-ui/react` / `mui/base-ui`, not a similarly named commercial registry.

Implication:
- use shadcn/Base UI for dialog/sheet/disclosure/sidebar/form mechanics inside the Product proof where needed;
- do not import stock dashboard information architecture as Lunowa Product design.

## 3. Open shadcn registries materially reduce the need for paid marketing kits

The official shadcn registry directory currently exposes hundreds of third-party registries and explicitly warns that community code must be reviewed locally.

Two current candidates are especially compatible with the chosen direction:

### 3.1 7Ovr

- listed in the official shadcn registry directory;
- built on Base UI;
- free blocks install through the shadcn CLI as local source;
- docs state compatibility with React frameworks including Astro;
- free blocks are MIT-0 licensed according to its current docs;
- includes marketing families such as Hero, header, features, CTA, FAQ and footer.

Sources:
- https://ui.shadcn.com/docs/directory
- https://7ovr.com/docs
- https://7ovr.com/

Use:
- first free/open candidate for generic marketing section mechanics;
- install only individually audited blocks, never a whole template by default.

### 3.2 Tailark open-source registry

- open-source shadcn marketing blocks;
- Base UI registry is now the default, with a separate Radix path;
- MIT licensed;
- installs through a shadcn registry namespace as local code.

Source:
- https://github.com/tailark/blocks

Use:
- secondary open-source structural source when 7Ovr/native patterns do not fit;
- audit all dependencies and decorative defaults before adoption.

### 3.3 Launch UI

- MIT licensed landing-page kit;
- current v2 line supports Tailwind 4 / React 19;
- built on shadcn/ui;
- useful as a pattern/reference source.

Source:
- https://github.com/launch-ui/launch-ui

Use:
- reference or selective source only; it is Next-oriented and includes visual patterns that may be too decorative for Lunowa.

Decision:

Open registries should come **before** Tailwind Plus in the default search order because they preserve code ownership without requiring a paid license. Tailwind Plus remains a premium quality benchmark/source when a valid license exists and its block is materially better.

## 4. Tailwind Plus remains the premium benchmark, not a requirement

Current Tailwind Plus offers 500+ professionally designed components, including 12 Hero sections, 11 CTA sections, 7 FAQ families and 7 footer families. Current docs target the latest Tailwind 4 line and provide React, Vue and HTML examples.

Its commercial license allows use in SaaS/end products but prohibits redistributing the components as a component/template library. HTML interactive examples use the licensed Tailwind Plus Elements runtime; React examples use Headless UI/Heroicons.

Sources:
- https://tailwindcss.com/plus
- https://tailwindcss.com/plus/ui-blocks
- https://tailwindcss.com/plus/ui-blocks/documentation/using-html
- https://tailwindcss.com/plus/ui-blocks/documentation/using-react
- https://tailwindcss.com/plus/license

Decision:
- do not make purchase/license a project blocker;
- use if licensed and the selected block materially saves design/engineering work;
- prefer static markup adaptation for ordinary non-interactive sections;
- do not add Tailwind Plus Elements merely to power an FAQ if native `<details>` or a local Base UI disclosure is adequate.

## 5. Relume remains discovery-first

Relume's July 2026 Library MCP gives AI editors access to 1,000+ real components as editable code and specifically positions the workflow as avoiding model-guessing of generic UI.

This is strongly aligned with Lunowa's reuse-first principle.

Source:
- https://community.relume.io/x/announcements/msg_QzLmoAqEk1Lp/introducing-the-relume-library-mcp-seamless-access

However, current public React integration material has compatibility/history that still requires per-component verification against Astro/Tailwind 4.

Decision:
- use Relume primarily for search, structure and comparison;
- copy code only after exact dependency/license/accessibility review;
- do not install a broad Relume runtime/preset by default.

## 6. Webflow became more technically relevant in 2026, but not the default

Webflow DevLink now supports both directions between visual components and React code. In April 2026, DevLink Export v1.19 added a static self-contained local export of Webflow components as React/TSX, with no build-time connection to Webflow. Current docs describe exportable components as local React code and support external React frameworks.

Sources:
- https://developers.webflow.com/devlink/reference/overview
- https://developers.webflow.com/devlink/docs/component-export
- https://developers.webflow.com/home/changelog/2026/4/28

This changes Webflow from "hosted builder only" to a plausible **optional visual-to-React compiler/design surface**.

But it is not the Lunowa default because:
- exported components carry Webflow primitives/scoped CSS rather than the Tailwind token system;
- using Webflow plus Tailwind risks two design/style systems;
- paid plan/Workspace requirements add tooling cost;
- whole-site code export still excludes CMS/forms/localized content/code-component functionality;
- the existing Astro/Tailwind/Cloudflare path remains simpler for a small marketing site.

Decision:
- retain as an experiment option only if a specific section proves substantially faster/better to compose visually there;
- any experiment must compare generated code quality, JS/CSS weight, Astro integration, accessibility and editability against the local shadcn/Tailwind path before adoption.

## 7. Framer production portability is currently vendor-documentation-ambiguous

Current official Framer Help contains materially contradictory statements:

1. `Can I export my website to HTML and self-host it?` (updated 2026-08-07) says HTML/self-host export is not supported and recommends Framer hosting.
2. `Porting your data from Framer` currently says a full site can be downloaded as HTML/CSS/JS/assets and hosted elsewhere.

Sources:
- https://www.framer.com/help/articles/can-i-export-my-website-to-html-and-self-host-it/
- https://www.framer.com/help/articles/porting-your-data-from-framer/

Because both are first-party and conflict, do not rely on either interpretation for an architecture decision without direct product verification or clarified vendor documentation.

Decision:
- Framer remains a visual/template/reference ecosystem;
- do not make it a production or migration dependency until this contradiction is resolved experimentally/officially.

## 8. Figma is strategically strong but not a hard dependency

Figma's 2026 direction materially strengthens design↔code workflows:

- Codex-to-Figma MCP workflow was announced in February 2026;
- Figma Make can work with local production code (beta direction announced May 2026);
- Config 2026 introduced code layers, allowing interactive code to live on the design canvas and convert back toward editable design layers.

Sources:
- https://www.figma.com/blog/introducing-codex-to-figma/
- https://www.figma.com/blog/figma-make-now-on-your-local-code/
- https://www.figma.com/blog/config-2026-recap/

The currently connected Lunowa account was observed as Starter / View seat, so the repository must not require Figma writes to progress.

Decision:
- use Figma when write access is available;
- otherwise preserve equivalent structured authority in code/docs/tokens and rendered browser references.

## 9. Design-token authority should be vendor-neutral

The Design Tokens Community Group published its first stable Design Tokens specification (2025.10). The group states that the core format is stable for production use and notes adoption by tools including Figma, Penpot, Sketch and token tooling.

Tailwind 4 independently exposes design decisions as CSS theme variables using `@theme`.

Sources:
- https://www.designtokens.org/TR/2025.10/format/
- https://www.designtokens.org/faq/
- https://tailwindcss.com/docs/theme

Decision:
- M10 should define a small vendor-neutral token source for semantic colors, spacing, radius, typography and motion where useful;
- implementation should compile/project those tokens into Tailwind 4/CSS variables;
- do not over-engineer a large enterprise token pipeline before Lunowa has enough design surface to justify it.

## 10. Motion remains optional semantic infrastructure

Motion for React currently provides site-level `reducedMotion` and `useReducedMotion`, including disabling transform/layout animation while preserving safer properties such as opacity.

Sources:
- https://motion.dev/docs/react-accessibility
- https://motion.dev/docs/react-motion-config

Decision:
- no decorative motion library is needed for generic marketing sections;
- Motion is admitted only for the accepted Lunowa temporal proof or interaction feedback.

## 11. Revised approved search order

For ordinary implementation needs:

```text
1. existing accepted Lunowa primitive
2. native semantic HTML/CSS
3. shadcn/ui + Base UI primitive
4. audited open shadcn registry block
   - 7Ovr first candidate
   - Tailark secondary candidate
   - Launch UI/reference where useful
5. Tailwind Plus if licensed and materially superior
6. Relume structural/reference candidate
7. optional Webflow DevLink proof for a specific difficult visual-to-code need
8. custom implementation
9. decorative/effect libraries only by explicit exception
```

Each installed community block is untrusted until code, dependencies, license, accessibility, responsive behavior and Product semantics are locally verified.

## 12. What this means for Lunowa now

Do **not** continue generating bespoke homepage raster variants.

Next design work should:

1. establish the minimal semantic token system;
2. choose generic shell blocks from native/shadcn/open registries;
3. create the Product Proof and Editorial Problem-First stimuli with the **same generic shell system**, changing the actual acquisition hypothesis rather than gratuitous style;
4. custom-design only the Lunowa Product proof and state semantics;
5. render in a real browser as early as possible once implementation is authorized;
6. freeze only after comprehension evidence and full visual/truth audit.

The project should be conventional where convention saves cognition and engineering, and custom only where Lunowa has genuinely distinctive meaning.