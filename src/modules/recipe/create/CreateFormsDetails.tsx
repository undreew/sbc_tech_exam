import React from 'react';
import {PageCard} from '@/components/page';
import CreateFormsUserInfo from './CreateFormsUserInfo';
import CreateFormsRecipeDetails from './CreateFormsRecipeDetails';
import CreateFormsRecipeContent from './CreateFormsRecipeContent';

interface Props {
	isLoading: boolean;
}

const CreateFormsDetails: React.FC<Props> = (props) => {
	return (
		<PageCard>
			<CreateFormsUserInfo {...props} />
			<CreateFormsRecipeDetails {...props} />
			<CreateFormsRecipeContent {...props} />
		</PageCard>
	);
};

export default CreateFormsDetails;
