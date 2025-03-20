import {fetcher} from '@/utils/fetcher';
import {RecipesItem} from '@/models/recipe';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface Query {
	id?: string;
}

export const getRecipe = createAsyncThunk(
	'recipes/getRecipe',
	(queries: Query): Promise<RecipesItem> => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				// const {data} = await axios.get('/api/recipesById', {params: queries});
				const {data} = await fetcher('GET', '/api/recipesById', queries);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
