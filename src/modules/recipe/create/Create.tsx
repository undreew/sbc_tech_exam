import React from 'react';
import {PageContainer, PageTitle} from '@/components/page';

import CreateForm from './CreateForm';
import CreateBreadcrumbs from './CreateBreadcrumbs';

function Create() {
	return (
		<PageContainer>
			<CreateBreadcrumbs />
			<PageTitle title='Create a Recipe' />
			<CreateForm />
		</PageContainer>
	);
}

export default Create;
