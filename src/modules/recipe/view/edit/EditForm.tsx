import React from 'react';

import EditFormDetails from './EditFormDetails';

import useEdit from './useEdit';
import {PageContent, PageForm} from '@/components/page';
import {RecipesItem} from '@/models/recipe';

interface Props {
	isLoading: boolean;
	data: RecipesItem;
}

function EditForm(props: Props) {
	const {isLoading, data} = props;
	const {isLoading: isEditing, onSubmit, formValues} = useEdit(data);

	return (
		<PageForm
			isSubmitting={isLoading || isEditing}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<>Image</>
				<EditFormDetails
					formValues={formValues}
					isLoading={isLoading || isEditing}
				/>
			</PageContent>
		</PageForm>
	);
}

export default EditForm;
