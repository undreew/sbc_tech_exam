import React from 'react';
import {Box, Button} from '@mui/material';

interface Props {
	okButton?: boolean;
	onSubmit: () => void;
	children: React.ReactNode;
}

function PageForm(props: Props) {
	// from console log warning error (defaultProps -> defaultParameters)
	const {onSubmit, children, okButton = true} = props;
	return (
		<Box noValidate component='form' onSubmit={onSubmit}>
			{children}

			{okButton && (
				<Box sx={{display: 'flex', justifyContent: 'end', gap: 2, mt: 3}}>
					<Button type='submit' variant='contained' size='small'>
						Save Changes
					</Button>
				</Box>
			)}
		</Box>
	);
}

export default PageForm;
