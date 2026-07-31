<script lang="ts">
	import NewLogo from '$lib/components/atoms/NewLogo.svelte';
	import Hamburger from '$lib/icons/hamburger.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { lerp } from '$lib/utils/lerp';

	export let showBackground = false;

	let showMenu = 'translateY(-100%)';
	let scrollY: number;
	let outerHeight: number;
	let offset = 100;
	let header: HTMLDivElement;
	let headerHeight: number;
	let hidden = false;
	let prevScrollY = 0;
	let rotation = 0;

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

	const checkScroll = () => {
		const scrollDown = scrollY > prevScrollY;
		const percentRotate = scrollY / outerHeight;

		rotation = Math.floor(lerp(0, 360, percentRotate));

		if (scrollY > outerHeight + offset && !hidden && scrollDown) {
			header.style.top = `-${headerHeight}px`;
			hidden = true;
		}

		if (!scrollDown) {
			header.style.top = `0`;
			hidden = false;
		}

		prevScrollY = scrollY;
	};
</script>

<svelte:window bind:scrollY bind:outerHeight on:scroll={checkScroll} />

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

<div class="header" bind:this={header} bind:clientHeight={headerHeight}>
	<header class:has-background={showBackground}>
		<nav class="container">
			<a class="logo_container" href="/" aria-label="Site logo" style:--rotate={`${rotation}deg`}>
				<NewLogo animated={false} />
				<p>punnlert</p>
			</a>
			<div class="links">
				{#each paths as { name, path }}
					{@const active = '/' + $page.url.pathname.split('/')[1] === path ? 'page' : null}
					{#if name != 'Home'}
						<a aria-current={active} href={path} data-sveltekit-preload-data>{name}</a>
					{/if}
				{/each}
				<a href="/files/resume.pdf" target="_blank">Resume</a>
				<button id="phone" on:click={show}>
					<Hamburger />
				</button>
			</div>
		</nav>
	</header>
</div>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;
	@use '$lib/scss/_themes.scss' as *;

	.header {
		position: sticky;
		z-index: 100;
		background: var(--color--page-background);
		top: 0;
		transition: all 0.2s ease-out;
	}

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

		.logo_container {
			height: 60px;
			flex: 1;
			display: flex;
			align-items: center;
			gap: 15px;
			background-image: none;

			p {
				font-family: var(--font--emphasize);
				font-size: var(--h3-font-size);
				letter-spacing: -2px;
				line-height: 1;
			}

			:global(.logo) {
				rotate: var(--rotate);
			}
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

				&:hover,
				&[aria-current='page'] {
					background-size: 100% 1px;
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

		button {
			background: none;
			color: var(--color--text-shade);
			border: none;
			padding: 0;
			font-style: italic;
		}

		a {
			font-weight: 400;
			color: var(--color--text);
		}

		[aria-current='page'] {
			font-weight: 800;
			color: var(--color--secondary);
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
