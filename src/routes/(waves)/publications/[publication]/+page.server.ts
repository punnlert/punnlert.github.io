import publications from '$lib/data/publications';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const publication = publications.find(
		(publication) => params.publication?.toLowerCase() == publication.slug.toLowerCase()
	);
	if (publication) {
		return {
			publication
		};
	}

	error(404, 'Not found');
}
