module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
  },
};
