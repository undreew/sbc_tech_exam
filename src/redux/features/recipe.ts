import {Recipes} from '@/models/recipe';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getRecipes} from '../actions/recipe/getRecipes';

interface IRecipe {
	data: Recipes;
	isLoading: boolean;
	error: string | null;
}

const initialState: IRecipe = {
	data: [],
	error: null,
	isLoading: false,
};

const recipeSlice = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
		getRecipe: (state) => {
			console.log(state);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRecipes.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				getRecipes.fulfilled,
				(state, action: PayloadAction<Recipes>) => {
					state.data = action.payload;
					state.isLoading = false;
				}
			)
			.addCase(getRecipes.rejected, (state) => {
				state.isLoading = false;
				state.error = 'Failed to fetch recipes';
			});
	},
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
