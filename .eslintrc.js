module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:functional/no-mutations'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'functional'],
};
