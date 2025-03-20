import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/redux/store';
import deleteRecipe from '@/redux/actions/recipe/deleteRecipe';
import {RecipesItem} from '@/models/recipe';
import {useRouter} from 'next/router';
import {ROUTES} from '@/constants/routes';
import {useAlert} from '@/modules/app/AlertProvider';

function useDeleteItem(data: RecipesItem) {
	const router = useRouter();
	const {alertByError} = useAlert();
	const dispatch = useDispatch<AppDispatch>();
	const recipeState = useSelector(
		(state: RootState) => state.recipe.deleteRecipe
	);
	const {isLoading, success, error} = recipeState;

	async function onDelete() {
		dispatch(deleteRecipe(data?.id));
	}

	useEffect(() => {
		if (!!success) {
			router.push(ROUTES.LANDING.INDEX);
		}
		if (!!error) {
			alertByError(error);
		}
	}, [success, error]);

	return {
		isLoading,
		onDelete,
	};
}

export default useDeleteItem;
