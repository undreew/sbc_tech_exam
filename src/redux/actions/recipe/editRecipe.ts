import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

export const editRecipe = createAsyncThunk(
	'recipes/editRecipe',
	(formData: RecipePayload): Promise<RecipesItem> => {
		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipes', {
					method: 'PUT',
					body: JSON.stringify(formData),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				const data = await res.json();

				if (!res.ok) throw new Error('Error editing the recipe.');

				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
