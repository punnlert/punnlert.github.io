<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import type { Hobbies } from '$lib/utils/types';
	import HobbyPostCard from '$lib/components/molecules/HobbyPostCard.svelte';

	export let data: {
		hobbies: Hobbies[];
	};

	let { hobbies } = data;
</script>

<div class="container">
	<ContentSection title="Interests and Hobbies">
		<div class="layout-container">
			{#each hobbies as { name, description, images, slug }}
				<HobbyPostCard title={name} excerpt={description} {images} {slug} />
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.postcard {
		box-shadow: var(--card-shadow);
		transition: all 0.4s ease;
		// margin-bottom: 0.25em;
		padding: 1vh;
		border: solid;
		border-color: var(color--text);
		// background: var(--color--text);

		cursor: pointer;

		&:hover {
			box-shadow: var(--card-shadow-hover);
			transform: scale(1.02);
		}
	}

	.layout-container {
		width: 100%;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}
</style>
