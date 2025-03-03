import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

export const editRecipe = createAsyncThunk(
	'recipes/editRecipe',
	(payload: RecipePayload): Promise<RecipesItem> => {
		const formData = new FormData();

		for (const key in payload) {
			if (key === 'image' && payload.image instanceof File) {
				formData.append(key, payload.image);
			} else {
				formData.append(key, String(payload[key as keyof RecipePayload]));
			}
		}

		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipeEdit', {
					method: 'PUT',
					body: formData,
				});
				const data = await res.json();
				if (!res.ok) throw new Error(data.message);
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
