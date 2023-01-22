module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "setting": {
        "react": {
            "version": "detect",
          },
    },
    "rules": {
        "react/prop-types": "off"
    }
}
