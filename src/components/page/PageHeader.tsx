import React from 'react';
import {AppBar, Container, Toolbar} from '@mui/material';

function PageHeader() {
	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth={false}>
				<Toolbar>PageHeader</Toolbar>
			</Container>
		</AppBar>
	);
}

export default PageHeader;
