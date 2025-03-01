import React from 'react';
import {useRouter} from 'next/router';
import {Button, CardContent, Typography} from '@mui/material';

import {FILTER_BY_FAVORITE, SORT_BY} from '@/constants/filter';

import {PageCard} from '@/components/page';
import {FormsField} from '@/components/forms';
import {FilterCheckbox, FilterSelect} from '@/components/filters';

import cleanDeep from 'clean-deep';
import {merge, size} from 'lodash';

function LandingFilters() {
	const router = useRouter();

	const {pathname, query} = router;
	const {sort_by, filter_by_favorites} = query;

	function handleChange(option: string | null, key: string) {
		router.push({pathname, query: cleanDeep(merge(query, {[key]: option}))});
	}

	function handleClear() {
		router.push({pathname});
	}

	return (
		<PageCard
			title={
				<Typography component='h3' variant='h6'>
					Filters
				</Typography>
			}
			actions={
				size(query) > 0 && (
					<Button variant='outlined' size='small' onClick={handleClear}>
						Clear Filters
					</Button>
				)
			}
		>
			<CardContent>
				<FormsField
					title='Sort By'
					helperText='Sort by ascending or descending'
				>
					<FilterSelect
						options={SORT_BY}
						defaultValue={sort_by}
						onChange={(option) => handleChange(option, 'sort_by')}
					/>
				</FormsField>

				<FormsField title='Filter by Favorites' helperText='Favorites?'>
					<FilterCheckbox
						options={FILTER_BY_FAVORITE}
						defaultValue={filter_by_favorites}
						onChange={(filter) => handleChange(filter, 'filter_by_favorites')}
					/>
				</FormsField>
			</CardContent>
		</PageCard>
	);
}

export default LandingFilters;
