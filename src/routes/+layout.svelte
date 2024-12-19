<script lang="ts">
	import '$lib/scss/global.scss';
	import Analytics from '$lib/data/Analytics.svelte';
	import ViewTransition from '$lib/components/atoms/Navigation.svelte'
</script>

<Analytics />
<ViewTransition />

<slot />