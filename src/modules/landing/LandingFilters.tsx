import React from 'react';
import {useRouter} from 'next/router';
import {Button, CardContent, Stack, Typography} from '@mui/material';

import {FILTER_BY_FAVORITE, SORT_BY} from '@/constants/filter';

import {PageCard} from '@/components/page';
import {FormsField} from '@/components/forms';
import {FilterCheckbox, FilterSelect} from '@/components/filters';

import cleanDeep from 'clean-deep';
import {assign, merge, omit, size} from 'lodash';

function LandingFilters() {
	const router = useRouter();

	const {pathname, query} = router;
	const {order, filter_by_favorites} = query;

	function handleChange(option: string | null, key: string) {
		let newQuery = assign({}, query);

		if (option) {
			newQuery = merge(newQuery, {
				[key]: option,
				...(key === 'order' && {order_by: 'title'}),
			});
		} else {
			newQuery = omit(newQuery, ['order_by', key]);
		}

		router.push({pathname, query: cleanDeep(newQuery)});
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
			<CardContent component={Stack} gap={2}>
				<FormsField
					title='Sort By Title'
					helperText='Sort title by ascending or descending'
				>
					<FilterSelect
						options={SORT_BY}
						defaultValue={order}
						onChange={(option) => handleChange(option, 'order')}
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
