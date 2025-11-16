<script lang="ts">
	import LightBoxImage from '$lib/components/molecules/LightBoxImage.svelte';
	import dateformat from 'dateformat';
	import type { Publication } from '$lib/utils/types';
	import YouTube from 'svelte-youtube';

	export let data: {
		publication: Publication;
	};

	let { publication } = data;

	const options = {
		height: '390',
		width: '640',
		//  see https://developers.google.com/youtube/player_parameters
		playerVars: {
			autoplay: 1
		}
	};
</script>

<div class="container">
	<article id="article-content">
		<div class="header">
			<h1>{publication.name}</h1>
			<div class="info-container">
				<!-- <div class="info-item">
					<h4>Authors</h4>
					<div>
						{#each publication.authors as author}
							<p>{author}</p>
						{/each}
					</div>
				</div>
				<div class="info-item">
					<h4>Venue</h4>
					<p>{publication.venue}</p>
				</div>
				<div class="info-item">
					<h4>My Contribution</h4>
					<p>todo</p>
				</div> -->
				<h4>Authors</h4>
				<h4>Venue</h4>
				<h4>My Contribution</h4>
			</div>
			<div class="info-container">
				<div>
					{#each publication.authors as author}
						{#if author === 'Punn Lertjaturaphat'}
							<b>{author}</b>
						{:else}
							<p>{author}</p>
						{/if}
					{/each}
				</div>
				<p>{publication.venue}</p>
				<p>todo</p>
			</div>

			<!-- <div class="dateperiod-container">
				<div class="note">
					{#if publication.date}
						{dateformat(publication.date, 'UTC:mmmm yyyy')}
					{/if}
				</div>
			</div>
			<div class="description-container">
				{#if publication.description}
					<h2>Description</h2>
					<div class="note">
						<p>
							{publication.description}
						</p>
					</div>
				{/if}
			</div> -->
			<div class="description-container">
				{#if publication.description}
					<p>
						{publication.description}
					</p>
				{/if}
			</div>

			<div class="links-container">
				{#each publication.links as link}
					<a href={link.url} target="_blank">
						{link.text}
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								vector-effect="non-scaling-stroke"
								d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
								fill="currentColor"
							/>
						</svg>
					</a>
				{/each}
			</div>
			{#if publication.youtube}
				<div class="youtube-container">
					<YouTube videoId={publication.youtube.split('v=')[1] || ''} {options} />
				</div>
			{/if}
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
		grid-template-columns: 1fr;
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
				line-height: 1.25;
				margin-bottom: 20px;
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

		.info-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 10px;
			padding-bottom: 10px;
			border-bottom: 1px solid var(--color--text);
		}

		.description-container {
			padding-top: 10px;
			line-height: 1.5;
		}

		.links-container {
			display: flex;
			gap: 15px;
			padding-top: 10px;

			a {
				display: inline-flex;
				align-items: center;
				gap: 8px;
				text-decoration: none;

				svg {
					width: 12px;
					height: 12px;
					transition: transform 0.2s ease;
				}

				&:hover svg {
					transform: rotate(45deg);
				}
			}
		}

		p,
		b {
			font-size: 1.2rem;
		}

		.cover-image {
			box-shadow: var(--card-shadow);
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;
			transition: all 0.2s ease;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			&:hover {
				box-shadow: var(--card-shadow-hover);
				transform: scale(1.02);
			}
		}
	}

	.youtube-container {
		width: 100%;
		padding: 40px 0;
		display: flex;
		justify-content: center;
		background: var(--color--page-background);

		:global(div) {
			width: 100%;
			max-width: 1200px;
		}

		:global(iframe) {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
		}
	}
</style>
