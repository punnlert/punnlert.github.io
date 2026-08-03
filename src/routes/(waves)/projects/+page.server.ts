import { filteredPosts } from '$lib/data/blog-posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		posts: filteredPosts,
		allTags: [...new Set(filteredPosts.flatMap((post) => post.tags ?? []))].sort()
	};
};
