<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Masonry from '$lib/components/atoms/Masonry.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import type { Graphics } from '$lib/utils/types';

	export let data: {
		graphics: Graphics[];
	};

	let { graphics } = data;
	let refreshLayout;
</script>

<div class="container">
	<ContentSection title="Graphic Designs">
		<Masonry stretchFirst={false} colWidth="minmax(Min(15em, 100%), 1fr)" bind:refreshLayout>
			{#each graphics as graphic}
				<Image src={graphic.image} alt={graphic.description} loadCall={refreshLayout} />
			{/each}
		</Masonry>
	</ContentSection>
</div>

<style lang="scss">
</style>
