import React from 'react';

import useCreate from './useCreate';

import {RecipePayload} from '@/models/recipe';
import {PageContent, PageForm} from '@/components/page';

import CreateImageField from './CreateImageField';
import CreateFormDetails from './CreateFormDetails';

import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/redux/store';
import {createRecipe} from '@/redux/actions/recipe/createRecipes';

function CreateForm() {
	const {isLoading, formValues} = useCreate();
	const dispatch = useDispatch<AppDispatch>();

	async function onSubmit(data: RecipePayload) {
		await dispatch(createRecipe(data));
	}

	return (
		<PageForm
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<CreateImageField />
				<CreateFormDetails formValues={formValues} />
			</PageContent>
		</PageForm>
	);
}

export default CreateForm;
