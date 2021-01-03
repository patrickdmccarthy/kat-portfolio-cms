import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="headphone" size="30"/>;

export default {
	name: 'homepage',
	title: 'Homepage',
	icon: Icon,
	type: 'document',
	fields: [
		{
			name: 'description',
			title: 'Description',
			type: 'richText',
		},
		{
			name: 'secondaryDescription',
			title: 'Secondary Description',
			type: 'richText',
		},
		{
			name: 'servicesList',
			title: 'Services List',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Title',
					type: 'string',
				},
				{
					name: 'services',
					title: 'Services',
					type: 'array',
					of: [
						{type: 'string'}
					]
				},
			]
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo',
		},
	]
};