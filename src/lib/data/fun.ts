import type { Hobbies } from '$lib/utils/types';

const allImages = import.meta.glob([
	'/static/images/graphics/**',
	'/static/images/renderings/**',
	'/static/images/ipd/**',
	'/static/images/frontends/**'
]);

const getPaths = (folder: string) =>
	Object.keys(allImages)
		.filter((path) => path.startsWith(`/static/images/${folder}/`))
		.map((path) => path.substring(7));

const graphicsPaths = getPaths('graphics');
const renderingPaths = getPaths('renderings');
const ipdPaths = getPaths('ipd');
const frontendPaths = getPaths('frontends');

export default [
	{
		name: 'Interactive Prototype',
		tools: ['Raspberry Pi pico', 'Raspberry Pi 4', 'Arduino', 'Micropython'],
		description: 'Making my projects interactive with microprocessors.',
		images: ipdPaths,
		slug: 'projects?filter=Interaction+Design&filter=Microcomputer'
	},
	{
		name: 'Rendering & CAD',
		tools: ['Keyshot', 'Rhino', 'Grasshopper', 'Onshape'],
		description: 'Renderings for my projects',
		images: renderingPaths,
		slug: 'projects?filter=CAD&filter=Rendering'
	},
	{
		name: 'Graphic Design',
		tools: ['Adobe Illustrator', 'Adobe Photoshop'],
		description: 'Posters and designs I made for clubs and organizations over the years.',
		images: graphicsPaths,
		slug: 'skills/graphics'
	},
	{
		name: 'Frontend Development',
		tools: ['Python', 'HTML/Javascript/css/sass', 'Sveltekit', 'Next.JS', 'Web-motion'],
		description: 'Web Development',
		images: frontendPaths,
		slug: 'projects?filter=Front-end+Development&filter=Javascripl'
	}
] as Hobbies[];
