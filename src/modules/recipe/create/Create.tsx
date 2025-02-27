import React from 'react';
import {PageContainer, PageContent} from '@/components/page';

import CreateForm from './CreateForm';
import CreateBreadcrumbs from './CreateBreadcrumbs';

function Create() {
	return (
		<PageContainer>
			<CreateBreadcrumbs />
			<CreateForm />
		</PageContainer>
	);
}

export default Create;
