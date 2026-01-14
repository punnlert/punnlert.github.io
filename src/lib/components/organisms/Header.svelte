<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Hamburger from '$lib/icons/hamburger.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	export let showBackground = false;

	let showMenu = 'translateY(-100%)';

	const paths = [
		{ name: 'Home', path: '/' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Publications', path: '/publications' },
		{ name: 'Fun!', path: '/fun' },
		{ name: 'About', path: '/about' }
	];

	let show = () => {
		showMenu = 'translateY(0)';
	};

	let hide = () => {
		showMenu = 'translateY(-100%)';
	};

	beforeNavigate(() => hide());
</script>

<nav class="menu" style="--show-menu: {showMenu}">
	<ul>
		{#each paths as { name, path }}
			{@const active = '/' + $page.url.pathname.split('/')[1] === path ? 'page' : null}
			<li><a aria-current={active} href={path} data-sveltekit-preload-data>{name}</a></li>
		{/each}
		<li><a href="/files/resume.pdf" target="_blank">Resume</a></li>
		<li>
			<button on:click={hide}> Close </button>
		</li>
	</ul>
</nav>
<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo animated={false} />
		</a>
		<div class="links">
			{#each paths as { name, path }}
				{#if name != 'Home'}
					<a href={path} data-sveltekit-preload-data>{name}</a>
				{/if}
			{/each}
			<a href="/files/resume.pdf" target="_blank">Resume</a>
			<button id="phone" on:click={show}>
				<Hamburger />
			</button>
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	@import '$lib/scss/themes.scss';

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
					a:not(#phone) {
						display: none;
					}

					button {
						width: 50px;
						background: none;
						border: none;
						color: var(--color--text);
						cursor: pointer;
					}
				}
			}

			@include for-tablet-portrait-up {
				.links {
					button:is(#phone) {
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

	.menu {
		display: none;
		position: fixed;
		transform: var(--show-menu);
		background: var(--color--page-background);
		transition: transform 0.4s ease-out;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		margin: 0;
		z-index: 99;
		font-size: 1.5rem;

		button {
			background: none;
			color: var(--color--text-shade);
			border: none;
			padding: 0;
			font-style: italic;
		}

		[aria-current='page'] {
			font-weight: 800;
		}

		[aria-current='page']::before {
			view-transition-name: active-page;
		}
		//
		// button {
		// 	position: absolute;
		// 	top: 20px;
		// 	right: 20px;
		// 	width: 50px;
		// 	background: none;
		// 	color: var(--color--text);
		// 	border: none;
		// }

		ul {
			list-style: none;
			margin: 0;
		}

		a {
			text-decoration: none;
		}

		@include for-phone-only {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
