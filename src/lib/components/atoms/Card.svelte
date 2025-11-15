<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	export let additionalClass: string | undefined = undefined;

	export let href: string | undefined = undefined;
	const isExternalLink = !!href && HttpRegex.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

	$: tag = href ? 'a' : 'article';
	$: linkProps = {
		href,
		target,
		rel
	};
</script>

<svelte:element
	this={tag}
	class="card {additionalClass}"
	{...linkProps}
	data-sveltekit-preload-data
	{...$$restProps}
>
	{#if $$slots.image}
		<div class="image">
			<slot name="image" />
		</div>
	{/if}
	<div class="body">
		<div class="content">
			<slot name="content" />
		</div>
		{#if $$slots.footer}
			<div class="footer">
				<slot name="footer" />
			</div>
		{/if}
	</div>
</svelte:element>

<style lang="scss">
	.card {
		background: var(--color--card-background);
		border-top: 2px solid var(--color--text);
		border-bottom: 2px solid var(--color--text);
		color: var(--color--text);
		border-radius: 0;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 450px;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		text-decoration: none;

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				// background: var(--color--text);
				// color: var(--color--page-background);
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		padding: 20px 5px;
		flex: 1;

		.content {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
	}

	.image {
		position: relative;
		width: 100%;
		height: 200px;
		flex-shrink: 0;
	}

	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
</style>
