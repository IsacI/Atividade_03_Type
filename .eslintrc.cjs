module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // Se você estiver usando TypeScript, pode desativar essa regra
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Pode desativar para simplificar
  },
  settings: {
    react: {
      version: 'latest', // Certifique-se de ajustar a versão do React conforme necessário
    },
  },
};
