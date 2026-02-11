<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	export let title: string;
	export let authors: string[];
	export let coverImage: string | undefined = undefined;
	export let excerpt: string;
	export let slug: string;
	export let awards: { name: string; logo: string }[] | undefined = undefined;
	export let venue: string | undefined = undefined;

	export let showImage = true;
</script>

<Card
	href="/{slug}"
	target="_self"
	additionalClass=" {!showImage || !coverImage ? 'no-image' : ''} publication-post-card"
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

		{#if excerpt}
			<p class="text">
				{excerpt}
			</p>
		{/if}
		{#if authors?.length}
			<div class="authors">
				{#each authors as author, i}
					{#if author === 'Punn Lertjaturaphat' || author === 'Punn Lertjaturaphat*'}
						<b>{author}</b>
					{:else}
						{author}
					{/if}
					{#if i !== authors.length - 1}
						{', '}
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if awards?.length}
			{#each awards as award}
				<Tag color="primary">{award.name}</Tag>
			{/each}
		{/if}
		{#if venue}
			<Tag>{venue}</Tag>
		{/if}
	</div>
</Card>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
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

	:global(.publication-post-card:hover .title svg) {
		transform: rotate(45deg);
	}

	.text {
		margin-top: 10px;
		font-size: 0.9rem;
		text-align: justify;
	}
	.authors {
		margin-top: 10px;
		font-size: 0.9rem;
		text-align: start;
		b {
			font-weight: 700;
		}
	}

	.footer {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 10px;
	}

	:global(.publication-post-card .image img) {
		object-fit: cover;
	}

	:global(.publication-post-card.no-image > .image) {
		display: none;
	}
</style>
