import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="headphone" size="30"/>;

export default {
	name: 'projectList',
	title: 'Project List',
	icon: Icon,
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'projects',
			title: 'Projects',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					type: 'reference',
					to: [{type: 'project'}]
				},
			],
		},
	]
};