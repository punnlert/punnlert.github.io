<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	// import Masonry from '$lib/components/atoms/Masonry.svelte';
	import Masonry from 'svelte-bricks';
	import Image from '$lib/components/atoms/Image.svelte';
	import type { Graphics } from '$lib/utils/types';

	export let data: {
		graphics: Graphics[];
	};

	let { graphics } = data;
	// let refreshLayout;
	let [minColWidth, maxColWidth, gap] = [180, 800, 5];
</script>

<div class="container">
	<ContentSection title="Graphic Designs">
		<Masonry
			items={graphics}
			{minColWidth}
			{maxColWidth}
			{gap}
			let:item
			idKey="slug"
			duration={0}
			animate={false}
		>
			<div class="postcard">
				<a href="/graphics/{item.slug.toLowerCase()}">
					<Image
						src={item.image}
						alt={item.description}
						--img-transition={item.slug.toLowerCase()}
					/>
				</a>
			</div>
		</Masonry>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.postcard {
		box-shadow: var(--card-shadow);
		transition: all 0.4s ease;

		cursor: pointer;

		&:hover {
			box-shadow: var(--card-shadow-hover);
			transform: scale(1.02);
		}
	}
</style>
