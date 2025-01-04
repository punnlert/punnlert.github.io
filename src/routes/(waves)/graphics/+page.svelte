<script lang="ts">
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
		<Masonry stretchFirst={false} colWidth="minmax(Min(12em, 100%), 1fr)" bind:refreshLayout>
			{#each graphics as graphic}
				<div class="postcard">
					<a href="/graphics/{graphic.slug.toLowerCase()}">
						<Image
							src={graphic.image}
							alt={graphic.description}
							loadCall={refreshLayout}
							--img-transition={graphic.slug.toLowerCase()}
						/>
					</a>
				</div>
			{/each}
		</Masonry>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.postcard {
		box-shadow: var(--card-shadow);
		// transition: 0.1s cubic-bezier(0.47, 0, 0.745, 0.715);

		cursor: pointer;

		&:hover {
			box-shadow: var(--card-shadow-hover);
			transform: scale(1.02);
		}
	}
</style>
