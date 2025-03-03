import React, {useState} from 'react';
import {Box, Button} from '@mui/material';
import ImageUploading, {ImageListType} from 'react-images-uploading';
import {CloudUpload} from '@mui/icons-material';
import {UseFormReturn} from 'react-hook-form';
import {RecipePayload} from '@/models/recipe';
import {ImageUpload} from '../images';
import {first} from 'lodash';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
}

function InputImage(props: Props) {
	const {formValues} = props;

	function handleChange(image: File | undefined) {
		console.log(image);
		formValues.setValue('image', image);
	}

	return (
		<Box>
			<ImageUpload onChange={handleChange} formValues={formValues} />
		</Box>
	);
}

export default InputImage;
