import React from 'react';
import {Box} from '@mui/material';

interface Props {
	children: React.ReactNode;
}

function DashboardContainer(props: Props) {
	const {children} = props;
	return <Box sx={{my: 5}}>{children}</Box>;
}

export default DashboardContainer;
