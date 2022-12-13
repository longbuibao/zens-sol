module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "standard",
    "prettier",
  ],
  env: {
    node: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
