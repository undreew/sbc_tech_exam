import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';

import EditFormUserInfo from './EditFormUserInfo';
import EditFormRecipeDetails from './EditFormRecipeDetails';
import EditFormRecipeContent from './EditFormRecipeContent';

interface Props {
	isLoading: boolean;
	formValues: UseFormReturn<RecipePayload>;
}

function EditFormDetails(props: Props) {
	return (
		<PageCard>
			<EditFormUserInfo {...props} />
			<EditFormRecipeDetails {...props} />
			<EditFormRecipeContent {...props} />
		</PageCard>
	);
}

export default EditFormDetails;
