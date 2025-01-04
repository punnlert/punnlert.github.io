import graphics from '$lib/data/graphics';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const work = graphics.find((graphic) => params.work.toLowerCase() == graphic.slug.toLowerCase());
	if (work) {
		return {
			work
		};
	}

    error(404, 'Not found');
}
