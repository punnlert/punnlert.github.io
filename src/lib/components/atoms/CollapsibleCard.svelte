<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	export let additionalClass: string | undefined = undefined;

	export let href: string | undefined = undefined;
	const isExternalLink = !!href && HttpRegex.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

	let toggleShow = () => {
		if (show == 'none') {
			show = 'block';
		} else {
			show = 'none';
		}
	};

	$: show = 'none';

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
	on:mouseenter={toggleShow}
	on:mouseleave={toggleShow}
>
	<div class="body">
		<div class="title">
			<slot name="title" />
		</div>
		<div class="collapsible" style="--show-collapsible: {show}">
			<div class="inner">
				<div class="content">
					<slot name="content" />
				</div>
			</div>
		</div>
	</div>
</svelte:element>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.card {
		background: var(--color--card-background);
		// border-top: 2px solid var(--color--text);
		border-bottom: 2px solid var(--color--text);
		color: var(--color--text);
		border-radius: 0;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		width: 100%;

		@include for-phone-only {
			border-bottom: 1px solid var(--color--text);
		}

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		text-decoration: none;

		&[href],
		&[onclick] {
			cursor: pointer;
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

		.inner {
			overflow: hidden;
		}
		.collapsible {
			grid-template-rows: 0fr;
			transition: grid-template-rows 0.5s ease;
			display: grid;
		}
	}

	:global(.card:hover .body .collapsible) {
		grid-template-rows: 1fr !important;
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
