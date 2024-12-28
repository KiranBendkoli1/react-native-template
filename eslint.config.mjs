// eslint.config.js
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactNative from "eslint-plugin-react-native";
import eslintPluginImport from "eslint-plugin-import";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["node_modules", "dist"], // Exclude node_modules and dist folders
  },
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript and TSX files
    languageOptions: {
      parser: "@typescript-eslint/parser", // TypeScript parser
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // Enable JSX
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: eslintPluginReact,
      "react-native": eslintPluginReactNative,
      import: eslintPluginImport,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn", // Warn on `any` type
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Require return types
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused function arguments starting with `_`

      // React rules
      "react/jsx-uses-react": "off", // React 17+ doesn't require importing React
      "react/react-in-jsx-scope": "off", // React 17+ no longer requires React in scope
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }], // Allow JSX in .tsx files
      "react/prop-types": "off", // Disable PropTypes as we're using TypeScript
      "react/no-unescaped-entities": "off", // Allow unescaped characters like `&`

      // React Native-specific rules
      "react-native/no-inline-styles": "warn", // Warn about inline styles (best practices)
      "react-native/split-platform-components": "warn", // Encourage platform-specific components

      // Import rules
      "import/order": [
        "error",
        { groups: [["builtin", "external", "internal"]] },
      ],
      "import/no-extraneous-dependencies": "warn",

      // Prettier integration
      "prettier/prettier": "error", // Enable Prettier
    },
  },
];
