module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    browser: false,
    es6: true,
    node: true
  },
  plugins: ['node'],
  extends: [
    'plugin:node',
    'eslint:recommended'
  ],
  rules: {}
}