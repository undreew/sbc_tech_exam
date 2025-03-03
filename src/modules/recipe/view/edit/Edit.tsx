import React from 'react';
import {PageContainer} from '@/components/page';

import EditForm from './EditForm';
import EditBreadcrumbs from './EditBreadcrumbs';

import useGetEditItem from './useGetEditItem';

function Edit() {
	const getItemProps = useGetEditItem();

	return (
		<PageContainer>
			<EditBreadcrumbs />
			<EditForm {...getItemProps} />
		</PageContainer>
	);
}

export default Edit;
