import { expect, test, type Page } from '@playwright/test';
import { mkdir, rm, writeFile } from 'node:fs/promises';

const evidenceDirectory = 'evidence';

const nativeViewports = [
  { name: 'desktop-1440x900', width: 1440, height: 900 },
  { name: 'desktop-1280x800', width: 1280, height: 800 },
  { name: 'tablet-768x1024', width: 768, height: 1024 },
  { name: 'mobile-390x844', width: 390, height: 844 },
  { name: 'reflow-320', width: 320, height: 844 },
] as const;

const requiredSectionHeadings = [
  'メールの負担は、読むことだけではありません。',
  '返信が来ても、終わっていないことがある。',
  '必要でない間は、Lunowaが見ています。',
  '必要になった時だけ、あなたに戻します。',
  '戻ってきた時には、何が変わったかも分かる。',
  '任せる。でも、決定権は渡さない。',
  'Lunowaを、早く試したい方へ。',
  'よくある質問',
  '必要になるまで、忘れていていい。',
] as const;

async function assertSemanticCore(page: Page) {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('メールを、確認し続けなくていい。');
  await expect(page.getByText('返信待ち・資料待ちを、Lunowaが代わりに見守る。').first()).toBeAttached();
  await expect(page.getByText('社内確認中です。明日送ります。').first()).toBeAttached();
  await expect(page.getByText('あなたの対応はまだ必要ありません').first()).toBeAttached();
  await expect(page.getByText('見積書が届きました').first()).toBeAttached();
  await expect(page.getByRole('link', { name: /Source/ }).first()).toBeAttached();

  for (const heading of requiredSectionHeadings) {
    await expect(page.getByRole('heading', { level: 2, name: heading })).toHaveCount(1);
  }
}

async function measureOverflow(page: Page) {
  return page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;
    const scrollWidth = Math.max(root.scrollWidth, body.scrollWidth);
    const clientWidth = root.clientWidth;
    return {
      scrollWidth,
      clientWidth,
      horizontalOverflow: scrollWidth > clientWidth + 1,
    };
  });
}

test.beforeAll(async () => {
  await rm(evidenceDirectory, { recursive: true, force: true });
  await mkdir(evidenceDirectory, { recursive: true });
});

test('native viewport matrix preserves semantics and has no horizontal overflow', async ({ page }) => {
  const evidence: Array<{
    name: string;
    width: number;
    height: number;
    scrollWidth: number;
    clientWidth: number;
    horizontalOverflow: boolean;
  }> = [];

  for (const viewport of nativeViewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/', { waitUntil: 'networkidle' });
    await assertSemanticCore(page);

    const metrics = await measureOverflow(page);
    expect(metrics.horizontalOverflow, `${viewport.name} must not horizontally overflow`).toBe(false);
    expect(metrics.scrollWidth, `${viewport.name} scrollWidth`).toBeLessThanOrEqual(viewport.width);

    evidence.push({ ...viewport, ...metrics });
    await page.screenshot({ path: `${evidenceDirectory}/${viewport.name}.png`, fullPage: false });
  }

  await writeFile(
    `${evidenceDirectory}/viewport-checks.json`,
    `${JSON.stringify({ schemaVersion: 1, viewports: evidence }, null, 2)}\n`,
  );
});

test('desktop full-page evidence captures the complete narrative', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await assertSemanticCore(page);
  await page.screenshot({ path: `${evidenceDirectory}/desktop-full-page.png`, fullPage: true });
});

test('200 percent reflow equivalent preserves required content at 640 CSS pixels', async ({ page }) => {
  const sourceViewportWidth = 1280;
  const zoomPercent = 200;
  const effectiveCssViewportWidth = sourceViewportWidth / (zoomPercent / 100);

  await page.setViewportSize({ width: effectiveCssViewportWidth, height: 800 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await assertSemanticCore(page);

  const metrics = await measureOverflow(page);
  expect(metrics.horizontalOverflow).toBe(false);
  expect(metrics.scrollWidth).toBeLessThanOrEqual(effectiveCssViewportWidth);

  await page.screenshot({ path: `${evidenceDirectory}/reflow-200-percent.png`, fullPage: false });
  await writeFile(
    `${evidenceDirectory}/reflow-200-percent.json`,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        zoomPercent,
        method: '1280px-to-640csspx-reflow-equivalent',
        sourceViewportWidth,
        effectiveCssViewportWidth,
        scrollWidth: metrics.scrollWidth,
        horizontalOverflow: false,
        contentLoss: false,
        semanticOracle: 'H1, canonical quotation story, Source path, and all major section headings asserted present before PASS.',
      },
      null,
      2,
    )}\n`,
  );
});

test('navigation, FAQ, and reduced-motion baseline remain operable without hydration', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'networkidle' });

  const faq = page.locator('#faq');
  await page.evaluate(() => {
    window.location.hash = '#faq';
  });
  await expect(faq).toBeAttached();

  const firstQuestion = page.locator('details').first();
  await firstQuestion.locator('summary').click();
  await expect(firstQuestion).toHaveAttribute('open', '');

  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe('auto');

  await expect(page.locator('script[type="module"][src*="astro"]')).toHaveCount(0);
});
