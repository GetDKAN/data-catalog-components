module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:storybook/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "plugins": ["testing-library"],
    "env": {
        "jest": true,
        "browser": true,
    },
    "rules": {
        "react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
    }
};
