<script lang="ts">
	import { Lightbox } from 'svelte-lightbox';
	import Image from '$lib/components/atoms/Image.svelte';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;
	export let noBg: boolean | undefined = undefined;
	export let caption: boolean | undefined = undefined;
</script>

<figure>
	<Lightbox imagePreset="fullscreen" enableClickToClose={true} enableImageExpand={true}>
		<Image {src} {alt} {fullBleed} {noBg} />
	</Lightbox>
	{#if caption}
		<figcaption>
			{alt}
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	.svelte-lightbox-overlay {
		background-color: rgba(133, 132, 99, 0.87);
	}
</style>
