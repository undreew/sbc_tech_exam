import React, {Fragment} from 'react';
import {UseFormReturn} from 'react-hook-form';

import {map} from 'lodash';

import {RecipePayload} from '@/models/recipe';
import {FormsField} from '@/components/forms';

import {Box, CardContent, Divider} from '@mui/material';
import {TextField, TextFieldProps} from '@mui/material';
import {Cancel, CheckCircle} from '@mui/icons-material';

interface Props {
	formValues: UseFormReturn<RecipePayload>;
}

function EditFormRecipeInfo(props: Props) {
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
					fullWidth
					{...rest}
				/>
			</FormsField>
		);
	}

	const fields = [
		{
			required: true,
			label: 'Title',
			title: 'Title',
			helperText: 'What is the title of your recipe?',
			name: 'title',
		},
		{
			required: true,
			label: 'Description',
			title: 'Description',
			helperText: 'Give a brief description about your recipe.',
			name: 'description',
			multiline: true,
			minRows: 3,
			maxRows: 3,
		},
		{
			required: true,
			label: 'Ingredients',
			title: 'Ingredients',
			helperText: 'List out the ingredients for your recipe.',
			name: 'ingredients',
			multiline: true,
			minRows: 5,
			maxRows: 5,
		},
		{
			required: true,
			label: 'Instructions',
			title: 'Instructions',
			helperText: 'Give step-by-step instructions for preparing your recipe.',
			name: 'instructions',
			multiline: true,
			minRows: 5,
			maxRows: 5,
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
		</>
	);
}

export default EditFormRecipeInfo;
