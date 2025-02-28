import React from 'react';

import PageForm from '@/components/page/PageForm';
import {IFormFields} from './useCreate';

function CreateForm() {
	function onSubmit(data: IFormFields) {}

	return <PageForm onSubmit={onSubmit} />;
}

export default CreateForm;
