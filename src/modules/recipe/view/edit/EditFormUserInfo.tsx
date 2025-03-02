import React, {Fragment} from 'react';
import {UseFormReturn} from 'react-hook-form';

import {map} from 'lodash';

import {Box, CardContent, Divider} from '@mui/material';
import {TextField, TextFieldProps} from '@mui/material';

import {FormsField} from '@/components/forms';
import {RecipePayload} from '@/models/recipe';
import {Cancel, CheckCircle} from '@mui/icons-material';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
}

function EditFormUserInfo(props: Props) {
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
		const {name, title, helperText, label, ...rest} = field;

		const fieldErrors = errors[name as keyof RecipePayload];

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
					{...register(name as keyof RecipePayload)}
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
					{...rest}
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
			defaultValue: 'James De Jesus', // temp
			inputProps: {readOnly: true},
		},
		{
			required: true,
			label: 'Email',
			title: 'Email',
			helperText: 'Enter an active email address.',
			name: 'email_address',
		},
	];

	return (
		<>
			{map(fields, (field, index) => {
				return (
					<Fragment key={index}>
						<CardContent>{renderField(field)}</CardContent>
						<Divider />
					</Fragment>
				);
			})}
			<input
				type='hidden'
				{...register('date_added')}
				defaultValue={7901831983}
			/>
		</>
	);
}

export default EditFormUserInfo;
