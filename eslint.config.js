// ESLint flat config for ESLint v9+
// Mirrors the previous .eslintrc.json setup for TypeScript

const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // Preserve rule overrides from the legacy config
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
