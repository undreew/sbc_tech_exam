import {Recipes, RecipesItem} from '@/models/recipe';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getRecipes} from '../actions/recipe/getRecipes';
import {createRecipe} from '../actions/recipe/createRecipes';
import {getRecipe} from '../actions/recipe/getRecipe';

const initialRecipe = {
	id: 0,
	image: '',
	ingredients: '',
	date_added: 0,
	name: '',
	description: '',
	title: '',
	favorites: false,
	email_address: '',
	instructions: '',
};

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

	getRecipe: {
		data: RecipesItem;
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
	getRecipe: {
		data: initialRecipe,
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
		resetGetRecipeState: (state) => {
			state.getRecipe = {
				data: initialRecipe,
				isLoading: false,
				success: null,
				error: null,
			};
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
			})
			// get recipe by id
			.addCase(getRecipe.pending, (state, action) => {
				const {getRecipe} = state;

				getRecipe.isLoading = true;
				getRecipe.success = null;
				getRecipe.error = null;
			})
			.addCase(
				getRecipe.fulfilled,
				(state, action: PayloadAction<RecipesItem>) => {
					const {getRecipe} = state;

					getRecipe.data = action.payload;
					getRecipe.isLoading = false;
					getRecipe.success = true;
					getRecipe.error = null;
				}
			)
			.addCase(getRecipe.rejected, (state, action) => {
				const {getRecipe} = state;

				getRecipe.error = action.error.message;
				getRecipe.isLoading = false;
				getRecipe.success = null;
			});
	},
});

export const {
	resetGetRecipesState,
	resetCreateRecipesState,
	resetGetRecipeState,
} = recipeSlice.actions;

export default recipeSlice.reducer;
