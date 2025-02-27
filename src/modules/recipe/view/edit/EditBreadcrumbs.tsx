import React from 'react';
import {Box} from '@mui/material';
import {PageBreadcrumbs} from '@/components/page';
import {BreadcrumbItem} from '@/components/page/PageBreadcrumbs';

function EditBreadcrumbs() {
	const items: BreadcrumbItem[] = [
		{
			href: '/',
			children: 'Back',
		},
		{
			children: 'Edit Recipe',
		},
	];

	return (
		<Box sx={{display: 'flex', justifyContent: 'start', mb: 5}}>
			<PageBreadcrumbs items={items} />
		</Box>
	);
}

export default EditBreadcrumbs;
