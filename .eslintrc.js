const config = {
  root: true,
  env: {
    //
    browser: true,
    //
    es2021: true
  },
  //
  parserOptions: {
    //
    tsconfigRootDir: './',
    //
    project: ['./tsconfig.json']
  },
  plugins: ['tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  rules: {
    //
    'no-extra-semi': 'warn',
    quotes: ['warn', 'single'],

    '@typescript-eslint/no-unused-vars': ['error'],
    // React hooks
    // hooks の書き方に準拠しないとエラーにする
    'react-hooks/rules-of-hooks': 'error',
    // 依存の配列が正しく記述されていない場合ワーニングにする
    'react-hooks/exhaustive-deps': 'warn',
    // tailwindcss
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',

    // Disable
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    //
    'react/react-in-jsx-scope': 'off',
    //
    'no-unused-vars': 'off'
  }
}

module.exports = config
