import React from 'react';
import {Box, FormHelperText, Stack, Typography} from '@mui/material';

interface Props {
	title?: string;
	helperText?: string;
	children: Children;
}

function FormsField(props: Props) {
	const {title, helperText, children, ...rest} = props;
	return (
		<Box component='fieldset' sx={{margin: 0, border: 0, padding: 0}} {...rest}>
			{title && (
				<Typography component='h3' variant='subtitle1' gutterBottom>
					{title}
				</Typography>
			)}
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
			{children}
		</Box>
	);
}

export default FormsField;
