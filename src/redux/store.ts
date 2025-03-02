import {configureStore} from '@reduxjs/toolkit';

import recipeReducer from './features/recipe';
import counterReducer from './features/counter-slices';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		recipe: recipeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
