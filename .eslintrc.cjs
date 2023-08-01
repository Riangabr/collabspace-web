module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["@rocketseat/eslint-config/react"],
  rules: {
    "no-useless-constructor": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
