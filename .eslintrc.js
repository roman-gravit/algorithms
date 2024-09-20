/* eslint-env node */

"use strict";
const Module = require("module");
const path = require("path");

const ModuleFindPath = Module._findPath;
Module._findPath = (request, paths, isMain) => {
    const r = ModuleFindPath(request, paths, isMain);
    if(!r) {
        if(request.startsWith("@typescript-eslint")) {
            if(process.platform !== "win32") {
                return require.resolve(`/usr/local/lib/node_modules/${request}`);
            } else {
                let p = `${process.env.APPDATA}\\npm\\node_modules\\${request}`;
                if(!path.extname(request) && request.split(/[/\\]/).length===2) {
                    return require.resolve(`${p}\\dist\\index.js`);
                } else {
                    return p;
                }
            }

        }
    }
    return r;
};

module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint/eslint-plugin"
     ],
    
    "extends": [
    	"eslint:recommended",
    	"plugin:@typescript-eslint/eslint-recommended",
    	// Uses the recommended rules from @typescript-eslint/eslint-plugin
    	"plugin:@typescript-eslint/recommended",
    	"plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],

    "parserOptions": {
         "project": "tsconfig.json",
         "tsconfigRootDir": __dirname,
         ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
         sourceType: "module", // Allows for the use of imports
         ecmaFeatures: {
             jsx:  true,  // Allows for the parsing of JSX
         },
    },

    env: {
        // Allow ES6 syntax and globals - Map, Set, WeakMap, WeakSet etc
        es2017: true,
    },

    "rules": {
        //"indent": [
        //    "error",
        //    "tab"
        //],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "no-extra-semi": 0,
        "no-mixed-spaces-and-tabs": 0,
        "indent": 0,
        "id-match": [2, "^[a-zA-Z0-9_\$]*$", {"properties": true}],

        "quotes": ["error", "double", {
            "allowTemplateLiterals": true
        }],

        "curly": "error",
        // "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],
        "dot-location": ["error", "property"],
        "eqeqeq": "error",
        "no-extend-native": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-new": "error",
        "no-new-wrappers": "error",
        "no-useless-concat": "error",
        //"no-useless-return": "error",
        "no-void": "error",
        "prefer-regex-literals": "error",
        "comma-spacing": ["error", { before: false, after: true }],
        "func-call-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",

        "camelcase": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/type-annotation-spacing": ["warn", {
            "before": false,
            "after": true,
            overrides: {
                arrow: { before: true, after: true },
            }
        }],
        "@typescript-eslint/member-delimiter-style": ["warn", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            },
        }],

        "@typescript-eslint/class-name-casing": "off",

        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "no-async-promise-executor": "error",
        //"require-atomic-updates": "error",
        "no-return-await": "warn",

        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",

        "@typescript-eslint/explicit-function-return-type": ["warn", {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
        }],

        "array-callback-return": "error",

        // "no-unused-vars": ["warn", {
        //     "argsIgnorePattern": "^_"
        // }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            "argsIgnorePattern": "^_"
        }],
        
        "block-scoped-var": "error",

        "@typescript-eslint/no-explicit-any": "off",

        // Disable this warning temporary,
        // as it always gives false positives on TSX files
        //"@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",

        // TODO Uncomment after fixing all cases.
        "@typescript-eslint/no-unsafe-enum-comparison": "off",

        // "@typescript-eslint/restrict-plus-operands": "warn",

        "@typescript-eslint/triple-slash-reference": "off",

        "no-useless-catch": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",

        "@typescript-eslint/unbound-method": "off",

        "no-inner-declarations": "off",

        //"space-infix-ops": ["error", { "int32Hint": true }],
    },

    "globals": {
        "_EXTENSION": "readonly",
        "_WEB_EXT": "readonly",
        "_BROWSER": "readonly",
        "_CHROME": "readonly",
        "_EDGE": "readonly",
        "_FIREFOX": "readonly",
        "_SAFARI": "readonly",
        "_NODEJS": "readonly",
        "_DEBUG": "readonly",
        "BUILD_DATE_TIME": "readonly",
    }
};