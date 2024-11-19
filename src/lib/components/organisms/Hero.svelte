<script>
	import FeaturesIcon from '$lib/icons/features.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
	import Logo from '../atoms/Logo.svelte';
</script>

<section id="hero">
	<div class="name">
		<h1>Punn</h1>
		<h1>Lertjaturaphat's</h1>
	</div>
	<h2 class="hello">Portfolio</h2>
	<!-- <p class="intro">
		<span class="left">It supports Markdown,</span>
		<span class="right">and is really fast.</span>
	</p>
	<div class="ctas">
		<Button href="https://github.com/matfantinel/sveltekit-static-blog-template">
			<GitHubIcon slot="icon" />
			Source Code
		</Button>
		<Button color="primary" href="https://histoire-sveltekit-static-blog-template.vercel.app/">
			<FeaturesIcon slot="icon" />
			Components
		</Button>
	</div> -->
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0px;
		position: relative;
		padding: 100px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.name {
			margin-bottom: 1.5em;
			h1 {
				text-align: center;
				line-height: 1;
			}
		}

		.hello {
			font-family: var(--font--default);
			text-align: center;
			line-height: 1;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
