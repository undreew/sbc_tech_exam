import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {CardContent, Divider, TextField} from '@mui/material';

import {FormsField} from '@/components/forms';
import {RecipePayload} from '@/models/recipe';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	isLoading: boolean;
}

function EditFormRecipeDetails(props: Props) {
	const {isLoading, formValues} = props;

	const {
		register,
		formState: {errors},
	} = formValues;

	return (
		<>
			<CardContent>
				<FormsField
					title='Title'
					helperText='What is the title of your recipe?'
				>
					<TextField
						type='text'
						{...register('title')}
						placeholder='Title '
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.title}
						helperText={errors.title?.message}
						disabled={isLoading}
						inputProps={{readOnly: true}}
						required
					/>
				</FormsField>
			</CardContent>

			<Divider />

			<CardContent>
				<FormsField
					title='Description'
					helperText='Give a brief description about your recipe.'
				>
					<TextField
						type='text'
						{...register('description')}
						placeholder='Description'
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.description}
						helperText={errors.description?.message}
						disabled={isLoading}
						required
						multiline
						minRows={3}
						maxRows={3}
					/>
				</FormsField>
			</CardContent>

			<Divider />
		</>
	);
}

export default EditFormRecipeDetails;
