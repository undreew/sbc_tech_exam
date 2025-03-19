import React from 'react';
import {useFormContext} from 'react-hook-form';
import {ImageListType} from 'react-images-uploading';

import {Box} from '@mui/material';
import {ImageUpload} from '../images';
import {RecipePayload} from '@/models/recipe';

interface Props {
	data?: ImageListType;
	resetValue?: boolean;
}

function InputImage(props: Props) {
	const {data, resetValue} = props;
	const {register, setValue} = useFormContext<RecipePayload>();

	function handleChange(image: File | undefined) {
		setValue('image', image);
	}

	return (
		<Box>
			<ImageUpload
				onChange={handleChange}
				resetValue={resetValue}
				register={register('image')}
				defaultValue={data as never}
			/>
		</Box>
	);
}

export default InputImage;
