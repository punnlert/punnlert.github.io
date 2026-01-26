<script lang="ts">
	import { dev } from '$app/environment';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;
	export let noBg: boolean | undefined = undefined;
	export let caption: boolean | undefined = undefined;
	export let loadCall = undefined;
	export let lazy: boolean = true;

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

{#if caption}
	<figure>
		<!-- {#if additionalStyleVar} -->
		<img
			srcset={buildSrcset()}
			{src}
			{alt}
			loading={lazy ? 'lazy' : 'eager'}
			decoding="async"
			on:load={loadCall}
			class:full-bleed={fullBleed}
			class:show_nobg={noBg}
		/>
		<figcaption>
			{alt}
		</figcaption>
	</figure>
{:else}
	<!-- {#if additionalStyleVar} -->
	<img
		srcset={buildSrcset()}
		{src}
		{alt}
		loading={lazy ? 'lazy' : 'eager'}
		decoding="async"
		on:load={loadCall}
		class:full-bleed={fullBleed}
		class:show_nobg={noBg}
	/>
{/if}

<style lang="scss">
	img {
		// view-transition-name: var(--img-transition, none);
		width: 100%;
		height: 100%;
		// max-height: 40vh;
		object-fit: contain;
	}
</style>
