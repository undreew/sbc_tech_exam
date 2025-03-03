import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

export const editRecipe = createAsyncThunk(
	'recipes/editRecipe',
	(payload: RecipePayload): Promise<RecipesItem> => {
		const {
			name,
			email_address,
			title,
			description,
			ingredients,
			instructions,
			date_added,
			image,
			id,
			favorites,
		} = payload;

		const formData = new FormData();

		for (const key in payload) {
			if (key === 'image' && payload.image instanceof File) {
				formData.append(key, payload.image);
			} else {
				formData.append(key, String(payload[key as keyof RecipePayload]));
			}
		}

		// formData.forEach((key, item) => console.log(item + ' : ' + key));

		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipeEdit', {
					method: 'PUT',
					body: formData,
					// body: JSON.stringify(formData),
					// headers: {
					// 	'Content-Type': 'application/json',
					// },
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
