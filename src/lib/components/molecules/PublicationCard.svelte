<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	import Document from '$lib/icons/document.svelte';
	import Info from '$lib/icons/info.svelte';
	import type { Publication } from '$lib/utils/types';

	export let publication: Publication;

	export let showImage = true;

	const slug = `publication/${publication.slug}`;
	const coverImage = publication.image;
	const venue = publication.venue;
	const awards = publication.awards;
	const title = publication.name;
	const authors = publication.authors;
	const links = publication.links;
</script>

<Card
	href="/{slug}"
	target="_self"
	additionalClass=" {!showImage || !coverImage ? 'no-image' : ''} publication-post-card"
	orientation="horizontal"
>
	<div class="image" slot="image">
		{#if coverImage}
			<Image src={coverImage} alt="Cover image of this blog post" />
		{/if}
	</div>
	<div class="content" slot="content">
		<div class="title">
			<div class="venue">
				{venue}
				{#if awards.length}
					{#each awards as award}
						• {award.name}
					{/each}
				{/if}
			</div>
			<span>{title} </span>
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
		</div>

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
	</div>
	<div class="footer" slot="footer">
		{#each links as link}
			{#if link.text == 'paper'}
				<Button style="clear" href={link.url} target="_blank">
					<Document slot="icon" />
					{link.text}
				</Button>
			{:else}
				<Button style="clear" href={link.url} target="_blank">
					<Info slot="icon" />
					{link.text}
				</Button>
			{/if}
		{/each}
	</div>
</Card>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	.content {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		font-size: 1.2rem;
		font-family: var(--font--default);
		font-weight: 700;

		.venue {
			font-size: 1rem;
			font-weight: 600;
			line-height: 1;
			margin-bottom: calc(1.2rem * 0.5);
		}

		svg {
			position: absolute;
			top: 0;
			right: 0;
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
		gap: 20px;
	}

	:global(.publication-post-card .image img) {
		object-fit: cover;
	}

	:global(.publication-post-card.no-image > .image) {
		display: none;
	}
</style>
