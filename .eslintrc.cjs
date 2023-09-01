module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["@rocketseat/eslint-config/react"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-useless-constructor": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
