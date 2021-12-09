module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		// TypeScript ESLint recommended style 적용
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'padded-blocks': ['off', 'always'],
		'@typescript-eslint/no-unused-vars': ['warn'],
	},
};
