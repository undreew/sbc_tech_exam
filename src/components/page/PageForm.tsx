import React from 'react';
import {Box, Button} from '@mui/material';
import {RecipePayload} from '@/models/recipe';
import {FormProvider, UseFormReturn} from 'react-hook-form';

interface Props {
	okButton?: boolean;
	onSubmit: () => void;
	deleteButton?: boolean;
	isSubmitting: boolean;
	children: Children;
	deleteAction?: () => void;
	formValues: UseFormReturn<RecipePayload>;
}

function PageForm(props: Props) {
	// from console log warning error (defaultProps -> defaultParameters)
	const {
		onSubmit,
		children,
		okButton = true,
		isSubmitting = false,
		deleteButton = false,
		deleteAction,
		formValues,
	} = props;
	return (
		<FormProvider {...formValues}>
			<Box noValidate component='form' onSubmit={onSubmit}>
				{children}

				<Box sx={{display: 'flex', justifyContent: 'end', gap: 2, mt: 3}}>
					{deleteButton && (
						<Button
							size='small'
							type='button'
							color='error'
							variant='outlined'
							onClick={deleteAction}
							disabled={isSubmitting}
						>
							Delete
						</Button>
					)}
					{okButton && (
						<Button
							size='small'
							type='submit'
							variant='contained'
							disabled={isSubmitting || formValues.formState.isSubmitting}
						>
							Save Changes
						</Button>
					)}
				</Box>
			</Box>
		</FormProvider>
	);
}

export default PageForm;
