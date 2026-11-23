import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import boundaries from 'eslint-plugin-boundaries'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      boundaries,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.app.json' },
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app' },
        { type: 'features', pattern: 'src/features/*', capture: ['feature'] },
        { type: 'common', pattern: 'src/common' },
      ],
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          policies: [
            {
              from: { element: { type: 'app' } },
              allow: {
                to: { element: { types: ['app', 'features', 'common'] } },
              },
            },
            {
              from: { element: { type: 'features' } },
              allow: {
                to: [
                  { element: { type: 'common' } },
                  {
                    element: {
                      type: 'features',
                      captured: {
                        feature: '{{ from.element.captured.feature }}',
                      },
                    },
                  },
                ],
              },
            },
            {
              from: { element: { type: 'common' } },
              allow: { to: { element: { type: 'common' } } },
            },
          ],
        },
      ],
      'boundaries/no-private': [
        'error',
        {
          allowUncles: false,
        },
      ],
    },
  },
])
