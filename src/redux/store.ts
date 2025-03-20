import {configureStore} from '@reduxjs/toolkit';

import recipeReducer from './features/recipe';
import {NEXT_APP_ENV} from '@/constants/environments';

export const store = configureStore({
	reducer: {
		recipe: recipeReducer,
	},
	devTools: NEXT_APP_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
