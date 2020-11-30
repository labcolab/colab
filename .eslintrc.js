module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  "rules": {
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreadin": "off",
  }
};
