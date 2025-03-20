import {createAsyncThunk} from '@reduxjs/toolkit';
import {Recipes} from '@/models/recipe';

import {fetcher} from '@/utils/fetcher';

interface Query {
	order: string;
	order_by: string;
	filter_by_favorites: string;
}

export const getRecipes = createAsyncThunk(
	'recipes/getRecipes',
	async (queries?: Partial<Query>): Promise<Recipes> => {
		return new Promise<Recipes>(async (resolve, reject) => {
			try {
				// const {data} = await axios.get('/api/recipes', {params: queries});
				const {data} = await fetcher('GET', '/api/recipes', queries);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
