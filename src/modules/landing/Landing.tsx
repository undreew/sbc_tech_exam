import React from 'react';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import {PageContainer, PageContent} from '@/components/page';

// create components for recipe listing and filters
function Landing() {
	return (
		<PageContainer>
			<LandingActions />

			<PageContent>
				<LandingFilters />
				<LandingList />
			</PageContent>
		</PageContainer>
	);
}

export default Landing;
