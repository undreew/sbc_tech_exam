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
	const {onSubmit, formValues} = useEdit(data);

	return (
		<PageForm
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<>Image</>
				<EditFormDetails isLoading={isLoading} formValues={formValues} />
			</PageContent>
		</PageForm>
	);
}

export default EditForm;
