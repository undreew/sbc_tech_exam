import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Card, CardContent, CardMedia} from '@mui/material';

import {RecipesItem} from '@/models/recipe';
import Link from 'next/link';

const RecipeCard: React.FC<RecipesItem> = (props) => {
	const {id, title, description, author, date_created, image} = props;

	return (
		<Card variant='outlined'>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<CardMedia component='img' alt='image of a woman' src={image} />
				</Grid>

				<Grid item xs={8}>
					<CardContent>
						<Typography
							variant='h5'
							component={Link}
							sx={{color: 'black', textDecoration: 'none'}}
							href={`/recipe/${id}`}
						>
							{title}
						</Typography>
						<Typography variant='body2'>{description}</Typography>
						<Grid container justifyContent='space-between' alignItems='center'>
							<Typography variant='caption'>Added by: {author}</Typography>
							<Typography variant='caption'>Date: {date_created}</Typography>
						</Grid>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RecipeCard;
