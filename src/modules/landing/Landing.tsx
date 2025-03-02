import React from 'react';

import {PageContainer, PageContent} from '@/components/page';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import useGetRecipes from './useGetRecipes';

const HomePage: React.FC = () => {
	const getRecipesProps = useGetRecipes();

	return (
		<PageContainer>
			<LandingActions isLoading={getRecipesProps.isLoading} />

			<PageContent>
				<LandingFilters isLoading={getRecipesProps.isLoading} />
				<LandingList {...getRecipesProps} />
			</PageContent>
		</PageContainer>
	);
};

export default HomePage;
