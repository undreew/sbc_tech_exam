import React from 'react';
import {mockData} from '@/constants/mockData';
import {
	Box,
	Card,
	CardHeader,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import RecipeCard from '@/components/card/RecipeCard';

function LandingList() {
	return (
		<Stack direction='column' gap={2}>
			{mockData.map((item, index) => {
				return <RecipeCard key={index} />;
			})}
		</Stack>
	);
}

export default LandingList;
