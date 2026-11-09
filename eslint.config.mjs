import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['public/js/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        define: 'readonly'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { vars: 'local' }],
      'no-extra-semi': 'off'
    }
  }
];
