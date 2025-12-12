import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["assets/**", "styles/**", "index.html", "package-lock.json"],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
