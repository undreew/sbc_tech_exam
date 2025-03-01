import React from 'react';

import useCreate from './useCreate';

import {RecipeCreate} from '@/models/recipe';
import {PageContent, PageForm} from '@/components/page';

import CreateImageField from './CreateImageField';
import CreateFormDetails from './CreateFormDetails';

function CreateForm() {
	const formValues = useCreate();

	function onSubmit(data: RecipeCreate) {
		console.log(data);
		// dispatch to redux??
	}

	return (
		<PageForm onSubmit={formValues.handleSubmit(onSubmit)}>
			<PageContent>
				<CreateImageField />
				<CreateFormDetails formValues={formValues} />
			</PageContent>
		</PageForm>
	);
}

export default CreateForm;
