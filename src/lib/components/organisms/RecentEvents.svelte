<script lang="ts">
	import EventField from '$lib/components/molecules/EventField.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { Event } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let events: Event[];

	let isExpanded = false;
	const shouldCollapse = events.length >= 4;

	$: displayedEvents = shouldCollapse && !isExpanded ? events.slice(0, 3) : events;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<ContentSection id="recent-events" title="Recent Events" align="top">
	<!-- <div slot="button">
		<Button href="/projects">View All</Button>
	</div> -->
	<div class="grid">
		{#each displayedEvents as event}
			<EventField description={event.description} date={event.date} />
		{/each}
		{#if shouldCollapse}
			<button class="toggle-button" on:click={toggleExpand}>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class:rotated={isExpanded}
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						vector-effect="non-scaling-stroke"
						d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
						fill="currentColor"
					/>
				</svg>
				{isExpanded ? 'Show Less' : `Show All`}
			</button>
		{/if}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0px;
		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	button {
		decoration: none;
	}

	.toggle-button {
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		text-align: right;
		gap: 10px;
		background: transparent;
		border: none;
		box-shadow: none;
		outline: none;
		padding: 10px 0px;
		margin-left: auto;
		color: var(--color--text);
		font-size: 1rem;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		svg {
			width: 12px;
			height: 12px;
			transform: rotate(180deg);
			transition: transform 0.2s ease;
		}

		svg.rotated {
			transform: rotate(0deg);
		}

		&:hover {
			svg {
				transform: rotate(135deg);
			}

			svg.rotated {
				transform: rotate(-45deg);
			}
		}
	}
</style>
