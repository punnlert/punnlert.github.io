import type { Hobbies } from '$lib/utils/types';

const getGraphics = () => {
	const paths = import.meta.glob('/static/images/graphics/**');
	return Object.keys(paths).map((graphic) => graphic.substring(7));
};

const getRenderings = () => {
	const paths = import.meta.glob('/static/images/renderings/**');
	console.log(paths);
	return Object.keys(paths).map((rendering) => rendering.substring(7));
};

const graphicsPaths = getGraphics();
const renderingPaths = getRenderings();

export default [
	{
		name: 'Graphic Design',
		tools: ['Adobe Illustrator', 'Adobe Photoshop'],
		description: 'Posters and designs I made for clubs and organizations over the years.',
		images: graphicsPaths,
		slug: 'skills/graphics'
	},
	{
		name: 'Rendering',
		tools: ['Keyshot'],
		description: 'Renderings for my projects',
		images: renderingPaths,
		slug: 'skills/renderings'
	}
] as Hobbies[];
