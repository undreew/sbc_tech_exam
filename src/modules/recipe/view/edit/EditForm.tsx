import React from 'react';

import {some} from 'lodash';

import useEdit from './useEdit';
import useDeleteItem from './useDeleteItem';
import useGetEditItem from './useGetEditItem';

import EditImageField from './EditImageField';
import EditFormDetails from './EditFormDetails';

import {PageContent, PageForm} from '@/components/page';

function EditForm() {
	const {isLoading: isFetching, data} = useGetEditItem();
	const {isLoading: isDeleting, onDelete} = useDeleteItem(data);
	const {isLoading: isEditing, onSubmit, formValues, image} = useEdit(data);

	const isLoading = some([isFetching, isEditing, isDeleting]);

	return (
		<PageForm
			deleteButton
			formValues={formValues}
			deleteAction={onDelete}
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<EditImageField data={image} />
				<EditFormDetails isLoading={isFetching} />
			</PageContent>
		</PageForm>
	);
}

export default EditForm;
