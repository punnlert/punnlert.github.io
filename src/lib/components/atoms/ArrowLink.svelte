<script lang="ts">
	export let href: string;
	export let title: string;
	export let text: string;
</script>

<a {href} {title} target="_blank" rel="noopener noreferrer" class="link-with-arrow">
	{text}
	<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			vector-effect="non-scaling-stroke"
			d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
			fill="currentColor"
		/>
	</svg>
</a>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as *;

	a {
		transition: all 0.2s ease-in-out;
		width: auto;
		color: var(--color--text);
		fill: var(--color--text);
		text-decoration: none;
		font-weight: 400;
		background-image: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		svg {
			width: 12px;
			height: 12px;
			transition: transform 0.2s ease;

			@include for-phone-only {
				display: none;
			}
		}

		&:hover svg {
			transform: rotate(45deg);
		}

		@include for-phone-only {
			--size: 70px;
			background-color: var(--color--primary);
			width: var(--size);
			height: var(--size);
			border-style: solid;
			border-width: 1px;
			justify-content: center;
			text-align: center;
			border-radius: var(--size);
			display: inline-flex;
			align-items: center;
			gap: 7px;
			font-size: var(--small-font-size);
			font-weight: 600;
		}
	}
</style>
