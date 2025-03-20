import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

import {fetcher} from '@/utils/fetcher';
import {formatFormData} from '@/utils/forms';

export const editRecipe = createAsyncThunk(
	'recipes/editRecipe',
	(payload: RecipePayload): Promise<RecipesItem> => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			const _payload = formatFormData<RecipePayload>(payload);
			try {
				// const {data} = await axios.put('/api/recipeEdit', _payload);
				const {data} = await fetcher('PUT', '/api/recipeEdit', _payload);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
