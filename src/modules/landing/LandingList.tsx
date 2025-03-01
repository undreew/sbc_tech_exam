import React, {Fragment} from 'react';
import {Divider, Stack} from '@mui/material';
import {Card, CardContent} from '@mui/material';

import {last} from 'lodash';

import {Recipes} from '@/models/recipe';
import RecipeCard from '@/components/card/RecipeCard';

type LandingProps<D> = {
	data: D;
};

const LandingList: React.FC<LandingProps<Recipes>> = (props) => {
	const {data} = props;
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
