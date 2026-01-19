<script lang="ts">
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'MEASUREMENT_ID', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

</script>

<slot />

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-HK7XKY17D1"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-HK7XKY17D1');
	</script>
</svelte:head>
