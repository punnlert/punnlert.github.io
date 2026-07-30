<script lang="ts">
	import PublicationCard from '$lib/components/molecules/PublicationCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { Publication } from '$lib/utils/types';

	export let data: {
		publications: Publication[];
	};

	let { publications } = data;
</script>

<div class="container">
	<ContentSection title="Publications">
		<div class="grid">
			{#each publications as publication}
				<PublicationCard {publication} />
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

	}
</style>
