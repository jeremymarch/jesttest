/* global require module */
const eslint = require("@eslint/js");

module.exports = [
    {
        files: ["**/*.js"]
    },
    eslint.configs.recommended,
    {
        rules: {
            semi: "error",
            "indent": ["error", 4],
        }
    }
];
