# eslint-config

> ESLint config based on Airbnb with added prettier integration.

[![npm version](https://badge.fury.io/js/%40k.sh%2Feslint-config.svg)](https://badge.fury.io/js/%40k.sh%2Feslint-config)
![Node.js CI](https://github.com/karolis-sh/eslint-config/workflows/Node.js%20CI/badge.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

- `npm i -D @k.sh/eslint-config`

- Update `.eslintrc` file

```json
{
  "extends": ["@k.sh/eslint-config"],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": ["@k.sh/eslint-config/typescript"]
    }
  ]
}
```

- Create a `prettier.config.js` file

```js
module.exports = require('@k.sh/eslint-config/prettier');
```
