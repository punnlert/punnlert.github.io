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
					<h4>
						{title}
					</h4>
				{/if}
				{#if description}
					<p>
						{description}
					</p>
				{/if}
				{#if href_title}
					<a href={href_link}>{href_title}</a>
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
		gap: 40px;
		padding: 50px 0;

		.title-area {
			width: 100%;

			display: flex;
			flex-direction: row;
			// justify-content: center;
			align-items: center;
			text-align: center;
			// gap: 15px;

			.text {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 5px;
				width: 100%;
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
