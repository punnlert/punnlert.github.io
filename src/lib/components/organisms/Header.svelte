<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	export let showBackground = false;
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo animated={false} />
		</a>
		<div class="links">
			<a href="/projects">Projects</a>
			<!-- <a id="reach" href="/graphics">Graphics</a> -->
			<a id="reach" href="/about">About</a>
			<a id="reach" href="/files/resume.pdf">Resume</a>
			<!-- <RssLink /> -->
			<!-- <ThemeToggle /> -->
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 25px 0;
		border-bottom: solid;
		border-width: 1px;

		view-transition-name: header;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				.links {
					a:not(#reach) {
						display: none;
					}
				}
			}
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;

			a {
				text-decoration: none;
				font-weight: 400;

				@include for-phone-only {
					font-weight: 400;
				}

				&:hover {
					text-decoration: underline;
					text-decoration-thickness: 1px;

					// get rid of shadows
					// color: var(--color--primary);
					// filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>
