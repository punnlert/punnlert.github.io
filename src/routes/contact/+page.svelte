<script lang="ts">
	import { onMount } from 'svelte';
	import type { Body, IConstraintDefinition } from 'matter-js';
	import ArrowLink from '$lib/components/atoms/ArrowLink.svelte';
	import { goto } from '$app/navigation';

	// the card is always laid out at its design size; small screens scale the whole
	// thing down so proportions, padding and type hierarchy stay identical everywhere
	const CARD_WIDTH = 600;
	const CARD_HEIGHT = 300;
	const MARGIN = 20;

	let width: number;
	let stage: HTMLDivElement;
	let cardScale = 1;
	let proxy: Body;
	let realCard: HTMLDivElement;
	let raf: number;

	const scaleFor = (stageWidth: number) => Math.min(1, (stageWidth - MARGIN * 2) / CARD_WIDTH);

	function update() {
		// translate positions the unscaled box, then rotate/scale run about its centre
		// (transform-origin 50% 50%), so the centre stays exactly on proxy.position
		const x = proxy.position.x - CARD_WIDTH / 2;
		const y = proxy.position.y - CARD_HEIGHT / 2;
		realCard.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${proxy.angle}rad) scale(${cardScale})`;
		raf = window.requestAnimationFrame(update);
	}

	onMount(() => {
		let cleanup: (() => void) | undefined;
		let destroyed = false;

		init().then((teardown) => {
			if (destroyed) teardown();
			else cleanup = teardown;
		});

		return () => {
			destroyed = true;
			cleanup?.();
		};
	});

	async function init() {
		const Matter = await import('matter-js');

		const w = stage.clientWidth;
		const h = stage.clientHeight;

		cardScale = scaleFor(w);

		const engine = Matter.Engine.create({ enableSleeping: true });
		engine.gravity.scale = 0.002;

		// collisions happen in screen pixels, so the body matches the scaled card
		proxy = Matter.Bodies.rectangle(
			w / 2,
			-CARD_HEIGHT * cardScale,
			CARD_WIDTH * cardScale,
			CARD_HEIGHT * cardScale,
			{
				restitution: 0.3,
				density: 500,
				friction: 0,
				angle: Math.random() * 1.0 - 0.5,
				render: {
					visible: false
				}
			}
		);
		const wallOptions = { isStatic: true, render: { visible: false } };

		const SPAN = 20000;
		const THICKNESS = 200;
		const groundY = (height: number, scale: number) =>
			height / 2 + (CARD_HEIGHT * scale) / 2 + THICKNESS / 2;
		const ground = Matter.Bodies.rectangle(
			w / 2,
			groundY(h, cardScale),
			SPAN,
			THICKNESS,
			wallOptions
		);
		const ceiling = Matter.Bodies.rectangle(
			w / 2,
			-CARD_HEIGHT * cardScale * 2 - THICKNESS * 2,
			SPAN,
			THICKNESS,
			wallOptions
		);
		const leftWall = Matter.Bodies.rectangle(-100, h / 2, 50, SPAN, wallOptions);
		const rightWall = Matter.Bodies.rectangle(w + 100, h / 2, 50, SPAN, wallOptions);
		Matter.Composite.add(engine.world, [proxy, ceiling, ground, leftWall, rightWall]);

		const mouse = Matter.Mouse.create(stage);
		const mouseConstraint = Matter.MouseConstraint.create(engine, {
			mouse,
			// @types/matter-js omits angularStiffness, but Constraint.solve scales torque
			// by (1 - angularStiffness) — left at its default of 1, a corner grab has no spin
			constraint: {
				stiffness: 0.2,
				angularStiffness: 0
			} as IConstraintDefinition
		});

		Matter.Composite.add(engine.world, mouseConstraint);

		const runner = Matter.Runner.create();
		Matter.Runner.run(runner, engine);

		function resize() {
			const nw = stage.clientWidth;
			const nh = stage.clientHeight;
			const nextScale = scaleFor(nw);

			if (nextScale !== cardScale) {
				// Body.scale takes a ratio, so divide out the scale already baked into the body
				const ratio = nextScale / cardScale;
				Matter.Body.scale(proxy, ratio, ratio);
				cardScale = nextScale;
			}

			Matter.Body.setPosition(ground, { x: nw / 2, y: groundY(nh, cardScale) });
			Matter.Body.setPosition(leftWall, { x: -100, y: nh / 2 });
			Matter.Body.setPosition(rightWall, { x: nw + 100, y: nh / 2 });

			// the ground moved under a possibly-sleeping card; let it re-settle
			Matter.Sleeping.set(proxy, false);
		}

		window.addEventListener('resize', resize);

		update();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(raf);
			Matter.Runner.stop(runner);
			Matter.Composite.clear(engine.world, false);
			Matter.Engine.clear(engine);
		};
	}
</script>

<svelte:window bind:innerWidth={width} />

<!-- scoped to this page: the <style> only exists in <head> while this route is mounted -->
<svelte:head>
	<style>
		html {
			overflow: hidden;
			scrollbar-gutter: auto;
		}
		body {
			overflow: hidden;
		}
	</style>
</svelte:head>

<div id="canvas" bind:this={stage}>
	<div
		class="business-card"
		style="--height:{`${CARD_HEIGHT}px`}; --width:{`${CARD_WIDTH}px`}"
		bind:this={realCard}
	>
		<div class="about">
			<h1>Punn Lertjaturaphat</h1>
			<h3>designer, maker, developer</h3>
		</div>
		<div class="info">
			<p>punnlert.com</p>
			<p>punnlertjaturaphat [at] gmail [dot] com</p>
		</div>
		<!-- Matter's touch handlers are bound to #canvas and preventDefault() every touch,
		     which kills the synthesized click. Stop the event before it reaches them. -->
		<div
			class="site"
			on:touchstart|stopPropagation
			on:touchmove|stopPropagation
			on:touchend|stopPropagation
		>
			<button class="button" on:click={() => goto('/')}
				>go to my portfolio

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
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as *;

	#canvas {
		/* fixed + inset instead of 100vw/100vh: vw counts the scrollbar gutter
		   (html has scrollbar-gutter: stable) and vh ignores mobile browser chrome */
		position: fixed;
		inset: 0;
		display: block;
		overflow: hidden;
		background-color: var(--color--primary);
		/* stylelint-disable-next-line declaration-property-value-allowed-list -- root size the rem scale is built on */
		font-size: 16px;

		@include for-phone-only {
			h1 {
				font-size: var(--h1-font-size);
			}
			h3 {
				font-size: var(--h3-font-size);
			}
			p {
				font-size: var(--h5-font-size);
			}
			:global(a) {
				font-size: var(--p-font-size);
			}
		}
	}

	button {
		background-color: var(--color--primary);
		border: none;
		padding: 10px;
		font-size: var(--h5-font-size);
		font-weight: 700;
		color: var(--color--page-background);
		display: flex;
		gap: 10px;
		line-height: 1;
		cursor: pointer;

		svg {
			transition: all 0.2s ease-in-out;
		}

		&:hover svg {
			transform: rotate(45deg);
		}
	}

	.site {
		color: var(--color--primary);
		font-weight: 700;
	}

	.info {
		@include for-phone-only {
			display: none;
		}
	}

	.business-card {
		position: absolute;
		top: 0;
		left: 0;
		/* the scale in the transform pivots here, keeping the centre on proxy.position */
		transform-origin: 50% 50%;
		line-height: 1;
		width: var(--width);
		height: var(--height);
		background-color: var(--color--page-background);
		padding: 20px;
		color: var(--color--primary);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: var(--card-shadow);
		transition: box-shadow 0.4s ease;

		&:hover {
			box-shadow: var(--card-shadow-hover);
		}

		h1 {
			font-family: var(--font--emphasize);
		}
	}
</style>
