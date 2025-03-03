import {RecipesItem} from '@/models/recipe';
import {createAsyncThunk} from '@reduxjs/toolkit';

import qs from 'qs';

interface Query {
	id?: string;
}

export const getRecipe = createAsyncThunk(
	'recipes/getRecipe',
	(queries: Query): Promise<RecipesItem> => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const queryString = qs.stringify(queries); // create as a util
				const res = await fetch(`/api/recipesById?${queryString}`, {
					method: 'GET',
					headers: {
						'Cache-Control': 'no-cache', // Bypass cache
					},
				});

				if (!res.ok) throw new Error('Error fetching .');

				let response = await res.json();

				resolve(response);
			} catch (error) {
				reject(error);
			}
		});
	}
);
