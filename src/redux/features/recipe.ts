import {Recipes, RecipesItem} from '@/models/recipe';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getRecipes} from '../actions/recipe/getRecipes';
import {createRecipe} from '../actions/recipe/createRecipes';

interface IRecipe {
	// global state
	data: Recipes;

	getRecipes: {
		isLoading: boolean;
		succes: boolean | null;
		error: string | null | undefined;
	};

	createRecipes: {
		isLoading: boolean;
		success: boolean | null;
		error: string | null | undefined;
	};
}

const initialState: IRecipe = {
	data: [],
	getRecipes: {
		isLoading: false,
		succes: null,
		error: null,
	},
	createRecipes: {
		isLoading: false,
		success: null,
		error: null,
	},
};

const recipeSlice = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
		getRecipe: (state) => {
			console.log(state);
		},
		resetGetRecipesState: (state) => {
			state.getRecipes = {isLoading: false, succes: null, error: null};
		},
		resetCreateRecipesState: (state) => {
			state.createRecipes = {isLoading: false, success: null, error: null};
		},
	},
	// put reducers in another folder/files
	extraReducers: (builder) => {
		builder
			// get recipes
			.addCase(getRecipes.pending, (state) => {
				const {getRecipes} = state;

				getRecipes.isLoading = true;
				getRecipes.succes = null;
				getRecipes.error = null;
			})
			.addCase(
				getRecipes.fulfilled,
				(state, action: PayloadAction<Recipes>) => {
					const {getRecipes} = state;

					getRecipes.succes = true;
					getRecipes.error = null;
					getRecipes.isLoading = false;
					state.data = action.payload;
				}
			)
			.addCase(getRecipes.rejected, (state, action) => {
				const {getRecipes} = state;

				getRecipes.error = action.error.message;
				getRecipes.isLoading = false;
				getRecipes.succes = null;
			})
			// create recipe
			.addCase(createRecipe.pending, (state) => {
				const {createRecipes} = state;

				createRecipes.isLoading = true;
				createRecipes.success = null;
				createRecipes.error = null;
			})
			.addCase(
				createRecipe.fulfilled,
				(state, action: PayloadAction<RecipesItem>) => {
					const {createRecipes, data} = state;

					createRecipes.error = null;
					createRecipes.success = true;
					createRecipes.isLoading = false;
					data.push(action.payload); // could be useful for stateful updating of a listing without reloading
				}
			)
			.addCase(createRecipe.rejected, (state, action) => {
				// formatting of error shoould happen here??
				const {createRecipes} = state;

				createRecipes.success = null;
				createRecipes.isLoading = false;
				createRecipes.error = action.error.message;
			});
	},
});

export const {resetGetRecipesState, resetCreateRecipesState} =
	recipeSlice.actions;

export default recipeSlice.reducer;
