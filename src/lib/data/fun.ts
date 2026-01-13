import type { Hobbies } from '$lib/utils/types';

// const getGraphics = () => {
// 	const paths = import.meta.glob('/static/images/graphics/**');
// 	return Object.keys(paths).map((graphic) => graphic.substring(7));
// };
//
// const graphicsPaths = getGraphics();
//
const graphicsPaths = [
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png',
	'/images/graphics/ChronicleHoodies-s2024.png'
];

export default [
	{
		name: 'Graphic Designs',
		description: 'Posters and designs I made for clubs and organizations over the years',
		images: graphicsPaths,
		slug: 'graphics'
	}
] as Hobbies[];
