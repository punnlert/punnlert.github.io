import publications from '$lib/data/publications';
import { error } from '@sveltejs/kit';
import { keywords, siteBaseUrl, title } from '$lib/data/meta';

export async function load({ params }) {
	const publication = publications.find(
		(publication) => params.publication?.toLowerCase() == publication.slug.toLowerCase()
	);
	let metaKeywords = keywords;

	if (publication?.tags?.length) {
		metaKeywords = publication.tags.map((t) => t.label).concat(metaKeywords);
	}
	if (publication) {
		return {
			publication,
			meta: {
				canonical: `${siteBaseUrl}/publications/${publication.slug}`,
				keywords: metaKeywords.join(', '),
				description: publication.shortDescription,
				title: `${title} - ${publication.shortName}`,
				image: publication.image
			}
		};
	}

	error(404, 'Not found');
}
