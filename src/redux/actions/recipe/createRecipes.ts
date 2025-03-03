import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipePayload, RecipesItem} from '@/models/recipe';

import {v4 as uuidv4} from 'uuid';

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

		// formData.forEach((key, item) => console.log(item + ' : ' + key));

		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipes', {
					method: 'POST',
					body: formData,
				});
				const data = await res.json();
				if (!res.ok) throw new Error('Title must be unique.');
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
