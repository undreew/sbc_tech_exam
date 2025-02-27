import React from 'react';

import LandingList from './LandingList';
import LandingFilters from './LandingFilters';
import {DashboardContainer, DashboardContent} from '@/components/dashboard';

// create components for recipe listing and filters
function Landing() {
	return (
		<DashboardContainer>
			<DashboardContent>
				<LandingFilters />
				<LandingList />
			</DashboardContent>
		</DashboardContainer>
	);
}

export default Landing;
