module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    // "plugin:prettier/recommended",
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/no-v-html': 0,
    'vue/name-property-casing': 0,
    'vue/html-self-closing': 0,
    'vue/require-default-prop': 0
    // 'prettier/prettier': 'error'
  }
}
