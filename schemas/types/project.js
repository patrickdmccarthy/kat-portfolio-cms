import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="headphone" size="30"/>;

export default {
	name: 'project',
	title: 'Project',
	icon: Icon,
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'shortDescription',
			title: 'Short Description',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'longDescription',
			title: 'Long Description',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'client',
			title: 'Client',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'projectType',
			title: 'Project Type',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'cardImage',
			title: 'Card Image',
			type: 'image',
			validation: Rule => Rule.required(),
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{type: 'image'}],
			validation: Rule => Rule.required(),
		},
		{
			name: 'published',
			title: 'Published',
			type: 'boolean',
			validation: Rule => Rule.required(),
		},


	]
};