import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), partytownVite()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
};

export default config;
