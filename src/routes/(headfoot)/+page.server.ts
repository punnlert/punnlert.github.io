import features from '$lib/data/features';
import { filteredPosts } from '$lib/data/blog-posts';
import rawPublications from '$lib/data/publications';
import { Publication } from '$lib/utils/types';
import rawEvents from '$lib/data/events';
import type { Event } from '$lib/utils/types';

const sortedPublications = (unsortedPublications: Publication[]) => {
	return unsortedPublications.sort((a, b) => {
		return new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0;
	});
};

const sortedEvents = (unsortedEvents: Event[]) => {
	return unsortedEvents.sort((a, b) => {
		return new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0;
	});
};

export async function load() {
	const posts = filteredPosts.slice(0, 3);
	const publications = sortedPublications(rawPublications);
	const events = sortedEvents(rawEvents);

	return {
		features,
		posts,
		publications,
		events
	};
}
