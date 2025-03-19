import React from 'react';

import {PageCard} from '@/components/page';

import CreateFormsUserInfo from '../../create/CreateFormsUserInfo';
import CreateFormsRecipeDetails from '../../create/CreateFormsRecipeDetails';
import CreateFormsRecipeContent from '../../create/CreateFormsRecipeContent';

interface Props {
	isLoading: boolean;
}

const EditFormDetails: React.FC<Props> = (props) => {
	return (
		<PageCard>
			<CreateFormsUserInfo {...props} />
			<CreateFormsRecipeDetails isEdit {...props} />
			<CreateFormsRecipeContent {...props} />
		</PageCard>
	);
};

export default EditFormDetails;
