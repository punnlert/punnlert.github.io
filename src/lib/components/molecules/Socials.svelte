<script>
	import RssIcon from '$lib/icons/rss.svelte';
	import ArrowLink from '$lib/components/atoms/ArrowLink.svelte';
</script>

<div class="socials-and-email">
	punnlertjaturaphat [at] gmail [dot] com
	<div class="socials">
		<ArrowLink href="https://github.com/punnlert" title="See my GitHub profile" text="GitHub" />
		<ArrowLink
			href="https://www.linkedin.com/in/punn-lertjaturaphat/"
			title="Connect on LinkedIn"
			text="LinkedIn"
		/>
		<ArrowLink
			href="https://scholar.google.com/citations?user=zBxA4FUAAAAJ&hl=en&oi=ao"
			title="See me on Google Scholar"
			text="Google Scholar"
		/>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as *;

	.socials-and-email {
		display: flex;
		flex-direction: column;
		gap: calc(var(--p-font-size) * 0.5);
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 30px;

		@include for-phone-only {
			gap: 10px;
		}
	}
</style>
