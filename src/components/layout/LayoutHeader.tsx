import React from 'react';
import Link from 'next/link';

import {Home} from '@mui/icons-material';
import {Toolbar, Typography} from '@mui/material';
import {AppBar, Box, Container} from '@mui/material';

import {FilterSearch} from '../filters';

function LayoutHeader() {
	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth='lg'>
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography
						href='/'
						variant='h6'
						component={Link}
						sx={{
							color: 'white',
							textDecoration: 'none',
						}}
					>
						<Home />
					</Typography>
					<Box sx={{display: 'flex', gap: 1}}>
						<FilterSearch />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default LayoutHeader;
