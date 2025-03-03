import React from 'react';
import {useSelector} from 'react-redux';
import {UseFormReturn} from 'react-hook-form';

import {RootState} from '@/redux/store';
import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';
import {InputImage} from '@/components/input';

interface Props {
	isLoading: boolean;
	formValues: UseFormReturn<RecipePayload>;
}

function CreateImageField(props: Props) {
	const {formValues} = props;
	const isCreateSuccess = useSelector(
		(state: RootState) => state.recipe.createRecipes.success
	);

	return (
		<PageCard>
			<InputImage formValues={formValues} resetValue={!!isCreateSuccess} />
		</PageCard>
	);
}

export default CreateImageField;
