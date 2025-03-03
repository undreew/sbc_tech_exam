import {ImageUpload} from '@/components/images';
import InputImage from '@/components/input/InputImage';
import {PageCard} from '@/components/page';
import {RecipePayload} from '@/models/recipe';
import {Card, CardContent, CardMedia} from '@mui/material';
import React from 'react';
import {UseFormReturn} from 'react-hook-form';

interface Props {
	isLoading: boolean;
	formValues: UseFormReturn<RecipePayload>;
}

function CreateImageField(props: Props) {
	const {formValues} = props;

	return (
		<PageCard>
			{/* <CardMedia
				component='img'
				alt='image of a woman'
				src='/images/aphrodite.png'
			/> */}

			{/* <InputImage formValues={formValues} /> */}

			<InputImage formValues={formValues} />
		</PageCard>
	);
}

export default CreateImageField;
