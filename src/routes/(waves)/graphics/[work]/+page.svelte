<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	import type { Graphics } from '$lib/utils/types';

	export let data: {
		work: Graphics;
	};

	let { work } = data;
</script>

<div class="container">
	<article id="article-content">
		<div class="cover-image">
			<Image src={work.image} alt={work.description} --img-transition={work.slug.toLowerCase()} />
		</div>
		<div class="header">
			<h1>{work.name}</h1>
			<div class="description-container">
				<h2>Description</h2>
				<div class="note">
					<p>
						{work.description}
					</p>
				</div>
			</div>
		</div>
	</article>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

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

		width: 100%;
		display: grid;
		align-items: start;
		grid-template-columns: 1fr 2fr;
		grid-gap: 30px;

		@media (max-width: 1000px) {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.header {
			display: flex;
			flex-direction: column;
			align-items: left;
			justify-content: center;
			text-align: left;
			gap: 10px;
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			h1 {
				font-size: 2.617924rem;
				line-height: 1;
			}

			.description-container {
				h2 {
					font-size: 1.618rem;
				}
			}

			.note {
				font-size: 90%;
				color: rgba(var(--color--text-rgb), 0.8);
			}
		}

		.cover-image {
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
