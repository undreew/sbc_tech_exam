import React from 'react';
import {PageCard} from '@/components/page';
import CreateFormsUserInfo from './CreateFormsUserInfo';
import CreateFormsRecipeDetails from './CreateFormsRecipeDetails';
import CreateFormsRecipeContent from './CreateFormsRecipeContent';

const CreateFormsDetails: React.FC = () => {
	return (
		<PageCard>
			<CreateFormsUserInfo />
			<CreateFormsRecipeDetails />
			<CreateFormsRecipeContent />
		</PageCard>
	);
};

export default CreateFormsDetails;
