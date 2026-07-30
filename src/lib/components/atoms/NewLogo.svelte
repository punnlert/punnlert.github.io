<script>
	export let animated = true;
</script>

<div class="logo" class:animated>
	<svg id="logo-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.69 100.69">
		<path
			class="cls-1"
			d="M17.75,30.42c.72-.56,1.11-1.47.96-2.42l-1.32-8.24c-1.14-7.08,6.26-12.45,12.64-9.16l7.42,3.81c1.2.61,2.66.19,3.35-.96l4.28-7.15c3.68-6.16,12.8-5.51,15.58,1.1l3.23,7.69c.52,1.24,1.9,1.86,3.17,1.42l7.88-2.73c6.78-2.35,13.35,4.01,11.23,10.86l-2.47,7.97c-.4,1.28.27,2.65,1.52,3.13l7.79,2.97c6.7,2.56,7.65,11.65,1.62,15.54l-7.01,4.51c-1.13.73-1.5,2.21-.84,3.38l4.06,7.29c3.49,6.27-1.62,13.84-8.75,12.94l-8.27-1.04c-1.34-.17-2.56.72-2.81,2.04l-1.58,8.19c-1.36,7.04-10.14,9.55-15.02,4.29l-5.67-6.12c-.34-.37-.76-.61-1.21-.73"
		/>
		<path
			class="cls-2"
			d="M60.57,70.02l-6.49-5.24c-1.04-.85-1.25-2.36-.48-3.45l4.81-6.81c4.13-5.86-.15-13.93-7.33-13.8l-8.33.16c-1.34.03-2.47-.99-2.58-2.33l-.71-8.31c-.6-7.15-9.06-10.57-14.47-5.86l-6.28,5.49c-.28.26-.62.43-.96.52l29.78,58.57c.27-.74.9-1.33,1.72-1.55l8.06-2.13c6.94-1.82,8.85-10.77,3.26-15.26Z"
		/>
	</svg>
</div>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	.logo {
		width: auto;
		height: 100%;
		padding-top: 8px;

		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		#logo-text {
			width: auto;
			height: 100%;
			max-height: 100px;

			.cls-1 {
				fill: var(--color--primary);
				stroke-miterlimit: 10;
			}

			.cls-2 {
				fill: var(--color--secondary);
				stroke-linejoin: round;
			}

			.cls-1,
			.cls-2 {
				stroke: var(--color--text);
				stroke-width: 3px;
			}
		}
	}
</style>
