import rawPublications from '$lib/data/publications';
import type { Publication } from '$lib/utils/types';

const sortedPublications = (unsortedPublications: Publication[]) => {
	return unsortedPublications.sort((a, b) => {
		return new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0;
	});
};

export async function load() {
	return {
		publications: sortedPublications(rawPublications)
	};
}
