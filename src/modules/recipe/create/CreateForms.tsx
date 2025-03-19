import React from 'react';

import {PageContent, PageForm} from '@/components/page';

import useCreate from './useCreate';
import CreateImageField from './CreateImageField';
import CreateFormsDetails from './CreateFormsDetails';

interface Props {}

const CreateForms: React.FC<Props> = () => {
	const {isLoading, formValues, onSubmit} = useCreate();

	return (
		<PageForm
			formValues={formValues}
			isSubmitting={isLoading}
			onSubmit={formValues.handleSubmit(onSubmit)}
		>
			<PageContent>
				<CreateImageField />
				<CreateFormsDetails isLoading={isLoading} />
			</PageContent>
		</PageForm>
	);
};

export default CreateForms;
