import React from 'react';
import {Box, Typography} from '@mui/material';

interface Props {
	title: React.ReactNode;
}

function PageTitle(props: Props) {
	const {title} = props;
	return (
		<Box sx={{my: 3}}>
			<Typography component='h1' variant='h6'>
				{title}
			</Typography>
		</Box>
	);
}

export default PageTitle;
