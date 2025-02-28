import React from 'react';
import {AppBar, Container, Toolbar} from '@mui/material';

function LayoutHeader() {
	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth='lg'>
				<Toolbar />
			</Container>
		</AppBar>
	);
}

export default LayoutHeader;
