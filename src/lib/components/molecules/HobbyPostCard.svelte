<script lang="ts">
	import CollapsibleCard from '$lib/components/atoms/CollapsibleCard.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '../atoms/Image.svelte';

	export let title: string;
	export let images: string[] | undefined = undefined;
	export let excerpt: string;
	export let slug: string;
	export let tags: string[] | undefined;

	export let showImage = true;
</script>

<CollapsibleCard
	href="/{slug}"
	target="_self"
	additionalClass="blog-post-card {!showImage || !images ? 'no-image' : ''}"
>
	<div class="content" slot="title">
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
	</div>
	<div class="body" slot="content">
		<p class="text">
			{excerpt}
		</p>
		<div class="photo-banner">
			<div class="scroll">
				{#if images}
					{#each images as image}
						<Image src={image} alt="Punn with a cat" lazy={false} />
					{/each}
					{#each images as image}
						<Image src={image} alt="Punn with a cat" lazy={false} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
</CollapsibleCard>

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

	:global(.blog-post-card:hover .title svg) {
		transform: rotate(45deg);
	}

	.photo-banner {
		width: 100%;
		height: 200px; /* Adjust the height as needed */
		overflow: hidden;
		position: relative;

		@include for-phone-only {
			height: 100px;
		}
	}
	.scroll {
		display: flex;
		height: 100%;
		width: max-content;
		justify-content: space-between;
		animation: scroll 30s linear infinite;
		padding-left: 10px;
		gap: 10px;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.text {
		margin-top: 10px;
		font-size: 0.9rem;
		text-align: justify;
	}

	.body {
		display: flex;
		gap: 15px;
		flex-direction: column;
	}

	:global(.blog-post-card .body .photo-banner .scroll img) {
		height: 100%;
		width: auto;
		display: inline-block;
	}
</style>
