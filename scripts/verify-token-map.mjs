import fs from 'node:fs';

const authority = JSON.parse(fs.readFileSync('docs/tokens/lunowa-m10.tokens.json', 'utf8'));
const css = fs.readFileSync('src/styles/tokens.css', 'utf8');

const dim = (token) => `${token.$value.value}${token.$value.unit}`;
const hex = (token) => token.$value.hex;

const expected = new Map([
  ['--page', hex(authority.ref.color.page)],
  ['--surface', hex(authority.ref.color.white)],
  ['--subtle', hex(authority.ref.color.subtle)],
  ['--ink', hex(authority.ref.color.ink)],
  ['--ink-hover', hex(authority.ref.color.inkHover)],
  ['--muted', hex(authority.ref.color.secondary)],
  ['--tertiary', hex(authority.ref.color.tertiary)],
  ['--border', hex(authority.ref.color.border)],
  ['--border-strong', hex(authority.ref.color.borderStrong)],
  ['--blue', hex(authority.ref.color.blue)],
  ['--blue-dark', hex(authority.ref.color.blueDark)],
  ['--monitor-bg', hex(authority.ref.color.monitorBg)],
  ['--monitor-fg', hex(authority.ref.color.monitorFg)],
  ['--monitor-border', hex(authority.ref.color.monitorBorder)],
  ['--attention-bg', hex(authority.ref.color.attentionBg)],
  ['--attention-fg', hex(authority.ref.color.attentionFg)],
  ['--attention-border', hex(authority.ref.color.attentionBorder)],
  ['--integrity-bg', hex(authority.ref.color.integrityBg)],
  ['--integrity-fg', hex(authority.ref.color.integrityFg)],
  ['--integrity-border', hex(authority.ref.color.integrityBorder)],
  ['--radius-control', dim(authority.ref.radius.control)],
  ['--radius-surface', dim(authority.ref.radius.surface)],
  ['--radius-product', dim(authority.ref.radius.product)],
  ['--gutter-wide', dim(authority.layout.pageGutterWide)],
  ['--gutter-tablet', dim(authority.layout.pageGutterTablet)],
  ['--gutter-mobile', dim(authority.layout.pageGutterMobile)],
  ['--content-max', dim(authority.layout.contentMax)],
  ['--readable-max', dim(authority.layout.readableMax)],
  ['--product-max', dim(authority.layout.productMax)],
  ['--section-gap-wide', dim(authority.layout.sectionGapWide)],
  ['--section-gap-mobile', dim(authority.layout.sectionGapMobile)],
  ['--hero-wide-size', dim(authority.type.size.heroWide)],
  ['--hero-wide-line', dim(authority.type.lineHeight.heroWide)],
  ['--hero-compact-size', dim(authority.type.size.heroCompact)],
  ['--hero-compact-line', dim(authority.type.lineHeight.heroCompact)],
  ['--hero-mobile-size', dim(authority.type.size.heroMobile)],
  ['--hero-mobile-line', dim(authority.type.lineHeight.heroMobile)],
  ['--hero-narrow-size', dim(authority.type.size.heroNarrow)],
  ['--hero-narrow-line', dim(authority.type.lineHeight.heroNarrow)],
  ['--section-size', dim(authority.type.size.section)],
  ['--section-line', dim(authority.type.lineHeight.section)],
  ['--section-mobile-size', dim(authority.type.size.sectionMobile)],
  ['--section-mobile-line', dim(authority.type.lineHeight.sectionMobile)],
  ['--lead-size', dim(authority.type.size.lead)],
  ['--lead-line', dim(authority.type.lineHeight.lead)],
  ['--body-size', dim(authority.type.size.body)],
  ['--body-line', dim(authority.type.lineHeight.body)],
  ['--ui-size', dim(authority.type.size.ui)],
  ['--ui-line', dim(authority.type.lineHeight.ui)],
  ['--meta-size', dim(authority.type.size.meta)],
  ['--meta-line', dim(authority.type.lineHeight.meta)],
]);

const actual = new Map();
for (const match of css.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  actual.set(match[1], match[2].trim());
}

const failures = [];
for (const [name, value] of expected) {
  if (actual.get(name)?.toLowerCase() !== value.toLowerCase()) {
    failures.push(`${name}: expected ${value}, found ${actual.get(name) ?? 'missing'}`);
  }
}

if (failures.length > 0) {
  console.error('M10 token projection mismatch:\n' + failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${expected.size} M10 token projections.`);
