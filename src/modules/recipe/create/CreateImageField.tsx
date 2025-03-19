import React from 'react';
import {useSelector} from 'react-redux';
import {UseFormReturn} from 'react-hook-form';

import {RootState} from '@/redux/store';
import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';
import {InputImage} from '@/components/input';

function CreateImageField() {
	const isCreateSuccess = useSelector(
		(state: RootState) => state.recipe.createRecipes.success
	);

	return (
		<PageCard>
			<InputImage resetValue={!!isCreateSuccess} />
		</PageCard>
	);
}

export default CreateImageField;
