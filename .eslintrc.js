module.exports = {
  extends: ['handlebarlabs'],
  rules: {
    'no-use-before-define': ['error', { variables: false }],
    'react/jsx-one-expression-per-line': ['off'],
    'consistent-return': ['warn'],
  },
};
