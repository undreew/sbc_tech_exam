import React from 'react';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import {PageContainer, PageContent} from '@/components/page';

import {mockData} from '@/constants/mockData';

function Landing() {
	return (
		<PageContainer>
			<LandingActions />

			<PageContent>
				<LandingFilters />
				<LandingList data={mockData} />
			</PageContent>
		</PageContainer>
	);
}

export default Landing;
