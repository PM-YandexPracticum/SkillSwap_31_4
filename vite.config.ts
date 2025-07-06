import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@ui': path.resolve(__dirname, './src/shared/ui'),
			'@components': path.resolve(__dirname, './src/components'),
			'@ui-components': path.resolve(__dirname, './src/components/ui'),
			'@images': path.resolve(__dirname, './src/images'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@ui-pages': path.resolve(__dirname, './src/pages'),
			'@services': path.resolve(__dirname, './src/services'),
		},
	},
});
