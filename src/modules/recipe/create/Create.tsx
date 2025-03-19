import React from 'react';
import {PageContainer, PageTitle} from '@/components/page';

import CreateForms from './CreateForms';
import CreateBreadcrumbs from './CreateBreadcrumbs';

function Create() {
	return (
		<PageContainer>
			<CreateBreadcrumbs />
			<PageTitle title='Create a Recipe' />
			<CreateForms />
		</PageContainer>
	);
}

export default Create;
