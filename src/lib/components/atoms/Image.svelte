<script lang="ts">
	import { dev } from '$app/environment';
	import { Lightbox } from 'svelte-lightbox';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;
	export let noBg: boolean | undefined = undefined;
	export let caption: boolean | undefined = undefined;
	export let withLightbox: boolean | undefined = undefined;

	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] | undefined = undefined;

	$: fileName = src.split('.')[0];

	function buildSrcset() {
		if (dev) return;

		let srcset = '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}

		return srcset;
	}
</script>

<figure>
	{#if withLightbox}
		<Lightbox imagePreset="fullscreen" enableClickToClose={true} enableImageExpand={true}>
			<img
				srcset={buildSrcset()}
				{src}
				{alt}
				loading="lazy"
				decoding="async"
				class:full-bleed={fullBleed}
				class:show_nobg={noBg}
			/>
		</Lightbox>
	{:else}
		<img
			srcset={buildSrcset()}
			{src}
			{alt}
			loading="lazy"
			decoding="async"
			class:full-bleed={fullBleed}
			class:show_nobg={noBg}
		/>
	{/if}
	{#if caption}
		<figcaption>
			{alt}
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.svelte-lightbox-overlay {
		background-color: rgba(133, 132, 99, 0.87);
	}
</style>
