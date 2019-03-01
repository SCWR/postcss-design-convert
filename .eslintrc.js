// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    // parser: 'babel-eslint'
  },
  env: {
    //环境定义了预定义的全局变量。更多在官网查看
    browser: true,
    node: true,
    commonjs: true,
    amd: true,
    es6: true,
    mocha: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'postcss',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'func-style': ["error", "declaration", { "allowArrowFunctions": true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
