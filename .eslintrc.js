module.exports = {
  globals: {
    fetchMock: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "eslint-plugin-import-helpers"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "dot-notation": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "Color|GridColDef",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-undef": "error",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          "module",
          ["/^Components/", "/^Vendor/"],
          [("parent", "sibling", "index")],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};
