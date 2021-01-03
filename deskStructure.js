import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import Emoji from 'react-emojis';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

const GearIcon = () => <Emoji emoji="gear" size="30"/>;
const HomeIcon = () => <Emoji emoji="house" size="30"/>;
const ArticleIcon = () => <Emoji emoji="newspaper" size="30"/>;
const ProjectListIcon = () => <Emoji emoji="woman-technologist" size="30"/>;

// const PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL;

//
// === Menu Items ===
//

const homepageMenuItem = S.listItem()
	.title('Homepage')
	.icon(HomeIcon)
	.child(
		S.document()
			.schemaType('homepage')
			.documentId('homepage')
			.views([
				S.view.form().icon(EditIcon),
			])
	);

const projectListMenuItem = S.listItem()
	.title('Project List')
	.icon(ProjectListIcon)
	.child(
		S.document()
			.schemaType('projectList')
			.documentId('projectList')
			.views([
				S.view.form().icon(EditIcon),
			])
	);


const projectMenuItem = S.listItem()
.title('Projects')
.schemaType('project')
.icon(ArticleIcon)
.child(
	S.documentTypeList('project').title('Projects')
		.child(documentId =>
			S.document()
				.documentId(documentId)
				.schemaType('project')
				.views([
					S.view.form().icon(EditIcon),
				])
		)
);

const configParent = S.listItem()
	.title('Config')
	.icon(GearIcon)
	.child(
		S.list()
			.title('Config')
			.items([
				S.documentListItem()
					.id('header')
					.title('Header')
					.schemaType('header'),
				S.documentListItem()
					.id('footer')
					.title('Footer')
					.schemaType('footer'),

			])
	);

//
// === Structure ===
//

export default () =>
	S.list()
		.title('Content')
		.items([
			homepageMenuItem,
			projectListMenuItem,
			projectMenuItem,
			S.divider(),
			configParent,
		]);
