import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="headphone" size="30"/>;

export default {
	name: 'header',
	title: 'header',
	icon: Icon,
	type: 'document',
	fields: [
		
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
	]
};