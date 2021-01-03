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
			name: 'link',
			title: 'Link',
			type: 'link',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: Rule => Rule.required(),
			options: {
				source: 'title',
			}
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
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					title: 'Image',
					name: 'image',
					type: 'image',
				},
				{
					title: "Video file",
					name: "video",
					type: "mux.video"
				}
			],
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