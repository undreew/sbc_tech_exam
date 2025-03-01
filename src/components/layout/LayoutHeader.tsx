import React from 'react';
import Link from 'next/link';

import {Home} from '@mui/icons-material';
import {AppBar, Box, Container, Toolbar, Typography} from '@mui/material';

import {FilterSearch} from '../filters';

function LayoutHeader() {
	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth='lg'>
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography
						variant='h6'
						component={Link}
						href='/'
						sx={{
							color: 'white',
							textDecoration: 'none',
						}}
					>
						<Home />
					</Typography>
					<Box sx={{display: 'flex', gap: 1}}>
						{/* <TextField
							size='small'
							variant='outlined'
							placeholder='Search here...'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<Search fontSize='small' color='action' />
									</InputAdornment>
								),
							}}
						/> */}
						<FilterSearch />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default LayoutHeader;
