import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@qwik.dev/partytown/utils';
import path from 'path';
import { execSync } from 'child_process';

function getLastCommitDate() {
	try {
		const gitDate = execSync('git log -1 --format=%cI').toString().trim();
		return gitDate;
	} catch (error) {
		console.warn('Could not get git commit date, using current date');
		return new Date().toISOString();
	}
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), partytownVite()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	},
	define: {
		__LAST_UPDATED__: JSON.stringify(getLastCommitDate())
	}
};

export default config;
