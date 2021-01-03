import React from 'react';
import Emoji from 'react-emojis';

const Icon = () => <Emoji emoji='memo' size='30'/>;

export default {
	name: 'richText',
	title: 'Rich Text',
	icon: Icon,
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{
					title: 'Normal',
					value: 'normal'
				},
				{
					title: 'Heading H1',
					value: 'h1',
				},
				{
					title: 'Heading H2',
					value: 'h2',
				},
				{
					title: 'Heading H3',
					value: 'h3',
				},
			],
			marks: {
				decorators: [
					{
						title: 'Strong',
						value: 'strong'
					},
					{
						title: 'Emphasis',
						value: 'em'
					},
				],
				annotations: [
					{
						name: 'color',
						type: 'object',
						title: 'Color',
						fields: [
							{
								name: 'color',
								title: 'Color',
								type: 'color',
							}
						],
						blockEditor: {
							icon: () => <span>🎨</span>,
							render: ({color = {hex: '#000'}, children}) => <span style={{fontWeight: 'bold', color: color.hex, background: 'none'}}>{children}</span>,
						}
					},
					{
						name: 'link',
						type: 'object',
						title: 'Link',
						fields: [
							{
								name: 'title',
								title: 'Title',
								type: 'string',
							},
							{
								name: 'href', // this is for blocks only
								title: 'URL',
								type: 'url',
								validation: Rule => Rule
									.required()
									.uri({
										allowRelative: true,
										scheme: ['http', 'https', 'tel', 'mailto'],
									})
							},
							{
								name: 'openInNewWindow',
								title: 'Open In New Window',
								type: 'boolean',
								layout: 'checkbox'
							},
						]
					}
				],
			},
		}
	],
};
