import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    extends: [
      'standard',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    plugins: [
      'react',
      'react-hooks',
      'react-refresh'
    ],
    rules: {
      // Add any custom rules here
    },
  },
]