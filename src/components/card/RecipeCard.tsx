import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {Star, StarOutline} from '@mui/icons-material';
import {Card, CardContent, CardMedia} from '@mui/material';

import {RecipesItem} from '@/models/recipe';
import Link from 'next/link';
import dayjs from 'dayjs';

const RecipeCard: React.FC<RecipesItem> = (props) => {
	const {id, title, description, author, date_created, image, favorites} =
		props;

	return (
		<Card variant='outlined'>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Box position='relative'>
						<Box
							position='absolute'
							right={5}
							top={5}
							sx={{cursor: 'pointer', lineHeight: 0}}
						>
							{favorites ? (
								<Star color='warning' />
							) : (
								<StarOutline color='warning' />
							)}
						</Box>
						<CardMedia component='img' alt='image of a woman' src={image} />
					</Box>
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
							<Typography variant='caption'>
								Date: {dayjs(date_created).format('MMMM D, YYYY')}
							</Typography>
						</Grid>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RecipeCard;
