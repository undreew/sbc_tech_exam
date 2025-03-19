import React from 'react';
import {PageContainer, PageTitle} from '@/components/page';

import EditForm from './EditForm';
import EditBreadcrumbs from './EditBreadcrumbs';

function Edit() {
	return (
		<PageContainer>
			<EditBreadcrumbs />
			<PageTitle title='Edit a Recipe' />
			<EditForm />
		</PageContainer>
	);
}

export default Edit;
