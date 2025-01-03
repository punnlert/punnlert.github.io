<script lang="ts">
	import { createLoadObserver } from '$lib/utils/loadObserve';

	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Masonry from '$lib/components/atoms/Masonry.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import type { Graphics } from '$lib/utils/types';

	export let data: {
		graphics: Graphics[];
	};

	let { graphics } = data;
	let refreshLayout;

	const onload = createLoadObserver(refreshLayout);
</script>

<div class="container">
	<ContentSection title="Graphic Designs">
		<Masonry stretchFirst={false} colWidth="minmax(Min(12em, 100%), 1fr)" bind:refreshLayout>
			{#each graphics as graphic}
				<div class="postcard">
					<a href="/{graphic.slug}" />
					<Image src={graphic.image} alt={graphic.description} loadCall={refreshLayout} />
				</div>
			{/each}
		</Masonry>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.postcard {
		box-shadow: var(--card-shadow);
		// transition: 0.2s ease-in-out;

		cursor: pointer;

		// &:hover {
		// 	box-shadow: var(--card-shadow-hover);
		// 	transform: scale(1.01);
		// }
	}
</style>
