module.exports = {
  root: true,
  env: {
      node: true
  },
  'extends': [
      'plugin:vue/essential',
      '@vue/prettier'
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'quotes': [1, 'single', {
          'avoidEscape': true,
          'allowTemplateLiterals': true
      }],
      'details': ['last'],
  },
  parserOptions: {
      parser: 'babel-eslint'
  }
}
