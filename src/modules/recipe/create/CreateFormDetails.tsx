import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';

import CreateFormUserInfo from './CreateFormUserInfo';
import CreateFormRecipeInfo from './CreateFormRecipeInfo';
interface Props {
	formValues: UseFormReturn<RecipePayload>;
}

function CreateFormDetails(props: Props) {
	const {formValues} = props;
	return (
		<PageCard>
			<CreateFormUserInfo formValues={formValues} />
			<CreateFormRecipeInfo formValues={formValues} />
		</PageCard>
	);
}

export default CreateFormDetails;
