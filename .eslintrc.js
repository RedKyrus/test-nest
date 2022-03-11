const { off } = require("process");

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', //"prettier"
],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    //"prettier"
  ],
  root: false,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    //"prettier/prettier": ["error", { endOfLine: "auto" , }],
    //"prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
    //"prettier/prettier": ["error", { endOfLine: "auto" , }],
    "prettier/prettier": "off",
    //"prettier/prettier": ['off',{  }]
    //"no-multiple-empty-lines": ["error", {max: 4, maxEOF: 0}],
    //"no-multiple-empty-lines": ["error", { "max": 30, "maxEOF": 0 }]
    //"no-multiple-empty-lines": ["error", { max: 30, maxEOF: 0 }]
    
  },
};
