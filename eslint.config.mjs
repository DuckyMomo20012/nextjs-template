import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  // FIXME: Update to flat config when new update is released
  {
    plugins: { 'react-hooks': reactHooks },
  },
  // eslint-disable-next-line import/no-named-as-default-member
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  jsxA11y.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      // FIXME: Remove these rules after migrating to flat config
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/extensions': [
        'warn',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-unresolved': 'warn',
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/jsx-sort-props': 'warn',
      'sort-imports': [
        'warn',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': { typescript: {} },
    },
  },
);
