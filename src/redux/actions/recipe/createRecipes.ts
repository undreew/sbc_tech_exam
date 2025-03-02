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
		} = payload;

		const recipe: RecipesItem = {
			title,
			description,
			name,
			date_added,
			image: 'dwa',
			id: uuidv4(),
			favorites: false,
			ingredients,
			instructions,
			email_address,
		};

		return new Promise<RecipesItem>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipes', {
					method: 'POST',
					body: JSON.stringify(recipe),
					headers: {
						'Content-Type': 'application/json',
					},
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
