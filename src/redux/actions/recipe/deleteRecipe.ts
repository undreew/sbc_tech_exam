import {createAsyncThunk} from '@reduxjs/toolkit';

export const deleteRecipe = createAsyncThunk(
	'recipes/deleteRecipe',
	(id: string): Promise<void> => {
		return new Promise<void>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipeDelete', {
					method: 'DELETE',
					body: JSON.stringify({id}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				const data = await res.json();

				if (!res.ok) throw new Error('Error deleting the recipe.');

				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);

export default deleteRecipe;
