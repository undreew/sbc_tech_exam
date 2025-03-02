import React from 'react';
import {useRouter} from 'next/router';

import {Home} from '@mui/icons-material';
import {AppBar, Box, Container} from '@mui/material';
import {IconButton, Toolbar, Typography} from '@mui/material';

import {FilterSearch} from '../filters';
import {ROUTES} from '@/constants/routes';

function LayoutHeader() {
	const router = useRouter();

	function handleRedirect() {
		router.push({
			pathname: ROUTES.LANDING.INDEX,
			query: router.query,
		});
	}

	return (
		<AppBar position='fixed' elevation={0}>
			<Container maxWidth='lg'>
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography
						variant='h6'
						sx={{
							color: 'white',
							textDecoration: 'none',
						}}
					>
						<IconButton onClick={handleRedirect}>
							<Home />
						</IconButton>
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
