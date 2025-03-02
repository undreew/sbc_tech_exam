import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '@/redux/store';
import {useAlert} from '@/modules/app/AlertProvider';
import {getRecipe} from '@/redux/actions/recipe/getRecipe';
import {useRouter} from 'next/router';
import {
	resetGetRecipesState,
	resetGetRecipeState,
} from '@/redux/features/recipe';

function useGetEditItem() {
	const {alertByError} = useAlert();
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector((state: RootState) => state.recipe.getRecipe);
	const {isLoading, data} = recipeState;

	const {query} = useRouter();
	const {id} = query;

	async function getData() {
		dispatch(getRecipe({id: id as string}));
	}

	useEffect(() => {
		if (query) {
			getData();
		}
	}, [query]);

	// useEffect(() => {
	// 	dispatch(resetGetRecipeState());
	// }, []);

	return {
		isLoading,
		data,
	};
}

export default useGetEditItem;
