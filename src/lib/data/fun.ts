import type { Hobbies } from '$lib/utils/types';

const getGraphics = () => {
	const paths = import.meta.glob('/static/images/graphics/**');
	return Object.keys(paths).map((graphic) => graphic.substring(7));
};

const graphicsPaths = getGraphics();

export default [
	{
		name: 'Graphic Designs',
		description: 'Posters and designs I made for clubs and organizations over the years.',
		images: graphicsPaths,
		slug: 'fun/graphics'
	},
	// {
	// 	name: 'Sketches & Rendering',
	// 	description: 'Sketches and renderings for work. Some from projects and some for practice.',
	// 	images: graphicsPaths,
	// 	slug: 'fun/graphics'
	// }
] as Hobbies[];
