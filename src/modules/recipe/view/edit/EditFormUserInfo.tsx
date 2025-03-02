import React from 'react';
import {UseFormReturn} from 'react-hook-form';

import {FormsField} from '@/components/forms';
import {RecipePayload, RecipesItem} from '@/models/recipe';
import {Box, CardContent, Divider, TextField} from '@mui/material';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
	isLoading: boolean;
}

function EditFormUserInfo(props: Props) {
	const {isLoading, formValues} = props;

	const {
		register,
		formState: {errors},
	} = formValues;

	return (
		<>
			<CardContent>
				<FormsField
					title='Your Name'
					helperText='First Name, Middle Initial, Last Name.'
				>
					<TextField
						type='text'
						{...register('name')}
						placeholder='Name'
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.name}
						helperText={errors.name?.message}
						disabled={isLoading}
						required
					/>
					{/* add an ellipsis to indicate loading */}
				</FormsField>
			</CardContent>

			<Divider />

			<CardContent>
				<FormsField title='Email' helperText='Enter an active email address.'>
					<TextField
						type='text'
						{...register('email_address')}
						placeholder='Email Address'
						size='small'
						margin='normal'
						fullWidth
						error={!!errors.email_address}
						helperText={errors.email_address?.message}
						disabled={isLoading}
						required
					/>
				</FormsField>
			</CardContent>

			<Divider />

			<input type='hidden' {...register('date_added')} />
			<input type='hidden' {...register('id')} />
		</>
	);
}

export default EditFormUserInfo;
