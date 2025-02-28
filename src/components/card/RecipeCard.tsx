import React from 'react';
import {Stack, Typography} from '@mui/material';
import {Card, CardContent, CardHeader, CardMedia} from '@mui/material';

import {RecipesItem} from '@/models/recipe';

const RecipeCard: React.FC<RecipesItem> = (props) => {
	const {title, description, author, date_created} = props;

	return (
		<Card sx={{display: 'flex', p: 5}} variant='outlined' elevation={24}>
			<CardMedia
				component='img'
				sx={{width: 400}}
				alt='Live from space album cover'
			/>
			<Stack>
				<CardHeader title={title} />
				<CardContent>
					<Typography>{description}</Typography>
					<Stack direction='row' justifyContent='space-between' mt={2}>
						<Typography variant='subtitle1'>Added by: {author}</Typography>
						<Typography variant='subtitle1'>Date: {date_created}</Typography>
					</Stack>
				</CardContent>
			</Stack>
		</Card>
	);
};

export default RecipeCard;
