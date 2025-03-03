import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/redux/store';
import {favoriteRecipe} from '@/redux/actions/recipe/favoriteRecipe';

function useFavoriteRecipes(callback: () => void) {
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector(
		(state: RootState) => state.recipe.favoriteRecipe
	);
	const {isLoading, success, error} = recipeState;

	async function onSubmit(id: string) {
		await dispatch(favoriteRecipe(id));
		if (callback) callback();
	}

	return {
		isLoading,
		onSubmit,
	};
}

export default useFavoriteRecipes;
