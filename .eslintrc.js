/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "curly": "error",
    "eqeqeq": "warn",
    "no-else-return": "warn",
    "radix": "warn",
    "camelcase": [
      "warn",
      {
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    "no-mixed-operators": "warn",
    "arrow-body-style": ["warn", "always"],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-anonymous-default-export": "warn",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        // groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": [
      "error",
      {
        allowReferrer: true,
      },
    ],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-namespace": "off",
  },
};
