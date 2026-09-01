import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    '.astro/**',
    'dist/**',
    'evidence/**',
    'node_modules/**',
    'playwright-report/**',
    'test-results/**',
  ]),
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{ts,cts,mts}'],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
    },
  },
);
