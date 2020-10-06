const base = require('./base');

module.exports = {
  ...base,
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'import/prefer-default-export': 'off',
  },
};
