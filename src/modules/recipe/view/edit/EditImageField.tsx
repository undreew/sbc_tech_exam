import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {ImageListType} from 'react-images-uploading';

import {PageCard} from '@/components/page';
import {InputImage} from '@/components/input';
import {RecipePayload} from '@/models/recipe';

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
