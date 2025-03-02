import React from 'react';
import {Box, Button} from '@mui/material';

interface Props {
	okButton?: boolean;
	onSubmit: () => void;
	deleteButton: boolean;
	isSubmitting: boolean;
	children: React.ReactNode;
	deleteAction: () => void;
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
	} = props;
	return (
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
						disabled={isSubmitting}
					>
						Save Changes
					</Button>
				)}
			</Box>
		</Box>
	);
}

export default PageForm;
