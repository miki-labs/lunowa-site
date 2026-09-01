import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const copy = html.replace(/<[^>]+>/g, '');
const css = await readFile('styles.css', 'utf8');
const required = [
  'メールを、確認し続けなくていい。',
  '返信待ち・資料待ちを、Lunowaが代わりに見守る。',
  '社内確認中です。明日送ります。',
  'あなたの対応はまだ必要ありません',
  '見積書が届きました',
  '任せる。でも、決定権は渡さない。',
  '必要になるまで、忘れていていい。',
];
for (const value of required) {
  if (!copy.includes(value)) throw new Error(`Missing required M10 copy: ${value}`);
}
if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error('Expected exactly one h1.');
for (const selector of ['@media (max-width: 767px)', '@media (max-width: 389px)', ':focus-visible']) {
  if (!css.includes(selector)) throw new Error(`Missing responsive/accessibility rule: ${selector}`);
}
console.log('Static copy, semantic, responsive, and focus checks passed.');
