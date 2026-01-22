<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
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
		<div class="layout-container">
			{#each graphics as graphic}
				<div class="postcard">
					<!-- <a href="/graphics/{graphic.slug.toLowerCase()}"> -->
					<Image src={graphic.image} alt={graphic.description} />
					<!-- </a> -->
				</div>
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.postcard {
		// box-shadow: var(--card-shadow);
		transition: all 0.4s ease;
		// margin-bottom: 0.25em;
		padding: 30px;
		// border: solid;
		// border-color: var(color--text);
		background: var(--color--text);

		// cursor: pointer;

		// &:hover {
		// 	box-shadow: var(--card-shadow-hover);
		// 	transform: scale(1.02);
		// }
	}

	.layout-container {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 10px;
	}
</style>
