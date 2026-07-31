import rawGraphic from '$lib/data/graphics';
import type { Graphics } from '$lib/utils/types';

const sortedGraphics = (unsortedGraphics: Graphics[]) => {
	return unsortedGraphics.sort((a, b) => {
		return new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0;
	});
};

export async function load() {
	return {
		graphics: sortedGraphics(rawGraphic)
	};
}
