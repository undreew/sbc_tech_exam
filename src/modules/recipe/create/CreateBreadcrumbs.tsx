import React from 'react';
import {Box} from '@mui/material';
import {PageBreadcrumbs} from '@/components/page';
import {BreadcrumbItem} from '@/components/page/PageBreadcrumbs';

function CreateBreadcrumbs() {
	const items: BreadcrumbItem[] = [
		{
			href: '/',
			children: 'Back',
		},
		{
			children: 'Create Recipe',
		},
	];

	return (
		<Box sx={{display: 'flex', justifyContent: 'start', mb: 3}}>
			<PageBreadcrumbs items={items} />
		</Box>
	);
}

export default CreateBreadcrumbs;
