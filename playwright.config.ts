import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  reporter: [['list']],
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'http://127.0.0.1:4321',
    trace: 'off',
  },
  webServer: {
    command: 'pnpm exec astro preview --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: true,
    timeout: 30_000,
  },
  projects: [{ name: 'chromium' }],
});
