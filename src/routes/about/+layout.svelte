<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import dateformat from 'dateformat';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import HandwriteLogo from '$lib/icons/handwrite_logo.svelte';

	import Image from '$lib/components/atoms/Image.svelte';
</script>

<svelte:head>
	<title>About Punn</title>
	<meta property="og:title" content="About Punn" />
	<meta name="twitter:title" content="About Punn" />
</svelte:head>

<div class="article-layout">
	<Header />

	<main>
		<article id="article-content">
			<div class="header">
				<h2>About Me</h2>
			</div>
			<div class="cover-image">
				<Image src="/images/about-me.jpg" alt="Punn with a cat" />
			</div>
			<div class="content">
				<slot />
			</div>
			<div class="logo-container">
				<HandwriteLogo />
			</div>
		</article>
	</main>

	<Footer />
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.article-layout {
		--body-background-color: var(--color--post-page-background);
		background-color: var(--color--post-page-background);
	}

	#article-content {
		--main-column-width: 80ch;
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			padding-right: 30px;
			padding-left: 30px;
		}

		display: flex;
		flex-direction: column;
		gap: 30px;

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			.teammate-container {
				width: fit-content;
				// border-top: solid;
				// border-bottom: solid;
				// padding: 0.7rem 1rem;
				margin: 1rem;
				h2 {
					font-size: 1.618rem;
				}
			}

			.dateperiod-container {
				margin-bottom: 1rem;
			}

			.note {
				font-size: 90%;
				color: rgba(var(--color--text-rgb), 0.8);
			}
		}

		.cover-image {
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;
			max-height: 400px;
			box-shadow: var(--image-shadow);
			border-radius: 6px;

			img {
				width: 100%;
				height: 100%;
				max-height: 400px;
				object-fit: cover;
			}
		}

		:global(.cover-image img) {
			max-height: 400px;
			object-fit: cover;
		}

		.content {
			display: grid;
			grid-template-columns:
				1fr
				min(var(--main-column-width), 100%)
				1fr;

			:global(> *) {
				grid-column: 2;
			}

			:global(> .full-bleed) {
				grid-column: 1 / 4;
				width: 100%;
				max-width: 1600px;
				margin-left: auto;
				margin-right: auto;
			}
		}

		.logo-container {
			width: min(var(--main-column-width), 100%);
			display: flex;
			justify-content: flex-end;
			margin: 0 auto;
			margin-top: 4ch;
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}
	}
</style>
