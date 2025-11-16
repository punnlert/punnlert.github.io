import type { Publication } from '$lib/utils/types';

export default [
	{
		name: 'Inline Visualization and Manipulation of Real-Time Hardware Logs for Embedded Programs (2024)',
		shortName: 'Inline',
		youtube: 'https://www.youtube.com/watch?v=gAf5mNowg7A',
		description:
			'The development of user-friendly embedded prototyping systems like Arduino has made creating interactive devices more accessible. However, debugging these systems is challenging due to the intertwined nature of software and hardware issues. Existing tools often require hardware instrumentation or log visualization through serial monitors. To address this, the authors designed Inline, a programming tool that simplifies debugging by displaying hardware logs directly within the code, providing real-time execution flow tracking and an expression language for log manipulation. A study with twelve users demonstrated the tool’s effectiveness in aiding debugging tasks.',
		shortDescription:
			'A programming tool that simplifies debugging by displaying hardware logs directly within the code, providing real-time execution flow tracking and an expression language for log manipulation.',
		image: '/images/publications/inline.png',
		tags: [
			{ label: 'Physical Computing', color: 'primary' },
			{ label: 'Debugging', color: 'primary' },
			{ label: 'Programming', color: 'primary' }
		],
		authors: [
			'Andrea Bianchi',
			'Zhi Lin Yap',
			'Punn Lertjaturaphat',
			'Austin Z. Henley',
			'Kongpyung Justin Moon',
			'Yoonji Kim'
		],
		venue: 'EICS 2024',
		reference: 'Reference 1',
		links: [
			{ text: 'paper', url: 'files/publications/Bianchi_Inline_PACM2024.pdf' },
			{ text: 'doi', url: 'https://doi.org/10.1145/3660250' }
		],
		date: '2024-05-20',
		slug: 'inline-2024',
		awards: ['Honorable Mention']
	},
	{
		name: 'StitchFlow: Crochet Patterns With Stitch Tracking and Process Sharing (2025)',
		shortName: 'StitchFlow',
		youtube: 'https://www.youtube.com/watch?v=Qo6rLz8-52Y',
		description:
			'Crochet is a manual craft characterized by improvisation and creative flow, which can be disrupted by tasks like documenting patterns and tracking progress. To address this, StitchFlow was developed to help crocheters stay immersed in their work by automatically documenting the process using motion sensors to track hand gestures and stitch patterns. The system allows users to view, edit, and combine designs through a graphical interface, supporting creativity and variation. It also facilitates sharing by exporting documentation as written patterns, crochet charts, or interactive flows. User studies with eight crocheters showed that StitchFlow preserved creative flow, encouraged exploration, and made pattern sharing easier.',
		shortDescription:
			'A system that helps crocheters stay immersed in their work by automatically documenting the process using motion sensors to track hand gestures and stitch patterns.',
		image: '/images/publications/stitchflow.png',
		tags: [
			{ label: 'Interactive Systems', color: 'primary' },
			{ label: 'Craft', color: 'primary' },
			{ label: 'Crochet', color: 'primary' }
		],
		authors: ['Zofia Marciniak', 'Punn Lertjaturaphat', 'Andrea Bianchi'],
		venue: 'UIST 2025',
		reference: 'Reference 1',
		links: [
			{ text: 'paper', url: 'files/publications/Marciniak_StitchFlow_UIST2025.pdf' },
			{ text: 'doi', url: 'https://doi.org/10.1145/3746059.3747715' }
		],
		date: '2025-10-20',
		slug: 'stitchflow-2025'
	}
] as Publication[];
