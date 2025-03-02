import React, {Fragment} from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {Divider, Skeleton, Stack} from '@mui/material';

import {isEmpty, last} from 'lodash';

import {Recipes} from '@/models/recipe';
import RecipeCard from '@/components/card/RecipeCard';

type LandingProps<D> = {
	data: D;
	isLoading: boolean;
	actions: {[key: string]: (arg: any) => void};
};

const LandingList: React.FC<LandingProps<Recipes>> = (props) => {
	const {data = [], isLoading, actions} = props;
	const {onFavorite} = actions;

	if (isLoading)
		return (
			<Stack gap={3}>
				{/* https://github.com/mui/material-ui/issues/42707 */}
				<Skeleton height={200} animation='wave' variant='rounded' />
				<Skeleton height={200} animation='wave' variant='rounded' />
				<Skeleton height={200} animation='wave' variant='rounded' />
			</Stack>
		);

	return (
		<Card
			sx={{
				padding: 2,
				width: '100%',
				maxHeight: '70vh',
				overflowY: 'auto',
				height: 'max-content',
				scrollbarWidth: 'thin',
			}}
			variant='elevation'
		>
			<CardContent component={Stack} gap={3}>
				{isEmpty(data) && (
					<Typography variant='h3'>No Record Found!</Typography>
				)}

				{data.map((item, index) => {
					return (
						<Fragment key={index}>
							<RecipeCard key={index} onFavorite={onFavorite} {...item} />
							{!(last(data) === item) && <Divider />}
						</Fragment>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default LandingList;
