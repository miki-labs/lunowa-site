# M15 preview provenance

This candidate is a **first-party Lunowa implementation** of the current M10 structured visual authority.

## UI source

- No third-party marketing template, shadcn registry block, Tailark/7Ovr block, stock visual, generated Product screenshot, or copied component code is included.
- Ordinary mechanics use native semantic HTML/Astro and CSS.
- Lunowa-specific Product proof is custom markup derived from the canonical M10 Product story and token authority in this repository.

## Runtime/build dependencies

The M15 preview uses pinned development dependencies only:

- Astro — MIT
- Tailwind CSS / `@tailwindcss/vite` — MIT
- TypeScript — Apache-2.0
- ESLint — MIT
- `eslint-plugin-astro` — MIT
- `typescript-eslint` — MIT
- Playwright Test — Apache-2.0
- `@astrojs/check` — MIT
- `@types/node` — MIT

Versions are exact in `package.json` and resolved exactly by `pnpm-lock.yaml`.

## TypeScript compatibility decision

At implementation time, TypeScript 7.0.2 was the npm latest stable release, but the current `typescript-eslint` support window was `<6.1.0`. M15 therefore pins TypeScript 5.9.3 rather than intentionally running an unsupported lint/parser combination. This is a compatibility choice, not an assertion that 5.9.3 is npm latest.

## Authority boundary

This preview is not production, external user validation, final M10 owner approval, provider-availability proof, waitlist functionality, or ACP G7 acceptance.
