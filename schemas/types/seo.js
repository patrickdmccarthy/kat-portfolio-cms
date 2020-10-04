import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="magnifying-glass-tilted-left" size="30"/>;

export default {
	name: 'seo',
	title: 'SEO',
	icon: Icon,
	type: 'object',
	fields: [
		//
		// === Meta ===
		//
		
		{
			name: 'metaTitle',
			title: 'Meta Title',
			type: 'string',
		},
		{
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
			rows: 2,
		},
		{
			name: 'metaKeywords',
			title: 'Meta Keywords',
			type: 'string',
		},

		//
		// === Opengraph ===
		//
		{
			name: 'openGraphTitle',
			title: 'OpenGraph Title',
			type: 'string',
		},
		{
			name: 'openGraphDescription',
			title: 'OpenGraph Description',
			type: 'text',
			rows: 2,
		},
		{
			name: 'openGraphImage',
			title: 'OpenGraph Image',
			type: 'image',
			description: 'Recommended size is 1200x630. No larger than 1mb.',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				}
			],
		},

		{
			name: 'twitterTitle',
			title: 'Twitter Title',
			type: 'string',
		},
		{
			name: 'twitterDescription',
			title: 'Twitter Description',
			type: 'text',
			rows: 2,
		},
		{
			name: 'twitterImage',
			title: 'Twitter Image',
			type: 'image',
			description: 'Recommended size is 1200x630. No larger than 1mb.',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				}
			],
		},
		
		
	]
};