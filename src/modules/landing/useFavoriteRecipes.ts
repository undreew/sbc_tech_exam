import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '@/redux/store';
import {favoriteRecipe} from '@/redux/actions/recipe/favoriteRecipe';

import {useAlert} from '../app/AlertProvider';
import {useRouter} from 'next/router';
import cleanDeep from 'clean-deep';

function useFavoriteRecipes(
	callback: (queries?: AnyObject<string>) => Promise<void>
) {
	const router = useRouter();
	const {alertByError, alertBySuccess} = useAlert();
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector(
		(state: RootState) => state.recipe.favoriteRecipe
	);
	const {isLoading, success, error} = recipeState;

	const {query} = router;
	const {order, order_by, filter_by_favorites} = query;
	const queries = cleanDeep({
		order: order as string,
		order_by: order_by as string,
		filter_by_favorites: filter_by_favorites as string,
	});

	async function onSubmit(id: string) {
		await dispatch(favoriteRecipe(id));
		if (callback) callback(queries);
	}

	useEffect(() => {
		if (!!success) {
			return alertBySuccess('Successfully added recipe to favorites.');
		}
		if (!!error) {
			return alertByError(error);
		}
	}, [success]);

	return {
		isLoading,
		onSubmit,
	};
}

export default useFavoriteRecipes;
