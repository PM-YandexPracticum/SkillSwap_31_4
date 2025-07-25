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
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'src/stories/',
		'src/shared/ui/**/*.stories.tsx',
		'jest.config.ts',
	],
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
		'prettier/prettier': [
			'warn',
			{
				usePrettierrc: true,
			},
		],
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'comma-dangle': 'off',
		'use-isnan': ['error', { enforceForSwitchCase: true }],
		'react/void-dom-elements-no-children': 'warn',
		'react/no-unsafe': 'warn',
		'react/no-unused-state': 'warn',
		'react/prefer-stateless-function': 'warn',
		'react/self-closing-comp': 'warn',
		'react/no-will-update-set-state': 'warn',
		'react/no-this-in-sfc': 'warn',
		'react/no-string-refs': 'warn',
		'react/no-redundant-should-component-update': 'warn',
		'react/jsx-boolean-value': ['warn', 'never'],
		'react/jsx-key': 'warn',
		'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
		'react/jsx-max-depth': ['warn', { max: 8 }],
		'arrow-body-style': ['warn', 'as-needed'],
		'dot-notation': 'warn',
		'jsx-quotes': ['warn', 'prefer-single'],
		'valid-typeof': 'warn',
		'react/function-component-definition': [
			'warn',
			{
				namedComponents: ['arrow-function', 'function-declaration'],
				unnamedComponents: 'arrow-function',
			},
		],
		'import/prefer-default-export': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react/button-has-type': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'no-param-reassign': [
			'error',
			{ props: true, ignorePropertyModificationsFor: ['state'] },
		],
	},
};
