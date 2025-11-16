<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '../atoms/Image.svelte';

	export let title: string;
	export let coverImage: string | undefined = undefined;
	export let excerpt: string;
	export let slug: string;
	export let tags: string[] | undefined;
	export let readingTime: string | undefined = undefined;
	export let awards: string[] | undefined = undefined;

	export let showImage = true;
</script>

<Card
	href="/{slug}"
	target="_self"
	additionalClass="blog-post-card {!showImage || !coverImage ? 'no-image' : ''}"
>
	<div class="image" slot="image">
		{#if coverImage}
			<Image src={coverImage} alt="Cover image of this blog post" />
		{/if}
	</div>
	<div class="content" slot="content">
		<p class="title">
			<span>{title}</span>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					vector-effect="non-scaling-stroke"
					d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
					fill="currentColor"
				/>
			</svg>
		</p>

		<!-- {#if readingTime}
			<div class="note">{readingTime}</div>
		{/if} -->

		{#if excerpt}
			<p class="text">
				{excerpt}
			</p>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if awards?.length}
			<div class="awards">
				{#each awards as award}
					<Tag color="primary">{award}</Tag>
				{/each}
			</div>
		{/if}
		{#if tags?.length}
			<div class="tags">
				{#each tags.slice(0, 2) as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 1.2rem;
		font-family: var(--font--default);
		font-weight: 700;

		svg {
			width: 16px;
			height: 16px;
			flex-shrink: 0;
			transition: transform 0.2s ease;
		}
	}

	:global(.blog-post-card:hover .title svg) {
		transform: rotate(45deg);
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.note {
		margin-top: 3px;
		font-size: 0.8rem;
		color: rgba(var(--color--text-rgb), 0.8);
	}

	.text {
		margin-top: 10px;
		font-size: 0.9rem;
		text-align: justify;
	}

	.footer {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 10px;
	}

	:global(.blog-post-card .image img) {
		object-fit: cover;
	}

	:global(.blog-post-card.no-image > .image) {
		display: none;
	}
</style>
