<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	// @ts-ignore - __LAST_UPDATED__ is defined in vite.config.js
	const lastUpdatedDate = new Date(__LAST_UPDATED__);
</script>

<footer>
	<!-- <div class="wave">
		<FooterWave />
	</div> -->
	<div class="content">
		<div class="myself">
			<div class="copyrights">
				&copy; {new Date().getFullYear()} Punn Lertjaturaphat.
			</div>
			<div class="copyrights">All rights reserved.</div>
			<div class="socials">
				<Socials />
				<!-- <RssLink /> -->
				<!-- <ThemeToggle /> -->
			</div>
			<div class="last-updated">
				Last updated on {lastUpdatedDate.toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})}
			</div>
		</div>
		<div class="credits">
			Sveltekit template by <a
				href="https://fantinel.dev?utm_source=site-template"
				target="_blank"
				rel="noopener noreferrer">Matheus Fantinel</a
			>.
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		height: fit-content;
		padding-top: 100px;
		padding-bottom: 50px;
		width: 100%;
		// background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		display: grid;
		grid-template-rows: 120px 1fr;
		.myself {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 5px;

			.last-updated {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-shade);
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 400;
			text-align: center;

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-shade);
				a {
					color: var(--color--text);
					text-decoration: underline;
					text-decoration-thickness: 1px;
					color: var(--color--text-shade);
				}
			}

			.copyrights {
				font-weight: 400;
				padding: 0px 0px;
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}

		// a {
		// 	&:hover {
		// 		filter: drop-shadow(0px 0px 3px var(--color--primary));
		// 	}
		// }
	}
</style>
