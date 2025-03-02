import React from 'react';

import {PageContainer, PageContent} from '@/components/page';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import useGetRecipes from './useGetRecipes';

const HomePage: React.FC = () => {
	const {isLoading, data} = useGetRecipes();

	return (
		<PageContainer>
			<LandingActions />

			<PageContent>
				<LandingFilters />
				<LandingList data={data} isLoading={isLoading} />
			</PageContent>
		</PageContainer>
	);
};

export default HomePage;
