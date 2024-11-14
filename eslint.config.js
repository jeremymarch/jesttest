const eslint = require("@eslint/js");

module.exports = [
  {
    ignores: ["**/*.config.js",]
  },
  {
  files: ["**/*.js"]
  },
  eslint.configs.recommended,
  {
      rules: {
          semi: "error",
          "prefer-const": "error"
      }
  }
];
