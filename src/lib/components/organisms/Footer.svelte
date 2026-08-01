<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	// @ts-ignore - __LAST_UPDATED__ is defined in vite.config.js
	const lastUpdatedDate = new Date(__LAST_UPDATED__);
</script>

<footer>
	<div class="container">
		<div class="myself">
			<div class="copyrights">
				&copy; {new Date().getFullYear()} Punn Lertjaturaphat.
				<a href="/contact">contact.</a>
				<br />All Rights Reserved.
			</div>
			<div class="last-updated">
				Last updated on {lastUpdatedDate.toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})}
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	footer {
		height: fit-content;
		padding-top: 20px;
		padding-bottom: 20px;
		width: 100%;
		background-color: var(--color--primary);
		font-weight: 600;
		.myself {
			display: flex;
			flex-direction: column;
			gap: 5px;

			.copyrights {
				a {
					color: var(--color--text);
				}
			}

			.last-updated {
				font-weight: 400;
			}
		}
	}
</style>
