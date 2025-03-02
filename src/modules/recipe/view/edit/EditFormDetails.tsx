import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';

import EditFormUserInfo from './EditFormUserInfo';
import EditFormRecipeInfo from './EditFormRecipeInfo';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
}

function EditFormDetails(props: Props) {
	const {formValues} = props;
	return (
		<PageCard>
			<EditFormUserInfo formValues={formValues} />
			<EditFormRecipeInfo formValues={formValues} />
		</PageCard>
	);
}

export default EditFormDetails;
