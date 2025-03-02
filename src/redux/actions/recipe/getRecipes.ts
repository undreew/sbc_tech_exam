import {orderBy} from 'lodash';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Recipes, RecipesItem} from '@/models/recipe';

import qs from 'qs';

interface Query {
	order?: string;
	order_by?: string;
	filter_by_favorites?: string;
}

export const getRecipes = createAsyncThunk(
	'recipes/getRecipes',
	async (queries: Query): Promise<Recipes> => {
		const {order, order_by, filter_by_favorites} = queries;
		// improve query handling, should happend in the api routes

		return new Promise<Recipes>(async (resolve, reject) => {
			try {
				const queryString = qs.stringify(queries); // create as a util
				const res = await fetch(`/api/recipes?${queryString}`, {
					method: 'GET',
				});

				// improve error handling, should have dynamic error message from api routes
				if (!res.ok) throw new Error('Error fetching recipes.');

				let response = await res.json();

				resolve(response);
			} catch (error) {
				setTimeout(() => {
					reject(error);
				}, 1500);
			}
		});
	}
);
