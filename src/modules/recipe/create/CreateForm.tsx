import React from 'react';

import useCreate from './useCreate';

import {PageContent, PageForm} from '@/components/page';

import CreateImageField from './CreateImageField';
import CreateFormDetails from './CreateFormDetails';

function CreateForm() {
	const {isLoading, formValues, onSubmit} = useCreate();

	return (
		<PageForm
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<CreateImageField isLoading={isLoading} formValues={formValues} />
				<CreateFormDetails formValues={formValues} />
			</PageContent>
		</PageForm>
	);
}

export default CreateForm;
