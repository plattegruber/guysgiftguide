import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({ edge: true }),
		csrf: false
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
