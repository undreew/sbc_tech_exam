import React, {Fragment} from 'react';
import {UseFormReturn} from 'react-hook-form';

import {FormsField} from '@/components/forms';
import {RecipeCreate} from '@/models/recipe';
import {Cancel, CheckCircle} from '@mui/icons-material';

import {Box, CardContent, Divider} from '@mui/material';
import {TextField, TextFieldProps} from '@mui/material';

import {map} from 'lodash';

interface Props {
	formValues: UseFormReturn<RecipeCreate>;
}

function CreateFormUserInfo(props: Props) {
	const {formValues} = props;
	const {
		register,
		formState: {errors, isSubmitting, isValid},
	} = formValues;

	function renderField(
		field: TextFieldProps & {
			title: string;
			helperText: string;
		}
	) {
		const {name, title, helperText, label} = field;

		const fieldErrors = errors[name as keyof RecipeCreate];

		return (
			<FormsField title={title} helperText={helperText}>
				<TextField
					type='text'
					size='small'
					margin='normal'
					key={name}
					label={label}
					error={!!fieldErrors}
					disabled={isSubmitting}
					helperText={fieldErrors?.message}
					{...register(name as keyof RecipeCreate)}
					InputProps={{
						endAdornment: (
							<Box ml={2} display='flex' alignItems='center'>
								{!!fieldErrors ? (
									<Cancel color='error' />
								) : (
									isValid && <CheckCircle color='success' />
								)}
							</Box>
						),
					}}
					fullWidth
				/>
			</FormsField>
		);
	}

	const fields = [
		{
			required: true,
			label: 'Your Name',
			title: 'Your Name',
			helperText: 'First Name, Middle Initial, Last Name.',
			name: 'name',
		},
		{
			required: true,
			label: 'Email',
			title: 'Email Address',
			helperText: 'Enter an active email address.',
			name: 'email_address',
		},
	];

	return (
		<>
			{map(fields, (field, index) => {
				return (
					<Fragment key={index}>
						<CardContent key={index}>{renderField(field)}</CardContent>
						<Divider />
					</Fragment>
				);
			})}
			<input type='hidden' {...register('date_added')} value={Date.now()} />
		</>
	);
}

export default CreateFormUserInfo;
