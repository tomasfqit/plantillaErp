//@ts-ignore
import react from '@vitejs/plugin-react';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';

//@ts-ignore
const root = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
	plugins: [ react()],
	resolve: {
		alias: {
			'@': root,
		} as AliasOptions,
	},
});
