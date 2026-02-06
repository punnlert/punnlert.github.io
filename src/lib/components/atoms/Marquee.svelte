<script lang="ts">
	export let style = '';

	export let pauseOnHover = false;
	export let pauseOnClick = false;
	export let direction = 'left';

	export let speed = 100;

	export let play = true;

	export let gradientColor = '';

	export let gradientWidth = '';

	export let gap = '0px';

	let containerWidth: number;
	let marqueeWidth: number;
	let gradient = !!gradientColor || !!gradientWidth;

	$: duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
</script>

<div
	{style}
	class="marquee-container"
	bind:clientWidth={containerWidth}
	style:--gap={gap}
	style:--play={play}
	style:--gradientColor={gradientColor}
	style:--gradientWidth={gradientWidth}
	style:--direction={direction === 'left' ? 'normal' : 'reverse'}
	style:--duration={duration + 's'}
	style:--pause-on-hover={pauseOnHover ? 'paused' : 'running'}
	style:--pause-on-click={pauseOnClick ? 'paused' : 'running'}
>
	{#if gradient}
		<div class="gradient" data-testid="marquee-gradient" />
	{/if}
	<div class="marquee" bind:clientWidth={marqueeWidth} data-testid="marquee-slot">
		<slot />
	</div>
	<div class="marquee" data-testid="marquee-slot">
		<slot />
	</div>
</div>

<style>
	.marquee-container {
		display: flex;
		width: 100%;
		/* overflow-x: hidden; */
		flex-direction: row;
		position: relative;
	}

	.marquee-container:hover .marquee {
		animation-play-state: var(--pause-on-hover);
	}

	.marquee-container:active .marquee {
		animation-play-state: var(--pause-on-click);
	}

	.marquee {
		flex: 0 0 auto;
		min-width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--gap, 0);
		animation: scroll var(--duration) linear infinite;
		animation-play-state: var(--play);
		animation-direction: var(--direction);
		padding-right: var(--gap, 0);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.initial-child-container {
		flex: 0 0 auto;
		display: flex;
		min-width: auto;
		flex-direction: row;
	}

	.gradient::after,
	.gradient::before {
		background: linear-gradient(to right, var(--gradientColor, white), transparent);
		content: '';
		height: 100%;
		position: absolute;
		width: var(--gradientWidth, 10%);
		z-index: 2;
	}

	.gradient::before {
		left: 0;
		top: 0;
	}

	.gradient::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
</style>
