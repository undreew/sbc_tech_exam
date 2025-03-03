import React from 'react';
import {UseFormReturn} from 'react-hook-form';
import {ImageListType} from 'react-images-uploading';

import {Box} from '@mui/material';
import {ImageUpload} from '../images';
import {RecipePayload} from '@/models/recipe';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	data?: ImageListType;
	resetValue: boolean;
}

function InputImage(props: Props) {
	const {formValues, data, resetValue} = props;

	function handleChange(image: File | undefined) {
		console.log(image);
		formValues.setValue('image', image);
	}

	return (
		<Box>
			<ImageUpload
				onChange={handleChange}
				formValues={formValues}
				resetValue={resetValue}
				defaultValue={data as never}
			/>
		</Box>
	);
}

export default InputImage;
