import {fetcher} from '@/utils/fetcher';
import {RecipesItem} from '@/models/recipe';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const favoriteRecipe = createAsyncThunk(
	'recipes/favoriteRecipe',
	(id: string): Promise<RecipesItem> => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				// const {data} = await axios.put('/api/recipeFavorite', {id});
				const {data} = await fetcher('PUT', '/api/recipeFavorite', {id});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
