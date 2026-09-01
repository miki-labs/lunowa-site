import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'desktop-1440x900', width: 1440, height: 900, fullPage: false },
  { name: 'desktop-full-page', width: 1440, height: 900, fullPage: true },
  { name: 'tablet-768x1024', width: 768, height: 1024, fullPage: false },
  { name: 'mobile-390x844', width: 390, height: 844, fullPage: false },
  { name: 'reflow-320', width: 320, height: 844, fullPage: false },
] as const;

for (const viewport of viewports) {
  test(`${viewport.name} is complete and reflows`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('メールを、確認し続けなくていい。');
    await expect(page.locator('body')).toHaveJSProperty('scrollWidth', viewport.width);
    await page.screenshot({ path: `evidence/${viewport.name}.png`, fullPage: viewport.fullPage });
  });
}
