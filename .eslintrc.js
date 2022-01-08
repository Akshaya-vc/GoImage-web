module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { allow: "as-needed" }],
    "import/no-unresolved": [2, { caseSensitive: false }],
    // "react/jsx-filename-extension": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
      },
    ],
    "no-param-reassign": 0,
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    "import/no-named-as-default-member": "off",
    "jsx-a11y/media-has-caption": "off",
    "import/no-named-as-default": "off",
  },
};
