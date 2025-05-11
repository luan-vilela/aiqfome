import js from '@eslint/js';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next,
  prettier,
  {
    ignores: ['.eslintrc.js', 'next.config.js'],
    rules: {
      'prettier/prettier': 'warn',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      prettier: await import('eslint-plugin-prettier'),
      '@typescript-eslint': tseslint.plugin,
    },
  },
];
