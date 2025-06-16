import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ),
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: true
      }
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
            "unknown"
          ],
          pathGroups: [
            {
              pattern: "next",
              group: "builtin",
              position: "before"
            },
            {
              pattern: "react",
              group: "builtin"
            },
            {
              pattern: "@tanstack/**",
              group: "builtin",
              position: "before"
            },
            {
              pattern: "@/libs/**",
              group: "unknown"
            },
            {
              pattern: "@/core/**",
              group: "unknown"
            },
            {
              pattern: "@/store/**",
              group: "unknown"
            },
            {
              pattern: "**/*.css.ts",
              group: "unknown",
              position: "after"
            }
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ]
    }
  }
];

export default eslintConfig;