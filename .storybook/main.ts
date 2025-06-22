import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	viteFinal: async (config) => {
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@ui': path.resolve(__dirname, '../src/shared/ui'),
					'@components': path.resolve(__dirname, '../src/components'),
					'@ui-components': path.resolve(__dirname, '../src/components/ui'),
					'@images': path.resolve(__dirname, '../src/images'),
					'@pages': path.resolve(__dirname, '../src/pages'),
					'@ui-pages': path.resolve(__dirname, '../src/pages/ui'),
				},
			},
		});
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
};
export default config;
