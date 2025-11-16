<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let href_title: string | undefined = undefined;
	export let href_link: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
</script>

<section {id} class="content-section {align}">
	<div class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h3>
						{title}
					</h3>
				{/if}
				{#if description}
					<p>
						{description}
					</p>
				{/if}
				{#if href_title}
					<a href={href_link} class="link-with-arrow">
						{href_title}
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
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.content-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 50px 0;

		.title-area {
			width: 100%;

			display: flex;
			flex-direction: row;
			// justify-content: center;
			align-items: center;
			text-align: center;
			// gap: 15px;

			a {
				text-decoration: none;
				font-size: 1 em;
			}

			.text {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 5px;
				width: 100%;

				.link-with-arrow {
					display: inline-flex;
					align-items: center;
					gap: 10px;

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
		}
		.content-area {
			flex: 5;

			display: grid;
			place-items: center;
		}

		@include for-tablet-landscape-up {
			&.left {
				.title-area {
					order: 1;
				}
				.content-area {
					order: 2;
				}
			}
			&.right {
				.title-area {
					order: 2;
				}
				.content-area {
					order: 1;
				}
			}
			&.top {
				flex-direction: column;
				.title-area {
					order: 1;
					// max-width: 600px;
				}
				.content-area {
					order: 2;
					width: 100%;
				}
			}
		}
		@include for-tablet-portrait-down {
			flex-direction: column;
		}
	}
</style>
