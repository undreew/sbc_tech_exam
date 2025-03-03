import React from 'react';
import {Box} from '@mui/material';

interface Props {
	children: Children;
}

function PageContainer(props: Props) {
	const {children} = props;
	return <Box sx={{my: 5}}>{children}</Box>;
}

export default PageContainer;
