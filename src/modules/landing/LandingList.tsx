import React, {Fragment} from 'react';
import {Card, CardContent} from '@mui/material';
import {Divider, Skeleton, Stack} from '@mui/material';

import {last} from 'lodash';

import {Recipes} from '@/models/recipe';
import RecipeCard from '@/components/card/RecipeCard';

type LandingProps<D> = {
	data: D;
	isLoading: boolean;
};

const LandingList: React.FC<LandingProps<Recipes>> = (props) => {
	const {data, isLoading} = props;

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
		<Card>
			<CardContent component={Stack} gap={3}>
				{data.map((item, index) => {
					return (
						<Fragment key={index}>
							<RecipeCard key={index} {...item} />
							{!(last(data) === item) && <Divider />}
						</Fragment>
					);
				})}
			</CardContent>
		</Card>
	);
};

export default LandingList;
