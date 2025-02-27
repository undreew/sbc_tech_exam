import React from 'react';
import {AppBar, Container, Toolbar} from '@mui/material';

function PageHeader() {
	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth='xl'>
				<Toolbar>SBC</Toolbar>
			</Container>
		</AppBar>
	);
}

export default PageHeader;
