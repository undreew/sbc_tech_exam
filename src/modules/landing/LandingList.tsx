import React from 'react';
import {Stack} from '@mui/material';
import {RecipesItem} from '@/models/recipe';
import RecipeCard from '@/components/card/RecipeCard';

type LandingProps<D> = {
	data: D;
};

const LandingList: React.FC<LandingProps<RecipesItem[]>> = (props) => {
	const {data} = props;
	return (
		<Stack
			direction='column'
			gap={2}
			sx={{
				overflowy: 'scroll',
				minHeight: '350px',
			}}
		>
			{data.map((item, index) => {
				return <RecipeCard key={index} {...item} />;
			})}
		</Stack>
	);
};

export default LandingList;
