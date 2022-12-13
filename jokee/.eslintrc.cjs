module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "standard",
    "prettier",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "max-len": ["error", { code: 100 }],
  },
};
