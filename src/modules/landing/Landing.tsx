import React from 'react';

import {mockData} from '@/constants/mockData';
import {PageContainer, PageContent} from '@/components/page';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

const HomePage: React.FC = () => {
	return (
		<PageContainer>
			<LandingActions />

			<PageContent>
				<LandingFilters />
				<LandingList data={mockData} />
			</PageContent>
		</PageContainer>
	);
};

export default HomePage;
