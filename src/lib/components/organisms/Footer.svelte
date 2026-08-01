<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	// @ts-ignore - __LAST_UPDATED__ is defined in vite.config.js
	const lastUpdatedDate = new Date(__LAST_UPDATED__);
</script>

<footer>
	<div class="container grid">
		<div class="myself">
			<div class="copyrights">
				&copy; {new Date().getFullYear()} Punn Lertjaturaphat.
				<br />All Rights Reserved.
			</div>
			<div class="gmail">
				<button
					on:click={async () => {
						await navigator.clipboard.writeText('punnlertjaturaphat@gmail.com');
                        alert("Email Copied to Clipboard")
					}}>punnlertjaturaphat@gmail.com</button
				>
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
		padding-top: 100px;
		padding-bottom: 50px;
		width: 100%;

		.myself {
			display: flex;
			flex-direction: column;
			gap: 5px;
			justify-content: center;
			align-items: center;
			grid-column-end: span 3;

			.copyrights {
				text-align: center;
			}

			.last-updated {
				font-weight: 400;
			}

			.gmail {
				button {
					background: none;
					border: none;
					padding: 0;
					font: inherit;
					color: var(--color--text);
					text-decoration: underline solid 1px;
					cursor: pointer;
					-webkit-user-select: text;
					user-select: text;
				}
			}
		}
	}
</style>
