import React from 'react';
import {Box, Button} from '@mui/material';

interface Props {
	okButton?: boolean;
	onSubmit: () => void;
	isSubmitting: boolean;
	children: React.ReactNode;
}

function PageForm(props: Props) {
	// from console log warning error (defaultProps -> defaultParameters)
	const {onSubmit, children, okButton = true, isSubmitting = false} = props;
	return (
		<Box noValidate component='form' onSubmit={onSubmit}>
			{children}

			{okButton && (
				<Box sx={{display: 'flex', justifyContent: 'end', gap: 2, mt: 3}}>
					<Button
						size='small'
						type='submit'
						variant='contained'
						disabled={isSubmitting}
					>
						Save Changes
					</Button>
				</Box>
			)}
		</Box>
	);
}

export default PageForm;
