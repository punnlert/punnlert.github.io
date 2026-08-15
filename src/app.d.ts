// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	interface Meta {
		canonical: string;
		keywords: string;
		description: string;
		title: string;
		image: string;
	}
}

// svelte-youtube (unmaintained, last published for Svelte 3) ships .d.ts typing the
// component as a Svelte 3 class, which Svelte 5's component type rejects. It ships raw
// .svelte source, so it compiles and runs fine — only the bundled types are stale.
declare module 'svelte-youtube' {
	import type { Component } from 'svelte';
	const YouTube: Component<{ videoId: string; options?: Record<string, unknown> }>;
	export default YouTube;
}

declare module '*&imagetools' {
	/**
	 * actual types
	 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
	 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
	 */
	const out;
	export default out;
}

