import React from 'react';
import {useRouter} from 'next/router';

import dayjs from 'dayjs';

import {Star, StarOutline} from '@mui/icons-material';
import {Card, CardContent, CardMedia} from '@mui/material';
import {Box, Grid, IconButton, Stack, Typography} from '@mui/material';

import {RecipesItem} from '@/models/recipe';
import {ROUTES} from '@/constants/routes';

interface Props {
	onFavorite: (id: string) => void;
}

const RecipeCard: React.FC<RecipesItem & Props> = (props) => {
	const {
		id,
		title,
		description,
		name,
		date_added,
		image,
		favorites,
		onFavorite,
	} = props;

	const router = useRouter();

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
							<IconButton onClick={() => onFavorite(id)}>
								{favorites ? (
									<Star color='warning' />
								) : (
									<StarOutline color='warning' />
								)}
							</IconButton>
						</Box>
						<CardMedia component='img' alt='image of a woman' src={image} />
					</Box>
				</Grid>

				<Grid item xs={8}>
					<CardContent component={Stack} gap={3} flexGrow={1}>
						<Box>
							<Typography
								variant='h5'
								sx={{cursor: 'pointer', width: 'max-content'}}
								onClick={
									() =>
										router.push({
											pathname: ROUTES.RECIPE.VIEW.EDIT,
											query: {id},
										})
									// temp -> can go to view first
								}
							>
								{title}
							</Typography>
						</Box>
						<Typography variant='body2'>{description}</Typography>
						<Grid container justifyContent='space-between' alignItems='center'>
							<Typography variant='caption'>Added by: {name}</Typography>
							<Typography variant='caption'>
								Date: {dayjs(date_added).format('MMMM D, YYYY')}
							</Typography>
						</Grid>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RecipeCard;
