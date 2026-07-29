<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	export let additionalClass: string | undefined = undefined;

	export let href: string | undefined = undefined;
	export let orientation: 'vertical' | 'horizontal' = 'vertical';
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
	class="card {orientation} {additionalClass}"
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
	@use '$lib/scss/_breakpoints.scss' as *;

	.card {
		background: var(--color--card-background);
		border-bottom: 2px solid var(--color--text);
		color: var(--color--text);
		border-radius: 0;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		width: 100%;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		text-decoration: none;

		@include for-tablet-landscape-up {
			height: 500px;
		}

		@include for-phone-only {
			border-bottom: 1px solid var(--color--text);
		}

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				:global(.image img) {
					scale: 1.05;
				}
			}
		}
	}

	.card.horizontal {
		@include for-tablet-landscape-up {
			flex-direction: row;
			gap: 20px;
			height: 220px;
			border: none;

			.image {
				width: 40%;
				height: 100%;
				align-self: stretch;
			}
			.body {
				padding: 0 5px;
			}
		}

		@include for-phone-only {
			flex-direction: column;
			gap: 0;

			.image {
				width: 100%;
				height: 200px;
			}
		}
	}

	.publication-post-card {
		@include for-tablet-landscape-up {
			height: 500px;
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
		overflow: hidden;
		flex-shrink: 0;
	}

	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
</style>
