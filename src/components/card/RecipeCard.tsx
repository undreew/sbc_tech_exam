import React from 'react';
import {Grid, Stack, Typography} from '@mui/material';
import {Card, CardContent, CardHeader, CardMedia} from '@mui/material';

import {RecipesItem} from '@/models/recipe';
import Link from 'next/link';

const RecipeCard: React.FC<RecipesItem> = (props) => {
	const {id, title, description, author, date_created, image} = props;

	return (
		// <Card sx={{display: 'flex', p: 5}} variant='outlined' elevation={24}>
		// 	<CardMedia
		// 		component='img'
		// 		sx={{width: 400}}
		// 		alt='Live from space album cover'
		// 	/>
		// 	<Stack>
		// 		<CardHeader title={title} />
		// 		<CardContent>
		// 			<Typography>{description}</Typography>
		// 			<Stack direction='row' justifyContent='space-between' mt={2}>
		// 				<Typography variant='subtitle1'>Added by: {author}</Typography>
		// 				<Typography variant='subtitle1'>Date: {date_created}</Typography>
		// 			</Stack>
		// 		</CardContent>
		// 	</Stack>
		// </Card>

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
							Title
						</Typography>
						<Typography variant='body2'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</Typography>
						<Grid
							container
							justifyContent='space-between'
							alignItems='center'
							// style={{marginTop: 8}}
						>
							<Typography variant='caption'>Added by: Johnny</Typography>
							<Typography variant='caption'>Date: March 6, 2024</Typography>
						</Grid>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RecipeCard;
