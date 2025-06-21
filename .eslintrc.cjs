module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.app.json', './tsconfig.node.json'],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
