// eslint-disable-next-line import/no-extraneous-dependencies
const airbnb = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'import/prefer-default-export': [0],
    'prettier/prettier': [2],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
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
