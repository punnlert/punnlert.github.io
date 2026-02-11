<script lang="ts">
	import PublicationCard from '../molecules/PublicationCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { Publication } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let publications: Publication[];
</script>

<ContentSection
	id="recent-publications"
	title="Selected Publications"
	align="top"
	href_link="/publications"
	href_title="see all"
>
	<!-- <div slot="button">
		<Button href="/projects">View All</Button>
	</div> -->
	<div class="grid">
		{#each publications as publication}
			<PublicationCard
				slug={`publications/${publication.slug}`}
				authors={publication.authors}
				venue={publication.venue}
				title={publication.shortName}
				excerpt={publication.shortDescription}
				coverImage={publication.image}
				awards={publication.awards}
			/>
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
