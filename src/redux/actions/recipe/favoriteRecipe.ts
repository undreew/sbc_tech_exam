import {fetcher} from '@/utils/fetcher';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const favoriteRecipe = createAsyncThunk(
	'',
	(id: string): Promise<void> => {
		return new Promise<void>(async (resolve, reject) => {
			try {
				// const {data} = await axios.put('/api/recipeFavorite', {id});
				const {data} = await fetcher('PUT', '/api/recipeFavorite', {id});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
);
