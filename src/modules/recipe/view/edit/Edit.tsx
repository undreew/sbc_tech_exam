import React from 'react';
import {PageContainer} from '@/components/page';

import EditBreadcrumbs from './EditBreadcrumbs';
import EditForm from './EditForm';

function Edit() {
	return (
		<PageContainer>
			<EditBreadcrumbs />
			<EditForm />
		</PageContainer>
	);
}

export default Edit;
