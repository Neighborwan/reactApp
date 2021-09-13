module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint', 'plugin: prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeature: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
};
