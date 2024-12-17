import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: { react: pluginReact },
        rules: {
            ...pluginReact.configs.recommended.rules, // Flat Config와 호환되도록 직접 적용
            'react/react-in-jsx-scope': 'off',
        },
    },
];
