<script lang="ts">
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to }) => {
		window.gtag?.('event', 'page_view', {
			page_path: to?.url.pathname,
			page_location: window.location.href,
			page_title: document.title
		});
	});
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
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-HK7XKY17D1', { send_page_view: false });
	</script>
</svelte:head>
