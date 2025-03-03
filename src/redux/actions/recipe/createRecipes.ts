import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

export const createRecipe = createAsyncThunk(
	'recipies/postRecipe',
	async (payload: RecipePayload) => {
		const {
			name,
			email_address,
			title,
			description,
			ingredients,
			instructions,
			date_added,
			image,
		} = payload;

		const recipe = {
			title,
			description,
			name,
			date_added,
			image,
			id: 0,
			favorites: false,
			ingredients,
			instructions,
			email_address,
		};

		const formData = new FormData();

		for (const key in recipe) {
			if (key === 'image' && recipe.image instanceof File) {
				formData.append(key, recipe.image);
			} else {
				formData.append(key, String(recipe[key as keyof RecipePayload]));
			}
		}

		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipes', {
					method: 'POST',
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
