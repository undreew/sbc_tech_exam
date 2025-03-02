import {createAsyncThunk} from '@reduxjs/toolkit';
import {RecipeCreate, RecipesItem} from '@/models/recipe';

export const createRecipe = createAsyncThunk(
	'recipies/postRecipe',
	async (payload: RecipeCreate) => {
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
			author: name,
			date_created: date_added,
			image: 'dwa',
			id: 9,
			favorites: false,
			ingredients,
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

				setTimeout(() => {
					resolve(data);
				}, 1500);
			} catch (error) {
				setTimeout(() => {
					reject(error);
				}, 1500);
			}
		});
	}
);
