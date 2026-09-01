# M15 local verification evidence

This candidate is a reversible, non-production M15 preview. It is not M10 owner approval, production implementation, user validation, or ACP G7 acceptance.

## Commands

```sh
npm install
npm run check
npm run evidence
```

`npm run evidence` starts the local Astro server and captures these exact browser artifacts into `evidence/`:

- `desktop-1440x900.png`
- `desktop-full-page.png`
- `tablet-768x1024.png`
- `mobile-390x844.png`
- `reflow-320.png`

The test also asserts the single H1 and that `body.scrollWidth` equals each viewport width, including 320px.

## Current execution status

The isolated correction environment deliberately has no installed npm packages, browser executable, or Playwright browser bundle, and the task prohibits network access. Consequently `npm run check` and `npm run evidence` cannot execute here and no rendered screenshots are fabricated or represented as real-browser evidence. The complete Astro/Tailwind/TypeScript and Playwright capture setup is committed to the workspace for deterministic execution in an environment with the declared dependencies available.

No client hydration, endpoint, analytics, database, authentication, deployment, or Motion has been added.
