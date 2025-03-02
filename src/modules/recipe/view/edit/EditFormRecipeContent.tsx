import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {CardContent, Divider, TextField} from '@mui/material';

import {FormsField} from '@/components/forms';
import {RecipePayload} from '@/models/recipe';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	isLoading: boolean;
}

function EditFormRecipeContent(props: Props) {
	const {isLoading, formValues} = props;

	const {
		register,
		formState: {errors},
	} = formValues;

	return (
		<>
			<CardContent>
				<FormsField
					title='Ingredients'
					helperText='List out the ingredients for your recipe.'
				>
					<TextField
						type='text'
						{...register('ingredients')}
						placeholder='Ingredients'
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.ingredients}
						helperText={errors.ingredients?.message}
						disabled={isLoading}
						required
						multiline
						minRows={5}
						maxRows={5}
					/>
				</FormsField>
			</CardContent>
			<Divider />

			<CardContent>
				<FormsField
					title='Instructions'
					helperText='Give step-by-step instructions for preparing your recipe.'
				>
					<TextField
						type='text'
						{...register('instructions')}
						placeholder='instructions'
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.ingredients}
						helperText={errors.ingredients?.message}
						disabled={isLoading}
						required
						multiline
						minRows={5}
						maxRows={5}
					/>
				</FormsField>
			</CardContent>
			<Divider />
		</>
	);
}

export default EditFormRecipeContent;
