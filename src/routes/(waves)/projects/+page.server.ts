import { filteredPosts } from '$lib/data/blog-posts';
import type { PageServerLoad } from './$types';
export const prerender = false;

export const load: PageServerLoad = async ({ url }) => {
	const filter = url.searchParams.getAll('filter');
	return {
		posts: filteredPosts,
		allTags: [...new Set(filteredPosts.flatMap((post) => post.tags ?? []))].sort(),
		filter
	};
};
