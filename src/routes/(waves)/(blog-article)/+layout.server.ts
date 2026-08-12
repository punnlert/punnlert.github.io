import { filteredPosts } from '$lib/data/blog-posts';
import { keywords, siteBaseUrl, title } from '$lib/data/meta';

export async function load({ url }: { url: { pathname: string } }) {
	const { pathname } = url;
	const slug = pathname.replace('/', '');
	const post = filteredPosts.find((post) => post.slug === slug);

	let metaKeywords = keywords;

	if (post?.tags?.length) {
		metaKeywords = post.tags.concat(metaKeywords);
	}
	if (post?.keywords?.length) {
		metaKeywords = post.keywords.concat(metaKeywords);
	}
	if (post?.awards?.length) {
		metaKeywords = post.awards.map((val) => val.name).concat(metaKeywords);
	}

	const canonical = post ? `${siteBaseUrl}/${post?.slug}` : undefined;
	const postTitle = post ? `${post.title} - ${title}` : undefined;
const image = post ? `${siteBaseUrl}${post.coverImage}` : undefined;

	return {
		post,
		meta: {
			keywords: metaKeywords,
			description: post?.excerpt,
			canonical,
			title: postTitle,
image 
		}
	};
}
