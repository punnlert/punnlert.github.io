<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
		allTags: string[];
		filter: string[];
	};

	$: activeTags = data.filter;
	$: visiblePosts = activeTags.length
		? data.posts.filter((post) => post.tags?.some((tag) => activeTags.includes(tag)))
		: data.posts;

	const toggleTag = (tag: string) => {
		const params = new URLSearchParams($page.url.searchParams);
		const next = activeTags.includes(tag)
			? activeTags.filter((t) => t !== tag)
			: [...activeTags, tag];

		params.delete('filter');
		next.forEach((t) => params.append('filter', t));

		const query = params.toString();
		goto(query ? `?${query}` : $page.url.pathname, {
			keepFocus: true,
			noScroll: true,
			replaceState: true
		});
	};
</script>

<div class="container">
	<ContentSection title="Projects">
		<div class="filters">
			{#each data.allTags as tag}
				<button
					type="button"
					aria-pressed={activeTags.includes(tag)}
					on:click={() => toggleTag(tag)}
				>
					<Tag color={activeTags.includes(tag) ? 'primary' : 'plain'}>{tag}</Tag>
				</button>
			{/each}
		</div>
		<div class="grid">
			{#each visiblePosts as post (post.slug)}
				<BlogPostCard
					title={post.title}
					coverImage={post.coverImage}
					excerpt={post.excerpt}
					slug={post.slug}
					tags={post.tags}
					awards={post.awards}
				/>
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	.filters {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 25px;

		button {
			padding: 0;
			border: none;
			background: none;
			cursor: pointer;
			opacity: 0.6;
			transition: opacity 0.15s ease-in-out;

			&:hover,
			&[aria-pressed='true'] {
				opacity: 1;
			}
		}
	}

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		@include for-tablet-landscape-up {
			> :global(:nth-child(n)) {
				grid-column: span 2;
			}
			// // Select every 6 elements, starting from position 1
			// // And make it take up 6 columns
			// > :global(:nth-child(6n + 1)) {
			// 	grid-column: span 6;
			// }
			// // Select every 6 elements, starting from position 2
			// // And make it take up 3 columns
			// > :global(:nth-child(6n + 2)) {
			// 	grid-column: span 3;
			// }
			// // Select every 6 elements, starting from position 3
			// // And make it take up 3 columns
			// > :global(:nth-child(6n + 3)) {
			// 	grid-column: span 3;
			// }
			// // Select every 6 elements, starting from position 4, 5 and 6
			// // And make it take up 2 columns
			// > :global(:nth-child(6n + 4)),
			// :global(:nth-child(6n + 5)),
			// :global(:nth-child(6n + 6)) {
			// 	grid-column: span 2;
			// }
		}
	}
</style>
