import React from 'react';

import LandingList from './LandingList';
import LandingActions from './LandingActions';
import LandingFilters from './LandingFilters';

import {PageContainer, PageContent} from '@/components/page';

import {mockData} from '@/constants/mockData';
import {Card, CardContent} from '@mui/material';

function Landing() {
	return (
		<PageContainer>
			<LandingActions />

			<PageContent>
				<LandingFilters />
				<Card>
					<CardContent>
						<LandingList data={mockData} />
					</CardContent>
				</Card>
			</PageContent>
		</PageContainer>
	);
}

export default Landing;
