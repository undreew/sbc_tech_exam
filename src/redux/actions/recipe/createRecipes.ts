import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

import {fetcher} from '@/utils/fetcher';
import {formatFormData} from '@/utils/forms';

export const createRecipe = createAsyncThunk(
	'recipies/postRecipe',
	async (payload: RecipePayload) => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			const _payload = formatFormData<RecipePayload>(payload);
			try {
				// const {data} = await axios.post('/api/recipes', _payload);
				const {data} = await fetcher('POST', '/api/recipes', _payload);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
