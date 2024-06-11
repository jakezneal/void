// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('./eslint.config.js');

module.exports = tseslint.config(
    ...rootConfig,
    {
        files: ['**/*.ts'],
        extends: ['plugin:prettier/recommended'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: ['plugin:@angular-eslint/template/recommended'],
        rules: {},
    },
    {
        files: ['*.html'],
        excludedFiles: ['*inline-template-*.component.html'],
        extends: ['plugin:prettier/recommended'],
        rules: {
            'prettier/prettier': ['error', { parser: 'angular' }],
        },
    },
);
