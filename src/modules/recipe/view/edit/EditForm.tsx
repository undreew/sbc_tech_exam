import React from 'react';

import EditFormDetails from './EditFormDetails';

import {PageContent, PageForm} from '@/components/page';
import useEdit from './useEdit';

function EditForm() {
	const {onSubmit, formValues} = useEdit();

	return (
		<PageForm isSubmitting={false} onSubmit={formValues.handleSubmit(onSubmit)}>
			<PageContent>
				<>Image</>
				<EditFormDetails formValues={formValues} />
			</PageContent>
		</PageForm>
	);
}

export default EditForm;
