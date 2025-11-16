export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
	id: string;
	createdAt: number;
	color: string;
	size: number;
	style: any;
};

export type TagType = {
	label: string;
	color?: 'primary' | 'secondary';
};

export type SocialLink = {};

export type img = {
	src: string;
	alt: string;
};

export type Feature = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
};

export type Graphics = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
	date: string;
	slug: string;
};

export type Publication = {
	name: string;
	shortName: string;
	description: string;
	shortDescription: string;
	youtube: string;
	image: string;
	tags: TagType[];
	authors: string[];
	venue: string;
	reference: string;
	links: { text: string; url: string }[];
	date: string;
	slug: string;
	awards: string[];
};

export type BlogPost = {
	tags: string[];
	keywords: string[];
	teammates: string[];
	hidden: boolean;
	importance: number;
	slug: string;
	title: string;
	startDate: string;
	endDate: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPost[];
	coverImage: string | undefined;
	awards: string[];
};

export type Event = {
	description: string;
	date: string;
};
