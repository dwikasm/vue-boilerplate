module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'warn',
    'no-shadow': 'warn',
    'prefer-rest-params': 'warn',
    'no-param-reassign': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
