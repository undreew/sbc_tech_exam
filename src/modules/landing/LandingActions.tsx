import React from 'react';
import Link from 'next/link';

import {Add} from '@mui/icons-material';
import {Button, Stack} from '@mui/material';

import {ROUTES} from '@/constants/routes';

function LandingActions({isLoading}: {isLoading: boolean}) {
	return (
		<Stack direction='row' justifyContent='flex-end' sx={{mb: 3}}>
			<Button
				size='small'
				variant='contained'
				startIcon={<Add />}
				LinkComponent={Link}
				disabled={isLoading}
				href={ROUTES.RECIPE.CREATE}
			>
				Create Recipe
			</Button>
		</Stack>
	);
}

export default LandingActions;
