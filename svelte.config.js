import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Svelte compiles both; mdsvex must only touch .md — handing it '.svelte' makes it
// markdown-process real components (it wraps indented lines in <p>, which breaks
// SvelteKit's generated root.svelte).
const extensions = ['.svelte', '.md'];
const mdsvexExtensions = ['.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// vite-plugin-svelte 4 reads onwarn from the config root, not from `vitePlugin`
	onwarn: (warning, defaultHandler) => {
		// Svelte 4 used kebab-case warning codes, Svelte 5 uses snake_case
		if (warning.code === 'css-unused-selector' || warning.code === 'css_unused_selector') return;

		defaultHandler(warning);
	},
	kit: {
		adapter: adapter(),
		paths: {
			relative: false
		},
		prerender: {
			handleHttpError: ({ status, path, message }) => {
				// Image.svelte emits <source> variants (avif/webp/png) that image-transmutation
				// generates in `postbuild` — i.e. after this crawl — so they can't exist yet
				// and always 404 here. Anything else, especially a page erroring, fails the build.
				if (status === 404 && path.startsWith('/images/')) return;
				throw new Error(message);
			}
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: mdsvexExtensions,
			rehypePlugins: [
				rehypeExternalLinks, // Adds 'target' and 'rel' to external links
				rehypeSlug, // Adds 'id' attributes to Headings (h1,h2,etc)
				[
					rehypeAutolinkHeadings,
					{
						// Adds hyperlinks to the headings, requires rehypeSlug
						behavior: 'prepend',
						properties: { className: ['heading-link'], title: 'Permalink', ariaHidden: 'true' },
						content: {
							type: 'element',
							tagName: 'span',
							properties: {}
							// children: [{ type: 'text', value: '#' }]
						}
					}
				]
			]
		})
	],
	extensions: extensions
};

export default config;
