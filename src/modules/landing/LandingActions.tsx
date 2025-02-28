import React from 'react';
import Link from 'next/link';
import {theme} from '@/styles/theme';
import {Button, Box} from '@mui/material';
import {Add} from '@mui/icons-material';

function LandingActions() {
	return (
		<Box sx={{display: 'flex', justifyContent: 'end', mb: 5}}>
			<Button
				variant='contained'
				LinkComponent={Link}
				startIcon={<Add />}
				href='/recipe/create'
				sx={{bgcolor: theme.palette.primary.dark}}
			>
				Create
			</Button>
		</Box>
	);
}

export default LandingActions;
