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
  await expect(page.locator('.product-stage').getByRole('link', { name: /Source/ })).toBeVisible();

  for (const heading of requiredSectionHeadings) {
    await expect(page.getByRole('heading', { level: 2, name: heading })).toHaveCount(1);
  }
}

async function assertDeterministicFonts(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  const fonts = await page.evaluate(() => ({
    japanese: document.fonts.check('700 40px "Noto Sans JP Variable"', 'メールを確認し続けなくていい。'),
    latin: document.fonts.check('600 14px "Inter Variable"', 'Lunowa Source FAQ'),
    status: document.fonts.status,
  }));

  expect(fonts.status).toBe('loaded');
  expect(fonts.japanese, 'self-hosted Noto Sans JP must load before visual evidence').toBe(true);
  expect(fonts.latin, 'self-hosted Inter must load before visual evidence').toBe(true);
}

async function assertTypographyAuthority(page: Page) {
  const typography = await page.evaluate(() => {
    const selectors = [
      'h1',
      '.editorial h2',
      '.section-heading h2',
      '.early-access h2',
      '.final-cta h2',
      '.matter-title h2',
      '.state-card h3',
      '.monitoring-proof h3',
      '.return-alert h3',
      '.trust-rows h3',
    ];

    return selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector)).map((element) => {
        const style = getComputedStyle(element);
        return { selector, weight: style.fontWeight, tracking: style.letterSpacing };
      }),
    );
  });

  for (const item of typography) {
    expect(item.weight, `${item.selector} must use the frozen bold role`).toBe('700');
    expect(['normal', '0px'], `${item.selector} must not use negative Japanese tracking`).toContain(item.tracking);
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
    await assertDeterministicFonts(page);
    await assertTypographyAuthority(page);

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
  await assertDeterministicFonts(page);
  await page.screenshot({ path: `${evidenceDirectory}/desktop-full-page.png`, fullPage: true });
});

test('200 percent reflow equivalent preserves required content at 640 CSS pixels', async ({ page }) => {
  const sourceViewportWidth = 1280;
  const zoomPercent = 200;
  const effectiveCssViewportWidth = sourceViewportWidth / (zoomPercent / 100);

  await page.setViewportSize({ width: effectiveCssViewportWidth, height: 800 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await assertSemanticCore(page);
  await assertDeterministicFonts(page);

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

test('navigation, FAQ, focus, and reduced-motion baseline remain operable without hydration', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await assertDeterministicFonts(page);

  const skipLink = page.getByRole('link', { name: '本文へ移動' });
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeFocused();
  const focusStyle = await skipLink.evaluate((element) => {
    const style = getComputedStyle(element);
    return { width: style.outlineWidth, offset: style.outlineOffset, style: style.outlineStyle };
  });
  expect(focusStyle.style).toBe('solid');
  expect(Number.parseFloat(focusStyle.width)).toBeGreaterThanOrEqual(2);
  expect(Number.parseFloat(focusStyle.offset)).toBeGreaterThanOrEqual(3);

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

  await expect(page.locator('script')).toHaveCount(0);
});

test('static Product proof and native FAQ survive with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: 'http://127.0.0.1:4321',
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('/');
  await assertSemanticCore(page);
  await expect(page.locator('script')).toHaveCount(0);

  const firstQuestion = page.locator('details').first();
  await firstQuestion.locator('summary').click();
  await expect(firstQuestion).toHaveAttribute('open', '');

  await context.close();
});
