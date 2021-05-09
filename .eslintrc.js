module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: { // Need to discuss
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    'no-use-before-define': 'error',
    indent: ["error", 4],
    // '@typescript-eslint/interface-name-prefix': 'off', // Require that interface names be prefixed with I
    // '@typescript-eslint/no-explicit-any': 'off', // It is not a good way to allow `any` type
  },
};
