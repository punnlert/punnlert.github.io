<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import { page } from '$app/stores';

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href={$page.data.meta?.canonical ?? siteBaseUrl} />
	<meta name="keywords" content={$page.data.meta?.keywords ?? keywords.join(', ')} />

	<meta name="description" content={$page.data.meta?.description ?? description} />
	<meta property="og:description" content={$page.data.meta?.description ?? description} />
	<meta name="twitter:description" content={$page.data.meta?.description ?? description} />

	<title>{$page.data.meta?.title ?? title}</title>
	<meta property="og:title" content={$page.data.meta?.title ?? title} />
	<meta name="twitter:title" content={$page.data.meta?.title ?? title} />

	<meta property="og:image" content={$page.data.meta?.image ?? image} />
	<meta name="twitter:image" content={$page.data.meta?.image ?? image} />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- <Waves /> -->

<Header />

<main>
	<slot />
</main>

<Footer />
