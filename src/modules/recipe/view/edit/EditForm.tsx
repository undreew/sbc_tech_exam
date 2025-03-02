import React from 'react';

import EditFormDetails from './EditFormDetails';

import {some} from 'lodash';

import {RecipesItem} from '@/models/recipe';
import {PageContent, PageForm} from '@/components/page';

import useEdit from './useEdit';
import useDeleteItem from './useDeleteItem';

interface Props {
	isLoading: boolean;
	data: RecipesItem;
}

function EditForm(props: Props) {
	const {isLoading: isFetching, data} = props;
	const {isLoading: isDeleting, onDelete} = useDeleteItem(data);
	const {isLoading: isEditing, onSubmit, formValues} = useEdit(data);

	const isLoading = some([isFetching, isEditing, isDeleting]);

	return (
		<PageForm
			deleteButton
			deleteAction={onDelete}
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<>Image</>
				<EditFormDetails formValues={formValues} isLoading={isLoading} />
			</PageContent>
		</PageForm>
	);
}

export default EditForm;
