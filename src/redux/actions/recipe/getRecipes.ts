import {cloneDeep, orderBy} from 'lodash';

import {Recipes} from '@/models/recipe';
import {mockData} from '@/constants/mockData';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface Query {
	order?: string;
	order_by?: string;
	filter_by_favorites?: string;
}

export const getRecipes = createAsyncThunk(
	'recipes/fetchRecipes',
	async (queries: Query) => {
		const {order, order_by, filter_by_favorites} = queries;

		return new Promise<Recipes>((resolve, reject) => {
			setTimeout(() => {
				let response = cloneDeep(mockData);
				let isFavorite = filter_by_favorites === 'yes' ? true : false;

				if (order && order_by) {
					response = orderBy(response, [order_by], [order as 'asc' | 'desc']);
				}

				if (filter_by_favorites) {
					response = response.filter((i) => i.favorites === isFavorite);
				}

				resolve(response as Recipes);

				// reject('hahahaha mali');
			}, 2000);
		});
	}
);
