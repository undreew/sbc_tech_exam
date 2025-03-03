import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {RecipePayload, RecipesItem} from '@/models/recipe';

import {PageCard} from '@/components/page';
import {ImageListType} from 'react-images-uploading';
import {InputImage} from '@/components/input';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	data: ImageListType;
}

function EditImageField(props: Props) {
	const {formValues, data} = props;

	return (
		<PageCard>
			<InputImage data={data} formValues={formValues} />
		</PageCard>
	);
}

export default EditImageField;
