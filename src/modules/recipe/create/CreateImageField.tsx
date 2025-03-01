import {PageCard} from '@/components/page';
import {Card, CardContent, CardMedia} from '@mui/material';
import React from 'react';

function CreateImageField() {
	return (
		<PageCard>
			<CardMedia
				component='img'
				alt='image of a woman'
				src='/images/aphrodite.png'
			/>
		</PageCard>
	);
}

export default CreateImageField;
