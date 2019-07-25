module.exports = {
  extends: ["airbnb"],
  env: {
    jest: true,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0
  },
  globals: {
    fetch: "readonly",
    document: "readonly"
  }
};
