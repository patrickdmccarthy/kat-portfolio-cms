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
			type: 'text',
			rows: 3,
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo',
		},
		{
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [{type: 'project'}]
		}
	]
};