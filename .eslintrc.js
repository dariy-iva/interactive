module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/airbnb'],
  parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: 'vue-eslint-parser',
  // },
  plugins: ['vue', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-attribute-name': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'class-methods-use-this': 'off',
    'global-require': 0
  }
}
