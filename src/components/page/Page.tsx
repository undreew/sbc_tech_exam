import React from 'react';
import {Box, Container, Toolbar} from '@mui/material';

import PageHeader from './PageHeader';

interface Props {
	children: React.ReactNode;
}

function Layout(props: Props) {
	const {children} = props;
	return (
		<Box>
			<PageHeader />
			<Toolbar />

			<Container
				component='main'
				maxWidth={false}
				sx={{p: 3, flexGrow: 1, maxWidth: '1680px'}}
			>
				{children}
			</Container>
		</Box>
	);
}

export default Layout;
