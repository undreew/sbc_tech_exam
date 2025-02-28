import React from 'react';

import {RecipeCreate} from '@/models/recipe';
import PageForm from '@/components/page/PageForm';

function CreateForm() {
	function onSubmit(data: RecipeCreate) {}

	return <PageForm onSubmit={onSubmit} />;
}

export default CreateForm;
