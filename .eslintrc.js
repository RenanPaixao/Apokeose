module.exports = {
    extends: ['plugin:vue/vue3-essential', 'prettier'],
    parserOptions: {
        parser: '@babel/eslint-parser',
        'requireConfigFile': false,
        ecmaVersion: 2020
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'brace-style': ['error', '1tbs', {allowSingleLine: false}],
        'comma-dangle': ['error', 'never'],
        'no-duplicate-imports': ['error'],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        'no-unused-vars': ['error', {args: 'all'}],
        'no-unreachable': 'error',
        semi: ['error', 'always', {omitLastInOneLineBlock: true}]
    },
    overrides: [
        {
            files: ['*.html'],
            rules: {
                'vue/comment-directive': 'off'
            }
        }
    ]
};