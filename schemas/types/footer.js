import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji="foot" size="30"/>;

export default {
	name: 'footer',
	title: 'Footer',
	icon: Icon,
	type: 'document',
	fields: [
		{
			name: 'copy',
			title: 'Copy',
			type: 'richText',
		},
	]
};