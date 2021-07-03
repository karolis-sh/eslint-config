// eslint-disable-next-line import/no-extraneous-dependencies
const airbnb = require('eslint-config-airbnb-base/rules/imports');

const base = require('./base');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          ...airbnb.rules['import/no-extraneous-dependencies'][1].devDependencies,
          'prettier.config.js',
        ],
      },
    ],
  },
};
