import {Box, Card, CardHeader, CardMedia, Typography} from '@mui/material';
import React from 'react';

function RecipeCard() {
	return (
		<Card sx={{display: 'flex', p: 5}} variant='outlined'>
			<CardMedia
				component='img'
				sx={{width: 400}}
				alt='Live from space album cover'
			/>
			<Box>
				<CardHeader title='Recipe Card' />
				<Typography>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
					dolore perspiciatis fugiat officia iusto aperiam tenetur dolor
					aliquam. Voluptatibus pariatur magni quisquam. In tenetur laudantium
					nemo officia odio suscipit ab.
				</Typography>
			</Box>
		</Card>
	);
}

export default RecipeCard;
