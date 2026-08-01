<script lang="ts">
	import '$lib/scss/global.scss';
	import 'lenis/dist/lenis.css';
	import Analytics from '$lib/data/Analytics.svelte';
	import ViewTransition from '$lib/components/atoms/Navigation.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
			autoToggle: true,
			anchors: true,
			allowNestedScroll: true,
			stopInertiaOnNavigate: true
		});

		return () => lenis.destroy();
	});
</script>

<Analytics />
<ViewTransition />

<Header />

	<slot />

<Footer />
