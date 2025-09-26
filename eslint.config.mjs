import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  languageOptions: {
    globals: globals.node
  }
});
