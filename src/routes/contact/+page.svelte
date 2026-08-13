<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowLink from '$lib/components/atoms/ArrowLink.svelte';

	let width: number;
	let stage: HTMLDivElement;
	let businessCardWidth = 600;
	let businessCardHeight = 300;
	let proxy;
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

		const engine = Matter.Engine.create();

		proxy = Matter.Bodies.rectangle(
			w / 2,
			-businessCardHeight,
			businessCardWidth,
			businessCardHeight,
			{
				restitution: 0.7,
				friction: 2,
				frictionStatic: 20,
				density: 100,
				angle: Math.random() * 1.0 - 0.5,
				render: {
					visible: false
				}
			}
		);
		const wallOptions = { isStatic: true, render: { visible: false } };

		const ground = Matter.Bodies.rectangle(w / 2, h - businessCardHeight / 2, w, 0.1, wallOptions);
		const leftWall = Matter.Bodies.rectangle(-25, h / 2, 50, h, wallOptions);
		const rightWall = Matter.Bodies.rectangle(w + 25, h / 2, 50, h, wallOptions);
		Matter.Composite.add(engine.world, [proxy, ground, leftWall, rightWall]);

		const render = Matter.Render.create({
			element: stage,
			engine,
			options: {
				width: w,
				height: h,
				wireframes: false,
				background: 'transparent'
			}
		});
		Matter.Render.run(render);

		const runner = Matter.Runner.create();
		Matter.Runner.run(runner, engine);

		update();

		return () => {
			cancelAnimationFrame(raf);
			Matter.Render.stop(render);
			Matter.Runner.stop(runner);
			Matter.Composite.clear(engine.world, false);
			Matter.Engine.clear(engine);
		};
	}
</script>

<svelte:window bind:innerWidth={width} />

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
	#canvas {
		position: absolute;
		top: 0;
		display: block;
		width: 100vw;
		height: 100vh;
		background-color: var(--color--primary);
	}

	.site {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 20px;
		color: var(--color--primary);
		font-weight: 700;
	}

	.business-card {
		position: relative;
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
		}
	}
</style>
