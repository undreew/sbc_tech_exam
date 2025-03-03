import React from 'react';
import {Box, Container, Toolbar} from '@mui/material';

import PageHeader from './LayoutHeader';

interface Props {
	children: Children;
}

function Layout(props: Props) {
	const {children} = props;
	return (
		<Box>
			<PageHeader />
			<Toolbar />

			<Container
				component='main'
				maxWidth='lg'
				sx={{p: 3, flexGrow: 1, overflow: 'hidden'}}
			>
				{children}
			</Container>
		</Box>
	);
}

export default Layout;
