import { filteredPosts } from '$lib/data/blog-posts';
import type { PageServerLoad } from './$types';

// This route is prerendered (see src/routes/+layout.ts), so the load function
// cannot read url.searchParams — filtering happens client-side in +page.svelte.
export const load: PageServerLoad = async () => {
	return {
		posts: filteredPosts,
		allTags: [...new Set(filteredPosts.flatMap((post) => post.tags ?? []))].sort()
	};
};
