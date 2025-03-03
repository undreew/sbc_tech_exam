import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {Cancel, CheckCircle} from '@mui/icons-material';
import {Box, CardContent, Divider, TextField} from '@mui/material';

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
		formState: {errors, isValid},
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
						InputProps={{
							endAdornment: (
								<Box ml={2} display='flex' alignItems='center'>
									{!!errors.ingredients ? (
										<Cancel color='error' />
									) : (
										isValid && <CheckCircle color='success' />
									)}
								</Box>
							),
						}}
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
						error={!!errors.instructions}
						helperText={errors.instructions?.message}
						disabled={isLoading}
						required
						multiline
						minRows={5}
						maxRows={5}
						InputProps={{
							endAdornment: (
								<Box ml={2} display='flex' alignItems='center'>
									{!!errors.instructions ? (
										<Cancel color='error' />
									) : (
										isValid && <CheckCircle color='success' />
									)}
								</Box>
							),
						}}
					/>
				</FormsField>
			</CardContent>
		</>
	);
}

export default EditFormRecipeContent;
