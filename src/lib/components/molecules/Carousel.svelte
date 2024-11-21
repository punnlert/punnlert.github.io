<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Image from '../atoms/Image.svelte';
	import type { img } from '$lib/utils/types';

	export let label: string;
	export let images: img[];
</script>

<Splide
	aria-label={label}
	options={{
		rewind: true,
		width: 800,
		gap: '1rem'
	}}
>
	{#each images as image}
		<SplideSlide>
			<Image src={image.src} alt={image.alt} />
		</SplideSlide>
	{/each}
</Splide>

<style lang="scss">
</style>
