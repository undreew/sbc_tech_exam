import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {Box, CardContent, Divider, TextField} from '@mui/material';

import {FormsField} from '@/components/forms';
import {RecipePayload} from '@/models/recipe';
import {Cancel, CheckCircle} from '@mui/icons-material';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	isLoading: boolean;
}

function EditFormRecipeDetails(props: Props) {
	const {isLoading, formValues} = props;

	const {
		register,
		formState: {errors, isValid},
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
						InputProps={{
							endAdornment: (
								<Box ml={2} display='flex' alignItems='center'>
									{!!errors.title ? (
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
						InputProps={{
							endAdornment: (
								<Box ml={2} display='flex' alignItems='center'>
									{!!errors.description ? (
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
		</>
	);
}

export default EditFormRecipeDetails;
