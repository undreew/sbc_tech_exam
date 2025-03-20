import {fetcher} from '@/utils/fetcher';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const deleteRecipe = createAsyncThunk(
	'recipes/deleteRecipe',
	(id: string): Promise<void> => {
		return new Promise<void>(async (resolve, reject) => {
			try {
				// const {data} = await axios.delete('/api/recipeDelete', {data: {id}});
				const {data} = await fetcher('DELETE', '/api/recipeDelete', {id});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);

export default deleteRecipe;
