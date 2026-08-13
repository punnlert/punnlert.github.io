<script lang="ts">
	import { onMount } from 'svelte';
	import type { Body } from 'matter-js';
	import ArrowLink from '$lib/components/atoms/ArrowLink.svelte';

	let width: number;
	let stage: HTMLDivElement;
	let businessCardWidth = 600;
	let businessCardHeight = 300;
	let proxy: Body;
	let realCard: HTMLDivElement;
	let raf: number;

	function update() {
		realCard.style.transform = `translate(${proxy.position.x - realCard.offsetWidth / 2}px, ${
			proxy.position.y - realCard.offsetHeight / 2
		}px) rotate(${proxy.angle}rad)`;
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

		if (w < businessCardWidth) {
			businessCardWidth = w - 20;
			businessCardHeight = businessCardWidth * 0.5;
		}

		const engine = Matter.Engine.create();

		proxy = Matter.Bodies.rectangle(
			w / 2,
			-businessCardHeight,
			businessCardWidth,
			businessCardHeight,
			{
				restitution: 0.2,
				density: 500,
				friction: 0,
				angle: Math.random() * 1.0 - 0.5,
				render: {
					visible: false
				}
			}
		);
		const wallOptions = { isStatic: true, render: { visible: false } };

		// oversized so a resize only needs repositioning, never rescaling
		const SPAN = 20000;
		const groundY = (height: number) => height / 2 + businessCardHeight / 2;
		const ground = Matter.Bodies.rectangle(w / 2, groundY(h), SPAN, 0.1, wallOptions);
		const leftWall = Matter.Bodies.rectangle(-25, h / 2, 50, SPAN, wallOptions);
		const rightWall = Matter.Bodies.rectangle(w + 25, h / 2, 50, SPAN, wallOptions);
		Matter.Composite.add(engine.world, [proxy, ground, leftWall, rightWall]);

		// no Matter.Render: every body is render.visible:false, so it repainted a
		// full-viewport canvas each frame for zero output. The DOM card is the view.
		const runner = Matter.Runner.create();
		Matter.Runner.run(runner, engine);

		// walls are positioned once at create, so re-sync them on resize
		function resize() {
			const nw = stage.clientWidth;
			const nh = stage.clientHeight;

			Matter.Body.setPosition(ground, { x: nw / 2, y: groundY(nh) });
			Matter.Body.setPosition(leftWall, { x: -25, y: nh / 2 });
			Matter.Body.setPosition(rightWall, { x: nw + 25, y: nh / 2 });
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
		style="--height:{`${businessCardHeight}px`}; --width:{`${businessCardWidth}px`}"
		bind:this={realCard}
	>
		<h1>Punn Lertjaturaphat</h1>
		<h5>designer, maker, developer</h5>
		<div class="info">
			<p>punnlert.com</p>
			<p>punnlertjaturaphat [at] gmail [dot] com</p>
		</div>
		<div class="site">
			<ArrowLink href="/" text="go to website" title="punn's website" />
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
	}

	.site {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 20px;
		color: var(--color--primary);
		font-weight: 700;
		@include for-phone-only {
			padding: 10px;
		}
	}

	.business-card {
		position: absolute;
		top: 0;
		left: 0;
		line-height: 1;
		width: var(--width);
		height: var(--height);
		background-color: var(--color--page-background);
		padding: 20px;
		color: var(--color--primary);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h1 {
			font-family: var(--font--emphasize);

			@include for-phone-only {
				font-size: var(--h3-font-size);
			}
		}
	}
</style>
