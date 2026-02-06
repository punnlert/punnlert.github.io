<script lang="ts">
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import RecentPublications from '$lib/components/organisms/RecentPublications.svelte';
	import RecentEvents from '$lib/components/organisms/RecentEvents.svelte';
	import type { Feature, BlogPost, Publication, Event } from '$lib/utils/types';
	import Announcement from '$lib/components/organisms/Announcement.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
		publications: Publication[];
		events: Event[];
	};

	let { features, posts, publications, events } = data;
</script>

<Announcement />
<div class="container">
	<!-- <Hero /> -->

	<About />
	{#if events && events.length > 0}
		<RecentEvents {events} />
	{/if}
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	{#if publications && publications.length > 0}
		<RecentPublications {publications} />
	{/if}
	<!-- <Features {features} /> -->
</div>
