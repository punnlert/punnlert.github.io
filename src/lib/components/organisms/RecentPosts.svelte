<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let posts: BlogPost[];
</script>

<ContentSection
	id="recent-posts"
	title="Proudly Presents"
	description="Here are some of the highlights of my projects."
	align="top"
>
	<div slot="button">
		<Button href="/projects">View All</Button>
	</div>
	<div class="grid">
		{#each posts as post}
			<BlogPostCard
				slug={post.slug}
				title={post.title}
				excerpt={post.excerpt}
				tags={post.tags}
				readingTime={post.readingTime}
				coverImage={post.coverImage}
			/>
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

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
