// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不允许在语句后存在多余的空格
    'no-trailing-spaces': 'error',
    // 不允许函数括号之间存在空格
    'space-before-function-paren': ['error', 'never'],
    // 缩进
    'indent':['off','tab'],
    // 函数名称和调用它的左括号之间的空格
    'func-call-spacing': ['error', 'never']
  }
}
