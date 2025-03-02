import {createAsyncThunk} from '@reduxjs/toolkit';

export const favoriteRecipe = createAsyncThunk(
	'',
	(id: string): Promise<void> => {
		return new Promise<void>(async (resolve, reject) => {
			try {
				const res = await fetch('/api/recipeFavorite', {
					method: 'PUT',
					body: JSON.stringify({id}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				const data = await res.json();

				if (!res.ok) throw new Error('Error adding items to favorites.');

				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
