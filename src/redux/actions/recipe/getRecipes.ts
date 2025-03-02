import {orderBy} from 'lodash';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Recipes, RecipesItem} from '@/models/recipe';

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
				const res = await fetch('/api/recipes', {
					method: 'GET',
				});

				// improve error handling, should have dynamic error message from api routes
				if (!res.ok) throw new Error('Error fetching recipes.');

				let response = await res.json();

				let isFavorite = filter_by_favorites === 'yes' ? true : false;

				if (order && order_by) {
					response = orderBy(response, [order_by], [order as 'asc' | 'desc']);
				}

				if (filter_by_favorites) {
					response = response.filter(
						(i: RecipesItem) => i.favorites === isFavorite
					);
				}

				setTimeout(() => {
					resolve(response);
				}, 1500);
			} catch (error) {
				setTimeout(() => {
					reject(error);
				}, 1500);
			}
		});
	}
);
