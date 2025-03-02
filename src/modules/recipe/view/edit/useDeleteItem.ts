import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/redux/store';
import deleteRecipe from '@/redux/actions/recipe/deleteRecipe';
import {RecipesItem} from '@/models/recipe';
import {useRouter} from 'next/router';
import {ROUTES} from '@/constants/routes';

function useDeleteItem(data: RecipesItem) {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector(
		(state: RootState) => state.recipe.deleteRecipe
	);
	const {isLoading, success} = recipeState;

	async function onDelete() {
		dispatch(deleteRecipe(data.id));
	}

	useEffect(() => {
		if (!!success) {
			router.push(ROUTES.LANDING.INDEX);
		}
	}, [success]);

	return {
		isLoading,
		onDelete,
	};
}

export default useDeleteItem;
