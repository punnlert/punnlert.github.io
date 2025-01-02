<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import LightBoxImage from '$lib/components/molecules/LightBoxImage.svelte';
	import type { img } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';

	export let label: string;
	export let images: img[];
	export let withLightbox: boolean = false;
</script>

<Splide
	aria-label={label}
	options={{
		rewind: true,
		gap: '2rem',
		padding: '4rem',
		breakpoints: {
			767: {
				gap: '1rem',
				padding: '0rem'
			}
		}
	}}
>
	{#each images as image}
		<SplideSlide>
			{#if withLightbox}
				<LightBoxImage src={image.src} alt={image.alt} />
			{:else}
				<Image src={image.src} alt={image.alt} />
			{/if}
		</SplideSlide>
	{/each}
</Splide>

<style lang="scss">
</style>
