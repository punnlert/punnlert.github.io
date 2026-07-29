<script lang="ts">
	import PublicationCard from '../molecules/PublicationCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { Publication } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let publications: Publication[];
</script>

<ContentSection id="recent-publications" title="Publications" align="top">
	<div class="grid">
		{#each publications as publication}
			<PublicationCard
            {publication}
			/>
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
