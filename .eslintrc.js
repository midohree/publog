module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:mdx/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "preset-lint-consistent",
    "preset-lint-markdown-style-guide",
    "preset-lint-recommended",
    "preset-prettier",
  ],
  rules: {},
  settings: {
    "mdx/code-blocks": true,
  },
};
